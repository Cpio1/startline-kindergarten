import { Info } from "lucide-react";
import { groups } from "@/config/content";
import { Eyebrow, StartTicks } from "@/components/Decor";
import { GroupArt } from "@/components/GroupArt";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

const cards = [
  { tone: "bg-white text-navy", art: "text-blue", offset: "", radius: "40px 40px 40px 12px" },
  { tone: "bg-blue text-white", art: "text-pistachio", offset: "mt-12", radius: "12px 40px 40px 40px" },
  { tone: "bg-pistachio text-navy", art: "text-navy", offset: "mt-6", radius: "40px 12px 40px 40px" },
] as const;

export function DesktopGroups() {
  return (
    <section id="groups" aria-labelledby="groups-title" className="py-24 xl:py-28">
      <Container className="grid grid-cols-12 gap-12">
        <Reveal className="col-span-4 pt-4">
          <Eyebrow index="03">{groups.eyebrow}</Eyebrow>
          <h2 id="groups-title" className="mt-5 text-[36px] font-medium xl:text-[40px]">
            {groups.title}
          </h2>
          <p className="mt-6 text-[16px] leading-relaxed text-muted">{groups.text}</p>
          <p className="mt-8 flex gap-3 rounded-[20px] border border-dashed border-navy/20 p-4 text-[13.5px] leading-relaxed text-muted">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-blue" aria-hidden="true" />
            {groups.note}
          </p>
        </Reveal>

        <ol className="col-span-8 grid grid-cols-3 items-start gap-5">
          {groups.items.map((name, i) => {
            const card = cards[i];
            return (
              <Reveal
                key={name}
                as="li"
                delay={0.08 * i}
                className={cn("group relative flex min-h-[340px] flex-col overflow-hidden p-6 shadow-card transition-transform duration-500 hover:-translate-y-1.5", card.tone, card.offset)}
                style={{ borderRadius: card.radius }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-heading text-[15px] font-semibold opacity-60">0{i + 1}</span>
                  <StartTicks className={cn("h-2.5 w-11", card.art)} />
                </div>
                <GroupArt level={(i + 1) as 1 | 2 | 3} className={cn("mt-8 h-auto w-full", card.art)} />
                <div className="mt-auto pt-8">
                  <h3 className="text-[24px] font-semibold">{name}</h3>
                  <p className="mt-1.5 text-[12.5px] font-semibold uppercase tracking-[0.12em] opacity-55">временное название</p>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
