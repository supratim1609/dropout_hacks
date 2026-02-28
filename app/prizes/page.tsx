"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Gift, Award, Target, Coins, ShieldCheck, Zap } from "lucide-react";
import { ComicPanel } from "../components/ComicPanel";

const generalPrizes = [
    { title: "Grand Champion", amount: "₹50,000", icon: <Trophy />, color: "text-yellow-400 border-yellow-400", bg: "bg-yellow-400" },
    { title: "First Runner-up", amount: "₹30,000", icon: <Award />, color: "text-gray-300 border-gray-300", bg: "bg-gray-300" },
    { title: "Second Runner-up", amount: "₹20,000", icon: <Gift />, color: "text-orange-500 border-orange-500", bg: "bg-orange-500" },
];

const trackBounties = [
    { track: "Web3 Dimension", sponsor: "Polygon", amount: "$200", icon: <ShieldCheck />, variant: "purple" },
    { track: "Cloud Realm", sponsor: "AWS/Azure", amount: "$150", icon: <Target />, variant: "blue" },
    { track: "AI Universe", sponsor: "Anthropic/OpenAI", amount: "$250", icon: <Zap />, variant: "primary" },
    { track: "Open Innovation", sponsor: "Devfolio", amount: "Swag Kits", icon: <Coins />, variant: "default" },
];

export default function PrizesPage() {
    return (
        <main className="min-h-screen pt-24 pb-20 px-4 md:px-8 bg-black text-white overflow-hidden relative selection:bg-[var(--color-comic-red)]">
            {/* Background Map Overlay */}
            <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2629&auto=format&fit=crop')] bg-cover bg-center pointer-events-none mix-blend-overlay" />

            {/* Dots Pattern */}
            <div className="absolute inset-0 z-0 bg-halftone opacity-20 pointer-events-none" />

            <div className="container mx-auto relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <div className="inline-block relative">
                        <h1 className="text-6xl md:text-8xl font-black font-[family-name:var(--font-comic)] uppercase tracking-tighter text-white drop-shadow-[5px_5px_0_var(--color-comic-red)]">
                            THE LOOT
                        </h1>
                        <motion.div
                            animate={{ rotate: [0, -2, 2, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="absolute -top-6 -right-12 bg-[var(--color-comic-yellow)] text-black font-black uppercase text-sm md:text-xl px-4 py-1 border-4 border-black shadow-[4px_4px_0_black] transform rotate-12"
                        >
                            ₹1,00,000+ IN PRIZES
                        </motion.div>
                    </div>
                </motion.div>

                {/* --- GENERAL PRIZES --- */}
                <div className="mb-24">
                    <h2 className="text-4xl md:text-5xl font-black font-[family-name:var(--font-comic)] text-[var(--color-comic-blue)] uppercase mb-10 text-center border-b-4 border-dashed border-[var(--color-comic-blue)] pb-4 inline-block mx-auto flex justify-center">
                        MAIN BOUNTIES
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
                        {/* 2nd Place */}
                        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="order-2 md:order-1">
                            <ComicPanel variant="default" className="text-center p-8 bg-zinc-900 border-gray-400">
                                <div className={`w-20 h-20 mx-auto rounded-full border-4 flex items-center justify-center mb-6 text-gray-300 border-gray-300 shadow-[0_0_20px_rgba(209,213,219,0.5)] bg-black`}>
                                    <Award className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-black font-[family-name:var(--font-body)] uppercase mb-2">1st Runner Up</h3>
                                <p className="text-5xl font-black font-[family-name:var(--font-comic)] text-gray-300 drop-shadow-[2px_2px_0_black]">₹30,000</p>
                            </ComicPanel>
                        </motion.div>

                        {/* 1st Place (Center, Taller) */}
                        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="order-1 md:order-2 z-10 md:-mt-12">
                            <ComicPanel variant="yellow" className="text-center p-10 border-[6px]">
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--color-comic-red)] text-white text-xs font-black px-4 py-1 uppercase tracking-widest border-2 border-black">
                                    TOP TIER
                                </div>
                                <div className={`w-28 h-28 mx-auto rounded-full border-4 flex items-center justify-center mb-6 text-yellow-400 border-yellow-400 shadow-[0_0_30px_rgba(250,204,21,0.6)] bg-black`}>
                                    <Trophy className="w-14 h-14" />
                                </div>
                                <h3 className="text-3xl font-black font-[family-name:var(--font-body)] uppercase mb-2 text-black">Grand Champion</h3>
                                <p className="text-7xl font-black font-[family-name:var(--font-comic)] text-black drop-shadow-[3px_3px_0_white]">₹50,000</p>
                            </ComicPanel>
                        </motion.div>

                        {/* 3rd Place */}
                        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="order-3">
                            <ComicPanel variant="default" className="text-center p-8 bg-zinc-900 border-orange-500">
                                <div className={`w-20 h-20 mx-auto rounded-full border-4 flex items-center justify-center mb-6 text-orange-500 border-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.5)] bg-black`}>
                                    <Gift className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-black font-[family-name:var(--font-body)] uppercase mb-2">2nd Runner Up</h3>
                                <p className="text-5xl font-black font-[family-name:var(--font-comic)] text-orange-500 drop-shadow-[2px_2px_0_black]">₹20,000</p>
                            </ComicPanel>
                        </motion.div>
                    </div>
                </div>

                {/* --- TRACK BOUNTIES --- */}
                <div>
                    <h2 className="text-4xl md:text-5xl font-black font-[family-name:var(--font-comic)] text-[var(--color-comic-red)] uppercase mb-10 text-center border-b-4 border-dashed border-[var(--color-comic-red)] pb-4 inline-block mx-auto flex justify-center">
                        TRACK BOUNTIES
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {trackBounties.map((bounty, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <ComicPanel variant={bounty.variant as any} className="flex flex-col h-full bg-zinc-900/80 backdrop-blur-sm p-6 relative group overflow-hidden">
                                    {/* Hover Background Glitch Effect */}
                                    <div className="absolute inset-0 bg-[var(--color-comic-yellow)] opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none mix-blend-overlay" />

                                    <div className="flex justify-between items-start mb-6 z-10">
                                        <div className="p-3 bg-black border-2 border-white text-white rounded-lg shadow-[4px_4px_0_white]">
                                            {bounty.icon}
                                        </div>
                                    </div>

                                    <div className="mt-auto z-10">
                                        <p className="text-xs text-gray-400 font-mono uppercase mb-1">Sponsored by {bounty.sponsor}</p>
                                        <h4 className="text-xl font-black font-[family-name:var(--font-body)] uppercase">{bounty.track}</h4>
                                        <p className="text-4xl font-black font-[family-name:var(--font-comic)] mt-2">{bounty.amount}</p>
                                    </div>
                                </ComicPanel>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Call to action */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-20 text-center"
                >
                    <a href="/" className="inline-block bg-[var(--color-comic-red)] text-white text-2xl font-black font-[family-name:var(--font-comic)] uppercase px-8 py-4 border-4 border-white shadow-[6px_6px_0_rgba(255,255,255,0.7)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_rgba(255,255,255,0.7)] transition-all">
                        RETURN TO BASE
                    </a>
                </motion.div>

            </div>
        </main>
    );
}
