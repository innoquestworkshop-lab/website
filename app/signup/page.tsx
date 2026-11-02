import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { SignupSection } from "@/components/sections/SignupSection";
import { getOpenWorkshops } from "@/lib/workshops";

export const metadata: Metadata = {
  title: "Workshop Sign-up — Ages 10–18, Bangkok",
  description: "Browse open InnoQuest entrepreneurship and innovation workshops in Bangkok for students aged 10–18, see dates and prices, and sign up and pay online in minutes.",
  alternates: { canonical: "/signup" },
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
