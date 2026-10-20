import type { SiteImage } from "@/lib/images";
import type { AboutMedia } from "./Media";

/** Everything the page reads from /public, resolved on the server and shared by both layouts. */
export type SiteData = {
  hero: SiteImage | null;
  about: AboutMedia;
  gallery: SiteImage[];
};
