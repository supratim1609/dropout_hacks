"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Globe, Terminal } from "lucide-react";

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
                                    <span>March 28-29, 2026</span>
                                    <span>Kolkata Edition</span>
                                    <span>Price: One Idea</span>
                                </div>
                                <h1 className="font-black text-4xl md:text-7xl uppercase tracking-tighter leading-none font-serif py-1">
                                    THE DAILY BUGLE
                                </h1>
                                <div className="text-[8px] md:text-[10px] font-bold uppercase border-t border-black mt-1 pt-1 tracking-[0.2em] text-red-600">
                                    Multiverse Hacking Special Edition
                                </div>
                            </div>

                            {/* Headline */}
                            <div className="text-center mb-4 md:mb-6">
                                <h2 className="text-3xl md:text-5xl font-black uppercase leading-[0.9] font-sans mb-2">
                                    REGISTRATIONS <br />
                                    <span className="text-red-600">THREATENING</span> REALITY!
                                </h2>
                                <p className="font-serif italic text-xs md:text-sm text-gray-700">
                                    "Hackers from 50+ Universes descending on Kolkata!" - J. Jonah Jameson
                                </p>
                            </div>

                            {/* Content Grid */}
                            <div className="flex flex-col md:flex-row gap-4 items-center">
                                {/* Photo */}
                                <div className="w-full md:w-1/2 aspect-video bg-neutral-900 border-2 border-black relative overflow-hidden group shadow-[4px_4px_0_rgba(0,0,0,0.2)]">
                                    <div className="absolute inset-0 bg-halftone opacity-30" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Terminal className="w-16 h-16 text-[var(--color-comic-blue)] animate-pulse" />
                                    </div>
                                    <div className="absolute bottom-0 right-0 bg-white px-2 py-0.5 text-[6px] md:text-[8px] font-bold border-t border-l border-black">
                                        FIG A. THE CODE ANOMALY
                                    </div>
                                </div>

                                {/* Article Text */}
                                <div className="w-full md:w-1/2 font-serif text-sm leading-tight text-justify">
                                    <p className="first-letter:text-3xl md:first-letter:text-4xl first-letter:font-black first-letter:float-left first-letter:mr-1">
                                        T HE Multiverse is in chaos as the registration count for Kolkata's premier hackathon has shattered all known temporal records.
                                    </p>
                                    <p className="mt-2 text-blue-600 font-bold italic border-y border-blue-200 py-1">
                                        "They're not just building apps, they're rewriting the law of physics!"
                                    </p>
                                    <p className="mt-2">
                                        Jameson demands to know: Who are these "Dropout" hackers and why is the Mayor allowing such a disruption?
                                    </p>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="mt-4 md:mt-6 pt-2 border-t-2 border-black text-center flex flex-col gap-2">
                                <a
                                    href="https://dropouthacks.devfolio.co/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-black text-white font-bold uppercase px-4 py-3 text-xs md:text-sm hover:bg-neutral-800 transition-colors shadow-[4px_4px_0_var(--color-comic-blue)] flex items-center justify-center gap-2 border-2 border-black"
                                >
                                    APPLY NOW VIA DEVFOLIO
                                </a>
                                <button
                                    onClick={handleClose}
                                    className="text-[10px] uppercase font-bold text-gray-500 hover:text-black transition-colors"
                                >
                                    CLOSE THE BUGLE
                                </button>
                            </div>

                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
