"use client";

import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
// import { TimelineSection } from "./components/TimelineSection";
import { TracksSection } from "./components/TracksSection";
import { PrizesSection } from "./components/PrizesSection";
import { SponsorsSection } from "./components/SponsorsSection";
import { FAQSection } from "./components/FAQSection";
import { Footer } from "./components/Footer";
import { WebShooter } from "./components/WebShooter";
import { OrganisersMessage } from "./components/OrganisersMessage";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-comic-dark)] overflow-x-hidden selection:bg-[var(--color-comic-red)] selection:text-white relative">
      <WebShooter />
      <Navbar />
      <HeroSection />
      <AboutSection />
      {/* <TimelineSection /> */}
      <TracksSection />
      <PrizesSection />
      <SponsorsSection />
      <FAQSection />
      <OrganisersMessage />
      <Footer />
    </main>
  );
}
