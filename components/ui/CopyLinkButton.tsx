"use client";

import { useState } from "react";

export function CopyLinkButton({ url, label, copied, failed }: { url: string; label: string; copied: string; failed: string }) {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");

  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
      setState("copied");
    } catch {
      setState("failed");
    }
    setTimeout(() => setState("idle"), 2000);
  }

  return (
    <button type="button" onClick={copy} className="btn btn-secondary" aria-live="polite">
      {state === "copied" ? copied : state === "failed" ? failed : label}
    </button>
  );
}
