import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { servicesPage, designServices, deliveryServices } from "@/data/services";

export const metadata: Metadata = {
  title: servicesPage.meta.title,
  description: servicesPage.meta.description,
};

export default function ServicesPage() {
  const { hero, nav, design, delivery } = servicesPage;

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <div style={{ background: "#121212" }} className="py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#8A0F14] mb-3">
              {hero.eyebrow}
            </p>
            <h1 className="text-4xl font-medium text-white mb-4 max-w-2xl">
              {hero.heading}
            </h1>
            <p className="text-gray-400 text-sm max-w-[520px]">
              {hero.sub}
            </p>
          </div>
        </div>

        {/* Nav anchors */}
        <div className="bg-white border-b border-[#F0EBE3] px-8 sticky top-16 z-10">
          <div className="max-w-7xl mx-auto flex gap-8">
            <a
              href={nav.designAnchor.href}
              className="py-4 text-sm font-medium border-b-2 border-transparent hover:border-[#8A0F14] hover:text-[#8A0F14] transition-colors text-[#121212]"
            >
              {nav.designAnchor.label}
            </a>
            <a
              href={nav.deliveryAnchor.href}
              className="py-4 text-sm font-medium border-b-2 border-transparent hover:border-[#8A0F14] hover:text-[#8A0F14] transition-colors text-[#121212]"
            >
              {nav.deliveryAnchor.label}
            </a>
          </div>
        </div>

        {/* Design service */}
        <div id="design" className="py-20 px-8" style={{ background: "#F5F0EA" }}>
          <div className="max-w-7xl mx-auto">
            <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#8A0F14] mb-3">
              {design.eyebrow}
            </p>
            <h2 className="text-3xl font-medium text-[#121212] mb-3 max-w-xl">
              {design.heading}
            </h2>
            <p className="text-sm text-[#4A4A4A] max-w-[560px] mb-12 leading-relaxed">
              {design.sub}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {designServices.map((s) => (
                <div key={s.title} className="bg-white rounded-[14px] p-6">
                  <h3 className="text-base font-medium text-[#121212] mb-2">{s.title}</h3>
                  <p className="text-sm text-[#4A4A4A] leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link
                href={design.cta.href}
                className="inline-flex items-center px-6 py-3 bg-[#8A0F14] text-white text-sm font-medium rounded-full hover:bg-[#D63B34] transition-colors"
              >
                {design.cta.text}
              </Link>
            </div>
          </div>
        </div>

        {/* Delivery service */}
        <div id="delivery" className="py-20 px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#8A0F14] mb-3">
              {delivery.eyebrow}
            </p>
            <h2 className="text-3xl font-medium text-[#121212] mb-3 max-w-xl">
              {delivery.heading}
            </h2>
            <p className="text-sm text-[#4A4A4A] max-w-[560px] mb-12 leading-relaxed">
              {delivery.sub}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {deliveryServices.map((s) => (
                <div key={s.title} className="rounded-[14px] p-6" style={{ background: "#F5F0EA" }}>
                  <h3 className="text-base font-medium text-[#121212] mb-2">{s.title}</h3>
                  <p className="text-sm text-[#4A4A4A] leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link
                href={delivery.cta.href}
                className="inline-flex items-center px-6 py-3 bg-[#8A0F14] text-white text-sm font-medium rounded-full hover:bg-[#D63B34] transition-colors"
              >
                {delivery.cta.text}
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
