import { about } from "@/config/content";
import { Eyebrow } from "@/components/Decor";
import { Media, type AboutMedia } from "@/components/Media";
import { Reveal } from "@/components/Reveal";
import { mid } from "./ids";
import { MobileContainer } from "./MobileContainer";

export function MobileAbout({ media }: { media: AboutMedia }) {
  return (
    <section id={mid("about")} aria-labelledby="m-about-title" className="py-14">
      <MobileContainer>
        <Reveal y={14}>
          <Eyebrow index="01" className="text-[11px]">
            {about.eyebrow}
          </Eyebrow>
          <h2 id="m-about-title" className="mt-3 text-[clamp(23px,7vw,28px)] font-medium">
            {about.title}
          </h2>
          <p className="mt-4 text-[15px] font-semibold leading-relaxed text-navy">{about.lead}</p>
        </Reveal>
        <Reveal y={16} className="relative mt-6">
          <Media
            media={media}
            radius="28px 96px 28px 96px"
            sizes="(max-width: 640px) 92vw, 600px"
            className="aspect-[4/3] w-full bg-milk-deep shadow-soft"
          />
          <span className="absolute -bottom-3 left-5 rounded-full bg-navy px-3.5 py-1.5 text-[12px] font-semibold text-white shadow-card">
            Каждый день — новое открытие
          </span>
        </Reveal>
        <Reveal y={14}>
          <p className="mt-7 text-[14.5px] leading-relaxed text-muted">{about.text}</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {about.values.map(({ icon: Icon, title }, i) => (
              <li
                key={title}
                className={
                  i === 0
                    ? "inline-flex items-center gap-1.5 rounded-full bg-blue py-1.5 pl-1.5 pr-3 text-[13px] font-bold text-white"
                    : "inline-flex items-center gap-1.5 rounded-full border border-navy/[0.08] bg-white py-1.5 pl-1.5 pr-3 text-[13px] font-bold"
                }
              >
                <span
                  className={
                    i === 0
                      ? "flex h-6 w-6 items-center justify-center rounded-full bg-white/15"
                      : "flex h-6 w-6 items-center justify-center rounded-full bg-pistachio-soft"
                  }
                >
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
