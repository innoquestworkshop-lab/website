"use client";

type Anchor = { label: string; href: string };

export function ServicesNav({ anchors }: { anchors: Anchor[] }) {
  function scrollTo(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault();
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div style={{
      position: "sticky", top: 0, zIndex: 10,
      background: "#FFFFFF", borderBottom: "1px solid rgba(18,18,18,0.08)",
    }}>
      <div className="max-w-[1240px] mx-auto px-8" style={{ display: "flex", gap: 32 }}>
        {anchors.map((a) => (
          <a
            key={a.href}
            href={a.href}
            onClick={(e) => scrollTo(e, a.href)}
            style={{
              padding: "16px 0", fontSize: 13, fontWeight: 500,
              color: "#121212", textDecoration: "none",
              borderBottom: "2px solid transparent",
              transition: "border-color .2s, color .2s",
            }}
            className="services-anchor"
          >
            {a.label}
          </a>
        ))}
      </div>
      <style>{`.services-anchor:hover { border-bottom-color: #8A0F14 !important; color: #8A0F14 !important; }`}</style>
    </div>
  );
}
