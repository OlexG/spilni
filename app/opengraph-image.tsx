import { ImageResponse } from "next/og";

export const alt = "Spilni — startups with Ukrainian founders";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 74, background: "#fffefa", color: "#111820", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 34, fontWeight: 800 }}>
        <div style={{ display: "flex", flexDirection: "column", width: 48, height: 48, border: "4px solid #111820", borderRadius: 10, overflow: "hidden", transform: "rotate(-3deg)" }}>
          <div style={{ flex: 1, background: "#0057b8" }} /><div style={{ flex: 1, background: "#ffd700" }} />
        </div>
        spilni
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 78, lineHeight: 0.98, letterSpacing: "-4px", fontWeight: 900 }}>
          <div>Startups with</div>
          <div style={{ color: "#0057b8" }}>Ukrainian founders.</div>
        </div>
        <div style={{ width: 360, height: 12, borderRadius: 4, background: "#ffd700" }} />
        <div style={{ fontSize: 27, color: "#5d6670" }}>Verified founders, momentum, Western ties, and sources.</div>
      </div>
    </div>,
    size,
  );
}
