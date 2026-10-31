import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { signupThanks } from "@/data/signup";
import { getLocale } from "@/lib/i18n";
import { supabaseAdmin } from "@/lib/workshops";

export const metadata: Metadata = { title: "Sign-up status | InnoQuest", robots: { index: false } };

export default async function ThanksPage({ searchParams }: { searchParams: Promise<{ id?: string }> }) {
  const { id } = await searchParams;
  const locale = await getLocale();
  const t = signupThanks[locale];

  const isId = /^[0-9a-f-]{36}$/i.test(id ?? "");
  const { data } = isId
    ? await supabaseAdmin().from("workshop_signups").select("status, hold_expires_at").eq("id", id!).maybeSingle()
    : { data: null };

  // A hold past its end has simply expired; the webhook may still move it to paid.
  const key: keyof typeof t | "expired" =
    data?.status === "paid" ? "paid"
    : data?.status === "needs_review" ? "needs_review"
    : data?.status === "held" && new Date(data.hold_expires_at) > new Date() ? "held"
    : "expired";
  const state = t[key];

  return (
    <>
      {key === "held" && <meta httpEquiv="refresh" content="5" />}
      <Navbar />
      <main className="sec" style={{ paddingBlock: "160px 96px", minHeight: "70vh" }}>
        <div className="wrap" style={{ maxWidth: 784 }}>
          <h1 className="t-display" style={{ fontSize: "clamp(32px, 4vw, 44px)", marginBottom: 16 }}>{state.heading}</h1>
          <p className="lede" style={{ marginBottom: 32 }}>{state.body}</p>
          <Link href="/signup" className="btn btn-secondary">
            {t.back} →
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
