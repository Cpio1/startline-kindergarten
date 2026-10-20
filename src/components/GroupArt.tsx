/** Three take-offs from the same start line, each climbing a little higher — one per group. */
export function GroupArt({ level, className }: { level: 1 | 2 | 3; className?: string }) {
  const peak = [92, 62, 30][level - 1];
  return (
    <svg viewBox="0 0 220 120" fill="none" className={className} aria-hidden="true">
      <path d="M14 110h44" stroke="currentColor" strokeOpacity=".35" strokeWidth="5" strokeLinecap="round" />
      <path
        d={`M36 110C60 ${peak + 36} 120 ${peak} 196 ${peak - 6}`}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="2 9"
        className="track-flow"
      />
      <circle cx="196" cy={peak - 6} r="9" fill="currentColor" />
    </svg>
  );
}
