export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
  highlight?: boolean;
  dropdown?: { label: string; href: string }[];
};

/** Navigation links — source of truth for Navbar and Footer. */
export const navLinks: NavItem[] = [
  { label: "What We Do", href: "/what-we-do" },
  { label: "Programs", href: "/programs" },
  { label: "For Parents", href: "/parents" },
  { label: "For Schools", href: "/schools" },
  { label: "Corporate & CSR", href: "/corporates" },
  { label: "Design Yours", href: "/custom" },
  { label: "🎮 Interactive Play", href: "https://innoquest-interactive.vercel.app", external: true, highlight: true },
  {
    label: "About",
    href: "/about",
    dropdown: [
      { label: "About us", href: "/about" },
      { label: "Our people", href: "/team" },
      { label: "Testimonials", href: "/testimonials" },
    ],
  },
];

/** Footer link columns (Programs column is built dynamically from programs data). */
export const footerCols = [
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
] as const;
