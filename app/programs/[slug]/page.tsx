import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { programs, getProgramBySlug } from "@/data/programs";
import { testimonials } from "@/data/testimonials";

const methodLabels = ["Play-based", "Science-backed", "Outcome-driven", "Age-relevant"] as const;

export async function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) return {};
  return {
    title: program.name,
    description: program.tagline,
  };
}

export default async function ProgramPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) notFound();

  const related = programs.filter((p) => p.slug !== program.slug).slice(0, 3);
  const programTestimonials = testimonials
    .filter((t) => t.programSlug === program.slug)
    .slice(0, 2);

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <div style={{ background: "#1A1A1A" }} className="py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/70">
                Ages {program.ages}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/70">
                {program.duration}
              </span>
            </div>
            <h1 className="text-4xl font-medium text-white mb-4 max-w-2xl">
              {program.name}
            </h1>
            <p className="text-gray-400 text-base max-w-[520px] mb-8">
              {program.tagline}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-[#E8473F] text-white text-sm font-medium rounded-full hover:bg-[#D63B34] transition-transform active:scale-[0.98]"
            >
              Enquire now
            </Link>
          </div>
        </div>

        {/* Overview */}
        <div className="bg-white py-20 px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#3D3D3D] mb-3">
                About this program
              </p>
              <p className="text-base text-[#1A1A1A] leading-relaxed">
                {program.description}
              </p>
            </div>
            <div style={{ background: "#F5F0EA" }} className="rounded-[14px] p-6 space-y-4 h-fit">
              {[
                { label: "Ages", value: program.ages },
                { label: "Duration", value: program.duration },
                { label: "Group size", value: program.groupSize },
                { label: "Format", value: program.format },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between items-center text-sm">
                  <span className="text-[#3D3D3D]">{label}</span>
                  <span className="font-medium text-[#1A1A1A]">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Outcomes */}
        <div style={{ background: "#F5F0EA" }} className="py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#3D3D3D] mb-3">
              What students gain
            </p>
            <h2 className="text-2xl font-medium text-[#1A1A1A] mb-10">Learning outcomes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {program.outcomes.map((outcome) => (
                <div key={outcome.title} className="bg-white rounded-[14px] p-6">
                  <h3 className="text-base font-medium text-[#1A1A1A] mb-2">{outcome.title}</h3>
                  <p className="text-sm text-[#3D3D3D] leading-relaxed">{outcome.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Method pillars */}
        <div className="bg-white py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#3D3D3D] mb-3">
              Our methodology
            </p>
            <h2 className="text-2xl font-medium text-[#1A1A1A] mb-10">
              THE INNOQUEST METHOD© in this program
            </h2>
            <div className="flex flex-wrap gap-3">
              {program.methodPillars.map((n) => (
                <div
                  key={n}
                  className="rounded-lg px-5 py-3 text-sm font-medium"
                  style={{ background: "#E8E0D5" }}
                >
                  <span className="text-[#E8473F] mr-2">0{n}</span>
                  {methodLabels[n - 1]}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        {programTestimonials.length > 0 && (
          <div style={{ background: "#F5F0EA" }} className="py-20 px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-medium text-[#1A1A1A] mb-10">What they said</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {programTestimonials.map((t) => (
                  <div key={t.id} className="bg-white rounded-[14px] p-6">
                    <blockquote className="text-sm text-[#1A1A1A] leading-relaxed mb-4">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <p className="text-sm font-medium text-[#1A1A1A]">{t.name}</p>
                    <p className="text-xs text-[#3D3D3D] mt-0.5">{t.role} · {t.context}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Related programs */}
        <div className="bg-white py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-medium text-[#1A1A1A] mb-8">Related programs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/programs/${p.slug}`}
                  className="bg-[#F5F0EA] rounded-[14px] p-6 group transition-transform hover:-translate-y-1"
                >
                  <h3 className="text-sm font-medium text-[#1A1A1A] group-hover:text-[#E8473F] transition-colors mb-2">
                    {p.name}
                  </h3>
                  <p className="text-xs text-[#3D3D3D]">
                    {p.duration} · Ages {p.ages}
                  </p>
                </Link>
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
