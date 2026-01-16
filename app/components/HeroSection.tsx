"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Terminal, Lock } from "lucide-react";
import { DanglingSpidey } from "./DanglingSpidey";
import { DateRevealCard } from "./DateRevealCard";
import { FloatingParticles } from "./FloatingParticles";

export const HeroSection = () => {


    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-36 pb-20 md:py-20 px-8 md:px-16 lg:px-24">
            <FloatingParticles />
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
                        <span className="bg-[var(--color-comic-yellow)] text-black px-2 py-1 font-bold text-sm sm:text-lg md:text-xl border-2 border-white shadow-[2px_2px_0px_0px_white] md:shadow-[4px_4px_0px_0px_white] inline-block mb-6 mt-2 rotate-[-1deg] md:rotate-[-2deg]">
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

                    {/* CTA Buttons - STATIC (No Animation) for Bot Detection */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 items-center sm:items-start">
                        <a
                            href="https://dropouthacks.devfolio.co/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 bg-[#3770ff] text-white font-bold text-lg rounded-[4px] hover:scale-105 transition-transform shadow-[4px_4px_0_rgba(0,0,0,0.3)]"
                            style={{ height: '44px', width: '312px' }}
                        >
                            <img src="/sponsors/Devfolio_Icon.svg" alt="Devfolio" className="h-6 w-auto" />
                            Apply with Devfolio
                        </a>
                        <a href="https://discord.gg/hmU2TssPf9" target="_blank" rel="noopener noreferrer" className="group relative bg-transparent text-white font-bold text-lg px-8 h-[44px] uppercase border-2 border-white hover:bg-[var(--color-comic-blue)] hover:border-[var(--color-comic-blue)] hover:text-black transition-all cursor-none flex items-center justify-center min-w-[200px]">
                            <span className="absolute -bottom-6 -left-6 bg-[var(--color-comic-yellow)] text-black text-sm font-black px-2 py-1 -rotate-12 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-black shadow-[2px_2px_0_black]">ZIP!</span>
                            <span className="flex items-center gap-2">
                                Discord <Terminal className="w-5 h-5" />
                            </span>
                        </a>
                    </div>


                </div>

                {/* Right Column: Visual / Interactive */}
                <div className="relative flex items-center justify-center min-h-[400px] md:min-h-[500px] hidden md:flex">
                    <DateRevealCard />
                </div>
            </div>
        </section>
    );
};
