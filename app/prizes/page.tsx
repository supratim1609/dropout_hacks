"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Gift, Award, Target, Coins, ShieldCheck, Zap, Crown, Sparkles } from "lucide-react";

const trackBounties = [
    { track: "Web3 Dimension", sponsor: "Polygon", amount: "₹15,000", icon: <ShieldCheck />, color: "var(--color-comic-purple)", bg: "#D000FF" },
    { track: "Cloud Realm", sponsor: "AWS/Azure", amount: "₹12,000", icon: <Target />, color: "var(--color-comic-blue)", bg: "#00D2FF" },
    { track: "AI Universe", sponsor: "Anthropic/OpenAI", amount: "₹20,000", icon: <Zap />, color: "var(--color-comic-red)", bg: "#FF0033" },
    { track: "Open Innovation", sponsor: "Devfolio", amount: "Swag Kits", icon: <Coins />, color: "white", bg: "#FFE600" },
];

// Comic starburst SVG component
const Starburst = ({ className, color = "var(--color-comic-red)" }: { className?: string; color?: string }) => (
    <svg className={className} viewBox="0 0 200 200" fill={color} xmlns="http://www.w3.org/2000/svg">
        <polygon points="100,10 120,80 190,80 135,120 155,190 100,150 45,190 65,120 10,80 80,80" />
    </svg>
);

// Sparkle particle for the reveal
const RevealSparkle = ({ delay, x, y }: { delay: number; x: number; y: number }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: [0, 1, 1, 0], scale: [0, 1.5, 1, 0], x: x, y: y }}
        transition={{ duration: 1.2, delay, ease: "easeOut" }}
        className="absolute text-2xl md:text-4xl"
        style={{ left: "50%", top: "50%" }}
    >
        ✨
    </motion.div>
);

