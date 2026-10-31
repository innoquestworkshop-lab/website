export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
  highlight?: boolean;
  dropdown?: { label: string; href: string }[];
};

export const navLinks: Record<"en" | "th", NavItem[]> = {
  en: [
    { label: "What We Do", href: "/what-we-do" },
    { label: "Programs", href: "/programs" },
    { label: "For Parents", href: "/parents" },
    { label: "For Schools", href: "/schools" },
    { label: "Corporate & CSR", href: "/corporates" },
    { label: "Design Yours", href: "/custom" },
    { label: "🎮 Interactive Play", href: "https://interactive.innoquest.tech", external: true, highlight: true },
    {
      label: "About",
      href: "/about",
      dropdown: [
        { label: "About us", href: "/about" },
        { label: "Our people", href: "/team" },
        { label: "Testimonials", href: "/testimonials" },
      ],
    },
  ],
  th: [
    { label: "สิ่งที่เราทำ", href: "/what-we-do" },
    { label: "โปรแกรม", href: "/programs" },
    { label: "สำหรับผู้ปกครอง", href: "/parents" },
    { label: "สำหรับโรงเรียน", href: "/schools" },
    { label: "องค์กรและ CSR", href: "/corporates" },
    { label: "ออกแบบเอง", href: "/custom" },
    { label: "🎮 เล่นอินเทอร์แอคทีฟ", href: "https://interactive.innoquest.tech", external: true, highlight: true },
    {
      label: "เกี่ยวกับ",
      href: "/about",
      dropdown: [
        { label: "เกี่ยวกับเรา", href: "/about" },
        { label: "บุคลากรของเรา", href: "/team" },
        { label: "คำรีวิว", href: "/testimonials" },
      ],
    },
  ],
};

export const footerCols = {
  en: [
    {
      h: "Explore",
      items: [
        { label: "What We Do", href: "/what-we-do" },
        { label: "Services", href: "/services" },
        { label: "Programs", href: "/programs" },
        { label: "The Pathway", href: "/programs/pathway" },
      ],
    },
    {
      h: "Audiences",
      items: [
        { label: "For corporates", href: "/corporates" },
        { label: "For schools", href: "/schools" },
        { label: "For parents", href: "/parents" },
        { label: "For students", href: "/programs" },
      ],
    },
    {
      h: "Company",
      items: [
        { label: "About us", href: "/about" },
        { label: "Our people", href: "/team" },
        { label: "Testimonials", href: "/testimonials" },
        { label: "Contact", href: "/contact" },
      ],
    },
  ],
  th: [
    {
      h: "สำรวจ",
      items: [
        { label: "สิ่งที่เราทำ", href: "/what-we-do" },
        { label: "บริการ", href: "/services" },
        { label: "โปรแกรม", href: "/programs" },
        { label: "เส้นทาง", href: "/programs/pathway" },
      ],
    },
    {
      h: "กลุ่มเป้าหมาย",
      items: [
        { label: "สำหรับองค์กร", href: "/corporates" },
        { label: "สำหรับโรงเรียน", href: "/schools" },
        { label: "สำหรับผู้ปกครอง", href: "/parents" },
        { label: "สำหรับนักเรียน", href: "/programs" },
      ],
    },
    {
      h: "บริษัท",
      items: [
        { label: "เกี่ยวกับเรา", href: "/about" },
        { label: "บุคลากรของเรา", href: "/team" },
        { label: "คำรีวิว", href: "/testimonials" },
        { label: "ติดต่อ", href: "/contact" },
      ],
    },
  ],
} as const;
