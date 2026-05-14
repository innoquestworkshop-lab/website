import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "InnoQuest — Build Real Skills, Not Just Grades",
  description: "Bangkok's leading youth learning company. Innovation workshops, business camps & entrepreneurship programs for students, schools, corporates & families across Thailand.",
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
        <div id="section-who-we-serve"><AudienceSwitcher /></div>
        <div id="section-method"><MethodologySection /></div>
        <div id="section-experiences"><ProgramsSection /></div>
        <div id="section-partners"><PartnersSection /></div>
        <div id="section-journey"><JourneySection /></div>
        <div id="section-reviews"><TestimonialsSection /></div>
        <div id="section-cta"><CTASection /></div>
        <Footer />
      </main>
    </>
  );
}
