"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

export const SpideyCursor = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    // Direct 1:1 tracking to ensure zero lag
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    useEffect(() => {
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (isTouchDevice) return;

        setIsVisible(true);

        const moveCursor = (e: MouseEvent) => {
            // Offset by 20px (half of 40px) to center it perfectly on the true mouse point
            mouseX.set(e.clientX - 20);
            mouseY.set(e.clientY - 20);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isInteractive = target.closest('a, button, [role="button"], input, textarea, select, .cursor-pointer, [onclick]');
            setIsHovering(!!isInteractive);
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [mouseX, mouseY]);

    if (!isVisible) return null;

    // Rectifying logic: Using the original state where spidey-cursor.png is the "Action" state
    // and removing any "shitty" trails or crosshairs.
    const cursorImage = isHovering ? "/spidey-cursor.png" : "/spidey-cursor-wink.png";

    return (
        <>
            {/* Globally hide the system cursor to make Spidey the ONLY pointer */}
            <style dangerouslySetInnerHTML={{
                __html: `
                * { cursor: none !important; }
            ` }} />

            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999999]"
                style={{
                    x: mouseX,
                    y: mouseY,
                }}
            >
                <motion.img
                    src={cursorImage}
                    alt=""
                    width={40}
                    height={40}
                    initial={false}
                    animate={{ scale: isHovering ? 1.1 : 1 }}
                    className="drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]"
                />
            </motion.div>
        </>
    );
};
