import { SkipLink } from "@/components/SkipLink";
import type { SiteData } from "@/components/types";
import { MobileAbout } from "./MobileAbout";
import { MobileContacts } from "./MobileContacts";
import { MobileDocuments } from "./MobileDocuments";
import { MobileFeatures } from "./MobileFeatures";
import { MobileFooter } from "./MobileFooter";
import { MobileGallery } from "./MobileGallery";
import { MobileGroups } from "./MobileGroups";
import { MobileHeader } from "./MobileHeader";
import { MobileHero } from "./MobileHero";
import { MobileNutrition } from "./MobileNutrition";

/** Phone & tablet composition (<1024px) — designed on its own, not a scaled-down desktop. */
export function MobileSite({ data }: { data: SiteData }) {
  return (
    <>
      <SkipLink target="m-main" />
      <MobileHeader />
      <main id="m-main">
        <MobileHero image={data.hero} />
        <MobileAbout media={data.about} />
        <MobileFeatures />
        <MobileGroups />
        <MobileNutrition />
        <MobileGallery images={data.gallery} />
        <MobileDocuments />
        <MobileContacts />
      </main>
      <MobileFooter />
    </>
  );
}
