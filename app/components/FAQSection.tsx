"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FloatingParticles } from "./FloatingParticles";

const faqs = [
    { q: "Do I need a team?", a: "You can hack solo or in a team of up to 4. We'll have team building events if you're a lone wolf looking for a pack." },
    { q: "Will there be food?", a: "We will keep you fed and hydrated. Pizza, snacks, and caffeine in unlimited supply." },
    { q: "Can beginners join?", a: "Absolutely. We have a beginner track and mentors to help you level up." },
    { q: "What should I bring?", a: "Laptop, charger, toiletries (if you plan to stay overnight), and your spidey senses." },
];

export const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 px-4 bg-[var(--color-comic-dark)] relative overflow-hidden">
            <FloatingParticles />
            <div className="container mx-auto max-w-3xl">
                <h2 className="text-5xl md:text-7xl font-black font-[family-name:var(--font-comic)] text-white text-center mb-12 text-shadow-comic">
                    FAQs
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-2 border-white bg-black">
                            <button
                                onClick={() => toggle(index)}
                                className="w-full p-4 flex justify-between items-center text-left text-white font-bold hover:bg-[var(--color-comic-red)] hover:text-white transition-colors cursor-none"
                            >
                                <span className="text-lg md:text-xl font-[family-name:var(--font-body)]">{faq.q}</span>
                                {activeIndex === index ? <Minus /> : <Plus />}
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-4 pt-0 text-gray-300 font-[family-name:var(--font-body)] border-t border-dashed border-gray-700">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
