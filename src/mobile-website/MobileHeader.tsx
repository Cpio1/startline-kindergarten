"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, m } from "motion/react";
import { Menu, Phone, X } from "lucide-react";
import { nav, site } from "@/config/site";
import { InstagramIcon } from "@/components/BrandIcons";
import { Logo } from "@/components/Logo";
import { btn } from "@/components/ui";
import { cn } from "@/lib/cn";
import { mid } from "./ids";

export function MobileHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const toggle = toggleRef.current;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
      toggle?.focus();
    };
  }, [open]);

  // Close the sheet if the viewport grows into the desktop layout.
  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const onChange = () => query.matches && setOpen(false);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return (
    <>
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)] transition-[background-color,box-shadow] duration-300",
        scrolled || open ? "bg-milk/90 shadow-[0_1px_0_rgb(36_52_83/0.08)] backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-[640px] items-center justify-between px-[18px]">
        <a href={`#${mid("top")}`} aria-label="STARTLINE — на главную" onClick={() => setOpen(false)} className="rounded-xl">
          <Logo className="[&_svg]:h-8 [&_svg]:w-8 [&>span:last-child]:text-[15px]" />
        </a>
        <div className="flex items-center gap-2">
          <a
            href={`tel:${site.phone.tel}`}
            aria-label={`Позвонить: ${site.phone.display}`}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-blue text-white"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
          </a>
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-navy/12 bg-white/80 text-navy"
          >
            {open ? <X className="h-[18px] w-[18px]" aria-hidden="true" /> : <Menu className="h-[18px] w-[18px]" aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>

      {/* Outside the header: its backdrop-filter would otherwise trap this fixed sheet. */}
      <AnimatePresence>
        {open && (
          <m.nav
            id="mobile-menu"
            aria-label="Мобильная навигация"
            className="fixed inset-x-0 bottom-0 top-[calc(64px+env(safe-area-inset-top))] z-50 overflow-y-auto bg-milk px-[18px] pb-[max(24px,env(safe-area-inset-bottom))]"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mx-auto flex min-h-full max-w-[640px] flex-col">
              <ul className="mt-4 divide-y divide-line border-y border-line">
                {nav.map((item, i) => (
                  <li key={item.id}>
                    <a
                      href={`#${mid(item.id)}`}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-4 py-3.5 text-[19px] font-semibold text-navy"
                    >
                      <span className="w-6 font-heading text-[12px] font-semibold text-blue tabular-nums">0{i + 1}</span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-auto grid gap-2.5 pt-8">
                <a href={`tel:${site.phone.tel}`} className={cn(btn.primary, "h-12 text-[15px]")}>
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {site.phone.display}
                </a>
                <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className={cn(btn.secondary, "h-12 text-[15px]")}>
                  <InstagramIcon className="h-4 w-4" />
                  {site.instagram.handle}
                </a>
                <p className="mt-2 text-center text-[13px] text-muted">
                  {site.address} · {site.hours.display}
                </p>
              </div>
            </div>
          </m.nav>
        )}
      </AnimatePresence>
    </>
  );
}
