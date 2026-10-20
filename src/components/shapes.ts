/**
 * Organic photo contours. Each one is hand-tuned so photos never look like plain rectangles.
 * Border-radius blobs work with any aspect ratio and keep next/image fully responsive.
 */
export const blobs = {
  pebble: "58% 42% 52% 48% / 46% 44% 56% 54%",
  leaf: "70% 30% 62% 38% / 54% 36% 64% 46%",
  arch: "999px 999px 44px 44px",
  archTilt: "999px 999px 120px 36px",
  drop: "50% 50% 50% 18% / 50% 50% 50% 18%",
  soft: "36px 90px 36px 90px",
  softAlt: "90px 32px 90px 32px",
  ticket: "28px 72px 28px 28px",
  ticketAlt: "72px 28px 28px 28px",
  round: "40% 60% 38% 62% / 58% 42% 58% 42%",
} as const;

export type BlobName = keyof typeof blobs;

/** Gallery cycles through these so neighbouring photos never share a contour. */
// Only gentle contours here: photos must not lose their corners to heavy masks.
export const galleryShapes: BlobName[] = ["archTilt", "soft", "ticket", "softAlt", "arch", "ticketAlt"];
