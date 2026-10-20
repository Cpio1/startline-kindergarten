import { Info } from "lucide-react";
import { groups } from "@/config/content";
import { Eyebrow } from "@/components/Decor";
import { Cloud, Star } from "@/components/Kids";
import { GroupArt } from "@/components/GroupArt";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

const cards = [
  { tone: "bg-coral-soft text-navy", art: "text-coral-deep", offset: "", radius: "40px 40px 40px 12px" },
  { tone: "bg-blue text-white", art: "text-pistachio", offset: "mt-12", radius: "12px 40px 40px 40px" },
  { tone: "bg-sun-soft text-navy", art: "text-sun-deep", offset: "mt-6", radius: "40px 12px 40px 40px" },
] as const;

export function DesktopGroups() {
  return (
    <section id="groups" aria-labelledby="groups-title" className="relative py-24 xl:py-28">
      <Cloud className="drift absolute left-[6%] top-10 h-12 w-20" />
      <Cloud className="drift absolute right-[8%] bottom-10 h-10 w-16" style={{ animationDelay: "-5s" }} />
      <Container className="grid grid-cols-12 gap-12">
        <Reveal className="col-span-4 pt-4">
          <Eyebrow index="03">{groups.eyebrow}</Eyebrow>
          <h2 id="groups-title" className="mt-5 text-[36px] font-black xl:text-[40px]">
            {groups.title}
          </h2>
          <p className="mt-6 text-[16px] leading-relaxed text-muted">{groups.text}</p>
          <p className="mt-8 flex gap-3 rounded-[22px] border-2 border-dashed border-lilac/60 bg-lilac-soft/60 p-4 text-[14px] leading-relaxed text-muted">
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
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/70 font-heading text-[20px] font-black text-navy">{i + 1}</span>
                  <span className="flex gap-1" aria-hidden="true">
                    {Array.from({ length: i + 1 }, (_, k) => (
                      <Star key={k} className="h-4 w-4" color={i === 1 ? "#FFD95E" : "#FF9C86"} />
                    ))}
                  </span>
                </div>
                <GroupArt level={(i + 1) as 1 | 2 | 3} className={cn("mt-8 h-auto w-full", card.art)} />
                <div className="mt-auto pt-8">
                  <h3 className="text-[26px] font-black">{name}</h3>
                  <p className="mt-1.5 text-[13px] font-bold opacity-60">временное название</p>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
