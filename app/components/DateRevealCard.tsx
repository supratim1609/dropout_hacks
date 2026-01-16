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

                    {/* Living Grid Background - Animated */}
                    <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px_40px] animate-pulse pointer-events-none" />

                    {/* Holographic Scanner Line */}
                    <motion.div
                        className="absolute inset-x-0 h-[4px] bg-green-500/50 blur-[2px] z-20"
                        animate={{ top: ["0%", "100%", "0%"] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        style={{ boxShadow: "0 0 15px #22c55e, 0 0 30px #22c55e" }}
                    />

                    {/* Header Label */}
                    <div className="w-full flex justify-center mb-8 relative z-30">
                        <span className="px-4 py-1 text-xs font-black tracking-[0.2em] border-2 uppercase bg-[var(--color-comic-blue)] text-white border-black shadow-[4px_4px_0_black]">
                            OFFICIAL INTEL
                        </span>
                    </div>

                    {/* Central Content */}
                    <div className="z-10 flex flex-col items-center w-full gap-4 relative">
                        <h2 className="text-gray-400 font-mono text-xs tracking-widest uppercase mb-2">TARGET TIMELINE LOCKED</h2>

                        {/* Glitch Date */}
                        <div className="relative mb-6 group/date cursor-none">
                            <h3 className="text-5xl font-black italic uppercase text-white drop-shadow-[2px_2px_0_var(--color-comic-blue)] tracking-tighter transition-all duration-100 group-hover/date:translate-x-1 group-hover/date:-translate-y-1 group-hover/date:text-green-400">
                                MAR' 28-29 2026
                            </h3>
                            {/* Glitch Layer 1 - Red */}
                            <h3 className="absolute inset-0 text-5xl font-black italic uppercase text-red-500 opacity-0 group-hover/date:opacity-70 group-hover/date:translate-x-[-2px] group-hover/date:translate-y-[2px] transition-none pointer-events-none mix-blend-screen" aria-hidden="true">
                                MAR' 28-29 2026
                            </h3>
                            {/* Glitch Layer 2 - Cyan */}
                            <h3 className="absolute inset-0 text-5xl font-black italic uppercase text-cyan-500 opacity-0 group-hover/date:opacity-70 group-hover/date:translate-x-[2px] group-hover/date:translate-y-[-2px] transition-none pointer-events-none mix-blend-screen" aria-hidden="true">
                                MAR' 28-29 2026
                            </h3>
                        </div>

                        {/* Status Message */}
                        <div className="w-full relative space-y-4 text-center">

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
