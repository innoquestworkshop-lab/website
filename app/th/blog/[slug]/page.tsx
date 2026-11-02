import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/ui/ArticleBody";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { getArticle, getArticles, interleaveImages, readingMinutes } from "@/lib/articles";

const SITE = "https://www.innoquest.tech";
const LOCALE = "th" as const;

type Shot = { src: string; alt: string; caption: string; position?: string };

const collages: Record<string, Shot[]> = {
  "why-teach-entrepreneurship-students": [
    { src: "/images/events/break-the-market-5446.jpg", alt: "ทีมช่วยกันจัดโพสต์อิทบนโต๊ะ โดยมีพี่วิทยากรชี้ประกอบ", caption: "ทีมช่วยกันจัดและเรียงไอเดียบนโต๊ะ", position: "center 72%" },
    { src: "/images/events/IMG_8695.jpg", alt: "ทีมเล็กๆ ช่วยกันเขียนงานรอบโต๊ะ", caption: "ทีมเล็กๆ ช่วยกันวางแผน" },
    { src: "/images/events/entre-1-090.jpg", alt: "เด็กๆ ทั้งรุ่นหน้าสไลด์ของ PROMP แบรนด์ดูแลเส้นผมที่มาเป็นวิทยากรรับเชิญ", caption: "PROMP แบรนด์ดูแลเส้นผมจริง มาเป็นวิทยากรรับเชิญ" },
  ],
  "gamification-live-experience-learning": [
    { src: "/images/events/price-war-105.jpg", alt: "พี่วิทยากรถ่ายเซลฟี่หมู่กับเด็กๆ ที่กำลังสนุกในค่ายซัมเมอร์", caption: "ช่วงเวลาสนุกๆ ในวันสุดท้ายของค่าย" },
    { src: "/images/events/change-lab-9142.jpg", alt: "ผนังกระจกเต็มไปด้วยโน้ตขอบคุณที่เด็กๆ เขียนด้วยลายมือ", caption: "โน้ตที่เด็กๆ เขียนทิ้งไว้ตอนจบ มีใบหนึ่งเขียนว่า ‘สนุกมาก’" },
    { src: "/images/events/price-war-080.jpg", alt: "เด็กๆ ทั้งรุ่นถ่ายรูปหน้าสไลด์เวิร์กช็อปของ InnoQuest", caption: "เด็กๆ ทั้งรุ่นในเวิร์กช็อปของ InnoQuest" },
  ],
};

export function generateStaticParams() {
  return getArticles(LOCALE).map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(LOCALE, slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.description,
    alternates: {
      canonical: `/th/blog/${slug}`,
      languages: { en: `/blog/${slug}`, th: `/th/blog/${slug}`, "x-default": `/blog/${slug}` },
    },
    openGraph: { title: a.title, description: a.description, type: "article", url: `/th/blog/${slug}`, locale: "th_TH" },
  };
}

export default async function ThaiBlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(LOCALE, slug);
  if (!article) notFound();
  const shots = collages[slug] ?? [];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    inLanguage: "th",
    datePublished: article.date,
    dateModified: article.date,
    mainEntityOfPage: `${SITE}/th/blog/${slug}`,
    author: { "@type": "Organization", name: "InnoQuest", url: `${SITE}/` },
    publisher: {
      "@type": "Organization",
      name: "InnoQuest",
      logo: { "@type": "ImageObject", url: `${SITE}/logos/logo-transparent.png` },
    },
    image: shots[0] ? `${SITE}${shots[0].src}` : `${SITE}/opengraph-image`,
  };

  return (
    <main lang="th">
      <JsonLd data={jsonLd} />

      <section className="sec">
        <div className="wrap">
          <p className="caption" style={{ marginBottom: 16 }}>
            บทความ — {new Date(article.date).toLocaleDateString("th-TH", { year: "numeric", month: "long", day: "numeric" })} — อ่าน {readingMinutes(article)} นาที
          </p>
          <h1 className="t-display">{article.title}</h1>
          <p className="lede" style={{ marginTop: 16, maxWidth: "60ch" }}>{article.description}</p>
          <div className="actions" style={{ marginTop: 24 }}>
            <Link href="/signup" className="btn btn-primary">ดูเวิร์กช็อปของ InnoQuest →</Link>
            <Link href={`/blog/${slug}`} className="footer-link" style={{ marginLeft: 16 }}>Read in English</Link>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <ArticleBody blocks={interleaveImages(article.body, shots)} />
          <div className="actions" style={{ marginTop: 40 }}>
            <Link href="/signup" className="btn btn-primary">ดูเวิร์กช็อปของ InnoQuest →</Link>
            <Link href="/th/blog" className="footer-link" style={{ marginLeft: 16 }}>← บทความทั้งหมด</Link>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
