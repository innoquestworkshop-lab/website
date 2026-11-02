import { site } from "@/data/site";

const SITE = "https://www.innoquest.tech";

/** Signature and footer image for customer emails. Internal alerts do not use it. */
export function emailFooter(th: boolean): string {
  const team = th ? "ทีมงาน InnoQuest" : "The InnoQuest Team";
  const { phone, email } = site.contact;
  return `<p style="margin:32px 0 0;padding-top:16px;border-top:1px solid #E5E5E0;font-size:14px;line-height:1.6;color:#444444;"><strong style="color:#000000;">${team}</strong><br>${phone} · <a href="mailto:${email}" style="color:#444444;">${email}</a> · <a href="${SITE}" style="color:#444444;">innoquest.tech</a></p>
<p style="margin:16px 0 0;"><a href="${SITE}"><img src="${SITE}/email/footer.png" width="520" alt="InnoQuest: The skills schools forgot to teach." style="display:block;width:100%;max-width:520px;height:auto;border:0;"></a></p>`;
}
