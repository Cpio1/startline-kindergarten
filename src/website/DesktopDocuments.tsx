import { ArrowUpRight, FileText, FolderOpen, Phone } from "lucide-react";
import { docs } from "@/config/content";
import { documents, site } from "@/config/site";
import { Eyebrow } from "@/components/Decor";
import { Cloud, Star } from "@/components/Kids";
import { Reveal } from "@/components/Reveal";
import { btn } from "@/components/ui";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

export function DesktopDocuments() {
  return (
    <section id="documents" aria-labelledby="documents-title" className="px-5">
      <div className="relative mx-auto max-w-[1340px] overflow-hidden rounded-[56px] bg-sun-soft py-20">
        <Cloud className="drift absolute right-[10%] top-8 h-14 w-24" />
        <Star className="wiggle absolute bottom-10 left-[44%] h-8 w-8" color="#FF9C86" />
        <Container className="grid grid-cols-12 items-start gap-12">
          <Reveal className="col-span-5">
            <Eyebrow index="06">{docs.eyebrow}</Eyebrow>
            <h2 id="documents-title" className="mt-5 text-[36px] font-black xl:text-[40px]">
              {docs.title}
            </h2>
            <p className="mt-5 max-w-[420px] text-[16px] leading-relaxed text-muted">{docs.text}</p>
            <ul className="mt-7 flex gap-2 text-[13px] font-semibold text-navy/70">
              <li className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5">
                <FileText className="h-3.5 w-3.5 text-blue" aria-hidden="true" /> PDF
              </li>
              <li className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5">
                <FolderOpen className="h-3.5 w-3.5 text-blue" aria-hidden="true" /> Google Drive
              </li>
            </ul>
          </Reveal>

          <Reveal className="col-span-7" delay={0.1}>
            {documents.length > 0 ? (
              <ul className="grid grid-cols-2 gap-4">
                {documents.map((doc) => {
                  const Icon = doc.kind === "pdf" ? FileText : FolderOpen;
                  return (
                    <li key={doc.href}>
                      <a
                        href={doc.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex h-full items-start gap-4 rounded-[28px_28px_28px_10px] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-card"
                      >
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-soft text-blue">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-[15.5px] font-bold leading-snug">{doc.title}</span>
                          <span className="mt-1 block text-[13px] text-muted">
                            {doc.kind === "pdf" ? "PDF-документ" : "Google Drive"}
                            {doc.note ? ` · ${doc.note}` : ""}
                          </span>
                        </span>
                        <ArrowUpRight className="h-5 w-5 shrink-0 text-navy/40 transition group-hover:text-blue" aria-hidden="true" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <div className="relative flex items-center gap-8 overflow-hidden rounded-[40px_40px_40px_12px] border-[3px] border-dashed border-sun bg-white/80 p-9">
                <div className="relative h-[120px] w-[104px] shrink-0" aria-hidden="true">
                  <span className="absolute left-5 top-0 h-[104px] w-[80px] rotate-6 rounded-[18px] bg-coral-soft" />
                  <span className="absolute left-0 top-3 flex h-[104px] w-[80px] -rotate-3 flex-col gap-2 rounded-[18px] bg-white p-4 shadow-card">
                    <FileText className="h-6 w-6 text-blue" />
                    <span className="mt-2 h-1.5 w-full rounded bg-navy/10" />
                    <span className="h-1.5 w-4/5 rounded bg-navy/10" />
                    <span className="h-1.5 w-3/5 rounded bg-navy/10" />
                  </span>
                </div>
                <div>
                  <h3 className="font-sans text-[20px] font-bold tracking-normal">{docs.emptyTitle}</h3>
                  <p className="mt-2 max-w-[400px] text-[15px] leading-relaxed text-muted">{docs.emptyText}</p>
                  <a href={`tel:${site.phone.tel}`} className={cn(btn.secondary, "mt-5 h-11 px-5 text-[14px]")}>
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    {site.phone.display}
                  </a>
                </div>
              </div>
            )}
          </Reveal>
        </Container>
      </div>
    </section>
  );
}
