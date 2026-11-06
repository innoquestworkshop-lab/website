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
    {
      label: "Who It's For",
      href: "/schools",
      dropdown: [
        { label: "For Parents", href: "/parents" },
        { label: "For Schools", href: "/schools" },
        { label: "Corporate & CSR", href: "/corporates" },
      ],
    },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Interactive Play", href: "https://interactive.innoquest.tech", external: true, highlight: true },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
  ],
  th: [
    { label: "สิ่งที่เราทำ", href: "/what-we-do" },
    { label: "โปรแกรม", href: "/programs" },
    {
      label: "ผู้รับบริการ",
      href: "/schools",
      dropdown: [
        { label: "สำหรับผู้ปกครอง", href: "/parents" },
        { label: "สำหรับโรงเรียน", href: "/schools" },
        { label: "องค์กรและ CSR", href: "/corporates" },
      ],
    },
    { label: "เสียงจากผู้เข้าร่วม", href: "/testimonials" },
    { label: "เกมอินเทอร์แอ็กทีฟ", href: "https://interactive.innoquest.tech", external: true, highlight: true },
    { label: "เกี่ยวกับเรา", href: "/about" },
    { label: "บล็อก", href: "/th/blog" },
  ],
};

export const footerCols = {
  en: [
    {
      h: "Explore",
      items: [
        { label: "What We Do", href: "/what-we-do" },
        { label: "Services", href: "/what-we-do#design" },
        { label: "Programs", href: "/programs" },
        { label: "The Pathway", href: "/programs#pathway" },
      ],
    },
    {
      h: "Who it's for",
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
        { label: "Our people", href: "/about#team" },
        { label: "Testimonials", href: "/testimonials" },
        { label: "Contact", href: "/contact" },
      ],
    },
  ],
  th: [
    {
      h: "ดูเพิ่มเติม",
      items: [
        { label: "สิ่งที่เราทำ", href: "/what-we-do" },
        { label: "บริการ", href: "/what-we-do#design" },
        { label: "โปรแกรม", href: "/programs" },
        { label: "เส้นทางการเรียนรู้", href: "/programs#pathway" },
      ],
    },
    {
      h: "ผู้รับบริการ",
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
        { label: "ทีมของเรา", href: "/about#team" },
        { label: "เสียงจากผู้เข้าร่วม", href: "/testimonials" },
        { label: "ติดต่อเรา", href: "/contact" },
      ],
    },
  ],
} as const;
