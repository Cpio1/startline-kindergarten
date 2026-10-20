import type { SiteImage, SiteVideo } from "@/lib/images";
import { Photo } from "./Photo";
import { Video } from "./Video";

export type AboutMedia = { video: SiteVideo | null; image: SiteImage | null };

/** `main-page2` may be a photo or a video — render whichever the kindergarten provided. */
export function Media({
  media,
  className,
  radius,
  sizes,
}: {
  media: AboutMedia;
  className?: string;
  radius?: string;
  sizes: string;
}) {
  const label = "Детский сад STARTLINE изнутри";
  if (media.video) return <Video video={media.video} label={label} className={className} radius={radius} />;
  return <Photo image={media.image} alt={label} className={className} radius={radius} sizes={sizes} />;
}
