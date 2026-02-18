"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export const LoadingScreen = ({ children }: { children: React.ReactNode }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Check if user has already seen the loader in this session
        const hasSeenLoader = sessionStorage.getItem("hasSeenLoader");

        if (hasSeenLoader) {
            setIsLoading(false);
            return;
        }

        // Determine loading duration
        const timer = setTimeout(() => {
            setIsLoading(false);
            sessionStorage.setItem("hasSeenLoader", "true");
        }, 3000); // 3 seconds duration for the logo reveal

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading && (
                    <motion.div
                        className="fixed inset-0 z-[99999] bg-[#050510] flex flex-col items-center justify-center overflow-hidden"
                        initial={{ opacity: 1 }}
                        exit={{
                            opacity: 0,
                            // slide up effect on exit
                            y: -20,
                            transition: { duration: 0.8, ease: "easeInOut" }
                        }}
                    >
                        {/* Background subtle effect */}
                        <div className="absolute inset-0 bg-gradient-radial from-[#1a1a2e] via-[#050510] to-[#000000] opacity-80" />

                        <div className="relative z-10 flex flex-col items-center">
                            {/* Logo Container */}
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
                                animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                                className="relative w-64 h-auto md:w-96"
                            >
                                <Image
                                    src="/logo.png"
                                    alt="Dropout Hacks"
                                    width={500}
                                    height={200}
                                    className="object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                                    priority
                                />
                            </motion.div>

                            {/* Loading Bar / Glitch Effect */}
                            <motion.div
                                className="mt-8 h-1 w-48 bg-gray-800 rounded-full overflow-hidden relative"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-[var(--color-comic-blue)] via-[var(--color-comic-red)] to-[var(--color-comic-yellow)]"
                                    initial={{ x: "-100%" }}
                                    animate={{ x: "0%" }}
                                    transition={{ duration: 2, ease: "easeInOut" }}
                                />
                            </motion.div>

                            <motion.p
                                className="mt-4 text-gray-400 font-[family-name:var(--font-comic)] tracking-widest text-sm"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: [0, 1, 0.5, 1] }}
                                transition={{ delay: 0.8, duration: 1.5, repeat: Infinity }}
                            >
                                INITIALIZING MULTIVERSE...
                            </motion.p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main content */}
            <div className={isLoading ? "h-screen overflow-hidden" : ""}>
                {children}
            </div>
        </>
    );
};
