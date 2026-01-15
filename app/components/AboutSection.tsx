"use client";

import React from "react";
import { motion } from "framer-motion";
import { ComicPanel } from "./ComicPanel";

export const AboutSection = () => {
    return (
        <section className="py-20 px-4 bg-[var(--color-comic-yellow)] text-black relative overflow-hidden">
            {/* Background Dots Pattern (CSS Radial Gradient can be used here too, or just simple dots) */}
            <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
                backgroundSize: "20px 20px"
            }}>
            </div>

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-block bg-black text-white px-4 py-2 font-black text-xl mb-4 rotate-[-3deg] shadow-[4px_4px_0px_0px_white]">
                        ORIGIN STORY
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black font-[family-name:var(--font-comic)] mb-6 leading-none">
                        WHAT IS <br />
                        <span className="text-white text-stroke-black" style={{ WebkitTextStroke: "2px black" }}>DROPOUT HACKS?</span>
                    </h2>
                    <p className="text-xl font-bold font-[family-name:var(--font-body)] mb-6 border-l-4 border-black pl-4">
                        "With great code comes great responsibility." - Uncle Ben (probably)
                    </p>
                    <p className="text-lg mb-6 font-medium">
                        Dropout Hacks isn't just another hackathon. It's a collision of universes.
                        We're gathering the brightest minds in Kolkata to build solutions that defy the laws of physics (and legacy code).
                    </p>
                    <p className="text-lg font-medium">
                        Whether you're a Web3 wizard, an AI alchemist, or a Hardware hero,
                        this is your portal to glory. No sleep, unlimited coffee, and prizes
                        that are literally out of this world.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="grid grid-cols-2 gap-4"
                >
                    <ComicPanel variant="default" className="bg-white transform rotate-2">
                        <h3 className="text-4xl font-black font-[family-name:var(--font-comic)]">48</h3>
                        <p className="uppercase font-bold text-sm">Hours of Creation</p>
                    </ComicPanel>
                    <ComicPanel variant="default" className="bg-black text-white transform -rotate-2 border-white">
                        <h3 className="text-4xl font-black font-[family-name:var(--font-comic)] text-[var(--color-comic-red)]">1500+</h3>
                        <p className="uppercase font-bold text-sm">Hackers Assembling</p>
                    </ComicPanel>
                    <ComicPanel variant="default" className="bg-[var(--color-comic-blue)] text-white transform -rotate-1 border-black">
                        <h3 className="text-4xl font-black font-[family-name:var(--font-comic)]">₹ TBD</h3>
                        <p className="uppercase font-bold text-sm">Cash Prize Pool</p>
                    </ComicPanel>
                    <ComicPanel variant="default" className="bg-white transform rotate-3">
                        <h3 className="text-4xl font-black font-[family-name:var(--font-comic)]">∞</h3>
                        <p className="uppercase font-bold text-sm">Networking</p>
                    </ComicPanel>
                </motion.div>
            </div>
        </section>
    );
};
