const pillars = [
  {
    num: "01",
    title: "Play-based",
    description:
      "Learning through doing, building, and creating — not sitting and watching",
  },
  {
    num: "02",
    title: "Science-backed",
    description:
      "Rooted in neuroscience and developmental psychology",
  },
  {
    num: "03",
    title: "Outcome-driven",
    description:
      "Measurable skills and behavioral shifts, not just memorable days",
  },
  {
    num: "04",
    title: "Age-relevant",
    description:
      "Designed for how kids and teens actually think, feel, and engage",
  },
];

export function MethodologySection() {
  return (
    <section className="snap-start min-h-screen flex flex-col justify-center bg-white py-[60px] px-8">
      <div className="max-w-7xl mx-auto">
        <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#3D3D3D] mb-3">
          Our learning framework
        </p>
        <h2 className="text-2xl font-medium text-[#1A1A1A] mb-4">
          THE INNOQUEST METHOD©
        </h2>
        <p className="text-sm text-[#3D3D3D] max-w-[520px] mb-12">
          Every program is built on four science-backed principles — because
          how kids learn matters as much as what they learn.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p) => (
            <div
              key={p.num}
              className="rounded-[14px] p-5"
              style={{ background: "#E8E0D5" }}
            >
              <span className="text-[#E8473F] text-2xl font-medium block mb-3">
                {p.num}
              </span>
              <h3 className="text-base font-medium text-[#1A1A1A] mb-2">
                {p.title}
              </h3>
              <p className="text-sm text-[#3D3D3D] leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
