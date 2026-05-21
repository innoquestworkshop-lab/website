import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { cookies } from "next/headers";
import { LanguageProvider } from "@/components/LanguageProvider";
import type { Locale } from "@/lib/i18n";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    template: "%s — InnoQuest | Youth Learning Programs Thailand",
    default: "InnoQuest | Youth Learning Programs Thailand",
  },
  description:
    "Experiential learning programs for schools, corporates & institutions — science-backed, play-driven, designed for the next generation.",
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
    <html lang={locale} className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`} />
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
        ` }} />
      </head>
      <body className="min-h-screen antialiased">
        <LanguageProvider initialLocale={locale}>
          {children}
        </LanguageProvider>
        <script defer src="/_vercel/insights/script.js" />
        <script defer src="/_vercel/speed-insights/script.js" />
      </body>
    </html>
  );
}
