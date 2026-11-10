// Stands in for lib/workshops.ts in scripts/check-*.mjs: the same escapeHtml, and
// supabaseAdmin() returns the FakeDb in globalThis.__db. Not part of the site.
export const HOLD_MINUTES = 15;
export const escapeHtml = (s) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
export function supabaseAdmin() {
  if (!globalThis.__db) throw new Error("no fake db");
  return globalThis.__db;
}
