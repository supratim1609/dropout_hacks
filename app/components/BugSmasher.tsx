"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bug, X } from "lucide-react";

interface BugEntity {
    id: number;
    x: number;
    y: number;
    type: "bug" | "feature"; // Just for fun, mostly bugs
}

export const BugSmasher = () => {
    const [bugs, setBugs] = useState<BugEntity[]>([]);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    // Spawner Logic
    useEffect(() => {
        const interval = setInterval(() => {
            setBugs((prev) => {
                if (prev.length >= 6) return prev; // Limit active bugs

                const newBug: BugEntity = {
                    id: Date.now(),
                    x: Math.random() * 80 + 10, // 10% to 90%
                    y: Math.random() * 80 + 10,
                    type: "bug",
                };
                return [...prev, newBug];
            });
        }, 1000); // Spawn every second

        return () => clearInterval(interval);
    }, []);

    const smashBug = useCallback((id: number) => {
        setBugs((prev) => prev.filter((b) => b.id !== id));
        setScore((s) => {
            const newScore = s + 1;
            if (newScore > highScore) setHighScore(newScore);
            return newScore;
        });
    }, [highScore]);

    return (
        <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">

            {/* Game Container Frame */}
            <div className="relative w-[350px] h-[450px] bg-black/80 border-4 border-[var(--color-comic-blue)] rounded-xl overflow-hidden shadow-[0_0_40px_rgba(0,100,255,0.3)] backdrop-blur-sm">

                {/* Header / Scoreboard */}
                <div className="absolute top-0 left-0 right-0 bg-[var(--color-comic-blue)] p-2 flex justify-between items-center z-20 border-b-4 border-black">
                    <div className="flex items-center gap-2">
                        <Bug className="w-5 h-5 text-white" />
                        <span className="font-bold font-[family-name:var(--font-comic)] text-white tracking-wider">DEBUGGER.EXE</span>
                    </div>
                    <div className="bg-black px-3 py-1 rounded text-[var(--color-comic-yellow)] font-mono font-bold border border-white/20">
                        SCORE: {score.toString().padStart(3, '0')}
                    </div>
                </div>

                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,100,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,100,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30 pointer-events-none" />

                {/* Play Area */}
                <div className="absolute inset-0 mt-12 overflow-hidden cursor-crosshair">
                    <AnimatePresence>
                        {bugs.map((bug) => (
                            <motion.button
                                key={bug.id}
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{
                                    scale: 1,
                                    opacity: 1,
                                    x: [0, Math.random() * 20 - 10, 0], // Jitter
                                    y: [0, Math.random() * 20 - 10, 0]
                                }}
                                exit={{ scale: 1.5, opacity: 0, rotate: 180 }}
                                onClick={() => smashBug(bug.id)}
                                className="absolute p-3 group focus:outline-none"
                                style={{ left: `${bug.x}%`, top: `${bug.y}%` }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <div className="relative">
                                    {/* The Bug */}
                                    <Bug className="w-8 h-8 text-[var(--color-comic-red)] group-hover:text-white transition-colors drop-shadow-[0_0_5px_var(--color-comic-red)]" />

                                    {/* Glitch Effect on Hover */}
                                    <div className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-20 animate-pulse blur-md rounded-full" />
                                </div>
                            </motion.button>
                        ))}
                    </AnimatePresence>

                    {/* Empty State / CRT Text */}
                    {bugs.length === 0 && (
                        <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
                            <span className="text-[var(--color-comic-blue)] font-mono text-sm animate-pulse">Scanning for threats...</span>
                        </div>
                    )}
                </div>

                {/* Footer / Instructions */}
                <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none">
                    <span className="bg-black/80 px-4 py-1 text-[10px] text-gray-400 uppercase tracking-[0.2em] border border-gray-800 rounded-full">
                        Click to Squash
                    </span>
                </div>
            </div>

            {/* Decorative Floating "POW" specifically for the game context */}
            <AnimatePresence>
                {score > 0 && score % 5 === 0 && (
                    <motion.div
                        initial={{ scale: 0, rotate: -20 }}
                        animate={{ scale: 1, rotate: 10, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        key={`pow-${score}`} // Unique key to trigger animation on score change
                        className="absolute -top-10 -right-10 bg-[var(--color-comic-yellow)] text-black font-black text-2xl p-4 border-4 border-black shadow-[8px_8px_0_black] z-30 font-[family-name:var(--font-comic)]"
                    >
                        BUG SMASHED!
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
