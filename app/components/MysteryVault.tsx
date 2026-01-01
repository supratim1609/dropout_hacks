"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Lock, ShieldAlert, Fingerprint, History } from "lucide-react";

export const MysteryVault = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="relative w-full h-full flex items-center justify-center perspective-1000">
            <motion.div
                className="relative w-[340px] h-[420px] cursor-pointer group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                animate={{
                    rotateY: isHovered ? [0, -2, 2, 0] : 0,
                }}
                transition={{ duration: 0.5 }}
            >
                {/* The Vault / Lockbox */}
                <div className="absolute inset-0 bg-neutral-900 border-4 border-neutral-700 rounded-xl shadow-[20px_20px_50px_rgba(0,0,0,0.8)] flex flex-col items-center p-6 overflow-hidden">

                    {/* Caution Tape */}
                    <div className="absolute top-12 -right-12 w-[150%] h-10 bg-yellow-500 text-black font-black flex items-center justify-center rotate-[35deg] border-t-4 border-b-4 border-black z-20 shadow-lg opacity-90 pointer-events-none">
                        <span className="tracking-widest">CLASSIFIED DATE</span>
                    </div>

                    {/* Background Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

                    {/* Header */}
                    <div className="w-full flex justify-between items-start z-10 mb-8">
                        <div className="flex items-center gap-2">
                            <History className="w-5 h-5 text-[var(--color-comic-blue)] animate-spin-slow" />
                            <span className="text-xs font-mono text-[var(--color-comic-blue)] tracking-widest">TEMPORAL SYNC</span>
                        </div>
                        <div className="flex gap-1">
                            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse delay-75" />
                            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse delay-150" />
                        </div>
                    </div>

                    {/* Central "Redacted Timer" Mechanism */}
                    <div className="relative z-10 w-full flex flex-col items-center justify-center gap-6">

                        <h3 className="text-xl font-black text-white tracking-[0.2em] font-[family-name:var(--font-comic)] uppercase border-b-2 border-neutral-700 pb-2">
                            MISSION LAUNCH
                        </h3>

                        {/* The "Timer" Display */}
                        <div className="flex items-center gap-2">
                            {/* Hours */}
                            <div className="flex flex-col items-center gap-1">
                                <div className="w-16 h-20 bg-black border-2 border-neutral-600 rounded flex items-center justify-center relative overflow-hidden">
                                    <span className="text-3xl font-mono text-neutral-800 blur-sm select-none">88</span>
                                    <div className="absolute inset-0 bg-neutral-800/50 flex items-center justify-center">
                                        <Lock className="w-6 h-6 text-neutral-500" />
                                    </div>
                                </div>
                                <span className="text-[10px] text-neutral-500 font-mono">HRS</span>
                            </div>

                            <span className="text-2xl font-black text-neutral-700 animate-pulse">:</span>

                            {/* Minutes */}
                            <div className="flex flex-col items-center gap-1">
                                <div className="w-16 h-20 bg-black border-2 border-neutral-600 rounded flex items-center justify-center relative overflow-hidden">
                                    <span className="text-3xl font-mono text-neutral-800 blur-sm select-none">88</span>
                                    <div className="absolute inset-0 bg-neutral-800/50 flex items-center justify-center">
                                        <Lock className="w-6 h-6 text-neutral-500" />
                                    </div>
                                </div>
                                <span className="text-[10px] text-neutral-500 font-mono">MIN</span>
                            </div>

                            <span className="text-2xl font-black text-neutral-700 animate-pulse">:</span>

                            {/* Seconds */}
                            <div className="flex flex-col items-center gap-1">
                                <div className="w-16 h-20 bg-black border-2 border-neutral-600 rounded flex items-center justify-center relative overflow-hidden">
                                    <span className="text-3xl font-mono text-neutral-800 blur-sm select-none">88</span>
                                    <div className="absolute inset-0 bg-neutral-800/50 flex items-center justify-center">
                                        <Lock className="w-6 h-6 text-neutral-500" />
                                    </div>
                                </div>
                                <span className="text-[10px] text-neutral-500 font-mono">SEC</span>
                            </div>
                        </div>

                        <div className="bg-red-500/10 border border-red-500/50 px-4 py-2 rounded text-red-500 text-xs font-mono text-center">
                            <span className="animate-pulse">⚠ ENCRYPTED SIGNAL DETECTED</span>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="w-full z-10 mt-auto pt-6 border-t border-neutral-800 flex justify-between items-center opacity-60">
                        <div className="flex flex-col">
                            <span className="text-[9px] text-neutral-500 uppercase">Status</span>
                            <span className="text-[10px] text-white font-mono">AWAITING DECLASSIFICATION</span>
                        </div>
                        <Fingerprint className="w-6 h-6 text-neutral-600" />
                    </div>

                    {/* Scanning Line Effect */}
                    <motion.div
                        animate={{ top: ['0%', '100%'], opacity: [0, 0.5, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute left-0 right-0 h-[2px] bg-red-500 shadow-[0_0_10px_red] z-30 pointer-events-none"
                    />
                </div>

                {/* Floating Comic Box */}
                <motion.div
                    animate={{ y: [0, 5, 0], rotate: [-2, 2, -2] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -top-4 -left-4 bg-[var(--color-comic-red)] text-white px-3 py-1 border-2 border-black -rotate-6 z-30 shadow-[4px_4px_0_black]"
                >
                    <span className="font-bold uppercase text-xs font-[family-name:var(--font-comic)]">Dates Loading...</span>
                </motion.div>

            </motion.div>
        </div>
    );
};
