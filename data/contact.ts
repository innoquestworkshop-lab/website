import { site } from "./site";

export const contactPage = {
  en: {
    hero: {
      eyebrow: "▸ Get in touch",
      heading: "Let's talk.",
      sub: "Tell us what you're looking for and we'll work out how we can help. No commitment.",
    },
    infoCards: [
      { label: "Phone", value: site.contact.phone, note: site.contact.phoneHours, iconKey: "phone" as const },
      { label: "Email", value: site.contact.email, note: "Replies within 1–2 business days", iconKey: "email" as const },
      { label: "Location", value: site.location.display, note: "Programs delivered nationwide", iconKey: "location" as const },
    ],
    social: {
      eyebrow: "Follow along",
      platforms: [
        { label: "Instagram", href: site.social.instagram },
        { label: "TikTok",    href: site.social.tiktok    },
        { label: "Line",      href: site.social.line      },
        { label: "Facebook",  href: site.social.facebook  },
      ],
    },
    form: { heading: "Send us a message" },
  },
  th: {
    hero: {
      eyebrow: "▸ ติดต่อเรา",
      heading: "คุยกันได้เลย",
      sub: "บอกเรามาว่ากำลังมองหาอะไร แล้วเราจะดูให้ว่าช่วยอะไรได้บ้าง ไม่มีข้อผูกมัด",
    },
    infoCards: [
      { label: "โทรศัพท์", value: site.contact.phone, note: "จันทร์–ศุกร์ 9:00–18:00", iconKey: "phone" as const },
      { label: "อีเมล", value: site.contact.email, note: "ตอบกลับภายใน 1–2 วันทำการ", iconKey: "email" as const },
      { label: "ที่ตั้ง", value: site.location.display, note: "จัดโปรแกรมทั่วประเทศไทย", iconKey: "location" as const },
    ],
    social: {
      eyebrow: "ติดตามเรา",
      platforms: [
        { label: "Instagram", href: site.social.instagram },
        { label: "TikTok",    href: site.social.tiktok    },
        { label: "Line",      href: site.social.line      },
        { label: "Facebook",  href: site.social.facebook  },
      ],
    },
    form: { heading: "ส่งข้อความถึงเรา" },
  },
} as const;
