"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const LoadingScreen = ({ children }: { children: React.ReactNode }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [loadingText, setLoadingText] = useState("Entering the multiverse...");

    const loadingMessages = [
        "Entering the spider-verse...",
        "Spinning web shooters...",
        "Assembling hackers...",
        "Loading timelines...",
    ];

    useEffect(() => {
        // Cycle through messages
        let messageIndex = 0;
        const messageInterval = setInterval(() => {
            messageIndex = (messageIndex + 1) % loadingMessages.length;
            setLoadingText(loadingMessages[messageIndex]);
        }, 600);

        // Hide loading screen after animation
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2800);

        return () => {
            clearTimeout(timer);
            clearInterval(messageInterval);
        };
    }, []);

    // SVG Web configuration
    const numSpokes = 12;
    const numRings = 5;
    const centerX = 200;
    const centerY = 200;
    const maxRadius = 180;

    // Generate spoke lines
    const spokes = Array.from({ length: numSpokes }, (_, i) => {
        const angle = (i * 360) / numSpokes;
        const radians = (angle * Math.PI) / 180;
        const endX = centerX + Math.cos(radians) * maxRadius;
        const endY = centerY + Math.sin(radians) * maxRadius;
        return { x1: centerX, y1: centerY, x2: endX, y2: endY, delay: i * 0.03 };
    });

    // Generate spiral ring paths
    const rings = Array.from({ length: numRings }, (_, ringIndex) => {
        const radius = ((ringIndex + 1) * maxRadius) / numRings;
        const points: string[] = [];

        for (let i = 0; i <= numSpokes; i++) {
            const angle = (i * 360) / numSpokes;
            const radians = (angle * Math.PI) / 180;
            // Add slight wave for organic feel
            const waveRadius = radius + Math.sin(i * 0.8) * 5;
            const x = centerX + Math.cos(radians) * waveRadius;
            const y = centerY + Math.sin(radians) * waveRadius;
            points.push(`${i === 0 ? 'M' : 'L'} ${x} ${y}`);
        }

        return { d: points.join(' ') + ' Z', delay: 0.4 + ringIndex * 0.15 };
    });

    return (
        <>
            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="fixed inset-0 z-[99999] bg-[#050510] flex flex-col items-center justify-center"
                    >
                        {/* Background gradient */}
                        <div className="absolute inset-0 bg-gradient-radial from-[#0a0a20] via-[#050510] to-[#050510]" />

                        {/* Spider Web SVG */}
                        <div className="relative z-10">
                            <svg
                                width="400"
                                height="400"
                                viewBox="0 0 400 400"
                                className="w-64 h-64 md:w-80 md:h-80"
                            >
                                {/* Glow filter */}
                                <defs>
                                    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                                        <feMerge>
                                            <feMergeNode in="coloredBlur" />
                                            <feMergeNode in="SourceGraphic" />
                                        </feMerge>
                                    </filter>
                                    <linearGradient id="webGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#00D2FF" />
                                        <stop offset="50%" stopColor="#D000FF" />
                                        <stop offset="100%" stopColor="#00D2FF" />
                                    </linearGradient>
                                </defs>

                                {/* Center point */}
                                <motion.circle
                                    cx={centerX}
                                    cy={centerY}
                                    r="6"
                                    fill="url(#webGradient)"
                                    filter="url(#glow)"
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                />

                                {/* Spokes (radial lines) */}
                                {spokes.map((spoke, i) => (
                                    <motion.line
                                        key={`spoke-${i}`}
                                        x1={spoke.x1}
                                        y1={spoke.y1}
                                        x2={spoke.x2}
                                        y2={spoke.y2}
                                        stroke="url(#webGradient)"
                                        strokeWidth="2"
                                        filter="url(#glow)"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        animate={{ pathLength: 1, opacity: 0.8 }}
                                        transition={{
                                            duration: 0.3,
                                            delay: 0.1 + spoke.delay,
                                            ease: "easeOut",
                                        }}
                                    />
                                ))}

                                {/* Spiral rings */}
                                {rings.map((ring, i) => (
                                    <motion.path
                                        key={`ring-${i}`}
                                        d={ring.d}
                                        fill="none"
                                        stroke="url(#webGradient)"
                                        strokeWidth="1.5"
                                        filter="url(#glow)"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        animate={{ pathLength: 1, opacity: 0.6 }}
                                        transition={{
                                            duration: 0.4,
                                            delay: ring.delay,
                                            ease: "easeInOut",
                                        }}
                                    />
                                ))}

                                {/* Final pulse effect */}
                                <motion.circle
                                    cx={centerX}
                                    cy={centerY}
                                    r={maxRadius}
                                    fill="none"
                                    stroke="url(#webGradient)"
                                    strokeWidth="2"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1.1, opacity: [0, 0.5, 0] }}
                                    transition={{
                                        duration: 0.8,
                                        delay: 1.8,
                                        ease: "easeOut",
                                    }}
                                />
                            </svg>

                            {/* Small spider icon */}
                            <motion.div
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 1.5, duration: 0.3 }}
                            >
                                <span className="text-2xl">🕷️</span>
                            </motion.div>
                        </div>

                        {/* Loading text */}
                        <motion.p
                            className="mt-8 text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] to-[#D000FF] font-[family-name:var(--font-body)] tracking-wide"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            {loadingText}
                        </motion.p>

                        {/* Progress dots */}
                        <div className="flex gap-2 mt-4">
                            {[0, 1, 2].map((i) => (
                                <motion.div
                                    key={i}
                                    className="w-2 h-2 rounded-full bg-gradient-to-r from-[#00D2FF] to-[#D000FF]"
                                    animate={{
                                        scale: [1, 1.5, 1],
                                        opacity: [0.5, 1, 0.5],
                                    }}
                                    transition={{
                                        duration: 0.8,
                                        delay: i * 0.2,
                                        repeat: Infinity,
                                        repeatType: "loop",
                                    }}
                                />
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main content */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoading ? 0 : 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {children}
            </motion.div>
        </>
    );
};
