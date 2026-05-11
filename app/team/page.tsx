import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { team } from "@/data/team";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the people behind InnoQuest.",
};

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <div style={{ background: "#1A1A1A" }} className="py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#E8473F] mb-3">
              Our team
            </p>
            <h1 className="text-4xl font-medium text-white mb-4">
              The people behind InnoQuest
            </h1>
            <p className="text-gray-400 text-sm max-w-[480px]">
              Educators, facilitators, and learning designers who care deeply about the next generation.
            </p>
          </div>
        </div>

        <div style={{ background: "#F5F0EA" }} className="py-20 px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.id} className="bg-white rounded-[14px] p-6">
                {/* Photo placeholder */}
                <div className="w-16 h-16 rounded-full bg-[#E8E0D5] mb-4 flex items-center justify-center">
                  <span className="text-xl text-[#3D3D3D]">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-base font-medium text-[#1A1A1A] mb-0.5">{member.name}</h3>
                <p className="text-xs text-[#E8473F] font-medium mb-3">{member.role}</p>
                <p className="text-sm text-[#3D3D3D] leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
