export type EcosystemPartnerType =
  | "corporate"
  | "school"
  | "ngo"
  | "government"
  | "media"
  | "sponsor"
  | "university";

export type EcosystemPartner = {
  id: string;
  name: string;
  type: EcosystemPartnerType;
  /** Path relative to /public, e.g. "/logos/partners/kbank.svg" — leave undefined to show text fallback */
  logo?: string;
  /** Short description of the partnership or what they do */
  description?: string;
  /** Optional external URL */
  href?: string;
  /** Whether to feature this partner prominently */
  featured?: boolean;
};

export const ecosystem: EcosystemPartner[] = [
  // ── Schools & institutions ───────────────────────────────────
  {
    id: "assumption-college",
    name: "Assumption College",
    type: "school",
    description: "Innovation and entrepreneurship programs",
    featured: true,
  },
  {
    id: "assumption-sriracha",
    name: "Assumption Sriracha",
    type: "school",
    description: "Panel Discussion",
    featured: true,
  },
  {
    id: "CSII",
    name: "CSII",
    type: "university",
    description: "Startup Sandox",
    featured: true,
  },

  // ── Add more partners below ──────────────────────────────────
  // {
  //   id: "partner-id",
  //   name: "Partner Name",
  //   type: "corporate", // corporate | school | ngo | government | media | sponsor
  //   logo: "/logos/partners/filename.svg", // optional — place file in /public/logos/partners/
  //   description: "Brief description",
  //   href: "https://...",
  //   featured: true,
  // },
];

/** Helper: filter by partner type */
export function getPartnersByType(type: EcosystemPartnerType): EcosystemPartner[] {
  return ecosystem.filter((p) => p.type === type);
}

/** Helper: get only featured partners */
export function getFeaturedPartners(): EcosystemPartner[] {
  return ecosystem.filter((p) => p.featured);
}
