"use client";

import React from "react";
import { motion } from "framer-motion";

export default function JudgeMentorPage() {
    return (
        <main className="min-h-screen pt-24 pb-20 px-4 relative bg-[var(--color-comic-yellow)] overflow-hidden text-black">
            {/* Subtle halftone dots overlay to match design */}
            <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(#000 0.8px, transparent 0.8px)", backgroundSize: "24px 24px", opacity: 0.06 }} />
            <div className="container mx-auto max-w-5xl relative z-10">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-black font-[family-name:var(--font-comic)] uppercase mb-4 break-words text-black" style={{ textShadow: "4px 4px 0px var(--color-comic-red)" }}>
                        Judge &amp; Mentor
                    </h1>
                    <p className="text-lg md:text-xl text-black/70 max-w-3xl mx-auto font-[family-name:var(--font-body)] px-4 font-bold">
                        The Judge and Mentor is the same person — one individual who both evaluates projects and guides teams throughout the event.
                    </p>
                </motion.div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
                    <section className="bg-[#fff6e6] border-2 border-black p-8 md:p-10 w-full">
                        <h2 className="mb-6">
                            <span className="text-4xl md:text-5xl font-black text-black">Role &amp; Responsibilities</span>
                        </h2>
                        <ul className="list-disc pl-5 space-y-4 text-black/80 font-[family-name:var(--font-body)] text-base md:text-lg">
                            <li>Evaluate projects based on innovation, feasibility, and real-world impact using a defined rubric.</li>
                            <li>Guide teams with domain expertise, technical knowledge, and actionable real-world insights.</li>
                            <li>Provide clear, constructive feedback and help participants refine their scope and presentations.</li>
                            <li>Attend judging sessions and be available for mentor check-ins throughout the hackathon.</li>
                            <li>Encourage creative thinking, help teams overcome blockers, and offer product and technical advice.</li>
                            <li>Foster a positive, inclusive environment that motivates all participants to give their best.</li>
                        </ul>
                    </section>
                </motion.div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-8 text-center">
                    <a href="https://luma.com/31ewiuo5" target="_blank" rel="noopener noreferrer" className="inline-block bg-black text-[var(--color-comic-yellow)] text-2xl md:text-3xl font-black font-[family-name:var(--font-comic)] uppercase px-14 py-5 border-4 border-black shadow-[10px_10px_0_var(--color-comic-red)] hover:translate-x-1 hover:translate-y-1 transition-all">
                        Apply to be a Judge &amp; Mentor
                    </a>
                    <p className="text-sm text-black/60 mt-3">Anyone can apply — we welcome diverse expertise and backgrounds.</p>
                </motion.div>
            </div>
        </main>
    );
}
