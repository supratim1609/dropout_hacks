"use client";

import React from "react";
import { motion } from "framer-motion";
import { ComicPanel } from "../components/ComicPanel";
import { Brain, Cloud, Code, Globe, Shield, Zap } from "lucide-react";

const tracks = [
    {
        id: 1,
        title: "AI Universe",
        icon: <Brain className="w-8 h-8 md:w-10 md:h-10" />,
        description: "Generative AI, LLMs, and Neural Networks. Build the Jarvis of the multiverse.",
        variant: "primary",
        problemStatements: [
            "Build an AI agent that can verify deepfakes in real-time.",
            "Develop a personalized learning assistant that adapts to a student's pace.",
            "Create a generative AI tool for comic book creation."
        ]
    },
    {
        id: 2,
        title: "Web3 Dimension",
        icon: <Shield className="w-8 h-8 md:w-10 md:h-10" />,
        description: "Decentralized apps, Smart Contracts, and Crypto. Secure the timeline.",
        variant: "purple",
        problemStatements: [
            "Create a decentralized identity verification system.",
            "Build a transparent, blockchain-based supply chain tracker.",
            "Develop a DAO-managed community fund platform."
        ]
    },
    {
        id: 3,
        title: "Cloud Realm",
        icon: <Cloud className="w-8 h-8 md:w-10 md:h-10" />,
        description: "Scalable infrastructure, Serverless, and DevOps. Power the grid.",
        variant: "blue",
        problemStatements: [
            "Build an auto-scaling serverless architecture for a high-traffic e-commerce site.",
            "Create a multi-cloud resource cost optimizer dashboard.",
            "Develop a tool for automated infrastructure-as-code deployment."
        ]
    },
    {
        id: 4,
        title: "FinTechverse",
        icon: <Globe className="w-8 h-8 md:w-10 md:h-10" />,
        description: "Next-gen payments, Banking, and Finance. Money makes the multiverse go round.",
        variant: "yellow",
        problemStatements: [
            "Develop a micro-investing app for students.",
            "Create a cross-border payment gateway with minimal fees.",
            "Build an AI-powered personal finance advisor."
        ]
    },
    {
        id: 5,
        title: "Open Innovation",
        icon: <Zap className="w-8 h-8 md:w-10 md:h-10" />,
        description: "Anything goes. If it's cool, it belongs here. Surprise us.",
        variant: "default",
        problemStatements: [
            "Solve a local community problem using technology.",
            "Build a unique game with an innovative mechanic.",
            "Create an accessibility tool for individuals with disabilities."
        ]
    },
    {
        id: 6,
        title: "Cyber Security",
        icon: <Code className="w-8 h-8 md:w-10 md:h-10" />,
        description: "CTFs, Ethical Hacking, and Defense. Protect the sacred timeline.",
        variant: "primary",
        problemStatements: [
            "Develop an automated phishing detection tool.",
            "Build a secure file-sharing system with end-to-end encryption.",
            "Create a real-time network anomaly detection dashboard."
        ]
    },
];

const DynamicBorderText = ({ text, variant }: { text: string; variant: string }) => {
    const colors: Record<string, string> = {
        primary: "#ff0000",
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
                        className="font-black font-[family-name:var(--font-comic)] text-2xl md:text-3xl uppercase select-none relative z-10"
                        style={{
                            WebkitTextStroke: "1px black",
                            color: "white",
                            textShadow: `2px 2px 0px ${shadowColor}`,
                        }}
                        animate={{
                            y: [0, -2, 0]
                        }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.1,
                        }}
                    >
                        {char}
                    </motion.span>
                );
            })}
        </div>
    );
};

export default function TracksPage() {
    return (
        <main className="min-h-screen pt-24 pb-20 px-4 relative bg-[var(--color-comic-dark)] overflow-hidden text-white">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-halftone opacity-10 pointer-events-none" />

            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-[family-name:var(--font-comic)] uppercase mb-4 break-words" style={{ textShadow: "4px 4px 0px var(--color-comic-purple)" }}>
                        Choose Your Universe
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-[family-name:var(--font-body)] px-4">
                        Pick a track, review the primary directives (problem statements), and start building to save the multiverse!
                    </p>
                </motion.div>

                {/* Tracks Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {tracks.map((track, index) => (
                        <motion.div
                            key={track.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <ComicPanel
                                variant={track.variant as any}
                                className="h-full flex flex-col items-start gap-4 p-6 md:p-8"
                            >
                                {/* Track Header */}
                                <div className="flex items-center gap-4 w-full">
                                    <div className={`p-3 md:p-4 border-2 border-black shadow-[4px_4px_0px_0px_black] bg-white text-black shrink-0`}>
                                        {track.icon}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <DynamicBorderText text={track.title} variant={track.variant} />
                                    </div>
                                </div>

                                <p className="text-gray-300 font-[family-name:var(--font-body)] text-sm md:text-base border-b-2 border-dashed border-gray-600 pb-4 w-full">
                                    {track.description}
                                </p>

                                {/* Problem Statements Box */}
                                <div className="w-full mt-4 bg-black/40 border-2 border-black p-4 md:p-5 pt-8 md:pt-9 relative group overflow-hidden">
                                    <div className="absolute top-1 left-4 bg-[var(--color-comic-yellow)] text-black font-black uppercase text-xs px-2 py-0.5 border-2 border-black transform -rotate-2 group-hover:rotate-0 transition-transform z-20">
                                        Problem Statements
                                    </div>
                                    {/* Blurred content */}
                                    <ul className="space-y-3 mt-2 blur-[6px] select-none pointer-events-none">
                                        {track.problemStatements.map((statement, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm md:text-base font-bold font-[family-name:var(--font-body)] text-gray-200">
                                                <span className="text-[var(--color-comic-red)] shrink-0 mt-0.5">►</span>
                                                <span>{statement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    {/* Classified overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center z-10">
                                        <div className="bg-[var(--color-comic-red)] text-white font-black font-[family-name:var(--font-comic)] text-xl md:text-2xl uppercase px-6 py-2 border-4 border-black shadow-[4px_4px_0_black] rotate-[-3deg] tracking-widest">
                                            🔒 CLASSIFIED
                                        </div>
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
