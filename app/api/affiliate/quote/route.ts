import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { normalizeAffiliateCode } from "@/lib/affiliate";
import { supabaseAdmin } from "@/lib/workshops";

export async function GET(req: NextRequest) {
  const workshopId = z.string().uuid().safeParse(req.nextUrl.searchParams.get("workshopId"));
  if (!workshopId.success) return NextResponse.json({ error: "invalid" }, { status: 400 });
  const code = normalizeAffiliateCode(req.nextUrl.searchParams.get("code"));

  const db = supabaseAdmin();
  const { data: workshop } = await db.from("workshops").select("id").eq("id", workshopId.data).maybeSingle();
  if (!workshop) return NextResponse.json({ error: "not_found" }, { status: 404 });

  const { data, error } = await db.rpc("workshop_affiliate_price", { p_workshop_id: workshopId.data, p_code: code ?? "" });
  if (error || !data) return NextResponse.json({ error: "failed" }, { status: 500 });

  return NextResponse.json(
    {
      valid: !!data.valid,
      reason: data.reason ?? null,
      affiliateName: data.affiliate_name ?? null,
      code: data.code ?? null,
      listSatang: data.list_satang,
      priceSatang: data.price_satang,
      discountSatang: data.discount_satang,
    },
    { headers: { "Cache-Control": "no-store" } },
  );
}
