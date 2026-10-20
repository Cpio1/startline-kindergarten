import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import { Providers } from "@/components/Providers";
import { meta, SITE_URL, site } from "@/config/site";
import "./globals.css";

// Rounded, friendly letterforms for a kindergarten; one family keeps the page light.
const nunito = Nunito({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: meta.title,
  description: meta.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  keywords: ["детский сад", "STARTLINE", "Стартлайн", "детский сад Ходжанова", "частный детский сад", "садик с 1,5 лет"],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "/",
    siteName: site.name,
    title: meta.title,
    description: meta.description,
  },
  twitter: { card: "summary_large_image", title: meta.title, description: meta.description },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#F8F7EF",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Preschool",
  name: site.name,
  url: SITE_URL,
  telephone: site.phone.display,
  sameAs: [site.instagram.url],
  address: { "@type": "PostalAddress", streetAddress: site.address },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    opens: site.hours.opens,
    closes: site.hours.closes,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={nunito.variable}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
