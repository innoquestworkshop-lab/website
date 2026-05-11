import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Custom Solutions",
  description: "Have something specific in mind? InnoQuest designs programs from scratch around your goals, audience, and timeline.",
};

const steps = [
  { num: "01", title: "Discovery call", body: "We start with a 30-minute conversation to understand your goals, audience, and constraints." },
  { num: "02", title: "Program design", body: "Our learning designers create a bespoke program framework tailored to your needs." },
  { num: "03", title: "Review & refine", body: "You review the proposal, we iterate until it's exactly right — before any commitment." },
  { num: "04", title: "Delivery & reporting", body: "We facilitate the program and deliver a full impact report on completion." },
];

export default function CustomPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <div style={{ background: "#1A1A1A" }} className="py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#E8473F] mb-3">
              Custom solutions
            </p>
            <h1 className="text-4xl font-medium text-white mb-4 max-w-2xl">
              Built around your goals, not ours
            </h1>
            <p className="text-gray-400 text-sm max-w-[520px] mb-8">
              Have something specific in mind? We design programs from scratch — custom themes, custom formats, custom outcomes. Tell us what you need.
            </p>
            <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-[#E8473F] text-white text-sm font-medium rounded-full hover:bg-[#D63B34]">
              Start the conversation →
            </Link>
          </div>
        </div>

        <div style={{ background: "#F5F0EA" }} className="py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-medium text-[#1A1A1A] mb-12">How custom programs work</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((s) => (
                <div key={s.num} className="bg-white rounded-[14px] p-6">
                  <span className="text-2xl font-medium text-[#E8473F] block mb-3">{s.num}</span>
                  <h3 className="text-base font-medium text-[#1A1A1A] mb-2">{s.title}</h3>
                  <p className="text-sm text-[#3D3D3D] leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
