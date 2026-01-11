"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const PortalLoadingScreen = ({ children }: { children: React.ReactNode }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [loadingText, setLoadingText] = useState("Opening portal...");

    const loadingMessages = [
        "Opening portal...",
        "Scanning timelines...",
        "Entering the multiverse...",
        "Syncing dimensions...",
    ];

    useEffect(() => {
        // Cycle through messages
        let messageIndex = 0;
        const messageInterval = setInterval(() => {
            messageIndex = (messageIndex + 1) % loadingMessages.length;
            setLoadingText(loadingMessages[messageIndex]);
        }, 500);

        // Hide loading screen after animation
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => {
            clearTimeout(timer);
            clearInterval(messageInterval);
        };
    }, []);

    // Portal ring configuration
    const numRings = 6;
    const colors = [
        "#00D2FF", // cyan
        "#D000FF", // purple
        "#FF0033", // red
        "#FFE600", // yellow
        "#00D2FF", // cyan
        "#D000FF", // purple
    ];

    return (
        <>
            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="fixed inset-0 z-[99999] bg-[#050510] flex flex-col items-center justify-center overflow-hidden"
                    >
                        {/* Background stars/particles */}
                        <div className="absolute inset-0" style={{
                            backgroundImage: `radial-gradient(2px 2px at 20px 30px, #fff 50%, transparent 100%),
                               radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.8) 50%, transparent 100%),
                               radial-gradient(1px 1px at 90px 40px, #fff 50%, transparent 100%),
                               radial-gradient(2px 2px at 130px 80px, rgba(255,255,255,0.6) 50%, transparent 100%),
                               radial-gradient(1px 1px at 160px 120px, #fff 50%, transparent 100%)`,
                            backgroundSize: '200px 200px',
                            opacity: 0.5,
                        }} />

                        {/* Main portal container */}
                        <div className="relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center">

                            {/* Outer glow */}
                            <motion.div
                                className="absolute inset-0 rounded-full"
                                style={{
                                    background: "radial-gradient(circle, rgba(208,0,255,0.3) 0%, rgba(0,210,255,0.2) 50%, transparent 70%)",
                                }}
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.5, 0.8, 0.5],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />

                            {/* Portal rings */}
                            {Array.from({ length: numRings }).map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute rounded-full border-2"
                                    style={{
                                        width: `${100 - i * 12}%`,
                                        height: `${100 - i * 12}%`,
                                        borderColor: colors[i],
                                        boxShadow: `0 0 20px ${colors[i]}, inset 0 0 20px ${colors[i]}40`,
                                    }}
                                    initial={{ scale: 0, opacity: 0, rotate: 0 }}
                                    animate={{
                                        scale: 1,
                                        opacity: [0, 1, 0.8],
                                        rotate: i % 2 === 0 ? 360 : -360,
                                    }}
                                    transition={{
                                        scale: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
                                        opacity: { duration: 0.5, delay: i * 0.1 },
                                        rotate: { duration: 8 - i * 0.5, repeat: Infinity, ease: "linear" },
                                    }}
                                />
                            ))}

                            {/* Center vortex */}
                            <motion.div
                                className="absolute w-20 h-20 rounded-full"
                                style={{
                                    background: "conic-gradient(from 0deg, #00D2FF, #D000FF, #FF0033, #FFE600, #00D2FF)",
                                }}
                                initial={{ scale: 0, rotate: 0 }}
                                animate={{
                                    scale: [0, 1, 0.8],
                                    rotate: [0, 720],
                                }}
                                transition={{
                                    scale: { duration: 0.8, delay: 0.6, ease: "easeOut" },
                                    rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                                }}
                            />

                            {/* Inner white core */}
                            <motion.div
                                className="absolute w-8 h-8 rounded-full bg-white"
                                style={{ boxShadow: "0 0 30px white, 0 0 60px white" }}
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: [0, 1.5, 1], opacity: [0, 1, 0.9] }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                            />

                            {/* Chromatic aberration layers - glitch effect */}
                            <motion.div
                                className="absolute inset-0 rounded-full opacity-30"
                                style={{
                                    background: "radial-gradient(circle, #FF0033 0%, transparent 50%)",
                                    mixBlendMode: "screen",
                                }}
                                animate={{
                                    x: [-5, 5, -5],
                                    y: [3, -3, 3],
                                }}
                                transition={{
                                    duration: 0.2,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                }}
                            />
                            <motion.div
                                className="absolute inset-0 rounded-full opacity-30"
                                style={{
                                    background: "radial-gradient(circle, #00D2FF 0%, transparent 50%)",
                                    mixBlendMode: "screen",
                                }}
                                animate={{
                                    x: [5, -5, 5],
                                    y: [-3, 3, -3],
                                }}
                                transition={{
                                    duration: 0.2,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                }}
                            />

                            {/* Energy particles shooting out */}
                            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                                <motion.div
                                    key={`particle-${i}`}
                                    className="absolute w-2 h-2 rounded-full"
                                    style={{
                                        background: colors[i % colors.length],
                                        boxShadow: `0 0 10px ${colors[i % colors.length]}`,
                                    }}
                                    initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                                    animate={{
                                        x: [0, Math.cos(angle * Math.PI / 180) * 150],
                                        y: [0, Math.sin(angle * Math.PI / 180) * 150],
                                        opacity: [0, 1, 0],
                                        scale: [0, 1, 0.5],
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        delay: 1 + i * 0.1,
                                        repeat: Infinity,
                                        repeatDelay: 0.5,
                                    }}
                                />
                            ))}
                        </div>

                        {/* Portal opening effect - expands to fill screen */}
                        <motion.div
                            className="absolute rounded-full"
                            style={{
                                background: "radial-gradient(circle, #050510 0%, transparent 70%)",
                            }}
                            initial={{ width: 0, height: 0 }}
                            animate={{ width: "300vmax", height: "300vmax" }}
                            transition={{ duration: 0.8, delay: 2.4, ease: "easeIn" }}
                        />

                        {/* Loading text */}
                        <motion.p
                            className="absolute bottom-32 text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] via-[#D000FF] to-[#FF0033] font-[family-name:var(--font-body)] tracking-wide"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            {loadingText}
                        </motion.p>

                        {/* Progress ring */}
                        <svg className="absolute bottom-20 w-12 h-12" viewBox="0 0 50 50">
                            <motion.circle
                                cx="25"
                                cy="25"
                                r="20"
                                fill="none"
                                stroke="url(#progressGradient)"
                                strokeWidth="3"
                                strokeLinecap="round"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2.5, ease: "easeInOut" }}
                            />
                            <defs>
                                <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#00D2FF" />
                                    <stop offset="50%" stopColor="#D000FF" />
                                    <stop offset="100%" stopColor="#FF0033" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main content */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: isLoading ? 0 : 1, scale: isLoading ? 0.95 : 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {children}
            </motion.div>
        </>
    );
};
