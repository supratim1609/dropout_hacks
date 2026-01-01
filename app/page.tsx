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

      <div id="about">
        <AboutSection />
      </div>

      <div id="tracks">
        <TracksSection />
      </div>

      <div id="timeline">
        <TimelineSection />
      </div>

      <div id="prizes">
        <PrizesSection />
      </div>

      <div id="sponsors">
        <SponsorsSection />
      </div>

      <div id="faq">
        <FAQSection />
      </div>

      <Footer />
    </main>
  );
}
