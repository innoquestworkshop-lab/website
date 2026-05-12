import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MethodologySection } from "@/components/sections/MethodologySection";
import { CTASection } from "@/components/sections/CTASection";
import { programs } from "@/data/programs";

export const metadata: Metadata = {
  title: "What We Do | InnoQuest — Custom Learning Design, Camps & Innovation Events",
  description: "InnoQuest provides custom game design, camp delivery, and competition organizing. We listen to your needs to develop high-impact workshops and innovation events tailored to your objectives.",
};

const process = [
  {
    num: "01",
    title: "Design & Development",
    body: "We always start by listening to what you want to achieve! We adapt programs based on your timeline, participant , and setting to make sure it's exactly what you're looking for.",
  },
  {
    num: "02",
    title: "Facilitation & Logistics",
    body: "We've got it covered from start to finish. Whether it's venues, logistics, or mentors and speakers, we handle it all. We deal with the nitty-gritty so you can stay focused on the big picture.",
  },
  {
    num: "03",
    title: "Impact & Analytics",
    body: "Data-driven insights. Every journey concludes with a comprehensive report measuring skill growth, participant engagement, and facilitator observations. We turn it into tangible metrics that prove real-world impact and ROI.",
  },
];

const coreServices = [
  {
    title: "Content, Game Design & Licensing",
    body: "Build your own ecosystem using our battle-tested IP. This includes Custom Game Design, In-House Product Licensing for proven formats, and Learning Journey Development as a Service. We help you architect a curriculum from scratch that integrates innovation directly into your organization's DNA.",
    cta: "View Design services",
    href: "/services#design",
  },
  {
    title: "Delivery, Coordination & Talent",
    body: "Professional execution for any scale. Our versatile team delivers Camps, Workshops, Competitions, and Hackathons, alongside specialized Innovation Challenges. We provide the full infrastructure: Event Organizing, Mentor and Speaker Services, and Course Hours tailored to bring your boldest ideas to life—if it relates to innovation and learning, we can deliver it.",
    cta: "View Event services",
    href: "/services#delivery",
  },
];

const audiences = [
  {
    label: "Corporates & CSR",
    body: "Turn your CSR budget into a story worth telling. We handle everything — your team shows up, the kids leave with real skills.",
    href: "/corporates",
    cta: "Learn more",
  },
  {
    label: "Schools & Institutions",
    body: "Programs that align with your curriculum and calendar, designed alongside your teachers, not on top of them.",
    href: "/schools",
    cta: "Learn more",
  },
  {
    label: "Parents & Families",
    body: "Give your child the skills that formal education doesn't prioritise — creativity, confidence, and critical thinking.",
    href: "/programs",
    cta: "See programs",
  },
  {
    label: "Students",
    body: "Come solve real problems with real teams. No textbooks. No right answers. Just you, your ideas, and a challenge worth tackling.",
    href: "/programs",
    cta: "See programs",
  },
];

export default function WhatWeDoPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <div style={{ background: "#1A1A1A" }} className="py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#E8473F] mb-3">
              Empowering Innovators
            </p>
            <h1 className="text-4xl font-medium text-white mb-4 max-w-2xl">
              Turning "Unteachable" Skills into Unforgettable Experiences.
            </h1>
            <p className="text-gray-400 text-sm max-w-[520px]">
              We bridge the gap between theory and reality. Whether it's a high-energy workshop, a week-long residential camp, or a national innovation competition, InnoQuest transforms complex concepts into immersive learning journeys for schools, corporations, and communities.
            </p>
          </div>
        </div>

        {/* Process */}
        <div style={{ background: "#F5F0EA" }} className="py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#3D3D3D] mb-3">
              How We Work
            </p>
            <h2 className="text-2xl font-medium text-[#1A1A1A] mb-12">
              From Concept to Coordination.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {process.map((s) => (
                <div key={s.num} className="bg-white rounded-[14px] p-6">
                  <span className="text-2xl font-medium text-[#E8473F] block mb-4">{s.num}</span>
                  <h3 className="text-base font-medium text-[#1A1A1A] mb-2">{s.title}</h3>
                  <p className="text-sm text-[#3D3D3D] leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Services */}
        <div className="bg-white py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#3D3D3D] mb-3">
              Our Core Services
            </p>
            <h2 className="text-2xl font-medium text-[#1A1A1A] mb-12">
              Two ways to transform learning.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {coreServices.map((s) => (
                <div key={s.title} className="rounded-[14px] p-8 flex flex-col" style={{ background: "#F5F0EA" }}>
                  <h3 className="text-lg font-medium text-[#1A1A1A] mb-3">{s.title}</h3>
                  <p className="text-sm text-[#3D3D3D] leading-relaxed flex-1 mb-6">{s.body}</p>
                  <Link href={s.href} className="text-sm font-medium text-[#E8473F] hover:underline">
                    {s.cta} →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Audiences */}
        <div className="bg-white py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#3D3D3D] mb-3">
              Who we work with
            </p>
            <h2 className="text-2xl font-medium text-[#1A1A1A] mb-12">
              Programs for every context
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {audiences.map((a) => (
                <div key={a.label} className="rounded-[14px] p-6 flex flex-col" style={{ background: "#F5F0EA" }}>
                  <h3 className="text-base font-medium text-[#1A1A1A] mb-2">{a.label}</h3>
                  <p className="text-sm text-[#3D3D3D] leading-relaxed flex-1 mb-5">{a.body}</p>
                  <Link
                    href={a.href}
                    className="text-sm font-medium text-[#E8473F] hover:underline"
                  >
                    {a.cta} →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Programs preview */}
        <div style={{ background: "#1A1A1A" }} className="py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-white/40 mb-3">
              Our programs
            </p>
            <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
              <h2 className="text-2xl font-medium text-white">
                Ready-to-run formats
              </h2>
              <Link href="/programs" className="text-sm font-medium text-[#E8473F] hover:underline">
                View all programs →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {programs.map((p) => (
                <Link
                  key={p.slug}
                  href={`/programs/${p.slug}`}
                  className="rounded-[14px] p-5 border border-white/10 hover:border-[#E8473F]/50 group transition-colors"
                >
                  {p.featured && (
                    <span className="text-[10px] font-medium uppercase tracking-[0.06em] text-[#E8473F] block mb-3">
                      Most popular
                    </span>
                  )}
                  <h3 className="text-sm font-medium text-white group-hover:text-[#E8473F] transition-colors mb-2">
                    {p.name}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 mb-4">
                    {p.tagline}
                  </p>
                  <div className="flex gap-3 text-[11px] text-gray-600">
                    <span>{p.duration}</span>
                    <span>·</span>
                    <span>Ages {p.ages}</span>
                  </div>
                </Link>
              ))}
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