export default function PrizesPage() {
    const [revealed, setRevealed] = useState(false);
    const [phase, setPhase] = useState<"box" | "opening" | "done">("box");

    useEffect(() => {
        // Phase 1: Show box for 1s
        const t1 = setTimeout(() => setPhase("opening"), 1200);
        // Phase 2: Open lid for 1.5s then done
        const t2 = setTimeout(() => {
            setPhase("done");
            setRevealed(true);
        }, 3200);
        return () => { clearTimeout(t1); clearTimeout(t2); };
    }, []);

    return (
        <>
            {/* Gift Reveal Overlay */}
            <AnimatePresence>
                {!revealed && (
                    <motion.div
                        key="reveal-overlay"
                        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Background action lines */}
                        <div className="absolute inset-0 overflow-hidden">
                            {phase === "opening" && [...Array(16)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 0.15, scale: 3 }}
                                    transition={{ duration: 1.5, delay: i * 0.05 }}
                                    className="absolute bg-[var(--color-comic-yellow)]"
                                    style={{
                                        width: "4px",
                                        height: "50%",
                                        top: "50%",
                                        left: "50%",
                                        transformOrigin: "0 0",
                                        transform: `rotate(${i * 22.5}deg)`,
                                    }}
                                />
                            ))}
                        </div>

                        {/* Gift Box */}
                        <div className="relative">
                            {/* Box body */}
                            <motion.div
                                initial={{ scale: 0, rotate: -10 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                                className="relative"
                            >
                                {/* Gift box base */}
                                <div className="w-48 h-40 md:w-64 md:h-52 bg-[var(--color-comic-red)] border-[6px] border-black relative">
                                    {/* Vertical ribbon */}
                                    <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 bg-[var(--color-comic-yellow)] border-x-4 border-black" />
                                    {/* Horizontal ribbon */}
                                    <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-8 bg-[var(--color-comic-yellow)] border-y-4 border-black" />
                                </div>

                                {/* Gift box lid */}
                                <motion.div
                                    initial={{ y: 0, rotate: 0 }}
                                    animate={phase === "opening" || phase === "done" ? { y: -120, rotate: -30, opacity: 0 } : { y: 0 }}
                                    transition={{ type: "spring", stiffness: 150, damping: 12 }}
                                    className="absolute -top-10 -left-3 md:-left-4 w-[calc(100%+24px)] md:w-[calc(100%+32px)] origin-left"
                                >
                                    <div className="h-14 md:h-16 bg-[var(--color-comic-red)] border-[6px] border-black relative">
                                        {/* Lid ribbon */}
                                        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 bg-[var(--color-comic-yellow)] border-x-4 border-black" />
                                    </div>
                                    {/* Bow */}
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-4xl md:text-5xl">
                                        🎀
                                    </div>
                                </motion.div>

                                {/* Gift icon inside (visible when opening) */}
                                {phase === "opening" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20, scale: 0.5 }}
                                        animate={{ opacity: 1, y: -60, scale: 1.2 }}
                                        transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                                        className="absolute top-0 left-1/2 -translate-x-1/2"
                                    >
                                        <Trophy className="w-16 h-16 md:w-20 md:h-20 text-[var(--color-comic-yellow)] drop-shadow-[0_0_20px_rgba(255,230,0,0.8)]" fill="var(--color-comic-yellow)" />
                                    </motion.div>
                                )}
                            </motion.div>

                            {/* Sparkles on open */}
                            {phase === "opening" && (
                                <>
                                    <RevealSparkle delay={0.2} x={-80} y={-100} />
                                    <RevealSparkle delay={0.3} x={80} y={-120} />
                                    <RevealSparkle delay={0.4} x={-120} y={-40} />
                                    <RevealSparkle delay={0.5} x={120} y={-60} />
                                    <RevealSparkle delay={0.3} x={0} y={-140} />
                                    <RevealSparkle delay={0.6} x={-60} y={-130} />
                                    <RevealSparkle delay={0.5} x={60} y={-30} />
                                </>
                            )}

                            {/* Text label */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="text-center mt-8 text-white font-black font-[family-name:var(--font-comic)] text-2xl md:text-3xl uppercase tracking-wider"
                            >
                                {phase === "box" ? "A surprise awaits..." : "🎉 THE LOOT! 🎉"}
                            </motion.p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <main className="min-h-screen pt-24 pb-20 px-4 md:px-8 bg-[var(--color-comic-yellow)] text-black overflow-hidden relative selection:bg-[var(--color-comic-red)]">
                {/* Background Dots Pattern */}
                <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
                    backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
                    backgroundSize: "20px 20px"
                }} />



                <div className="container mx-auto relative z-10 max-w-6xl">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-20 relative"
                    >

                        <div className="inline-block relative">
                            <h1 className="text-7xl md:text-9xl font-black font-[family-name:var(--font-comic)] uppercase tracking-tighter text-black" style={{ textShadow: "5px 5px 0px var(--color-comic-red)" }}>
                                THE LOOT
                            </h1>
                            <motion.div
                                animate={{ rotate: [0, -2, 2, 0] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="absolute -top-6 right-0 md:-right-8 bg-white text-black font-black uppercase text-sm md:text-lg px-4 py-1 border-4 border-black shadow-[4px_4px_0_black] transform rotate-12 overflow-hidden"
                            >
                                <span className="blur-sm select-none">₹1,00,000+ IN PRIZES</span>
                                <div className="absolute inset-0 flex items-center justify-center bg-white/60">
                                    <span className="text-xs font-black">🔒 CLASSIFIED</span>
                                </div>
                            </motion.div>
                        </div>
                        <p className="text-lg md:text-xl font-bold mt-6 text-black/60 font-[family-name:var(--font-body)]">
                            Hack your way to glory and take home the bounty!
                        </p>
                    </motion.div>

                    {/* --- MAIN BOUNTIES --- */}
                    <div className="mb-24">
                        <div className="flex items-center gap-4 mb-12">
                            <div className="bg-black text-white px-4 py-2 font-black font-[family-name:var(--font-comic)] text-2xl md:text-3xl uppercase rotate-[-1deg] shadow-[4px_4px_0_var(--color-comic-red)]">
                                MAIN BOUNTIES
                            </div>
                            <div className="flex-1 border-b-4 border-dashed border-black/30" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
                            {/* 1st Runner Up */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="order-2 md:order-1"
                            >
                                <div className="bg-white border-4 border-black p-8 text-center relative shadow-[8px_8px_0_black] hover:shadow-[4px_4px_0_black] hover:translate-x-1 hover:translate-y-1 transition-all group">
                                    {/* Rank badge */}
                                    <div className="absolute -top-5 -left-5 bg-[var(--color-comic-blue)] text-white font-black text-2xl w-14 h-14 flex items-center justify-center border-4 border-black rotate-[-6deg] shadow-[3px_3px_0_black]">
                                        #2
                                    </div>
                                    {/* Halftone overlay */}
                                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#000 1.5px, transparent 1.5px)", backgroundSize: "8px 8px" }} />
                                    <div className="w-24 h-24 mx-auto rounded-full border-4 border-black flex items-center justify-center mb-4 bg-blue-50 group-hover:scale-110 transition-transform">
                                        <Award className="w-12 h-12 text-[var(--color-comic-blue)]" />
                                    </div>
                                    <h3 className="text-xl font-black font-[family-name:var(--font-comic)] uppercase mb-3 tracking-tight">1st Runner Up</h3>
                                    <div className="relative">
                                        <p className="text-5xl font-black font-[family-name:var(--font-comic)] blur-md select-none" style={{ textShadow: "3px 3px 0px var(--color-comic-blue)" }}>₹30,000</p>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="bg-[var(--color-comic-blue)] text-white font-black font-[family-name:var(--font-comic)] text-sm px-4 py-1 border-3 border-black shadow-[3px_3px_0_black] rotate-[-3deg]">🔒 CLASSIFIED</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Grand Champion (Center, Elevated) */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="order-1 md:order-2 z-10 md:-mt-12"
                            >
                                <div className="bg-white border-[6px] border-black p-10 text-center relative shadow-[12px_12px_0_var(--color-comic-red)] hover:shadow-[6px_6px_0_var(--color-comic-red)] hover:translate-x-1 hover:translate-y-1 transition-all group">
                                    {/* Crown banner */}
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                                        <div className="bg-[var(--color-comic-red)] text-white px-6 py-2 font-black uppercase text-sm border-4 border-black shadow-[4px_4px_0_black] flex items-center gap-2 whitespace-nowrap">
                                            <Crown className="w-4 h-4" /> GRAND CHAMPION <Crown className="w-4 h-4" />
                                        </div>
                                    </div>
                                    {/* Rank badge */}
                                    <div className="absolute -top-5 -left-5 bg-[var(--color-comic-red)] text-white font-black text-3xl w-16 h-16 flex items-center justify-center border-4 border-black rotate-[-6deg] shadow-[3px_3px_0_black]">
                                        #1
                                    </div>
                                    {/* Halftone overlay */}
                                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#000 1.5px, transparent 1.5px)", backgroundSize: "8px 8px" }} />
                                    {/* Corner decorations */}
                                    <div className="absolute top-0 right-0 w-16 h-16 border-b-4 border-l-4 border-[var(--color-comic-red)] opacity-30" />
                                    <div className="absolute bottom-0 left-0 w-16 h-16 border-t-4 border-r-4 border-[var(--color-comic-red)] opacity-30" />

                                    <div className="w-32 h-32 mx-auto rounded-full border-4 border-black flex items-center justify-center mb-6 bg-[var(--color-comic-yellow)] group-hover:scale-110 transition-transform relative">
                                        <Trophy className="w-16 h-16 text-black" />
                                        {/* Sparkle dots around trophy */}
                                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-[var(--color-comic-red)] rounded-full animate-ping" />
                                        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-[var(--color-comic-blue)] rounded-full animate-ping" style={{ animationDelay: "0.5s" }} />
                                    </div>

                                    <div className="relative">
                                        <p className="text-7xl md:text-8xl font-black font-[family-name:var(--font-comic)] blur-md select-none" style={{ textShadow: "4px 4px 0px var(--color-comic-red)" }}>₹50,000</p>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="bg-[var(--color-comic-red)] text-white font-black font-[family-name:var(--font-comic)] text-xl px-6 py-2 border-4 border-black shadow-[4px_4px_0_black] rotate-[-3deg]">🔒 CLASSIFIED</span>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex items-center justify-center gap-1 text-sm font-bold text-black/50">
                                        <Sparkles className="w-4 h-4" /> Plus exclusive merch & bragging rights <Sparkles className="w-4 h-4" />
                                    </div>
                                </div>
                            </motion.div>

                            {/* 2nd Runner Up */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="order-3"
                            >
                                <div className="bg-white border-4 border-black p-8 text-center relative shadow-[8px_8px_0_black] hover:shadow-[4px_4px_0_black] hover:translate-x-1 hover:translate-y-1 transition-all group">
                                    {/* Rank badge */}
                                    <div className="absolute -top-5 -left-5 bg-[var(--color-comic-purple)] text-white font-black text-2xl w-14 h-14 flex items-center justify-center border-4 border-black rotate-[-6deg] shadow-[3px_3px_0_black]">
                                        #3
                                    </div>
                                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#000 1.5px, transparent 1.5px)", backgroundSize: "8px 8px" }} />
                                    <div className="w-24 h-24 mx-auto rounded-full border-4 border-black flex items-center justify-center mb-4 bg-purple-50 group-hover:scale-110 transition-transform">
                                        <Gift className="w-12 h-12 text-[var(--color-comic-purple)]" />
                                    </div>
                                    <h3 className="text-xl font-black font-[family-name:var(--font-comic)] uppercase mb-3 tracking-tight">2nd Runner Up</h3>
                                    <div className="relative">
                                        <p className="text-5xl font-black font-[family-name:var(--font-comic)] blur-md select-none" style={{ textShadow: "3px 3px 0px var(--color-comic-purple)" }}>₹20,000</p>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="bg-[var(--color-comic-purple)] text-white font-black font-[family-name:var(--font-comic)] text-sm px-4 py-1 border-3 border-black shadow-[3px_3px_0_black] rotate-[-3deg]">🔒 CLASSIFIED</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* --- TRACK BOUNTIES --- */}
                    <div>
                        <div className="flex items-center gap-4 mb-12">
                            <div className="bg-[var(--color-comic-red)] text-white px-4 py-2 font-black font-[family-name:var(--font-comic)] text-2xl md:text-3xl uppercase rotate-[1deg] shadow-[4px_4px_0_black]">
                                TRACK BOUNTIES
                            </div>
                            <div className="flex-1 border-b-4 border-dashed border-black/30" />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {trackBounties.map((bounty, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 + idx * 0.1 }}
                                >
                                    <div
                                        className="bg-white border-4 border-black p-6 relative group hover:translate-x-1 hover:translate-y-1 transition-all h-full flex flex-col"
                                        style={{ boxShadow: `8px 8px 0 ${bounty.bg}` }}
                                    >
                                        {/* Halftone overlay */}
                                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#000 1.5px, transparent 1.5px)", backgroundSize: "8px 8px" }} />

                                        {/* Colored top strip */}
                                        <div className="absolute top-0 left-0 right-0 h-2" style={{ backgroundColor: bounty.bg }} />

                                        {/* Icon */}
                                        <div className="p-3 text-white border-2 border-black w-fit mb-6 mt-2 group-hover:scale-110 transition-transform" style={{ backgroundColor: bounty.bg }}>
                                            {bounty.icon}
                                        </div>

                                        <div className="mt-auto relative z-10">
                                            <p className="text-xs text-black/40 font-mono uppercase mb-1 font-bold tracking-wider">Sponsored by <span className="blur-[4px] select-none">{bounty.sponsor}</span></p>
                                            <h4 className="text-xl font-black font-[family-name:var(--font-comic)] uppercase tracking-widest">{bounty.track}</h4>
                                            <div className="relative mt-3">
                                                <p className="text-4xl font-black font-[family-name:var(--font-comic)] blur-md select-none" style={{ textShadow: `2px 2px 0px ${bounty.bg}` }}>{bounty.amount}</p>
                                                <div className="absolute inset-0 flex items-center justify-start">
                                                    <span className="text-white font-black font-[family-name:var(--font-comic)] text-xs px-2 py-0.5 border-2 border-black rotate-[-3deg]" style={{ backgroundColor: bounty.bg }}>🔒 CLASSIFIED</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Corner accent */}
                                        <div className="absolute bottom-0 right-0 w-10 h-10 border-t-4 border-l-4 border-black opacity-10" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Call to action */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="mt-24 text-center"
                    >
                        <a href="/" className="inline-block bg-black text-[var(--color-comic-yellow)] text-2xl font-black font-[family-name:var(--font-comic)] uppercase px-10 py-5 border-4 border-black shadow-[8px_8px_0_var(--color-comic-red)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0_var(--color-comic-red)] transition-all">
                            ← RETURN TO BASE
                        </a>
                    </motion.div>

                </div>
            </main>
        </>
    );
}
