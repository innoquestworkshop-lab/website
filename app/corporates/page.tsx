import type { Metadata } from "next";
import Link from "next/link";
/* eslint-disable @next/next/no-img-element */
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { ContextualTestimonials } from "@/components/sections/ContextualTestimonials";
import { corporatesPage, corporatePartners } from "@/data/corporates";
import { getLocale } from "@/lib/i18n";
import { AccentHeading, Lines, PageHero, Photo, plain, SectionHead, Steps } from "@/components/ui/system";

export const metadata: Metadata = {
  title: "CSR Youth Innovation Programs, Bangkok",
  description: "Partner with InnoQuest for youth-focused CSR in Bangkok — entrepreneurship and innovation workshops that deliver measurable impact for Thai students and your brand.",
  alternates: { canonical: "/corporates" },
  keywords: [
    "CSR Thailand",
    "corporate social responsibility Bangkok",
    "youth innovation program",
    "corporate CSR education",
    "InnoQuest corporate",
    "student innovation workshop Bangkok",
    "CSR impact measurement",
    "youth entrepreneurship Thailand",
    "corporate workshop Bangkok",
    "school CSR program",
  ],
  openGraph: {
    images: [{ url: "/images/events/price-war-071.jpg", width: 1200, height: 630, alt: "Students participating in InnoQuest corporate CSR innovation workshop in Bangkok" }],
  },
  twitter: { card: "summary_large_image" },
};

const icon = (d: React.ReactNode) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{d}</svg>
);

const iconMap = {
  bolt: icon(<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />),
  chart: icon(<><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></>),
  refresh: icon(<><polyline points="17 1 21 5 17 9" /><path d="M3 11V9a4 4 0 0 1 4-4h14" /><polyline points="7 23 3 19 7 15" /><path d="M21 13v2a4 4 0 0 1-4 4H3" /></>),
  star: icon(<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />),
} as const;

export default async function CorporatesPage() {
  const locale = await getLocale();
  const page = corporatesPage[locale];
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow={plain(page.hero.eyebrow)}
          title={<AccentHeading heading={page.hero.heading} accent={page.hero.headingAccent} />}
          sub={page.hero.sub}
          actions={<>
            <Link href={page.hero.cta1.href} className="btn btn-primary">{page.hero.cta1.text}</Link>
            <Link href={page.hero.cta2.href} className="btn btn-secondary">{page.hero.cta2.text}</Link>
          </>}
          columns={[
            [
              { src: "/images/events/price-war-067.jpg", alt: "Price War Workshop", ratio: "3 / 4" },
              { fill: "dark", ratio: "1 / 1" },
              { src: "/images/events/sme-business-016.jpg", alt: "An SME business session", ratio: "4 / 5" },
              { fill: "sand", ratio: "4 / 3" },
            ],
            [
              { fill: "sand", ratio: "4 / 3" },
              { src: "/images/events/price-war-071.jpg", alt: "The Swipe Next Gen summer camp cohort", ratio: "3 / 4" },
              { mark: true, ratio: "1 / 1" },
              { src: "/images/events/price-war-105.jpg", alt: "A full room at the summer camp", ratio: "4 / 5" },
            ],
            [
              { src: "/images/events/price-war-026.jpg", alt: "A facilitator leading the simulation", ratio: "4 / 5" },
              { fill: "red", ratio: "3 / 4" },
              { src: "/images/events/price-war-033.jpg", alt: "Students at their laptops", ratio: "1 / 1" },
              { fill: "dark", ratio: "4 / 5" },
            ],
          ]}
        />

        {/* Partner logos strip */}
        {corporatePartners.length > 0 && (
          <section className="sec sec--canvas sec--line" style={{ paddingBlock: 40 }}>
            <div className="wrap">
              <p className="eyebrow" style={{ textAlign: "center", marginBottom: 24 }}>Corporate partners</p>
              <div className="grid-4">
                {corporatePartners.map((p) => (
                  <div key={p.name} className="card" style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
                    {p.logo ? (
                      <img src={p.logo} alt={p.name} style={{ height: 48, width: "auto", maxWidth: 120, objectFit: "contain" }} />
                    ) : (
                      <div style={{ width: 96, height: 48, borderRadius: 8, background: "var(--surface-card)" }} />
                    )}
                    <span className="t-small">{p.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* What you get */}
        <section className="sec sec--canvas">
          <div className="wrap">
            <SectionHead eyebrow={plain(page.benefits.eyebrow)} title={<Lines text={page.benefits.heading} />} sub={page.benefits.sub} />
            <div className="grid-2">
              {page.benefits.items.map((b) => (
                <div key={b.title} className="card" style={{ flexDirection: "row", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: "var(--surface-card)", color: "var(--red-ink)", display: "grid", placeItems: "center", flexShrink: 0 }}>
                    {iconMap[b.iconKey]}
                  </div>
                  <div>
                    <h3 className="h-sm">{b.title}</h3>
                    <p className="t-small" style={{ marginTop: 8 }}>{b.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case study: a small photo wall next to the numbers */}
        <section className="sec">
          <div className="wrap split">
            <div className="duo">
              <Photo src="/images/events/price-war-071.jpg" alt="Corporate case study" ratio="3 / 4" sizes="(max-width: 900px) 50vw, 25vw" />
              <Photo src="/images/events/price-war-062.jpg" alt="Teams during the Swipe Next Gen camp" ratio="3 / 4" sizes="(max-width: 900px) 50vw, 25vw" style={{ marginTop: 48 }} />
            </div>
            <div>
              <p className="eyebrow">{plain(page.caseStudy.eyebrow)}</p>
              <h2 className="h-section" style={{ marginTop: 8, whiteSpace: "pre-line" }}>{page.caseStudy.heading}</h2>
              <p className="lede" style={{ marginTop: 16 }}>{page.caseStudy.body}</p>
              <div className="grid-2" style={{ marginTop: 32, gap: 24 }}>
                {page.caseStudy.stats.map((s) => (
                  <div key={s.l} className="step">
                    <div className="num">{s.v}</div>
                    <p className="t-small" style={{ marginTop: 4, color: "var(--mute)" }}>{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Your CSR learning path */}
        <section className="sec sec--canvas">
          <div className="wrap">
            <SectionHead eyebrow={plain(page.learningPath.eyebrow)} title={<Lines text={page.learningPath.heading} />} sub={page.learningPath.sub} />
            <Steps steps={page.learningPath.steps} columns={4} />
            <div className="actions" style={{ marginTop: 48 }}>
              <Link href={page.learningPath.cta1.href} className="btn btn-primary">{page.learningPath.cta1.text}</Link>
              <Link href={page.learningPath.cta2.href} className="btn btn-secondary">{page.learningPath.cta2.text}</Link>
            </div>
          </div>
        </section>

        <ContextualTestimonials audience="corporate" label={locale === "en" ? "▸ What corporates say" : "▸ เสียงจากองค์กร"} />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
