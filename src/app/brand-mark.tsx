/** The logo mark as plain SVG for next/og image routes (no Tailwind there). */
export function BrandMark({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48">
      <rect width="48" height="48" rx="15" fill="#3157D5" />
      <path d="M10.5 35.5h13" stroke="#F8F7EF" strokeWidth="3.4" strokeLinecap="round" />
      <path d="M10.5 30.2h4.6" stroke="#F8F7EF" strokeOpacity=".45" strokeWidth="3.4" strokeLinecap="round" />
      <path d="M15.5 35.5c.4-9.6 6.6-16.2 17-18" fill="none" stroke="#F8F7EF" strokeWidth="3.4" strokeLinecap="round" />
      <path d="M31.4 17.9c.2-5.4 3.6-8.6 8.8-8.9.1 5.3-3.4 8.7-8.8 8.9Z" fill="#BFE36D" />
      <circle cx="35.6" cy="30.5" r="3" fill="#BFE36D" />
    </svg>
  );
}
