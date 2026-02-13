"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export const ValentineSpecial = () => {
    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
            className="fixed bottom-6 right-6 z-[99999] pointer-events-auto"
        >
            <motion.a
                href="https://valentine-x-dropouthacks.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                whileTap={{ scale: 0.9 }}
                className="group relative flex items-center gap-3 bg-gradient-to-r from-pink-400 to-rose-500 text-white px-6 py-4 rounded-full shadow-[0_10px_30px_rgba(244,63,94,0.4)] border-2 border-white/50 backdrop-blur-sm no-underline transition-all"
            >
                {/* Floating Hearts Animation */}
                <div className="absolute inset-0 pointer-events-none overflow-visible">
                    {[1, 2, 3].map((i) => (
                        <motion.div
                            key={i}
                            animate={{
                                y: [-10, -50],
                                x: [0, i % 2 === 0 ? 20 : -20],
                                opacity: [1, 0],
                                scale: [0.5, 1.2],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.5,
                                ease: "easeOut",
                            }}
                            className="absolute top-0 right-0 text-pink-300"
                        >
                            <Heart size={16} fill="currentColor" />
                        </motion.div>
                    ))}
                </div>

                <div className="relative">
                    <Heart className="w-6 h-6 animate-pulse" fill="white" />
                </div>

                <div className="flex flex-col leading-none">
                    <span className="text-[10px] uppercase font-bold tracking-widest opacity-80 mb-1">Compatibility Check</span>
                    <span className="text-sm font-black uppercase whitespace-nowrap">Multiverse FLAMES Game</span>
                </div>

                {/* Secret Label on Hover */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="absolute -top-12 right-0 bg-white text-rose-500 text-[10px] font-bold px-3 py-1 rounded-full shadow-lg whitespace-nowrap border border-rose-100 pointer-events-none uppercase tracking-tighter"
                >
                    Scientific Result: Friends or 💍?
                </motion.div>
            </motion.a>
        </motion.div>
    );
};
