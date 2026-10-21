"use client";

import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, LazyMotion, m, type PanInfo } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { SiteImage } from "@/lib/images";

type LightboxProps = {
  images: SiteImage[];
  index: number | null;
  onChange: (index: number | null) => void;
};

const SWIPE_DISTANCE = 60;
const SWIPE_VELOCITY = 400;
const loadDrag = () => import("./motion-drag").then((mod) => mod.default);

/** Fullscreen viewer: keyboard arrows, Esc, swipes on touch screens, focus returns on close. */
export function Lightbox({ images, index, onChange }: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);
  const open = index !== null;
  const count = images.length;

  const go = useCallback(
    (step: number) => {
      if (index === null) return;
      onChange((index + step + count) % count);
    },
    [index, count, onChange],
  );
  const close = useCallback(() => onChange(null), [onChange]);

  useEffect(() => {
    if (!open) return;
    returnFocus.current = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
      returnFocus.current?.focus();
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      else if (event.key === "ArrowRight") go(1);
      else if (event.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close, go]);

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -SWIPE_DISTANCE || info.velocity.x < -SWIPE_VELOCITY) go(1);
    else if (info.offset.x > SWIPE_DISTANCE || info.velocity.x > SWIPE_VELOCITY) go(-1);
  };

  const image = index !== null ? images[index] : null;

  return (
    <LazyMotion features={loadDrag}>
      <AnimatePresence>
        {image && index !== null && (
          <m.div
            key="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={`Фотография ${index + 1} из ${count}`}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-navy/92 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={close}
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between px-4 pt-[max(16px,env(safe-area-inset-top))] sm:px-6">
              <span className="rounded-full bg-white/10 px-3 py-1 text-[13px] font-semibold tabular-nums text-white/85">
                {index + 1} / {count}
              </span>
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                aria-label="Закрыть просмотр"
                className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full bg-white/12 text-white transition hover:bg-white/20"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <AnimatePresence initial={false} mode="popLayout">
              <m.div
                key={image.src}
                className="relative h-[78svh] w-[94vw] max-w-[1200px] touch-pan-y cursor-grab active:cursor-grabbing"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                drag={count > 1 ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.5}
                onDragEnd={onDragEnd}
                onClick={(event) => event.stopPropagation()}
              >
                <Image
                  src={image.src}
                  alt={`Фотография детского сада STARTLINE ${index + 1} из ${count}`}
                  fill
                  sizes="94vw"
                  className="pointer-events-none select-none object-contain"
                  draggable={false}
                />
              </m.div>
            </AnimatePresence>

            {count > 1 && (
              <>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    go(-1);
                  }}
                  aria-label="Предыдущая фотография"
                  className="absolute left-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/12 text-white transition hover:bg-white/22 sm:flex lg:left-6"
                >
                  <ChevronLeft className="h-6 w-6" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    go(1);
                  }}
                  aria-label="Следующая фотография"
                  className="absolute right-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/12 text-white transition hover:bg-white/22 sm:flex lg:right-6"
                >
                  <ChevronRight className="h-6 w-6" aria-hidden="true" />
                </button>
                <p className="pointer-events-none absolute inset-x-0 bottom-[max(18px,env(safe-area-inset-bottom))] text-center text-[12px] text-white/60 sm:hidden">
                  Листайте в стороны
                </p>
              </>
            )}
          </m.div>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
}
