import { cn } from "@/lib/cn";

/** A dashed flight path — the "line" in STARTLINE. Stroke colour comes from `currentColor`. */
export function Trajectory({
  className,
  d = "M4 196C60 92 170 30 330 24",
  viewBox = "0 0 340 200",
  dot = true,
}: {
  className?: string;
  d?: string;
  viewBox?: string;
  dot?: boolean;
}) {
  const end = d.trim().split(/[\sC,]+/).slice(-2).map(Number);
  return (
    <svg viewBox={viewBox} fill="none" className={cn("pointer-events-none", className)} aria-hidden="true">
      <path d={d} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeDasharray="2 9" className="track-flow" />
      {dot && end.length === 2 && <circle cx={end[0]} cy={end[1]} r="5" fill="currentColor" />}
    </svg>
  );
}

/** Soft organic shape used behind photos and cards. */
export function Blob({ className, variant = 0 }: { className?: string; variant?: 0 | 1 | 2 }) {
  const paths = [
    "M146 12c52-8 104 22 122 72 18 52-6 112-56 138-48 26-118 24-160-8C10 182 0 124 20 82 40 40 94 20 146 12Z",
    "M60 30c44-36 128-34 172 6 46 40 50 112 14 156-36 46-112 62-166 36C26 202 0 142 8 98 14 70 30 54 60 30Z",
    "M168 8c48 10 86 54 92 104 6 52-26 106-78 124-52 18-124 2-156-44-30-44-24-110 14-148C70 14 122-2 168 8Z",
  ];
  return (
    <svg viewBox="0 0 280 250" className={cn("pointer-events-none", className)} aria-hidden="true">
      <path d={paths[variant]} fill="currentColor" />
    </svg>
  );
}

/** Start-line ticks: a short row of bars, like the marking on a running track. */
export function StartTicks({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 14" className={cn("pointer-events-none", className)} aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x={i * 13} y="0" width="7" height="14" rx="3.5" fill="currentColor" opacity={1 - i * 0.17} />
      ))}
    </svg>
  );
}

/** Section label in the "01 — О нас" style, echoing the stages of a track. */
export function Eyebrow({ index, children, className, tone = "blue" }: { index: string; children: React.ReactNode; className?: string; tone?: "blue" | "light" }) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[0.16em]",
        tone === "blue" ? "text-blue" : "text-pistachio",
        className,
      )}
    >
      <span className="font-heading tabular-nums">{index}</span>
      <span className={cn("h-px w-7", tone === "blue" ? "bg-blue/40" : "bg-pistachio/50")} aria-hidden="true" />
      {children}
    </p>
  );
}
