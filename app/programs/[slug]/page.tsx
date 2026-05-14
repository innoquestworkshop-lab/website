import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { BLUR_DATA_URL } from "@/lib/imageBlur";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { ContextualTestimonials } from "@/components/sections/ContextualTestimonials";
import { programs, getProgramBySlug } from "@/data/programs";
import { methodPillarNames } from "@/data/methodology";


export async function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) return {};
  return {
    title: program.name,
    description: program.tagline,
  };
}

export default async function ProgramPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) notFound();

  const related = programs.filter((p) => p.slug !== program.slug).slice(0, 3);

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
            style={{ top: -80, right: -80, width: 360, height: 360, background: "#8A0F14", opacity: 0.13, filter: "blur(2px)" }}
          />
          <div className="max-w-[1240px] mx-auto px-8 relative z-10">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }} className="prog-hero-grid">
              <div>

                <h1 style={{ fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1.05 }}>
                  {program.name}
                </h1>
                <p style={{ fontSize: 17, lineHeight: 1.65, color: "rgba(245,240,234,0.7)", marginTop: 20, maxWidth: 480 }}>
                  {program.tagline}
                </p>
                <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
                  <Link href="/contact" style={{
                    display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 22px",
                    background: "#8A0F14", color: "#F5F0EA", borderRadius: 999, fontSize: 14, fontWeight: 500, textDecoration: "none",
                  }}>
                    Enquire now →
                  </Link>
                </div>
              </div>
              <div style={{ position: "relative" }}>
                {program.heroImg ? (
                  <>
                    <div style={{
                      position: "absolute", top: 12, left: 12,
                      width: "calc(100% - 16px)", height: "calc(100% - 16px)",
                      borderRadius: 14, border: "2px solid #8A0F14", opacity: 0.6,
                    }} />
                    <div style={{ height: 380, borderRadius: 14, overflow: "hidden", position: "relative" }}>
                      <Image src={program.heroImg} alt={program.name} fill style={{ objectFit: "cover", transform: "scale(1.15)" }} sizes="(max-width: 900px) 100vw, 50vw" placeholder="blur" blurDataURL={BLUR_DATA_URL} />
                    </div>
                  </>
                ) : (
                  <div className="imgph dark" style={{ height: 380, borderRadius: 14 }}>
                    <div className="imgph-tag">PROGRAM · HERO</div>
                    <div className="imgph-caption">// tall portrait-style action shot: students mid-activity, real energy. Vertical orientation.</div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <style>{`@media(max-width:900px){ .prog-hero-grid { grid-template-columns: 1fr !important; } }`}</style>
        </section>

        {/* Quick facts strip */}
        <section style={{ background: "#F5F0EA", padding: "48px 0", borderBottom: "1px solid rgba(18,18,18,0.06)" }}>
          <div className="max-w-[1240px] mx-auto px-8">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }} className="facts-grid">
              {[
                { label: "Age range", value: program.ages },
                { label: "Duration", value: program.duration },
                { label: "Group size", value: program.groupSize },
                { label: "Format", value: program.format },
              ].map(({ label, value }) => (
                <div key={label} style={{ paddingTop: 20, borderTop: "2px solid #8A0F14" }}>
                  <div className="eyebrow" style={{ color: "rgba(18,18,18,0.5)", marginBottom: 8 }}>{label}</div>
                  <div style={{ fontSize: 18, fontWeight: 500, letterSpacing: "-0.015em" }}>{value}</div>
                </div>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:900px){ .facts-grid { grid-template-columns: repeat(2, 1fr) !important; } }`}</style>
        </section>

        {/* About the program */}
        <section style={{ background: "#FFFFFF", padding: "96px 0" }}>
          <div className="max-w-[1240px] mx-auto px-8">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 64, alignItems: "start" }} className="about-prog-grid">
              <div>
                <p className="eyebrow" style={{ color: "#8A0F14", marginBottom: 18 }}>▸ About this program</p>
                <h2 className="h-section">What it&apos;s all<br />about.</h2>
              </div>
              <p style={{ fontSize: 17, lineHeight: 1.7, color: "rgba(18,18,18,0.75)" }}>
                {program.description}
              </p>
            </div>
          </div>
          <style>{`@media(max-width:900px){ .about-prog-grid { grid-template-columns: 1fr !important; gap: 24px !important; } }`}</style>
        </section>

        {/* Learning outcomes */}
        <section style={{ background: "#F5F0EA", padding: "96px 0" }}>
          <div className="max-w-[1240px] mx-auto px-8">
            <p className="eyebrow" style={{ color: "#8A0F14", marginBottom: 18 }}>▸ What students gain</p>
            <h2 className="h-section" style={{ marginBottom: 48 }}>Learning outcomes.</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="outcomes-grid">
              {program.outcomes.map((outcome) => (
                <div key={outcome.title} className="card-lift" style={{
                  background: "#FFFFFF", borderRadius: 14, padding: 28,
                  border: "1px solid rgba(18,18,18,0.06)",
                }}>
                  <h3 style={{ fontSize: 18, fontWeight: 500, letterSpacing: "-0.015em", marginBottom: 10 }}>{outcome.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(18,18,18,0.6)" }}>{outcome.description}</p>
                </div>
              ))}
            </div>
          </div>
          <style>{`
            @media(max-width:900px){ .outcomes-grid { grid-template-columns: repeat(2, 1fr) !important; } }
            @media(max-width:540px){ .outcomes-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        {/* Method pillars */}
        <section style={{ background: "#FFFFFF", padding: "96px 0" }}>
          <div className="max-w-[1240px] mx-auto px-8">
            <p className="eyebrow" style={{ color: "#8A0F14", marginBottom: 18 }}>▸ Our methodology</p>
            <h2 className="h-section" style={{ marginBottom: 40 }}>
              The InnoQuest <span className="scribble">Method</span>
              <sup style={{ fontSize: "0.4em", verticalAlign: "super", marginLeft: 4, color: "#8A0F14" }}>©</sup>
              {" "}in this program.
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              {program.methodPillars.map((n) => (
                <div key={n} className="card-lift" style={{
                  background: "#E8E0D5", borderRadius: 10, padding: "14px 20px",
                  display: "flex", alignItems: "center", gap: 10,
                }}>
                  <span style={{ fontSize: 18, fontWeight: 500, color: "#8A0F14", letterSpacing: "-0.02em" }}>0{n}</span>
                  <span style={{ fontSize: 15, fontWeight: 500 }}>{methodPillarNames[n - 1]}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContextualTestimonials
          programSlug={program.slug}
          audience={program.audiences as ("corporate" | "school" | "parent" | "student")[]}
          label="▸ What participants say"
        />

        {/* Related programs */}
        <section style={{ background: "#F5F0EA", padding: "96px 0" }}>
          <div className="max-w-[1240px] mx-auto px-8">
            <p className="eyebrow" style={{ color: "#8A0F14", marginBottom: 18 }}>▸ Related programs</p>
            <h2 className="h-section" style={{ marginBottom: 40 }}>More to explore.</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="related-grid">
              {related.map((p) => (
                <Link key={p.slug} href={`/programs/${p.slug}`} className="card-lift" style={{
                  background: "#FFFFFF", borderRadius: 14, padding: 28,
                  textDecoration: "none", color: "inherit",
                  border: "1px solid rgba(18,18,18,0.06)", display: "flex", flexDirection: "column", gap: 10,
                }}>
                  <h3 style={{ fontSize: 18, fontWeight: 500, letterSpacing: "-0.015em" }}>{p.name}</h3>
                  <p style={{ fontSize: 13, lineHeight: 1.6, color: "rgba(18,18,18,0.6)", flex: 1 }}>{p.tagline}</p>

                </Link>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:900px){ .related-grid { grid-template-columns: 1fr !important; } }`}</style>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
