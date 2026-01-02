"use client";

import React from "react";
import { motion } from "framer-motion";
import { ComicPanel } from "./ComicPanel";
import { Trophy, Award, Gift } from "lucide-react";

export const PrizesSection = () => {
    return (
        <section className="py-20 px-4 bg-[var(--color-comic-dark)] relative overflow-hidden" id="prizes">
            {/* Glitchy Grid Background */}
            <div className="absolute inset-0 z-0 opacity-20"
                style={{
                    backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
                    backgroundSize: "40px 40px"
                }}
            />

            <div className="container mx-auto text-center mb-12 relative z-10">
                <h2 className="text-6xl md:text-8xl font-black font-[family-name:var(--font-comic)] text-white mb-4 uppercase text-shadow-comic transform -rotate-2 inline-block border-4 border-white px-6 py-2 bg-[var(--color-comic-red)] shadow-[8px_8px_0_black]">
                    The Loot
                </h2>
                <p className="text-xl md:text-2xl text-white font-[family-name:var(--font-body)] font-bold mt-6 bg-black inline-block px-4 py-1 transform rotate-1">
                    Wait for the drop.
                </p>
            </div>

            <div className="container mx-auto max-w-5xl relative z-10">
                {/* Main "Classified" Container */}
                <div className="relative group">
                    {/* Background "Paper" Layers for chaotic effect */}
                    <div className="absolute inset-0 bg-[var(--color-comic-yellow)] transform translate-x-4 translate-y-4 rotate-1 border-4 border-black" />
                    <div className="absolute inset-0 bg-[var(--color-comic-blue)] transform -translate-x-2 -translate-y-2 -rotate-1 border-4 border-black" />

                    {/* Main Content Card */}
                    <div className="relative bg-white border-4 border-black p-8 md:p-16">
                        {/* "Caution" Tape Stripes in background */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none"
                            style={{ backgroundImage: "repeating-linear-gradient(45deg, #000 0, #000 10px, transparent 10px, transparent 20px)" }}
                        />

                        <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
                            {/* Left: Glitching Visual */}
                            <div className="w-full md:w-1/2 flex justify-center">
                                <div className="relative">
                                    <motion.div
                                        animate={{
                                            x: [0, -2, 2, -1, 0],
                                            y: [0, 1, -1, 0]
                                        }}
                                        transition={{ repeat: Infinity, duration: 0.2, repeatDelay: 3 }}
                                        className="relative z-10 bg-black p-4 border-4 border-white shadow-[8px_8px_0_var(--color-comic-red)]"
                                    >
                                        <div className="w-48 h-48 md:w-64 md:h-64 bg-gray-900 flex items-center justify-center relative overflow-hidden">
                                            <span className="text-9xl relative z-10">🏆</span>
                                            {/* Glitch Overlay */}
                                            <div className="absolute inset-0 bg-red-500 mix-blend-multiply animate-pulse opacity-50" />
                                            <div className="absolute bottom-0 w-full bg-yellow-400 text-black text-center font-black text-xs py-1 uppercase tracking-widest">
                                                CONFIDENTIAL
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* "Classified" Stamp */}
                                    <div className="absolute -top-6 -left-6 z-20 transform -rotate-12 border-4 border-red-600 border-double p-2 rounded-lg opacity-80 mix-blend-multiply bg-white/50 backdrop-blur-sm">
                                        <span className="text-red-600 font-black text-2xl uppercase tracking-[0.2em] px-2 font-mono">
                                            TOP SECRET
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Text & Info */}
                            <div className="w-full md:w-1/2 text-left space-y-6">
                                <h3 className="text-4xl md:text-5xl font-black font-[family-name:var(--font-comic)] uppercase leading-none text-black">
                                    PRIZE POOL <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-comic-blue)] to-[var(--color-comic-purple)]">
                                        ENCRYPTED
                                    </span>
                                </h3>

                                <div className="space-y-4 font-[family-name:var(--font-body)] font-bold text-lg text-gray-800">
                                    <p className="flex items-center gap-3">
                                        <span className="w-6 h-6 bg-black text-white flex items-center justify-center text-sm">1</span>
                                        Data packets incoming...
                                    </p>
                                    <p className="flex items-center gap-3">
                                        <span className="w-6 h-6 bg-black text-white flex items-center justify-center text-sm">2</span>
                                        Decryption key required...
                                    </p>
                                    <p className="flex items-center gap-3">
                                        <span className="w-6 h-6 bg-black text-white flex items-center justify-center text-sm">3</span>
                                        Timeline convergence imminent.
                                    </p>
                                </div>

                                {/* Loading Bar */}
                                <div className="bg-gray-200 border-2 border-black p-1 mt-8">
                                    <div className="relative h-6 bg-gray-300 overflow-hidden">
                                        <motion.div
                                            className="absolute top-0 left-0 h-full bg-[var(--color-comic-purple)]"
                                            initial={{ width: "0%" }}
                                            animate={{ width: "65%" }}
                                            transition={{ duration: 1.5, ease: "circOut" }}
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center text-xs font-black text-white mix-blend-difference">
                                            LOADING ASSETS... 65%
                                        </div>
                                    </div>
                                </div>
                                <button disabled className="mt-4 bg-black text-white px-6 py-2 font-black uppercase text-sm border-2 border-transparent hover:border-black hover:bg-white hover:text-black transition-colors w-full cursor-not-allowed opacity-50">
                                    ACCESS DENIED
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
