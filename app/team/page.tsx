import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { team, typeConfig } from "@/data/team";

export const metadata: Metadata = {
  title: "Our People",
  description: "Meet the facilitators, speakers, and team behind InnoQuest.",
};

export default function OurPeoplePage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <div style={{ background: "#1A1A1A" }} className="py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#E8473F] mb-3">
              Our people
            </p>
            <h1 className="text-4xl font-medium text-white mb-4">
              The people behind InnoQuest
            </h1>
            <p className="text-gray-400 text-sm max-w-[480px]">
              Facilitators, speakers, designers, and builders who care deeply about the next generation.
            </p>
          </div>
        </div>

        <div style={{ background: "#F5F0EA" }} className="py-20 px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => {
              const tag = typeConfig[member.type];
              return (
                <div key={member.id} className="bg-white rounded-[14px] p-6 flex flex-col">
                  {/* Photo */}
                  <div className="w-16 h-16 rounded-full bg-[#E8E0D5] mb-4 flex items-center justify-center shrink-0">
                    {member.photo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={`/team/${member.photo}`}
                        alt={member.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      <span className="text-xl text-[#3D3D3D]">
                        {member.name.charAt(0)}
                      </span>
                    )}
                  </div>

                  {/* Type tag */}
                  <span
                    className="self-start text-[10px] font-medium uppercase tracking-[0.06em] px-2.5 py-1 rounded-full mb-3"
                    style={{ color: tag.color, background: tag.bg }}
                  >
                    {tag.label}
                  </span>

                  <h3 className="text-base font-medium text-[#1A1A1A] mb-0.5">{member.name}</h3>
                  <p className="text-xs text-[#3D3D3D] mb-3">{member.role}</p>
                  <p className="text-sm text-[#3D3D3D] leading-relaxed flex-1">{member.bio}</p>
                </div>
              );
            })}
          </div>
        </div>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
