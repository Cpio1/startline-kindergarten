import { nav } from "@/config/site";
import { contactRows } from "@/components/contacts";
import { Wave } from "@/components/Kids";
import { Logo } from "@/components/Logo";
import { mid } from "./ids";
import { MobileContainer } from "./MobileContainer";

export function MobileFooter() {
  return (
    <footer className="relative mt-8 bg-navy pb-[max(28px,env(safe-area-inset-bottom))] pt-10 text-white">
      <Wave fill="#243453" className="absolute inset-x-0 top-0 -translate-y-full" />
      <MobileContainer>
        <Logo tone="light" className="[&_svg]:h-8 [&_svg]:w-8 [&>span:last-child]:text-[18px]" />
        <nav aria-label="Навигация в подвале" className="mt-7">
          <ul className="flex flex-wrap gap-x-5 gap-y-2.5 text-[14px]">
            {nav.map((item) => (
              <li key={item.id}>
                <a href={`#${mid(item.id)}`} className="text-white/75">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <ul className="mt-7 grid gap-3.5 border-t border-white/10 pt-7">
          {contactRows.map(({ key, icon: Icon, value, href, external }) => (
            <li key={key} className="flex items-center gap-3 text-[14px]">
              <Icon className="h-4 w-4 shrink-0 text-pistachio" />
              {href ? (
                <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="font-semibold text-white/90">
                  {value}
                </a>
              ) : (
                <span className="font-semibold text-white/90">{value}</span>
              )}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-[12px] text-white/45">© {new Date().getFullYear()} STARTLINE. Детский сад.</p>
      </MobileContainer>
    </footer>
  );
}
