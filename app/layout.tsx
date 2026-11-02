import type { Metadata } from "next";
import { cookies } from "next/headers";
import { AffiliateRef } from "@/components/AffiliateRef";
import { LanguageProvider } from "@/components/LanguageProvider";
import type { Locale } from "@/lib/i18n";
import "@fontsource/chakra-petch/600.css";
import "@fontsource/chakra-petch/700.css";
import "@fontsource/ibm-plex-sans-thai/400.css";
import "@fontsource/ibm-plex-sans-thai/500.css";
import "@fontsource/ibm-plex-sans-thai/600.css";
import "@fontsource/ibm-plex-sans-thai/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | InnoQuest Youth Learning Programs Thailand",
    default: "InnoQuest | Business Simulations and Workshops for Ages 10 to 18",
  },
  description:
    "We design gamified simulations and custom learning programs for schools and corporate youth initiatives, and we measure the results.",
  metadataBase: new URL("https://innoquest.tech"),
  openGraph: {
    siteName: "InnoQuest",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "InnoQuest | Youth Learning Programs Thailand",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image"],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const store = await cookies();
  const locale: Locale = store.get("locale")?.value === "th" ? "th" : "en";

  return (
    <html lang={locale}>
      <head>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`} />
        <script dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
        ` }} />
      </head>
      <body className="min-h-screen antialiased">
        <LanguageProvider initialLocale={locale}>
          <AffiliateRef />
          {children}
        </LanguageProvider>
        <script defer src="/_vercel/insights/script.js" />
        <script defer src="/_vercel/speed-insights/script.js" />
      </body>
    </html>
  );
}
