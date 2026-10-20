import { nutrition } from "@/config/content";
import { site } from "@/config/site";
import { Blob, Eyebrow } from "@/components/Decor";
import { mealIcons, mealTones } from "@/components/MealIcons";
import { Star, Wave } from "@/components/Kids";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/Reveal";
import { mid } from "./ids";
import { MobileContainer } from "./MobileContainer";

export function MobileNutrition() {
  return (
    <section id={mid("nutrition")} aria-labelledby="m-nutrition-title" className="relative">
      <Wave fill="#3157D5" />
      <div className="relative overflow-hidden bg-blue py-11 text-white">
        <Star className="wiggle absolute right-6 top-8 h-8 w-8" />
        <Blob variant={2} className="absolute -bottom-24 -right-20 h-[240px] w-[260px] text-blue-deep" />
        <MobileContainer className="relative">
          <Reveal y={14}>
            <Eyebrow index="04" tone="light" className="px-3 py-1 text-[13px]">
              {nutrition.eyebrow}
            </Eyebrow>
            <h2 id="m-nutrition-title" className="mt-3 text-[clamp(24px,7.4vw,30px)] font-black">
              {nutrition.title}
            </h2>
          </Reveal>
          <Reveal y={14} className="mt-6 flex items-center gap-4">
            <span className="font-heading text-[104px] font-black leading-[0.8] text-sun">{site.meals}</span>
            <p className="text-[15px] font-semibold leading-snug text-white">{nutrition.subtitle}</p>
          </Reveal>
          <Reveal y={12}>
            <ul className="mt-7 grid grid-cols-5 gap-2" aria-label="Пять приёмов пищи в день">
              {mealIcons.map((Icon, i) => (
                <li key={i} className={cn("flex aspect-square items-center justify-center rounded-[16px] border-[3px] border-white", mealTones[i])} aria-hidden="true">
                  <Icon className="h-5 w-5" />
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[14px] leading-relaxed text-white/75">{nutrition.text}</p>
          </Reveal>
        </MobileContainer>
      </div>
      <Wave fill="#3157D5" flip />
    </section>
  );
}
