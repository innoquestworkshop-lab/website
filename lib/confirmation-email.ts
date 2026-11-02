import { escapeHtml } from "@/lib/workshops";
import { emailFooter } from "@/lib/email-footer";
import { lineQrUrl } from "@/lib/workshop-line";

export type ConfirmationWorkshop = {
  title_th: string;
  title_en: string | null;
  starts_at: string;
  ends_at: string | null;
  location_th: string | null;
  location_en: string | null;
  line_group_url: string | null;
  line_qr_path: string | null;
};

const TZ = "Asia/Bangkok";

const dateTime = (iso: string, th: boolean) =>
  new Date(iso).toLocaleString(th ? "th-TH" : "en-GB", { timeZone: TZ, dateStyle: "long", timeStyle: "short" });

const dayKey = (iso: string) => new Date(iso).toLocaleDateString("en-CA", { timeZone: TZ });

const timeOnly = (iso: string, th: boolean) =>
  new Date(iso).toLocaleTimeString(th ? "th-TH" : "en-GB", { timeZone: TZ, timeStyle: "short" });

function whenText(startsAt: string, endsAt: string | null, th: boolean) {
  if (!endsAt) return dateTime(startsAt, th);
  // Same day: show the end as a time only.
  const end = dayKey(startsAt) === dayKey(endsAt) ? timeOnly(endsAt, th) : dateTime(endsAt, th);
  return `${dateTime(startsAt, th)} – ${end}`;
}

/** Whole baht without decimals, otherwise two decimals: ฿2,500 or ฿2,500.50. */
export function formatBaht(satang: number) {
  const whole = satang % 100 === 0;
  return `฿${(satang / 100).toLocaleString("en-US", {
    minimumFractionDigits: whole ? 0 : 2,
    maximumFractionDigits: whole ? 0 : 2,
  })}`;
}

/** The email a payer gets once the seat is confirmed. Pure, so it renders without Supabase. */
export function confirmationEmail(p: {
  th: boolean;
  filledBy: string | null;
  studentName: string;
  amountSatang: number;
  workshop: ConfirmationWorkshop;
}) {
  const { th, workshop: w } = p;
  const parent = p.filledBy === "parent";
  const title = escapeHtml(th ? w.title_th : w.title_en ?? w.title_th);
  const name = escapeHtml(p.studentName);
  const location = (th ? w.location_th || w.location_en : w.location_en || w.location_th) ?? "";

  const t = th
    ? {
        greeting: parent ? "เรียน ท่านผู้ปกครอง" : "เรียน นักเรียน",
        body: parent
          ? `ลงทะเบียนเรียบร้อยแล้ว! ที่นั่งของ <strong>${name}</strong> ใน <strong>${title}</strong> ได้รับการยืนยันแล้ว`
          : `ลงทะเบียนเรียบร้อยแล้ว! ที่นั่งของคุณใน <strong>${title}</strong> ได้รับการยืนยันแล้ว`,
        labels: { workshop: "เวิร์กช็อป", when: "วันและเวลา", where: "สถานที่", paid: "ยอดชำระ" },
        lineHeading: "เข้าร่วมกลุ่ม LINE ของเวิร์กช็อป",
        lineText: "เข้ากลุ่มเพื่อรับข่าวสารและรายละเอียดต่าง ๆ ก่อนวันเวิร์กช็อป",
        button: "เข้าร่วมกลุ่ม LINE",
        qr: "หรือสแกน QR code นี้",
        qrAlt: "QR code สำหรับเข้ากลุ่ม LINE",
      }
    : {
        greeting: parent ? "Dear Parent," : "Dear Student,",
        body: parent
          ? `You're all set! <strong>${name}</strong>'s place in <strong>${title}</strong> is confirmed.`
          : `You're all set! Your place in <strong>${title}</strong> is confirmed.`,
        labels: { workshop: "Workshop", when: "Date and time", where: "Location", paid: "Amount paid" },
        lineHeading: "Join the workshop LINE group",
        lineText: "Join the group for updates and details before the workshop day.",
        button: "Join LINE group",
        qr: "Or scan this QR code",
        qrAlt: "QR code to join the LINE group",
      };

  const rows: [string, string][] = [
    [t.labels.workshop, title],
    [t.labels.when, escapeHtml(whenText(w.starts_at, w.ends_at, th))],
    ...(location ? ([[t.labels.where, escapeHtml(location)]] as [string, string][]) : []),
    [t.labels.paid, escapeHtml(formatBaht(p.amountSatang))],
  ];
  const details = `<table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;margin:0 0 24px;border-collapse:collapse;font-size:15px;">
${rows
  .map(
    ([k, v]) =>
      `<tr><td style="padding:8px 12px 8px 0;border-bottom:1px solid #DADAD3;color:#444444;vertical-align:top;width:34%;">${k}</td><td style="padding:8px 0;border-bottom:1px solid #DADAD3;color:#000000;vertical-align:top;">${v}</td></tr>`
  )
  .join("\n")}
</table>`;

  const qr = lineQrUrl(w.line_qr_path);
  const line =
    w.line_group_url || qr
      ? `<div style="margin:0 0 8px;padding:20px;border:1px solid #DADAD3;border-radius:8px;">
<p style="margin:0 0 8px;font-size:18px;font-weight:bold;">${t.lineHeading}</p>
<p style="margin:0 0 16px;font-size:15px;color:#444444;">${t.lineText}</p>
${w.line_group_url ? `<p style="margin:0 0 16px;"><a href="${escapeHtml(w.line_group_url)}" style="display:inline-block;background:#D10000;color:#ffffff;text-decoration:none;font-weight:bold;padding:12px 24px;border-radius:6px;">${t.button}</a></p>\n` : ""}${
          qr
            ? `<p style="margin:0;"><img src="${escapeHtml(qr)}" width="200" height="200" alt="${t.qrAlt}" style="display:block;width:200px;height:200px;border:0;"></p>
<p style="margin:8px 0 0;font-size:14px;color:#444444;">${t.qr}</p>
`
            : ""
        }</div>`
      : "";

  return `<div style="max-width:520px;margin:0 auto;padding:32px 16px;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.6;color:#000000;">
<p style="margin:0 0 24px;font-size:20px;font-weight:bold;">InnoQuest</p>
<p style="margin:0 0 12px;">${t.greeting}</p>
<p style="margin:0 0 24px;">${t.body}</p>
${details}
${line}
${emailFooter(th)}
</div>`;
}
