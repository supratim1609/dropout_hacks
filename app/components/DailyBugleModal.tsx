"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Heart } from "lucide-react";

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
                <div className="fixed inset-0 z-[10000] flex items-start justify-center p-4 overflow-y-auto py-12">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
                    />

                    {/* Newspaper Modal */}
                    <motion.div
                        initial={{ scale: 0, rotate: -720, y: 500 }}
                        animate={{ scale: 1, rotate: 0, y: 0 }}
                        exit={{ scale: 0.5, opacity: 0, y: 200 }}
                        transition={{
                            type: "spring",
                            damping: 20,
                            stiffness: 100,
                            duration: 1.5
                        }}
                        className="relative bg-[#f0e6d2] text-black w-full max-w-lg shadow-[0_0_50px_rgba(0,0,0,0.5)] p-0.5 md:p-1 md:rotate-1"
                        style={{
                            backgroundImage: "radial-gradient(#b0a692 1px, transparent 1px)",
                            backgroundSize: "20px 20px"
                        }}
                    >
                        {/* Paper borders effect */}
                        <div className="border-4 border-black h-full p-2 md:p-6 relative bg-[#f0e6d2]">

                            {/* Close Button - Responsive Position */}
                            <button
                                onClick={handleClose}
                                aria-label="Close daily bugle modal"
                                className="absolute -top-3 -right-3 md:-top-5 md:-right-5 bg-red-600 text-white p-2 md:p-2 border-2 border-black shadow-[4px_4px_0_black] hover:scale-110 transition-transform z-20"
                            >
                                <X size={24} strokeWidth={4} className="w-6 h-6" />
                            </button>

                            {/* Header */}
                            <div className="border-b-4 border-black pb-2 mb-4 text-center">
                                <div className="flex justify-between items-center text-[8px] md:text-[10px] font-bold uppercase border-b border-black mb-1 pb-1">
                                    <span>February 14, 2026</span>
                                    <span>Kolkata Edition</span>
                                    <span>Price: One Heart</span>
                                </div>
                                <h1 className="font-black text-4xl md:text-7xl uppercase tracking-tighter leading-none font-serif py-1">
                                    THE DAILY BUGLE
                                </h1>
                                <div className="text-[8px] md:text-[10px] font-bold uppercase border-t border-black mt-1 pt-1 tracking-[0.2em] text-red-600">
                                    Valentine's Day Special Edition
                                </div>
                            </div>

                            {/* Headline */}
                            <div className="text-center mb-4 md:mb-6">
                                <h2 className="text-3xl md:text-5xl font-black uppercase leading-[0.9] font-sans mb-2">
                                    MULTIVERSE <br />
                                    ROMANCE <span className="text-pink-600 italic">EXPOSED!</span>
                                </h2>
                                <p className="font-serif italic text-xs md:text-sm text-gray-700">
                                    "Is Spidey trading his web-shooters for chocolates?" - J. Jonah Jameson
                                </p>
                            </div>

                            {/* Content Grid */}
                            <div className="flex flex-col md:flex-row gap-4 items-center">
                                {/* Photo */}
                                <div className="w-full md:w-1/2 aspect-video bg-neutral-900 border-2 border-black relative overflow-hidden group shadow-[4px_4px_0_rgba(0,0,0,0.2)] bg-gradient-to-br from-blue-900/40 to-pink-900/40">
                                    <div className="absolute inset-0 bg-halftone opacity-30" />
                                    {/* Abstract Miles/Gwen representation */}
                                    <div className="absolute inset-0 flex items-center justify-center gap-2">
                                        <motion.div
                                            animate={{ scale: [1, 1.1, 1], rotate: [-5, 5, -5] }}
                                            transition={{ duration: 4, repeat: Infinity }}
                                            className="text-blue-500"
                                        >
                                            <Heart size={40} fill="currentColor" stroke="black" strokeWidth={2} />
                                        </motion.div>
                                        <motion.div
                                            animate={{ scale: [1.1, 1, 1.1], rotate: [5, -5, 5] }}
                                            transition={{ duration: 4, repeat: Infinity }}
                                            className="text-pink-500"
                                        >
                                            <Heart size={40} fill="currentColor" stroke="black" strokeWidth={2} />
                                        </motion.div>
                                    </div>
                                    <div className="absolute bottom-0 right-0 bg-white px-2 py-0.5 text-[6px] md:text-[8px] font-bold border-t border-l border-black">
                                        FIG A. THE ANOMALY
                                    </div>
                                </div>

                                {/* Article Text */}
                                <div className="w-full md:w-1/2 font-serif text-sm leading-tight text-justify">
                                    <p className="first-letter:text-3xl md:first-letter:text-4xl first-letter:font-black first-letter:float-left first-letter:mr-1">
                                        R UMORS are swarming the city after two mysterious figures, resembling the rogue Spider-variants, were spotted atop the Victoria Memorial.
                                    </p>
                                    <p className="mt-2 text-rose-600 font-bold italic border-y border-rose-200 py-1">
                                        "They weren't fighting. They were... coding together?"
                                    </p>
                                    <p className="mt-2">
                                        Witnesses claim their "Multiverse Compatibility" test resulted in a perfect match. Jameson is calling for a hearing on this distraction!
                                    </p>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="mt-4 md:mt-6 pt-2 border-t-2 border-black text-center flex flex-col gap-2">
                                <a
                                    href="https://valentine-x-dropouthacks.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-rose-500 text-white font-bold uppercase px-4 py-2 text-xs md:text-sm hover:bg-rose-600 transition-colors shadow-[2px_2px_0_rgba(0,0,0,0.3)] flex items-center justify-center gap-2"
                                >
                                    <Heart size={14} fill="white" />
                                    PLAY THE FLAMES GAME
                                </a>
                                <button
                                    onClick={handleClose}
                                    aria-label="Close daily bugle modal"
                                    className="bg-black text-white font-bold uppercase px-6 py-2 text-xs md:text-sm hover:bg-neutral-800 transition-colors w-full shadow-[2px_2px_0_rgba(0,0,0,0.3)] active:translate-y-[2px] active:shadow-none border-2 border-black"
                                >
                                    BACK TO THE GRID
                                </button>
                            </div>

                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
