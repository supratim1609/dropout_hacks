"use client";

import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Github, Linkedin, Twitter } from "lucide-react";

// Team Data
const TEAM_MEMBERS = [
    {
        name: "Supratim",
        role: "Lead Organizer",
        image: "https://ui-avatars.com/api/?name=Supratim&background=ef4444&color=fff",
        socials: { github: "#", linkedin: "#", twitter: "#" },
        color: "var(--color-comic-red)"
    },
    {
        name: "Arindam",
        role: "Tech Lead",
        image: "https://ui-avatars.com/api/?name=Arindam&background=0D8ABC&color=fff",
        socials: { github: "#", linkedin: "#" },
        color: "var(--color-comic-blue)"
    },
    {
        name: "Priyanshu",
        role: "Design Lead",
        image: "https://ui-avatars.com/api/?name=Priyanshu&background=9333EA&color=fff",
        socials: { linkedin: "#", twitter: "#" },
        color: "var(--color-comic-purple)"
    },
    {
        name: "Sneha",
        role: "Community Manager",
        image: "https://ui-avatars.com/api/?name=Sneha&background=F59E0B&color=fff",
        socials: { linkedin: "#" },
        color: "var(--color-comic-yellow)"
    },
    {
        name: "Rohit",
        role: "Event Coordinator",
        image: "https://ui-avatars.com/api/?name=Rohit&background=10B981&color=fff",
        socials: { github: "#", linkedin: "#" },
        color: "#10B981" // Green
    },
    {
        name: "Ananya",
        role: "Sponsorship Lead",
        image: "https://ui-avatars.com/api/?name=Ananya&background=EF4444&color=fff",
        socials: { linkedin: "#" },
        color: "#EF4444" // Red
    },
];

export default function TeamPage() {
    return (
        <main className="min-h-screen bg-neutral-950 relative overflow-x-hidden selection:bg-[var(--color-comic-yellow)] selection:text-black">
            <Navbar />

            <div className="pt-32 pb-20 container mx-auto px-4 min-h-screen flex flex-col justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <span className="bg-[var(--color-comic-yellow)] text-black px-4 py-1 font-bold text-xl border-4 border-black shadow-[4px_4px_0_white] inline-block -rotate-2 mb-4">
                        MEET THE SQUAD
                    </span>
                    <h1 className="text-5xl md:text-8xl font-black text-white font-[family-name:var(--font-comic)] uppercase tracking-tighter">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-comic-blue)] to-[var(--color-comic-purple)] drop-shadow-[4px_4px_0_var(--color-comic-dark)] pb-2 pr-4">Architects</span>
                    </h1>
                </motion.div>

                {/* GRID CONTAINER */}
                <div className="relative w-full max-w-7xl mx-auto">

                    {/* GRID: 2 cols on mobile, 4 cols on desktop */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pb-12 px-0">
                        {TEAM_MEMBERS.map((member, i) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="w-full bg-white border-2 md:border-4 border-black shadow-[4px_4px_0_var(--color-comic-blue)] md:shadow-[8px_8px_0_var(--color-comic-blue)] p-3 md:p-5 flex flex-col items-center hover:-translate-y-2 hover:shadow-[6px_6px_0_var(--color-comic-blue)] md:hover:shadow-[12px_12px_0_var(--color-comic-blue)] transition-all duration-300 group aspect-[3/4]"
                                style={{
                                    boxShadow: `4px 4px 0 ${member.color}` // Dynamic shadow color
                                }}
                            >
                                {/* Image Frame */}
                                <div className="w-full aspect-square border-2 md:border-4 border-black overflow-hidden mb-3 md:mb-6 bg-black relative">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                    />
                                    {/* Halftone Overlay */}
                                    <div className="absolute inset-0 bg-halftone opacity-20 pointer-events-none mix-blend-overlay" />
                                </div>

                                {/* Name & Role */}
                                <h3 className="text-lg md:text-2xl font-black text-black uppercase font-[family-name:var(--font-comic)] text-center leading-none mb-1 md:mb-2 truncate w-full">
                                    {member.name}
                                </h3>
                                <span className="text-[10px] md:text-xs font-black uppercase tracking-widest bg-black text-white px-2 py-1 mb-6 md:mb-6 -skew-x-12 truncate max-w-full">
                                    {member.role}
                                </span>

                                {/* Socials */}
                                <div className="flex gap-2 md:gap-4 mt-auto md:opacity-60 md:group-hover:opacity-100 transition-opacity">
                                    {member.socials.github && (
                                        <a href={member.socials.github} className="w-8 h-8 md:w-10 md:h-10 bg-black text-white rounded-full flex items-center justify-center border-2 border-transparent hover:bg-white hover:text-black hover:border-black transition-colors cursor-none">
                                            <Github size={16} className="w-4 h-4 md:w-5 md:h-5" />
                                        </a>
                                    )}
                                    {member.socials.linkedin && (
                                        <a href={member.socials.linkedin} className="w-8 h-8 md:w-10 md:h-10 bg-[#0077b5] text-white rounded-full flex items-center justify-center border-2 border-transparent hover:bg-white hover:text-[#0077b5] hover:border-[#0077b5] transition-colors cursor-none">
                                            <Linkedin size={16} className="w-4 h-4 md:w-5 md:h-5" />
                                        </a>
                                    )}
                                    {member.socials.twitter && (
                                        <a href={member.socials.twitter} className="w-8 h-8 md:w-10 md:h-10 bg-black text-white rounded-full flex items-center justify-center border-2 border-transparent hover:bg-white hover:text-black hover:border-black transition-colors cursor-none">
                                            <Twitter size={16} className="w-4 h-4 md:w-5 md:h-5" />
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
