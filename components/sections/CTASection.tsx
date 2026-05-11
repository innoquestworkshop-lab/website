import Link from "next/link";

export function CTASection() {
  return (
    <section style={{ background: "#E8473F" }} className="snap-start min-h-screen flex flex-col justify-center py-[60px] px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-medium text-white mb-4">
          Ready to uplift your next generation?
        </h2>
        <p className="text-white/80 text-sm leading-relaxed mb-10 max-w-[500px] mx-auto">
          Talk to the InnoQuest team — no commitment, just a conversation.
          We&apos;ll design something that fits your goals, budget, and timeline.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center px-8 py-3 bg-white text-[#E8473F] text-sm font-medium rounded-full transition-transform active:scale-[0.98] hover:bg-white/90"
        >
          Let&apos;s talk
        </Link>
        <p className="text-white/50 text-xs mt-6">
          Or call us directly: +66 XX-XXXX-XXXX · Mon–Fri 9:00–18:00
        </p>
      </div>
    </section>
  );
}
