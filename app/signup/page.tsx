import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { SignupSection } from "@/components/sections/SignupSection";
import { getOpenWorkshops } from "@/lib/workshops";

export const metadata: Metadata = {
  title: "Workshop Sign-up | InnoQuest",
  description: "See open InnoQuest workshops for students aged 10 to 18, sign up, and pay online.",
};

export default async function SignupPage() {
  const workshops = await getOpenWorkshops();
  return (
    <>
      <Navbar />
      <main>
        <SignupSection workshops={workshops} />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
