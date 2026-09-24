import Hero from "@/components/home/Hero";
import Statement from "@/components/home/Statement";
import CapabilityPillars from "@/components/home/CapabilityPillars";
import Journey from "@/components/home/Journey";
import ResearchSection from "@/components/home/ResearchSection";
import SolutionsSection from "@/components/home/SolutionsSection";
import ContactCTA from "@/components/home/ContactCTA";

export default function HomePage() {
  return <main><Hero /><Statement /><CapabilityPillars /><Journey /><ResearchSection /><SolutionsSection /><ContactCTA /></main>;
}
