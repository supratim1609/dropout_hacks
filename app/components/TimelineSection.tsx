"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lock, Puzzle } from "lucide-react";

// The "Roadmap" - Only the first phase is revealed.
// Future, mysterious phases are "Locked".
const timelinePhases = [
    {
        id: 1,
        date: "JAN 16",
        title: "PORTAL OPENS",
        description: "Registration begins. The multiverse gates open for the top 1% of builders.",
        status: "unlocked",
        color: "bg-[var(--color-comic-red)]"
    },
    {
        id: 2,
        date: "FEB 2026",
        title: "TRANSMISSION INCOMING",
        description: "Secret sessions detected. Workshops on [REDACTED]. Training modules loading...",
        status: "unlocked",
        color: "bg-[var(--color-comic-red)]"
    },
    {
        id: 3,
        date: "MARCH 15",
        title: "FINAL RECON",
        description: "Round 1 results out. RSVP for offline finals. Final briefing before the dimensional leap.",
        status: "unlocked",
        color: "bg-[var(--color-comic-red)]"
    },
    {
        id: 4,
        date: "MARCH 28",
        title: "THE ENDGAME",
        description: "The main convergence. 48 hours of pure building, pizza, and prizes in Kolkata.",
        status: "unlocked",
        color: "bg-[var(--color-comic-red)]"
    }
];

export const TimelineSection = () => {
    return (
        <section id="roadmap" className="py-20 px-4 md:px-8 relative overflow-hidden bg-[var(--color-comic-Blue)]">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-halftone opacity-10 pointer-events-none" />

            <div className="container mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-white drop-shadow-[4px_4px_0_black]">
                        THE ROADMAP
                    </h2>
                    <p className="text-xl text-yellow-300 font-bold mt-4 uppercase tracking-widest">
                        Collect the pieces. Solve the puzzle.
                    </p>
                </motion.div>

                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
                    {timelinePhases.map((phase, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="relative group"
                        >
                            {/* Connector Line (Lego-ish) */}
                            {index !== timelinePhases.length - 1 && (
                                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-4 bg-black z-0 transform -translate-y-1/2" />
                            )}

                            {/* Card */}
                            <div className={`
                                relative z-10 p-6 h-full border-4 border-black transition-all duration-300
                                ${phase.status === 'locked' ? 'bg-gray-900 border-dashed' : 'bg-white shadow-[8px_8px_0_black] hover:-translate-y-2'}
                            `}>
                                {/* "Stud" on top for Lego look */}
                                <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-4 border-4 border-black border-b-0 ${phase.status === 'locked' ? 'bg-gray-800' : 'bg-[var(--color-comic-red)]'}`} />

                                <div className="flex flex-col h-full justify-between">
                                    {/* Header */}
                                    <div className="mb-4">
                                        <span className={`inline-block px-3 py-1 text-sm font-black border-2 border-black mb-2 ${phase.status === 'locked' ? 'bg-gray-700 text-gray-400' : 'bg-[var(--color-comic-yellow)] text-black'}`}>
                                            PHASE 0{phase.id}
                                        </span>
                                        <h3 className={`text-2xl font-black uppercase leading-tight ${phase.status === 'locked' ? 'text-gray-500' : 'text-black'}`}>
                                            {phase.title}
                                        </h3>
                                    </div>

                                    {/* Body */}
                                    <div className="flex-grow">
                                        {phase.status === 'locked' ? (
                                            <div className="flex items-center justify-center py-8">
                                                <Lock className="w-12 h-12 text-gray-700 animate-pulse" />
                                            </div>
                                        ) : (
                                            <p className="font-bold text-gray-800 text-sm">
                                                {phase.description}
                                            </p>
                                        )}
                                    </div>

                                    {/* Footer / Date */}
                                    <div className={`mt-4 pt-4 border-t-2 ${phase.status === 'locked' ? 'border-gray-800 border-dashed' : 'border-black'}`}>
                                        <p className={`font-mono text-lg font-bold ${phase.status === 'locked' ? 'text-gray-600' : 'text-[var(--color-comic-red)]'}`}>
                                            {phase.date}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
