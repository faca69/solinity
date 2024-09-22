import ContactUsSection from "@/components/ContactUsSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import RoadmapSection from "@/components/RoadmapSection";

export default function HomePage() {
  return (
    <main className="px-10 flex flex-col text-center justify-center text-white ">
      <HeroSection />

      <FeaturesSection />

      <HowItWorksSection />

      <RoadmapSection />

      <ContactUsSection />
    </main>
  );
}
