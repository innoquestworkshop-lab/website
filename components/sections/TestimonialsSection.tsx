import { testimonials } from "@/data/testimonials";

const badgeStyles = {
  corporate: { bg: "#FAECE7", text: "#C03530", label: "Corporate" },
  school: { bg: "#E6F1FB", text: "#185FA5", label: "School" },
  parent: { bg: "#EAF3DE", text: "#3B6D11", label: "Parent" },
};

export function TestimonialsSection() {
  const featured = testimonials.slice(0, 3);

  return (
    <section style={{ background: "#F5F0EA" }} className="snap-start min-h-screen flex flex-col justify-center py-[60px] px-8">
      <div className="max-w-7xl mx-auto">
        <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#3D3D3D] mb-3">
          Testimonials
        </p>
        <h2 className="text-2xl font-medium text-[#1A1A1A] mb-12">
          What people are saying
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {featured.map((t) => {
            const badge = badgeStyles[t.audience];
            return (
              <div
                key={t.id}
                className="bg-white rounded-[14px] p-6 flex flex-col gap-4"
              >
                <span
                  className="self-start px-2.5 py-1 rounded-full text-[11px] font-medium uppercase tracking-[0.08em]"
                  style={{ background: badge.bg, color: badge.text }}
                >
                  {badge.label}
                </span>
                <blockquote className="text-sm text-[#1A1A1A] leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div>
                  <p className="text-sm font-medium text-[#1A1A1A]">{t.name}</p>
                  <p className="text-xs text-[#3D3D3D] mt-0.5">
                    {t.role} · {t.context}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
