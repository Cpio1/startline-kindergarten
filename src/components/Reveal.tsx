"use client";

import { m } from "motion/react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "li" | "article";
  style?: React.CSSProperties;
};

const components = { div: m.div, li: m.li, article: m.article };

/** Fades its content in once it scrolls into view (transform + opacity only). */
export function Reveal({ children, className, delay = 0, y = 24, as = "div", style }: RevealProps) {
  const Component = components[as];
  return (
    <Component
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
