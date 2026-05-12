import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { ContextualTestimonials } from "@/components/sections/ContextualTestimonials";
import { programs } from "@/data/programs";

export const metadata: Metadata = {
  title: "For Schools",
  description: "From one-day workshops to semester-long journeys — InnoQuest programs that align with your curriculum and calendar.",
};

export default function SchoolsPage() {
  const schoolPrograms = programs.filter((p) => p.audiences.includes("school"));

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <div style={{ background: "#1A1A1A" }} className="py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#E8473F] mb-3">
              For schools & institutions
            </p>
            <h1 className="text-4xl font-medium text-white mb-4 max-w-2xl">
              Programs that enhance what you already do
            </h1>
            <p className="text-gray-400 text-sm max-w-[520px] mb-8">
              Our learning designers align with your curriculum, teachers, and academic calendar — so every InnoQuest program feels like a natural extension of your school.
            </p>
            <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-[#E8473F] text-white text-sm font-medium rounded-full hover:bg-[#D63B34]">
              Talk to us →
            </Link>
          </div>
        </div>

        <div style={{ background: "#F5F0EA" }} className="py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-medium text-[#1A1A1A] mb-10">Programs for schools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {schoolPrograms.map((p) => (
                <Link
                  key={p.slug}
                  href={`/programs/${p.slug}`}
                  className="bg-white rounded-[14px] p-6 group transition-transform hover:-translate-y-1"
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

        <ContextualTestimonials audience="school" label="▸ What schools say" />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
