"use client";

import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

interface ComicPanelProps {
    children: React.ReactNode;
    className?: string;
    variant?: "default" | "primary" | "blue" | "purple" | "yellow";
    hoverEffect?: boolean;
}

export const ComicPanel: React.FC<ComicPanelProps> = ({
    children,
    className,
    variant = "default",
    hoverEffect = false,
}) => {
    const borderColors = {
        default: "border-white",
        primary: "border-[var(--color-comic-red)]",
        blue: "border-[var(--color-comic-blue)]",
        purple: "border-[var(--color-comic-purple)]",
        yellow: "border-[var(--color-comic-yellow)]",
    };

    return (
        <motion.div
            whileHover={hoverEffect ? { scale: 1.02, rotate: 1 } : {}}
            className={clsx(
                "relative bg-black/80 backdrop-blur-sm border-2 md:border-4 p-6",
                "shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] md:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]", // Default white shadow
                borderColors[variant],
                className
            )}
            style={{
                boxShadow:
                    variant === "default"
                        ? "8px 8px 0px 0px rgba(255,255,255,1)"
                        : `8px 8px 0px 0px var(--color-comic-${variant === "primary" ? "red" : variant})`,
            }}
        >
            {/* Corner Accents for that Techy/Comic feel */}
            <div className="absolute -top-1 -left-1 w-3 h-3 bg-white border border-black z-10" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-white border border-black z-10" />
            <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-white border border-black z-10" />
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-white border border-black z-10" />

            {children}
        </motion.div>
    );
};
