import { cn } from "@/lib/cn";

/**
 * The STARTLINE mark: a start line from which a trajectory takes off
 * and turns into a sprout — the first step that grows into a path.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" focusable="false">
      <rect width="48" height="48" rx="15" fill="#3157D5" />
      <path d="M10.5 35.5h13" stroke="#F8F7EF" strokeWidth="3.4" strokeLinecap="round" />
      <path d="M10.5 30.2h4.6" stroke="#F8F7EF" strokeOpacity=".45" strokeWidth="3.4" strokeLinecap="round" />
      <path
        d="M15.5 35.5c.4-9.6 6.6-16.2 17-18"
        fill="none"
        stroke="#F8F7EF"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      <path d="M31.4 17.9c.2-5.4 3.6-8.6 8.8-8.9.1 5.3-3.4 8.7-8.8 8.9Z" fill="#BFE36D" />
      <circle cx="35.6" cy="30.5" r="3" fill="#BFE36D" />
    </svg>
  );
}

export function Logo({ className, tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className="h-9 w-9 shrink-0" />
      <span
        className={cn(
          "font-heading text-[17px] font-semibold tracking-[0.02em]",
          tone === "dark" ? "text-navy" : "text-white",
        )}
      >
        START<span className={tone === "dark" ? "text-blue" : "text-pistachio"}>LINE</span>
      </span>
    </span>
  );
}
