import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Testimonials | InnoQuest",
  description: "What students, parents, schools, and corporates say about InnoQuest programs.",
};

const audienceLabels = {
  student:   { label: "Students",   bg: "#F3EEFF", ink: "#5B21B6" },
  parent:    { label: "Parents",    bg: "#FFF3CD", ink: "#856404" },
  school:    { label: "Schools",    bg: "#EAF3DE", ink: "#3B6D11" },
  corporate: { label: "Corporates", bg: "#E6F1FB", ink: "#185FA5" },
};

const grouped = (["student", "parent", "school", "corporate"] as const).map((audience) => ({
  audience,
  ...audienceLabels[audience],
  items: testimonials.filter((t) => t.audience === audience),
}));

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <div style={{ background: "#1A1A1A" }} className="py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#E8473F] mb-3">
              Testimonials
            </p>
            <h1 className="text-4xl font-medium text-white mb-4 max-w-2xl">
              What people are saying.
            </h1>
            <p className="text-gray-400 text-sm max-w-[480px]">
              From students who discovered what they're capable of, to schools that saw their classrooms transform, to corporates who finally ran a CSR program worth talking about.
            </p>
          </div>
        </div>

        {/* Grouped by audience */}
        {grouped.map(({ audience, label, bg, ink, items }) => (
          <div key={audience} className="py-16 px-8 bg-white border-b border-[#F0EBE3]">
            <div className="max-w-7xl mx-auto">
              <span
                className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-medium uppercase tracking-[0.08em] mb-8"
                style={{
                  background: bg,
                  color: ink,
                  fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
                }}
              >
                {label}
              </span>

              {items.length === 0 ? (
                <div
                  className="rounded-[14px] border-2 border-dashed flex items-center justify-center"
                  style={{ minHeight: 140, borderColor: "rgba(26,26,26,0.12)" }}
                >
                  <p
                    className="text-[12px] uppercase tracking-[0.1em]"
                    style={{ color: "rgba(26,26,26,0.3)", fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace" }}
                  >
                    // {label} testimonials coming soon
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {items.map((t) => (
                    <div
                      key={t.id}
                      className="rounded-[14px] p-6 flex flex-col gap-4"
                      style={{ background: "#F5F0EA", border: "1px solid rgba(26,26,26,0.06)" }}
                    >
                      {t.stars && (
                        <div className="flex gap-[3px]">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill={i < t.stars! ? "#F5A623" : "#D1D5DB"}>
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                          ))}
                        </div>
                      )}
                      <p className="text-[15px] leading-[1.65] flex-1" style={{ color: "#1A1A1A" }}>
                        &ldquo;{t.quote}&rdquo;
                      </p>
                      <div className="pt-3" style={{ borderTop: "1px solid rgba(26,26,26,0.1)" }}>
                        <p className="text-[13px] font-medium text-[#1A1A1A]">{t.name}</p>
                        <p className="text-[11px] mt-0.5" style={{ color: "rgba(26,26,26,0.5)" }}>
                          {t.role} · {t.context}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}

        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
