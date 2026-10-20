/**
 * Every fact about the kindergarten lives here — components never hardcode them.
 * Only information confirmed by the kindergarten belongs in this file.
 */
export const site = {
  name: "STARTLINE",
  address: "ул. Ходжанова, 48Г",
  phone: {
    display: "8 801 255 98 99",
    tel: "88012559899",
  },
  instagram: {
    handle: "@startline.sadik",
    url: "https://www.instagram.com/startline.sadik/",
  },
  hours: { opens: "08:00", closes: "18:00", display: "08:00–18:00" },
  groups: 3,
  ages: { from: "1,5", to: "6", display: "от 1,5 до 6 лет" },
  language: "русский",
  meals: 5,

  /**
   * The city is not part of the confirmed address, so the exact 2GIS point is unknown.
   * The site links to an address search instead of pinning a guessed location.
   * When the organization card is known, put its link here and it will be used instead.
   */
  twoGis: {
    searchUrl: `https://2gis.kz/search/${encodeURIComponent("Ходжанова 48Г")}`,
    firmUrl: null as string | null,
  },

  /** Hero photo framing (CSS object-position) — tune it to the real `main-page` shot. */
  heroFocus: "50% 45%",
} as const;

export const mapUrl = site.twoGis.firmUrl ?? site.twoGis.searchUrl;

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const meta = {
  title: "STARTLINE — детский сад: первый шаг к большому будущему",
  description:
    "Детский сад STARTLINE: дети от 1,5 до 6 лет, 3 группы, обучение на русском языке, 5-разовое питание, режим работы 08:00–18:00. ул. Ходжанова, 48Г.",
};

export const nav = [
  { id: "about", label: "О нас" },
  { id: "features", label: "Преимущества" },
  { id: "groups", label: "Группы" },
  { id: "nutrition", label: "Питание" },
  { id: "gallery", label: "Галерея" },
  { id: "documents", label: "Документы" },
  { id: "contacts", label: "Контакты" },
] as const;

export type DocumentItem = {
  title: string;
  /** "pdf" — a file in /public/documents, "drive" — a Google Drive link. */
  kind: "pdf" | "drive";
  href: string;
  note?: string;
};

/**
 * Official documents. Empty until the kindergarten provides them — never add placeholders.
 * Examples:
 *   { title: "Устав", kind: "pdf", href: "/documents/ustav.pdf" }
 *   { title: "Договор", kind: "drive", href: "https://drive.google.com/file/d/…/view" }
 */
export const documents: DocumentItem[] = [];
