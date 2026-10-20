import { cn } from "@/lib/cn";

export function MobileContainer({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-[640px] px-[18px]", className)}>{children}</div>;
}
