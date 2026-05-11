import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { programs } from "@/data/programs";

export const metadata: Metadata = {
  title: "Programs",
  description: "From one-day workshops to semester-long journeys — InnoQuest programs for schools, corporates, and families.",
};

export default function ProgramsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <div style={{ background: "#1A1A1A" }} className="py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#E8473F] mb-3">
              Programs
            </p>
            <h1 className="text-4xl font-medium text-white mb-4">
              Short, long, or fully custom
            </h1>
            <p className="text-gray-400 text-sm max-w-[480px]">
              From a single-day spark to a semester-long transformation — built around your goals.
            </p>
          </div>
        </div>

        <div style={{ background: "#F5F0EA" }} className="py-20 px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program) => (
              <Link
                key={program.slug}
                href={`/programs/${program.slug}`}
                className="bg-white rounded-[14px] p-6 flex flex-col gap-4 group transition-transform hover:-translate-y-1"
              >
                {program.featured && (
                  <span className="self-start text-[11px] font-medium uppercase tracking-[0.08em] text-[#E8473F] bg-[#E8473F]/10 px-2.5 py-1 rounded-full">
                    Most popular
                  </span>
                )}
                <div className="flex-1">
                  <h2 className="text-base font-medium text-[#1A1A1A] group-hover:text-[#E8473F] transition-colors mb-2">
                    {program.name}
                  </h2>
                  <p className="text-sm text-[#3D3D3D] leading-relaxed line-clamp-3">
                    {program.tagline}
                  </p>
                </div>
                <div className="flex gap-4 text-xs text-[#3D3D3D] pt-4 border-t border-[#E8E0D5]">
                  <span>{program.duration}</span>
                  <span>Ages {program.ages}</span>
                </div>
              </Link>
            ))}

            {/* Custom CTA card */}
            <Link
              href="/custom"
              className="bg-[#1A1A1A] rounded-[14px] p-6 flex flex-col justify-between group transition-transform hover:-translate-y-1"
            >
              <div>
                <h2 className="text-base font-medium text-white group-hover:text-[#E8473F] transition-colors mb-2">
                  Custom program
                </h2>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Have something specific in mind? We design programs from scratch around your goals, audience, and timeline.
                </p>
              </div>
              <span className="text-sm text-[#E8473F] mt-6">Build something custom →</span>
            </Link>
          </div>
        </div>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
