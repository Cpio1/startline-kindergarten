import { about } from "@/config/content";
import { Eyebrow } from "@/components/Decor";
import { Flower, Heart } from "@/components/Kids";
import { cn } from "@/lib/cn";
import { Media, type AboutMedia } from "@/components/Media";
import { Reveal } from "@/components/Reveal";
import { mid } from "./ids";
import { MobileContainer } from "./MobileContainer";

export function MobileAbout({ media }: { media: AboutMedia }) {
  return (
    <section id={mid("about")} aria-labelledby="m-about-title" className="py-14">
      <MobileContainer>
        <Reveal y={14}>
          <Eyebrow index="01" className="px-3 py-1 text-[13px]">
            {about.eyebrow}
          </Eyebrow>
          <h2 id="m-about-title" className="mt-3 text-[clamp(23px,7vw,28px)] font-black">
            {about.title}
          </h2>
          <p className="mt-4 text-[15px] font-semibold leading-relaxed text-navy">{about.lead}</p>
        </Reveal>
        <Reveal y={16} className="relative mt-6">
          <Flower className="spin-slow absolute -left-2 -top-5 z-10 h-12 w-12" />
          <Heart className="float-soft absolute -right-1 top-6 z-10 h-7 w-8" />
          <Media
            media={media}
            radius="28px 96px 28px 96px"
            sizes="(max-width: 640px) 92vw, 600px"
            className="aspect-[4/3] w-full border-[5px] border-white bg-milk-deep shadow-soft"
          />
          <span className="absolute -bottom-3 left-5 rounded-full bg-coral px-3.5 py-1.5 text-[13px] font-extrabold text-white shadow-card">
            Каждый день — новое открытие
          </span>
        </Reveal>
        <Reveal y={14}>
          <p className="mt-7 text-[14.5px] leading-relaxed text-muted">{about.text}</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {about.values.map(({ icon: Icon, title, tone }) => (
              <li key={title} className="inline-flex items-center gap-1.5 rounded-full border-2 border-white bg-white py-1 pl-1 pr-3 text-[14px] font-extrabold shadow-[0_6px_16px_-12px_rgb(36_52_83/0.5)]">
                <span className={cn("flex h-7 w-7 items-center justify-center rounded-full", tone)}>
                  <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                {title}
              </li>
            ))}
          </ul>
        </Reveal>
      </MobileContainer>
    </section>
  );
}
