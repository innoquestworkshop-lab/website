import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { ContextualTestimonials } from "@/components/sections/ContextualTestimonials";
import { schoolsPage } from "@/data/schools";
import { getLocale } from "@/lib/i18n";
import { AccentHeading, CheckIcon, Lines, PageHero, Photo, plain, SectionHead, Steps } from "@/components/ui/system";

export const metadata: Metadata = {
  title: "Entrepreneurship Programs for Schools, Bangkok",
  description: "Curriculum-aligned entrepreneurship and innovation workshops for Bangkok schools — students aged 10–18 build creativity, critical thinking and business skills.",
  alternates: { canonical: "/schools" },
  keywords: [
    "Bangkok school programs",
    "school workshops Thailand",
    "curriculum-aligned activities",
    "innovation workshops for students",
    "entrepreneurship camps Bangkok",
    "student development programs",
    "Thailand school enrichment",
    "youth innovation Thailand",
  ],
  openGraph: {
    images: [{ url: "/images/events/ac-w4-001.jpg", width: 1200, height: 630, alt: "Students collaborating in an InnoQuest innovation workshop at a Bangkok school" }],
  },
  twitter: { card: "summary_large_image" },
};

export default async function SchoolsPage() {
  const locale = await getLocale();
  const page = schoolsPage[locale];
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
              { src: "/images/events/ac-w4-001.jpg", alt: "AC Workshop", ratio: "3 / 4" },
              { fill: "sand", ratio: "1 / 1" },
              { src: "/images/events/break-the-market-5760.jpg", alt: "Students planning at a school workshop", ratio: "4 / 5" },
              { fill: "dark", ratio: "4 / 3" },
            ],
            [
              { fill: "red", ratio: "4 / 3" },
              { src: "/images/events/acs-teachers.jpg", alt: "Teachers and the InnoQuest team at The Student Founder Roadmap", ratio: "3 / 4" },
              { mark: true, ratio: "1 / 1" },
              { src: "/images/events/IMG_8856.jpg", alt: "Students working through a challenge", ratio: "4 / 5" },
            ],
            [
              { src: "/images/events/break-the-market-5446.jpg", alt: "Students at a Break the Market table", ratio: "4 / 5" },
              { fill: "dark", ratio: "3 / 4" },
              { src: "/images/events/entre1-IMG_5408.jpg", alt: "Students and teachers at an InnoQuest programme", ratio: "1 / 1" },
              { fill: "sand", ratio: "4 / 5" },
            ],
          ]}
        />

        {/* Three modes */}
        <section className="sec sec--canvas">
          <div className="wrap">
            <SectionHead eyebrow={plain(page.modes.eyebrow)} title={<Lines text={page.modes.heading} />} sub={page.modes.sub} />
            <div className="grid-3">
              {page.modes.items.map((m) => (
                <div key={m.tag} className="card card--lg" style={{ background: m.bg, borderColor: m.bg === "var(--canvas)" ? "var(--hairline)" : "transparent", justifyContent: "space-between", gap: 24 }}>
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
                      <span className="pill pill--red">{m.tag}</span>
                      <span className="caption">{m.duration}</span>
                    </div>
                    <h3 className="h-card" style={{ color: m.ink }}>{m.title}</h3>
                    <p className="t-small" style={{ marginTop: 12 }}>{m.desc}</p>
                  </div>
                  <div>
                    {m.outcomes.map((o) => (
                      <div key={o} className="check-row"><CheckIcon size={12} /> {o}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Teacher collaboration callout */}
        <section className="sec">
          <div className="wrap split">
            <div>
              <p className="eyebrow">{plain(page.teacherCollab.eyebrow)}</p>
              <h2 className="h-section" style={{ marginTop: 8 }}><Lines text={page.teacherCollab.heading} /></h2>
              <p className="lede" style={{ marginTop: 16 }}>{page.teacherCollab.body}</p>
              <Link href={page.teacherCollab.cta.href} className="link" style={{ marginTop: 24 }}>
                {page.teacherCollab.cta.text}
              </Link>
            </div>
            <div className="duo">
              <Photo src="/images/events/acs-teachers.jpg" alt="Working with teachers" ratio="3 / 4" sizes="(max-width: 900px) 50vw, 28vw" />
              <Photo src="/images/events/IMG_7900.jpg" alt="Students in a small-group discussion" ratio="3 / 4" sizes="(max-width: 900px) 50vw, 28vw" style={{ marginTop: 48 }} />
            </div>
          </div>
        </section>

        {/* Your school's learning path */}
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

        <ContextualTestimonials audience="school" label={locale === "en" ? "▸ What schools say" : "▸ เสียงจากโรงเรียน"} />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
