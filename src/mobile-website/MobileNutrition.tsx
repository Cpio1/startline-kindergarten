import { nutrition } from "@/config/content";
import { site } from "@/config/site";
import { Blob, Eyebrow } from "@/components/Decor";
import { mealIcons } from "@/components/MealIcons";
import { Reveal } from "@/components/Reveal";
import { mid } from "./ids";
import { MobileContainer } from "./MobileContainer";

export function MobileNutrition() {
  return (
    <section id={mid("nutrition")} aria-labelledby="m-nutrition-title" className="px-2.5">
      <div className="relative mx-auto max-w-[660px] overflow-hidden rounded-[32px] bg-blue py-12 text-white">
        <Blob variant={2} className="absolute -bottom-24 -right-20 h-[240px] w-[260px] text-blue-deep" />
        <MobileContainer className="relative px-[14px]">
          <Reveal y={14}>
            <Eyebrow index="04" tone="light" className="text-[11px]">
              {nutrition.eyebrow}
            </Eyebrow>
            <h2 id="m-nutrition-title" className="mt-3 text-[clamp(24px,7.4vw,30px)] font-medium">
              {nutrition.title}
            </h2>
          </Reveal>
          <Reveal y={14} className="mt-6 flex items-center gap-4">
            <span className="font-heading text-[104px] font-semibold leading-[0.8] text-pistachio">{site.meals}</span>
            <p className="text-[15px] font-semibold leading-snug text-white">{nutrition.subtitle}</p>
          </Reveal>
          <Reveal y={12}>
            <ul className="mt-7 grid grid-cols-5 gap-2" aria-label="Пять приёмов пищи в день">
              {mealIcons.map((Icon, i) => (
                <li key={i} className="flex aspect-square items-center justify-center rounded-[16px] bg-white text-blue" aria-hidden="true">
                  <Icon className="h-5 w-5" />
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[14px] leading-relaxed text-white/75">{nutrition.text}</p>
          </Reveal>
        </MobileContainer>
      </div>
    </section>
  );
}
