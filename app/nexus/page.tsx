"use client";

import { HeroSection } from "../components/HeroSection";
import { TracksSection } from "../components/TracksSection";
import { TimelineSection } from "../components/TimelineSection";
import { AboutSection } from "../components/AboutSection";
import { PrizesSection } from "../components/PrizesSection";
import { SponsorsSection } from "../components/SponsorsSection";
import { FAQSection } from "../components/FAQSection";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export default function NexusPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
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
