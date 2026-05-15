"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IconMenu2, IconX, IconChevronDown } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { navLinks } from "@/data/navigation";


export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
            src="/logos/logo-transparent-trimmed.png"
            alt="InnoQuest"
            width={140}
            height={40}
            className="h-8 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.filter((link) => !link.highlight).map((link) => (
            <li key={link.href} className="relative group">
              {link.dropdown ? (
                <>
                  <button
                    className={cn(
                      "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                      pathname.startsWith(link.href)
                        ? "text-[#8A0F14]"
                        : scrolled || mobileOpen
                          ? "text-[#121212] hover:text-[#8A0F14]"
                          : "text-[#F5F0EA] hover:text-[#8A0F14]"
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
                              ? "text-[#8A0F14] bg-[#F5F0EA]"
                              : "text-[#121212] hover:bg-[#F5F0EA] hover:text-[#8A0F14]"
                          )}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : link.external ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "block px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                    link.highlight
                      ? "text-[#8A0F14] border border-[#8A0F14] rounded-full px-4 hover:bg-[#8A0F14] hover:text-white"
                      : scrolled || mobileOpen
                        ? "text-[#121212] hover:text-[#8A0F14]"
                        : "text-[#F5F0EA] hover:text-[#8A0F14]"
                  )}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  href={link.href}
                  className={cn(
                    "block px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                    pathname === link.href
                      ? "text-[#8A0F14]"
                      : scrolled || mobileOpen
                        ? "text-[#121212] hover:text-[#8A0F14]"
                        : "text-[#F5F0EA] hover:text-[#8A0F14]"
                  )}
                >
                  {link.label}
                  {pathname === link.href && (
                    <span className="block h-0.5 bg-[#8A0F14] rounded-full mt-0.5" />
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
            className="hidden lg:inline-flex items-center px-5 py-2 bg-[#8A0F14] text-white text-sm font-medium rounded-full transition-transform active:scale-[0.98] hover:bg-[#6B0A0E]"
          >
            Talk to us →
          </Link>
          {navLinks.filter((link) => link.highlight).map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 px-5 py-2 text-sm font-medium rounded-full text-white transition-all active:scale-[0.98] hover:opacity-90 hover:shadow-lg"
              style={{ background: "linear-gradient(135deg, #7C3AED 0%, #2563EB 100%)" }}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn("lg:hidden p-2 transition-colors", scrolled || mobileOpen ? "text-[#121212]" : "text-[#F5F0EA]")}
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
              {link.dropdown ? (
                <>
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === link.label ? null : link.label)
                    }
                    className="w-full flex items-center justify-between py-3 text-sm font-medium text-[#121212]"
                  >
                    {link.label}
                    <IconChevronDown
                      size={14}
                      className={cn(
                        "transition-transform",
                        openDropdown === link.label && "rotate-180"
                      )}
                    />
                  </button>
                  {openDropdown === link.label && (
                    <div className="pl-4 pb-2 space-y-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block py-2 text-sm text-[#4A4A4A] hover:text-[#8A0F14]"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={link.href}
                  className="block py-3 text-sm font-medium text-[#121212] hover:text-[#8A0F14]"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            {navLinks.filter((link) => link.highlight).map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-3 text-white text-sm font-medium rounded-full"
              style={{ background: "linear-gradient(135deg, #7C3AED 0%, #2563EB 100%)" }}
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/contact"
              className="block text-center py-3 bg-[#8A0F14] text-white text-sm font-medium rounded-full"
            >
              Talk to us →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
