export const pathwayMeta = {
  en: {
    badge: "InnoQuest Core Curriculum",
    heading: "The Entrepreneurial",
    headingAccent: "Pathway.",
    sub: "This is a structured journey through the full lifecycle of a business. Powered by our own digital simulation engine we deliver an exclusive standard of learning that cannot be matched. We guide students from their initial idea all the way to market dominance.",
    sidebarHeading: "How it works",
    sidebarBody: "Programs can be run independently as standalone sprints, or linked together into a long term deep dive.",
  },
  th: {
    badge: "หลักสูตรหลัก InnoQuest",
    heading: "เส้นทาง",
    headingAccent: "ผู้ประกอบการ",
    sub: "นี่คือการเดินทางที่มีโครงสร้างตลอดวงจรชีวิตของธุรกิจ ขับเคลื่อนโดยเอ็นจินจำลองดิจิทัลของเรา เรานำทางนักเรียนจากไอเดียเริ่มต้นไปจนถึงการครองตลาด",
    sidebarHeading: "วิธีการทำงาน",
    sidebarBody: "โปรแกรมสามารถดำเนินการอิสระเป็นสปรินต์เดี่ยว หรือเชื่อมต่อกันเป็นการสำรวจเชิงลึกระยะยาว",
  },
} as const;

export type PathwayStage = {
  step: string;
  theme: string;
  name: string;
  subtitle: string;
  description: string;
  status: "available" | "locked";
  slug: string;
  details: { duration: string; ages: string };
  engineFeature: string;
  imgCaption: string;
  heroImg?: string;
  heroImgPosition?: string;
  heroImgScale?: number;
  heroImgBlur?: number;
};

import { programs } from "@/data/programs";

const p = (slug: string, locale: "en" | "th" = "en") =>
  programs[locale].find((prog) => prog.slug === slug)!;

const buildStages = (locale: "en" | "th"): PathwayStage[] => [
  {
    step: "01",
    theme: locale === "en" ? "Ideation Phase" : "เฟสไอเดีย",
    name: p("the-change-lab", locale).name,
    subtitle: locale === "en" ? "Painpoint Discovery & Systems Thinking" : p("the-change-lab", locale).tagline,
    description: p("the-change-lab", locale).description,
    status: "available",
    slug: p("the-change-lab", locale).slug,
    details: { duration: p("the-change-lab", locale).duration, ages: p("the-change-lab", locale).ages },
    engineFeature: "ESG Impact Simulator",
    heroImg: p("the-change-lab", locale).heroImg ?? "/logos/logo-transparent.png",
    imgCaption: "// Action shot: Students actively discussing pain points around a whiteboard, high energy.",
  },
  {
    step: "02",
    theme: locale === "en" ? "Validation Phase" : "เฟสการตรวจสอบ",
    name: p("entrepreneur-in-innovation", locale).name,
    subtitle: locale === "en" ? "MVP & Market Validation" : p("entrepreneur-in-innovation", locale).tagline,
    description: p("entrepreneur-in-innovation", locale).description,
    status: "available",
    slug: p("entrepreneur-in-innovation", locale).slug,
    details: { duration: p("entrepreneur-in-innovation", locale).duration, ages: p("entrepreneur-in-innovation", locale).ages },
    engineFeature: "Startup Lifecycle Engine",
    heroImg: p("entrepreneur-in-innovation", locale).heroImg,
    imgCaption: "// Screen focus: Over-the-shoulder shot of a student interacting with the digital business simulation interface.",
  },
  {
    step: "03",
    theme: locale === "en" ? "Disruption Phase" : "เฟสการเปลี่ยนแปลง",
    name: p("break-the-market", locale).name,
    subtitle: locale === "en" ? "GTM & Competitive Strategy" : p("break-the-market", locale).tagline,
    description: p("break-the-market", locale).description,
    status: "available",
    slug: p("break-the-market", locale).slug,
    details: { duration: p("break-the-market", locale).duration, ages: p("break-the-market", locale).ages },
    engineFeature: "Market Disruption Modeler",
    heroImg: p("break-the-market", locale).heroImg,
    imgCaption: "// Group dynamics: A team looking intensely at the live leaderboard on a main screen.",
  },
  {
    step: "04",
    theme: locale === "en" ? "Economics Phase" : "เฟสเศรษฐศาสตร์",
    name: p("capital-minds", locale).name,
    subtitle: locale === "en" ? "Pricing & Unit Economics" : p("capital-minds", locale).tagline,
    description: p("capital-minds", locale).description,
    status: "available",
    slug: p("capital-minds", locale).slug,
    details: { duration: p("capital-minds", locale).duration, ages: p("capital-minds", locale).ages },
    engineFeature: "Live Dynamic Market Engine",
    heroImg: p("capital-minds", locale).heroImg,
    imgCaption: "// Close up: Students reacting to a sudden market shift / supply shock during the simulation.",
  },
  {
    step: "05",
    theme: locale === "en" ? "Scale Phase" : "เฟสการขยาย",
    name: "The Scale-Up Lab",
    subtitle: locale === "en" ? "Venture Capital & Global Growth" : "เงินร่วมลงทุนและการเติบโตระดับโลก",
    description: locale === "en"
      ? "Navigate series funding rounds, scaling complex operations, and global expansion in a high-stakes executive simulation."
      : "นำทางรอบการระดมทุน การขยายการดำเนินงานที่ซับซ้อน และการขยายไปสู่ระดับโลกในการจำลองบริหารสูง",
    status: "locked",
    slug: "#",
    details: { duration: "TBA", ages: "16-18" },
    engineFeature: "Global Expansion Engine",
    heroImg: "/logos/logo-transparent.png",
    imgCaption: "Encrypted Module",
  },
];

export const pathwayStages: Record<"en" | "th", PathwayStage[]> = {
  en: buildStages("en"),
  th: buildStages("th"),
};
