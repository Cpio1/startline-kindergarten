import { features } from "@/config/content";
import { Eyebrow } from "@/components/Decor";
import { Blocks, Cloud, Heart, Rainbow, Star, Sun, Wave } from "@/components/Kids";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

/** Bento layout: every card has its own colour, contour and little figure. */
const layout = [
  { span: "col-span-5 row-span-2", radius: "48px 48px 48px 16px", card: "bg-blue text-white", icon: "bg-white/20 text-white", text: "text-white/80" },
  { span: "col-span-4", radius: "16px 44px 44px 44px", card: "bg-sun-soft text-navy", icon: "bg-sun text-navy", text: "text-muted" },
  { span: "col-span-3", radius: "44px 44px 16px 44px", card: "bg-coral-soft text-navy", icon: "bg-coral text-white", text: "text-muted" },
  { span: "col-span-4", radius: "44px 16px 44px 44px", card: "bg-pistachio text-navy", icon: "bg-white/70 text-navy", text: "text-navy/70" },
  { span: "col-span-3", radius: "44px 44px 44px 16px", card: "bg-sky-soft text-navy", icon: "bg-sky text-navy", text: "text-muted" },
];

function CardFigure({ index }: { index: number }) {
  switch (index) {
    case 0:
      return (
        <>
          <Rainbow className="absolute -right-6 top-8 w-56 opacity-95" />
          <Star className="wiggle absolute right-10 top-[46%] h-9 w-9" />
          <Star className="wiggle absolute right-32 top-[56%] h-5 w-5" color="#BFE36D" style={{ animationDelay: "-2s" }} />
        </>
      );
    case 1:
      return <Sun className="absolute -right-5 -top-5 h-24 w-24" face={false} />;
    case 2:
      return <Blocks className="absolute -right-2 top-3 h-16 w-20" />;
    case 3:
      return <Heart className="float-soft absolute right-6 top-6 h-12 w-14" color="#FFFFFF" />;
    default:
      return <Cloud className="drift absolute -right-4 top-5 h-12 w-20" />;
  }
}

export function DesktopFeatures() {
  return (
    <section id="features" aria-labelledby="features-title" className="relative">
      <Wave fill="#FFFFFF" />
      <div className="bg-white py-20 xl:py-24">
        <Container>
          <Reveal className="flex items-end justify-between gap-10">
            <div>
              <Eyebrow index="02">Наши преимущества</Eyebrow>
              <h2 id="features-title" className="mt-5 max-w-[560px] text-[40px] font-black xl:text-[44px]">
                Всё, что важно для уверенного старта
              </h2>
            </div>
            <p className="max-w-[380px] pb-1.5 text-[16.5px] text-muted">
              Понятные условия, на которые можно опереться каждый день{" "}— с первого дня в детском саду.
            </p>
          </Reveal>

          <div className="mt-12 grid auto-rows-[minmax(210px,auto)] grid-cols-12 gap-4">
            {features.map((feature, i) => {
              const l = layout[i];
              const Icon = feature.icon;
              const hero = i === 0;
              return (
                <Reveal
                  key={feature.title}
                  as="article"
                  delay={i * 0.06}
                  style={{ borderRadius: l.radius }}
                  className={cn(
                    "group relative isolate flex flex-col overflow-hidden p-7 transition-transform duration-500 hover:-translate-y-1.5 hover:rotate-[-0.6deg]",
                    l.span,
                    l.card,
                  )}
                >
                  <CardFigure index={i} />
                  <span className={cn("relative flex h-12 w-12 items-center justify-center rounded-2xl", l.icon)}>
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <p className={cn("relative mt-auto pt-8 font-heading font-black leading-none", hero ? "text-[80px]" : "text-[46px]")}>
                    {feature.value}
                  </p>
                  <h3 className={cn("relative mt-3 font-sans font-extrabold tracking-normal", hero ? "text-[24px]" : "text-[18px]")}>
                    {feature.title}
                  </h3>
                  <p className={cn("relative mt-2 max-w-[340px] text-[15px] leading-relaxed", l.text)}>{feature.text}</p>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </div>
      <Wave fill="#FFFFFF" flip />
    </section>
  );
}
