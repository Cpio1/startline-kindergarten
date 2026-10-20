import Image from "next/image";
import { ImageIcon } from "lucide-react";
import type { SiteImage } from "@/lib/images";
import { cn } from "@/lib/cn";
import { LogoMark } from "./Logo";

type PhotoProps = {
  image: SiteImage | null;
  alt: string;
  className?: string;
  radius?: string;
  sizes: string;
  priority?: boolean;
  position?: string;
  /** Width / height of the frame; omit when the className sets the size. */
  aspect?: number;
};

/**
 * A photo inside an organic contour. When the real photo has not been added yet,
 * a branded placeholder keeps the composition intact instead of a stock image.
 */
export function Photo({ image, alt, className, radius, sizes, priority, position = "50% 50%", aspect }: PhotoProps) {
  return (
    <div
      className={cn("relative isolate overflow-hidden [transform:translateZ(0)]", className)}
      style={{ borderRadius: radius, aspectRatio: aspect }}
    >
      {image ? (
        <Image
          src={image.src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
          style={{ objectPosition: position }}
        />
      ) : (
        <div
          role="img"
          aria-label={`${alt} — фотография скоро появится`}
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[radial-gradient(120%_90%_at_20%_10%,#eef6d8_0%,transparent_55%),radial-gradient(100%_80%_at_90%_100%,#dfe6fb_0%,transparent_60%)] bg-milk-deep"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle,rgb(49_87_213/0.2)_1.3px,transparent_1.6px)] bg-[length:22px_22px]"
          />
          <LogoMark className="relative h-11 w-11 opacity-90" />
          <span className="relative inline-flex items-center gap-1.5 rounded-full bg-white/80 px-3 py-1 text-[12px] font-semibold text-muted backdrop-blur">
            <ImageIcon className="h-3.5 w-3.5" aria-hidden="true" />
            Фото скоро появится
          </span>
        </div>
      )}
    </div>
  );
}
