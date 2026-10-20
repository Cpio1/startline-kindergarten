import { getGalleryImages, getSpecialImage, getSpecialVideo } from "@/lib/images";
import type { SiteData } from "@/components/types";
import { MobileSite } from "@/mobile-website/MobileSite";
import { DesktopSite } from "@/website/DesktopSite";

export default function Home() {
  const data: SiteData = {
    hero: getSpecialImage("main-page"),
    about: { video: getSpecialVideo("main-page2"), image: getSpecialImage("main-page2") },
    gallery: getGalleryImages(),
  };

  // Both compositions share data; CSS breakpoints decide which one is rendered.
  return (
    <>
      <div className="hidden lg:block">
        <DesktopSite data={data} />
      </div>
      <div className="lg:hidden">
        <MobileSite data={data} />
      </div>
    </>
  );
}
