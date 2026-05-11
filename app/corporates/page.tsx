import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export const metadata: Metadata = {
  title: "For Corporates",
  description: "Partner with InnoQuest to deliver meaningful youth development under your CSR strategy.",
};

const benefits = [
  { title: "Turnkey delivery", body: "We handle everything — design, facilitation, logistics, and documentation. Your team shows up, we take care of the rest." },
  { title: "Impact report", body: "Every program ends with a documented impact report your leadership and comms teams can use to tell the story." },
  { title: "Flexible scope", body: "Half-day, full-day, multi-day. 30 kids or 300. We scale to your budget and headcount." },
  { title: "Brand alignment", body: "Programs are branded and themed around your company values, industries, or CSR priorities." },
];

export default function CorporatesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <div style={{ background: "#1A1A1A" }} className="py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#E8473F] mb-3">
              For corporates & CSR
            </p>
            <h1 className="text-4xl font-medium text-white mb-4 max-w-2xl">
              A CSR program that actually works
            </h1>
            <p className="text-gray-400 text-sm max-w-[520px] mb-8">
              Partner with InnoQuest to deliver meaningful youth development under your CSR strategy. Your team gets a compelling story — the kids get life-changing skills.
            </p>
            <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-[#E8473F] text-white text-sm font-medium rounded-full hover:bg-[#D63B34]">
              Talk to us →
            </Link>
          </div>
        </div>

        <div style={{ background: "#F5F0EA" }} className="py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-medium text-[#1A1A1A] mb-10">What you get</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((b) => (
                <div key={b.title} className="bg-white rounded-[14px] p-6">
                  <h3 className="text-base font-medium text-[#1A1A1A] mb-2">{b.title}</h3>
                  <p className="text-sm text-[#3D3D3D] leading-relaxed">{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-medium text-[#1A1A1A] mb-8">Recommended program</h2>
            <Link href="/programs/corporate-csr-camp" className="block bg-[#F5F0EA] rounded-[14px] p-8 max-w-xl group hover:-translate-y-1 transition-transform">
              <h3 className="text-lg font-medium text-[#1A1A1A] group-hover:text-[#E8473F] transition-colors mb-2">Corporate CSR Camp</h3>
              <p className="text-sm text-[#3D3D3D] mb-4">Meaningful impact. Measurable outcomes. A story worth telling.</p>
              <span className="text-sm text-[#E8473F]">View program →</span>
            </Link>
          </div>
        </div>

        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
