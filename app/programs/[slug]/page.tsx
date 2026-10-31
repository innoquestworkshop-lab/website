import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { ContextualTestimonials } from "@/components/sections/ContextualTestimonials";
import { programs, getProgramBySlug } from "@/data/programs";
import { methodPillars } from "@/data/methodology";
import { getLocale } from "@/lib/i18n";
import { PageHero, Photo, SectionHead, type Tile } from "@/components/ui/system";

export async function generateStaticParams() {
  return programs.en.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgramBySlug(slug, await getLocale());
  if (!program) return {};
  return {
    title: program.name,
    description: program.tagline,
  };
}

/** Supporting photos per program for the hero wall. The program's own hero image leads. */
const support: Record<string, string[]> = {
  "the-change-lab": ["/images/events/IMG_7900.jpg", "/images/events/break-the-market-008.jpg"],
  "entrepreneur-in-innovation": ["/images/events/entre-1-173.jpg", "/images/events/entre2-shannon-1.jpg"],
  "break-the-market": ["/images/events/break-the-market-5446.jpg", "/images/events/break-the-market-008.jpg"],
  "capital-minds": ["/images/events/price-war-140.jpg", "/images/events/price-war-146.jpg"],
};

export default async function ProgramPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const locale = await getLocale();
  const program = getProgramBySlug(slug, locale);
  if (!program) notFound();

  const related = programs[locale].filter((p) => p.slug !== program.slug).slice(0, 3);
  const facts = [
    { label: locale === "en" ? "Age range" : "ช่วงอายุ", value: program.ages },
    { label: locale === "en" ? "Duration" : "ระยะเวลา", value: program.duration },
    { label: locale === "en" ? "Group size" : "ขนาดกลุ่ม", value: program.groupSize },
    { label: locale === "en" ? "Format" : "รูปแบบ", value: program.format },
  ].filter((f) => f.value);

  const [s1, s2] = support[program.slug] ?? ["/images/events/price-war-030.jpg", "/images/events/price-war-153.jpg"];
  const lead: Tile = program.heroImg
    ? { src: program.heroImg, alt: program.name, ratio: "4 / 5", position: program.heroImgPosition }
    : { fill: "sand", ratio: "4 / 5" };

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title={program.name}
          sub={program.tagline}
          actions={<Link href="/contact" className="btn btn-primary">{locale === "en" ? "Enquire now →" : "สอบถามข้อมูล →"}</Link>}
          after={program.comingSoon ? <p style={{ marginTop: 16 }}><span className="pill">{locale === "en" ? "Coming soon" : "เตรียมเปิดตัว"}</span></p> : undefined}
          columns={[
            [lead, { fill: "sand", ratio: "1 / 1" }, { src: s2, alt: program.name, ratio: "4 / 5" }],
            [{ fill: "red", ratio: "4 / 3" }, { src: s1, alt: program.name, ratio: "3 / 4" }, { fill: "dark", ratio: "1 / 1" }],
            [{ mark: true, ratio: "1 / 1" }, { fill: "dark", ratio: "3 / 4" }, { fill: "sand", ratio: "4 / 5" }],
          ]}
          offsets={[-40, -96, -8]}
        />

        {/* Quick facts strip */}
        {facts.length > 0 && (
          <section className="sec sec--canvas sec--line" style={{ paddingBlock: 40 }}>
            <div className="wrap stat-row">
              {facts.map(({ label, value }) => (
                <div key={label} className="step">
                  <p className="caption">{label}</p>
                  <p className="h-sm" style={{ marginTop: 4 }}>{value}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* About the program */}
        <section className="sec sec--line">
          <div className="wrap split split--top">
            <div>
              <p className="eyebrow">{locale === "en" ? "About this program" : "เกี่ยวกับโปรแกรมนี้"}</p>
              <h2 className="h-section" style={{ marginTop: 8 }}>{locale === "en" ? <>What it&apos;s all<br />about.</> : "รายละเอียดโปรแกรม"}</h2>
            </div>
            <p className="lede" style={{ fontSize: 18, color: "var(--ink)" }}>{program.description}</p>
          </div>
        </section>

        {/* Learning outcomes */}
        <section className="sec sec--canvas">
          <div className="wrap">
            <SectionHead
              eyebrow={locale === "en" ? "What students gain" : "สิ่งที่นักเรียนจะได้รับ"}
              title={locale === "en" ? "Learning outcomes." : "ผลลัพธ์การเรียนรู้"}
            />
            <div className="grid-3">
              {program.outcomes.map((outcome) => (
                <div key={outcome.title} className="card card--soft">
                  <h3 className="h-sm">{outcome.title}</h3>
                  <p className="t-small">{outcome.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Method pillars */}
        <section className="sec">
          <div className="wrap">
            <p className="eyebrow">{locale === "en" ? "Our methodology" : "วิธีการของเรา"}</p>
            <h2 className="h-section" style={{ marginTop: 8, marginBottom: 32 }}>
              {locale === "en" ? <>The InnoQuest Method</> : <>วิธีการ InnoQuest</>}
              <sup style={{ fontSize: "0.5em", marginLeft: 4, color: "var(--red-ink)" }}>©</sup>
              {" "}{locale === "en" ? "in this program." : "ในโปรแกรมนี้"}
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              {program.methodPillars.map((n) => (
                <div key={n} className="card" style={{ flexDirection: "row", alignItems: "center", gap: 12, padding: "12px 20px" }}>
                  <span className="num-sm">0{n}</span>
                  <span className="t-small" style={{ fontWeight: 500, color: "var(--ink)" }}>{methodPillars[locale][n - 1].title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContextualTestimonials
          programSlug={program.slug}
          audience={program.audiences as ("corporate" | "school" | "parent" | "student")[]}
          label={locale === "en" ? "▸ What participants say" : "▸ เสียงจากผู้เข้าร่วม"}
        />

        {/* Related programs */}
        <section className="sec sec--line">
          <div className="wrap">
            <SectionHead
              eyebrow={locale === "en" ? "Related programs" : "โปรแกรมอื่นๆ"}
              title={locale === "en" ? "More to explore." : "โปรแกรมที่เกี่ยวข้อง"}
            />
            <div className="grid-3">
              {related.map((p) => (
                <Link key={p.slug} href={`/programs/${p.slug}`} className="pin">
                  {p.heroImg ? (
                    <Photo src={p.heroImg} alt={p.name} ratio="4 / 3" position={p.heroImgPosition} scale={p.heroImgScale} blur={p.heroImgBlur} />
                  ) : (
                    <div className="tile tile--sand" style={{ aspectRatio: "4 / 3" }} />
                  )}
                  <div className="pin-body">
                    <h3 className="h-sm">{p.name}</h3>
                    <p className="t-small" style={{ marginTop: 4 }}>{p.tagline}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
