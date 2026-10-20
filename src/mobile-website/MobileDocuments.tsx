import { ArrowUpRight, FileText, FolderOpen, Phone } from "lucide-react";
import { docs } from "@/config/content";
import { documents, site } from "@/config/site";
import { Eyebrow } from "@/components/Decor";
import { Reveal } from "@/components/Reveal";
import { mid } from "./ids";
import { MobileContainer } from "./MobileContainer";

export function MobileDocuments() {
  return (
    <section id={mid("documents")} aria-labelledby="m-documents-title" className="px-2.5">
      <div className="mx-auto max-w-[660px] rounded-[32px] bg-milk-deep py-12">
        <MobileContainer className="px-[14px]">
          <Reveal y={14}>
            <Eyebrow index="06" className="text-[11px]">
              {docs.eyebrow}
            </Eyebrow>
            <h2 id="m-documents-title" className="mt-3 text-[clamp(23px,7vw,28px)] font-medium">
              {docs.title}
            </h2>
          </Reveal>
          <Reveal y={12} className="mt-6">
            {documents.length > 0 ? (
              <ul className="grid gap-2">
                {documents.map((doc) => {
                  const Icon = doc.kind === "pdf" ? FileText : FolderOpen;
                  return (
                    <li key={doc.href}>
                      <a
                        href={doc.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 rounded-[20px_20px_20px_8px] bg-white p-3.5"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-soft text-blue">
                          <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-[14.5px] font-bold leading-snug">{doc.title}</span>
                          <span className="block text-[12px] text-muted">{doc.kind === "pdf" ? "PDF-документ" : "Google Drive"}</span>
                        </span>
                        <ArrowUpRight className="h-[18px] w-[18px] shrink-0 text-navy/35" aria-hidden="true" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <div className="rounded-[26px_26px_26px_10px] border-2 border-dashed border-navy/12 bg-white/60 p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-blue shadow-card">
                    <FileText className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-sans text-[15.5px] font-bold leading-snug tracking-normal">{docs.emptyTitle}</h3>
                </div>
                <p className="mt-3 text-[13.5px] leading-relaxed text-muted">{docs.emptyText}</p>
                <a href={`tel:${site.phone.tel}`} className="mt-4 inline-flex items-center gap-2 text-[14px] font-bold text-blue">
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
