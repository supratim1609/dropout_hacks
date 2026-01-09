"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Crosshair, Zap, MousePointer2, ShieldAlert } from "lucide-react";
import { ComicPanel } from "./ComicPanel";

// Game Config
const SPAWN_RATE_MS = 800;
const MAX_NODES = 5;
const GAME_DURATION = 30; // Seconds

interface Node {
    id: number;
    x: number; // %
    y: number; // %
    type: "normal" | "golden";
    createdAt: number;
}

export const CyberAimGame = () => {
    const [gameState, setGameState] = useState<"IDLE" | "PLAYING" | "FINISHED">("IDLE");
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
    const [nodes, setNodes] = useState<Node[]>([]);
    const [combo, setCombo] = useState(0);
    const [highScore, setHighScore] = useState(0);

    // SFX / Vfx states
    const [screenShake, setScreenShake] = useState(0);

    // Refs for intervals
    const spawnerRef = useRef<NodeJS.Timeout | null>(null);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    // Create a random node
    const createNode = (): Node => {
        return {
            id: Date.now() + Math.random(),
            x: Math.random() * 80 + 10,
            y: Math.random() * 80 + 10,
            type: Math.random() > 0.9 ? "golden" : "normal",
            createdAt: Date.now(),
        };
    };

    const spawnNode = () => {
        setNodes((prev) => {
            if (prev.length >= MAX_NODES) return prev;
            return [...prev, createNode()];
        });
    };

    // Start Game
    const startGame = () => {
        setGameState("PLAYING");
        setScore(0);
        setCombo(0);
        setNodes([]);
        setTimeLeft(GAME_DURATION);

        // Spawn first node immediately
        spawnNode();

        // Timer Loop
        timerRef.current = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    endGame();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        // Spawner Loop
        spawnerRef.current = setInterval(spawnNode, SPAWN_RATE_MS);
    };

    const endGame = () => {
        setGameState("FINISHED");
        if (spawnerRef.current) clearInterval(spawnerRef.current);
        if (timerRef.current) clearInterval(timerRef.current);
        setNodes([]);

        // Update High Score
        // (In a real app, save to local storage here)
        setHighScore((prev) => Math.max(prev, score));
    };



    // Handle Click
    const hitNode = (id: number, type: "normal" | "golden") => {
        // Remove node
        setNodes((prev) => prev.filter((n) => n.id !== id));

        // Score logic
        const points = type === "golden" ? 500 : 100;
        const multiplier = 1 + Math.floor(combo / 5) * 0.5; // Combo multiplier
        setScore((prev) => prev + Math.floor(points * multiplier));
        setCombo((prev) => prev + 1);

        // Haptic Feedback (Mobile)
        if (typeof window !== "undefined" && window.navigator && window.navigator.vibrate) {
            window.navigator.vibrate(100);
        }

        // Visual Feedback
        setScreenShake(5);
        setTimeout(() => setScreenShake(0), 100);
    };

    const missClick = () => {
        if (gameState === "PLAYING") {
            setCombo(0); // Reset combo on miss
            setScreenShake(2);
            setTimeout(() => setScreenShake(0), 100);
        }
    };

    // Cleanup
    useEffect(() => {
        return () => {
            if (spawnerRef.current) clearInterval(spawnerRef.current);
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, []);

    // Helper for shake style
    const shakeStyle = {
        x: screenShake * (Math.random() > 0.5 ? 1 : -1),
        y: screenShake * (Math.random() > 0.5 ? 1 : -1),
    };

    return (
        <ComicPanel variant="default" className="w-[350px] md:w-[450px] aspect-[4/5] bg-black border-4 border-[var(--color-comic-blue)] relative overflow-hidden flex flex-col p-0 shadow-[0_0_50px_rgba(0,210,255,0.2)]">

            {/* Background Grid (Moving) */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(0,100,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,100,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none">
                <motion.div
                    animate={{ y: [0, 40] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    className="w-full h-full bg-[linear-gradient(rgba(0,100,255,0.1)_1px,transparent_1px)] bg-[size:100%_40px]"
                />
            </div>

            {/* CRT Scanline Overlay */}
            <div className="absolute inset-0 z-50 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,6px_100%] pointer-events-none" />

            {/* Game Header */}
            <div className="relative z-20 flex justify-between items-center p-4 bg-black/80 border-b-2 border-gray-800 backdrop-blur-md">
                <div className="flex items-center gap-2">
                    <Zap className={`w-5 h-5 ${combo > 5 ? "text-yellow-400 animate-pulse" : "text-gray-400"}`} />
                    <div className="flex flex-col">
                        <span className="text-[10px] text-gray-500 font-mono uppercase leading-none">Combo</span>
                        <span className="text-xl font-black text-white leading-none font-[family-name:var(--font-comic)]">x{combo}</span>
                    </div>
                </div>

                <div className="text-3xl font-black font-[family-name:var(--font-comic)] text-white tracking-widest text-shadow-comic">
                    {score.toLocaleString()}
                </div>

                <div className="flex flex-col items-end">
                    <span className="text-[10px] text-gray-500 font-mono uppercase leading-none">Timer</span>
                    <span className={`text-xl font-black leading-none font-[family-name:var(--font-comic)] ${timeLeft < 5 ? "text-red-500 animate-pulse" : "text-white"}`}>
                        00:{timeLeft.toString().padStart(2, '0')}
                    </span>
                </div>
            </div>

            {/* Game Area */}
            <motion.div
                className="relative flex-1 cursor-crosshair overflow-hidden"
                style={shakeStyle}
                onClick={missClick}
            >
                <AnimatePresence>
                    {/* MENU STATE */}
                    {gameState === "IDLE" && (
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm"
                        >
                            <Crosshair className="w-24 h-24 text-[var(--color-comic-blue)] mb-4 animate-spin-slow opacity-80" />
                            <h2 className="text-4xl font-black text-white italic uppercase mb-2 text-shadow-comic">
                                CYBER AIM
                            </h2>
                            <p className="text-gray-300 font-mono text-xs mb-8">
                                PROTOCOL: ELIMINATE SECURITY NODES
                            </p>
                            <button
                                onClick={(e) => { e.stopPropagation(); startGame(); }}
                                className="bg-[var(--color-comic-red)] text-white text-xl font-black py-4 px-10 uppercase border-2 border-white shadow-[4px_4px_0_white] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_white] transition-all"
                            >
                                CONNECT
                            </button>
                        </motion.div>
                    )}

                    {/* FINISHED STATE */}
                    {gameState === "FINISHED" && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                            className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-black/80 backdrop-blur-md"
                        >
                            <span className="text-6xl mb-2">🏆</span>
                            <h2 className="text-3xl font-black text-white uppercase mb-4">SESSION COMPLETE</h2>

                            <div className="grid grid-cols-2 gap-4 mb-8 w-3/4">
                                <div className="bg-gray-900/50 p-4 border border-gray-700 text-center">
                                    <div className="text-xs text-gray-500 font-mono">SCORE</div>
                                    <div className="text-2xl font-bold text-[var(--color-comic-blue)]">{score}</div>
                                </div>
                                <div className="bg-gray-900/50 p-4 border border-gray-700 text-center">
                                    <div className="text-xs text-gray-500 font-mono">BEST</div>
                                    <div className="text-2xl font-bold text-[var(--color-comic-yellow)]">{Math.max(score, highScore)}</div>
                                </div>
                            </div>

                            <button
                                onClick={(e) => { e.stopPropagation(); startGame(); }}
                                className="text-gray-400 hover:text-white font-bold font-mono uppercase flex items-center gap-2"
                            >
                                <Zap className="w-4 h-4" /> REBOOT_SYSTEM
                            </button>
                        </motion.div>
                    )}

                    {/* ACTIVE NODES */}
                    {nodes.map((node) => (
                        <motion.button
                            key={node.id}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 1.5, opacity: 0 }}
                            className={`absolute w-16 h-16 flex items-center justify-center group focus:outline-none`}
                            style={{ left: `${node.x}%`, top: `${node.y}%`, marginLeft: '-32px', marginTop: '-32px' }}
                            onClick={(e) => { e.stopPropagation(); hitNode(node.id, node.type); }}
                            onPointerDown={(e) => { e.stopPropagation(); hitNode(node.id, node.type); }}
                        >
                            <div className="relative w-full h-full flex items-center justify-center transition-transform active:scale-90">
                                {/* Outer Ring */}
                                <div className={`absolute inset-0 rounded-full border-2 border-dashed ${node.type === "golden" ? "border-yellow-400 animate-spin" : "border-[var(--color-comic-blue)] animate-spin-slow"}`} />

                                {/* Inner Core */}
                                <div className={`w-8 h-8 rounded-full shadow-[0_0_15px_currentColor] ${node.type === "golden" ? "bg-yellow-400 text-yellow-400" : "bg-[var(--color-comic-blue)] text-blue-400"} group-hover:scale-110 transition-transform`} />

                                {/* Crosshair overlay */}
                                <Crosshair className="absolute w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </motion.button>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Footer Status */}
            <div className="bg-black border-t border-gray-800 p-2 flex justify-between items-center z-20">
                <div className="flex items-center gap-2 text-[10px] text-gray-500 font-mono">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    SERVER: ONLINE
                </div>
                <div className="text-[10px] text-gray-600 font-mono">
                    v2.0.4 // STABLE
                </div>
            </div>
        </ComicPanel>
    );
};
