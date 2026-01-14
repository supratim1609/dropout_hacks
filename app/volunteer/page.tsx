import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { FloatingParticles } from "../components/FloatingParticles";
import { TeamGrid } from "../components/TeamGrid";

// Dummy data for volunteer preview
const dummyVolunteers = [
    {
        name: "Sneha Debnath",
        role: "Volunteer",
        image: "/team/sneha.jpg",
        socials: {
            github: "https://github.com/Snehacseaiml",
            linkedin: "https://www.linkedin.com/in/sneha-debnath-71b635289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        },
        gender: "F"
    },
    {
        name: "Sarika Shaw",
        role: "Volunteer",
        image: "/team/sarika.jpg",
        socials: {
            github: "https://github.com/shawsarika14",
            linkedin: "https://www.linkedin.com/in/sarika-shaw-706424355?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        },
        gender: "F"
    }
];

export default function VolunteerPage() {
    return (
        <main className="min-h-screen bg-neutral-950 relative overflow-x-hidden selection:bg-[var(--color-comic-yellow)] selection:text-black">
            <FloatingParticles />
            <Navbar />

            <div className="pt-32 pb-20 container mx-auto px-4 min-h-screen relative z-10">
                {/* Header */}
                <div className="flex flex-col items-center justify-center text-center mb-20">
                    <div className="flex flex-col items-center animate-fade-in-up">
                        <span className="bg-[var(--color-comic-yellow)] text-black px-4 py-1 font-bold text-lg md:text-xl border-4 border-black shadow-[4px_4px_0_white] inline-block -rotate-2 mb-6">
                            MEET THE BACKBONE
                        </span>
                        <h1 className="text-5xl md:text-8xl font-black text-white font-[family-name:var(--font-comic)] uppercase tracking-wider">
                            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-comic-blue)] to-[var(--color-comic-purple)] drop-shadow-[4px_4px_0_var(--color-comic-dark)] pb-2 pr-4">Weavers</span>
                        </h1>
                    </div>
                </div>

                {/* Team Grid with Dummy Data */}
                <TeamGrid members={dummyVolunteers} />



            </div>
            <Footer />
        </main>
    );
}
