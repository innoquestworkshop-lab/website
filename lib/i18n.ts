import { cookies } from "next/headers";

export type Locale = "en" | "th";

export async function getLocale(): Promise<Locale> {
  const store = await cookies();
  return store.get("locale")?.value === "th" ? "th" : "en";
}

export function t<T>(data: { en: T; th: T }, locale: Locale): T {
  return data[locale];
}
