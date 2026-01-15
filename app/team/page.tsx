import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { TeamGrid } from "../components/TeamGrid";
import { getTeamData } from "../lib/googleSheets";
import { FloatingParticles } from "../components/FloatingParticles";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Meet The Team - The Architects",
    description: "Meet the brilliant minds behind Dropout Hacks - Kolkata's premier Spider-Verse themed hackathon. Our dedicated team of organizers, mentors, and tech enthusiasts working to create an unforgettable experience.",
    keywords: [
        "dropout hacks team",
        "hackathon organizers kolkata",
        "dropout hacks organizers",
        "tech event team",
        "hackathon mentors",
        "kolkata tech community"
    ],
    openGraph: {
        title: "Meet The Team - The Architects | Dropout Hacks",
        description: "Meet the brilliant minds behind Dropout Hacks - Kolkata's premier Spider-Verse themed hackathon.",
        url: "https://dropouthacks.tech/team",
        images: [
            {
                url: "/opengraph-image.png",
                width: 1200,
                height: 630,
                alt: "Dropout Hacks Team",
            },
        ],
    },
    alternates: {
        canonical: "https://dropouthacks.tech/team",
    },
};

// Force dynamic rendering if we want real-time updates without building
// export const dynamic = 'force-dynamic'; 

export default async function TeamPage() {
    const teamMembers = await getTeamData();

    return (
        <main className="min-h-screen bg-neutral-950 relative overflow-x-hidden selection:bg-[var(--color-comic-yellow)] selection:text-black">
            <FloatingParticles />
            <Navbar />

            <div className="pt-32 pb-20 container mx-auto px-4 min-h-screen relative z-10">
                {/* Header */}
                <div className="flex flex-col items-center justify-center text-center mb-20">
                    <div className="flex flex-col items-center animate-fade-in-up">
                        {/* Note: Using simple CSS animation class or server-rendered equivalent for header if motion is tricky in SC, 
                            but we can keep it simple or wrap header in client comp if needed. 
                            For now, just static HTML for header to keep it fast/server-side. */}
                        <span className="bg-[var(--color-comic-yellow)] text-black px-4 py-1 font-bold text-lg md:text-xl border-4 border-black shadow-[4px_4px_0_white] inline-block -rotate-2 mb-6">
                            MEET THE SQUAD
                        </span>
                        <h1 className="text-5xl md:text-8xl font-black text-white font-[family-name:var(--font-comic)] uppercase tracking-tighter">
                            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-comic-blue)] to-[var(--color-comic-purple)] drop-shadow-[4px_4px_0_var(--color-comic-dark)] pb-2 pr-4">Architects</span>
                        </h1>
                    </div>
                </div>

                {/* Team Grid (Client Component) */}
                <TeamGrid members={teamMembers} />

            </div>
            <Footer />
        </main>
    );
}
