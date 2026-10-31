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
      <main style={{ background: "#F5F0EA", padding: "160px 0 96px", minHeight: "70vh" }}>
        <div className="max-w-[720px] mx-auto px-8">
          <h1 className="h-section" style={{ marginBottom: 16 }}>{state.heading}</h1>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: "rgba(18,18,18,0.65)", marginBottom: 32 }}>{state.body}</p>
          <Link href="/signup" style={{ color: "#8A0F14", fontWeight: 500, fontSize: 14, textDecoration: "none" }}>
            {t.back} →
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
