"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import type { SiteVideo } from "@/lib/images";
import { cn } from "@/lib/cn";

/**
 * Muted looping video that only plays while visible, and never autoplays
 * for visitors who prefer reduced motion.
 */
export function Video({ video, label, className, radius }: { video: SiteVideo; label: string; className?: string; radius?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [userPaused, setUserPaused] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setUserPaused(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !userPaused) element.play().catch(() => {});
        else element.pause();
      },
      { threshold: 0.35 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [userPaused]);

  const toggle = () => {
    const element = ref.current;
    if (!element) return;
    if (element.paused) {
      setUserPaused(false);
      element.play().catch(() => {});
    } else {
      setUserPaused(true);
      element.pause();
    }
  };

  return (
    <div className={cn("relative isolate overflow-hidden bg-navy [transform:translateZ(0)]", className)} style={{ borderRadius: radius }}>
      <video
        ref={ref}
        className="absolute inset-0 h-full w-full object-cover"
        muted
        loop
        playsInline
        preload="metadata"
        poster={video.poster?.src}
        aria-label={label}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      >
        <source src={video.src} type={video.type} />
      </video>
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Поставить видео на паузу" : "Воспроизвести видео"}
        className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-navy shadow-card backdrop-blur transition hover:bg-white"
      >
        {playing ? <Pause className="h-4.5 w-4.5" aria-hidden="true" /> : <Play className="h-4.5 w-4.5 translate-x-px" aria-hidden="true" />}
      </button>
    </div>
  );
}
