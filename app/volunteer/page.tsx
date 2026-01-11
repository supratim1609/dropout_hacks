"use client";

import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { TeamGrid } from "../components/TeamGrid";
import { motion } from "framer-motion";
import { FloatingParticles } from "../components/FloatingParticles";

// Placeholder volunteer data - replace with Google Sheet integration later
const volunteers = [
    // Add volunteers here with format:
    // { name: "Name", role: "Volunteer", image: "https://...", socials: { linkedin: "...", instagram: "..." } }
];

export default function VolunteerPage() {
    return (
        <main className="min-h-screen bg-neutral-950 relative overflow-x-hidden selection:bg-[var(--color-comic-yellow)] selection:text-black">
            <Navbar />

            <div className="pt-32 pb-20 container mx-auto px-4 min-h-screen relative">
                <FloatingParticles />

                {/* Header */}
                <div className="flex flex-col items-center justify-center text-center mb-20">
                    <motion.div
                        className="flex flex-col items-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="bg-[var(--color-comic-purple)] text-white px-4 py-1 font-bold text-lg md:text-xl border-4 border-black shadow-[4px_4px_0_white] inline-block rotate-1 mb-6">
                            THE HEROES BEHIND THE SCENES
                        </span>
                        <h1 className="text-5xl md:text-8xl font-black text-white font-[family-name:var(--font-comic)] uppercase tracking-tighter">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-comic-yellow)] to-[var(--color-comic-red)] drop-shadow-[4px_4px_0_var(--color-comic-dark)] pb-2 pr-4">Volunteers</span>
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl mt-6 max-w-2xl font-[family-name:var(--font-body)]">
                            The amazing people who make everything possible. Without them, there is no multiverse.
                        </p>
                    </motion.div>
                </div>

                {/* Volunteer Grid */}
                {volunteers.length > 0 ? (
                    <TeamGrid members={volunteers} />
                ) : (
                    <motion.div
                        className="text-center py-20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="bg-black/50 border-2 border-dashed border-gray-600 rounded-lg p-12 max-w-lg mx-auto">
                            <p className="text-4xl mb-4">🕸️</p>
                            <h3 className="text-2xl font-black text-white font-[family-name:var(--font-comic)] uppercase mb-2">
                                Coming Soon
                            </h3>
                            <p className="text-gray-400 font-[family-name:var(--font-body)]">
                                Our volunteer squad is assembling. Check back soon!
                            </p>
                        </div>
                    </motion.div>
                )}
            </div>

            <Footer />
        </main>
    );
}
