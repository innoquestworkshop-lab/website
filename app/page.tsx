import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "InnoQuest | Youth Innovation & Entrepreneurship Programs Bangkok",
  description: "Bangkok's top youth learning company. Innovation workshops, entrepreneurship camps & business simulations for students aged 10–18, schools, corporates & families across Thailand.",
  keywords: [
    "youth innovation programs Bangkok",
    "entrepreneurship camp Thailand",
    "business simulation for students",
    "innovation workshop Bangkok",
    "youth learning company Thailand",
    "school innovation program",
    "CSR youth program Thailand",
    "teen entrepreneurship Bangkok",
  ],
  openGraph: {
    images: [{ url: "/images/events/price-war-080.jpg", width: 1200, height: 630, alt: "InnoQuest students in a business simulation workshop in Bangkok" }],
  },
  twitter: { card: "summary_large_image" },
};

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollNav } from "@/components/layout/ScrollNav";
import { HeroSection } from "@/components/sections/HeroSection";
import { AudienceSwitcher } from "@/components/sections/AudienceSwitcher";
import { MethodologySection } from "@/components/sections/MethodologySection";
import { ProgramsSection } from "@/components/sections/ProgramsSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { JourneySection } from "@/components/sections/JourneySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { SignatureSection } from "@/components/sections/SignatureSection";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <ScrollNav />
      <main className="h-screen overflow-y-scroll">
<HeroSection />
        <div id="section-our-edge"><SignatureSection /></div>
        <div id="section-method"><MethodologySection /></div>
        <div id="section-who-we-serve" style={{ borderTop: "1px solid rgba(18,18,18,0.08)" }}><AudienceSwitcher /></div>
        <div id="section-experiences" style={{ borderTop: "1px solid rgba(18,18,18,0.08)" }}><ProgramsSection /></div>
        <div id="section-partners"><PartnersSection /></div>
        <div id="section-journey"><JourneySection /></div>
        <div id="section-reviews"><TestimonialsSection /></div>
        <div id="section-cta"><CTASection /></div>
        <Footer />
      </main>
    </>
  );
}
