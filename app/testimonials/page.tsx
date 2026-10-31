import type { Metadata } from "next";
import { Fragment } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { testimonials, audienceGroups, testimonialsPageMeta } from "@/data/testimonials";
import { stats, yearsRunningStat, yearsRunningStatTh } from "@/data/stats";
import { getLocale } from "@/lib/i18n";
import { PageHero, Photo, plain, QuoteCard } from "@/components/ui/system";

export const metadata: Metadata = {
  title: "Real Reviews from Students, Schools & Corporates",
  description: "Students grew, schools transformed, corporates ran CSR programs worth talking about. See what parents, teachers, and HR teams say about InnoQuest workshops in Bangkok.",
  keywords: [
    "InnoQuest testimonials",
    "student workshop reviews Bangkok",
    "school innovation program feedback",
    "corporate CSR workshop reviews",
    "youth entrepreneurship camp reviews",
    "business simulation testimonials Thailand",
    "parent reviews InnoQuest",
    "innovation education feedback",
  ],
  openGraph: {
    images: [{ url: "/images/events/break-the-market-008.jpg", width: 1200, height: 630, alt: "Students engaged in an InnoQuest innovation workshop" }],
  },
  twitter: { card: "summary_large_image" },
};

/** One event photo pinned into each group's quote wall. */
const groupPhotos: Record<string, { src: string; alt: string }> = {
  corporate: { src: "/images/events/price-war-071.jpg", alt: "The Swipe Next Gen summer camp" },
  school: { src: "/images/events/acs-teachers.jpg", alt: "Teachers and the InnoQuest team on stage" },
  parent: { src: "/images/events/price-war-058.jpg", alt: "Students at an InnoQuest workshop" },
  student: { src: "/images/events/price-war-030.jpg", alt: "Students celebrating during a simulation" },
};

export default async function TestimonialsPage() {
  const locale = await getLocale();
  const page = testimonialsPageMeta[locale];
  const groups = audienceGroups[locale];
  const hoursIndex = stats.en.findIndex((s) => s.label === "Session hours");
  const hoursS = stats[locale][hoursIndex];
  const yearsS = locale === "en" ? yearsRunningStat : yearsRunningStatTh;
  const studentsStat = stats.en.find((s) => s.label === "Students trained")!;
  const satisfactionStat = stats.en.find((s) => s.label === "Participants Satisfaction")!;
  const heroStats = [
    { num: `${studentsStat.n}${studentsStat.suf}`, label: locale === "en" ? studentsStat.label : "นักเรียนที่ผ่านการอบรม" },
    { num: `${hoursS.n}${hoursS.suf}`, label: hoursS.label },
    { num: `${satisfactionStat.n}${satisfactionStat.suf}`, label: locale === "en" ? satisfactionStat.label : "ความพึงพอใจของผู้เข้าร่วม" },
    { num: `${yearsS.n}${yearsS.suf}`, label: yearsS.label },
  ];

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow={plain(page.eyebrow)}
          title={page.heading}
          sub={locale === "en"
            ? "From students who discovered what they're capable of, to schools that saw their classrooms transform, to corporates who finally ran a CSR program worth talking about."
            : "ตั้งแต่นักเรียนที่ค้นพบศักยภาพของตนเอง โรงเรียนที่เห็นการเปลี่ยนแปลงในห้องเรียน ไปจนถึงองค์กรที่ได้ดำเนินโครงการ CSR อันมีคุณค่า"}
          after={
            <>
              <div style={{ display: "flex", gap: 8, marginTop: 24, flexWrap: "wrap" }}>
                {groups.filter((g) => testimonials.some((t) => t.audience === g.key && !t.personTag)).map((g) => (
                  <a key={g.key} href={`#group-${g.key}`} className="pill pill--line" style={{ textDecoration: "none" }}>{g.tag}</a>
                ))}
              </div>
              <div className="grid-2" style={{ marginTop: 32, gap: 24 }}>
                {heroStats.map((s) => (
                  <div key={s.label} className="step">
                    <div className="num">{s.num}</div>
                    <p className="t-small" style={{ marginTop: 4, color: "var(--mute)" }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </>
          }
          columns={[
            [
              { src: "/images/events/break-the-market-008.jpg", alt: "Sticky notes on a Break the Market table", ratio: "3 / 4" },
              { fill: "red", ratio: "1 / 1" },
              { src: "/images/events/price-war-146.jpg", alt: "Students laughing together", ratio: "4 / 5" },
              { fill: "sand", ratio: "3 / 4" },
            ],
            [
              { fill: "sand", ratio: "4 / 3" },
              { src: "/images/events/entre-1-090.jpg", alt: "A cohort celebrating", ratio: "3 / 4" },
              { mark: true, ratio: "1 / 1" },
              { src: "/images/events/price-war-153.jpg", alt: "A team huddled at their table", ratio: "4 / 5" },
              { fill: "dark", ratio: "4 / 3" },
            ],
            [
              { src: "/images/events/IMG_8856.jpg", alt: "Students at work", ratio: "4 / 5" },
              { fill: "dark", ratio: "3 / 4" },
              { src: "/images/events/price-war-030.jpg", alt: "Students cheering", ratio: "1 / 1" },
              { fill: "sand", ratio: "4 / 5" },
            ],
          ]}
        />

        {/* Testimonial groups */}
        {groups.map(({ key, label, tag }, gi) => {
          const items = testimonials
            .filter((t) => t.audience === key && !t.personTag)
            .sort((a, b) => (a.role === "Student" ? 1 : 0) - (b.role === "Student" ? 1 : 0));
          if (items.length === 0) return null;
          const canvas = gi % 2 === 0;
          const photo = groupPhotos[key];
          return (
            <section key={key} id={`group-${key}`} className={`sec sec--line${canvas ? " sec--canvas" : ""}`}>
              <div className="wrap">
                <div style={{ display: "flex", alignItems: "end", justifyContent: "space-between", marginBottom: 32, flexWrap: "wrap", gap: 16 }}>
                  <h2 className="h-section">{label}.</h2>
                  <span className="pill pill--red">{tag}</span>
                </div>
                <div className={items.length >= 4 ? "pins" : "grid-3"} style={{ alignItems: "start" }}>
                  {items.map((t, i) => (
                    <Fragment key={t.id}>
                      {i === 1 && photo && <Photo src={photo.src} alt={photo.alt} ratio="4 / 5" />}
                      <QuoteCard t={t} badge={t.extraBadge} soft={canvas} />
                    </Fragment>
                  ))}
                  {items.length === 1 && photo && <Photo src={photo.src} alt={photo.alt} ratio="4 / 5" />}
                </div>
              </div>
            </section>
          );
        })}

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
