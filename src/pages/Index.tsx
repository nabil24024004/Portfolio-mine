import { PageShell } from "@/components/layout/PageShell";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsServicesSection } from "@/components/sections/SkillsServicesSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FooterSection } from "@/components/sections/FooterSection";

const Index = () => {
  return (
    <PageShell>
      <HeroSection />
      <AboutSection />
      <SkillsServicesSection />
      <WorkSection />
      <ContactSection />
      <FooterSection />
    </PageShell>
  );
};

export default Index;
