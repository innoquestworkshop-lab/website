import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Experiences: [
    { label: "All experiences", href: "/programs" },
    { label: "The Change Lab", href: "/programs/the-change-lab" },
    { label: "Entrepreneur in Innovation", href: "/programs/entrepreneur-in-innovation" },
    { label: "Break the Market", href: "/programs/break-the-market" },
    { label: "Capital Minds", href: "/programs/capital-minds" },
    { label: "Design yours", href: "/custom" },
  ],
  "Who we serve": [
    { label: "For Schools", href: "/schools" },
    { label: "Corporate & CSR", href: "/corporates" },
    { label: "Parents", href: "/programs" },
    { label: "Students", href: "/programs" },
  ],
  Company: [
    { label: "What we do", href: "/what-we-do" },
    { label: "About us", href: "/about" },
    { label: "Our people", href: "/team" },
    { label: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer style={{ background: "#111111" }} className="snap-start text-white">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="space-y-4">
            <Link href="/">
              <Image
                src="/logos/logo-transparent.png"
                alt="InnoQuest"
                width={130}
                height={38}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-[220px]">
              Uplifting young human ability through play-based, science-backed
              learning experiences.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-xs font-medium uppercase tracking-[0.08em] text-gray-500 mb-4">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <span>© 2026 InnoQuest. All rights reserved.</span>
          <span>Bangkok, Thailand</span>
        </div>
      </div>
    </footer>
  );
}
