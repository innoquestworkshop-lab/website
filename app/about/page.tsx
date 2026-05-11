import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { MethodologySection } from "@/components/sections/MethodologySection";

export const metadata: Metadata = {
  title: "About Us",
  description: "InnoQuest is a youth experiential learning company based in Bangkok, Thailand.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <div style={{ background: "#1A1A1A" }} className="py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#E8473F] mb-3">
              About InnoQuest
            </p>
            <h1 className="text-4xl font-medium text-white mb-4 max-w-2xl">
              We believe every kid has extraordinary potential
            </h1>
            <p className="text-gray-400 text-sm max-w-[520px]">
              InnoQuest is a youth experiential learning company based in Bangkok, Thailand. We design and facilitate programs that develop the skills the next generation will actually need.
            </p>
          </div>
        </div>

        <div style={{ background: "#F5F0EA" }} className="py-20 px-8">
          <div className="max-w-7xl mx-auto max-w-2xl">
            <h2 className="text-2xl font-medium text-[#1A1A1A] mb-6">Our story</h2>
            <div className="space-y-4 text-sm text-[#3D3D3D] leading-relaxed">
              <p>
                InnoQuest started with a simple observation: the skills that matter most in the modern world — critical thinking, creativity, collaboration, and confidence — are rarely taught in traditional classrooms.
              </p>
              <p>
                We set out to fix that. Not by replacing schools, but by building programs that complement formal education with real-world, play-based experiences that stick.
              </p>
              <p>
                Today, we partner with schools, corporations, and institutions across Thailand to deliver programs that are genuinely different — science-backed, outcome-driven, and designed for how kids and teens actually learn.
              </p>
            </div>

            <div className="mt-10">
              <Link href="/team" className="text-sm font-medium text-[#E8473F] hover:underline">
                Meet the team →
              </Link>
            </div>
          </div>
        </div>

        <MethodologySection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
