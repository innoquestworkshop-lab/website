import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights on youth learning, experiential education, and what it takes to build skills that last.",
};

const posts = [
  {
    slug: "why-play-based-learning-works",
    title: "Why play-based learning actually works (and what the science says)",
    date: "April 2025",
    category: "Learning Science",
    excerpt: "Decades of research confirm what great teachers already know: children learn best when they're doing, creating, and exploring — not sitting and listening.",
  },
  {
    slug: "csr-programs-that-leave-a-mark",
    title: "5 things that make a CSR program worth remembering",
    date: "March 2025",
    category: "CSR",
    excerpt: "Most corporate youth programs are forgotten by Friday. Here's what separates the ones that stick — for the company and for the kids.",
  },
  {
    slug: "hackathon-what-students-really-learn",
    title: "What students really learn at a hackathon",
    date: "February 2025",
    category: "Programs",
    excerpt: "It's not about the coding. It's not even about the idea. Here's what actually shifts when kids spend 48 hours solving a real problem together.",
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <div style={{ background: "#1A1A1A" }} className="py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#E8473F] mb-3">
              Blog
            </p>
            <h1 className="text-4xl font-medium text-white mb-4">
              Ideas worth reading
            </h1>
            <p className="text-gray-400 text-sm max-w-[480px]">
              Insights on youth learning, experiential education, and what it takes to build skills that last.
            </p>
          </div>
        </div>

        <div style={{ background: "#F5F0EA" }} className="py-20 px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article key={post.slug} className="bg-white rounded-[14px] p-6 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#E8473F]">
                    {post.category}
                  </span>
                  <span className="text-xs text-[#3D3D3D]">{post.date}</span>
                </div>
                <h2 className="text-base font-medium text-[#1A1A1A] leading-snug">{post.title}</h2>
                <p className="text-sm text-[#3D3D3D] leading-relaxed flex-1">{post.excerpt}</p>
                <span className="text-sm text-[#E8473F] font-medium">Read more →</span>
              </article>
            ))}
          </div>
        </div>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
