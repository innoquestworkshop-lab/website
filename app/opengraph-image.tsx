import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "InnoQuest | Youth Learning Programs Thailand";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          background: "#121212",
          padding: "72px 80px",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Dot grid pattern overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(245,240,234,0.06) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Red glow orb */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -80,
            width: 560,
            height: 560,
            borderRadius: "50%",
            background: "#8A0F14",
            opacity: 0.18,
            filter: "blur(2px)",
          }}
        />

        {/* Red accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 6,
            height: "100%",
            background: "#8A0F14",
          }}
        />

        {/* Content */}
        <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 0 }}>
          {/* Eyebrow */}
          <div
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: "#8A0F14",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: 20,
              display: "flex",
            }}
          >
            ▸ Youth Learning Programs · Thailand
          </div>

          {/* Wordmark */}
          <div
            style={{
              fontSize: 96,
              fontWeight: 700,
              color: "#F5F0EA",
              letterSpacing: "-0.04em",
              lineHeight: 1,
              display: "flex",
            }}
          >
            Inno
            <span style={{ color: "#8A0F14" }}>Quest</span>
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 22,
              fontWeight: 400,
              color: "rgba(245,240,234,0.6)",
              marginTop: 24,
              maxWidth: 680,
              lineHeight: 1.5,
              display: "flex",
            }}
          >
            Experiential learning programs for schools, corporates &amp; institutions — science-backed, play-driven, designed for the next generation.
          </div>
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: 36,
            right: 80,
            fontSize: 13,
            color: "rgba(245,240,234,0.3)",
            letterSpacing: "0.06em",
            display: "flex",
          }}
        >
          innoquest-website.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}
