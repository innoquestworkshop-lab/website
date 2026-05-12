import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { ContactForm } from "@/components/ui/ContactForm";
import { IconPhone, IconMail } from "@tabler/icons-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk to the InnoQuest team. No commitment — just a conversation about how we can help.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Header */}
        <div style={{ background: "#1A1A1A" }} className="py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#E8473F] mb-3">
              Get in touch
            </p>
            <h1 className="text-4xl font-medium text-white mb-4">
              Let&apos;s talk
            </h1>
            <p className="text-gray-400 text-sm max-w-[480px]">
              No commitment, just a conversation. Tell us what you&apos;re looking for and we&apos;ll figure out the best way to help.
            </p>
          </div>
        </div>

        {/* Content */}
        <div style={{ background: "#F5F0EA" }} className="py-20 px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Form */}
            <div className="lg:col-span-2 bg-white rounded-[14px] p-8">
              <h2 className="text-xl font-medium text-[#1A1A1A] mb-8">Send us a message</h2>
              <ContactForm />
            </div>

            {/* Contact info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xs font-medium uppercase tracking-[0.08em] text-[#3D3D3D] mb-4">
                  Contact details
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <IconPhone size={16} className="text-[#C0392B] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm text-[#1A1A1A]">+66 97 097 0797</p>
                      <p className="text-xs text-[#3D3D3D]">Mon–Fri, 9:00–18:00</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <IconMail size={16} className="text-[#C0392B] mt-0.5 shrink-0" />
                    <p className="text-sm text-[#1A1A1A]">innoquestworkshop@gmail.com</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-medium uppercase tracking-[0.08em] text-[#3D3D3D] mb-4">
                  Response time
                </h3>
                <p className="text-sm text-[#3D3D3D]">
                  We typically respond within 1–2 business days. For urgent enquiries, please call directly.
                </p>
              </div>
            </div>
          </div>
        </div>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
