"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const DateRevealCard = () => {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbw59_TuT1YA9hBaRT0WJoozlcvoQ3sUaJkfmjKNZ5Qxv95oNETU-MbchfZ8z20oY-Ot/exec";

        try {
            await fetch(WEB_APP_URL, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            // With no-cors we can't check response.ok, so we assume success if no network error
            setStatus("success");
            setEmail("");
        } catch (error) {
            console.error("Error submitting email:", error);
            // Optionally set error state here, but for now just log it
            setStatus("idle");
        }
    };

    return (
        <div
            className="relative w-[320px] h-[420px] perspective-1000 group cursor-default"
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

                        {/* Auth Buttons */}
                        <div className="w-full relative space-y-4">
                            {/* 
                            <button
                                type="button"
                                onClick={() => setStatus("submitting")} // Placeholder
                                className="w-full bg-white text-black font-bold uppercase py-2.5 border-2 border-black shadow-[4px_4px_0_var(--color-comic-blue)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_var(--color-comic-blue)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all flex items-center justify-center gap-3 group/google"
                            >
                                <svg className="w-5 h-5 group-hover/google:rotate-12 transition-transform" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.21.81-.63z" fill="#FBBC05" />
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                </svg>
                                Continue with Google
                            </button>

                            <div className="flex items-center gap-2 text-gray-500">
                                <div className="h-px bg-gray-700 flex-1" />
                                <span className="text-[10px] font-mono uppercase">OR</span>
                                <div className="h-px bg-gray-700 flex-1" />
                            </div>
                            */}

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
