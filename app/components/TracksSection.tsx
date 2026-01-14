"use client";

import React from "react";
import { motion } from "framer-motion";
import { ComicPanel } from "./ComicPanel";
import { Brain, Cloud, Code, Globe, Shield, Zap } from "lucide-react";
import { FloatingParticles } from "./FloatingParticles";

const tracks = [
    {
        id: 1,
        title: "AI Universe",
        icon: <Brain className="w-10 h-10" />,
        description: "Generative AI, LLMs, and Neural Networks. Build the Jarvis of the multiverse.",
        variant: "primary",
    },
    {
        id: 2,
        title: "Web3 Dimension",
        icon: <Shield className="w-10 h-10" />,
        description: "Decentralized apps, Smart Contracts, and Crypto. Secure the timeline.",
        variant: "purple",
    },
    {
        id: 3,
        title: "Cloud Realm",
        icon: <Cloud className="w-10 h-10" />,
        description: "Scalable infrastructure, Serverless, and DevOps. Power the grid.",
        variant: "blue",
    },
    {
        id: 4,
        title: "FinTechverse",
        icon: <Globe className="w-10 h-10" />,
        description: "Next-gen payments, Banking, and Finance. Money makes the multiverse go round.",
        variant: "yellow",
    },
    {
        id: 5,
        title: "Open Innovation",
        icon: <Zap className="w-10 h-10" />,
        description: "Anything goes. If it's cool, it belongs here. Surprise us.",
        variant: "default",
    },
    {
        id: 6,
        title: "Cyber Security",
        icon: <Code className="w-10 h-10" />,
        description: "CTFs, Ethical Hacking, and Defense. Protect the sacred timeline.",
        variant: "primary",
    },
];

const DynamicBorderText = ({ text, variant }: { text: string; variant: string }) => {
    // Map variant to hex colors for the glow/border
    const colors: Record<string, string> = {
        primary: "#ff0000", // Red
        purple: "#a855f7",
        blue: "#3b82f6",
        yellow: "#eab308",
        default: "#ffffff",
    };

    const shadowColor = colors[variant] || colors.default;

    return (
        <div className="flex flex-wrap gap-[1px] mb-2 pointer-events-none">
            {text.split("").map((char, i) => {
                if (char === " ") return <span key={i} className="w-2" />;

                return (
                    <motion.span
                        key={i}
                        className="font-black font-[family-name:var(--font-comic)] text-3xl md:text-4xl uppercase select-none relative z-10"
                        style={{
                            WebkitTextStroke: "1px black",
                            color: "white",
                            textShadow: `3px 3px 0px ${shadowColor}`,
                        }}
                        animate={{
                            y: [0, -3, 0]
                        }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.1, // Smooth wave
                        }}
                    >
                        {char}
                    </motion.span>
                );
            })}
        </div>
    );
};

export const TracksSection = () => {
    return (
        <section id="tracks" className="py-20 px-4 relative bg-[var(--color-comic-dark)] overflow-hidden">
            <FloatingParticles />
            {/* Section Header */}
            <div className="container mx-auto mb-16 text-center">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="text-5xl md:text-7xl font-black font-[family-name:var(--font-comic)] text-white mb-4 uppercase"
                    style={{ textShadow: "4px 4px 0px var(--color-comic-purple)" }}
                >
                    Choose Your Universe
                </motion.h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto font-[family-name:var(--font-body)]">
                    Six dimensions. Infinite possibilities. Pick a track and dominate.
                </p>
            </div>

            {/* Grid */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tracks.map((track, index) => (
                    <motion.div
                        key={track.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <ComicPanel
                            variant={track.variant as any}
                            hoverEffect={true}
                            className="h-full flex flex-col items-start gap-4"
                        >
                            <div className={`p-3 rounded-none border-2 border-black shadow-[4px_4px_0px_0px_black] bg-white text-black`}>
                                {track.icon}
                            </div>

                            {/* Dynamic Text Component */}
                            <DynamicBorderText text={track.title} variant={track.variant} />

                            <p className="text-gray-300 font-[family-name:var(--font-body)]">
                                {track.description}
                            </p>
                        </ComicPanel>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
