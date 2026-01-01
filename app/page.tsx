import { HeroSection } from "./components/HeroSection";
import { TracksSection } from "./components/TracksSection";
import { TimelineSection } from "./components/TimelineSection";
import { AboutSection } from "./components/AboutSection";
import { PrizesSection } from "./components/PrizesSection";
import { SponsorsSection } from "./components/SponsorsSection";
import { FAQSection } from "./components/FAQSection";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <TracksSection />
      <TimelineSection />
      <PrizesSection />
      <SponsorsSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
