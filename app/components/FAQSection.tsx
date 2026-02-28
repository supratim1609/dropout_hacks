"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const faqs = [
    {
        q: "Do I need a team?",
        a: "You can hack in a team of 2 to 5. We'll have team building events if you're a lone wolf looking for a pack.",
        color: "bg-[var(--color-comic-red)]"
    },
    {
        q: "Will there be food?",
        a: "We will keep you fed and hydrated. Pizza, snacks, and caffeine in unlimited supply.",
        color: "bg-[var(--color-comic-blue)]"
    },
    {
        q: "Can beginners join?",
        a: "Absolutely. We have a beginner track and mentors to help you level up.",
        color: "bg-[var(--color-comic-yellow)]"
    },
    {
        q: "What should I bring?",
        a: "Laptop, charger, toiletries (if you plan to stay overnight), and your spidey senses.",
        color: "bg-white"
    },
    {
        q: "Is it Free?",
        a: "100% free. No hidden fees to enter the Multiverse. Just bring your skills.",
        color: "bg-[#b200ff]" // Comic Violet
    },
];

const Flashcard = ({ faq, index }: { faq: any, index: number }) => {
    // Alternate tilt directions
    const rotation = index % 2 === 0 ? "rotate-2" : "-rotate-2";

    return (
        <div className="flex-shrink-0 w-80 md:w-96 snap-center perspective-1000">
            <motion.div
                whileHover={{ scale: 1.05, rotate: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`relative group cursor-pointer w-full h-80 ${rotation} transition-transform duration-300`}
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* The Card Container */}
                <div className="w-full h-full relative">
                    {/* Shadow Layer */}
                    <div className="absolute inset-0 bg-black rounded-lg top-3 left-3 -z-10" />

                    {/* Main Content Layer */}
                    <div className={`absolute inset-0 border-4 border-black rounded-lg overflow-hidden flex flex-col ${faq.color}`}>

                        {/* Comic Halftone Overlay for all except white/yellow for contrast */}
                        {faq.color !== 'bg-white' && (
                            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
                                backgroundImage: "radial-gradient(#000 2px, transparent 2px)",
                                backgroundSize: "16px 16px"
                            }} />
                        )}

                        {/* Top Banner (Question) */}
                        <div className="p-4 border-b-4 border-black bg-white flex-shrink-0 relative z-10">
                            <div className="absolute top-1 right-2 opacity-10">
                                <span className="text-4xl font-black">?</span>
                            </div>
                            <h3 className="text-xl md:text-2xl font-black font-[family-name:var(--font-comic)] uppercase leading-tight text-black">
                                {faq.q}
                            </h3>
                        </div>

                        {/* Body (Answer) */}
                        <div className="p-6 flex-grow flex items-center justify-center relative z-10 bg-white/95">
                            <p className="text-lg md:text-xl font-bold font-[family-name:var(--font-body)] text-gray-900 leading-snug">
                                {faq.a}
                            </p>
                        </div>

                        {/* Bottom Accent */}
                        <div className={`h-4 border-t-4 border-black w-full ${faq.color}`} />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export const FAQSection = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    return (
        <section id="faq" className="pt-12 pb-12 md:pt-16 md:pb-16 px-4 bg-[var(--color-comic-yellow)] relative overflow-hidden">
            {/* Background Dots Pattern */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
                backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
                backgroundSize: "20px 20px"
            }} />

            {/* Background Spidey Web Decor */}
            <div className="absolute top-0 right-0 opacity-10 pointer-events-none scale-150 origin-top-right transform translate-x-1/4 -translate-y-1/4">
                <svg width="400" height="400" viewBox="0 0 100 100" className="stroke-white stroke-1 fill-none">
                    <circle cx="100" cy="0" r="20" />
                    <circle cx="100" cy="0" r="40" />
                    <circle cx="100" cy="0" r="60" />
                    <circle cx="100" cy="0" r="80" />
                    <circle cx="100" cy="0" r="100" />
                    <path d="M100 0 L0 100 M100 0 L20 100 M100 0 L50 100 M100 0 L80 100 M100 0 L100 100" />
                </svg>
            </div>

            <div className="container mx-auto relative z-10">
                {/* Section Header */}
                <div className="flex justify-center mb-16 relative z-10">
                    <div className="relative inline-flex flex-col items-center">
                        <h2 className="text-6xl md:text-8xl lg:text-[8rem] font-black font-[family-name:var(--font-comic)] text-black tracking-tighter uppercase relative z-10 transform -rotate-2" style={{ textShadow: "4px 4px 0px var(--color-comic-red)" }}>
                            FA<span className="text-white" style={{ WebkitTextStroke: "3px black" }}>Q</span>S
                        </h2>
                        {/* Spider-man themed badge */}
                        <div className="absolute -bottom-6 -right-12 bg-[var(--color-comic-red)] text-white border-4 border-black px-4 py-1 font-black transform rotate-6 z-20 shadow-[4px_4px_0_black]">
                            CLASSIFIED INTEL
                        </div>
                    </div>
                </div>

                {/* Horizontal Scroll Container */}
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto gap-8 pb-12 pt-8 px-4 md:px-12 snap-x snap-mandatory scrollbar-hide hide-scrollbar w-full max-w-7xl mx-auto"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {faqs.map((faq, index) => (
                        <Flashcard key={index} faq={faq} index={index} />
                    ))}

                    {/* Spacer for ending scroll nicely */}
                    <div className="flex-shrink-0 w-4 md:w-12" />
                </div>

                {/* Scroll Indicator */}
                <div className="flex justify-center mt-4 opacity-50">
                    <div className="animate-bounce flex items-center space-x-2 text-black font-bold tracking-widest uppercase text-sm">
                        <span>← Swipe or Scroll →</span>
                    </div>
                </div>
            </div>
        </section>
    );
};
