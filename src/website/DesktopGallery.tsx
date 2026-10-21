"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, m } from "motion/react";
import { ChevronDown, ChevronUp, Expand } from "lucide-react";
import { gallery } from "@/config/content";
import { Eyebrow } from "@/components/Decor";
import { GalleryEmpty } from "@/components/GalleryEmpty";
import { Balloon, Plane, Star } from "@/components/Kids";
import { Lightbox } from "@/components/Lightbox";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { blobs, galleryShapes } from "@/components/shapes";
import { btn } from "@/components/ui";
import type { SiteImage } from "@/lib/images";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

const INITIAL = 5;
/** Justified rows: tiles start at BASE px tall, grow to fill the row and never exceed MAX — keeps the section compact. */
const BASE_HEIGHT = 220;
const MAX_HEIGHT = 280;
const GAP = 16;

const ratio = (image: SiteImage) => image.width / image.height;

export function DesktopGallery({ images }: { images: SiteImage[] }) {
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState<number | null>(null);
  const hidden = images.length - INITIAL;

  return (
    <section id="gallery" aria-labelledby="gallery-title" className="relative py-24 xl:py-28">
      <Plane className="float-soft absolute right-[8%] top-14 h-16 w-28" />
      <Balloon className="float-soft absolute left-[3%] top-[40%] h-24 w-12" color="#FFD95E" />
      <Star className="wiggle absolute right-[4%] bottom-24 h-8 w-8" color="#FF9C86" />
      <Container>
        <Reveal className="flex items-end justify-between gap-10">
          <div>
            <Eyebrow index="05">{gallery.eyebrow}</Eyebrow>
            <h2 id="gallery-title" className="mt-5 text-[38px] font-black xl:text-[42px]">
              {gallery.title}
            </h2>
          </div>
          {images.length > 0 && (
            <p className="whitespace-nowrap pb-1.5 text-[15px] text-muted">
              {gallery.text} <span className="font-semibold text-navy tabular-nums">{images.length} фото</span>
            </p>
          )}
        </Reveal>

        {images.length === 0 ? (
          <div className="mt-12 grid grid-cols-12 items-center gap-8">
            <div className="col-span-7 grid grid-cols-3 gap-4" aria-hidden="true">
              {(["archTilt", "pebble", "ticket"] as const).map((shape, i) => (
                <Photo
                  key={shape}
                  image={null}
                  alt="Фотография детского сада"
                  radius={blobs[shape]}
                  sizes="240px"
                  className={cn("aspect-[0.82]", i === 1 && "mt-10")}
                />
              ))}
            </div>
            <Reveal className="col-span-5">
              <GalleryEmpty />
            </Reveal>
          </div>
        ) : (
          <>
            <GalleryRow images={images.slice(0, INITIAL)} offset={0} total={images.length} onOpen={setOpen} className="mt-10" />
            <AnimatePresence initial={false}>
              {expanded && (
                <m.div
                  key="more"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="-mx-3 overflow-hidden px-3"
                >
                  <GalleryRow images={images.slice(INITIAL)} offset={INITIAL} total={images.length} onOpen={setOpen} className="pt-4 pb-2" stagger />
                </m.div>
              )}
            </AnimatePresence>
            {hidden > 0 && (
              <div className="mt-7 flex justify-center">
                <button
                  type="button"
                  onClick={() => setExpanded((value) => !value)}
                  aria-expanded={expanded}
                  className={cn(btn.secondary, "h-12 px-7 text-[15px]")}
                >
                  {expanded ? "Свернуть" : `Показать ещё · ${hidden}`}
                  {expanded ? <ChevronUp className="h-4 w-4" aria-hidden="true" /> : <ChevronDown className="h-4 w-4" aria-hidden="true" />}
                </button>
              </div>
            )}
          </>
        )}
      </Container>
      <Lightbox images={images} index={open} onChange={setOpen} />
    </section>
  );
}

function GalleryRow({
  images,
  offset,
  total,
  onOpen,
  className,
  stagger = false,
}: {
  images: SiteImage[];
  offset: number;
  total: number;
  onOpen: (index: number) => void;
  className?: string;
  stagger?: boolean;
}) {
  return (
    <ul className={cn("flex flex-wrap justify-center", className)} style={{ gap: GAP }}>
      {images.map((image, i) => {
        const index = offset + i;
        const r = ratio(image);
        return (
          <m.li
            key={image.src}
            style={{ flexGrow: r, flexBasis: r * BASE_HEIGHT, maxWidth: r * MAX_HEIGHT }}
            initial={stagger ? { opacity: 0, y: 18 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: stagger ? Math.min(i, 8) * 0.04 : 0, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              type="button"
              onClick={() => onOpen(index)}
              aria-label={`Открыть фотографию ${index + 1} из ${total}`}
              className="group relative block w-full overflow-hidden border-[5px] border-white bg-white shadow-card"
              style={{ borderRadius: blobs[galleryShapes[index % galleryShapes.length]] }}
            >
              <span className="relative block w-full" style={{ aspectRatio: r }}>
                <Image
                  src={image.src}
                  alt={`Фотография детского сада STARTLINE ${index + 1}`}
                  fill
                  sizes={`${Math.ceil(r * MAX_HEIGHT)}px`}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </span>
              <span className="absolute inset-0 flex items-end justify-end bg-gradient-to-t from-navy/40 via-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-navy">
                  <Expand className="h-4 w-4" aria-hidden="true" />
                </span>
              </span>
            </button>
          </m.li>
        );
      })}
    </ul>
  );
}
