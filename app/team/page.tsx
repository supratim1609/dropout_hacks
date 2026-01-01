"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ComicPanel } from "../components/ComicPanel";
import { Github, Twitter, Linkedin, ArrowRight, ArrowLeft } from "lucide-react";

interface TeamMember {
    name: string;
    role: string;
    team: string; // New field
    image: string;
    socials: {
        github?: string;
        twitter?: string;
        linkedin?: string;
    };
}

const teamMembers: TeamMember[] = [
    {
        name: "Supratim",
        role: "Lead Organizer",
        team: "Core Team",
        image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=500&auto=format&fit=crop",
        socials: { github: "#", twitter: "#", linkedin: "#" }
    },
    {
        name: "Alex",
        role: "Tech Lead",
        team: "Tech Team",
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=500&auto=format&fit=crop",
        socials: { github: "#", twitter: "#" }
    },
    {
        name: "Sarah",
        role: "Design Lead",
        team: "Design Team",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop",
        socials: { linkedin: "#", twitter: "#" }
    },
    {
        name: "Mike",
        role: "Logistics",
        team: "Ops Team",
        image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=500&auto=format&fit=crop",
        socials: { linkedin: "#" }
    }
];

export default function TeamPage() {
    const [activeIndex, setActiveIndex] = useState(0);

    // Auto-scroll effect
    useEffect(() => {
        const interval = setInterval(() => {
            nextMember();
        }, 10000); // 10 seconds

        return () => clearInterval(interval);
    }, [activeIndex]);

    const nextMember = () => {
        setActiveIndex((prev) => (prev + 1) % teamMembers.length);
    };

    const prevMember = () => {
        setActiveIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
    };

    const getMember = (offset: number) => {
        const index = (activeIndex + offset + teamMembers.length) % teamMembers.length;
        return teamMembers[index];
    };

    return (
        <main className="min-h-screen bg-[var(--color-comic-dark)] text-white pt-20 lg:pt-24 pb-10 px-4 overflow-hidden flex flex-col items-center justify-center">
            {/* Background Pattern */}
            <div className="fixed inset-0 bg-halftone opacity-30 pointer-events-none" />

            {/* Floating Decor */}
            <div className="fixed top-1/4 left-10 w-32 h-32 bg-[var(--color-comic-blue)] rounded-full blur-[80px] opacity-40 animate-pulse pointer-events-none" />
            <div className="fixed bottom-1/4 right-10 w-40 h-40 bg-[var(--color-comic-red)] rounded-full blur-[100px] opacity-40 animate-pulse delay-700 pointer-events-none" />


            <div className="container mx-auto max-w-7xl relative z-10 w-full flex flex-col items-center">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-6 lg:mb-8"
                >
                    <span className="bg-[var(--color-comic-yellow)] text-black px-4 lg:px-6 py-2 font-black text-lg lg:text-2xl border-4 border-black inline-block mb-4 rotate-[-2deg] shadow-[4px_4px_0_white] lg:shadow-[6px_6px_0_white]">
                        MEET THE SQUAD
                    </span>
                </motion.div>

                {/* Carousel Container */}
                <div className="relative w-full flex items-center justify-center min-h-[450px] lg:min-h-[500px]">

                    {/* PREV BUTTON - Mobile Optimized */}
                    <button onClick={prevMember} className="absolute left-0 lg:left-12 z-30 group p-2">
                        <div className="bg-black/50 lg:bg-black text-white p-2 lg:p-4 border-2 border-white rounded-full shadow-[2px_2px_0_var(--color-comic-blue)] lg:shadow-[4px_4px_0_var(--color-comic-blue)] hover:scale-110 transition-transform backdrop-blur-sm">
                            <ArrowLeft className="w-6 h-6 lg:w-8 lg:h-8" />
                        </div>
                    </button>

                    {/* NEXT BUTTON - Mobile Optimized */}
                    <button onClick={nextMember} className="absolute right-0 lg:right-12 z-30 group p-2">
                        <div className="bg-black/50 lg:bg-black text-white p-2 lg:p-4 border-2 border-white rounded-full shadow-[2px_2px_0_var(--color-comic-red)] lg:shadow-[4px_4px_0_var(--color-comic-red)] hover:scale-110 transition-transform backdrop-blur-sm">
                            <ArrowRight className="w-6 h-6 lg:w-8 lg:h-8" />
                        </div>
                    </button>

                    {/* CAROUSEL ITEMS */}
                    <div className="flex items-center justify-center gap-4 lg:gap-12 w-full perspective-1000">

                        {/* PREVIOUS MEMBER (Left, Smaller, Dimmed) */}
                        <motion.div
                            className="hidden lg:block w-[280px] opacity-50 blur-[2px] scale-90 cursor-pointer"
                            onClick={prevMember}
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 0.5 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="border-4 border-gray-600 bg-gray-900 aspect-[3/4] relative overflow-hidden grayscale">
                                <img src={getMember(-1).image} className="w-full h-full object-cover" />
                                <div className="absolute bottom-0 w-full bg-black/80 p-2 text-center border-t-2 border-gray-600">
                                    <h3 className="text-xl font-black font-[family-name:var(--font-comic)] text-gray-400">{getMember(-1).name}</h3>
                                </div>
                            </div>
                        </motion.div>

                        {/* ACTIVE MEMBER (Center, Huge) */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.8, y: -50 }}
                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                className="w-[90%] sm:w-[80%] md:w-[380px] relative z-20"
                            >
                                <ComicPanel variant="primary" className="h-full transform transition-transform duration-300">
                                    {/* ACTIVE IMAGE - Less Margin */}
                                    <div className="relative aspect-square mb-4 border-4 border-black bg-gray-800 overflow-hidden shadow-[6px_6px_0_black]">
                                        <div className="absolute inset-0 bg-[var(--color-comic-red)] mix-blend-overlay opacity-10 z-10" />
                                        <img src={getMember(0).image} alt={getMember(0).name} className="w-full h-full object-cover contrast-110" />
                                    </div>

                                    {/* ACTIVE DETAILS - Simplified & Compact */}
                                    <div className="text-center space-y-3 px-2 lg:px-4 pb-4">
                                        <div>
                                            <motion.h1
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                className="text-4xl lg:text-6xl font-black font-[family-name:var(--font-comic)] text-[var(--color-comic-yellow)] uppercase tracking-wide leading-[0.9] mb-2 drop-shadow-[2px_2px_0_black] lg:drop-shadow-[4px_4px_0_black]"
                                            >
                                                {getMember(0).name}
                                            </motion.h1>

                                            <div className="space-y-1">
                                                <p className="text-base lg:text-lg text-white font-bold uppercase tracking-widest">
                                                    {getMember(0).role}
                                                </p>

                                                <div className="inline-block bg-[var(--color-comic-blue)] text-black px-3 lg:px-4 py-1 skew-x-[-12deg] border border-black shadow-[3px_3px_0_black]">
                                                    <p className="font-black text-xs lg:text-sm tracking-wider uppercase skew-x-[12deg]">
                                                        {getMember(0).team}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex justify-center gap-6 pt-4 border-t border-dashed border-white/20 mt-2">
                                            {getMember(0).socials.github && (
                                                <a href={getMember(0).socials.github} className="text-gray-400 hover:text-white hover:scale-125 transition-all"><Github className="w-5 h-5 lg:w-6 lg:h-6" /></a>
                                            )}
                                            {getMember(0).socials.twitter && (
                                                <a href={getMember(0).socials.twitter} className="text-gray-400 hover:text-[#1DA1F2] hover:scale-125 transition-all"><Twitter className="w-5 h-5 lg:w-6 lg:h-6" /></a>
                                            )}
                                            {getMember(0).socials.linkedin && (
                                                <a href={getMember(0).socials.linkedin} className="text-gray-400 hover:text-[#0A66C2] hover:scale-125 transition-all"><Linkedin className="w-5 h-5 lg:w-6 lg:h-6" /></a>
                                            )}
                                        </div>
                                    </div>
                                </ComicPanel>
                            </motion.div>
                        </AnimatePresence>

                        {/* NEXT MEMBER (Right, Smaller, Dimmed) */}
                        <motion.div
                            className="hidden lg:block w-[280px] opacity-50 blur-[2px] scale-90 cursor-pointer"
                            onClick={nextMember}
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 0.5 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="border-4 border-gray-600 bg-gray-900 aspect-[3/4] relative overflow-hidden grayscale">
                                <img src={getMember(1).image} className="w-full h-full object-cover" />
                                <div className="absolute bottom-0 w-full bg-black/80 p-2 text-center border-t-2 border-gray-600">
                                    <h3 className="text-xl font-black font-[family-name:var(--font-comic)] text-gray-400">{getMember(1).name}</h3>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>

            </div>
        </main>
    );
}
