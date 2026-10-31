"use client";

import { createContext, useContext, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import type { Locale } from "@/lib/i18n";

type LanguageCtx = { locale: Locale; toggle: () => void };

const LanguageContext = createContext<LanguageCtx>({ locale: "en", toggle: () => {} });

export function LanguageProvider({
  children,
  initialLocale,
}: {
  children: React.ReactNode;
  initialLocale: Locale;
}) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const router = useRouter();

  const toggle = useCallback(() => {
    const next: Locale = locale === "en" ? "th" : "en";
    document.cookie = `locale=${next};path=/;max-age=31536000`;
    setLocale(next);
    router.refresh();
  }, [locale, router]);

  return (
    <LanguageContext.Provider value={{ locale, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLocale(): LanguageCtx {
  return useContext(LanguageContext);
}
