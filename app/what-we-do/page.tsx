import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MethodologySection } from "@/components/sections/MethodologySection";
import { ServiceSections } from "@/components/sections/ServiceSections";
import { CustomSection } from "@/components/sections/CustomSection";
import { CTASection } from "@/components/sections/CTASection";
import { whatWeDoPage } from "@/data/whatWeDo";
import { audienceCards } from "@/data/audiences";
import { getLocale } from "@/lib/i18n";
import { AccentHeading, Arrowed, Lines, PageHero, Photo, plain, SectionHead, Steps } from "@/components/ui/system";

export const metadata: Metadata = {
  title: "How We Teach Innovation | InnoQuest",
  description: "Hands-on workshops, business simulations & camps in Bangkok. InnoQuest uses experiential learning to build entrepreneurial thinking in students aged 10–18.",
  keywords: [
    "innovation workshops Bangkok",
    "experiential learning Thailand",
    "entrepreneurship camp for students",
    "business simulation youth",
    "school innovation program",
    "STEM camp Bangkok",
    "CSR youth program",
    "design thinking workshop",
    "bespoke learning programs Bangkok",
    "custom innovation workshops",
  ],
  openGraph: {
    images: [{ url: "/images/events/price-war-154.jpg", width: 1200, height: 630, alt: "Students competing in InnoQuest's Price War business simulation in Bangkok" }],
  },
  twitter: { card: "summary_large_image" },
};

const audiencePhotos = [
  "/images/events/ac-w4-001.jpg",
  "/images/events/price-war-067.jpg",
  "/images/events/price-war-058.jpg",
  "/images/events/entre-1-090.jpg",
];

const fallbackServicePhotos = ["/images/events/price-war-141.jpg", "/images/events/sme-business-016.jpg"];

export default async function WhatWeDoPage() {
  const locale = await getLocale();
  const page = whatWeDoPage[locale];
  const cards = audienceCards[locale];
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
              { src: "/images/events/price-war-154.jpg", alt: "Students competing in the Price War simulation", ratio: "3 / 4" },
              { fill: "sand", ratio: "1 / 1" },
              { src: "/images/events/break-the-market-5758.jpg", alt: "Teams at Break the Market", ratio: "4 / 5" },
              { fill: "dark", ratio: "4 / 3" },
            ],
            [
              { fill: "red", ratio: "4 / 3" },
              { src: "/images/events/price-war-011.jpg", alt: "A full room during a simulation round", ratio: "3 / 4" },
              { mark: true, ratio: "1 / 1" },
              { src: "/images/events/entre-1-090.jpg", alt: "Students celebrating at the end of a programme", ratio: "4 / 5" },
            ],
            [
              { src: "/images/events/IMG_8695.jpg", alt: "Students working through a challenge", ratio: "4 / 5" },
              { fill: "dark", ratio: "3 / 4" },
              { src: "/images/events/price-war-141.jpg", alt: "A student reading results on a laptop", ratio: "1 / 1" },
              { fill: "sand", ratio: "4 / 5" },
            ],
          ]}
        />

        {/* Core services: two photo-led pins */}
        <section className="sec sec--canvas">
          <div className="wrap">
            <SectionHead eyebrow={plain(page.coreServices.eyebrow)} title={<Lines text={page.coreServices.heading} />} sub={page.coreServices.sub} />
            <div className="grid-2" style={{ gap: 32 }}>
              {page.coreServices.items.map((s, i) => {
                const extra = s as { img?: string; imgScale?: number };
                return (
                  <Link key={s.title} href={s.href} className="pin">
                    <Photo src={extra.img ?? fallbackServicePhotos[i % 2]} alt={s.title} ratio="16 / 10" position="right center" scale={extra.imgScale} sizes="(max-width: 640px) 100vw, 50vw" />
                    <div className="pin-body">
                      <span className="pill">{s.tag}</span>
                      <h3 className="h-card" style={{ marginTop: 12 }}>{s.title}</h3>
                      <p className="t-small" style={{ marginTop: 8 }}>{s.body}</p>
                      <span className="link" style={{ marginTop: 16 }}><Arrowed text={s.cta} size={14} /></span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <ServiceSections locale={locale} />
        <CustomSection locale={locale} />

        {/* How we work: 3-step process */}
        <section className="sec sec--line">
          <div className="wrap">
            <SectionHead eyebrow={plain(page.process.eyebrow)} title={<Lines text={page.process.heading} />} sub={page.process.sub} />
            <Steps steps={page.process.steps} columns={3} />
          </div>
        </section>

        {/* Your org's learning path */}
        <section className="sec sec--canvas">
          <div className="wrap">
            <SectionHead eyebrow={plain(page.learningPath.eyebrow)} title={<Lines text={page.learningPath.heading} accentLine={1} />} sub={page.learningPath.sub} />
            <Steps steps={page.learningPath.steps} columns={4} />
            <div className="actions" style={{ marginTop: 48 }}>
              <Link href={page.learningPath.cta1.href} className="btn btn-primary">{page.learningPath.cta1.text}</Link>
              <Link href={page.learningPath.cta2.href} className="btn btn-secondary">{page.learningPath.cta2.text}</Link>
            </div>
          </div>
        </section>

        {/* Who we work with */}
        <section className="sec sec--line">
          <div className="wrap">
            <SectionHead
              eyebrow={locale === "en" ? "Who we work with" : "กลุ่มผู้ร่วมงาน"}
              title={locale === "en" ? <>Programs for every audience.</> : <>โปรแกรมสำหรับทุกกลุ่มเป้าหมาย</>}
            />
            <div className="grid-4">
              {cards.map((a, i) => (
                <Link key={a.label} href={a.href} className="pin">
                  <Photo src={audiencePhotos[i % audiencePhotos.length]} alt={a.label} ratio="4 / 5" sizes="(max-width: 640px) 100vw, 25vw" />
                  <div className="pin-body">
                    <h3 className="h-sm">{a.label}</h3>
                    <p className="t-small" style={{ marginTop: 8 }}>{a.body}</p>
                    <span className="link" style={{ marginTop: 12 }}><Arrowed text={a.cta} size={14} /></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <MethodologySection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
