"use client";

import React from "react";
import { motion } from "framer-motion";

const partners = [
    { name: "GDG On Campus TMSL", logo: "/partners/gdg-tmsl.jpg" },
    { name: "SCECE", logo: "/partners/scece.png", bg: "black" },
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
    const clipPaths = [
        "polygon(0% 15%, 100% 0%, 85% 100%, 0% 85%)",
        "polygon(10% 0%, 90% 10%, 100% 90%, 0% 100%)",
        "polygon(0% 0%, 100% 20%, 90% 100%, 10% 80%)",
        "polygon(20% 0%, 100% 0%, 80% 100%, 0% 90%)",
    ];
    const clipPath = clipPaths[index % clipPaths.length];

    return (
        <motion.div
            whileHover={{
                scale: 1.1,
                zIndex: 50,
                filter: "drop-shadow(0 0 20px var(--color-comic-red))"
            }}
            className="flex-shrink-0 w-28 h-28 md:w-52 md:h-52 mx-2 md:mx-4 group relative cursor-crosshair"
        >
            <div
                className={`absolute inset-0 ${bg === 'black' ? 'bg-black' : 'bg-white'} border-2 md:border-4 border-black md:group-hover:bg-black transition-colors duration-500 overflow-hidden`}
                style={{ clipPath }}
            >
                <div className="absolute inset-2 md:inset-4 flex items-center justify-center">
                    <img
                        src={logo}
                        alt="Partner"
                        className="w-full h-full object-contain md:grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                </div>
            </div>
        </motion.div>
    );
};

const MarqueeRow = ({ items, direction = "left", speed = 30 }: { items: any[], direction?: "left" | "right", speed?: number }) => {
    return (
        <div className="flex overflow-hidden py-4 md:py-8 select-none">
            <motion.div
                className="flex whitespace-nowrap"
                animate={{ x: direction === "left" ? [0, -1000] : [-1000, 0] }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: speed,
                        ease: "linear",
                    },
                }}
            >
                {[...items, ...items, ...items].map((item, idx) => (
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
        <section className="py-16 md:py-24 bg-black overflow-hidden relative">
            {/* Background Narrative */}

            <div className="container mx-auto px-4 relative z-10 text-center mb-8 md:mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="relative inline-block"
                >
                    <h2 className="text-4xl sm:text-6xl md:text-8xl font-black font-[family-name:var(--font-comic)] uppercase leading-none tracking-tighter text-white drop-shadow-[4px_4px_0_var(--color-comic-red)] md:drop-shadow-[8px_8px_0_var(--color-comic-red)]">
                        COMMUNITY <span className="text-[var(--color-comic-yellow)]">PARTNERS</span>
                    </h2>
                    <div className="absolute -top-3 -right-6 md:-top-4 md:-right-8 bg-white text-black px-2 py-0.5 md:py-1 font-black transform rotate-12 border-2 border-black text-[10px] md:text-sm">
                        OUR ALLIANCE
                    </div>
                </motion.div>
            </div>

            {/* Dimensional Shard Marquee */}
            <div className="space-y-2 md:space-y-4">
                <MarqueeRow items={row1} direction="left" speed={20} />
                <MarqueeRow items={row2} direction="right" speed={25} />
            </div>

            {/* The Background Kinetic Text */}
            <div className="absolute top-1/2 left-0 w-full pointer-events-none -translate-y-1/2 opacity-[0.03]">
                <div className="text-[20vw] font-black uppercase italic whitespace-nowrap leading-none">
                    MULTIVERSE ALLIANCE MULTIVERSE
                </div>
            </div>

            {/* CTA */}

            <div className="absolute bottom-4 left-4 flex gap-2 opacity-30">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <span className="text-[8px] uppercase tracking-[0.5em] text-white font-mono">Multidimensional connection stable</span>
            </div>
        </section>
    );
};
