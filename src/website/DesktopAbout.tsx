import { Sparkles } from "lucide-react";
import { about } from "@/config/content";
import { Blob, Eyebrow } from "@/components/Decor";
import { Blocks, Flower, Heart, Star } from "@/components/Kids";
import { Media, type AboutMedia } from "@/components/Media";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

export function DesktopAbout({ media }: { media: AboutMedia }) {
  return (
    <section id="about" aria-labelledby="about-title" className="relative py-24 xl:py-28">
      <Container className="grid grid-cols-12 items-center gap-12 xl:gap-16">
        <Reveal className="relative col-span-6" y={32}>
          <Blob variant={1} className="absolute -right-6 -top-10 h-[260px] w-[290px] text-coral-soft" />
          <Flower className="spin-slow absolute -left-8 -top-8 z-10 h-20 w-20" />
          <Heart className="float-soft absolute -right-4 top-[38%] z-10 h-10 w-11" />
          <Media
            media={media}
            radius="64px 200px 64px 200px"
            sizes="(min-width: 1280px) 560px, 46vw"
            className="relative aspect-[1.08] w-full border-[6px] border-white bg-milk-deep shadow-soft"
          />
          <div className="absolute -bottom-8 left-10 flex max-w-[270px] items-center gap-3 rounded-[26px_26px_26px_8px] bg-coral px-5 py-4 text-white shadow-soft">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-coral-deep">
              <Sparkles className="h-[18px] w-[18px]" aria-hidden="true" />
            </span>
            <span className="text-[15px] font-extrabold leading-snug">Каждый день — новое открытие</span>
          </div>
          <Blocks className="absolute -bottom-16 -right-12 z-10 h-24 w-32" />
        </Reveal>

        <div className="relative col-span-6">
          <Star className="wiggle absolute -top-6 right-10 h-8 w-8" color="#8FCBF5" />
          <Reveal>
            <Eyebrow index="01">{about.eyebrow}</Eyebrow>
            <h2 id="about-title" className="mt-5 text-[40px] font-black xl:text-[44px]">
              {about.title}
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 text-[18px] font-bold leading-relaxed text-navy">{about.lead}</p>
            <p className="mt-4 text-[16.5px] leading-relaxed text-muted">{about.text}</p>
          </Reveal>
          <Reveal delay={0.16}>
            <ul className="mt-9 flex flex-wrap gap-2.5">
              {about.values.map(({ icon: Icon, title, text, tone }) => (
                <li key={title} className="inline-flex items-center gap-2.5 rounded-full border-2 border-white bg-white py-2 pl-2 pr-4 shadow-[0_6px_18px_-14px_rgb(36_52_83/0.5)]">
                  <span className={cn("flex h-8 w-8 items-center justify-center rounded-full", tone)}>
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-[15px] font-extrabold">{title}</span>
                  <span className="text-[14px] text-muted">{text}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
