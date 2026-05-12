import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Services | InnoQuest — Design, Delivery & Talent",
  description: "InnoQuest offers two core service pillars: Content, Game Design & Licensing, and Delivery, Coordination & Talent.",
};

const designServices = [
  {
    title: "Custom Game Design",
    body: "We build learning games and simulations from scratch — tailored to your objectives, industry, and audience. Every mechanic is designed to teach, not just entertain.",
  },
  {
    title: "In-House Product Licensing",
    body: "License our proven game formats and program IP directly for your facilitators to run in-house. Battle-tested across hundreds of participants.",
  },
  {
    title: "Learning Journey Development",
    body: "We architect multi-touchpoint learning journeys — from awareness to mastery — integrating your existing curriculum or starting from a blank canvas.",
  },
];

const deliveryServices = [
  {
    title: "Camps & Workshops",
    body: "Full-service facilitation for single-day workshops up to week-long residential camps. We handle design, logistics, facilitation, and post-program reporting.",
  },
  {
    title: "Competitions & Hackathons",
    body: "End-to-end competition organising — problem design, judging frameworks, event production, and participant experience from registration to awards.",
  },
  {
    title: "Innovation Challenges",
    body: "Structured challenge programs for schools and corporates that run over days, weeks, or a full semester. Real problems, real stakes, real outcomes.",
  },
  {
    title: "Mentor & Speaker Services",
    body: "We source and brief domain experts, industry practitioners, and keynote speakers matched to your program's theme and participant level.",
  },
  {
    title: "Event Organising",
    body: "Full production management — venue sourcing, logistics, AV, catering, branding, and on-the-day coordination. You show up, we run it.",
  },
  {
    title: "Course Hours & Curriculum",
    body: "Accredited or non-accredited course hours designed around your learning objectives, delivered by our trained facilitators or prepared for your own team.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <div style={{ background: "#1A1A1A" }} className="py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#E8473F] mb-3">
              Our Services
            </p>
            <h1 className="text-4xl font-medium text-white mb-4 max-w-2xl">
              Two ways to transform learning.
            </h1>
            <p className="text-gray-400 text-sm max-w-[520px]">
              Whether you want to build your own learning ecosystem or hand it to us to run — we have the service model to match.
            </p>
          </div>
        </div>

        {/* Nav anchors */}
        <div className="bg-white border-b border-[#F0EBE3] px-8 sticky top-16 z-10">
          <div className="max-w-7xl mx-auto flex gap-8">
            <a
              href="#design"
              className="py-4 text-sm font-medium border-b-2 border-transparent hover:border-[#E8473F] hover:text-[#E8473F] transition-colors text-[#1A1A1A]"
            >
              Content, Game Design & Licensing
            </a>
            <a
              href="#delivery"
              className="py-4 text-sm font-medium border-b-2 border-transparent hover:border-[#E8473F] hover:text-[#E8473F] transition-colors text-[#1A1A1A]"
            >
              Delivery, Coordination & Talent
            </a>
          </div>
        </div>

        {/* Design service */}
        <div id="design" className="py-20 px-8" style={{ background: "#F5F0EA" }}>
          <div className="max-w-7xl mx-auto">
            <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#E8473F] mb-3">
              Service 01
            </p>
            <h2 className="text-3xl font-medium text-[#1A1A1A] mb-3 max-w-xl">
              Content, Game Design & Licensing
            </h2>
            <p className="text-sm text-[#3D3D3D] max-w-[560px] mb-12 leading-relaxed">
              Build your own ecosystem using our battle-tested IP. We help you architect a curriculum from scratch that integrates innovation directly into your organisation's DNA.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {designServices.map((s) => (
                <div key={s.title} className="bg-white rounded-[14px] p-6">
                  <h3 className="text-base font-medium text-[#1A1A1A] mb-2">{s.title}</h3>
                  <p className="text-sm text-[#3D3D3D] leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-[#E8473F] text-white text-sm font-medium rounded-full hover:bg-[#D63B34] transition-colors"
              >
                Enquire about design services →
              </Link>
            </div>
          </div>
        </div>

        {/* Delivery service */}
        <div id="delivery" className="py-20 px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#E8473F] mb-3">
              Service 02
            </p>
            <h2 className="text-3xl font-medium text-[#1A1A1A] mb-3 max-w-xl">
              Delivery, Coordination & Talent
            </h2>
            <p className="text-sm text-[#3D3D3D] max-w-[560px] mb-12 leading-relaxed">
              Professional execution for any scale. If it relates to innovation and learning, we can deliver it.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {deliveryServices.map((s) => (
                <div key={s.title} className="rounded-[14px] p-6" style={{ background: "#F5F0EA" }}>
                  <h3 className="text-base font-medium text-[#1A1A1A] mb-2">{s.title}</h3>
                  <p className="text-sm text-[#3D3D3D] leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-[#E8473F] text-white text-sm font-medium rounded-full hover:bg-[#D63B34] transition-colors"
              >
                Enquire about event services →
              </Link>
            </div>
          </div>
        </div>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
