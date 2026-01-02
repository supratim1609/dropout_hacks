"use client";

import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function TeamPage() {
    return (
        <main className="min-h-screen bg-neutral-950 relative overflow-x-hidden selection:bg-[var(--color-comic-yellow)] selection:text-black">
            <Navbar />

            <div className="pt-32 pb-20 container mx-auto px-4 min-h-screen flex flex-col justify-center items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <span className="bg-[var(--color-comic-yellow)] text-black px-4 py-1 font-bold text-xl border-4 border-black shadow-[4px_4px_0_white] inline-block -rotate-2 mb-4">
                        MEET THE SQUAD
                    </span>
                    <h1 className="text-5xl md:text-8xl font-black text-white font-[family-name:var(--font-comic)] uppercase tracking-tighter">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-comic-blue)] to-[var(--color-comic-purple)] drop-shadow-[4px_4px_0_var(--color-comic-dark)] pb-2 pr-4">Architects</span>
                    </h1>
                </motion.div>

                {/* Recruitment Status */}
                <div className="w-full max-w-4xl mx-auto text-center relative z-10">
                    <div className="bg-black border-4 border-white p-6 md:p-16 relative">
                        {/* Glitch Overlay */}
                        <div className="absolute inset-0 bg-halftone opacity-10 pointer-events-none" />

                        <div className="mb-8">
                            <span className="text-5xl md:text-8xl animate-pulse">🕵️</span>
                        </div>

                        <h2 className="text-2xl md:text-4xl font-black text-white uppercase font-[family-name:var(--font-comic)] mb-6 tracking-widest text-red-500">
                            ROSTER INCOMPLETE
                        </h2>

                        <p className="text-gray-300 font-bold font-[family-name:var(--font-body)] text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed">
                            We are currently selecting the elite team of builders, designers, and chaos managers to run this event.
                        </p>

                        <div className="relative inline-block group">
                            <div className="absolute inset-0 bg-[var(--color-comic-yellow)] transform translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
                            <a
                                href="https://forms.gle/ya7f6P1mg6nAwp1i6"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative block bg-white text-black font-black text-lg md:text-3xl px-8 py-4 md:px-12 md:py-6 uppercase border-4 border-black hover:-translate-y-1 hover:-translate-x-1 transition-transform cursor-none"
                            >
                                Apply to Join
                            </a>
                        </div>

                        <div className="mt-8 font-mono text-sm text-gray-500 font-bold border-t border-gray-800 pt-4 w-fit mx-auto">
                            <span className="inline-block w-2 h-2 bg-red-500 rounded-full mr-2 animate-ping" />
                            DEADLINE: JAN 5TH, 2026 @ MIDNIGHT
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
