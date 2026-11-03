import { NextRequest, NextResponse } from "next/server";
import { normalizeAffiliateCode } from "@/lib/affiliate";
import { supabaseAdmin } from "@/lib/workshops";

const noStore = { "Cache-Control": "no-store" };

/** Workshop ids the code has an active deal on. Anything else (unknown code, bad input, errors) is an empty list. */
export async function GET(req: NextRequest) {
  const code = normalizeAffiliateCode(req.nextUrl.searchParams.get("code"));
  if (!code || !process.env.SUPABASE_SERVICE_ROLE_KEY) return NextResponse.json({ workshopIds: [] }, { headers: noStore });
  try {
    const db = supabaseAdmin();
    const { data: aff } = await db.from("affiliates").select("id").eq("code", code).eq("status", "active").maybeSingle();
    if (!aff) return NextResponse.json({ workshopIds: [] }, { headers: noStore });
    const { data: deals } = await db.from("affiliate_deals").select("workshop_id").eq("affiliate_id", aff.id).eq("active", true);
    const workshopIds = (deals ?? []).map((d) => d.workshop_id as string);
    return NextResponse.json({ workshopIds }, { headers: noStore });
  } catch {
    return NextResponse.json({ workshopIds: [] }, { headers: noStore });
  }
}
