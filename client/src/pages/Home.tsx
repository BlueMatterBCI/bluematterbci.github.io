/*
 * Design: Neural Dark — Cyberpunk Minimalism
 * Home: Full landing page assembling all sections
 * Dark theme, electric blue accents, Space Grotesk + Work Sans + JetBrains Mono
 */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LogoStrip from "@/components/LogoStrip";
import AboutSection from "@/components/AboutSection";
import TechnologySection from "@/components/TechnologySection";
import PipelineSection from "@/components/PipelineSection";
import MarketSection from "@/components/MarketSection";
import UseCasesSection from "@/components/UseCasesSection";
import RoadmapSection from "@/components/RoadmapSection";
import TeamSection from "@/components/TeamSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <LogoStrip />
      <AboutSection />
      <TechnologySection />
      <PipelineSection />
      <MarketSection />
      <UseCasesSection />
      <RoadmapSection />
      <TeamSection />
      <FooterSection />
    </div>
  );
}
