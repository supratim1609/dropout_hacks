"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

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
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
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
                        className="relative bg-[#f0e6d2] text-black w-[95%] md:w-full max-w-lg shadow-[0_0_50px_rgba(0,0,0,0.5)] p-1 md:p-4 rotate-1 my-8"
                        style={{
                            backgroundImage: "radial-gradient(#b0a692 1px, transparent 1px)",
                            backgroundSize: "20px 20px"
                        }}
                    >
                        {/* Paper borders effect */}
                        <div className="border-4 border-black h-full p-3 md:p-6 relative bg-[#f0e6d2]">

                            {/* Close Button - Responsive Position */}
                            <button
                                onClick={handleClose}
                                className="absolute -top-3 -right-3 md:-top-6 md:-right-6 bg-red-600 text-white p-1.5 md:p-2 border-2 border-black shadow-[2px_2px_0_black] md:shadow-[4px_4px_0_black] hover:scale-110 transition-transform z-20"
                            >
                                <X size={20} strokeWidth={3} className="md:w-6 md:h-6" />
                            </button>

                            {/* Header */}
                            <div className="border-b-4 border-black pb-2 mb-4 text-center">
                                <div className="flex justify-between items-center text-[8px] md:text-[10px] font-bold uppercase border-b border-black mb-1 pb-1">
                                    <span>Vol. 1</span>
                                    <span>Kolkata Edition</span>
                                    <span>Price: $0.00</span>
                                </div>
                                <h1 className="font-black text-4xl md:text-7xl uppercase tracking-tighter leading-none font-serif py-1">
                                    THE DAILY BUGLE
                                </h1>
                                <div className="text-[8px] md:text-[10px] font-bold uppercase border-t border-black mt-1 pt-1 tracking-[0.2em]">
                                    Kolkata's Finest News Source
                                </div>
                            </div>

                            {/* Headline */}
                            <div className="text-center mb-4 md:mb-6">
                                <h2 className="text-3xl md:text-5xl font-black uppercase leading-[0.9] font-sans mb-2">
                                    HACKATHON DATES <br />
                                    <span className="text-red-600 italic">REVEALED!</span>
                                </h2>
                                <p className="font-serif italic text-xs md:text-sm text-gray-700">
                                    "It's going to be chaos!" - J. Jonah Jameson
                                </p>
                            </div>

                            {/* Content Grid */}
                            <div className="flex flex-col md:flex-row gap-4 items-center">
                                {/* Photo */}
                                <div className="w-full md:w-1/2 aspect-video bg-neutral-800 border-2 border-black relative overflow-hidden group shadow-[4px_4px_0_rgba(0,0,0,0.2)]">
                                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                                    {/* Placeholder for "Event" visual - could be abstract or logo */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-white font-black text-3xl md:text-4xl -rotate-12 group-hover:scale-110 transition-transform duration-300 text-center leading-none">
                                            MAR' <br /> 28-29
                                        </span>
                                    </div>
                                    <div className="absolute bottom-0 right-0 bg-white px-2 py-0.5 text-[6px] md:text-[8px] font-bold border-t border-l border-black">
                                        FIG A. THE DATE
                                    </div>
                                </div>

                                {/* Article Text */}
                                <div className="w-full md:w-1/2 font-serif text-sm leading-tight text-justify">
                                    <p className="first-letter:text-3xl md:first-letter:text-4xl first-letter:font-black first-letter:float-left first-letter:mr-1">
                                        Breaking news from the multiverse! The Dropout Hacks team has officially confirmed the timeline for the anomaly.
                                    </p>
                                    <p className="mt-2 font-bold text-lg text-center border-y-2 border-black py-2 my-2">
                                        MARCH 28-29, 2026
                                    </p>
                                    <p className="hidden md:block">
                                        Sources say hundreds of hackers will converge to build projects that defy reality.
                                        <span className="font-bold"> Clear your calendars.</span>
                                    </p>
                                    <p className="md:hidden text-center font-bold text-red-600 mt-1">
                                        CLEAR YOUR CALENDARS.
                                    </p>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="mt-4 md:mt-6 pt-2 border-t-2 border-black text-center">
                                <button
                                    onClick={handleClose}
                                    className="bg-black text-white font-bold uppercase px-6 py-3 text-sm md:text-base hover:bg-red-600 transition-colors w-full shadow-[2px_2px_0_rgba(0,0,0,0.3)] active:translate-y-[2px] active:shadow-none"
                                >
                                    I'M READY (CLOSE)
                                </button>
                            </div>

                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
