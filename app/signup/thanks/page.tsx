import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { signupThanks } from "@/data/signup";
import { getLocale } from "@/lib/i18n";
import { supabaseAdmin } from "@/lib/workshops";
import { lineQrUrl } from "@/lib/workshop-line";

export const metadata: Metadata = { title: "Sign-up status | InnoQuest", robots: { index: false } };

const maskEmail = (email: string) => {
  const [local = "", domain = ""] = email.split("@");
  return `${local.slice(0, 1)}***@${domain}`;
};

type PaidWorkshop = {
  title_th: string | null; title_en: string | null; starts_at: string | null; ends_at: string | null;
  location_th: string | null; location_en: string | null; line_group_url: string | null; line_qr_path: string | null;
};

const isRecent = (sentAt?: string | null) => !!sentAt && Date.now() - Date.parse(sentAt) < 25 * 60 * 60 * 1000;

export default async function ThanksPage({ searchParams }: { searchParams: Promise<{ id?: string }> }) {
  const { id } = await searchParams;
  const locale = await getLocale();
  const t = signupThanks[locale];

  const isId = /^[0-9a-f-]{36}$/i.test(id ?? "");
  const { data } = isId
    ? await supabaseAdmin().from("workshop_signups").select("status, hold_expires_at, recovery_sent_at, student_name, email, amount_satang, workshops(title_th, title_en, starts_at, ends_at, location_th, location_en, line_group_url, line_qr_path)").eq("id", id!).maybeSingle()
    : { data: null };

  // A hold past its end has simply expired; the webhook may still move it to paid.
  // During a recovery window the payer lands here before the webhook arrives.
  const recovering = isRecent(data?.recovery_sent_at);
  const key: keyof typeof t | "expired" =
    data?.status === "paid" ? "paid"
    : data?.status === "needs_review" ? "needs_review"
    : data?.status === "held" && (recovering || new Date(data.hold_expires_at) > new Date()) ? "held"
    : data?.status === "expired" && recovering ? "held"
    : "expired";
  const state = t[key];

  // Booking details, LINE link and QR are only ever derived when status is exactly 'paid'.
  const paid = data?.status === "paid";
  const rel = paid ? (data as { workshops?: PaidWorkshop | PaidWorkshop[] | null }).workshops : null;
  const w: PaidWorkshop | null = Array.isArray(rel) ? (rel[0] ?? null) : (rel ?? null);
  const pv = t.paidView;
  const th = locale === "th";
  const fmt = (d: string, opts: Intl.DateTimeFormatOptions) =>
    new Intl.DateTimeFormat(th ? "th-TH" : "en-GB", { timeZone: "Asia/Bangkok", ...opts }).format(new Date(d));
  let when = "";
  if (paid && w?.starts_at) {
    const day = fmt(w.starts_at, { dateStyle: "long" });
    const tm = (d: string) => fmt(d, { hour: "2-digit", minute: "2-digit", hour12: false });
    when = `${day}, ${tm(w.starts_at)}${w.ends_at ? ` - ${tm(w.ends_at)}` : ""}`;
  }
  const title = w ? ((th ? w.title_th || w.title_en : w.title_en || w.title_th) ?? "") : "";
  const location = w ? ((th ? w.location_th || w.location_en : w.location_en || w.location_th) ?? "") : "";
  const amount = paid && data?.amount_satang != null ? `฿${(data.amount_satang / 100).toLocaleString("en-US")}` : "";
  const qr = paid && w ? lineQrUrl(w.line_qr_path) : null;
  const lineUrl = paid && w ? w.line_group_url : null;
  const rows: [string, string][] = ([[pv.workshop, title], [pv.when, when], [pv.location, location], [pv.amount, amount]] as [string, string][]).filter(([, v]) => v);

  return (
    <>
      {key === "held" && <meta httpEquiv="refresh" content="5" />}
      <Navbar />
      <main className="sec" style={{ paddingBlock: "160px 96px", minHeight: "70vh" }}>
        <div className="wrap" style={{ maxWidth: 784 }}>
          {paid ? (
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
              <span aria-hidden style={{ flex: "none", width: 48, height: 48, borderRadius: "50%", background: "var(--success-pale)", color: "var(--success-deep)", display: "grid", placeItems: "center" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
              </span>
              <h1 className="t-display" style={{ fontSize: "clamp(28px, 4vw, 44px)", overflowWrap: "anywhere" }}>{state.heading}</h1>
            </div>
          ) : (
            <h1 className="t-display" style={{ fontSize: "clamp(32px, 4vw, 44px)", marginBottom: 16 }}>{state.heading}</h1>
          )}
          {paid && data?.student_name && (
            <p className="lede" style={{ marginBottom: 8, color: "var(--ink)", overflowWrap: "anywhere" }}>{pv.studentLabel}: <strong>{data.student_name}</strong></p>
          )}
          <p className="lede" style={{ marginBottom: 32 }}>{state.body}</p>
          {paid && (
            <div style={{ display: "grid", gap: 16, marginBottom: 32 }}>
              {rows.length > 0 && (
                <section className="card card--soft" style={{ gap: 16 }}>
                  <h2 className="t-display" style={{ fontSize: 20 }}>{pv.detailsHeading}</h2>
                  <dl style={{ display: "grid", gap: 12, margin: 0 }}>
                    {rows.map(([k, v]) => (
                      <div key={k}>
                        <dt className="t-small" style={{ color: "var(--mute)" }}>{k}</dt>
                        <dd style={{ margin: 0, color: "var(--ink)", overflowWrap: "anywhere" }}>{v}</dd>
                      </div>
                    ))}
                  </dl>
                  {data?.email && (
                    <p className="t-small" style={{ overflowWrap: "anywhere", borderTop: "1px solid var(--hairline)", paddingTop: 16 }}>
                      {pv.receipt} {maskEmail(data.email)}
                    </p>
                  )}
                </section>
              )}
              {(lineUrl || qr) && (
                <section className="card" style={{ gap: 16 }}>
                  <h2 className="t-display" style={{ fontSize: 20 }}>{pv.lineHeading}</h2>
                  <p className="t-small">{pv.lineBody}</p>
                  {lineUrl && (
                    <a href={lineUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ alignSelf: "flex-start" }}>
                      {pv.lineButton}
                    </a>
                  )}
                  {qr && (
                    <figure style={{ margin: 0, display: "grid", gap: 8, justifyItems: "start" }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={qr} alt={pv.lineQrAlt} width={200} height={200} style={{ width: 200, maxWidth: "100%", height: "auto", borderRadius: "var(--radius-sm)", border: "1px solid var(--hairline)" }} />
                      <figcaption className="t-small" style={{ color: "var(--mute)" }}>{pv.lineQrHint}</figcaption>
                    </figure>
                  )}
                </section>
              )}
            </div>
          )}
          <Link href="/signup" className="btn btn-secondary">
            {t.back} →
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
