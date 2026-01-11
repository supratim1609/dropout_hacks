"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const DateRevealCard = () => {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        
        // Simulate submission
        setTimeout(() => {
            setStatus("success");
            setEmail("");
        }, 1500);
    };

    return (
        <div
            className="relative w-[350px] h-[520px] perspective-1000 group cursor-default"
        >
            <motion.div
                className="w-full h-full relative preserve-3d transition-all duration-500 ease-out transform group-hover:rotate-y-6 group-hover:rotate-x-6"
            >
                {/* Card Container */}
                <div className="absolute inset-0 bg-black border-4 border-white shadow-[8px_8px_0_var(--color-comic-dark)] flex flex-col items-center p-8 overflow-hidden">

                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--color-comic-blue)_2px,_transparent_2px)] bg-[length:20px_20px]" />

                    {/* Header Label */}
                    <div className="w-full flex justify-center mb-8">
                        <span className="px-4 py-1 text-xs font-black tracking-[0.2em] border-2 uppercase bg-red-600 text-white border-black animate-pulse">
                            TOP SECRET
                        </span>
                    </div>

                    {/* Central Content */}
                    <div className="z-10 flex flex-col items-center w-full gap-4">
                        <h2 className="text-gray-400 font-mono text-xs tracking-widest uppercase">Mission Date</h2>
                        {/* Redacted Date */}
                        <div className="relative mb-6 group/date">
                            <h3 className="text-5xl font-black italic uppercase text-white drop-shadow-[2px_2px_0_var(--color-comic-blue)] tracking-tighter blur-md select-none transition-all duration-300">
                                MAR' 28-29 2026
                            </h3>
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300">
                                <span className="bg-red-600 text-white font-black text-xl px-2 rotate-[-10deg] border-2 border-white shadow-[2px_2px_0_black]">
                                    REDACTED
                                </span>
                            </div>
                        </div>

                        {/* Email Form */}
                        <div className="w-full relative">
                            <AnimatePresence mode="wait">
                                {status === "success" ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="bg-green-900/50 border-2 border-green-500 p-4 text-center"
                                    >
                                        <p className="text-green-400 font-mono font-bold text-sm">ACCESS REQUESTED</p>
                                        <p className="text-white text-xs mt-1">Stand by for briefing.</p>
                                    </motion.div>
                                ) : status === "error" ? (
                                    <motion.div
                                        key="error"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="bg-red-900/50 border-2 border-red-500 p-4 text-center"
                                    >
                                        <p className="text-red-400 font-mono font-bold text-sm">CONNECTION FAILED</p>
                                        <p className="text-white text-xs mt-1">Try again later.</p>
                                        <button
                                            onClick={() => setStatus("idle")}
                                            className="mt-3 text-xs text-gray-400 hover:text-white underline"
                                        >
                                            Retry
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        onSubmit={handleSubmit}
                                        className="space-y-4"
                                    >
                                        <div className="space-y-1">
                                            <input
                                                type="email"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="enter@multiverse.com"
                                                className="w-full bg-gray-900 border-2 border-gray-700 text-white px-4 py-2.5 font-mono text-sm focus:border-[var(--color-comic-blue)] focus:outline-none transition-colors placeholder:text-gray-500"
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={status === "submitting"}
                                            className="w-full bg-zinc-800 text-white font-bold uppercase py-2.5 border-2 border-gray-600 hover:bg-zinc-700 transition-colors disabled:opacity-50 text-xs tracking-wider flex items-center justify-center gap-2"
                                        >
                                            {status === "submitting" ? (
                                                <span className="animate-pulse">PROCESSING...</span>
                                            ) : (
                                                <>NOTIFY ME</>
                                            )}
                                        </button>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Corner Accents */}
                    <div className="absolute bottom-4 left-4 text-[10px] font-mono text-gray-500">
                        AUTH_REQ
                    </div>
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[var(--color-comic-blue)]" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[var(--color-comic-red)]" />
                </div>
            </motion.div>
        </div>
    );
};
