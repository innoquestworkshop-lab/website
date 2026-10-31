import Link from "next/link";
import { team, teamPage, typeConfig } from "@/data/team";
import { Lines, Photo, plain } from "@/components/ui/system";

export function TeamSection({ locale }: { locale: "en" | "th" }) {
  const page = teamPage[locale];

  return (
    <>
      {/* Team grid: hidden until real member photos are ready */}
      {false && team.length > 0 && (
        <section className="sec">
          <div className="wrap">
            <h2 className="h-section" style={{ marginBottom: 32 }}>
              {locale === "en" ? <>{team.length} humans, one mission.</> : <>ทีมงาน {team.length} คน ภารกิจเดียวกัน</>}
            </h2>
            <div className="grid-4">
              {team.map((member) => {
                const tag = typeConfig[member.type];
                return (
                  <div key={member.id} className="card">
                    {member.photo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={`/team/${member.photo}`} alt={member.name} style={{ width: "100%", aspectRatio: "1 / 1", objectFit: "cover", borderRadius: 8 }} />
                    ) : (
                      <div className="imgph" style={{ width: "100%", aspectRatio: "1 / 1", borderRadius: 8 }} />
                    )}
                    <span className="pill" style={{ background: tag.bg, color: tag.color, alignSelf: "flex-start", marginTop: 8 }}>
                      {locale === "en" ? tag.label : tag.labelTh}
                    </span>
                    <h3 className="h-sm">{member.name}</h3>
                    <p className="caption">{member.role}</p>
                    <p className="t-small">{member.bio}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Our people + join us */}
      <section id="team" className="sec sec--canvas">
        <div className="wrap">
          <p className="eyebrow">{plain(page.hero.eyebrow)}</p>
          <h2 className="h-section" style={{ marginTop: 8 }}>{page.hero.heading}</h2>
          <p className="lede" style={{ marginTop: 16, marginBottom: 32 }}>{page.hero.sub}</p>

          <div className="card card--soft card--lg">
          <div className="split">
            <div>
              <p className="eyebrow">{locale === "en" ? "Join us" : "ร่วมงานกับ InnoQuest"}</p>
              <h3 style={{ fontSize: 28, fontWeight: 700, lineHeight: 1.3, marginTop: 8 }}>
                <Lines text={page.joinUs.heading} />
              </h3>
              <p className="lede" style={{ marginTop: 16 }}>{page.joinUs.body}</p>
              <div className="actions" style={{ marginTop: 32 }}>
                <Link href={page.joinUs.cta.href} className="btn btn-primary">{page.joinUs.cta.text}</Link>
              </div>
            </div>
            <Photo src="/images/events/team.jpg" alt="InnoQuest team" ratio="4 / 3" position="center 35%" sizes="(max-width: 900px) 100vw, 50vw" />
          </div>
          </div>
        </div>
      </section>
    </>
  );
}
