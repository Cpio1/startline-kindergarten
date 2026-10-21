import { domMax } from "motion/react";

/** Drag/pan gestures are not part of `domAnimation`; the lightbox loads them lazily for swipes. */
export default domMax;
