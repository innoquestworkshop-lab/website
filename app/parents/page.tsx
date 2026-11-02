import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { ContextualTestimonials } from "@/components/sections/ContextualTestimonials";
import { parentsPage } from "@/data/parents";
import { getLocale } from "@/lib/i18n";
import { PageHero, Photo, plain, SectionHead } from "@/components/ui/system";

export const metadata: Metadata = {
  title: "Kids & Teen Entrepreneurship Camps, Bangkok",
  description: "Give your child real entrepreneurship, finance and innovation skills. InnoQuest camps, workshops and business simulations in Bangkok for ages 10–18.",
  alternates: { canonical: "/parents" },
  keywords: [
    "youth programs Bangkok",
    "kids entrepreneurship camp Thailand",
    "innovation workshops for children",
    "family learning programs Bangkok",
    "business simulation kids",
    "youth camps Bangkok",
    "children entrepreneurship Thailand",
    "InnoQuest parents",
  ],
  openGraph: {
    images: [{ url: "/images/events/price-war-058.jpg", width: 1200, height: 630, alt: "Students collaborating at an InnoQuest innovation workshop in Bangkok" }],
  },
  twitter: { card: "summary_large_image" },
};

const whyPhotos = [
  "/images/events/price-war-030.jpg",
  "/images/events/entre-1-090.jpg",
  "/images/events/price-war-153.jpg",
  "/images/events/IMG_8695.jpg",
];

export default async function ParentsPage() {
  const locale = await getLocale();
  const { hero, whyItMatters } = parentsPage[locale];

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow={plain(hero.eyebrow)}
          title={hero.heading}
          sub={hero.sub}
          actions={<>
            <Link href={hero.cta.href} className="btn btn-primary">{hero.cta.text}</Link>
            <Link href="/programs" className="btn btn-secondary">{locale === "en" ? "See all programs" : "ดูโปรแกรมทั้งหมด"}</Link>
          </>}
          columns={[
            [
              { src: "/images/events/price-war-058.jpg", alt: "Parents at InnoQuest", ratio: "3 / 4" },
              { fill: "red", ratio: "1 / 1" },
              { src: "/images/events/entre2-team.jpg", alt: "Students together after a programme", ratio: "4 / 5" },
              { fill: "sand", ratio: "4 / 3" },
            ],
            [
              { fill: "sand", ratio: "4 / 3" },
              { src: "/images/events/price-war-030.jpg", alt: "Students celebrating during a simulation", ratio: "3 / 4" },
              { mark: true, ratio: "1 / 1" },
              { src: "/images/events/IMG_7900.jpg", alt: "Students talking through ideas", ratio: "4 / 5" },
            ],
            [
              { src: "/images/events/price-war-146.jpg", alt: "Students laughing together", ratio: "4 / 5" },
              { fill: "dark", ratio: "3 / 4" },
              { src: "/images/events/entre2-shannon-1.jpg", alt: "A student presenting to the room", ratio: "3 / 4" },
            ],
          ]}
        />

        {/* Why it matters: each reason pinned next to a photo */}
        <section className="sec sec--canvas">
          <div className="wrap">
            <SectionHead
              title={whyItMatters.heading}
              sub={locale === "en"
                ? "Every InnoQuest program builds skills that schools don't prioritise: creativity, resilience, and the confidence to back their own ideas."
                : "ทุกโปรแกรมของ InnoQuest ส่งเสริมทักษะเพิ่มเติมจากการเรียนในห้องเรียน ได้แก่ ความคิดสร้างสรรค์ ความสามารถในการรับมือกับอุปสรรค และความมั่นใจในแนวคิดของตนเอง"}
            />
            <div className="pins pins--2">
              {whyItMatters.items.map((item, i) => (
                <div key={item.title}>
                  <Photo src={whyPhotos[i % whyPhotos.length]} alt={item.title} ratio={i % 2 ? "4 / 3" : "4 / 5"} sizes="(max-width: 640px) 100vw, 50vw" />
                  <div className="pin-body" style={{ display: "flex", gap: 16 }}>
                    <span className="num-sm" style={{ flex: "none" }}>{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="h-sm">{item.title}</h3>
                      <p className="t-small" style={{ marginTop: 4 }}>{item.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContextualTestimonials audience={["parent", "student"]} label={locale === "en" ? "▸ What parents & students say" : "▸ เสียงจากผู้ปกครองและนักเรียน"} />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
