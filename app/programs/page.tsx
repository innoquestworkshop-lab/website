import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { ContextualTestimonials } from "@/components/sections/ContextualTestimonials";
import { PathwaySection } from "@/components/sections/PathwaySection";
import { programs, programsPageMeta } from "@/data/programs";
import { getLocale } from "@/lib/i18n";
import { Arrowed, CheckIcon, PageHero, Photo } from "@/components/ui/system";

export const metadata: Metadata = {
  title: "Entrepreneurship Programs for Ages 10–18",
  description: "Entrepreneurship workshops, business simulations and innovation camps in Bangkok for ages 10–18 — for schools, families and corporates, from 1-day to semester-long.",
  alternates: { canonical: "/programs" },
  keywords: [
    "innovation workshops Bangkok",
    "entrepreneurship camp Thailand",
    "business simulation students",
    "youth learning programs Bangkok",
    "STEM workshops ages 10-18",
    "school programs Bangkok",
    "CSR youth programs Thailand",
    "InnoQuest programs",
    "entrepreneurship education Thailand",
    "student innovation Thailand",
  ],
  openGraph: {
    images: [{ url: "/images/events/price-war-080.jpg", width: 1200, height: 630, alt: "Students competing in an InnoQuest business simulation workshop in Bangkok" }],
  },
  twitter: { card: "summary_large_image" },
};

/** Alternating photo ratios give the program wall its Pinterest rhythm. */
const ratios = ["4 / 5", "4 / 3", "4 / 3", "4 / 5"];

export default async function ProgramsPage() {
  const locale = await getLocale();
  const meta = programsPageMeta[locale];
  const allPrograms = programs[locale];
  const features = locale === "en"
    ? ["Powered by Tech", "Expert Facilitation", "Real-time Competition", "Post-workshop Analysis"]
    : ["สนับสนุนด้วยเทคโนโลยี", "วิทยากรผู้เชี่ยวชาญ", "การแข่งขันแบบเรียลไทม์", "การวิเคราะห์ผลหลังเวิร์กช็อป"];

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow={locale === "en" ? "Experiences & Programs" : "ประสบการณ์และโปรแกรม"}
          title={meta.heading}
          sub={meta.sub}
          actions={<>
            <Link href="/contact" className="btn btn-primary">{locale === "en" ? "Enquire now →" : "สอบถามข้อมูล →"}</Link>
            <Link href="#pathway" className="btn btn-secondary">{locale === "en" ? "View full pathway →" : "ดูเส้นทางการเรียนรู้ทั้งหมด →"}</Link>
          </>}
          columns={[
            [
              { src: "/images/events/price-war-080.jpg", alt: "A full room at an InnoQuest business simulation", ratio: "3 / 4" },
              { fill: "dark", ratio: "1 / 1" },
              { src: "/images/events/entre2-team.jpg", alt: "Entrepreneur in Innovation participants", ratio: "4 / 5" },
              { fill: "sand", ratio: "4 / 3" },
            ],
            [
              { fill: "sand", ratio: "4 / 3" },
              { src: "/images/events/break-the-market-5758.jpg", alt: "Teams at Break the Market", ratio: "3 / 4" },
              { fill: "red", ratio: "1 / 1" },
              { src: "/images/events/price-war-149.jpg", alt: "Capital Minds simulation tables", ratio: "4 / 5" },
            ],
            [
              { src: "/images/events/change-lab-9142.jpg", alt: "Ideas pinned to a glass wall at The Change Lab", ratio: "4 / 5" },
              { mark: true, ratio: "1 / 1" },
              { src: "/images/events/IMG_8695.jpg", alt: "Students sketching a business idea", ratio: "3 / 4" },
              { fill: "dark", ratio: "4 / 5" },
            ],
          ]}
        />

        {/* Program wall */}
        <section className="sec sec--canvas">
          <div className="wrap split split--top split--aside">
            <div className="sticky-col" style={{ top: "calc(var(--nav-height) + 32px)" }}>
              <h2 className="h-card">{locale === "en" ? "Our programs" : "โปรแกรมของเรา"}</h2>
              <p className="t-small" style={{ marginTop: 12 }}>
                {locale === "en"
                  ? "Each program runs as a standalone sprint or links into the full entrepreneurial pathway. Every experience runs on our live simulation engine."
                  : "แต่ละโปรแกรมจัดเป็นกิจกรรมระยะสั้นแยกกัน หรือเชื่อมต่อเป็นเส้นทางผู้ประกอบการเต็มรูปแบบได้ ทุกโปรแกรมดำเนินการบนระบบจำลองสถานการณ์แบบเรียลไทม์ของ InnoQuest"}
              </p>
              <div style={{ marginTop: 24 }}>
                {features.map((f) => (
                  <div key={f} className="check-row"><CheckIcon size={12} /> {f}</div>
                ))}
              </div>
              <Link href="#pathway" className="link" style={{ marginTop: 24 }}>
                {locale === "en" ? "See the full pathway →" : "ดูเส้นทางการเรียนรู้ทั้งหมด →"}
              </Link>
            </div>

            <div className="pins pins--2">
              {allPrograms.map((program, i) => (
                <Link key={program.slug} href={`/programs/${program.slug}`} className="pin">
                  {program.heroImg ? (
                    <Photo
                      src={program.heroImg}
                      alt={program.name}
                      ratio={ratios[i % ratios.length]}
                      position={program.heroImgPosition}
                      scale={program.heroImgScale}
                      blur={program.heroImgBlur}
                      sizes="(max-width: 640px) 100vw, 40vw"
                    />
                  ) : (
                    <div className="tile tile--sand" style={{ aspectRatio: ratios[i % ratios.length] }} />
                  )}
                  <div className="pin-body">
                    {(program.featured || program.comingSoon) && (
                      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
                        {program.featured && <span className="pill pill--red">{meta.popularBadge}</span>}
                        {program.comingSoon && <span className="pill">{locale === "en" ? "Coming soon" : "เตรียมเปิดตัว"}</span>}
                      </div>
                    )}
                    <h3 className="h-card">{program.name}</h3>
                    <p className="t-small" style={{ marginTop: 4, fontWeight: 500, color: "var(--ink)" }}>{program.tagline}</p>
                    <p className="t-small" style={{ marginTop: 8 }}>{program.description}</p>
                  </div>
                </Link>
              ))}

              {/* Custom tile at the end of the wall */}
              <Link href={meta.customTile.href} className="card card--sand card--lg" style={{ textDecoration: "none", gap: 16 }}>
                <p className="eyebrow" style={{ color: "var(--body)" }}>{meta.customTile.heading}</p>
                <h3 className="h-card">{meta.customTile.body}</h3>
                <span className="btn btn-primary" style={{ alignSelf: "flex-start" }}>
                  <Arrowed text={meta.customTile.cta} />
                </span>
              </Link>
            </div>
          </div>
        </section>

        <PathwaySection locale={locale} />

        <ContextualTestimonials audience="student" label={locale === "en" ? "▸ What participants say" : "▸ เสียงจากผู้เข้าร่วม"} limit={3} />

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
