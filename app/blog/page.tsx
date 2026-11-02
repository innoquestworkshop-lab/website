import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/sections/CTASection";
import { getArticles, readingMinutes } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Practical articles for parents and teachers on youth entrepreneurship, experiential learning and InnoQuest's workshops for students aged 10–18 in Bangkok.",
  alternates: {
    canonical: "/blog",
    languages: { en: "/blog", th: "/th/blog", "x-default": "/blog" },
  },
};

export default function BlogIndex() {
  const posts = getArticles("en");
  return (
    <main>
      <section className="sec">
        <div className="wrap">
          <h1 className="t-display">Resources for parents &amp; teachers</h1>
          <p className="lede" style={{ marginTop: 16, maxWidth: "60ch" }}>
            Honest, practical reads on entrepreneurship education and how students learn best.
            {" "}<Link href="/th/blog" className="footer-link">อ่านภาษาไทย</Link>
          </p>
          <div className="grid-3" style={{ marginTop: 40 }}>
            {posts.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="card card--soft" style={{ display: "block" }}>
                <h2 className="h-sm">{p.title}</h2>
                <p className="t-small" style={{ marginTop: 8 }}>{p.description}</p>
                <p className="caption" style={{ marginTop: 12 }}>{readingMinutes(p)} min read →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </main>
  );
}
