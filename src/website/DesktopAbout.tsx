import { Sparkles } from "lucide-react";
import { about } from "@/config/content";
import { Blob, Eyebrow, Trajectory } from "@/components/Decor";
import { Media, type AboutMedia } from "@/components/Media";
import { Reveal } from "@/components/Reveal";
import { Container } from "./Container";

export function DesktopAbout({ media }: { media: AboutMedia }) {
  return (
    <section id="about" aria-labelledby="about-title" className="relative py-24 xl:py-28">
      <Container className="grid grid-cols-12 items-center gap-12 xl:gap-16">
        <Reveal className="relative col-span-6" y={32}>
          <Blob variant={1} className="absolute -right-6 -top-10 h-[260px] w-[290px] text-blue-soft" />
          <Media
            media={media}
            radius="64px 200px 64px 200px"
            sizes="(min-width: 1280px) 560px, 46vw"
            className="relative aspect-[1.08] w-full bg-milk-deep shadow-soft"
          />
          <div className="absolute -bottom-8 left-10 flex max-w-[260px] items-center gap-3 rounded-[24px_24px_24px_8px] bg-navy px-5 py-4 text-white shadow-soft">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pistachio text-navy">
              <Sparkles className="h-[18px] w-[18px]" aria-hidden="true" />
            </span>
            <span className="text-[14px] font-semibold leading-snug">Каждый день — новое открытие</span>
          </div>
          <Trajectory
            className="absolute -bottom-14 right-16 h-[110px] w-[220px] text-pistachio"
            d="M6 86C80 104 170 90 214 20"
            viewBox="0 0 220 110"
          />
        </Reveal>

        <div className="col-span-6">
          <Reveal>
            <Eyebrow index="01">{about.eyebrow}</Eyebrow>
            <h2 id="about-title" className="mt-5 text-[38px] font-medium xl:text-[42px]">
              {about.title}
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 text-[18px] font-semibold leading-relaxed text-navy">{about.lead}</p>
            <p className="mt-4 text-[16px] leading-relaxed text-muted">{about.text}</p>
          </Reveal>
          <Reveal delay={0.16}>
            <ul className="mt-9 flex flex-wrap gap-2.5">
              {about.values.map(({ icon: Icon, title, text }, i) => (
                <li
                  key={title}
                  className={
                    i === 0
                      ? "inline-flex items-center gap-2.5 rounded-full bg-blue py-2 pl-2 pr-4 text-white"
                      : "inline-flex items-center gap-2.5 rounded-full border border-navy/[0.08] bg-white py-2 pl-2 pr-4"
                  }
                >
                  <span
                    className={
                      i === 0
                        ? "flex h-8 w-8 items-center justify-center rounded-full bg-white/15"
                        : "flex h-8 w-8 items-center justify-center rounded-full bg-pistachio-soft text-navy"
                    }
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-[14px] font-bold">{title}</span>
                  <span className={i === 0 ? "text-[13.5px] text-white/75" : "text-[13.5px] text-muted"}>{text}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
