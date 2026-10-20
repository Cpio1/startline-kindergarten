import { Info } from "lucide-react";
import { groups } from "@/config/content";
import { Eyebrow } from "@/components/Decor";
import { GroupArt } from "@/components/GroupArt";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/cn";
import { mid } from "./ids";
import { MobileContainer } from "./MobileContainer";

const cards = [
  { tone: "bg-white text-navy", art: "text-blue", radius: "26px 26px 26px 10px" },
  { tone: "bg-blue text-white", art: "text-pistachio", radius: "10px 26px 26px 26px" },
  { tone: "bg-pistachio text-navy", art: "text-navy", radius: "26px 10px 26px 26px" },
] as const;

export function MobileGroups() {
  return (
    <section id={mid("groups")} aria-labelledby="m-groups-title" className="py-14">
      <MobileContainer>
        <Reveal y={14}>
          <Eyebrow index="03" className="text-[11px]">
            {groups.eyebrow}
          </Eyebrow>
          <h2 id="m-groups-title" className="mt-3 text-[clamp(23px,7vw,28px)] font-medium">
            {groups.title}
          </h2>
          <p className="mt-3.5 text-[14.5px] leading-relaxed text-muted">{groups.text}</p>
        </Reveal>
        <ol className="mt-6 grid gap-2.5">
          {groups.items.map((name, i) => {
            const card = cards[i];
            return (
              <Reveal
                key={name}
                as="li"
                y={12}
                delay={i * 0.05}
                className={cn("flex items-center gap-4 py-3.5 pl-4 pr-3 shadow-card", card.tone)}
                style={{ borderRadius: card.radius }}
              >
                <span className="font-heading text-[13px] font-semibold opacity-60">0{i + 1}</span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-[17px] font-semibold">{name}</h3>
                  <p className="mt-0.5 whitespace-nowrap text-[10.5px] font-semibold uppercase tracking-[0.1em] opacity-55">временное название</p>
                </div>
                <GroupArt level={(i + 1) as 1 | 2 | 3} className={cn("h-[40px] w-[64px] shrink-0 min-[360px]:h-[48px] min-[360px]:w-[88px]", card.art)} />
              </Reveal>
            );
          })}
        </ol>
        <p className="mt-4 flex gap-2.5 text-[12.5px] leading-relaxed text-muted">
          <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue" aria-hidden="true" />
          {groups.note}
        </p>
      </MobileContainer>
    </section>
  );
}
