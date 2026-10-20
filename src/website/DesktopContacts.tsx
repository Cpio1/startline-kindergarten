import { ArrowUpRight, Map, Phone } from "lucide-react";
import { finalCta } from "@/config/content";
import { mapUrl, site } from "@/config/site";
import { contactRows } from "@/components/contacts";
import { Eyebrow, Trajectory } from "@/components/Decor";
import { Balloon, Cloud, Star, Sun } from "@/components/Kids";
import { MapArt } from "@/components/MapArt";
import { Reveal } from "@/components/Reveal";
import { btn } from "@/components/ui";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

export function DesktopContacts() {
  return (
    <>
      <section id="contacts" aria-labelledby="contacts-title" className="py-24 xl:py-28">
        <Container>
          <Reveal>
            <Eyebrow index="07">Контакты</Eyebrow>
            <h2 id="contacts-title" className="mt-5 text-[38px] font-black xl:text-[42px]">
              Приходите знакомиться
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-12 gap-5">
            <Reveal className="col-span-5 rounded-[44px_44px_44px_14px] bg-white p-8 shadow-card">
              <p className="font-heading text-[20px] font-black">{site.name}</p>
              <ul className="mt-6 divide-y divide-line">
                {contactRows.map(({ key, icon: Icon, label, value, href, external, tone }) => {
                  const body = (
                    <>
                      <span className={cn("flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl", tone)}>
                        <Icon className="h-[18px] w-[18px]" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[13.5px] font-bold text-muted">{label}</span>
                        <span className="block text-[16.5px] font-bold text-navy">{value}</span>
                      </span>
                      {href && <ArrowUpRight className="h-5 w-5 text-navy/30 transition group-hover:text-blue" aria-hidden="true" />}
                    </>
                  );
                  return (
                    <li key={key}>
                      {href ? (
                        <a
                          href={href}
                          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                          className="group -mx-3 flex items-center gap-4 rounded-2xl px-3 py-4 transition-colors hover:bg-milk"
                        >
                          {body}
                        </a>
                      ) : (
                        <div className="flex items-center gap-4 py-4">{body}</div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </Reveal>

            <Reveal className="relative col-span-7 min-h-[420px] overflow-hidden rounded-[14px_44px_44px_44px] shadow-card" delay={0.1}>
              <MapArt className="absolute inset-0 h-full w-full" />
              <div className="absolute inset-x-8 bottom-8 flex items-center justify-between gap-6 rounded-[28px] bg-white/95 p-6 shadow-soft backdrop-blur">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-coral text-white">
                    <Map className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[17px] font-bold">{site.address}</p>
                    <p className="text-[14px] text-muted">Маршрут и точка на карте — в 2GIS</p>
                  </div>
                </div>
                <a href={mapUrl} target="_blank" rel="noopener noreferrer" className={cn(btn.primary, "h-12 shrink-0 px-6 text-[14.5px]")}>
                  Открыть в 2GIS
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section aria-labelledby="cta-title" className="px-5 pb-5">
        <Reveal className="relative mx-auto max-w-[1340px] overflow-hidden rounded-[56px] bg-blue py-20 text-center text-white">
          <Trajectory
            className="absolute -left-10 -bottom-6 h-[160px] w-[420px] text-pistachio/70"
            d="M6 154C100 90 240 34 414 24"
            viewBox="0 0 420 160"
            dot={false}
          />
          <Cloud className="drift absolute left-[8%] top-10 h-16 w-28 opacity-95" />
          <Cloud className="drift absolute right-[22%] bottom-8 h-10 w-16 opacity-80" style={{ animationDelay: "-6s" }} />
          <Sun className="absolute -right-6 -top-8 h-40 w-40" />
          <Balloon className="float-soft absolute left-[16%] bottom-6 h-28 w-14" color="#FF9C86" />
          <Balloon className="float-soft absolute left-[21%] bottom-12 h-24 w-12" color="#BFE36D" style={{ animationDelay: "-2s" }} />
          <Balloon className="float-soft absolute right-[12%] bottom-10 h-24 w-12" color="#B9A6F2" style={{ animationDelay: "-4s" }} />
          <Star className="wiggle absolute right-[30%] top-10 h-8 w-8" />
          <Container className="relative">
            <h2 id="cta-title" className="mx-auto max-w-[760px] text-[44px] font-black xl:text-[50px]">
              {finalCta.title}
            </h2>
            <p className="mx-auto mt-5 max-w-[480px] text-[17px] text-white/75">{finalCta.text}</p>
            <div className="mt-9 flex items-center justify-center gap-5">
              <a href={`tel:${site.phone.tel}`} className={cn(btn.lime, "h-14 px-8 text-[16px]")}>
                <Phone className="h-[18px] w-[18px]" aria-hidden="true" />
                Позвонить нам
              </a>
              <a href={`tel:${site.phone.tel}`} className="font-heading text-[18px] font-black text-white/90 underline-offset-4 hover:underline">
                {site.phone.display}
              </a>
            </div>
          </Container>
        </Reveal>
      </section>
    </>
  );
}
