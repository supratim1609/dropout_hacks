"use client";

import React from "react";
import { motion } from "framer-motion";
import { ComicPanel } from "./ComicPanel";
import { Brain, Cloud, Code, Globe, Shield, Zap } from "lucide-react";

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

export const TracksSection = () => {
    return (
        <section className="py-20 px-4 relative bg-[var(--color-comic-dark)]">
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
                            <h3 className="text-3xl font-bold font-[family-name:var(--font-comic)] uppercase">
                                {track.title}
                            </h3>
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
