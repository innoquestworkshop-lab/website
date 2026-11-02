import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { normalizeAffiliateCode } from "@/lib/affiliate";
import { createPaymentLink } from "@/lib/beam";
import { HOLD_MINUTES, supabaseAdmin, type FormField } from "@/lib/workshops";

const schema = z.object({
  workshopId: z.string().uuid(),
  filled_by: z.enum(["parent", "student"]),
  student_name: z.string().trim().min(2).max(200),
  student_age: z.coerce.number().int().min(5).max(99),
  school: z.string().trim().max(200).optional(),
  parent_name: z.string().trim().max(200).optional(),
  phone: z.string().trim().min(6).max(30),
  email: z.string().trim().email().max(200),
  line_id: z.string().trim().max(100).optional(),
  answers: z.record(z.string(), z.union([z.string().max(2000), z.array(z.string().max(500))])).default({}),
  consent: z.literal(true),
  parent_consent: z.boolean().default(false),
  locale: z.enum(["th", "en"]).default("th"),
  affiliate_code: z.string().max(40).optional(),
  share_first_name: z.boolean().default(false),
  expected_satang: z.number().int().min(0).max(100_000_000).optional(),
  turnstileToken: z.string(),
});

async function verifyTurnstile(token: string, ip: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY ?? "1x0000000000000000000000000000000AA";
  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret, response: token, remoteip: ip }),
  });
  const data = await res.json();
  return data.success === true;
}

export async function POST(req: NextRequest) {
  const parsed = schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "invalid" }, { status: 400 });
  const { workshopId, turnstileToken, consent: _consent, affiliate_code, share_first_name, expected_satang, ...base } = parsed.data;
  const code = normalizeAffiliateCode(affiliate_code);
  const signup = {
    ...base,
    ...(code ? { affiliate_code: code, share_first_name } : {}),
    ...(expected_satang !== undefined ? { expected_satang } : {}),
  };

  if (signup.filled_by === "student" && signup.student_age < 20 && !signup.parent_consent) {
    return NextResponse.json({ error: "parent_consent" }, { status: 400 });
  }
  if (signup.filled_by === "parent" && !signup.parent_name) {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "";
  if (!(await verifyTurnstile(turnstileToken, ip))) {
    return NextResponse.json({ error: "verification" }, { status: 403 });
  }

  const db = supabaseAdmin();
  const { data: workshop } = await db
    .from("workshops")
    .select("title_th, title_en, form_fields")
    .eq("id", workshopId)
    .eq("status", "open")
    .single();
  if (!workshop) return NextResponse.json({ error: "closed" }, { status: 409 });

  const missing = (workshop.form_fields as FormField[]).some((f) => {
    const answer = signup.answers[f.id];
    return f.required && f.type !== "file" && (!answer || answer.length === 0);
  });
  if (missing) return NextResponse.json({ error: "invalid" }, { status: 400 });

  const { data: signupId, error } = await db.rpc("claim_workshop_seat", {
    p_workshop_id: workshopId,
    p_hold_minutes: HOLD_MINUTES,
    p_signup: signup,
  });
  if (error) {
    const m = /price_changed:\s*(\d+)/.exec(error.message ?? "");
    if (m) return NextResponse.json({ error: "price_changed", priceSatang: Number(m[1]) }, { status: 409 });
    return NextResponse.json({ error: "failed" }, { status: 500 });
  }
  if (!signupId) return NextResponse.json({ error: "full" }, { status: 409 });

  const { data: row } = await db.from("workshop_signups").select("amount_satang, hold_expires_at").eq("id", signupId).single();

  try {
    const link = await createPaymentLink({
      amountSatang: row!.amount_satang,
      description: signup.locale === "en" ? workshop.title_en ?? workshop.title_th : workshop.title_th,
      referenceId: signupId,
      redirectUrl: `${req.nextUrl.origin}/signup/thanks?id=${signupId}`,
      expiresAt: new Date(row!.hold_expires_at),
    });
    await db.from("workshop_signups").update({ beam_payment_link_id: link.id }).eq("id", signupId);
    return NextResponse.json({ url: link.url });
  } catch (err) {
    console.error("Sign-up payment link error:", err);
    await db.from("workshop_signups").update({ status: "cancelled" }).eq("id", signupId);
    return NextResponse.json({ error: "payment" }, { status: 502 });
  }
}
