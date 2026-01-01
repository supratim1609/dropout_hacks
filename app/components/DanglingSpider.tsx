"use client";

import React from "react";
import { motion } from "framer-motion";

export const DanglingSpider = () => {
    return (
        <motion.div
            className="absolute top-0 right-[10%] z-40 hidden md:block" // Hidden on mobile, positioned relative to parent
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 2
            }}
        >
            <motion.div
                className="flex flex-col items-center origin-top"
                animate={{ rotate: [5, -5, 5] }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                {/* The Thread */}
                <div className="w-[2px] h-[150px] bg-white opacity-50"></div>

                {/* The Spider */}
                <motion.div
                    className="relative"
                    whileHover={{ y: -50 }} // Climb up slightly on hover
                >
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="5" fill="black" />
                        <path d="M12 7V17" />
                        {/* Legs */}
                        <path d="M12 12L8 8" />
                        <path d="M12 12L16 8" />
                        <path d="M12 12L7 11" />
                        <path d="M12 12L17 11" />
                        <path d="M12 12L8 16" />
                        <path d="M12 12L16 16" />
                        <path d="M12 12L7 13" />
                        <path d="M12 12L17 13" />
                    </svg>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};
