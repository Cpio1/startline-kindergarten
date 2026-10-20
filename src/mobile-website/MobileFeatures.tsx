import { features } from "@/config/content";
import { Eyebrow } from "@/components/Decor";
import { Blocks, Cloud, Heart, Rainbow, Sun, Wave } from "@/components/Kids";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/cn";
import { mid } from "./ids";
import { MobileContainer } from "./MobileContainer";

const layout = [
  { span: "col-span-2", radius: "28px 28px 28px 10px", card: "bg-blue text-white", icon: "bg-white/20", text: "text-white/80" },
  { span: "", radius: "10px 26px 26px 26px", card: "bg-sun-soft", icon: "bg-sun", text: "text-muted" },
  { span: "", radius: "26px 26px 10px 26px", card: "bg-coral-soft", icon: "bg-coral text-white", text: "text-muted" },
  { span: "", radius: "26px 10px 26px 26px", card: "bg-pistachio", icon: "bg-white/70", text: "text-navy/70" },
  { span: "", radius: "26px 26px 26px 10px", card: "bg-sky-soft", icon: "bg-sky", text: "text-muted" },
];

/** Smaller, sparser figures than desktop so the phone grid stays calm. */
const figures = [
  <Rainbow key="r" className="absolute -bottom-1 -right-4 hidden w-28 opacity-90 min-[380px]:block" />,
  <Sun key="s" className="absolute -right-4 -top-4 h-14 w-14" face={false} />,
  <Blocks key="b" className="absolute -right-1 top-2 h-10 w-12" />,
  <Heart key="h" className="absolute right-3 top-3 h-7 w-8" color="#FFFFFF" />,
  <Cloud key="c" className="absolute -right-3 top-3 h-8 w-12" />,
];

export function MobileFeatures() {
  return (
    <section id={mid("features")} aria-labelledby="m-features-title" className="relative">
      <Wave fill="#FFFFFF" />
      <div className="bg-white py-11">
        <MobileContainer>
          <Reveal y={14}>
            <Eyebrow index="02" className="px-3 py-1 text-[13px]">
              Преимущества
            </Eyebrow>
            <h2 id="m-features-title" className="mt-3 text-[clamp(24px,7.4vw,30px)] font-black">
              Всё для уверенного старта
            </h2>
          </Reveal>
          <div className="mt-6 grid grid-cols-2 gap-2.5">
            {features.map((feature, i) => {
              const l = layout[i];
              const Icon = feature.icon;
              const wide = i === 0;
              return (
                <Reveal
                  key={feature.title}
                  as="article"
                  y={12}
                  delay={(i % 2) * 0.05}
                  className={cn("relative isolate flex flex-col overflow-hidden p-4", l.span, l.card, wide && "flex-row items-center gap-4 p-5 min-[380px]:pr-24")}
                  style={{ borderRadius: l.radius }}
                >
                  {figures[i]}
                  <span className={cn("relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl", l.icon, wide && "self-start")}>
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div className={cn("relative min-w-0", !wide && "mt-5")}>
                    <p className={cn("font-heading font-black leading-none", wide ? "text-[32px]" : "text-[27px]")}>{feature.value}</p>
                    <h3 className="mt-2 font-sans text-[14.5px] font-extrabold leading-snug tracking-normal">{feature.title}</h3>
                    {wide && <p className={cn("mt-1.5 text-[13.5px] leading-snug", l.text)}>{feature.text}</p>}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </MobileContainer>
      </div>
      <Wave fill="#FFFFFF" flip />
    </section>
  );
}
