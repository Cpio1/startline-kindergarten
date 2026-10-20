import { nav } from "@/config/site";
import { contactRows } from "@/components/contacts";
import { Star, Wave } from "@/components/Kids";
import { Logo } from "@/components/Logo";
import { Container } from "./Container";

export function DesktopFooter() {
  return (
    <footer className="relative mt-6 bg-navy pb-10 pt-16 text-white">
      <Wave fill="#243453" className="absolute inset-x-0 top-0 -translate-y-full" />
      <Star className="wiggle absolute right-[8%] top-12 h-7 w-7" />
      <Container>
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-4">
            <a href="#top" aria-label="STARTLINE — наверх" className="inline-block rounded-xl">
              <Logo tone="light" />
            </a>
            <p className="mt-5 max-w-[300px] text-[14.5px] leading-relaxed text-white/60">
              Детский сад STARTLINE — первый шаг к большому будущему.
            </p>
          </div>
          <nav aria-label="Навигация в подвале" className="col-span-3">
            <p className="text-[15px] font-extrabold text-sun">Разделы</p>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2.5 text-[14.5px]">
              {nav.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="text-white/75 transition-colors hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="col-span-5">
            <p className="text-[15px] font-extrabold text-sun">Контакты</p>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-4">
              {contactRows.map(({ key, icon: Icon, label, value, href, external }) => (
                <li key={key} className="flex gap-3">
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-white/50" />
                  <span className="text-[14.5px] leading-snug">
                    <span className="block text-[12px] text-white/45">{label}</span>
                    {href ? (
                      <a
                        href={href}
                        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="font-semibold text-white/90 transition-colors hover:text-pistachio"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="font-semibold text-white/90">{value}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-14 flex items-center justify-between border-t border-white/10 pt-6 text-[13px] text-white/45">
          <p>© {new Date().getFullYear()} STARTLINE. Детский сад.</p>
          <a href="#top" className="transition-colors hover:text-white">Наверх ↑</a>
        </div>
      </Container>
    </footer>
  );
}
