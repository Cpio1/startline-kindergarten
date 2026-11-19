import { ArrowUpRight, Download, Eye, FileText, FolderOpen, Phone } from "lucide-react";
import { docs } from "@/config/content";
import { documentsFolder, site } from "@/config/site";
import { Eyebrow } from "@/components/Decor";
import { docKinds } from "@/components/docKinds";
import { Cloud, Star } from "@/components/Kids";
import { Reveal } from "@/components/Reveal";
import { btn } from "@/components/ui";
import type { DriveDocument } from "@/lib/drive";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

const external = { target: "_blank", rel: "noopener noreferrer" } as const;

export function DesktopDocuments({ documents }: { documents: DriveDocument[] }) {
  const hasFiles = documents.length > 0;
  return (
    <section id="documents" aria-labelledby="documents-title" className="px-5">
      <div className="relative mx-auto max-w-[1340px] overflow-hidden rounded-[56px] bg-sun-soft py-14">
        <Cloud className="drift absolute right-[10%] top-6 h-14 w-24" />
        <Star className="wiggle absolute bottom-8 left-[44%] h-8 w-8" color="#FF9C86" />
        <Container className="grid grid-cols-12 items-center gap-12">
          <Reveal className="col-span-5">
            <Eyebrow index="06">{docs.eyebrow}</Eyebrow>
            <h2 id="documents-title" className="mt-5 text-[36px] font-black xl:text-[40px]">
              {docs.title}
            </h2>
            <p className="mt-4 max-w-[420px] text-[16px] leading-relaxed text-muted">{docs.text}</p>
            <ul className="mt-6 flex gap-2 text-[13px] font-semibold text-navy/70">
              <li className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5">
                <FileText className="h-3.5 w-3.5 text-blue" aria-hidden="true" /> PDF
              </li>
              <li className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5">
                <FolderOpen className="h-3.5 w-3.5 text-blue" aria-hidden="true" /> Google Drive
              </li>
            </ul>
            {hasFiles && (
              <a href={documentsFolder.url} {...external} className={cn(btn.secondary, "mt-6 h-11 px-5 text-[14px]")}>
                <FolderOpen className="h-4 w-4" aria-hidden="true" />
                {docs.allCta}
                <ArrowUpRight className="h-4 w-4 text-navy/50" aria-hidden="true" />
              </a>
            )}
          </Reveal>

          <Reveal className="col-span-7" delay={0.1}>
            {hasFiles ? <FileGrid documents={documents} /> : <FolderCard />}
          </Reveal>
        </Container>
      </div>
    </section>
  );
}

function FileGrid({ documents }: { documents: DriveDocument[] }) {
  return (
    // Capped height keeps the section within a laptop screen; longer lists scroll inside.
    <ul className="grid max-h-[440px] grid-cols-2 gap-4 overflow-y-auto overscroll-contain p-1 [scrollbar-width:thin]">
      {documents.map((doc) => {
        const kind = docKinds[doc.kind];
        const Icon = kind.icon;
        return (
          <li
            key={doc.id}
            className="flex flex-col rounded-[28px_28px_28px_10px] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-card"
          >
            <div className="flex items-start gap-3.5">
              <span className={cn("flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl", kind.tint)}>
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="line-clamp-2 break-words font-sans text-[15px] font-bold leading-snug tracking-normal" title={doc.title}>
                  {doc.title}
                </h3>
                <p className="mt-0.5 text-[12.5px] text-muted">{kind.label}</p>
              </div>
            </div>
            <div className="mt-auto flex gap-2 pt-4">
              <a
                href={doc.viewUrl}
                {...external}
                aria-label={`${docs.view}: ${doc.title}`}
                className="inline-flex h-9 flex-1 items-center justify-center gap-1.5 rounded-full bg-blue px-3 text-[13px] font-extrabold text-white transition hover:bg-blue-deep"
              >
                <Eye className="h-4 w-4" aria-hidden="true" />
                {docs.view}
              </a>
              {doc.downloadUrl && (
                <a
                  href={doc.downloadUrl}
                  {...external}
                  aria-label={`${docs.download}: ${doc.title}`}
                  className="inline-flex h-9 flex-1 items-center justify-center gap-1.5 rounded-full border-2 border-navy/12 px-3 text-[13px] font-extrabold text-navy transition hover:border-navy/25"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  {docs.download}
                </a>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}

function FolderCard() {
  return (
    <div className="relative flex items-center gap-8 overflow-hidden rounded-[40px_40px_40px_12px] border-[3px] border-dashed border-sun bg-white/80 p-9">
      <div className="relative h-[120px] w-[112px] shrink-0" aria-hidden="true">
        <span className="absolute left-6 top-0 h-[96px] w-[76px] rotate-6 rounded-[18px] bg-coral-soft" />
        <span className="absolute left-2 top-2 flex h-[96px] w-[76px] -rotate-3 flex-col gap-2 rounded-[18px] bg-white p-4 shadow-card">
          <FileText className="h-6 w-6 text-blue" />
          <span className="mt-1 h-1.5 w-full rounded bg-navy/10" />
          <span className="h-1.5 w-4/5 rounded bg-navy/10" />
        </span>
        <span className="absolute bottom-0 left-0 flex h-[62px] w-[104px] items-end rounded-[10px_18px_18px_18px] bg-sun p-3 shadow-card">
          <FolderOpen className="h-6 w-6 text-navy/70" />
        </span>
      </div>
      <div className="min-w-0">
        <h3 className="font-sans text-[22px] font-bold tracking-normal">{docs.folderTitle}</h3>
        <p className="mt-2 max-w-[400px] text-[15px] leading-relaxed text-muted">{docs.folderText}</p>
        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
          <a href={documentsFolder.url} {...external} className={cn(btn.primary, "h-12 px-6 text-[15px]")}>
            <FolderOpen className="h-[18px] w-[18px]" aria-hidden="true" />
            {docs.folderCta}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a href={`tel:${site.phone.tel}`} className="inline-flex items-center gap-1.5 text-[14px] font-bold text-navy/70 hover:text-blue">
            <Phone className="h-4 w-4" aria-hidden="true" />
            {site.phone.display}
          </a>
        </div>
      </div>
    </div>
  );
}
