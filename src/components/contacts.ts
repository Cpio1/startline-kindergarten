import { Clock3, MapPin, Phone, type LucideIcon } from "lucide-react";
import { mapUrl, site } from "@/config/site";
import { InstagramIcon } from "./BrandIcons";

export type ContactRow = {
  key: string;
  icon: LucideIcon | typeof InstagramIcon;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  tone: string;
};

export const contactRows: ContactRow[] = [
  { key: "address", icon: MapPin, label: "Адрес", value: site.address, href: mapUrl, external: true, tone: "bg-coral-soft text-coral-deep" },
  { key: "phone", icon: Phone, label: "Телефон", value: site.phone.display, href: `tel:${site.phone.tel}`, tone: "bg-sky-soft text-blue" },
  { key: "instagram", icon: InstagramIcon, label: "Instagram", value: site.instagram.handle, href: site.instagram.url, external: true, tone: "bg-lilac-soft text-lilac-deep" },
  { key: "hours", icon: Clock3, label: "Режим работы", value: site.hours.display, tone: "bg-sun-soft text-[#b07800]" },
];
