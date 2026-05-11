import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AudienceSwitcher } from "@/components/sections/AudienceSwitcher";
import { MethodologySection } from "@/components/sections/MethodologySection";
import { ProgramsSection } from "@/components/sections/ProgramsSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { JourneySection } from "@/components/sections/JourneySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="h-screen overflow-y-scroll snap-y snap-mandatory">
        <HeroSection />
        <AudienceSwitcher />
        <MethodologySection />
        <ProgramsSection />
        <PartnersSection />
        <JourneySection />
        <TestimonialsSection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}
