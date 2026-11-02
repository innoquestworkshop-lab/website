import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { MethodologySection } from "@/components/sections/MethodologySection";
import { AboutStats } from "@/components/sections/AboutStats";
import { TeamSection } from "@/components/sections/TeamSection";
import { aboutPage } from "@/data/about";
import { getLocale } from "@/lib/i18n";
import { AccentHeading, Lines, PageHero, plain } from "@/components/ui/system";

export const metadata: Metadata = {
  title: "About Us — Youth Entrepreneurship Education",
  description: "InnoQuest runs entrepreneurship workshops, business simulations and innovation camps for students aged 10–18 across Thailand. Meet the team and our story.",
  alternates: { canonical: "/about" },
  keywords: [
    "InnoQuest",
    "youth innovation Thailand",
    "entrepreneurship camp Bangkok",
    "business simulation for students",
    "innovation workshop teens",
    "STEM learning Thailand",
    "student entrepreneurship program",
    "youth learning company Bangkok",
    "InnoQuest team",
    "youth facilitators Bangkok",
  ],
  openGraph: {
    images: [{ url: "/images/events/entre2-team.jpg", width: 1200, height: 630, alt: "InnoQuest team of young entrepreneurs" }],
  },
  twitter: { card: "summary_large_image" },
};

export default async function AboutPage() {
  const locale = await getLocale();
  const page = aboutPage[locale];
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow={plain(page.hero.eyebrow)}
          title={<AccentHeading heading={page.hero.heading} accent={page.hero.headingAccent} />}
          sub={page.hero.sub}
          actions={<Link href={page.hero.cta.href} className="btn btn-secondary">{page.hero.cta.text}</Link>}
          columns={[
            [
              { src: "/images/events/price-war-048.jpg", alt: "InnoQuest team", ratio: "3 / 4" },
              { fill: "sand", ratio: "1 / 1" },
              { src: "/images/events/entre-1-052.jpg", alt: "A full InnoQuest cohort", ratio: "4 / 3" },
              { fill: "dark", ratio: "4 / 5" },
            ],
            [
              { fill: "red", ratio: "4 / 3" },
              { src: "/images/events/team.jpg", alt: "The InnoQuest team", ratio: "3 / 4" },
              { mark: true, ratio: "1 / 1" },
              { src: "/images/events/price-war-080.jpg", alt: "A full room at an InnoQuest simulation", ratio: "4 / 5" },
            ],
            [
              { src: "/images/events/entre2-shannon-1.jpg", alt: "A speaker at an InnoQuest programme", ratio: "3 / 4" },
              { fill: "dark", ratio: "1 / 1" },
              { src: "/images/events/acs-teachers.jpg", alt: "The team with teachers on stage", ratio: "4 / 5" },
              { fill: "sand", ratio: "3 / 4" },
            ],
          ]}
        />

        {/* Our story */}
        <section className="sec sec--canvas sec--line">
          <div className="wrap split split--top">
            <div>
              <p className="eyebrow">{plain(page.story.eyebrow)}</p>
              <h2 className="h-section" style={{ marginTop: 8 }}><Lines text={page.story.heading} /></h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {page.story.paragraphs.map((p, i) => (
                <p key={i} className="lede" style={i === 0 ? { fontSize: 18, color: "var(--ink)" } : undefined}>{p}</p>
              ))}
              <div style={{ marginTop: 8 }}>
                <Link href={page.story.cta.href} className="btn btn-secondary">{page.story.cta.text}</Link>
              </div>
            </div>
          </div>
        </section>

        <AboutStats />

        {/* Values */}
        <section className="sec">
          <div className="wrap">
            <p className="eyebrow">{plain(page.values.eyebrow)}</p>
            <h2 className="h-section" style={{ marginTop: 8, marginBottom: 32, maxWidth: 780 }}>{page.values.heading}</h2>
            <div className="rows">
              {page.values.items.map((v) => (
                <div key={v.n}>
                  <div style={{ display: "flex", gap: 16, alignItems: "baseline" }}>
                    <span className="num-sm">{v.n}</span>
                    <h3 className="h-sm">{v.title}</h3>
                  </div>
                  <p className="t-small">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <MethodologySection />
        <TeamSection locale={locale} />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
