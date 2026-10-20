import { gallery } from "@/config/content";
import { site } from "@/config/site";
import { cn } from "@/lib/cn";
import { InstagramIcon } from "./BrandIcons";
import { btn } from "./ui";

/** Shown until real photos are added to public/images — never filled with stock images. */
export function GalleryEmpty({ compact = false }: { compact?: boolean }) {
  return (
    <div className={cn("flex flex-col items-start", compact ? "gap-4" : "gap-5")}>
      <p className={cn("max-w-[460px] text-muted", compact ? "text-[14px]" : "text-[16px]")}>{gallery.emptyText}</p>
      <a
        href={site.instagram.url}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(btn.secondary, compact ? "h-11 px-5 text-[14px]" : "h-12 px-6 text-[15px]")}
      >
        <InstagramIcon className="h-4 w-4" />
        {site.instagram.handle}
      </a>
    </div>
  );
}
