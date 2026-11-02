import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/ui/ArticleBody";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { getArticle, getArticles, interleaveImages, readingMinutes } from "@/lib/articles";

const SITE = "https://www.innoquest.tech";
const LOCALE = "en" as const;

type Shot = { src: string; alt: string; caption: string; position?: string };

const collages: Record<string, Shot[]> = {
  "why-teach-entrepreneurship-students": [
    { src: "/images/events/break-the-market-5446.jpg", alt: "A team sorting coloured sticky notes on a table while a facilitator points", caption: "Teams map and sort their ideas on the table.", position: "center 72%" },
    { src: "/images/events/IMG_8695.jpg", alt: "A small team writing on worksheets around a table", caption: "A small team works through its plan." },
    { src: "/images/events/entre-1-090.jpg", alt: "The cohort in front of a slide for PROMP, a hair-care brand that joined as a guest speaker", caption: "PROMP, a real hair-care brand, joins as a guest speaker." },
  ],
  "gamification-live-experience-learning": [
    { src: "/images/events/price-war-105.jpg", alt: "A facilitator taking a group selfie with a cheering cohort at a summer camp", caption: "A high-energy moment on the last day of camp." },
    { src: "/images/events/change-lab-9142.jpg", alt: "A glass wall covered in students' handwritten thank-you notes", caption: "Notes students left at the end — one reads 'sanook mak' (so much fun)." },
    { src: "/images/events/price-war-080.jpg", alt: "A full cohort of students posing in front of an InnoQuest workshop slide", caption: "A full cohort at an InnoQuest workshop." },
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
      canonical: `/blog/${slug}`,
      languages: { en: `/blog/${slug}`, th: `/th/blog/${slug}`, "x-default": `/blog/${slug}` },
    },
    openGraph: { title: a.title, description: a.description, type: "article", url: `/blog/${slug}` },
  };
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(LOCALE, slug);
  if (!article) notFound();
  const shots = collages[slug] ?? [];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    inLanguage: "en",
    datePublished: article.date,
    dateModified: article.date,
    mainEntityOfPage: `${SITE}/blog/${slug}`,
    author: { "@type": "Organization", name: "InnoQuest", url: `${SITE}/` },
    publisher: {
      "@type": "Organization",
      name: "InnoQuest",
      logo: { "@type": "ImageObject", url: `${SITE}/logos/logo-transparent.png` },
    },
    image: shots[0] ? `${SITE}${shots[0].src}` : `${SITE}/opengraph-image`,
  };

  return (
    <main>
      <JsonLd data={jsonLd} />

      <section className="sec">
        <div className="wrap">
          <p className="caption" style={{ marginBottom: 16 }}>
            Resources — {new Date(article.date).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })} — {readingMinutes(article)} min read
          </p>
          <h1 className="t-display">{article.title}</h1>
          <p className="lede" style={{ marginTop: 16, maxWidth: "60ch" }}>{article.description}</p>
          <div className="actions" style={{ marginTop: 24 }}>
            <Link href="/signup" className="btn btn-primary">See InnoQuest workshops →</Link>
            <Link href={`/th/blog/${slug}`} className="footer-link" style={{ marginLeft: 16 }}>อ่านภาษาไทย</Link>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <ArticleBody blocks={interleaveImages(article.body, shots)} />
          <div className="actions" style={{ marginTop: 40 }}>
            <Link href="/signup" className="btn btn-primary">See InnoQuest workshops →</Link>
            <Link href="/blog" className="footer-link" style={{ marginLeft: 16 }}>← All resources</Link>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
