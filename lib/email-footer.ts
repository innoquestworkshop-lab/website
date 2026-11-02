import { site } from "@/data/site";

const SITE = "https://www.innoquest.tech";

/** Signature and footer image for customer emails. Internal alerts do not use it. */
export function emailFooter(th: boolean): string {
  const team = th ? "ทีมงาน InnoQuest" : "The InnoQuest Team";
  const { phone, email } = site.contact;
  const ask = th ? "หากมีข้อสงสัย สามารถติดต่อเราได้เลย" : "If you have any questions, please feel free to contact us.";
  const [call, mail, visit] = th ? ["โทร", "อีเมล", "เว็บไซต์"] : ["Call", "Email", "Visit"];
  return `<p style="margin:32px 0 0;padding-top:16px;border-top:1px solid #DADAD3;font-size:14px;color:#444444;">${ask}</p>
<p style="margin:16px 0 0;font-size:14px;color:#000000;"><strong>${team}</strong></p>
<p style="margin:4px 0 0;font-size:14px;line-height:1.6;color:#444444;">${call}: ${phone}<br>${mail}: <a href="mailto:${email}" style="color:#444444;">${email}</a><br>${visit}: <a href="${SITE}" style="color:#444444;">www.innoquest.tech</a></p>
<p style="margin:16px 0 0;"><a href="${SITE}"><img src="${SITE}/email/footer.png" width="520" alt="InnoQuest: The skills schools forgot to teach." style="display:block;width:100%;max-width:520px;height:auto;border:0;"></a></p>`;
}
