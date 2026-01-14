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
                <div className="absolute inset-0 bg-black border-4 border-white shadow-[8px_8px_0_var(--color-comic-dark)] flex flex-col items-center p-8 overflow-hidden">

                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--color-comic-blue)_2px,_transparent_2px)] bg-[length:20px_20px]" />

                    {/* Header Label */}
                    <div className="w-full flex justify-center mb-8">
                        <span className="px-4 py-1 text-xs font-black tracking-[0.2em] border-2 uppercase bg-red-600 text-white border-black animate-pulse">
                            TOP SECRET
                        </span>
                    </div>

                    {/* Central Content */}
                    <div className="z-10 flex flex-col items-center w-full gap-4">
                        <h2 className="text-gray-400 font-mono text-xs tracking-widest uppercase">Mission Date</h2>
                        {/* Redacted Date - Revealed */}
                        <div className="relative mb-6 group/date">
                            <h3 className="text-5xl font-black italic uppercase text-white drop-shadow-[2px_2px_0_var(--color-comic-blue)] tracking-tighter transition-all duration-300">
                                MAR' 28-29 2026
                            </h3>
                        </div>

                        {/* Status Message */}
                        <div className="w-full relative space-y-4 text-center">
                            <p className="text-gray-500 font-mono text-xs uppercase tracking-widest mt-4">
                                REGISTRATIONS OPENING SOON
                            </p>
                        </div>
                    </div>

                    {/* Corner Accents */}
                    <div className="absolute bottom-4 left-4 text-[10px] font-mono text-gray-500">
                        AUTH_REQ
                    </div>
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[var(--color-comic-blue)]" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[var(--color-comic-red)]" />
                </div>
            </motion.div>
        </div>
    );
};
