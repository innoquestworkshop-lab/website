import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/sections/CTASection";
import { getArticles, readingMinutes } from "@/lib/articles";

export const metadata: Metadata = {
  title: "บทความ",
  description:
    "บทความสำหรับพ่อแม่และคุณครู เรื่องทักษะผู้ประกอบการ การเรียนรู้ผ่านการลงมือทำ และเวิร์กช็อปของ InnoQuest สำหรับเด็กอายุ 10–18 ปีในกรุงเทพฯ",
  alternates: {
    canonical: "/th/blog",
    languages: { en: "/blog", th: "/th/blog", "x-default": "/blog" },
  },
  openGraph: { locale: "th_TH" },
};

export default function ThaiBlogIndex() {
  const posts = getArticles("th");
  return (
    <main lang="th">
      <section className="sec">
        <div className="wrap">
          <h1 className="t-display">บทความสำหรับพ่อแม่และคุณครู</h1>
          <p className="lede" style={{ marginTop: 16, maxWidth: "60ch" }}>
            บทความที่ตรงไปตรงมาและใช้ได้จริง เรื่องการเรียนทักษะผู้ประกอบการและวิธีที่เด็กเรียนรู้ได้ดีที่สุด
            {" "}<Link href="/blog" className="footer-link">Read in English</Link>
          </p>
          <div className="grid-3" style={{ marginTop: 40 }}>
            {posts.map((p) => (
              <Link key={p.slug} href={`/th/blog/${p.slug}`} className="card card--soft" style={{ display: "block" }}>
                <h2 className="h-sm">{p.title}</h2>
                <p className="t-small" style={{ marginTop: 8 }}>{p.description}</p>
                <p className="caption" style={{ marginTop: 12 }}>อ่าน {readingMinutes(p)} นาที →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </main>
  );
}
