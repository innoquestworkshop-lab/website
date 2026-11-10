// Staff notifications from the website (Beam webhook, receipt requests): a copy of the
// app's lib/notify (InnoQuest-app: lib/notify/index.ts and lib/notify/money-in.ts). Change
// both together. One row in staff_notifications (the bell in the app, migration 70) and,
// only when the row is new (dedupe_key), a LINE push and an email to every super admin.
// Server only.
// Env: LINE_CHANNEL_ACCESS_TOKEN, LINE_APPROVER_USER_IDS (comma list of LINE user ids),
//      RESEND_API_KEY (and optional EMAIL_FROM), NEXT_PUBLIC_APP_URL (links; default the app host).
// A missing LINE env skips LINE silently. Failures never throw: a notification must not
// break the payment or request that caused it.

import type { SupabaseClient } from "@supabase/supabase-js";
import { escapeHtml } from "@/lib/workshops";

export type NotifyInput = {
  audience: "super_admin" | "user";
  adminUserId?: string | null;
  /** 'money_in', 'receipt_request', ... */
  kind: string;
  title: string;
  body?: string | null;
  /** App path ('/super-admin/billing/…') or absolute https URL. */
  link?: string | null;
  entityType?: string | null;
  entityId?: string | null;
  /** Same key twice = one notification (webhook retries). */
  dedupeKey?: string | null;
  line?: boolean;
  email?: boolean;
};

const appUrl = () => (process.env.NEXT_PUBLIC_APP_URL || "https://interactive.innoquest.tech").replace(/\/$/, "");

export function absoluteLink(link?: string | null): string {
  if (!link) return `${appUrl()}/super-admin`;
  return /^https:\/\//.test(link) ? link : `${appUrl()}${link.startsWith("/") ? "" : "/"}${link}`;
}

export function lineRecipients(): string[] {
  return (process.env.LINE_APPROVER_USER_IDS || "").split(",").map((s) => s.trim()).filter((s) => /^U[0-9a-f]{32}$/i.test(s));
}

export async function pushLine(text: string): Promise<boolean> {
  const token = process.env.LINE_CHANNEL_ACCESS_TOKEN;
  const to = lineRecipients();
  if (!token || to.length === 0) return false;
  const messages = [{ type: "text", text: text.slice(0, 4900) }];
  try {
    const res = await fetch(to.length === 1 ? "https://api.line.me/v2/bot/message/push" : "https://api.line.me/v2/bot/message/multicast", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify(to.length === 1 ? { to: to[0], messages } : { to, messages }),
    });
    if (!res.ok) console.error(`[notify] LINE push failed (status ${res.status})`);
    return res.ok;
  } catch {
    console.error("[notify] Could not reach LINE");
    return false;
  }
}

