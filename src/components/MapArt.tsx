/**
 * Abstract city texture for the contacts card. It is deliberately schematic:
 * the exact 2GIS point is not confirmed, so no pin is placed on it.
 */
export function MapArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" className={className} aria-hidden="true">
      <rect width="600" height="400" fill="#E4F3FD" />
      <g fill="#FFFFFF" opacity=".75">
        <rect x="24" y="22" width="150" height="96" rx="18" />
        <rect x="200" y="22" width="120" height="140" rx="18" />
        <rect x="346" y="22" width="230" height="70" rx="18" />
        <rect x="24" y="144" width="150" height="120" rx="18" />
        <rect x="346" y="118" width="100" height="120" rx="18" />
        <rect x="470" y="118" width="106" height="210" rx="18" />
        <rect x="200" y="188" width="120" height="76" rx="18" />
        <rect x="24" y="290" width="296" height="90" rx="18" />
        <rect x="346" y="264" width="100" height="116" rx="18" />
      </g>
      <path d="M0 278c120-10 220 6 310-30s170-118 290-120" stroke="#fff" strokeWidth="18" fill="none" strokeLinecap="round" />
      <path d="M0 278c120-10 220 6 310-30s170-118 290-120" stroke="#BFE36D" strokeOpacity=".55" strokeWidth="3" strokeDasharray="2 10" fill="none" strokeLinecap="round" />
      <path d="M186 0v400M334 0v400M458 0v400M0 132h600" stroke="#fff" strokeWidth="9" />
      {[
        { x: 60, y: 50, c: "#FF9C86" },
        { x: 230, y: 60, c: "#FFD95E" },
        { x: 380, y: 150, c: "#B9A6F2" },
        { x: 240, y: 205, c: "#FF9C86" },
        { x: 380, y: 300, c: "#FFD95E" },
      ].map(({ x, y, c }) => (
        <g key={`${x}-${y}`}>
          <rect x={x} y={y + 18} width="40" height="30" rx="5" fill={c} />
          <path d={`M${x - 6} ${y + 20}L${x + 20} ${y}L${x + 46} ${y + 20}Z`} fill="#3157D5" strokeLinejoin="round" />
          <rect x={x + 15} y={y + 30} width="10" height="18" rx="3" fill="#fff" opacity=".8" />
        </g>
      ))}
      {[
        { x: 540, y: 58 },
        { x: 96, y: 210 },
        { x: 510, y: 250 },
        { x: 150, y: 330 },
      ].map(({ x, y }) => (
        <g key={`t${x}`}>
          <rect x={x - 3} y={y + 8} width="6" height="16" rx="3" fill="#7FB83A" />
          <circle cx={x} cy={y} r="18" fill="#BFE36D" />
        </g>
      ))}
    </svg>
  );
}
