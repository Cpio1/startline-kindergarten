import { ArrowDown, Phone } from "lucide-react";
import { hero } from "@/config/content";
import { site } from "@/config/site";
import { Blob, Trajectory } from "@/components/Decor";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { btn } from "@/components/ui";
import type { SiteImage } from "@/lib/images";
import { cn } from "@/lib/cn";
import { mid } from "./ids";
import { MobileContainer } from "./MobileContainer";

/** Wider than tall on phones, so the photo reads well without eating the whole screen. */
function frameRatio(image: SiteImage | null) {
  if (!image) return 1.12;
  return Math.min(1.3, Math.max(0.95, image.width / image.height));
}

export function MobileHero({ image }: { image: SiteImage | null }) {
  return (
    <section id={mid("top")} aria-labelledby="m-hero-title" className="relative overflow-hidden pb-12 pt-[calc(84px+env(safe-area-inset-top))]">
      <Blob variant={2} className="absolute -right-24 -top-16 h-[220px] w-[240px] text-blue-soft/80" />
      <MobileContainer className="relative">
        <Reveal y={14}>
          <p className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white/75 py-1 pl-1 pr-3 text-[12px] font-semibold text-navy/80">
            <span className="rounded-full bg-pistachio px-2 py-0.5 text-[11px] font-bold text-navy">Детский сад</span>
            {site.ages.display}
          </p>
          <h1 id="m-hero-title" className="mt-4 text-[clamp(27px,8.3vw,36px)] font-medium leading-[1.14]">
            <span className="block font-semibold text-blue">STARTLINE —</span>
            {hero.title}
          </h1>
          <p className="mt-3.5 text-[15px] leading-relaxed text-muted">{hero.subtitle}</p>
        </Reveal>

        <Reveal y={14} delay={0.06} className="mt-6 grid grid-cols-1 gap-2.5 min-[480px]:grid-cols-2">
          <a href={`#${mid("contacts")}`} className={cn(btn.primary, "h-12 px-5 text-[15px]")}>
            <Phone className="h-4 w-4" aria-hidden="true" />
            Связаться с нами
          </a>
          <a href={`#${mid("about")}`} className={cn(btn.secondary, "h-12 px-5 text-[15px]")}>
            Узнать больше
            <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </a>
        </Reveal>

        <Reveal y={18} delay={0.1} className="relative mt-9">
          <Trajectory
            className="absolute -top-7 left-6 z-10 h-[56px] w-[140px] text-blue/45"
            d="M4 52C30 22 70 8 134 6"
            viewBox="0 0 140 56"
          />
          <div className="absolute -bottom-3 -left-4 h-[140px] w-[150px] rounded-[58%_42%_52%_48%/46%_44%_56%_54%] bg-pistachio/70" aria-hidden="true" />
          <Photo
            image={image}
            alt="Детский сад STARTLINE"
            priority
            sizes="(max-width: 640px) 92vw, 600px"
            position={site.heroFocus}
            radius="200px 200px 28px 110px"
            aspect={frameRatio(image)}
            className="relative w-full bg-milk-deep shadow-soft"
          />
          <div className="absolute -right-1 top-5 flex h-[76px] w-[76px] flex-col items-center justify-center rounded-full bg-pistachio text-navy shadow-card">
            <span className="font-heading text-[26px] font-semibold leading-none">{site.meals}</span>
            <span className="mt-0.5 text-center text-[8.5px] font-bold uppercase leading-tight tracking-wide">
              разовое
              <br />
              питание
            </span>
          </div>
        </Reveal>

        <Reveal y={14} delay={0.14}>
          <ul className="relative -mt-8 mx-2 grid grid-cols-2 gap-px overflow-hidden rounded-[22px] bg-[#e4e6ea] shadow-soft">
            {hero.facts.map(({ icon: Icon, value, label }) => (
              <li key={label} className="flex items-center gap-2.5 bg-white px-3 py-3 max-[399px]:px-3.5">
                <span className="hidden h-8 w-8 shrink-0 items-center justify-center rounded-[11px] bg-blue-soft text-blue min-[400px]:flex">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="min-w-0 leading-tight">
                  <span className="block whitespace-nowrap text-[13px] font-bold text-navy">{value}</span>
                  <span className="block text-[11.5px] text-muted">{label}</span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </MobileContainer>
    </section>
  );
}
