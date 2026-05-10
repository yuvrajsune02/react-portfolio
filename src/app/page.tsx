import FeaturedProjects from "./components/featured-projects/featured-projects";
import { HeroSection } from "./components/hero/hero";
import TechStack from "./components/tech-stack/tech-stack";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <TechStack/>
      <FeaturedProjects/>
    </div>
  );
}
