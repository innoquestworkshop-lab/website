import { createClient } from "@supabase/supabase-js";

export const HOLD_MINUTES = 15;

export const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export type FormField = {
  id: string;
  type: "short" | "paragraph" | "multiple_choice" | "checkboxes" | "dropdown" | "date" | "file";
  label_th: string;
  label_en?: string | null;
  required?: boolean;
  options?: string[];
};

export type Workshop = {
  id: string;
  slug: string;
  title_th: string;
  title_en: string | null;
  description_th: string;
  description_en: string | null;
  location_th: string;
  location_en: string | null;
  starts_at: string;
  ends_at: string | null;
  price_satang: number;
  capacity: number;
  form_fields: FormField[];
  seats_left: number;
};

/** Server only: uses the service role, because both tables are closed to the public keys. */
export function supabaseAdmin() {
  return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, {
    auth: { persistSession: false },
  });
}

export async function getOpenWorkshops(): Promise<Workshop[]> {
  if (!process.env.SUPABASE_SERVICE_ROLE_KEY) return [];
  const db = supabaseAdmin();
  const { data, error } = await db
    .from("workshops")
    .select("id, slug, title_th, title_en, description_th, description_en, location_th, location_en, starts_at, ends_at, price_satang, capacity, form_fields")
    .eq("status", "open")
    .order("starts_at");
  if (error) throw error;

  return Promise.all(
    (data ?? []).map(async (w) => {
      const { data: taken } = await db.rpc("workshop_seats_taken", { p_workshop_id: w.id });
      return { ...w, seats_left: Math.max(0, w.capacity - (taken ?? 0)) } as Workshop;
    })
  );
}
