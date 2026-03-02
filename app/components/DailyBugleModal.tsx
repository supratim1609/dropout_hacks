"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MousePointerClick, Zap } from "lucide-react";

export const DailyBugleModal = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check session storage to see if we've shown the news
        const hasSeenNews = sessionStorage.getItem("hasSeenDailyBugle");
        if (!hasSeenNews) {
            // Include a small delay so it doesn't clash with the initial preloader
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 2500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        sessionStorage.setItem("hasSeenDailyBugle", "true");
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
                    {/* Dark Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
                    />

                    {/* Cyber-Comic Holi Modal Container */}
                    <motion.div
                        initial={{ scale: 0.9, y: 50, opacity: 0 }}
                        animate={{ scale: 1, y: 0, opacity: 1 }}
                        exit={{ scale: 0.95, y: 20, opacity: 0 }}
                        transition={{
                            type: "spring",
                            damping: 20,
                            stiffness: 300,
                        }}
                        className="relative w-full max-w-2xl bg-zinc-950 border-4 border-white p-1 overflow-hidden group"
                        style={{
                            boxShadow: "10px 10px 0px 0px rgba(236,72,153, 1)", // Pink neo-brutalist shadow
                        }}
                    >
                        {/* --- DYNAMIC LIVING BACKGROUND --- */}
                        <div className="absolute inset-0 pointer-events-none overflow-hidden">
                            {/* Animated Breathing Blobs */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    x: [0, 20, 0],
                                    y: [0, -20, 0]
                                }}
                                transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                                className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen blur-3xl opacity-60"
                            />
                            <motion.div
                                animate={{
                                    scale: [1, 1.3, 1],
                                    x: [0, -30, 0],
                                    y: [0, 30, 0]
                                }}
                                transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1 }}
                                className="absolute top-1/2 -right-32 w-[30rem] h-[30rem] bg-pink-500 rounded-full mix-blend-screen blur-3xl opacity-50"
                            />
                            <motion.div
                                animate={{
                                    scale: [1, 1.1, 1],
                                    y: [0, 40, 0]
                                }}
                                transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 2 }}
                                className="absolute -bottom-40 left-1/4 w-[25rem] h-[25rem] bg-yellow-400 rounded-full mix-blend-screen blur-3xl opacity-40"
                            />

                            {/* Comic Halftone Overlay (Ties it to the Spider-Verse theme) */}
                            <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-halftone" />
                        </div>

                        {/* --- CONTENT --- */}
                        <div className="relative z-10 bg-zinc-950/70 backdrop-blur-md p-8 md:p-12 border-2 border-white/20 m-2">

                            {/* Close Button */}
                            <button
                                onClick={handleClose}
                                aria-label="Close modal"
                                className="absolute top-4 right-4 text-zinc-400 hover:text-pink-500 transition-colors z-20"
                            >
                                <X size={28} strokeWidth={3} />
                            </button>

                            <div className="flex flex-col items-start text-left">
                                {/* System Header */}
                                <div className="flex items-center gap-2 mb-6 font-mono text-cyan-400 text-sm xl:text-base font-bold uppercase tracking-widest border-b border-white/20 w-full pb-3">
                                    <Zap size={18} className="animate-pulse" />
                                    <span>SYSTEM WIDE EVENT // DROPOUTHACKS HOLI</span>
                                </div>

                                {/* Headline */}
                                <h2 className="text-5xl md:text-7xl font-black text-white mb-2 uppercase leading-[0.85] tracking-tighter">
                                    HAPPY <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-400 drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]">
                                        HOLI!
                                    </span>
                                </h2>

                                {/* Subtitle / Message */}
                                <p className="text-zinc-300 text-lg md:text-xl font-mono leading-relaxed mb-6 max-w-lg">
                                    Reality distortion detected across 50+ Universes. Welcome to the ultimate hacker convergence.
                                </p>

                                {/* THE MAIN HIGHLIGHT INSTRUCTION */}
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.8, type: "spring" }}
                                    className="w-full bg-pink-500 text-white p-4 md:p-6 mb-8 border-4 border-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform -rotate-2"
                                >
                                    <div className="flex items-center gap-4">
                                        <MousePointerClick size={40} className="animate-bounce" />
                                        <div>
                                            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight">CLICK ANYWHERE ON SCREEN!</h3>
                                            <p className="font-mono text-sm md:text-base font-bold">Throw digital colors and hack the UI.</p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Action Buttons */}
                                <div className="w-full flex flex-col sm:flex-row gap-4">
                                    <a
                                        href="https://dropouthacks.devfolio.co/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-white text-black font-black uppercase text-lg px-8 py-4 hover:bg-cyan-400 transition-colors border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-y-1 hover:shadow-none flex items-center justify-center"
                                    >
                                        Apply to DropoutHacks
                                    </a>
                                    <button
                                        onClick={handleClose}
                                        className="bg-zinc-900 border-2 border-zinc-700 text-white font-bold uppercase text-lg px-8 py-4 hover:bg-zinc-800 transition-colors"
                                    >
                                        Start Splashing
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
