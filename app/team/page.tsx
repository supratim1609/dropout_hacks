"use client";

import React from "react";
import { motion } from "framer-motion";
import { ComicPanel } from "../components/ComicPanel";
import { Github, Twitter, Linkedin } from "lucide-react";

interface TeamMember {
    name: string;
    role: string;
    superheroName: string;
    image: string;
    stats: {
        strength: number;
        intelligence: number;
        speed: number;
    };
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
        superheroName: "THE ARCHITECT",
        image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=500&auto=format&fit=crop",
        stats: { strength: 85, intelligence: 98, speed: 70 },
        socials: { github: "#", twitter: "#", linkedin: "#" }
    },
    {
        name: "Alex",
        role: "Tech Lead",
        superheroName: "CODE WEAVER",
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=500&auto=format&fit=crop",
        stats: { strength: 70, intelligence: 95, speed: 90 },
        socials: { github: "#", twitter: "#" }
    },
    {
        name: "Sarah",
        role: "Design Lead",
        superheroName: "PIXEL PARADOX",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop",
        stats: { strength: 65, intelligence: 92, speed: 88 },
        socials: { linkedin: "#", twitter: "#" }
    },
    {
        name: "Mike",
        role: "Logistics",
        superheroName: "THE OPERATOR",
        image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=500&auto=format&fit=crop",
        stats: { strength: 90, intelligence: 80, speed: 85 },
        socials: { linkedin: "#" }
    }
];

export default function TeamPage() {
    return (
        <main className="min-h-screen bg-[var(--color-comic-dark)] text-white pt-24 pb-20 px-4">
            {/* Background */}
            <div className="fixed inset-0 bg-halftone opacity-30 pointer-events-none" />

            <div className="container mx-auto max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <span className="bg-[var(--color-comic-yellow)] text-black px-4 py-2 font-black text-xl border-2 border-black inline-block mb-4 rotate-[-2deg] shadow-[4px_4px_0_white]">
                        MEET THE SQUAD
                    </span>
                    <h1 className="text-6xl md:text-8xl font-black font-[family-name:var(--font-comic)] uppercase tracking-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-comic-red)] to-[var(--color-comic-purple)]" style={{ WebkitTextStroke: "2px white" }}>
                            MULTIVERSE
                        </span>
                        <br />
                        <span className="text-white text-shadow-comic">DEFENDERS</span>
                    </h1>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <ComicPanel variant={index % 2 === 0 ? "primary" : "blue"} className="h-full">
                                <div className="relative aspect-square mb-4 border-2 border-black bg-gray-800 overflow-hidden">
                                    {/* Image Filter */}
                                    <div className="absolute inset-0 bg-[var(--color-comic-blue)] mix-blend-color opacity-20 z-10" />
                                    <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-300" />
                                </div>

                                <div className="text-center space-y-2">
                                    <h3 className="text-2xl font-black font-[family-name:var(--font-comic)] text-[var(--color-comic-yellow)] uppercase tracking-wide">
                                        {member.superheroName}
                                    </h3>
                                    <p className="font-bold text-white text-lg border-b-2 border-dashed border-gray-600 pb-2 mb-2">
                                        {member.name}
                                    </p>
                                    <div className="text-xs font-mono bg-black/50 p-2 rounded text-left space-y-1 border border-gray-700">
                                        <div className="flex justify-between">
                                            <span>ROLE:</span> <span className="text-[var(--color-comic-blue)]">{member.role.toUpperCase()}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>STR:</span>
                                            <div className="w-20 h-2 bg-gray-800 mt-1"><div className="h-full bg-[var(--color-comic-red)]" style={{ width: `${member.stats.strength}%` }} /></div>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>INT:</span>
                                            <div className="w-20 h-2 bg-gray-800 mt-1"><div className="h-full bg-[var(--color-comic-blue)]" style={{ width: `${member.stats.intelligence}%` }} /></div>
                                        </div>
                                    </div>

                                    <div className="flex justify-center gap-4 pt-4">
                                        {member.socials.github && (
                                            <a href={member.socials.github} className="text-white hover:text-[var(--color-comic-yellow)] transition-colors"><Github className="w-5 h-5" /></a>
                                        )}
                                        {member.socials.twitter && (
                                            <a href={member.socials.twitter} className="text-white hover:text-[var(--color-comic-yellow)] transition-colors"><Twitter className="w-5 h-5" /></a>
                                        )}
                                        {member.socials.linkedin && (
                                            <a href={member.socials.linkedin} className="text-white hover:text-[var(--color-comic-yellow)] transition-colors"><Linkedin className="w-5 h-5" /></a>
                                        )}
                                    </div>
                                </div>
                            </ComicPanel>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
