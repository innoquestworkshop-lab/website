import Link from "next/link";
import {
  IconLeaf,
  IconRocket,
  IconBolt,
  IconCoin,
} from "@tabler/icons-react";

const featuredProgram = {
  slug: "the-change-lab",
  name: "The Change Lab",
  tagline: "Real-world ESG challenges. Hands-on solutions.",
  duration: "1–3 days",
  ages: "10–18",
};

const programList = [
  { slug: "the-change-lab", name: "The Change Lab", duration: "1–3 days", ages: "10–18", Icon: IconLeaf },
  { slug: "entrepreneur-in-innovation", name: "Entrepreneur in Innovation", duration: "1 day – semester", ages: "13–18", Icon: IconRocket },
  { slug: "break-the-market", name: "Break the Market", duration: "1–2 days", ages: "14–18", Icon: IconBolt },
  { slug: "capital-minds", name: "Capital Minds", duration: "1–2 days", ages: "12–18", Icon: IconCoin },
];

export function ProgramsSection() {
  return (
    <section style={{ background: "#F5F0EA" }} className="snap-start min-h-screen flex flex-col justify-center py-[60px] px-8">
      <div className="max-w-7xl mx-auto">
        <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#3D3D3D] mb-3">
          Programs
        </p>
        <h2 className="text-2xl font-medium text-[#1A1A1A] mb-2">
          Short, long, or fully custom
        </h2>
        <p className="text-sm text-[#3D3D3D] mb-10 max-w-[480px]">
          From a single-day spark to a semester-long transformation — built
          around your goals.
        </p>

        {/* Bento grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {/* Featured card */}
          <Link
            href={`/programs/${featuredProgram.slug}`}
            className="col-span-2 lg:col-span-1 lg:row-span-2 rounded-[14px] p-6 flex flex-col justify-between min-h-[240px] group transition-transform hover:-translate-y-1"
            style={{ background: "#1A1A1A" }}
          >
            <div>
              <span className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#E8473F] bg-[#E8473F]/10 px-2.5 py-1 rounded-full">
                Most popular
              </span>
              <h3 className="text-white text-xl font-medium mt-4 mb-2">
                {featuredProgram.name}
              </h3>
              <p className="text-gray-400 text-sm">{featuredProgram.tagline}</p>
            </div>
            <div className="space-y-2">
              <div className="flex gap-4 text-xs text-gray-500">
                <span>{featuredProgram.duration}</span>
                <span>Ages {featuredProgram.ages}</span>
              </div>
              <span className="inline-flex items-center text-sm text-white/70 group-hover:text-[#E8473F] transition-colors">
                Learn more →
              </span>
            </div>
          </Link>

          {/* Stat cards */}
          <div className="rounded-[14px] p-6 bg-white flex flex-col justify-center">
            <span className="text-4xl font-medium text-[#E8473F]">98%</span>
            <span className="text-sm text-[#3D3D3D] mt-1">Satisfaction score</span>
          </div>
          <div className="rounded-[14px] p-6 bg-white flex flex-col justify-center">
            <span className="text-4xl font-medium text-[#E8473F]">500+</span>
            <span className="text-sm text-[#3D3D3D] mt-1">Students trained</span>
          </div>
        </div>

        {/* Program list grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {programList.map(({ slug, name, duration, ages, Icon }) => (
            <Link
              key={slug}
              href={`/programs/${slug}`}
              className="flex items-start gap-4 bg-white rounded-[14px] p-5 group transition-transform hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-lg bg-[#1A1A1A] flex items-center justify-center shrink-0">
                <Icon size={18} className="text-[#E8473F]" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-[#1A1A1A] group-hover:text-[#E8473F] transition-colors">
                  {name}
                </h3>
                <p className="text-xs text-[#3D3D3D] mt-1">
                  {duration} · Ages {ages}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
