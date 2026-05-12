import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContextualTestimonials } from "@/components/sections/ContextualTestimonials";
import { programs } from "@/data/programs";

export const metadata: Metadata = {
  title: "For Parents",
  description: "Give your child real-world skills they won't learn in a classroom — InnoQuest programs built for curious, ambitious young minds.",
};

const whyItMatters = [
  {
    title: "Beyond the classroom",
    body: "InnoQuest programs tackle real challenges — not textbook exercises. Your child leaves with skills that employers and universities actually look for.",
  },
  {
    title: "Safe space to fail",
    body: "We design every program so failure is part of the process. Kids learn to iterate, adapt, and try again — the most important habit they can build.",
  },
  {
    title: "Mixed-age collaboration",
    body: "Working alongside peers of different ages mirrors how the real world operates, and builds social confidence that lasts.",
  },
  {
    title: "Tangible outcomes",
    body: "Every program ends with something your child made — a pitch, a prototype, a business plan. Proof of what they're capable of.",
  },
];

export default function ParentsPage() {
  const parentPrograms = programs.filter((p) => p.audiences.includes("parent"));

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <div style={{ background: "#1A1A1A" }} className="py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#E8473F] mb-3">
              For parents
            </p>
            <h1 className="text-4xl font-medium text-white mb-4 max-w-2xl">
              Give them the skills school doesn&apos;t teach
            </h1>
            <p className="text-gray-400 text-sm max-w-[520px] mb-8">
              InnoQuest programs build entrepreneurial thinking, creative problem-solving, and real-world confidence — the foundation every ambitious young person needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-[#E8473F] text-white text-sm font-medium rounded-full hover:bg-[#D63B34]"
            >
              Talk to us →
            </Link>
          </div>
        </div>

        {/* Why it matters */}
        <div style={{ background: "#F5F0EA" }} className="py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-medium text-[#1A1A1A] mb-10">Why it matters</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whyItMatters.map((item) => (
                <div key={item.title} className="bg-white rounded-[14px] p-6">
                  <h3 className="text-base font-medium text-[#1A1A1A] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#3D3D3D] leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Programs */}
        {parentPrograms.length > 0 && (
          <div className="bg-white py-20 px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-medium text-[#1A1A1A] mb-10">Programs your child can join</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {parentPrograms.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/programs/${p.slug}`}
                    className="bg-[#F5F0EA] rounded-[14px] p-6 group transition-transform hover:-translate-y-1"
                  >
                    <h3 className="text-base font-medium text-[#1A1A1A] group-hover:text-[#E8473F] transition-colors mb-2">
                      {p.name}
                    </h3>
                    <p className="text-sm text-[#3D3D3D] leading-relaxed mb-4 line-clamp-2">{p.tagline}</p>
                    <p className="text-xs text-[#3D3D3D]">{p.duration} · Ages {p.ages}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        <ContextualTestimonials audience={["parent", "student"]} label="▸ What parents & students say" />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
