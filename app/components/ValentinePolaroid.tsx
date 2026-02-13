"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Heart, Camera } from "lucide-react";

export const ValentinePolaroid = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const hasSeenPolaroid = sessionStorage.getItem("hasSeenValentinePolaroid");
        if (!hasSeenPolaroid) {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 3000); // Appear after loading screen and initial look
            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        sessionStorage.setItem("hasSeenValentinePolaroid", "true");
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed inset-0 z-[10000] flex items-start justify-center p-4 overflow-y-auto py-20 bg-black/70 backdrop-blur-md">
                    {/* Backdrop click to close */}
                    <div className="fixed inset-0 cursor-pointer" onClick={handleClose} />

                    <motion.div
                        initial={{ scale: 0.5, opacity: 0, y: 100, rotate: -15 }}
                        animate={{ scale: 1, opacity: 1, y: 0, rotate: -2 }}
                        exit={{ scale: 0.8, opacity: 0, y: 50, rotate: 5 }}
                        transition={{ type: "spring", damping: 20, stiffness: 100 }}
                        className="relative w-full max-w-sm md:max-w-md mx-auto"
                    >
                        {/* Washi Tape - Top (Spray Paint Texture) */}
                        <div className="absolute -top-7 left-1/2 -translate-x-1/2 z-30 w-32 md:w-40 h-8 md:h-10 bg-pink-500/80 backdrop-blur-xl border-x-4 border-white transform rotate-1 flex items-center justify-center overflow-hidden shadow-lg">
                            <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
                            <span className="text-[10px] text-white font-black uppercase tracking-[0.3em]">Earth - 65 x 1610</span>
                        </div>

                        {/* Polaroid Frame */}
                        <div className="bg-[#fefefe] p-2 md:p-6 pb-20 md:pb-24 shadow-[30px_30px_80px_rgba(0,0,0,0.6)] border-b-8 border-r-8 border-gray-300 relative group overflow-hidden">
                            {/* Gwen's Watercolor World Texture Overlay */}
                            <div className="absolute inset-0 pointer-events-none opacity-20 bg-gradient-to-tr from-pink-300 via-transparent to-blue-300 mix-blend-multiply" />

                            {/* Photo Area */}
                            <div className="relative aspect-square bg-[#0a0a0a] overflow-hidden border-2 border-black flex items-center justify-center group">
                                {/* Chromatic Aberration Effect */}
                                <div className="absolute inset-0 z-0 bg-gradient-to-br from-rose-500/20 via-transparent to-cyan-500/20 animate-pulse" />

                                {/* Miles' Spray Paint Spider Silhouette */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-5">
                                    <svg viewBox="0 0 100 100" className="w-full h-full scale-150 fill-white rotate-12">
                                        <path d="M50,10 L45,30 L30,25 L40,45 L20,50 L40,55 L30,75 L45,70 L50,90 L55,70 L70,75 L60,55 L80,50 L60,45 L70,25 L55,30 Z" />
                                    </svg>
                                </div>

                                {/* Miles & Gwen Rendered Image */}
                                <div className="absolute inset-0 z-10">
                                    <img
                                        src="/miles-gwen-valentine.png"
                                        alt="Miles and Gwen"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    {/* Overlay to keep it looking like a photo print */}
                                    <div className="absolute inset-0 bg-neutral-900/10 mix-blend-overlay" />
                                </div>

                                {/* Scribbles: "G" + "M" with a heart */}
                                <div className="absolute bottom-4 left-4 text-white/60 font-[family-name:var(--font-handwriting)] text-2xl md:text-3xl -rotate-12 italic z-20">
                                    gw&m
                                </div>

                                {/* Clock Tower Silhouette / Building edge */}
                                <div className="absolute bottom-0 right-0 w-24 h-24 opacity-20 pointer-events-none z-20">
                                    <svg viewBox="0 0 100 100" fill="white">
                                        <rect x="70" y="20" width="10" height="80" />
                                        <rect x="85" y="40" width="10" height="60" />
                                        <circle cx="75" cy="30" r="5" fill="none" stroke="white" />
                                    </svg>
                                </div>
                            </div>

                            {/* Caption - Hand-inked style */}
                            <div className="mt-4 md:mt-6 text-center px-1">
                                <p className="text-black font-[family-name:var(--font-handwriting)] text-2xl md:text-3xl leading-[0.8] italic -rotate-1">
                                    "I guess there's a first time <br /> for everything, right?"
                                </p>
                                <div className="mt-2 md:mt-3 flex items-center justify-center gap-2">
                                    <span className="h-[1px] w-6 md:w-8 bg-black/10" />
                                    <span className="text-[8px] md:text-[10px] uppercase font-black tracking-widest text-rose-500">A Canon Event In Love</span>
                                    <span className="h-[1px] w-6 md:w-8 bg-black/10" />
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="absolute -bottom-10 md:-bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 w-[90%] md:w-full px-2">
                            <motion.a
                                href="https://valentine-x-dropouthacks.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05, rotate: 1 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full bg-gradient-to-r from-pink-400 via-rose-500 to-pink-600 text-white font-black py-4 md:py-4 rounded-none shadow-[6px_6px_0_black] transition-all text-center uppercase tracking-[0.2em] text-xs md:text-sm border-2 border-black flex items-center justify-center gap-2"
                            >
                                <motion.div animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 2 }}>💖</motion.div>
                                Find Your Multiverse Match
                            </motion.a>
                            <button
                                onClick={handleClose}
                                className="text-white/60 hover:text-white text-[8px] md:text-[10px] uppercase font-bold tracking-[0.4em] transition-colors flex items-center gap-2 group whitespace-nowrap"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-rose-500 animate-pulse" />
                                Let's do our own thing
                            </button>
                        </div>

                        {/* Close button with chromatic ring */}
                        <button
                            onClick={handleClose}
                            className="absolute -top-12 -right-2 md:-right-12 group z-[40]"
                        >
                            <div className="absolute inset-0 bg-cyan-400 rounded-full blur group-hover:scale-150 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-pink-500 rounded-full blur group-hover:scale-150 transition-transform duration-500 delay-75" />
                            <div className="relative bg-black text-white p-2 border-2 border-white rounded-full hover:bg-rose-500 transition-colors z-10">
                                <X size={20} />
                            </div>
                        </button>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
