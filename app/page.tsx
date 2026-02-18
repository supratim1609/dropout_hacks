import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { TimelineSection } from "./components/TimelineSection";
import { TracksSection } from "./components/TracksSection";
import { PrizesSection } from "./components/PrizesSection";
import { SponsorsSection } from "./components/SponsorsSection";
import { FAQSection } from "./components/FAQSection";
import { Footer } from "./components/Footer";
import { WebShooter } from "./components/WebShooter";
import { OrganisersMessage } from "./components/OrganisersMessage";
import { getTeamData } from "./lib/googleSheets";
import { DailyBugleModal } from "./components/DailyBugleModal";

// Force dynamic rendering if we want real-time updates without building
export const dynamic = 'force-dynamic';

export default async function Home() {
  const allMembers = await getTeamData();

  // Pass all members to the Team Sphere
  const teamMembers = allMembers;

  return (
    <main className="min-h-screen bg-[var(--color-comic-dark)] overflow-x-hidden selection:bg-[var(--color-comic-red)] selection:text-white relative">
      <DailyBugleModal />
      <WebShooter />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <TracksSection />
      <PrizesSection />
      <SponsorsSection />
      <FAQSection />
      <OrganisersMessage members={teamMembers} />
      <Footer />
    </main>
  );
}
