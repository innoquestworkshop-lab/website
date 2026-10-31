"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IconMenu2, IconX, IconChevronDown } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { navLinks } from "@/data/navigation";
import { useLocale } from "@/components/LanguageProvider";

const linkBase = "block px-2 xl:px-3 py-2 text-sm font-medium whitespace-nowrap rounded-lg transition-colors";
const linkIdle = "text-ink hover:text-red-ink";

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { locale, toggle } = useLocale();

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
        "fixed top-0 left-0 right-0 z-50 bg-canvas border-b border-hairline transition-all duration-300",
        isHome && scrolled && !mobileOpen && "-translate-y-full opacity-0 pointer-events-none"
      )}
    >
      <nav className="wrap h-16 flex items-center justify-between gap-3">
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/logos/logo-transparent-trimmed.png"
            alt="InnoQuest"
            width={140}
            height={40}
            className="h-7 xl:h-8 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center m-0 p-0 list-none">
          {navLinks[locale].filter((link) => !link.highlight).map((link) => {
            const active = link.dropdown
              ? link.dropdown.some((d) => pathname === d.href)
              : pathname === link.href;
            return (
              <li key={link.href} className="relative group">
                {link.dropdown ? (
                  <>
                    <button
                      className={cn(linkBase, "flex items-center gap-1", active ? "text-red-ink" : linkIdle)}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <IconChevronDown size={14} className="transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
                    </button>
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-150">
                      <div className="bg-canvas rounded-2xl border border-hairline py-2 min-w-[200px]">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                              "block px-4 py-2 text-sm whitespace-nowrap transition-colors",
                              pathname === item.href
                                ? "text-red-ink bg-surface-card"
                                : "text-ink hover:bg-surface-card hover:text-red-ink"
                            )}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link href={link.href} className={cn(linkBase, active ? "text-red-ink" : linkIdle)}>
                    {link.label}
                  </Link>
                )}
                {active && <span className="absolute left-2 right-2 xl:left-3 xl:right-3 bottom-0 h-0.5 bg-innoquest-red" aria-hidden="true" />}
              </li>
            );
          })}
        </ul>

        {/* Actions + mobile toggle */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={toggle}
            className="inline-flex items-center justify-center min-w-10 h-10 px-2 rounded-full text-xs font-medium text-ink hover:bg-surface-card transition-colors"
          >
            {locale === "en" ? "TH" : "EN"}
          </button>
          {navLinks[locale].filter((link) => link.highlight).map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary hidden lg:inline-flex whitespace-nowrap"
              style={{ minHeight: 40, paddingInline: 12 }}
            >
              {link.label}
            </a>
          ))}
          <Link href="/signup" className="btn btn-primary hidden lg:inline-flex whitespace-nowrap" style={{ minHeight: 40, paddingInline: 16 }}>
            {locale === "en" ? "Sign up →" : "ลงทะเบียน →"}
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden grid place-items-center w-10 h-10 text-ink"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <IconX size={22} /> : <IconMenu2 size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="lg:hidden bg-canvas border-t border-hairline wrap py-4 max-h-[calc(100svh-64px)] overflow-y-auto">
          {navLinks[locale].filter((link) => !link.highlight).map((link) => (
            <div key={link.href}>
              {link.dropdown ? (
                <>
                  <button
                    onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                    aria-expanded={openDropdown === link.label}
                    className="w-full flex items-center justify-between py-3 text-sm font-medium text-ink"
                  >
                    {link.label}
                    <IconChevronDown size={14} className={cn("transition-transform", openDropdown === link.label && "rotate-180")} />
                  </button>
                  {openDropdown === link.label && (
                    <div className="pl-4 pb-2">
                      {link.dropdown.map((item) => (
                        <Link key={item.href} href={item.href} className="block py-2 text-sm text-body hover:text-red-ink">
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={link.href}
                  className="block py-3 text-sm font-medium text-ink hover:text-red-ink"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <Link href="/signup" className="btn btn-primary btn-block">
              {locale === "en" ? "Sign up →" : "ลงทะเบียน →"}
            </Link>
            {navLinks[locale].filter((link) => link.highlight).map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-block">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
