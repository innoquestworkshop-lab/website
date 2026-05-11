"use client";

const partners = [
  "Bangkok International School",
  "STEM Academy",
  "Thai MNC Group",
  "Regional Bank TH",
  "Youth Foundation",
  "EdTech Thailand",
  "CSR Alliance",
  "Learning Hub BKK",
];

export function PartnersSection() {
  return (
    <section style={{ background: "#1A1A1A" }} className="snap-start min-h-screen flex flex-col justify-center py-[60px] px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-white/30 text-center mb-10">
          Trusted by schools, corporates & institutions across Thailand
        </p>

        {/* Desktop: static row */}
        <div className="hidden md:flex flex-wrap justify-center gap-4">
          {partners.map((name) => (
            <div
              key={name}
              className="px-5 py-2 rounded-full border border-white/10 text-white/40 text-sm"
            >
              {name}
            </div>
          ))}
        </div>

        {/* Mobile: scrolling marquee */}
        <div className="md:hidden relative">
          <div className="flex gap-4 animate-marquee whitespace-nowrap">
            {[...partners, ...partners].map((name, i) => (
              <div
                key={i}
                className="px-5 py-2 rounded-full border border-white/10 text-white/40 text-sm shrink-0"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
