import "server-only";
import { documentsFolder } from "@/config/site";

export type DriveDocKind = "pdf" | "doc" | "sheet" | "slides" | "image" | "folder" | "file";

export type DriveDocument = {
  id: string;
  /** The file name exactly as it is in Google Drive. */
  title: string;
  kind: DriveDocKind;
  viewUrl: string;
  /** Absent for folders and for types that have no public download link. */
  downloadUrl?: string;
};

/** How often the server re-reads the public folder listing (seconds). */
export const DRIVE_REVALIDATE = 3600;

const ENTITIES: Record<string, string> = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " " };

function decode(text: string) {
  return text
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&([a-z]+);/gi, (m, n) => ENTITIES[n.toLowerCase()] ?? m)
    .trim();
}

function describe(id: string, href: string, title: string): Omit<DriveDocument, "id" | "title"> {
  const enc = encodeURIComponent(id);
  if (/\/folders\//.test(href)) {
    return { kind: "folder", viewUrl: `https://drive.google.com/drive/folders/${enc}` };
  }
  const google = href.match(/docs\.google\.com\/(document|spreadsheets|presentation)\//);
  if (google) {
    const [kind, format] =
      google[1] === "document" ? (["doc", "pdf"] as const) : google[1] === "spreadsheets" ? (["sheet", "xlsx"] as const) : (["slides", "pdf"] as const);
    const base = `https://docs.google.com/${google[1]}/d/${enc}`;
    return { kind, viewUrl: href, downloadUrl: `${base}/export?format=${format}` };
  }
  const ext = title.toLowerCase().match(/\.([a-z0-9]+)$/)?.[1] ?? "";
  const kind: DriveDocKind =
    ext === "pdf"
      ? "pdf"
      : ["doc", "docx", "odt", "rtf", "txt"].includes(ext)
        ? "doc"
        : ["xls", "xlsx", "ods", "csv"].includes(ext)
          ? "sheet"
          : ["ppt", "pptx", "odp"].includes(ext)
            ? "slides"
            : ["jpg", "jpeg", "png", "webp", "heic", "gif"].includes(ext)
              ? "image"
              : "file";
  return {
    kind,
    viewUrl: `https://drive.google.com/file/d/${enc}/view`,
    downloadUrl: `https://drive.google.com/uc?export=download&id=${enc}`,
  };
}

/** Parses Google's public "embedded folder view" page. Exported for testing. */
export function parseFolderView(html: string): DriveDocument[] {
  const docs: DriveDocument[] = [];
  for (const chunk of html.split(/<div class="flip-entry"/).slice(1)) {
    const id = chunk.match(/^\s*id="entry-([\w-]+)"/)?.[1];
    const href = chunk.match(/<a [^>]*href="([^"]+)"/)?.[1];
    const rawTitle = chunk.match(/<div class="flip-entry-title">([\s\S]*?)<\/div>/)?.[1];
    if (!id || !href || !rawTitle) continue;
    const title = decode(rawTitle.replace(/<[^>]+>/g, ""));
    if (!title) continue;
    docs.push({ id, title, ...describe(id, decode(href), title) });
  }
  return docs;
}

/**
 * Lists the public folder without an API key, using the same embeddable view Google serves to
 * anyone with the link. Returns [] when the folder is empty, not public, or unreachable — the
 * section then falls back to a single "open the folder" card.
 */
export async function getDriveDocuments(): Promise<DriveDocument[]> {
  try {
    const res = await fetch(`https://drive.google.com/embeddedfolderview?id=${encodeURIComponent(documentsFolder.id)}`, {
      headers: { "Accept-Language": "ru" },
      next: { revalidate: DRIVE_REVALIDATE },
      signal: AbortSignal.timeout(6000),
    });
    if (!res.ok) return [];
    return parseFolderView(await res.text());
  } catch {
    return [];
  }
}
