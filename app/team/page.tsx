import type { Metadata } from "next";
import Image from "next/image";
import { BLUR_DATA_URL } from "@/lib/imageBlur";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { team, teamPage, typeConfig } from "@/data/team";

export const metadata: Metadata = {
  title: "Our Team | InnoQuest",
  description: "Meet the facilitators, speakers, and educators driving youth development across Bangkok and Thailand — real experts who make learning transformative.",
};

export default function OurPeoplePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          style={{ background: "#121212", color: "#F5F0EA", paddingTop: 140, paddingBottom: 80 }}
          className="relative overflow-hidden dot-bg"
        >
          <div
            className="absolute rounded-full pointer-events-none"
            style={{ top: -100, right: -80, width: 420, height: 420, background: "#8A0F14", opacity: 0.11, filter: "blur(2px)" }}
          />
          <div className="max-w-[1240px] mx-auto px-8 relative z-10">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 64, alignItems: "center" }} className="team-hero-grid">
              <div>
                <p className="eyebrow" style={{ color: "#8A0F14", marginBottom: 24 }}>{teamPage.hero.eyebrow}</p>
                <h1 style={{ fontSize: "clamp(36px, 5vw, 68px)", fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1.05 }}>
                  The people behind{" "}
                  <span style={{ color: "#8A0F14" }}>InnoQuest.</span>
                </h1>
                <p style={{ fontSize: 17, lineHeight: 1.65, color: "rgba(245,240,234,0.7)", maxWidth: 480, marginTop: 24 }}>
                  {teamPage.hero.sub}
                </p>
              </div>
              <div>
                <div style={{ position: "relative" }}>
                  <div style={{
                    position: "absolute", top: 12, left: 12,
                    width: "calc(100% - 16px)", height: "calc(100% - 16px)",
                    borderRadius: 14, border: "2px solid #8A0F14", opacity: 0.6,
                  }} />
                  <div style={{ height: 380, borderRadius: 14, overflow: "hidden", position: "relative" }}>
                    <Image src="/images/events/entre1-IMG_5408.jpg" alt="InnoQuest team" fill style={{ objectFit: "cover" }} priority sizes="(max-width: 900px) 100vw, 50vw" placeholder="blur" blurDataURL={BLUR_DATA_URL} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <style>{`@media(max-width:900px){ .team-hero-grid { grid-template-columns: 1fr !important; } }`}</style>
        </section>

        {/* Team grid */}
        <section style={{ background: "#F5F0EA", padding: "96px 0" }}>
          <div className="max-w-[1240px] mx-auto px-8">
            <p className="eyebrow" style={{ color: "#8A0F14", marginBottom: 18 }}>▸ The team</p>
            <h2 className="h-section" style={{ marginBottom: 48 }}>
              {team.length} humans, <span className="scribble">one mission</span>.
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }} className="team-grid">
              {team.map((member) => {
                const tag = typeConfig[member.type];
                return (
                  <div key={member.id} className="card-lift" style={{
                    background: "#FFFFFF", borderRadius: 14,
                    display: "flex", flexDirection: "column",
                    border: "1px solid rgba(18,18,18,0.06)",
                    overflow: "hidden",
                  }}>
                    <div style={{ padding: 12 }}>
                      {member.photo ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={`/team/${member.photo}`}
                          alt={member.name}
                          style={{ width: "100%", aspectRatio: "1 / 1", objectFit: "cover", borderRadius: 8 }}
                        />
                      ) : (
                        <div className="imgph" style={{ width: "100%", aspectRatio: "1 / 1", minHeight: 0, borderRadius: 8 }} />
                      )}
                    </div>
                    <div style={{ padding: "4px 20px 24px", display: "flex", flexDirection: "column", gap: 6, flex: 1 }}>
                      <span
                        className="pill-tag"
                        style={{ background: tag.bg, color: tag.color, alignSelf: "flex-start", marginBottom: 2 }}
                      >
                        {tag.label}
                      </span>
                      <h3 style={{ fontSize: 17, fontWeight: 500, letterSpacing: "-0.015em" }}>{member.name}</h3>
                      <p className="eyebrow" style={{ color: "rgba(18,18,18,0.5)", letterSpacing: "0.04em" }}>{member.role}</p>
                      <p style={{ fontSize: 13, lineHeight: 1.55, color: "rgba(18,18,18,0.6)", marginTop: 4 }}>{member.bio}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="mono" style={{ fontSize: 11, color: "rgba(18,18,18,0.4)", marginTop: 20 }}>
              // PORTRAITS · square crops, daylight, candid expressions. Avoid grey-backdrop corporate headshots.
            </p>
          </div>
          <style>{`
            @media(max-width:900px){ .team-grid { grid-template-columns: repeat(2, 1fr) !important; } }
            @media(max-width:540px){ .team-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        {/* Join us */}
        <section style={{ background: "#FFFFFF", padding: "96px 0" }}>
          <div className="max-w-[1240px] mx-auto px-8">
            <div
              style={{
                display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center",
                background: "#121212", color: "#F5F0EA",
                borderRadius: 14, padding: 56, overflow: "hidden", position: "relative",
              }}
              className="join-grid"
            >
              <div
                className="absolute rounded-full pointer-events-none"
                style={{ top: -100, right: -100, width: 320, height: 320, background: "#8A0F14", opacity: 0.15, filter: "blur(2px)" }}
              />
              <div style={{ position: "relative", zIndex: 1 }}>
                <p className="eyebrow" style={{ color: "#8A0F14", marginBottom: 16 }}>▸ Join us</p>
                <h3 style={{ fontSize: 36, fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
                  Want to facilitate<br />with us?
                </h3>
                <p style={{ fontSize: 15, lineHeight: 1.65, color: "rgba(245,240,234,0.7)", marginTop: 18, maxWidth: 380 }}>
                  We&apos;re always looking for passionate facilitators, speakers, and designers
                  who believe in the power of learning through doing.
                </p>
                <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
                  <Link href="/contact" style={{
                    display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 22px",
                    background: "#8A0F14", color: "#F5F0EA", borderRadius: 999, fontSize: 14, fontWeight: 500, textDecoration: "none",
                  }}>
                    Get in touch →
                  </Link>
                </div>
              </div>
              <div style={{ position: "relative", zIndex: 1 }}>
                <div className="imgph dark" style={{ height: 300, borderRadius: 12 }}>
                  <div className="imgph-tag">JOIN US</div>
                  <div className="imgph-caption">// casual team photo or workshop action shot showing team culture.</div>
                </div>
              </div>
            </div>
          </div>
          <style>{`@media(max-width:900px){ .join-grid { grid-template-columns: 1fr !important; } }`}</style>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
