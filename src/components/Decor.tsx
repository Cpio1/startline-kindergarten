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
      <path d={d} stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="1 10" className="track-flow" />
      {dot && end.length === 2 && (
        <path
          transform={`translate(${end[0] - 9} ${end[1] - 9}) scale(.3)`}
          d="M30 6l6.8 14.5 15.8 2-11.6 11 3 15.7L30 41.5 16 49.2l3-15.7-11.6-11 15.8-2Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinejoin="round"
        />
      )}
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

const eyebrowTones = [
  "bg-coral-soft text-coral-deep",
  "bg-sun-soft text-[#b07800]",
  "bg-sky-soft text-blue",
  "bg-pistachio-soft text-leaf",
  "bg-lilac-soft text-lilac-deep",
];

/** Section label: a soft coloured pill with a little star. `index` picks the colour. */
export function Eyebrow({ index, children, className, tone = "blue" }: { index: string; children: React.ReactNode; className?: string; tone?: "blue" | "light" }) {
  const colour = tone === "light" ? "bg-white/15 text-white" : eyebrowTones[(Number(index) - 1) % eyebrowTones.length];
  return (
    <p className={cn("inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[14px] font-extrabold", colour, className)}>
      <svg viewBox="0 0 60 60" className="h-4 w-4" aria-hidden="true">
        <path d="M30 6l6.8 14.5 15.8 2-11.6 11 3 15.7L30 41.5 16 49.2l3-15.7-11.6-11 15.8-2Z" fill="currentColor" stroke="currentColor" strokeWidth="5" strokeLinejoin="round" />
      </svg>
      {children}
    </p>
  );
}
