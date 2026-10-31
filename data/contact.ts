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

export const contactForm = {
  en: {
    labels: { name: "Name", organisation: "Organisation", role: "Role / Title", email: "Email", phone: "Phone", audience: "I am a…", message: "What are you looking for?", source: "How did you hear about us?" },
    placeholders: { name: "Your name", organisation: "Company or school name", role: "e.g. Head of HR", message: "Tell us about your goals, timeline, or the program you have in mind…" },
    audiences: { Corporate: "Company representative", School: "School representative", Parent: "Parent", Student: "Student", Other: "Other" },
    sources: { select: "Select…", google: "Google", social: "Social media", referral: "Referral", event: "Event", other: "Other" },
    errors: { name: "Name is required", organisation: "Organisation is required", email: "Enter a valid email", message: "Please tell us a bit more", verify: "Please complete the verification.", failed: "Something went wrong. Please try again or email us directly." },
    success: { eyebrow: "Enquiry received", heading: "We'll reply within 1–2 business days.", body: "Our reply will go to the email address you gave us.", faster: "Need a faster response?" },
    send: "Send message",
    sending: "Sending…",
  },
  th: {
    labels: { name: "ชื่อ", organisation: "องค์กร", role: "ตำแหน่ง", email: "อีเมล", phone: "เบอร์โทร", audience: "คุณคือ…", message: "คุณกำลังมองหาอะไร?", source: "รู้จักเราจากไหน?" },
    placeholders: { name: "ชื่อของคุณ", organisation: "ชื่อบริษัทหรือโรงเรียน", role: "เช่น หัวหน้าฝ่าย HR", message: "เล่าให้เราฟังเรื่องเป้าหมาย ช่วงเวลา หรือโปรแกรมที่คุณสนใจ…" },
    audiences: { Corporate: "ตัวแทนบริษัท", School: "ตัวแทนโรงเรียน", Parent: "ผู้ปกครอง", Student: "นักเรียน", Other: "อื่นๆ" },
    sources: { select: "เลือก…", google: "Google", social: "โซเชียลมีเดีย", referral: "คนรู้จักแนะนำ", event: "งานอีเวนต์", other: "อื่นๆ" },
    errors: { name: "กรุณากรอกชื่อ", organisation: "กรุณากรอกชื่อองค์กร", email: "กรุณากรอกอีเมลให้ถูกต้อง", message: "ช่วยเล่าเพิ่มอีกนิดนะ", verify: "กรุณายืนยันตัวตนก่อนส่ง", failed: "เกิดข้อผิดพลาด ลองใหม่อีกครั้งหรืออีเมลหาเราโดยตรง" },
    success: { eyebrow: "ได้รับข้อความแล้ว", heading: "เราจะตอบกลับภายใน 1–2 วันทำการ", body: "เราจะตอบกลับไปที่อีเมลที่คุณให้ไว้", faster: "อยากได้คำตอบเร็วกว่านี้?" },
    send: "ส่งข้อความ",
    sending: "กำลังส่ง…",
  },
} as const;
