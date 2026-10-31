"use client";

type Anchor = { label: string; href: string };

export function ServicesNav({ anchors }: { anchors: Anchor[] }) {
  function scrollTo(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault();
    const id = href.replace("#", "");
    const smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById(id)?.scrollIntoView({ behavior: smooth ? "smooth" : "auto", block: "start" });
  }

  return (
    <nav className="anchor-row" aria-label="Sections">
      <div className="wrap">
        {anchors.map((a) => (
          <a key={a.href} href={a.href} onClick={(e) => scrollTo(e, a.href)}>
            {a.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
