"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import { DanglingSpidey } from "./DanglingSpidey";
import { MysteryVault } from "./MysteryVault";

export const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4">
            <DanglingSpidey className="hidden lg:block absolute right-10 -top-20 z-20 pointer-events-none" width={150} height={210} />
            {/* Background Elements */}
            <div className="absolute inset-0 bg-halftone z-0 pointer-events-none" />

            {/* Spider-Web SVG (Animated) */}
            <svg
                className="absolute top-0 right-0 w-[500px] h-[500px] opacity-20 z-0 hidden md:block"
                viewBox="0 0 500 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.path
                    d="M250 250 L500 0 M250 250 L500 250 M250 250 L400 500 M250 250 L100 500 M250 250 L0 250 M250 250 L0 0"
                    stroke="white"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />
                <circle cx="250" cy="250" r="50" stroke="white" strokeWidth="1" opacity="0.5" />
                <circle cx="250" cy="250" r="100" stroke="white" strokeWidth="1" opacity="0.3" />
                <circle cx="250" cy="250" r="150" stroke="white" strokeWidth="1" opacity="0.1" />
            </svg>

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                {/* Left Column: Text & CTA */}
                <div className="text-left space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="bg-[var(--color-comic-yellow)] text-black px-2 py-1 font-bold text-lg md:text-xl border-2 border-white shadow-[4px_4px_0px_0px_white] inline-block mb-4 rotate-[-2deg]">
                            KOLKATA'S MEGA BUILDATHON
                        </span>
                        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase mb-4 font-[family-name:var(--font-comic)]">
                            <span className="block text-white" style={{ textShadow: "4px 4px 0px var(--color-comic-red)" }}>
                                HACK INTO
                            </span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-comic-blue)] to-[var(--color-comic-purple)] animate-glitch" style={{
                                WebkitTextStroke: "2px white",
                                filter: "drop-shadow(4px 4px 0px var(--color-comic-dark))"
                            }}>
                                THE MULTIVERSE
                            </span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-lg font-[family-name:var(--font-body)]">
                            Join the chaos. Build across dimensions. <br />
                            <span className="text-[var(--color-comic-red)] font-bold">48 Hours</span> of pure coding madness.
                        </p>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 pt-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <button disabled className="group relative bg-gray-900 text-gray-300 font-bold text-xl px-8 py-4 uppercase border-2 border-gray-600 cursor-not-allowed opacity-80">
                            <span className="flex items-center gap-2">
                                Registrations Starting Soon ⏳
                            </span>
                        </button>
                        <a href="https://discord.gg/hmU2TssPf9" target="_blank" rel="noopener noreferrer" className="group relative bg-transparent text-white font-bold text-xl px-8 py-4 uppercase border-2 border-white hover:bg-[var(--color-comic-blue)] hover:border-[var(--color-comic-blue)] hover:text-black transition-all cursor-none flex items-center justify-center">
                            <span className="absolute -bottom-6 -left-6 bg-[var(--color-comic-yellow)] text-black text-sm font-black px-2 py-1 -rotate-12 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-black shadow-[2px_2px_0_black]">ZIP!</span>
                            <span className="flex items-center gap-2">
                                Discord <Terminal className="w-6 h-6" />
                            </span>
                        </a>
                    </motion.div>
                </div>

                {/* Right Column: Visual / Interactive */}
                <div className="relative hidden md:flex items-center justify-center min-h-[500px]">
                    <MysteryVault />
                </div>
            </div>
        </section>
    );
};
