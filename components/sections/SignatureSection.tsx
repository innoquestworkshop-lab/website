import Image from "next/image";
import { whatWeDoPage } from "@/data/whatWeDo";
import { capitalMindsYearsStat, capitalMindsStudentsStat } from "@/data/stats";

export function SignatureSection() {
  return (
    <section style={{ background: "#121212", color: "#F5F0EA", paddingTop: 96, paddingBottom: 96 }} className="relative overflow-hidden dot-bg">
      {/* Atmospheric glow — top right */}
      <div className="absolute pointer-events-none" style={{
        top: -160, right: -160, width: 640, height: 640,
        background: "radial-gradient(circle at center, #8A0F14 0%, transparent 68%)",
        opacity: 0.14,
      }} />
      {/* Atmospheric glow — bottom left */}
      <div className="absolute pointer-events-none" style={{
        bottom: -100, left: -100, width: 440, height: 440,
        background: "radial-gradient(circle at center, #8A0F14 0%, transparent 68%)",
        opacity: 0.08,
      }} />

      <div className="max-w-[1240px] mx-auto px-8 relative z-10">

        {/* Top meta row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 44, flexWrap: "wrap", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 28, height: 1.5, background: "#8A0F14" }} />
            <span style={{
              fontSize: 10, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.12em",
              color: "#8A0F14", fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
            }}>{whatWeDoPage.signature.label}</span>
          </div>
          <span style={{
            fontSize: 10, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em",
            color: "rgba(245,240,234,0.3)", fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
          }}>{whatWeDoPage.signature.eyebrow}</span>
        </div>

        {/* HEADLINE — 3-tier typographic statement */}
        <div style={{ marginBottom: 0 }}>
          <div style={{
            fontSize: "clamp(28px, 3.8vw, 52px)", fontWeight: 400, fontStyle: "italic",
            color: "rgba(245,240,234,0.28)", letterSpacing: "-0.01em", lineHeight: 1,
            marginBottom: 6,
          }}>
            The one and only
          </div>
          <div style={{
            fontSize: "clamp(32px, 4.4vw, 60px)", fontWeight: 500,
            letterSpacing: "-0.04em", lineHeight: 0.93, color: "#F5F0EA",
          }}>
            real-time business simulation
          </div>
          <div style={{
            fontSize: "clamp(32px, 4.4vw, 60px)", fontWeight: 500,
            letterSpacing: "-0.04em", lineHeight: 0.93, color: "#8A0F14",
          }}>
            built for teaching.
          </div>
        </div>

        {/* Full-width rule */}
        <div style={{ height: 1, background: "rgba(245,240,234,0.07)", margin: "52px 0" }} />

        {/* Content grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 64, alignItems: "start" }} className="sig-content-grid">

          {/* Left: copy */}
          <div>
            <p style={{
              fontSize: "clamp(17px, 1.7vw, 20px)", lineHeight: 1.55,
              color: "rgba(245,240,234,0.5)", fontStyle: "italic", marginBottom: 24,
            }}>
              &ldquo;{whatWeDoPage.signature.sub}&rdquo;
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.85, color: "rgba(245,240,234,0.65)", maxWidth: 560 }}>
              {whatWeDoPage.signature.body}
            </p>

            {/* Pill tags */}
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 36 }}>
              {[whatWeDoPage.signature.pill1, whatWeDoPage.signature.pill2, whatWeDoPage.signature.pill3].map((p) => (
                <span key={p} className="pill-tag" style={{
                  border: "1px solid rgba(245,240,234,0.2)",
                  color: "rgba(245,240,234,0.55)",
                }}>{p}</span>
              ))}
            </div>

            {/* Stats — only if available */}
            {(capitalMindsYearsStat || capitalMindsStudentsStat) && (
              <div style={{ display: "flex", gap: 40, marginTop: 36 }}>
                {[capitalMindsYearsStat, capitalMindsStudentsStat].filter(Boolean).map((s) => (
                  <div key={s!.label}>
                    <div style={{ fontSize: 32, fontWeight: 500, color: "#8A0F14", letterSpacing: "-0.04em", lineHeight: 1 }}>{s!.n}{s!.suf}</div>
                    <div style={{ fontSize: 10, color: "rgba(245,240,234,0.4)", marginTop: 6, letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace" }}>{s!.label}</div>
                  </div>
                ))}
              </div>
            )}

          </div>

          {/* Right: image + methodology */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {/* Image with offset red frame */}
            <div style={{ position: "relative" }}>
              <div style={{
                position: "absolute", top: 10, right: -10,
                width: "100%", height: "100%",
                border: "1px solid rgba(138,15,20,0.5)", borderRadius: 14,
                pointerEvents: "none",
              }} />
              <div style={{ borderRadius: 12, overflow: "hidden", position: "relative", height: 320 }}>
                <Image
                  src={whatWeDoPage.signature.img}
                  alt="Capital Minds simulation"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 900px) 100vw, 380px"
                />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(18,18,18,0.5) 0%, transparent 50%)",
                }} />
              </div>
            </div>

          </div>
        </div>

      </div>
      <style>{`
        @media(max-width:900px){
          .sig-content-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
