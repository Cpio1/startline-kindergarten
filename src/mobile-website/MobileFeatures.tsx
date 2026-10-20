import { features } from "@/config/content";
import { Eyebrow, Trajectory } from "@/components/Decor";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/cn";
import { mid } from "./ids";
import { MobileContainer } from "./MobileContainer";

const layout = [
  { span: "col-span-2", radius: "28px 28px 28px 10px", card: "bg-blue text-white", icon: "bg-white/15", text: "text-white/75" },
  { span: "", radius: "10px 26px 26px 26px", card: "bg-pistachio-soft", icon: "bg-white text-blue", text: "text-muted" },
  { span: "", radius: "26px 26px 10px 26px", card: "bg-milk", icon: "bg-white text-blue", text: "text-muted" },
  { span: "", radius: "26px 10px 26px 26px", card: "bg-pistachio", icon: "bg-white/60", text: "text-navy/70" },
  { span: "", radius: "26px 26px 26px 10px", card: "bg-blue-soft", icon: "bg-white text-blue", text: "text-muted" },
];

export function MobileFeatures() {
  return (
    <section id={mid("features")} aria-labelledby="m-features-title" className="px-2.5">
      <div className="mx-auto max-w-[660px] rounded-[32px] bg-white py-12">
        <MobileContainer className="px-[14px]">
          <Reveal y={14}>
            <Eyebrow index="02" className="text-[11px]">
              Преимущества
            </Eyebrow>
            <h2 id="m-features-title" className="mt-3 text-[clamp(23px,7vw,28px)] font-medium">
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
                  className={cn("relative flex flex-col overflow-hidden p-4", l.span, l.card, wide && "flex-row items-center gap-4 p-5")}
                  style={{ borderRadius: l.radius }}
                >
                  <span className={cn("flex h-9 w-9 shrink-0 items-center justify-center rounded-xl", l.icon, wide && "self-start")}>
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div className={cn("min-w-0", !wide && "mt-5")}>
                    <p className={cn("font-heading font-semibold leading-none", wide ? "text-[30px]" : "text-[24px]")}>{feature.value}</p>
                    <h3 className="mt-2 font-sans text-[13.5px] font-bold leading-snug tracking-normal">{feature.title}</h3>
                    {wide && <p className={cn("mt-1.5 text-[13px] leading-snug", l.text)}>{feature.text}</p>}
                  </div>
                  {wide && (
                    <Trajectory
                      className="absolute -bottom-3 -right-2 h-[54px] w-[120px] text-pistachio/60"
                      d="M4 50C30 22 66 8 114 6"
                      dot={false}
                      viewBox="0 0 120 56"
                    />
                  )}
                </Reveal>
              );
            })}
          </div>
        </MobileContainer>
      </div>
    </section>
  );
}
