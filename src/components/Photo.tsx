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
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[radial-gradient(110%_90%_at_15%_10%,#fff4d2_0%,transparent_55%),radial-gradient(100%_80%_at_95%_100%,#e4f3fd_0%,transparent_60%),radial-gradient(80%_60%_at_90%_10%,#ffe7e0_0%,transparent_60%)] bg-milk"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle,rgb(255_156_134/0.35)_1.6px,transparent_1.9px)] bg-[length:24px_24px]"
          />
          <LogoMark className="relative h-11 w-11 opacity-90" />
          <span className="relative inline-flex items-center gap-1.5 rounded-full bg-white/80 px-3 py-1 text-[12.5px] font-bold text-muted backdrop-blur">
            <ImageIcon className="h-3.5 w-3.5" aria-hidden="true" />
            Фото скоро появится
          </span>
        </div>
      )}
    </div>
  );
}
