"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, Cloud, Code, Globe, Shield, Zap } from "lucide-react";

const tracks = [
    {
        id: 1,
        title: "AI Universe",
        icon: <Brain className="w-8 h-8 md:w-10 md:h-10" />,
        description: "Generative AI, LLMs, and Neural Networks. Build the Jarvis of the multiverse.",
        color: "#FF0033",
        borderColor: "border-[var(--color-comic-red)]",
        shadow: "var(--color-comic-red)",
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
        color: "#D000FF",
        borderColor: "border-[var(--color-comic-purple)]",
        shadow: "var(--color-comic-purple)",
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
        color: "#00D2FF",
        borderColor: "border-[var(--color-comic-blue)]",
        shadow: "var(--color-comic-blue)",
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
        color: "#FFE600",
        borderColor: "border-black",
        shadow: "black",
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
        color: "#FF0033",
        borderColor: "border-[var(--color-comic-red)]",
        shadow: "var(--color-comic-red)",
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
        color: "#D000FF",
        borderColor: "border-[var(--color-comic-purple)]",
        shadow: "var(--color-comic-purple)",
        problemStatements: [
            "Develop an automated phishing detection tool.",
            "Build a secure file-sharing system with end-to-end encryption.",
            "Create a real-time network anomaly detection dashboard."
        ]
    },
];

export default function TracksPage() {
    return (
        <main className="min-h-screen pt-24 pb-20 px-4 relative bg-[var(--color-comic-yellow)] overflow-hidden text-black">
            {/* Background Dots Pattern */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
                backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
                backgroundSize: "20px 20px"
            }} />

            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-[family-name:var(--font-comic)] uppercase mb-4 break-words text-black" style={{ textShadow: "4px 4px 0px var(--color-comic-red)" }}>
                        Choose Your Universe
                    </h1>
                    <p className="text-lg md:text-xl text-black/60 max-w-2xl mx-auto font-[family-name:var(--font-body)] px-4 font-bold">
                        Pick a track, review the primary directives (problem statements), and start building to save the multiverse!
                    </p>
                </motion.div>

                {/* Tracks Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                    {tracks.map((track, index) => (
                        <motion.div
                            key={track.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <div
                                className="bg-white border-4 border-black p-6 md:p-8 relative hover:translate-x-1 hover:translate-y-1 transition-all h-full flex flex-col"
                                style={{ boxShadow: `8px 8px 0 ${track.shadow}` }}
                            >
                                {/* Halftone overlay */}
                                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#000 1.5px, transparent 1.5px)", backgroundSize: "8px 8px" }} />

                                {/* Colored top accent */}
                                <div className="absolute top-0 left-0 right-0 h-2" style={{ backgroundColor: track.color }} />

                                {/* Track Number Badge */}
                                <div
                                    className="absolute -top-5 -right-5 w-12 h-12 flex items-center justify-center font-black text-white text-lg border-4 border-black rotate-[6deg]"
                                    style={{ backgroundColor: track.color }}
                                >
                                    #{track.id}
                                </div>

                                {/* Track Header */}
                                <div className="flex items-center gap-4 w-full mb-4 mt-2">
                                    <div
                                        className="p-3 md:p-4 border-3 border-black text-white shrink-0 group-hover:scale-110 transition-transform"
                                        style={{ backgroundColor: track.color }}
                                    >
                                        {track.icon}
                                    </div>
                                    <h2 className="font-black font-[family-name:var(--font-comic)] text-2xl md:text-3xl uppercase tracking-tight text-black" style={{ textShadow: `2px 2px 0px ${track.color}40` }}>
                                        {track.title}
                                    </h2>
                                </div>

                                <p className="text-black/70 font-[family-name:var(--font-body)] text-sm md:text-base font-bold border-b-3 border-dashed border-black/15 pb-4 w-full">
                                    {track.description}
                                </p>

                                {/* Problem Statements Box */}
                                <div className="w-full mt-4 bg-gray-50 border-3 border-black p-4 md:p-5 pt-8 md:pt-9 relative group/ps overflow-hidden flex-1">
                                    <div
                                        className="absolute top-1 left-4 text-white font-black uppercase text-xs px-2 py-0.5 border-2 border-black transform -rotate-2 z-20"
                                        style={{ backgroundColor: track.color }}
                                    >
                                        Problem Statements
                                    </div>
                                    {/* Blurred content */}
                                    <ul className="space-y-3 mt-2 blur-[6px] select-none pointer-events-none">
                                        {track.problemStatements.map((statement, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm md:text-base font-bold font-[family-name:var(--font-body)] text-black/70">
                                                <span className="shrink-0 mt-0.5" style={{ color: track.color }}>►</span>
                                                <span>{statement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    {/* Classified overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center z-10">
                                        <div
                                            className="text-white font-black font-[family-name:var(--font-comic)] text-xl md:text-2xl uppercase px-6 py-2 border-4 border-black shadow-[4px_4px_0_black] rotate-[-3deg] tracking-widest"
                                            style={{ backgroundColor: track.color }}
                                        >
                                            🔒 CLASSIFIED
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom corner accent */}
                                <div className="absolute bottom-0 right-0 w-10 h-10 border-t-4 border-l-4 border-black opacity-10" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Back button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-16 text-center"
                >
                    <a href="/" className="inline-block bg-black text-[var(--color-comic-yellow)] text-2xl font-black font-[family-name:var(--font-comic)] uppercase px-10 py-5 border-4 border-black shadow-[8px_8px_0_var(--color-comic-red)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0_var(--color-comic-red)] transition-all">
                        ← RETURN TO BASE
                    </a>
                </motion.div>
            </div>
        </main>
    );
}
