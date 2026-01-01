"use client";

import React from "react";
import { motion } from "framer-motion";
import { ComicPanel } from "./ComicPanel";
import { Trophy, Award, Gift } from "lucide-react";

export const PrizesSection = () => {
    return (
        <section className="py-20 px-4 bg-[var(--color-comic-dark)] relative">
            <div className="container mx-auto text-center mb-16">
                <h2 className="text-5xl md:text-7xl font-black font-[family-name:var(--font-comic)] text-white mb-4 uppercase text-shadow-comic">
                    The Loot
                </h2>
                <p className="text-xl text-gray-400 font-[family-name:var(--font-body)]">
                    Rewards for the worthy.
                </p>
            </div>

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-end max-w-5xl">
                {/* 2nd Place */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="order-2 md:order-1"
                >
                    <ComicPanel variant="blue" className="flex flex-col items-center text-center h-[350px] justify-center">
                        <Trophy className="w-16 h-16 text-gray-300 mb-4" />
                        <h3 className="text-3xl font-black font-[family-name:var(--font-comic)] text-white mb-2">2ND PLACE</h3>
                        <p className="text-4xl font-bold text-[var(--color-comic-blue)] mb-4">₹25,000</p>
                        <p className="text-sm text-gray-300">Swag Bags + Certificates + Pro Licenses</p>
                    </ComicPanel>
                </motion.div>

                {/* 1st Place */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="order-1 md:order-2 mt-12 md:-mt-12"
                >
                    <ComicPanel variant="primary" className="flex flex-col items-center text-center h-[420px] justify-start pt-12 border-4 z-10 relative mx-4 md:mx-0">
                        <div className="absolute -top-10">
                            <Trophy className="w-24 h-24 text-[var(--color-comic-yellow)] drop-shadow-[4px_4px_0_rgba(0,0,0,1)]" />
                        </div>
                        <h3 className="text-5xl font-black font-[family-name:var(--font-comic)] text-[var(--color-comic-yellow)] mb-2 mt-8 text-shadow-comic">CHAMPION</h3>
                        <p className="text-6xl font-black text-white mb-6">₹50,000</p>
                        <p className="text-base text-gray-200 px-4">Instant Internship Interviews + Premium Swag + Coolest Trophy Ever</p>
                    </ComicPanel>
                </motion.div>

                {/* 3rd Place */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                    className="order-3"
                >
                    <ComicPanel variant="purple" className="flex flex-col items-center text-center h-[300px] justify-center">
                        <Award className="w-16 h-16 text-[#cd7f32] mb-4" />
                        <h3 className="text-3xl font-black font-[family-name:var(--font-comic)] text-white mb-2">3RD PLACE</h3>
                        <p className="text-4xl font-bold text-[var(--color-comic-purple)] mb-4">₹15,000</p>
                        <p className="text-sm text-gray-300">Swag Bags + Certificates</p>
                    </ComicPanel>
                </motion.div>
            </div>

            {/* Special Prizes */}
            <div className="container mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {["Best UI/UX", "Best AI Solution", "Cleanest Code", "Public Voting"].map((prize, idx) => (
                    <ComicPanel key={idx} variant="default" className="text-center py-6">
                        <Gift className="w-8 h-8 mx-auto text-[var(--color-comic-red)] mb-2" />
                        <h4 className="text-lg font-bold font-[family-name:var(--font-comic)]">{prize}</h4>
                        <p className="text-[var(--color-comic-yellow)] font-bold">₹5,000</p>
                    </ComicPanel>
                ))}
            </div>
        </section>
    );
};
