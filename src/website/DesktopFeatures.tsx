import { features } from "@/config/content";
import { Eyebrow, Trajectory } from "@/components/Decor";
import { LogoMark } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

/** Bento layout: each card has its own proportions, tone and contour. */
const layout = [
  { span: "col-span-5 row-span-2", radius: "48px 48px 48px 16px", tone: "blue" },
  { span: "col-span-4", radius: "16px 44px 44px 44px", tone: "lime-soft" },
  { span: "col-span-3", radius: "44px 44px 16px 44px", tone: "milk" },
  { span: "col-span-4", radius: "44px 16px 44px 44px", tone: "lime" },
  { span: "col-span-3", radius: "44px 44px 44px 16px", tone: "blue-soft" },
] as const;

const tones = {
  blue: { card: "bg-blue text-white", icon: "bg-white/15 text-white", text: "text-white/75" },
  "lime-soft": { card: "bg-pistachio-soft text-navy", icon: "bg-white text-blue", text: "text-muted" },
  milk: { card: "bg-milk text-navy", icon: "bg-white text-blue", text: "text-muted" },
  lime: { card: "bg-pistachio text-navy", icon: "bg-white/60 text-navy", text: "text-navy/70" },
  "blue-soft": { card: "bg-blue-soft text-navy", icon: "bg-white text-blue", text: "text-muted" },
};

export function DesktopFeatures() {
  return (
    <section id="features" aria-labelledby="features-title" className="px-5">
      <div className="mx-auto max-w-[1340px] rounded-[56px] bg-white py-20 xl:py-24">
        <Container>
          <Reveal className="flex items-end justify-between gap-10">
            <div>
              <Eyebrow index="02">Наши преимущества</Eyebrow>
              <h2 id="features-title" className="mt-5 max-w-[560px] text-[38px] font-medium xl:text-[42px]">
                Всё, что важно для уверенного старта
              </h2>
            </div>
            <p className="max-w-[380px] pb-1.5 text-[16px] text-muted">
              Понятные условия, на которые можно опереться каждый день — с первого дня в детском саду.
            </p>
          </Reveal>

          <div className="mt-12 grid auto-rows-[minmax(200px,auto)] grid-cols-12 gap-4">
            {features.map((feature, i) => {
              const { span, radius, tone } = layout[i];
              const t = tones[tone];
              const Icon = feature.icon;
              const hero = i === 0;
              return (
                <Reveal
                  key={feature.title}
                  as="article"
                  delay={i * 0.06}
                  style={{ borderRadius: radius }}
                  className={cn(
                    "group relative isolate flex flex-col overflow-hidden p-7 transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-soft",
                    span,
                    t.card,
                  )}
                >
                  <span className={cn("flex h-12 w-12 items-center justify-center rounded-2xl", t.icon)}>
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <p
                    className={cn(
                      "mt-auto pt-8 font-heading font-semibold leading-none tracking-tight",
                      hero ? "text-[76px]" : "text-[44px]",
                    )}
                  >
                    {feature.value}
                  </p>
                  <h3 className={cn("mt-4 font-sans font-bold tracking-normal", hero ? "text-[22px]" : "text-[17px]")}>
                    {feature.title}
                  </h3>
                  <p className={cn("mt-2 max-w-[340px] text-[14.5px] leading-relaxed", t.text)}>{feature.text}</p>
                  {hero && (
                    <>
                      <Trajectory
                        className="absolute right-6 top-10 h-[150px] w-[250px] text-pistachio"
                        d="M6 140C60 70 140 24 244 16"
                        viewBox="0 0 250 150"
                      />
                      <LogoMark className="absolute -right-10 -bottom-10 h-44 w-44 opacity-10 transition-transform duration-700 group-hover:rotate-6" />
                    </>
                  )}
                  {tone === "lime" && (
                    <span className="absolute -right-6 -top-6 h-32 w-32 rounded-full border-[14px] border-white/35" aria-hidden="true" />
                  )}
                </Reveal>
              );
            })}
          </div>
        </Container>
      </div>
    </section>
  );
}
