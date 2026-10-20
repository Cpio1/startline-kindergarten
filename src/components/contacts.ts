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
};

export const contactRows: ContactRow[] = [
  { key: "address", icon: MapPin, label: "Адрес", value: site.address, href: mapUrl, external: true },
  { key: "phone", icon: Phone, label: "Телефон", value: site.phone.display, href: `tel:${site.phone.tel}` },
  { key: "instagram", icon: InstagramIcon, label: "Instagram", value: site.instagram.handle, href: site.instagram.url, external: true },
  { key: "hours", icon: Clock3, label: "Режим работы", value: site.hours.display },
];
