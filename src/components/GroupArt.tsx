import { Flower, Star, Sun } from "./Kids";

/** Three take-offs from the same start line, each climbing a little higher and ending in a figure. */
export function GroupArt({ level, className }: { level: 1 | 2 | 3; className?: string }) {
  const peak = [92, 62, 30][level - 1];
  const End = [Flower, Star, Sun][level - 1];
  return (
    <div className={className} style={{ position: "relative" }}>
      <svg viewBox="0 0 220 120" fill="none" className="h-full w-full" aria-hidden="true">
        <path d="M14 110h44" stroke="currentColor" strokeOpacity=".35" strokeWidth="6" strokeLinecap="round" />
        <path
          d={`M36 110C60 ${peak + 36} 120 ${peak} 186 ${peak - 2}`}
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeDasharray="1 11"
          className="track-flow"
        />
      </svg>
      <End
        className="wiggle absolute h-[38%] w-[21%]"
        style={{ left: "76%", top: `${((peak - 2) / 120) * 100 - 19}%` }}
      />
    </div>
  );
}
