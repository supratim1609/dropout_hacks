"use client";

import React from "react";
import { motion } from "framer-motion";

const partners = [
    { name: "Tech Vanguard", type: "wide" },
    { name: "Code Nexus", type: "square" },
    { name: "Dev Galaxy", type: "tall" },
    { name: "Build Forge", type: "wide" },
    { name: "Logic Gate", type: "square" },
    { name: "Pixel Guild", type: "wide" },
    { name: "Script Squad", type: "tall" },
    { name: "Bit Burst", type: "square" },
];

const Row = ({ items, speed, direction = "left" }: { items: any[], speed: number, direction?: "left" | "right" }) => {
    const fullItems = [...items, ...items, ...items, ...items];
    return (
        <div className="flex overflow-hidden py-4 select-none">
            <motion.div
                className="flex whitespace-nowrap gap-6 items-center"
                animate={{ x: direction === "left" ? [0, -1000] : [-1000, 0] }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: speed,
                        ease: "linear",
                    },
                }}
            >
                {fullItems.map((item, idx) => (
                    <div
                        key={idx}
                        className={`
                            group relative bg-black border-4 border-white overflow-hidden transition-all hover:border-[var(--color-comic-yellow)] hover:scale-105 active:scale-95
                            ${item.type === 'wide' ? 'w-[300px] h-[120px]' : item.type === 'tall' ? 'w-[180px] h-[220px]' : 'w-[200px] h-[200px]'}
                        `}
                    >
                        {/* Background Halftone on Hover */}
                        <div className="absolute inset-0 bg-halftone opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none" />

                        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                            <img
                                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(item.name)}&background=000&color=fff&size=512&bold=true`}
                                alt={item.name}
                                className="w-full h-full object-contain mb-2"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-white text-black py-1 px-4 transform translate-y-full group-hover:translate-y-0 transition-transform">
                                <span className="font-black font-[family-name:var(--font-comic)] uppercase italic text-xs tracking-tighter">
                                    {item.name}
                                </span>
                            </div>
                        </div>

                        {/* Comic Scanline Effect */}
                        <div className="absolute inset-0 pointer-events-none border-2 border-transparent group-hover:border-white/30" />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export const CommunityPartnersSection = () => {
    return (
        <section className="py-24 bg-[var(--color-comic-dark)] overflow-hidden border-y-8 border-black relative">
            {/* Background Narrative Layers */}
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]" />
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent opacity-50" />

            <div className="container mx-auto px-4 mb-12 relative z-10 text-center">
                <h2 className="text-6xl md:text-8xl font-black font-[family-name:var(--font-comic)] uppercase leading-none tracking-tighter text-white">
                    THE <span className="text-[var(--color-comic-red)]">ALLIANCE</span>
                </h2>
                <div className="inline-block bg-white text-black px-4 py-1 mt-4 font-black transform -rotate-1 text-xl border-2 border-black">
                    CROSS-DIMENSIONAL PARTNERS
                </div>
            </div>

            {/* Sexy Single-row Marquee handling different aspect ratios */}
            <div className="relative z-10 py-12">
                <Row items={partners} speed={35} direction="left" />
            </div>

            {/* Floating Labels / Narrative Elements */}
            <div className="absolute top-1/4 -left-10 transform -rotate-90 opacity-10 pointer-events-none">
                <span className="text-9xl font-black font-[family-name:var(--font-comic)] text-white uppercase italic">
                    CONNECTED
                </span>
            </div>
            <div className="absolute bottom-1/4 -right-10 transform rotate-90 opacity-10 pointer-events-none">
                <span className="text-9xl font-black font-[family-name:var(--font-comic)] text-white uppercase italic">
                    NETWORK
                </span>
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center relative z-10">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSc70_R3slKTVC6f5BTABlYvz6wBaNbEXaRV9r3I7kh0ZQpzew/viewform" target="_blank" rel="noopener noreferrer">
                    <button className="relative px-12 py-6 font-black uppercase tracking-tighter text-2xl group cursor-none">
                        <div className="absolute inset-0 bg-white border-4 border-black group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
                        <div className="absolute inset-0 bg-[var(--color-comic-red)] -translate-x-2 -translate-y-2 border-4 border-black group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        <span className="relative text-white font-[family-name:var(--font-comic)] group-hover:text-[var(--color-comic-yellow)] transition-colors">
                            Request Alliance Access
                        </span>
                    </button>
                </a>
            </div>

            {/* Tech Corner Details */}
            <div className="absolute top-4 left-4 flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-ping" />
                <span className="text-white/40 text-[10px] uppercase font-mono tracking-widest leading-none">Scanning...</span>
            </div>
        </section>
    );
};
