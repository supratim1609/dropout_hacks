"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const SpideyCursor = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [clickFrame, setClickFrame] = useState(0);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 20, stiffness: 500, mass: 0.1 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (isTouchDevice) return;

        setIsVisible(true);

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 20);
            cursorY.set(e.clientY - 20);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isInteractive = target.closest('a, button, [role="button"], input, textarea, select, .cursor-pointer, [onclick]');
            setIsHovering(!!isInteractive);
        };

        const handleMouseDown = () => {
            setIsClicking(true);
            // 4-frame animation: open → blink → open → blink
            setClickFrame(0);
            const frames = [0, 1, 0, 1]; // 0 = open, 1 = blink
            let i = 0;
            const interval = setInterval(() => {
                i++;
                if (i < frames.length) {
                    setClickFrame(frames[i]);
                } else {
                    clearInterval(interval);
                    setIsClicking(false);
                    setClickFrame(0);
                }
            }, 80); // 80ms per frame
        };

        const handleMouseUp = () => {
            // Animation continues from mouseDown
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [cursorX, cursorY]);

    if (!isVisible) return null;

    // Determine which image to show
    const showWink = isClicking ? clickFrame === 1 : isHovering;
    const cursorImage = showWink ? "/spidey-cursor.png" : "/spidey-cursor-wink.png";

    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9999999]"
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
            }}
        >
            <img
                src={cursorImage}
                alt=""
                width={40}
                height={40}
                className="drop-shadow-[2px_2px_2px_rgba(0,0,0,0.5)]"
            />
        </motion.div>
    );
};
