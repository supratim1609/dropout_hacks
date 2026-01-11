"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

interface TeamMemberProps {
    name: string;
    role: string;
    image: string;
    socials?: {
        github?: string;
        linkedin?: string;
        twitter?: string;
        instagram?: string;
    };
    gender?: string;
}

export const TeamMemberCard = ({ name, role, image, socials, gender }: TeamMemberProps) => {
    // Determine glow color based on gender: F = Red, M (or other) = Blue
    const glowColor = gender === 'F' ? 'var(--color-comic-red)' : 'var(--color-comic-blue)';

    return (
        <motion.div
            className="group relative w-full h-full flex flex-col bg-black border-2 border-white shadow-[4px_4px_0_var(--color-comic-dark)] transition-shadow duration-300"
            whileHover={{
                y: -5,
                boxShadow: `8px 8px 0 ${glowColor}`
            }}
        >
            {/* Image Container */}
            <div className="relative aspect-[4/5] w-full overflow-hidden border-b-2 border-white grayscale-0 md:grayscale md:group-hover:grayscale-0 transition-all duration-500">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />

            </div>

            {/* Content Container */}
            <div className="p-6 relative flex-grow flex flex-col justify-between">
                <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-100 transition-opacity">
                    <span className="text-4xl">🕸️</span>
                </div>

                {/* Role Tag */}
                <div className="mb-2">
                    <span className="bg-[var(--color-comic-yellow)] text-black font-black text-xs px-2 py-1 uppercase border-2 border-black inline-block rotate-1">
                        {role}
                    </span>
                </div>

                {/* Name */}
                <h3 className="text-white font-black text-lg sm:text-xl md:text-3xl uppercase italic leading-none mb-3 md:mb-6">
                    {name}
                </h3>

                {/* Socials */}
                <div className="flex items-center gap-4">
                    {socials?.github && (
                        <a href={socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition-all">
                            <Github className="w-5 h-5" />
                        </a>
                    )}
                    {socials?.linkedin && (
                        <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0077b5] hover:scale-110 transition-all">
                            <Linkedin className="w-5 h-5" />
                        </a>
                    )}
                    {socials?.twitter && (
                        <a href={socials.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1DA1F2] hover:scale-110 transition-all">
                            <Twitter className="w-5 h-5" />
                        </a>
                    )}
                    {socials?.instagram && (
                        <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#E1306C] hover:scale-110 transition-all">
                            <Instagram className="w-5 h-5" />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};
