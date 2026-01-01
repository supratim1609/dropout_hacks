"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const SpideyCursor = () => {
    const [isVisible, setIsVisible] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
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
        <>
            {/* Main Cursor */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-white bg-[var(--color-comic-red)] pointer-events-none z-[9999] flex items-center justify-center mix-blend-difference"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                }}
            >
                <div className="w-1 h-1 bg-black rounded-full" />
            </motion.div>

            {/* Glitch Trail (Optional simple trail) */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[var(--color-comic-blue)] pointer-events-none z-[9998] opacity-50"
                style={{
                    x: cursorX,
                    y: cursorY,
                }}
                transition={{ delay: 0.1 }}
            />
        </>
    );
};
