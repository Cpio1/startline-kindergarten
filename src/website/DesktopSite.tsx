import { SkipLink } from "@/components/SkipLink";
import type { SiteData } from "@/components/types";
import { DesktopAbout } from "./DesktopAbout";
import { DesktopContacts } from "./DesktopContacts";
import { DesktopDocuments } from "./DesktopDocuments";
import { DesktopFeatures } from "./DesktopFeatures";
import { DesktopFooter } from "./DesktopFooter";
import { DesktopGallery } from "./DesktopGallery";
import { DesktopGroups } from "./DesktopGroups";
import { DesktopHeader } from "./DesktopHeader";
import { DesktopHero } from "./DesktopHero";
import { DesktopNutrition } from "./DesktopNutrition";

/** Desktop composition (≥1024px). The mobile layout lives in /mobile-website. */
export function DesktopSite({ data }: { data: SiteData }) {
  return (
    <>
      <SkipLink target="main" />
      <DesktopHeader />
      <main id="main">
        <DesktopHero image={data.hero} />
        <DesktopAbout media={data.about} />
        <DesktopFeatures />
        <DesktopGroups />
        <DesktopNutrition />
        <DesktopGallery images={data.gallery} />
        <DesktopDocuments />
        <DesktopContacts />
      </main>
      <DesktopFooter />
    </>
  );
}
