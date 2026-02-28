"use client";

import React from "react";
import { motion } from "framer-motion";
import { TeamSphere } from "./TeamSphere";
import { TeamMember } from "../lib/googleSheets";

interface AboutSectionProps {
    members?: TeamMember[];
}

export const AboutSection = ({ members = [] }: AboutSectionProps) => {
    return (
        <section className="pt-32 md:pt-48 pb-32 md:pb-48 px-4 bg-[var(--color-comic-yellow)] text-black relative -mb-[4vw] z-10 overflow-hidden">
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
                    <h2 className="text-4xl md:text-6xl font-black font-[family-name:var(--font-comic)] mb-6 leading-none">
                        WHAT IS <br />
                        <span className="text-white text-stroke-black" style={{ WebkitTextStroke: "2px black" }}>DROPOUT HACKS?</span>
                    </h2>
                    <p className="text-lg font-bold font-[family-name:var(--font-body)] mb-6 border-l-4 border-black pl-4">
                        "With great code comes great responsibility." - Uncle Ben (probably)
                    </p>
                    <p className="text-base mb-6 font-medium">
                        Dropout Hacks isn't just another hackathon. It's a collision of universes.
                        We're gathering the brightest minds in Kolkata to build solutions that defy the laws of physics (and legacy code).
                    </p>
                    <p className="text-base font-medium">
                        Whether you're a Web3 wizard, an AI alchemist, or a Hardware hero,
                        this is your portal to glory. No sleep, unlimited coffee, and prizes
                        that are literally out of this world.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="w-full h-full relative flex items-center justify-center p-4 lg:p-0 min-h-[300px] lg:min-h-[400px]"
                >
                    <TeamSphere members={members} className="w-full max-w-[350px] lg:max-w-[450px] aspect-square" radiusScale={0.9} />
                </motion.div>
            </div>
        </section>
    );
};
