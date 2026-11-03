"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { normalizeAffiliateCode } from "@/lib/affiliate";

/** Picks up ?ref=CODE on any page and lets the server store the cookie and record the click. */
export function AffiliateRef() {
  const pathname = usePathname();
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = normalizeAffiliateCode(params.get("ref"));
    if (!code) return;
    const workshop = params.get("workshop")?.slice(0, 100) || undefined;
    fetch("/api/affiliate/click", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code, path: pathname, workshop }),
      keepalive: true,
    }).catch(() => {});
  }, [pathname]);
  return null;
}
