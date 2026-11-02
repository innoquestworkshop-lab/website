import { NextRequest, NextResponse } from "next/server";
import { normalizeAffiliateCode, REF_COOKIE, REF_MAX_AGE } from "@/lib/affiliate";
import { supabaseAdmin } from "@/lib/workshops";

const secure = process.env.NODE_ENV === "production";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const code = normalizeAffiliateCode(body?.code);
  if (!code) return NextResponse.json({ ok: false }, { status: 400 });

  const res = NextResponse.json({ ok: true });
  res.cookies.set(REF_COOKIE, code, { maxAge: REF_MAX_AGE, sameSite: "lax", secure, path: "/" });

  // One click per browser per code per day.
  const seenName = `iq_rc_${code}`;
  if (!req.cookies.get(seenName) && process.env.SUPABASE_SERVICE_ROLE_KEY) {
    try {
      const db = supabaseAdmin();
      const { data: aff } = await db.from("affiliates").select("id").eq("code", code).eq("status", "active").maybeSingle();
      if (aff) {
        const path = typeof body?.path === "string" && body.path.startsWith("/") ? body.path.slice(0, 200) : "/";
        await db.from("affiliate_clicks").insert({ affiliate_id: aff.id, landing_path: path });
        res.cookies.set(seenName, "1", { maxAge: 60 * 60 * 24, sameSite: "lax", secure, httpOnly: true, path: "/" });
      }
    } catch (err) {
      console.error("Affiliate click error:", err);
    }
  }
  return res;
}
