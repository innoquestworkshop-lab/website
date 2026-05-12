export type NavItem = {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
};

/** Navigation links — source of truth for Navbar and Footer. */
export const navLinks: NavItem[] = [
  { label: "Experiences",     href: "/programs"    },
  { label: "What we do",      href: "/what-we-do"  },
  { label: "For Schools",     href: "/schools"     },
  { label: "Corporate & CSR", href: "/corporates"  },
  { label: "Design yours",    href: "/custom"      },
  {
    label: "About",
    href: "/about",
    dropdown: [
      { label: "About us",     href: "/about"        },
      { label: "Our people",   href: "/team"         },
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
      { label: "For schools",    href: "/schools"    },
      { label: "For parents",    href: "/programs"   },
      { label: "For students",   href: "/programs"   },
    ],
  },
  {
    h: "Company",
    items: [
      { label: "About us",      href: "/about"        },
      { label: "Our people",    href: "/team"         },
      { label: "Testimonials",  href: "/testimonials" },
      { label: "Contact",       href: "/contact"      },
    ],
  },
] as const;
