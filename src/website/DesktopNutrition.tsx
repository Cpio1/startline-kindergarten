import { nutrition } from "@/config/content";
import { site } from "@/config/site";
import { Blob, Eyebrow, Trajectory } from "@/components/Decor";
import { Star, Sun, Wave } from "@/components/Kids";
import { mealIcons, mealTones } from "@/components/MealIcons";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/Reveal";
import { Container } from "./Container";

/** Positions of the five icons on an arc around the big «5» (percent of the art box). */
const orbit = [
  { left: "6%", top: "58%" },
  { left: "14%", top: "18%" },
  { left: "44%", top: "2%" },
  { left: "76%", top: "16%" },
  { left: "86%", top: "56%" },
];

export function DesktopNutrition() {
  return (
    <section id="nutrition" aria-labelledby="nutrition-title" className="relative">
      <Wave fill="#3157D5" />
      <div className="relative overflow-hidden bg-blue py-20 text-white xl:py-24">
        <Sun className="absolute right-[6%] top-8 h-24 w-24" />
        <Star className="wiggle absolute left-[4%] bottom-12 h-10 w-10" />
        <Blob variant={2} className="absolute -bottom-40 -right-24 h-[420px] w-[460px] text-blue-deep" />
        <Trajectory
          className="absolute left-[38%] top-10 h-[120px] w-[300px] text-white/30"
          d="M6 110C70 40 170 12 294 10"
          viewBox="0 0 300 120"
          dot={false}
        />
        <Container className="relative grid grid-cols-12 items-center gap-10">
          <Reveal className="col-span-6">
            <Eyebrow index="04" tone="light">
              {nutrition.eyebrow}
            </Eyebrow>
            <h2 id="nutrition-title" className="mt-5 text-[40px] font-black xl:text-[44px]">
              {nutrition.title}
            </h2>
            <p className="mt-5 text-[20px] font-extrabold text-sun">{nutrition.subtitle}</p>
            <p className="mt-4 max-w-[440px] text-[16px] leading-relaxed text-white/75">{nutrition.text}</p>
            <ol className="mt-9 flex items-center gap-2" aria-label="Пять приёмов пищи в день">
              {mealIcons.map((_, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white font-heading text-[15px] font-black text-blue">
                    {i + 1}
                  </span>
                  {i < mealIcons.length - 1 && <span className="h-px w-6 bg-white/30" aria-hidden="true" />}
                </li>
              ))}
              <li className="ml-3 text-[14px] font-semibold text-white/80">приёмов пищи в день</li>
            </ol>
          </Reveal>

          <Reveal className="relative col-span-6 mx-auto aspect-[1.15] w-full max-w-[500px]" delay={0.1} y={32}>
            <div className="absolute inset-[16%_14%_6%] rounded-[50%_50%_46%_54%/58%_56%_44%_42%] bg-white/10" aria-hidden="true" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-heading text-[230px] font-black leading-none text-sun drop-shadow-[0_24px_40px_rgb(20_40_120/0.35)] xl:text-[260px]">
                {site.meals}
              </span>
            </div>
            {mealIcons.map((Icon, i) => (
              <span
                key={i}
                className={cn("float-soft absolute flex h-[66px] w-[66px] items-center justify-center rounded-[24px] border-4 border-white shadow-soft", mealTones[i])}
                style={{ ...orbit[i], animationDelay: `${i * -1.3}s` }}
                aria-hidden="true"
              >
                <Icon className="h-6 w-6" />
              </span>
            ))}
          </Reveal>
        </Container>
      </div>
      <Wave fill="#3157D5" flip />
    </section>
  );
}
