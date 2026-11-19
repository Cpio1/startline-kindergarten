import { ArrowUpRight, Download, Eye, FileText, FolderOpen, Phone } from "lucide-react";
import { docs } from "@/config/content";
import { documentsFolder, site } from "@/config/site";
import { Eyebrow } from "@/components/Decor";
import { docKinds } from "@/components/docKinds";
import { Cloud } from "@/components/Kids";
import { Reveal } from "@/components/Reveal";
import type { DriveDocument } from "@/lib/drive";
import { cn } from "@/lib/cn";
import { mid } from "./ids";
import { MobileContainer } from "./MobileContainer";

const external = { target: "_blank", rel: "noopener noreferrer" } as const;

export function MobileDocuments({ documents }: { documents: DriveDocument[] }) {
  return (
    <section id={mid("documents")} aria-labelledby="m-documents-title" className="px-2.5">
      <div className="relative mx-auto max-w-[660px] overflow-hidden rounded-[32px] bg-sun-soft py-12">
        <Cloud className="drift absolute right-3 top-5 h-9 w-14" />
        <MobileContainer className="px-[14px]">
          <Reveal y={14}>
            <Eyebrow index="06" className="px-3 py-1 text-[13px]">
              {docs.eyebrow}
            </Eyebrow>
            <h2 id="m-documents-title" className="mt-3 text-[clamp(23px,7vw,28px)] font-black">
              {docs.title}
            </h2>
          </Reveal>
          <Reveal y={12} className="mt-6">
            {documents.length > 0 ? (
              <>
                <ul className="grid gap-2">
                  {documents.map((doc) => {
                    const kind = docKinds[doc.kind];
                    const Icon = kind.icon;
                    return (
                      <li key={doc.id} className="rounded-[20px_20px_20px_8px] bg-white p-3.5">
                        <div className="flex items-center gap-3">
                          <span className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-xl", kind.tint)}>
                            <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block break-words text-[14.5px] font-bold leading-snug">{doc.title}</span>
                            <span className="block text-[12px] text-muted">{kind.label}</span>
                          </span>
                        </div>
                        <div className="mt-3 flex gap-2">
                          <a
                            href={doc.viewUrl}
                            {...external}
                            aria-label={`${docs.view}: ${doc.title}`}
                            className="inline-flex h-10 flex-1 items-center justify-center gap-1.5 rounded-full bg-blue text-[13.5px] font-extrabold text-white"
                          >
                            <Eye className="h-4 w-4" aria-hidden="true" />
                            {docs.view}
                          </a>
                          {doc.downloadUrl && (
                            <a
                              href={doc.downloadUrl}
                              {...external}
                              aria-label={`${docs.download}: ${doc.title}`}
                              className="inline-flex h-10 flex-1 items-center justify-center gap-1.5 rounded-full border-2 border-navy/12 text-[13.5px] font-extrabold text-navy"
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
                <a href={documentsFolder.url} {...external} className="mt-4 inline-flex items-center gap-2 text-[14px] font-bold text-blue">
                  <FolderOpen className="h-4 w-4" aria-hidden="true" />
                  {docs.allCta}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </>
            ) : (
              <div className="rounded-[26px_26px_26px_10px] border-[3px] border-dashed border-sun bg-white/80 p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-blue shadow-card">
                    <FileText className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-sans text-[15.5px] font-bold leading-snug tracking-normal">{docs.folderTitle}</h3>
                </div>
                <p className="mt-3 text-[13.5px] leading-relaxed text-muted">{docs.folderText}</p>
                <a
                  href={documentsFolder.url}
                  {...external}
                  className="mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-blue text-[15px] font-extrabold text-white shadow-[0_4px_0_#2140a6] transition active:translate-y-1 active:shadow-none"
                >
                  <FolderOpen className="h-[18px] w-[18px]" aria-hidden="true" />
                  {docs.folderCta}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a href={`tel:${site.phone.tel}`} className="mt-3 inline-flex items-center gap-2 text-[14px] font-bold text-blue">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {site.phone.display}
                </a>
              </div>
            )}
          </Reveal>
        </MobileContainer>
      </div>
    </section>
  );
}
