import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
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
  metadataBase: new URL("https://innoquest-website.vercel.app"),
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
      <Analytics />
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-9P1BDE0KN1" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-9P1BDE0KN1');
      `}</Script>
    </html>
  );
}
