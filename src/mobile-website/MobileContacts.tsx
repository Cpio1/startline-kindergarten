import { ArrowUpRight, Phone } from "lucide-react";
import { finalCta } from "@/config/content";
import { mapUrl, site } from "@/config/site";
import { contactRows } from "@/components/contacts";
import { Eyebrow, Trajectory } from "@/components/Decor";
import { LogoMark } from "@/components/Logo";
import { MapArt } from "@/components/MapArt";
import { Reveal } from "@/components/Reveal";
import { btn } from "@/components/ui";
import { cn } from "@/lib/cn";
import { mid } from "./ids";
import { MobileContainer } from "./MobileContainer";

export function MobileContacts() {
  return (
    <>
      <section id={mid("contacts")} aria-labelledby="m-contacts-title" className="py-14">
        <MobileContainer>
          <Reveal y={14}>
            <Eyebrow index="07" className="text-[11px]">
              Контакты
            </Eyebrow>
            <h2 id="m-contacts-title" className="mt-3 text-[clamp(23px,7vw,28px)] font-medium">
              Приходите знакомиться
            </h2>
          </Reveal>
          <Reveal y={12}>
            <ul className="mt-6 overflow-hidden rounded-[26px_26px_26px_10px] bg-white shadow-card">
              {contactRows.map(({ key, icon: Icon, label, value, href, external }, i) => {
                const body = (
                  <>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-soft text-blue">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[11px] font-semibold uppercase tracking-[0.1em] text-muted">{label}</span>
                      <span className="block text-[15px] font-bold text-navy">{value}</span>
                    </span>
                    {href && <ArrowUpRight className="h-[18px] w-[18px] shrink-0 text-navy/30" aria-hidden="true" />}
                  </>
                );
                return (
                  <li key={key} className={cn(i > 0 && "border-t border-line")}>
                    {href ? (
                      <a
                        href={href}
                        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="flex items-center gap-3 px-4 py-3.5 active:bg-milk"
                      >
                        {body}
                      </a>
                    ) : (
                      <div className="flex items-center gap-3 px-4 py-3.5">{body}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </Reveal>
          <Reveal y={12} className="relative mt-3 h-[180px] overflow-hidden rounded-[10px_26px_26px_26px] shadow-card">
            <MapArt className="absolute inset-0 h-full w-full" />
            <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-3 rounded-[18px] bg-white/95 p-3 pl-4 backdrop-blur">
              <p className="min-w-0 truncate text-[13px] font-semibold text-navy">{site.address}</p>
              <a href={mapUrl} target="_blank" rel="noopener noreferrer" className={cn(btn.primary, "h-10 shrink-0 px-4 text-[13.5px]")}>
                Открыть в 2GIS
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </MobileContainer>
      </section>

      <section aria-labelledby="m-cta-title" className="px-2.5 pb-2.5">
        <Reveal y={14} className="relative mx-auto max-w-[660px] overflow-hidden rounded-[32px] bg-blue px-5 py-12 text-center text-white">
          <LogoMark className="absolute -right-10 -top-10 h-36 w-36 rotate-12 opacity-[0.12]" />
          <Trajectory
            className="absolute -bottom-4 -left-6 h-[70px] w-[200px] text-pistachio/60"
            d="M4 86C50 46 120 16 214 12"
            viewBox="0 0 220 90"
            dot={false}
          />
          <h2 id="m-cta-title" className="relative mx-auto max-w-[420px] text-[clamp(23px,7.2vw,30px)] font-medium">
            {finalCta.title}
          </h2>
          <p className="relative mx-auto mt-3 max-w-[340px] text-[14px] text-white/75">{finalCta.text}</p>
          <a href={`tel:${site.phone.tel}`} className={cn(btn.lime, "relative mt-6 h-12 w-full max-w-[320px] text-[15px]")}>
            <Phone className="h-4 w-4" aria-hidden="true" />
            Позвонить нам
          </a>
          <p className="relative mt-3 font-heading text-[14px] font-semibold text-white/85">{site.phone.display}</p>
        </Reveal>
      </section>
    </>
  );
}
