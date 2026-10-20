/**
 * Abstract city texture for the contacts card. It is deliberately schematic:
 * the exact 2GIS point is not confirmed, so no pin is placed on it.
 */
export function MapArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" className={className} aria-hidden="true">
      <rect width="600" height="400" fill="#EDF1F9" />
      <g fill="#E2E8F6">
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
      <circle cx="540" cy="58" r="26" fill="#DDF0B4" />
      <circle cx="96" cy="206" r="34" fill="#DDF0B4" opacity=".8" />
    </svg>
  );
}
