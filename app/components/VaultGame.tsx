"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Unlock, Lock, RotateCcw, Trophy } from "lucide-react";
import { ComicPanel } from "./ComicPanel";

// Game Constants
const LEVELS = 3;
const BASE_SPEED = 2; // Speed of the oscillation

export const VaultGame = () => {
    const [gameState, setGameState] = useState<"IDLE" | "PLAYING" | "WON" | "LOST">("IDLE");
    const [currentLevel, setCurrentLevel] = useState(1);
    const [cursorPos, setCursorPos] = useState(50); // 0 to 100%
    const [direction, setDirection] = useState(1); // 1 = right, -1 = left
    const [speed, setSpeed] = useState(BASE_SPEED);
    const [targetZone, setTargetZone] = useState({ start: 40, width: 20 }); // Percentage
    const requestRef = useRef<number | null>(null);

    // Game Loop
    const animate = () => {
        setCursorPos((prev) => {
            let next = prev + speed * direction;
            if (next >= 100) {
                next = 100;
                setDirection(-1);
            } else if (next <= 0) {
                next = 0;
                setDirection(1);
            }
            return next;
        });
        requestRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        if (gameState === "PLAYING") {
            requestRef.current = requestAnimationFrame(animate);
        } else {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        }
        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, [gameState, speed, direction]);

    // Start Game
    const startGame = () => {
        setGameState("PLAYING");
        setCurrentLevel(1);
        setSpeed(BASE_SPEED);
        randomizeTarget(1);
    };

    // Randomize Target Zone based on level difficulty
    const randomizeTarget = (level: number) => {
        const difficultyMultiplier = 1 + (level * 0.5);
        const newWidth = Math.max(5, 25 - (level * 5)); // Shrinks as levels go up
        const newStart = Math.random() * (100 - newWidth);
        setTargetZone({ start: newStart, width: newWidth });
        setSpeed(BASE_SPEED * difficultyMultiplier);
    };

    // Handle "Hack" Click
    const handleHack = () => {
        if (gameState !== "PLAYING") return;

        // Check Hit (with slight leniency)
        const hit = cursorPos >= targetZone.start && cursorPos <= (targetZone.start + targetZone.width);

        if (hit) {
            if (currentLevel >= LEVELS) {
                setGameState("WON");
            } else {
                setCurrentLevel((prev) => prev + 1);
                randomizeTarget(currentLevel + 1);
            }
        } else {
            setGameState("LOST");
        }
    };

    return (
        <ComicPanel variant="default" className="w-[350px] md:w-[450px] aspect-[4/5] bg-black border-4 border-[var(--color-comic-blue)] relative overflow-hidden flex flex-col justify-between p-6">
            {/* Header */}
            <div className="flex justify-between items-center border-b-2 border-dashed border-gray-700 pb-4">
                <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${gameState === "PLAYING" ? "bg-red-500 animate-pulse" : "bg-gray-500"}`} />
                    <span className="text-[var(--color-comic-blue)] font-mono text-sm tracking-widest">
                        {gameState === "WON" ? "SYSTEM_BREACHED" : "VAULT_SECURITY"}
                    </span>
                </div>
                <div className="text-white font-black font-[family-name:var(--font-comic)] text-xl">
                    LVL {gameState === "WON" ? "MAX" : currentLevel}/{LEVELS}
                </div>
            </div>

            {/* Game Screen */}
            <div className="flex-1 flex flex-col items-center justify-center relative">
                <AnimatePresence mode="wait">
                    {/* IDLE SCREEN */}
                    {gameState === "IDLE" && (
                        <motion.div
                            key="idle"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-center"
                        >
                            <Lock className="w-20 h-20 text-gray-500 mb-4 mx-auto" />
                            <h3 className="text-white text-2xl font-black uppercase mb-2">Encrypted</h3>
                            <p className="text-gray-400 text-sm mb-6 max-w-[200px] mx-auto">
                                Stop the cursor in the <span className="text-[var(--color-comic-yellow)]">Yellow Zone</span> to bypass the firewall.
                            </p>
                            <button
                                onClick={startGame}
                                className="bg-[var(--color-comic-red)] text-white font-bold py-3 px-8 uppercase hover:scale-105 transition-transform shadow-[4px_4px_0_white]"
                            >
                                Start Hack
                            </button>
                        </motion.div>
                    )}

                    {/* PLAYING SCREEN */}
                    {gameState === "PLAYING" && (
                        <div className="w-full space-y-8">
                            {/* Graphic Lock */}
                            <div className="relative w-32 h-32 mx-auto border-4 border-gray-800 rounded-full flex items-center justify-center">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 2 / speed, ease: "linear", repeat: Infinity }}
                                >
                                    <Lock className="w-12 h-12 text-[var(--color-comic-blue)]" />
                                </motion.div>
                            </div>

                            {/* The Bar */}
                            <div className="relative h-12 bg-gray-900 border-2 border-gray-600 w-full rounded-md overflow-hidden">
                                {/* Target Zone */}
                                <div
                                    className="absolute top-0 bottom-0 bg-[var(--color-comic-yellow)] opacity-80"
                                    style={{
                                        left: `${targetZone.start}%`,
                                        width: `${targetZone.width}%`
                                    }}
                                />
                                {/* Cursor */}
                                <div
                                    className="absolute top-0 bottom-0 w-2 bg-[var(--color-comic-red)] shadow-[0_0_10px_var(--color-comic-red)] z-10"
                                    style={{ left: `${cursorPos}%` }}
                                />
                            </div>

                            <button
                                onMouseDown={handleHack}
                                className="w-full bg-[var(--color-comic-blue)] text-black font-black text-xl py-4 uppercase border-2 border-white shadow-[4px_4px_0_0_white] active:translate-y-1 active:shadow-none transition-all"
                            >
                                HACK
                            </button>
                        </div>
                    )}

                    {/* WIN SCREEN */}
                    {gameState === "WON" && (
                        <motion.div
                            key="won"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="text-center"
                        >
                            <Unlock className="w-24 h-24 text-[var(--color-comic-yellow)] mb-4 mx-auto animate-bounce" />
                            <h3 className="text-white text-4xl font-black uppercase mb-2 text-shadow-comic">ACCESS GRANTED</h3>
                            <p className="text-green-400 font-mono text-sm mb-6">
                                ROOT_PRIVILEGES::ACQUIRED
                            </p>
                            <div className="bg-gray-900 p-4 border border-gray-700 mb-6">
                                <p className="text-white text-xs font-mono break-all">
                                    SECRET_KEY: 0x4A12B... <br />
                                    Coordinates: 22.5726° N, 88.3639° E
                                </p>
                            </div>
                            <button
                                onClick={startGame}
                                className="text-gray-400 hover:text-white flex items-center justify-center gap-2 mx-auto text-sm uppercase font-bold"
                            >
                                <RotateCcw className="w-4 h-4" /> Re-Hack
                            </button>
                        </motion.div>
                    )}

                    {/* LOSS SCREEN */}
                    {gameState === "LOST" && (
                        <motion.div
                            key="lost"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="text-center"
                        >
                            <div className="text-6xl mb-4">🚨</div>
                            <h3 className="text-[var(--color-comic-red)] text-3xl font-black uppercase mb-2">BREACH DETECTED</h3>
                            <p className="text-gray-400 text-sm mb-6">
                                The firewall blocked your connection.
                            </p>
                            <button
                                onClick={startGame}
                                className="bg-white text-black font-bold py-3 px-8 uppercase hover:bg-gray-200 transition-colors shadow-[4px_4px_0_black]"
                            >
                                Try Again
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Decor */}
            <div className="absolute top-0 right-0 p-2 opacity-50">
                <div className="w-20 h-20 border-r-2 border-t-2 border-[var(--color-comic-red)] rounded-tr-3xl" />
            </div>
        </ComicPanel>
    );
};
