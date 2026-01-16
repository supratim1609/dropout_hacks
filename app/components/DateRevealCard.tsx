"use client";

import React from "react";
import { motion } from "framer-motion";

export const DateRevealCard = () => {
    return (
        <div
            className="relative w-[320px] h-[420px] perspective-1000 group cursor-default"
        >
            <motion.div
                className="w-full h-full relative preserve-3d transition-all duration-500 ease-out transform group-hover:rotate-y-6 group-hover:rotate-x-6"
            >
                {/* Card Container */}
                <div className="absolute inset-0 bg-black border-4 border-white shadow-[8px_8px_0_var(--color-comic-dark)] flex flex-col items-center p-8 overflow-hidden group-hover:shadow-[12px_12px_0_var(--color-comic-blue)] transition-shadow">

                    {/* Background Pattern - Static & Subtle */}
                    <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

                    {/* Header Label */}
                    <div className="w-full flex justify-center mb-10 relative z-30">
                        <span className="px-5 py-2 text-sm font-black tracking-[0.2em] border-2 uppercase bg-[var(--color-comic-blue)] text-white border-black shadow-[4px_4px_0_black] transform group-hover:scale-105 transition-transform">
                            OFFICIAL INTEL
                        </span>
                    </div>

                    {/* Central Content */}
                    <div className="z-10 flex flex-col items-center w-full gap-2 relative mt-2">
                        <h2 className="text-gray-500 font-mono text-xs tracking-widest uppercase mb-4">TARGET TIMELINE LOCKED</h2>

                        {/* Clean Date Display */}
                        <div className="relative mb-6 text-center">
                            <h3 className="text-5xl md:text-6xl font-black italic uppercase text-white drop-shadow-[4px_4px_0_var(--color-comic-blue)] tracking-tighter transition-transform duration-300 group-hover:scale-110">
                                MAR' 28-29
                            </h3>
                            <h3 className="text-4xl font-black italic uppercase text-transparent bg-clip-text bg-gradient-to-b from-gray-200 to-gray-500 tracking-widest mt-2">
                                2026
                            </h3>
                        </div>
                    </div>

                    {/* Corner Accents */}
                    <div className="absolute bottom-4 left-4 text-[10px] font-mono text-green-500 animate-pulse flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                        ACCESS_GRANTED
                    </div>
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[var(--color-comic-blue)]" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[var(--color-comic-red)]" />
                </div>
            </motion.div>
        </div>
    );
};