/** The staff alert email, the same look and words as the app's staffNoticeEmail. */
export function staffNoticeEmail(p: { title: string; body?: string | null; link: string }) {
  const link = escapeHtml(p.link);
  const body = `<p style="margin:0 0 12px;">${escapeHtml(p.title)}</p>${p.body ? `<p style="margin:0;white-space:pre-line;">${escapeHtml(p.body)}</p>` : ""}`;
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>${escapeHtml(p.title)}</title></head>
<body style="margin:0;padding:0;background:#ffffff;color:#000000;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td align="center" style="padding:32px 16px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.5;color:#000000;">
<tr><td style="padding-bottom:24px;font-size:20px;font-weight:bold;">InnoQuest</td></tr>
<tr><td style="padding-bottom:24px;">${body}</td></tr>
<tr><td style="padding-bottom:24px;"><a href="${link}" style="display:inline-block;background:#D10000;color:#ffffff;text-decoration:none;font-weight:bold;padding:12px 24px;border-radius:6px;">Open in the portal</a></td></tr>
<tr><td style="padding-bottom:24px;font-size:14px;">If the button doesn't work, copy this link into your browser:<br><a href="${link}" style="color:#000000;word-break:break-all;">${link}</a></td></tr>
</table></td></tr></table></body></html>`;
  return {
    subject: `InnoQuest: ${p.title}`.slice(0, 200),
    html,
    text: `${p.title}\n\n${p.body ? `${p.body}\n\n` : ""}Open in the portal: ${p.link}\n`,
  };
}

async function sendStaffNotice(p: { to: string; title: string; body?: string | null; link: string }): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const content = staffNoticeEmail(p);
  if (!apiKey) {
    if (process.env.NODE_ENV === "production") console.error("[notify] RESEND_API_KEY is not set; staff email not sent");
    else console.log(`[notify:dev] to=${p.to} subject=${content.subject}`);
    return false;
  }
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from: process.env.EMAIL_FROM || "InnoQuest <no-reply@innoquest.tech>", to: p.to, subject: content.subject, html: content.html, text: content.text, reply_to: "admin@innoquest.tech" }),
    });
    if (!res.ok) console.error(`[notify] Resend rejected the staff email (status ${res.status})`);
    return res.ok;
  } catch {
    console.error("[notify] Could not reach Resend");
    return false;
  }
}

/** Account emails of the audience: every active super admin, or the one staff member. */
async function recipientEmails(db: SupabaseClient, n: NotifyInput): Promise<string[]> {
  if (n.audience === "user") {
    if (!n.adminUserId) return [];
    const { data } = await db.from("iq_accounts").select("email").eq("admin_user_id", n.adminUserId).maybeSingle();
    const e = (data as { email?: string | null } | null)?.email;
    return e ? [e] : [];
  }
  const { data } = await db.from("iq_account_roles").select("account_id, role, iq_accounts!inner(email, status)").eq("role", "super_admin");
  const rows = (data ?? []) as unknown as { iq_accounts: { email?: string | null; status?: string | null } | null }[];
  return [...new Set(rows.map((r) => r.iq_accounts).filter((a) => a && a.email && (a.status ?? "active") === "active").map((a) => a!.email!))];
}

/** Insert the notification; push LINE and email only if it is new. Returns the row id, or null when deduped or failed. */
export async function notify(db: SupabaseClient, n: NotifyInput): Promise<string | null> {
  try {
    const row = {
      audience: n.audience,
      admin_user_id: n.audience === "user" ? n.adminUserId ?? null : null,
      kind: n.kind,
      title: n.title.slice(0, 300),
      body: n.body ? n.body.slice(0, 2000) : null,
      link: n.link ?? null,
      entity_type: n.entityType ?? null,
      entity_id: n.entityId ?? null,
      dedupe_key: n.dedupeKey ?? null,
    };
    const { data, error } = await db.from("staff_notifications").insert(row).select("id").maybeSingle();
    if (error) {
      if ((error as { code?: string }).code !== "23505") console.error("[notify] insert failed", error.message);
      return null;
    }
    const id = (data as { id: string } | null)?.id ?? null;
    const link = absoluteLink(n.link);
    const tasks: Promise<unknown>[] = [];
    if (n.line !== false && n.audience === "super_admin") tasks.push(pushLine(`${n.title}${n.body ? `\n${n.body}` : ""}\n${link}`));
    if (n.email !== false) {
      tasks.push(recipientEmails(db, n).then((to) => Promise.all(to.map((e) => sendStaffNotice({ to: e, title: n.title, body: n.body, link })))).catch(() => null));
    }
    await Promise.allSettled(tasks);
    return id;
  } catch (err) {
    console.error("[notify] failed", err instanceof Error ? err.message : err);
    return null;
  }
}

// ── Money in (copy of the app's lib/notify/money-in.ts) ─────────────────────

export type MoneyIn = {
  amountSatang: number;
  payer: string;
  /** The workshop title, or a document number such as "IV 26-3001". */
  what: string;
  /** Workshops: the affiliate or null for "Organic". Billing documents: undefined (no source line). */
  affiliate?: { name: string; code: string } | null;
  seats?: { taken: number; total: number } | null;
  method?: string | null;
  note?: string | null;
};

/** THB with two decimals: "THB 2,250.00". */
export function thb(satang: number): string {
  const n = Math.round(Number(satang) || 0);
  const sign = n < 0 ? "-" : "";
  const abs = Math.abs(n);
  return `THB ${sign}${Math.floor(abs / 100).toLocaleString("en-US")}.${String(abs % 100).padStart(2, "0")}`;
}

export function sourceLine(affiliate: MoneyIn["affiliate"]): string {
  return affiliate ? `${affiliate.name} (code ${affiliate.code})` : "Organic";
}

export function moneyInMessage(m: MoneyIn): { title: string; body: string } {
  const payer = m.payer.trim() || "Unknown payer";
  const lines = [
    `Paid: ${m.what}`,
    `Amount: ${thb(m.amountSatang)}`,
    `Payer: ${payer}`,
    ...(m.affiliate !== undefined ? [`Source: ${sourceLine(m.affiliate)}`] : []),
    ...(m.seats ? [`Seats: ${m.seats.taken}/${m.seats.total}`] : []),
    ...(m.method ? [`Method: ${m.method}`] : []),
    ...(m.note ? [m.note] : []),
  ];
  return { title: `Money in: ${thb(m.amountSatang)} from ${payer}`.slice(0, 300), body: lines.join("\n").slice(0, 2000) };
}

/** App paths (the app's new URL scheme). */
export const signupsPath = (workshopId: string) => `/super-admin/workshops/${workshopId}/signups`;
export const billingPath = (documentId: string) => `/super-admin/billing/${documentId}`;
