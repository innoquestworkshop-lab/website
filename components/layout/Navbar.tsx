"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IconMenu2, IconX, IconChevronDown } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Experiences", href: "/programs" },
  { label: "What we do", href: "/what-we-do" },
  { label: "For Schools", href: "/schools" },
  { label: "Corporate & CSR", href: "/corporates" },
  { label: "Design yours", href: "/custom" },
  {
    label: "About",
    href: "/about",
    dropdown: [
      { label: "About us", href: "/about" },
      { label: "Our people", href: "/team" },
    ],
  },
];

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const container = document.querySelector("main") as HTMLElement | null;
    const target = container ?? window;
    const onScroll = () => {
      const y = container ? container.scrollTop : window.scrollY;
      setScrolled(y > 80);
    };
    target.addEventListener("scroll", onScroll, { passive: true });
    return () => target.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isHome
          ? scrolled && !mobileOpen
            ? "-translate-y-full opacity-0 pointer-events-none"
            : mobileOpen
              ? "bg-white shadow-sm"
              : "bg-transparent"
          : scrolled || mobileOpen
            ? "bg-white shadow-sm"
            : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/logos/logo-transparent.png"
            alt="InnoQuest"
            width={140}
            height={40}
            className="h-8 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href} className="relative group">
              {link.dropdown ? (
                <>
                  <button
                    className={cn(
                      "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                      pathname.startsWith(link.href)
                        ? "text-[#E8473F]"
                        : "text-[#1A1A1A] hover:text-[#E8473F]"
                    )}
                  >
                    {link.label}
                    <IconChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                  </button>
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
                    <div className="bg-white rounded-[14px] shadow-lg border border-gray-100 py-2 min-w-[180px]">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={cn(
                            "block px-4 py-2 text-sm transition-colors",
                            pathname === item.href
                              ? "text-[#E8473F] bg-[#F5F0EA]"
                              : "text-[#1A1A1A] hover:bg-[#F5F0EA] hover:text-[#E8473F]"
                          )}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={link.href}
                  className={cn(
                    "block px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                    pathname === link.href
                      ? "text-[#E8473F]"
                      : "text-[#1A1A1A] hover:text-[#E8473F]"
                  )}
                >
                  {link.label}
                  {pathname === link.href && (
                    <span className="block h-0.5 bg-[#E8473F] rounded-full mt-0.5" />
                  )}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center px-5 py-2 bg-[#E8473F] text-white text-sm font-medium rounded-full transition-transform active:scale-[0.98] hover:bg-[#D63B34]"
          >
            Talk to us →
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-[#1A1A1A]"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <IconX size={22} /> : <IconMenu2 size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-8 py-6 space-y-1">
          {navLinks.map((link) => (
            <div key={link.href}>
              <button
                onClick={() =>
                  setOpenDropdown(openDropdown === link.label ? null : link.label)
                }
                className="w-full flex items-center justify-between py-3 text-sm font-medium text-[#1A1A1A]"
              >
                {link.label}
                {link.dropdown && (
                  <IconChevronDown
                    size={14}
                    className={cn(
                      "transition-transform",
                      openDropdown === link.label && "rotate-180"
                    )}
                  />
                )}
              </button>
              {link.dropdown && openDropdown === link.label && (
                <div className="pl-4 pb-2 space-y-1">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block py-2 text-sm text-[#3D3D3D] hover:text-[#E8473F]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
              {!link.dropdown && (
                <Link
                  href={link.href}
                  className="block py-3 text-sm font-medium text-[#1A1A1A] hover:text-[#E8473F]"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
          <div className="pt-4">
            <Link
              href="/contact"
              className="block text-center py-3 bg-[#E8473F] text-white text-sm font-medium rounded-full"
            >
              Talk to us →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
