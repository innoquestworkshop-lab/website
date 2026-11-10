import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { receiptRequest } from "@/data/signup";
import { getLocale } from "@/lib/i18n";
import { supabaseAdmin } from "@/lib/workshops";
import { verifyReceiptToken } from "@/lib/receipt-token";
import { formatBaht } from "@/lib/confirmation-email";
import { ReceiptRequestForm, ReceiptRequested } from "@/components/ui/ReceiptRequestForm";

export const metadata: Metadata = { title: "Request a receipt | InnoQuest", robots: { index: false } };

type Row = {
  status: string;
  receipt_requested_at: string | null;
  filled_by: string | null;
  student_name: string | null;
  parent_name: string | null;
  amount_satang: number;
  workshops: { title_th: string | null; title_en: string | null } | { title_th: string | null; title_en: string | null }[] | null;
};

/** The signed link from the success page and the confirmation email (lib/receipt-token.ts). */
export default async function ReceiptPage({ searchParams }: { searchParams: Promise<{ id?: string; t?: string }> }) {
  const { id, t: token } = await searchParams;
  const locale = await getLocale();
  const t = receiptRequest[locale];
  const th = locale === "th";

  const valid = verifyReceiptToken(id, token);
  const { data } = valid
    ? await supabaseAdmin()
        .from("workshop_signups")
        .select("status, receipt_requested_at, filled_by, student_name, parent_name, amount_satang, workshops(title_th, title_en)")
        .eq("id", id!)
        .maybeSingle()
    : { data: null };
  const row = data as Row | null;
  const w = row ? (Array.isArray(row.workshops) ? row.workshops[0] : row.workshops) : null;
  const title = w ? ((th ? w.title_th || w.title_en : w.title_en || w.title_th) ?? "") : "";
  const payer = row ? ((row.filled_by === "parent" && row.parent_name?.trim() ? row.parent_name : row.student_name) ?? "").trim() : "";

  let body: React.ReactNode;
  let heading = t.heading;
  if (!row) {
    heading = t.invalidHeading;
    body = <p className="lede">{t.invalidBody}</p>;
  } else if (row.status !== "paid") {
    heading = t.notPaidHeading;
    body = <p className="lede">{t.notPaidBody}</p>;
  } else if (row.receipt_requested_at) {
    heading = t.doneHeading;
    body = <ReceiptRequested locale={locale} />;
  } else {
    body = (
      <>
        <p className="lede" style={{ marginBottom: 24 }}>{t.intro}</p>
        <ReceiptRequestForm id={id!} token={token!} locale={locale} defaultName={payer} />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="sec" style={{ paddingBlock: "160px 96px", minHeight: "70vh" }}>
        <div className="wrap" style={{ maxWidth: 784 }}>
          <h1 className="t-display" style={{ fontSize: "clamp(32px, 4vw, 44px)", marginBottom: 16, textWrap: "balance" }}>{heading}</h1>
          {row && row.status === "paid" && (
            <dl style={{ display: "grid", gap: 8, margin: "0 0 24px" }}>
              {title && (
                <div>
                  <dt className="t-small" style={{ color: "var(--mute)" }}>{t.workshop}</dt>
                  <dd style={{ margin: 0, color: "var(--ink)", overflowWrap: "anywhere" }}>{title} <span style={{ fontVariantNumeric: "tabular-nums" }}>({formatBaht(row.amount_satang)})</span></dd>
                </div>
              )}
              {row.student_name && (
                <div>
                  <dt className="t-small" style={{ color: "var(--mute)" }}>{t.participant}</dt>
                  <dd style={{ margin: 0, color: "var(--ink)", overflowWrap: "anywhere" }}>{row.student_name}</dd>
                </div>
              )}
            </dl>
          )}
          <div style={{ marginBottom: 32 }}>{body}</div>
          <Link href="/signup" className="btn btn-secondary">
            {t.back} →
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
