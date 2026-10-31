import Image from "next/image";
import Link from "next/link";
import { team, teamPage, typeConfig } from "@/data/team";

export function TeamSection({ locale }: { locale: "en" | "th" }) {
  const page = teamPage[locale];

  return (
    <>
      {/* Team grid */}
      {false && team.length > 0 && <section style={{ background: "#F5F0EA", padding: "96px 0" }}>
        <div className="max-w-[1240px] mx-auto px-8">
          {/* <p className="eyebrow" style={{ color: "#8A0F14", marginBottom: 18 }}>▸ The team</p> */}
          <h2 className="h-section" style={{ marginBottom: 48 }}>
            {locale === "en"
              ? <>{team.length} humans, <span className="scribble">one mission</span>.</>
              : <>ทีมงาน {team.length} คน <span className="scribble">ภารกิจเดียวกัน</span></>}
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }} className="team-grid">
            {team.map((member) => {
              const tag = typeConfig[member.type];
              return (
                <div key={member.id} className="card-lift" style={{
                  background: "#FFFFFF", borderRadius: 14,
                  display: "flex", flexDirection: "column",
                  border: "1px solid rgba(18,18,18,0.06)",
                  overflow: "hidden",
                }}>
                  <div style={{ padding: 12 }}>
                    {member.photo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={`/team/${member.photo}`}
                        alt={member.name}
                        style={{ width: "100%", aspectRatio: "1 / 1", objectFit: "cover", borderRadius: 8 }}
                      />
                    ) : (
                      <div className="imgph" style={{ width: "100%", aspectRatio: "1 / 1", minHeight: 0, borderRadius: 8 }} />
                    )}
                  </div>
                  <div style={{ padding: "4px 20px 24px", display: "flex", flexDirection: "column", gap: 6, flex: 1 }}>
                    <span
                      className="pill-tag"
                      style={{ background: tag.bg, color: tag.color, alignSelf: "flex-start", marginBottom: 2 }}
                    >
                      {locale === "en" ? tag.label : tag.labelTh}
                    </span>
                    <h3 style={{ fontSize: 17, fontWeight: 500, letterSpacing: "-0.015em" }}>{member.name}</h3>
                    <p className="eyebrow" style={{ color: "rgba(18,18,18,0.5)", letterSpacing: "0.04em" }}>{member.role}</p>
                    <p style={{ fontSize: 13, lineHeight: 1.55, color: "rgba(18,18,18,0.6)", marginTop: 4 }}>{member.bio}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <style>{`
          @media(max-width:900px){ .team-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          @media(max-width:540px){ .team-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>}

      {/* Our people + join us */}
      <section id="team" style={{ background: "#FFFFFF", padding: "96px 0", scrollMarginTop: 80 }}>
        <div className="max-w-[1240px] mx-auto px-8">
          <p className="eyebrow" style={{ color: "#8A0F14", marginBottom: 18 }}>{page.hero.eyebrow}</p>
          <h2 className="h-section" style={{ maxWidth: 780 }}>{page.hero.heading}</h2>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: "rgba(18,18,18,0.6)", maxWidth: 580, marginTop: 16, marginBottom: 48 }}>
            {page.hero.sub}
          </p>
          <div
            style={{
              display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center",
              background: "#121212", color: "#F5F0EA",
              borderRadius: 14, padding: 56, overflow: "hidden", position: "relative",
            }}
            className="join-grid"
          >
            <div
              className="absolute rounded-full pointer-events-none"
              style={{ top: -100, right: -100, width: 320, height: 320, background: "#8A0F14", opacity: 0.15, filter: "blur(2px)" }}
            />
            <div style={{ position: "relative", zIndex: 1 }}>
              <p className="eyebrow" style={{ color: "#8A0F14", marginBottom: 16 }}>
                {locale === "en" ? "▸ Join us" : "▸ ร่วมงานกับ InnoQuest"}
              </p>
              <h3 style={{ fontSize: 36, fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
                {page.joinUs.heading.split("\n").map((l: string, i: number) => <span key={i}>{l}{i === 0 && <br />}</span>)}
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.65, color: "rgba(245,240,234,0.7)", marginTop: 18, maxWidth: 380 }}>
                {page.joinUs.body}
              </p>
              <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
                <Link href={page.joinUs.cta.href} style={{
                  display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 22px",
                  background: "#8A0F14", color: "#F5F0EA", borderRadius: 999, fontSize: 14, fontWeight: 500, textDecoration: "none",
                }}>
                  {page.joinUs.cta.text}
                </Link>
              </div>
            </div>
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ height: 420, borderRadius: 12, overflow: "hidden", position: "relative" }}>
                <Image src="/images/events/team.jpg" alt="InnoQuest team" fill style={{ objectFit: "cover" }} sizes="(max-width: 900px) 100vw, 50vw" />
              </div>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:900px){ .join-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>
    </>
  );
}
