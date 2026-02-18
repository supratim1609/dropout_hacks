"use client";

import React from "react";
import { motion } from "framer-motion";

export const SponsorsSection = () => {
    return (
        <section className="py-12 px-4 bg-white text-black bg-halftone-white relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none select-none">
                <span className="text-[20vw] font-black uppercase italic leading-none whitespace-nowrap">
                    SECURE SECURE
                </span>
            </div>

            <div className="container mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="mb-8"
                >
                    <h2 className="text-5xl md:text-7xl font-black font-[family-name:var(--font-comic)] uppercase leading-none tracking-tighter text-transparent" style={{ WebkitTextStroke: "2px black" }}>
                        OUR <span className="text-black">SPONSORS</span>
                    </h2>
                    <div className="inline-block bg-[var(--color-comic-red)] text-white px-3 py-1 mt-2 font-black transform -rotate-2 text-lg border-2 border-black shadow-[4px_4px_0_black]">
                        ALLIANCE PENDING...
                    </div>
                </motion.div>

                <div className="max-w-2xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="bg-white border-4 border-black p-8 md:p-12 relative shadow-[12px_12px_0_black]"
                    >
                        {/* Comic Burst Background */}
                        <div className="absolute inset-0 opacity-5 pointer-events-none">
                            <svg viewBox="0 0 100 100" className="w-full h-full fill-black">
                                <path d="M0 50 L20 40 L10 20 L40 30 L50 0 L60 30 L90 20 L80 40 L100 50 L80 60 L90 80 L60 70 L50 100 L40 70 L10 80 L20 60 Z" />
                            </svg>
                        </div>

                        <div className="relative z-10 space-y-6">
                            <motion.div
                                animate={{ rotate: [0, -5, 5, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="inline-block"
                            >
                                <span className="text-6xl md:text-7xl filter drop-shadow-[4px_4px_0_rgba(0,0,0,0.1)]">🛰️</span>
                            </motion.div>

                            <h3 className="text-3xl md:text-5xl font-black font-[family-name:var(--font-comic)] uppercase italic leading-none">
                                Coming <span className="text-[var(--color-comic-red)]">Soon!</span>
                            </h3>

                            <p className="text-lg md:text-xl font-bold font-[family-name:var(--font-body)] text-gray-800 uppercase tracking-widest border-y-2 border-black py-3">
                                Scouring the Multiverse for potential allies.
                            </p>

                            <div className="pt-4">
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSc70_R3slKTVC6f5BTABlYvz6wBaNbEXaRV9r3I3kh0ZQpzew/viewform" target="_blank" rel="noopener noreferrer">
                                    <button className="relative px-6 py-3 md:px-10 md:py-4 bg-black text-white font-black text-lg md:text-2xl uppercase italic border-2 border-black hover:bg-[var(--color-comic-yellow)] hover:text-black transition-colors cursor-none group">
                                        <span className="relative z-10">Become A Sponsor</span>
                                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
                                    </button>
                                </a>
                            </div>
                        </div>

                        {/* Scanline Effect */}
                        <div className="absolute inset-0 bg-halftone-white opacity-10 pointer-events-none" />
                    </motion.div>
                </div>
            </div>

            {/* Corner Details */}
            <div className="absolute bottom-10 left-10 flex gap-2">
                <div className="w-4 h-4 bg-[var(--color-comic-blue)] border-2 border-black rotate-45 animate-pulse" />
                <span className="text-xs font-black uppercase tracking-tighter">Link Status: Offline</span>
            </div>
        </section>
    );
};
