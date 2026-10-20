import { cn } from "@/lib/cn";

/**
 * Playful kindergarten figures. All are decorative (aria-hidden) and sized by className.
 * Colours are soft brand tones so the page stays friendly, not loud.
 */

type FigureProps = { className?: string; style?: React.CSSProperties };

const svgBase = (className?: string) => cn("pointer-events-none select-none", className);

export function Sun({ className, style, face = true }: FigureProps & { face?: boolean }) {
  return (
    <svg viewBox="0 0 120 120" className={svgBase(className)} style={style} aria-hidden="true">
      <g className="spin-slow origin-center" style={{ transformBox: "fill-box" }}>
        {Array.from({ length: 10 }, (_, i) => (
          <rect key={i} x="56" y="4" width="8" height="20" rx="4" fill="#FFC94A" transform={`rotate(${i * 36} 60 60)`} />
        ))}
      </g>
      <circle cx="60" cy="60" r="31" fill="#FFD95E" />
      <circle cx="60" cy="60" r="31" fill="none" stroke="#F7B731" strokeWidth="3" />
      {face && (
        <>
          <circle cx="49" cy="55" r="3.6" fill="#243453" />
          <circle cx="71" cy="55" r="3.6" fill="#243453" />
          <circle cx="44" cy="66" r="4.5" fill="#FF9C86" opacity=".7" />
          <circle cx="76" cy="66" r="4.5" fill="#FF9C86" opacity=".7" />
          <path d="M51 67c4.5 5.5 13.5 5.5 18 0" fill="none" stroke="#243453" strokeWidth="3.2" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}

export function Cloud({ className, style, color = "#FFFFFF" }: FigureProps & { color?: string }) {
  return (
    <svg viewBox="0 0 160 96" className={svgBase(className)} style={style} aria-hidden="true">
      <path
        d="M38 88c-18 0-32-12-32-28 0-15 12-27 28-28 4-16 18-27 35-27 15 0 28 9 33 22 4-2 8-3 13-3 17 0 31 13 31 30 0 19-15 34-34 34H38Z"
        fill={color}
        stroke="#243453"
        strokeOpacity=".08"
        strokeWidth="3"
      />
    </svg>
  );
}

export function Star({ className, style, color = "#FFD95E" }: FigureProps & { color?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={svgBase(className)} style={style} aria-hidden="true">
      <path
        d="M30 6l6.8 14.5 15.8 2-11.6 11 3 15.7L30 41.5 16 49.2l3-15.7-11.6-11 15.8-2Z"
        fill={color}
        stroke={color}
        strokeWidth="5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Flower({ className, style, petal = "#FF9C86", center = "#FFD95E" }: FigureProps & { petal?: string; center?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={svgBase(className)} style={style} aria-hidden="true">
      {[0, 60, 120, 180, 240, 300].map((a) => (
        <ellipse key={a} cx="40" cy="20" rx="12" ry="16" fill={petal} transform={`rotate(${a} 40 40)`} />
      ))}
      <circle cx="40" cy="40" r="12" fill={center} />
    </svg>
  );
}

export function Rainbow({ className, style }: FigureProps) {
  const arcs = [
    { r: 88, c: "#FF9C86" },
    { r: 72, c: "#FFD95E" },
    { r: 56, c: "#BFE36D" },
    { r: 40, c: "#8FCBF5" },
  ];
  return (
    <svg viewBox="0 0 200 104" className={svgBase(className)} style={style} aria-hidden="true">
      {arcs.map(({ r, c }) => (
        <path key={r} d={`M${100 - r} 100a${r} ${r} 0 0 1 ${r * 2} 0`} fill="none" stroke={c} strokeWidth="14" strokeLinecap="round" />
      ))}
    </svg>
  );
}

export function Balloon({ className, style, color = "#FF9C86" }: FigureProps & { color?: string }) {
  return (
    <svg viewBox="0 0 60 120" className={svgBase(className)} style={style} aria-hidden="true">
      <path d="M30 70c4 14-8 22-2 34s4 14 0 16" fill="none" stroke="#243453" strokeOpacity=".35" strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="30" cy="34" rx="24" ry="30" fill={color} />
      <path d="M26 64h8l-4 7Z" fill={color} />
      <ellipse cx="21" cy="22" rx="5" ry="9" fill="#fff" opacity=".45" transform="rotate(-20 21 22)" />
    </svg>
  );
}

export function Heart({ className, style, color = "#FF9C86" }: FigureProps & { color?: string }) {
  return (
    <svg viewBox="0 0 60 56" className={svgBase(className)} style={style} aria-hidden="true">
      <path d="M30 52S4 36 4 18C4 9 11 3 19 3c5 0 9 3 11 7 2-4 6-7 11-7 8 0 15 6 15 15 0 18-26 34-26 34Z" fill={color} />
    </svg>
  );
}

export function Squiggle({ className, style, color = "#3157D5" }: FigureProps & { color?: string }) {
  return (
    <svg viewBox="0 0 200 24" preserveAspectRatio="none" className={svgBase(className)} style={style} aria-hidden="true">
      <path d="M4 14c16-12 28-12 44 0s28 12 44 0 28-12 44 0 28 12 44 0 12-6 16-4" fill="none" stroke={color} strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}

export function Plane({ className, style }: FigureProps) {
  return (
    <svg viewBox="0 0 120 70" className={svgBase(className)} style={style} aria-hidden="true">
      <path d="M4 60c20 4 34-2 44-14" fill="none" stroke="#3157D5" strokeOpacity=".4" strokeWidth="2.5" strokeDasharray="3 7" strokeLinecap="round" />
      <path d="M52 34 116 6 84 62 74 44Z" fill="#fff" stroke="#3157D5" strokeWidth="3" strokeLinejoin="round" />
      <path d="M74 44 116 6 66 38Z" fill="#E5EBFB" stroke="#3157D5" strokeWidth="3" strokeLinejoin="round" />
    </svg>
  );
}

const blockColors = ["#FF9C86", "#FFD95E", "#8FCBF5", "#BFE36D", "#B9A6F2"];

/** Toy alphabet blocks — a classic kindergarten motif. */
export function Blocks({ className, style, letters = ["А", "Б", "В"] }: FigureProps & { letters?: string[] }) {
  return (
    <svg viewBox="0 0 150 110" className={svgBase(className)} style={style} aria-hidden="true">
      {letters.map((letter, i) => {
        const pos = [
          { x: 6, y: 58, r: -6 },
          { x: 58, y: 58, r: 4 },
          { x: 32, y: 8, r: -3 },
        ][i];
        return (
          <g key={letter} transform={`rotate(${pos.r} ${pos.x + 23} ${pos.y + 23})`}>
            <rect x={pos.x} y={pos.y} width="46" height="46" rx="10" fill={blockColors[i % blockColors.length]} />
            <rect x={pos.x + 5} y={pos.y + 5} width="36" height="36" rx="7" fill="none" stroke="#fff" strokeOpacity=".7" strokeWidth="2.5" />
            <text
              x={pos.x + 23}
              y={pos.y + 32}
              textAnchor="middle"
              fontSize="24"
              fontWeight="900"
              fontFamily="var(--font-nunito), Arial, sans-serif"
              fill="#243453"
            >
              {letter}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/** Scattered confetti dots and tiny stars for section backgrounds. */
export function Confetti({ className }: { className?: string }) {
  const bits = [
    { x: 6, y: 12, c: "#FF9C86", s: "dot" },
    { x: 22, y: 70, c: "#8FCBF5", s: "dot" },
    { x: 40, y: 22, c: "#FFD95E", s: "star" },
    { x: 58, y: 82, c: "#BFE36D", s: "dot" },
    { x: 74, y: 14, c: "#B9A6F2", s: "dot" },
    { x: 90, y: 58, c: "#FFD95E", s: "star" },
    { x: 12, y: 44, c: "#FFD95E", s: "dot" },
    { x: 84, y: 90, c: "#FF9C86", s: "star" },
  ];
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className={svgBase(cn("absolute inset-0 h-full w-full", className))} aria-hidden="true">
      {bits.map((b, i) =>
        b.s === "dot" ? (
          <ellipse key={i} cx={b.x} cy={b.y} rx=".7" ry="1.1" fill={b.c} />
        ) : (
          <path key={i} d={`M${b.x} ${b.y - 1.6}l.5 1.1 1.1.1-.8.8.2 1.2-1-.6-1 .6.2-1.2-.8-.8 1.1-.1Z`} fill={b.c} />
        ),
      )}
    </svg>
  );
}

/** Wavy edge between sections. `fill` is the colour of the section it belongs to. */
export function Wave({ className, fill, flip = false }: { className?: string; fill: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 1440 48"
      preserveAspectRatio="none"
      className={svgBase(cn("block h-6 w-full lg:h-10", flip && "rotate-180", className))}
      aria-hidden="true"
    >
      <path d="M0 48V30c60-18 120-26 180-14s120 26 180 14 120-26 180-14 120 26 180 14 120-26 180-14 120 26 180 14 120-26 180-14 120 26 180 14V48Z" fill={fill} />
    </svg>
  );
}
