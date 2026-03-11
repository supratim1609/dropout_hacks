"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const SPONSORS = [
    { name: "Devfolio", logo: "/sponsors/Devfolio_Logo-Colored.png" },
    { name: "Algorand", logo: "/sponsors/Algorand.jpg" },
    { name: "CodeCrafters", logo: "/sponsors/CodeCrafters.png", innerBgClass: "bg-black" },
    { name: "Duality", logo: "/sponsors/Duality.jpg" },
    { name: "Shardeum", logo: "/sponsors/Shardeum.jpg" },
    { name: "Mastra", logo: "/sponsors/Mastra.jpg" },
    { name: "n8n", logo: "/sponsors/n8n.jpg" },
    { name: "v0 by Vercel", logo: "/sponsors/v0.jpg" }
];

const PYRAMID_ROWS = [
    SPONSORS.slice(0, 1), // Top tier: 1 sponsor
    SPONSORS.slice(1, 5), // Tier 2: 4 sponsors
    SPONSORS.slice(5, 8)  // Base tier: 3 sponsors (the in-kind sponsors)
];

export const SponsorsSection = () => {
    return (
        <section className="relative pt-[12vw] pb-16 md:pb-24 px-4 overflow-hidden -mt-[8vw] z-30 text-white">
            {/* Black Slanted Border Layer */}
            <div
                className="absolute inset-x-0 top-0 bottom-0 bg-black pointer-events-none z-0"
                style={{ clipPath: "polygon(0 6vw, 100% 0, 100% 100%, 0 100%)" }}
            />
            {/* Main Red Background Layer */}
            <div
                className="absolute inset-x-0 top-[1vw] md:top-[0.8vw] bottom-0 bg-[var(--color-comic-red)] pointer-events-none z-0"
                style={{ clipPath: "polygon(0 6vw, 100% 0, 100% 100%, 0 100%)" }}
            >
                {/* Background Dots Pattern */}
                <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
                    backgroundImage: "radial-gradient(#000 2px, transparent 2px)",
                    backgroundSize: "24px 24px"
                }}>
                </div>
            </div>

            <div className="container mx-auto relative z-10 text-center flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="mb-12"
                >
                    <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-black font-[family-name:var(--font-comic)] uppercase leading-none tracking-tight mb-2">
                        <span className="text-white" style={{ WebkitTextStroke: "3px black" }}>OUR</span> <span className="text-black">SPONSORS</span>
                    </h2>
                    <div className="inline-block bg-[var(--color-comic-yellow)] text-black px-4 py-2 mt-4 font-black transform -rotate-2 text-lg md:text-2xl border-4 border-black shadow-[6px_6px_0_black]">
                        THE ALLIANCE ASSEMBLES!
                    </div>
                </motion.div>

                {/* Pyramid Grid of Sponsors */}
                <div className="max-w-6xl mx-auto w-full px-4 md:px-8 space-y-6 md:space-y-10">
                    {PYRAMID_ROWS.map((row, rowIndex) => (
                        <div key={`row-${rowIndex}`} className="flex flex-wrap justify-center gap-6 md:gap-10">
                            {row.map((sponsor, index) => (
                                <motion.div
                                    key={sponsor.name}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: (rowIndex * 0.1) + (index * 0.1), duration: 0.4 }}
                                    whileHover={{ scale: 1.05, rotate: Math.random() > 0.5 ? 2 : -2 }}
                                    className="bg-white border-4 border-black p-4 flex items-center justify-center relative shadow-[8px_8px_0_black] md:shadow-[12px_12px_0_black] w-36 h-36 md:w-56 md:h-56 group cursor-pointer transition-all hover:bg-gray-50 overflow-hidden"
                                >
                                    {/* Comic Burst Background */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-300">
                                        <svg viewBox="0 0 100 100" className="w-full h-full fill-black">
                                            <path d="M0 50 L20 40 L10 20 L40 30 L50 0 L60 30 L90 20 L80 40 L100 50 L80 60 L90 80 L60 70 L50 100 L40 70 L10 80 L20 60 Z" />
                                        </svg>
                                    </div>
                                    
                                    <div className={`relative w-full h-full p-2 md:p-4 ${sponsor.innerBgClass || ''}`}>
                                        <Image
                                            src={sponsor.logo}
                                            alt={`${sponsor.name} Logo`}
                                            fill
                                            style={{ objectFit: 'contain' }}
                                            className="transition-transform duration-300 group-hover:scale-110"
                                        />
                                    </div>
                                    {/* Scanline Effect */}
                                    <div className="absolute inset-0 bg-halftone-white opacity-10 pointer-events-none" />
                                </motion.div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* Corner Details */}
            <div className="absolute bottom-10 left-10 flex gap-2 items-center">
                <div className="w-4 h-4 bg-[var(--color-comic-blue)] border-2 border-black rotate-45 animate-pulse shadow-[2px_2px_0_black]" />
                <span className="text-xs font-black uppercase tracking-tighter text-black md:text-white filter drop-shadow-[2px_2px_0_var(--color-comic-red)] md:drop-shadow-none bg-yellow-400 md:bg-transparent px-1 border-black border-2 md:border-none">
                    Link Status: ONLINE
                </span>
            </div>
        </section>
    );
};

