"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface DanglingSpideyProps {
    className?: string;
    width?: number;
    height?: number;
}

export const DanglingSpidey = ({
    className = "hidden lg:block absolute left-20 -top-40 z-20 pointer-events-none",
    width = 250,
    height = 350
}: DanglingSpideyProps) => {
    return (
        <div className={className}>
            {/* Swinging Container - Pivots from the very top */}
            <motion.div
                initial={{ rotate: 5 }}
                animate={{ rotate: -5 }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                }}
                style={{ originX: 0.5, originY: 0 }}
                className="flex flex-col items-center"
            >
                {/* The Web Line (Connecting ceiling to Spidey) */}
                <div className="w-0.5 h-[150px] bg-white opacity-60 shadow-[0_0_8px_rgba(255,255,255,0.8)]" />

                {/* The Real Spidey Image */}
                <div className="relative -mt-1">
                    <Image
                        src="/assets/spidey-punk.png"
                        alt="Spider-Punk Hanging"
                        width={width}
                        height={height}
                        className="drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] object-contain"
                        priority
                    />
                </div>
            </motion.div>
        </div>
    );
};
