import { ImageResponse } from "next/og";
import { BrandMark } from "./brand-mark";

export const alt = "STARTLINE — детский сад: первый шаг к большому будущему";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 96px",
          background: "#F8F7EF",
          color: "#243453",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", right: -120, top: -140, width: 560, height: 560, borderRadius: 9999, background: "#E5EBFB", display: "flex" }} />
        <div style={{ position: "absolute", right: 120, bottom: -160, width: 380, height: 380, borderRadius: 9999, background: "#BFE36D", display: "flex" }} />
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <BrandMark size={120} />
          <div style={{ display: "flex", fontSize: 92, fontWeight: 800, letterSpacing: -2 }}>
            START<span style={{ color: "#3157D5" }}>LINE</span>
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 46, marginTop: 36, maxWidth: 760 }}>Первый шаг к большому будущему</div>
        <div style={{ display: "flex", fontSize: 30, marginTop: 24, color: "#5D6882" }}>
          Детский сад · от 1,5 до 6 лет · 3 группы · 08:00–18:00
        </div>
      </div>
    ),
    size,
  );
}
