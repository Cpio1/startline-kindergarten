import { ArrowDown, Clock3, Phone } from "lucide-react";
import { hero } from "@/config/content";
import { site } from "@/config/site";
import { Blob, Trajectory } from "@/components/Decor";
import { Balloon, Cloud, Confetti, Rainbow, Squiggle, Star, Sun } from "@/components/Kids";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { btn } from "@/components/ui";
import type { SiteImage } from "@/lib/images";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

/** Keeps the frame close to the photo's own proportions so it is never cropped heavily. */
function frameRatio(image: SiteImage | null) {
  if (!image) return 0.92;
  return Math.min(1.15, Math.max(0.8, image.width / image.height));
}

export function DesktopHero({ image }: { image: SiteImage | null }) {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden pb-24 pt-10 xl:pt-14">
      <Blob variant={2} className="absolute -left-40 -top-32 h-[420px] w-[460px] text-sky-soft" />
      <Confetti className="opacity-90" />
      <Cloud className="drift absolute left-[41%] top-6 h-14 w-24" />
      <Star className="wiggle absolute left-[46%] top-[62%] h-6 w-6" color="#B9A6F2" />
      <Container className="relative grid grid-cols-12 items-center gap-10">
        <div className="col-span-6 xl:pr-4">
          <Reveal>
            <p className="inline-flex items-center gap-3 rounded-full border border-navy/10 bg-white/70 py-1.5 pl-2 pr-4 text-[13px] font-semibold text-navy/80 backdrop-blur">
              <span className="rounded-full bg-sun px-2.5 py-0.5 text-[12.5px] font-extrabold text-navy">Детский сад</span>
              {site.ages.display} · {site.groups} группы
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 id="hero-title" className="mt-6 text-[46px] font-black text-navy xl:text-[54px]">
              <span className="block font-black text-blue">STARTLINE —</span>
              {hero.title}
            </h1>
            <Squiggle className="mt-3 h-4 w-48" color="#FF9C86" />
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-[470px] text-[17px] leading-relaxed text-muted">{hero.subtitle}</p>
          </Reveal>
          <Reveal delay={0.24} className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#contacts" className={cn(btn.primary, "h-[52px] px-7 text-[15px]")}>
              <Phone className="h-4 w-4" aria-hidden="true" />
              Связаться с нами
            </a>
            <a href="#about" className={cn(btn.secondary, "h-[52px] px-7 text-[15px]")}>
              Узнать больше
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
          </Reveal>
          <Reveal delay={0.32}>
            <ul className="mt-11 grid max-w-[520px] grid-cols-2 gap-3">
              {hero.facts.map(({ icon: Icon, value, label, tone }) => (
                <li
                  key={label}
                  className="flex items-center gap-3 rounded-[22px] border-2 border-white bg-white/85 px-4 py-3 shadow-[0_8px_24px_-18px_rgb(36_52_83/0.45)]"
                >
                  <span className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px]", tone)}>
                    <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 leading-tight">
                    <span className="block text-[15px] font-bold text-navy">{value}</span>
                    <span className="block text-[13px] text-muted">{label}</span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="relative col-span-6 flex justify-end">
          <Trajectory
            className="absolute -left-24 -top-6 z-10 h-[150px] w-[300px] text-coral"
            d="M6 140C70 60 170 18 296 14"
            viewBox="0 0 300 150"
          />
          <Reveal delay={0.12} y={32} className="relative w-full" style={{ maxWidth: Math.min(540, Math.round(600 * frameRatio(image))) }}>
            <Blob variant={0} className="absolute -bottom-10 -left-12 h-[300px] w-[330px] text-pistachio/70" />
            <Rainbow className="absolute -left-20 top-[30%] w-44 -rotate-[24deg]" />
            <Sun className="absolute -right-12 -top-12 z-10 h-36 w-36" />
            <Balloon className="float-soft absolute -right-14 bottom-[22%] z-10 h-28 w-14" color="#B9A6F2" />
            <Star className="wiggle absolute -left-6 -top-2 z-10 h-9 w-9" />
            <Photo
              image={image}
              alt="Детский сад STARTLINE"
              priority
              sizes="(min-width: 1280px) 540px, 44vw"
              position={site.heroFocus}
              radius="300px 300px 56px 190px"
              aspect={frameRatio(image)}
              className="relative w-full bg-milk-deep shadow-soft"
            />
            <div className="float-soft absolute -right-6 top-[34%] z-10 flex h-[112px] w-[112px] rotate-6 flex-col items-center justify-center rounded-[38%_62%_55%_45%/50%_45%_55%_50%] bg-pistachio text-navy shadow-card">
              <span className="font-heading text-[40px] font-black leading-none">{site.meals}</span>
              <span className="mt-1 text-center text-[11px] font-bold uppercase leading-tight tracking-wide">
                разовое
                <br />
                питание
              </span>
            </div>
            <div className="absolute -left-10 bottom-[12%] flex items-center gap-3 rounded-[22px] bg-white px-5 py-4 shadow-soft">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sun text-navy">
                <Clock3 className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="leading-tight">
                <span className="block font-heading text-[18px] font-black text-navy">{site.hours.display}</span>
                <span className="text-[12.5px] text-muted">режим работы</span>
              </span>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
