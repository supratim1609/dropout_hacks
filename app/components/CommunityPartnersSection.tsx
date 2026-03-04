"use client";

import React from "react";
import { motion } from "framer-motion";

const partners = [
    { name: "GDG On Campus TMSL", logo: "/partners/gdg-tmsl.jpg" },
    { name: "NooBuild", logo: "/partners/noobuild.jpg", bg: "black" },
    { name: "React Kolkata", logo: "/partners/react-kolkata.png", bg: "black" },
    { name: "Samarth", logo: "/partners/samarth.png" },
    { name: "Bit-2-Byte", logo: "/partners/bit-2-byte.jpeg" },
    { name: "DevDotCom", logo: "/partners/devdotcom.jpeg", bg: "black" },
    { name: "GDG On Campus AOT", logo: "/partners/gdg-aot.png" },
    { name: "Last Minute Engineering", logo: "/partners/last-minute-engineering.png" },
    { name: "Shadow Script", logo: "/partners/shadow-script.png", bg: "black" },
    { name: "TAL", logo: "/partners/tal.png", bg: "black" },
    { name: "Magistics", logo: "/partners/magistics.jpg" },
    { name: "RCCIIT ACM", logo: "/partners/acm-rccit.png" },
    { name: "Partner Pratik", logo: "/partners/partner-pratik.png" },
    { name: "Partner Prattyan", logo: "/partners/partner-prattyan.jpeg" },
    { name: "Partner Deb", logo: "/partners/partner-deb.jpg" },
    { name: "Samarth Metal", logo: "/partners/samarth-metal.png" },
];

const Shard = ({ logo, index, bg }: { logo: string, index: number, bg?: string }) => {
    return (
        <motion.div
            whileHover={{
                scale: 1.05,
                zIndex: 50,
                rotate: 0
            }}
            className="flex-shrink-0 w-24 h-24 md:w-36 md:h-36 mx-2 md:mx-4 group relative cursor-crosshair"
        >
            <div
                className={`absolute inset-0 ${bg === 'black' ? 'bg-black' : 'bg-white'} border-2 md:border-4 border-black transition-colors duration-500 overflow-hidden rounded-sm md:rounded-md flex items-center justify-center`}
            >
                <div className="w-full h-full flex items-center justify-center p-3 md:p-5">
                    <img
                        src={logo}
                        alt="Partner"
                        className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                </div>
            </div>
        </motion.div>
    );
};

const MarqueeRow = ({ items, direction = "left", speed = 30 }: { items: any[], direction?: "left" | "right", speed?: number }) => {
    return (
        <div className="flex overflow-hidden py-4 md:py-8 select-none w-full">
            <motion.div
                className="flex w-max"
                animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: speed,
                        ease: "linear",
                    },
                }}
            >
                {/* 4 sets of items ensure it can fill ultra-wide screens. Shifting by 50% shifts exactly 2 sets for a perfect loop. */}
                {[...items, ...items, ...items, ...items].map((item, idx) => (
                    <Shard key={idx} logo={item.logo} index={idx} bg={item.bg} />
                ))}
            </motion.div>
        </div>
    );
};

export const CommunityPartnersSection = () => {
    const row1 = partners.slice(0, 9);
    const row2 = partners.slice(9);

    return (
        <section className="relative pt-32 md:pt-40 pb-[12vw] overflow-hidden -mt-[16vw] md:-mt-[12vw] z-20">
            {/* Comic Panel Diagonal Cut Backgrounds */}
            <div
                className="absolute inset-x-0 top-0 bottom-0 bg-[var(--color-comic-red)] pointer-events-none z-0 hover:bg-yellow-400 transition-colors duration-1000"
                style={{ clipPath: "polygon(0 6vw, 100% 0, 100% 100%, 0 100%)" }}
            />
            <div
                className="absolute inset-x-0 top-[1vw] md:top-[0.8vw] bottom-0 bg-[var(--color-comic-yellow)] pointer-events-none z-0"
                style={{ clipPath: "polygon(0 6vw, 100% 0, 100% 100%, 0 100%)" }}
            >
                <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
                    backgroundSize: "20px 20px"
                }}></div>
            </div>

            {/* Background Narrative */}
            <div className="container mx-auto px-4 relative z-10 text-center mb-12 md:mb-16 mt-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="relative inline-block"
                >
                    <h2 className="text-5xl sm:text-7xl md:text-[7rem] font-black font-[family-name:var(--font-comic)] uppercase leading-none text-black mb-4">
                        COMMUNITY <span className="text-white" style={{ WebkitTextStroke: "2px black" }}>PARTNERS</span>
                    </h2>
                    <div className="absolute -top-3 -right-6 md:-top-4 md:-right-8 bg-black text-white px-2 py-0.5 md:py-1 font-black transform rotate-12 border-2 border-black text-[10px] md:text-sm">
                        OUR ALLIANCE
                    </div>
                </motion.div>
            </div>

            {/* Dimensional Shard Marquee */}
            <div className="space-y-2 md:space-y-4">
                <MarqueeRow items={row1} direction="left" speed={20} />
                <MarqueeRow items={row2} direction="right" speed={25} />
            </div>

            {/* The Background Kinetic Text (Watermark Removed) */}

            {/* CTA */}

            <div className="absolute bottom-4 left-4 flex gap-2 opacity-30">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <span className="text-[8px] uppercase tracking-[0.5em] text-white font-mono">Multidimensional connection stable</span>
            </div>
        </section>
    );
};
