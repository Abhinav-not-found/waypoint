import HeroSection from "@/features/marketing/ui/sections/Hero.section";
import ValueSection from "@/features/marketing/ui/sections/Value.section";
import FeaturesSection from "@/features/marketing/ui/sections/Feature.section";
import WorkflowSection from "@/features/marketing/ui/sections/Workflow.section";
import CollaborationSection from "@/features/marketing/ui/sections/Collaboration.section";
import FinalCTASection from "@/features/marketing/ui/sections/FinalCTA.section";
import Footer from "@/features/marketing/ui/sections/Footer.section";

const LandingPage = () => {
  return (
    <main className="w-full overflow-hidden">
      <HeroSection />
      <ValueSection />
      <div id="features">
        <FeaturesSection />
      </div>
      <div id="workflow">
        <WorkflowSection />
      </div>
      <CollaborationSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
};

export default LandingPage;
