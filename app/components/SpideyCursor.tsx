"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const SpideyCursor = () => {
    const [isVisible, setIsVisible] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 20, stiffness: 500, mass: 0.1 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        // Only show custom cursor on desktop to avoid touch issues
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (isTouchDevice) return;

        setIsVisible(true);

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16); // Center the cursor (32px width / 2)
            cursorY.set(e.clientY - 16);
        };

        window.addEventListener("mousemove", moveCursor);
        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, [cursorX, cursorY]);

    if (!isVisible) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9999999] drop-shadow-lg"
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
            }}
        >
            <svg width="32" height="32" viewBox="0 0 200 200" className="transform drop-shadow-[2px_2px_0_rgba(0,0,0,0.5)]">
                {/* Head Shape */}
                <path d="M100 30 C 60 30 35 70 35 100 C 35 140 65 170 100 175 C 135 170 165 140 165 100 C 165 70 140 30 100 30 Z" fill="#D80027" stroke="white" strokeWidth="8" />

                {/* Webbing - Simplified for small size */}
                <g stroke="black" strokeWidth="3" opacity="0.4" fill="none">
                    <path d="M100 100 L100 30" />
                    <path d="M100 100 L165 100" />
                    <path d="M100 100 L35 100" />
                    <path d="M100 100 L145 155" />
                    <path d="M100 100 L55 155" />
                    <path d="M100 100 L145 45" />
                    <path d="M100 100 L55 45" />
                </g>

                {/* Eyes */}
                {/* Left Eye */}
                <path d="M85 80 Q 50 70 55 110 C 60 130 80 120 90 110 C 95 105 90 85 85 80 Z" fill="white" stroke="black" strokeWidth="6" />
                {/* Right Eye */}
                <path d="M115 80 Q 150 70 145 110 C 140 130 120 120 110 110 C 105 105 110 85 115 80 Z" fill="white" stroke="black" strokeWidth="6" />
            </svg>
        </motion.div>
    );
};
