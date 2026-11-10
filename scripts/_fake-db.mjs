// A small in-memory stand-in for the Supabase client, for scripts/check-*.mjs only.
// Supports the calls the website routes make: from(t).select/insert/update with eq, is,
// in, maybeSingle, single, and rpc(name, args) through registered handlers. Embedded
// relations (workshops(...)) are whatever the seeded row carries. Not part of the site.

import { randomUUID } from "node:crypto";

export class FakeDb {
  constructor() {
    this.tables = {};
    this.rpcs = {};
    this.rpcCalls = [];
    this.unique = { staff_notifications: ["dedupe_key"] };
  }
  rows(t) {
    return (this.tables[t] ??= []);
  }
  seed(t, row) {
    const r = { id: randomUUID(), ...row };
    this.rows(t).push(r);
    return r;
  }
  from(t) {
    return new Query(this, t);
  }
  async rpc(name, args) {
    this.rpcCalls.push({ name, args });
    const fn = this.rpcs[name];
    if (!fn) return { data: null, error: { message: `function ${name} does not exist` } };
    try {
      return { data: await fn(this, args), error: null };
    } catch (e) {
      return { data: null, error: { message: e.message } };
    }
  }
}

class Query {
  constructor(db, t) {
    this.db = db;
    this.t = t;
    this.filters = [];
    this.op = "select";
    this.single = null;
  }
  select() { if (this.op === "select") this.op = "select"; this.returning = true; return this; }
  insert(row) { this.op = "insert"; this.payload = Array.isArray(row) ? row : [row]; return this; }
  update(patch) { this.op = "update"; this.payload = patch; return this; }
  eq(c, v) { this.filters.push((r) => r[c] === v); return this; }
  is(c, v) { this.filters.push((r) => (v === null ? r[c] == null : r[c] === v)); return this; }
  in(c, list) { this.filters.push((r) => list.includes(r[c])); return this; }
  maybeSingle() { this.single = "maybe"; return this.run(); }
  then(res, rej) { return this.run().then(res, rej); }
  async run() {
    const rows = this.db.rows(this.t);
    let out;
    if (this.op === "insert") {
      for (const r of this.payload) {
        for (const c of this.db.unique[this.t] ?? []) {
          if (r[c] != null && rows.some((x) => x[c] === r[c])) return { data: null, error: { code: "23505", message: "duplicate key" } };
        }
      }
      out = this.payload.map((r) => this.db.seed(this.t, r));
    } else if (this.op === "update") {
      out = rows.filter((r) => this.filters.every((f) => f(r)));
      for (const r of out) Object.assign(r, this.payload);
    } else {
      out = rows.filter((r) => this.filters.every((f) => f(r)));
    }
    const copy = out.map((r) => ({ ...r }));
    if (this.single === "maybe") return { data: copy[0] ?? null, error: null };
    return { data: copy, error: null };
  }
}
