"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { nav, site } from "@/config/site";
import { Logo } from "@/components/Logo";
import { btn } from "@/components/ui";
import { cn } from "@/lib/cn";

export function DesktopHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in the middle of the viewport.
  useEffect(() => {
    const sections = nav.map(({ id }) => document.getElementById(id)).filter((el): el is HTMLElement => !!el);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300",
        scrolled ? "bg-milk/85 shadow-[0_1px_0_rgb(36_52_83/0.08)] backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[72px] w-full max-w-[1220px] items-center justify-between gap-6 px-8">
        <a href="#top" aria-label="STARTLINE — на главную" className="shrink-0 rounded-xl">
          <Logo />
        </a>
        <nav aria-label="Основная навигация">
          <ul className="flex items-center gap-0.5 xl:gap-1">
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active === item.id ? "true" : undefined}
                  className={cn(
                    "relative rounded-full px-2.5 py-2 text-[14px] font-semibold transition-colors xl:px-3.5",
                    active === item.id ? "text-blue" : "text-navy/75 hover:text-navy",
                  )}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-x-0 -bottom-0.5 mx-auto h-1 w-1 rounded-full bg-blue transition-opacity",
                      active === item.id ? "opacity-100" : "opacity-0",
                    )}
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href={`tel:${site.phone.tel}`} className={cn(btn.primary, "h-11 shrink-0 px-5 text-[14px]")}>
          <Phone className="h-4 w-4" aria-hidden="true" />
          <span className="hidden xl:inline">{site.phone.display}</span>
          <span className="xl:hidden">Позвонить</span>
        </a>
      </div>
    </header>
  );
}
