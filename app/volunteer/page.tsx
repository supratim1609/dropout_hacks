import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { FloatingParticles } from "../components/FloatingParticles";
import { TeamGrid } from "../components/TeamGrid";

// Dummy data for volunteer preview
const dummyVolunteers = [
    {
        name: "Peter Parker",
        role: "Neighborhood Watch",
        image: "/logo.png", // Using local asset as placeholder
        socials: {
            github: "https://github.com",
            twitter: "https://x.com"
        },
        gender: "M"
    },
    {
        name: "Miles Morales",
        role: "Web Spinner",
        image: "/logo.png",
        socials: {
            instagram: "https://instagram.com"
        },
        gender: "M"
    },
    {
        name: "Gwen Stacy",
        role: "Drummer",
        image: "/logo.png",
        socials: {
            linkedin: "https://linkedin.com"
        },
        gender: "F"
    },
    {
        name: "Miguel O'Hara",
        role: "Timeline Security",
        image: "/logo.png",
        gender: "M"
    },
    {
        name: "Hobie Brown",
        role: "Anarchist",
        image: "/logo.png",
        gender: "M"
    },
    {
        name: "Pavitr Prabhakar",
        role: "Chai Enthusiast",
        image: "/logo.png",
        gender: "M"
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
                        <h1 className="text-5xl md:text-8xl font-black text-white font-[family-name:var(--font-comic)] uppercase tracking-tighter">
                            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-comic-blue)] to-[var(--color-comic-purple)] drop-shadow-[4px_4px_0_var(--color-comic-dark)] pb-2 pr-4">Weavers</span>
                        </h1>
                    </div>
                </div>

                {/* Team Grid with Dummy Data */}
                <TeamGrid members={dummyVolunteers} />

                {/* Call to Action / Info */}
                <div className="mt-20 flex flex-col items-center justify-center text-white/60 text-xl font-bold font-[family-name:var(--font-comic)] border-dashed border-2 border-white/20 p-8 rounded-lg bg-black/40 backdrop-blur-sm max-w-2xl mx-auto text-center">
                    <p className="mb-2">WANT TO JOIN THE SQUAD?</p>
                    <p className="text-base font-normal opacity-80">Volunteer applications are currently closed. Check back soon!</p>
                </div>

            </div>
            <Footer />
        </main>
    );
}
