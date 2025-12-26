import { PageShell } from "@/components/layout/PageShell";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FooterSection } from "@/components/sections/FooterSection";

const Index = () => {
  return (
    <PageShell>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ServicesSection />
      <WorkSection />
      <ContactSection />
      <FooterSection />
    </PageShell>
  );
};

export default Index;
