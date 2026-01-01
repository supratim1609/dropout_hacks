"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface WebShot {
    id: number;
    x: number;
    y: number;
    startX: number;
    startY: number;
    text: string;
}

export const WebShooter = () => {
    const [shots, setShots] = useState<WebShot[]>([]);
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });

        const handleResize = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            // Don't shoot if clicking on interactive elements (buttons, links) to avoid annoying users
            const target = e.target as HTMLElement;
            if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
                return;
            }

            const id = Date.now();
            const startX = Math.random() > 0.5 ? window.innerWidth : 0;
            const startY = window.innerHeight;
            const comicSounds = ["THWIP!", "THWIP!", "POW!", "SNAP!", "WHOOSH!"];
            const text = comicSounds[Math.floor(Math.random() * comicSounds.length)];

            const newShot = { id, x: e.clientX, y: e.clientY, startX, startY, text };

            setShots((prev) => [...prev, newShot]);

            // Remove shot after animation
            setTimeout(() => {
                setShots((prev) => prev.filter((s) => s.id !== id));
            }, 1000);
        };

        window.addEventListener("click", handleClick);
        return () => window.removeEventListener("click", handleClick);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
            <AnimatePresence>
                {shots.map((shot) => (
                    <React.Fragment key={shot.id}>
                        {/* The Web Strand */}
                        <svg className="absolute inset-0 w-full h-full">
                            <motion.line
                                x1={shot.startX}
                                y1={shot.startY}
                                x2={shot.x}
                                y2={shot.y}
                                stroke="white"
                                strokeWidth="2"
                                initial={{ pathLength: 0, opacity: 0.8 }}
                                animate={{ pathLength: 1, opacity: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            />
                        </svg>

                        {/* The Impact Effect */}
                        <motion.div
                            initial={{ opacity: 1, scale: 0, rotate: Math.random() * 30 - 15 }}
                            animate={{ opacity: 0, scale: 1.5, y: -20 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="absolute font-black text-2xl font-[family-name:var(--font-comic)] text-[var(--color-comic-red)]"
                            style={{
                                left: shot.x,
                                top: shot.y,
                                textShadow: "2px 2px 0px white",
                                WebkitTextStroke: "1px black"
                            }}
                        >
                            {shot.text}
                        </motion.div>
                    </React.Fragment>
                ))}
            </AnimatePresence>
        </div>
    );
};
