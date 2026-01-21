import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem";
import { WhatIsSection } from "@/components/sections/what-is";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { BuiltForSection } from "@/components/sections/built-for";
import { DifferentiatorsSection } from "@/components/sections/differentiators";
import { WhoForSection } from "@/components/sections/who-for";
import { PhilosophySection } from "@/components/sections/philosophy";
import { FinalCTASection } from "@/components/sections/final-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <ProblemSection />
        <WhatIsSection />
        <HowItWorksSection />
        <BuiltForSection />
        <DifferentiatorsSection />
        <WhoForSection />
        <PhilosophySection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
