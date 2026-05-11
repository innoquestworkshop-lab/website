import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Programs: [
    { label: "Workshops", href: "/programs" },
    { label: "Long-term", href: "/programs/leadership-program" },
    { label: "Custom", href: "/custom" },
    { label: "CSR camps", href: "/programs/corporate-csr-camp" },
  ],
  Audiences: [
    { label: "Corporates", href: "/corporates" },
    { label: "Schools", href: "/schools" },
    { label: "Parents", href: "/programs" },
    { label: "Students", href: "/programs" },
  ],
  Company: [
    { label: "About us", href: "/about" },
    { label: "Our team", href: "/team" },
    { label: "Blog", href: "/blog" },
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
          <span>© 2025 InnoQuest. All rights reserved.</span>
          <span>Bangkok, Thailand</span>
        </div>
      </div>
    </footer>
  );
}
