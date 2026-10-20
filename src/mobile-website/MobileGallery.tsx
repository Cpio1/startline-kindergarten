"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, m } from "motion/react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { gallery } from "@/config/content";
import { Eyebrow } from "@/components/Decor";
import { GalleryEmpty } from "@/components/GalleryEmpty";
import { Lightbox } from "@/components/Lightbox";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { btn } from "@/components/ui";
import type { SiteImage } from "@/lib/images";
import { cn } from "@/lib/cn";
import { mid } from "./ids";
import { MobileContainer } from "./MobileContainer";

const INITIAL = 4;
/** Smaller contours than desktop — tight radii read better in a 2-column phone grid. */
const shapes = [
  "70px 70px 18px 18px",
  "18px 52px 18px 52px",
  "52px 18px 52px 18px",
  "18px 18px 70px 70px",
  "50% 50% 18px 50%",
  "18px 50% 50% 50%",
];

export function MobileGallery({ images }: { images: SiteImage[] }) {
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState<number | null>(null);
  const visible = expanded ? images : images.slice(0, INITIAL);
  const hidden = images.length - INITIAL;

  return (
    <section id={mid("gallery")} aria-labelledby="m-gallery-title" className="py-14">
      <MobileContainer>
        <Reveal y={14} className="flex items-end justify-between gap-4">
          <div>
            <Eyebrow index="05" className="text-[11px]">
              {gallery.eyebrow}
            </Eyebrow>
            <h2 id="m-gallery-title" className="mt-3 text-[clamp(23px,7vw,28px)] font-medium">
              {gallery.title}
            </h2>
          </div>
          {images.length > 0 && <p className="whitespace-nowrap pb-1 text-[13px] font-semibold text-muted tabular-nums">{images.length} фото</p>}
        </Reveal>

        {images.length === 0 ? (
          <div className="mt-6">
            <div className="grid grid-cols-3 gap-2" aria-hidden="true">
              {shapes.slice(0, 3).map((radius, i) => (
                <Photo key={radius} image={null} alt="Фотография детского сада" radius={radius} sizes="30vw" className={cn("aspect-[0.8]", i === 1 && "mt-5")} />
              ))}
            </div>
            <div className="mt-6">
              <GalleryEmpty compact />
            </div>
          </div>
        ) : (
          <>
            <ul className="mt-6 grid grid-cols-2 gap-2.5">
              <AnimatePresence initial={false}>
                {visible.map((image, i) => (
                  <m.li
                    key={image.src}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, delay: i >= INITIAL ? Math.min(i - INITIAL, 6) * 0.04 : 0 }}
                  >
                    <button
                      type="button"
                      onClick={() => setOpen(i)}
                      aria-label={`Открыть фотографию ${i + 1} из ${images.length}`}
                      className="relative block aspect-[0.9] w-full overflow-hidden bg-milk-deep"
                      style={{ borderRadius: shapes[i % shapes.length] }}
                    >
                      <Image
                        src={image.src}
                        alt={`Фотография детского сада STARTLINE ${i + 1}`}
                        fill
                        sizes="(max-width: 640px) 46vw, 300px"
                        className="object-cover"
                      />
                    </button>
                  </m.li>
                ))}
              </AnimatePresence>
            </ul>
            {hidden > 0 && (
              <button
                type="button"
                onClick={() => setExpanded((value) => !value)}
                aria-expanded={expanded}
                className={cn(btn.secondary, "mt-4 h-12 w-full text-[14.5px]")}
              >
                {expanded ? "Свернуть" : `Показать ещё · ${hidden}`}
                {expanded ? <ChevronUp className="h-4 w-4" aria-hidden="true" /> : <ChevronDown className="h-4 w-4" aria-hidden="true" />}
              </button>
            )}
          </>
        )}
      </MobileContainer>
      <Lightbox images={images} index={open} onChange={setOpen} />
    </section>
  );
}
