"use client";

import React from "react";
import Image from "next/image";
import { DanglingSpidey } from "./DanglingSpidey";
import { FloatingParticles } from "./FloatingParticles";

export const Footer = () => {
    return (
        <footer className="bg-black text-white py-12 border-t-4 border-[var(--color-comic-blue)] relative overflow-hidden">
            <FloatingParticles />
            {/* Dangling Spidey - Left Side */}
            <DanglingSpidey width={180} height={252} />

            <div className="container mx-auto text-center relative z-10 flex flex-col items-center">
                <div className="mb-6 w-[200px] md:w-[250px]">
                    <Image
                        src="/logo.png"
                        alt="Dropout Hacks"
                        width={300}
                        height={100}
                        className="object-contain"
                    />
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-8 font-bold font-[family-name:var(--font-body)] w-full">
                    <a href="https://instagram.com/dropouthacks" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-comic-red)] cursor-none py-2">Instagram</a>
                    <a href="https://x.com/dropouthacks" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-comic-blue)] cursor-none py-2">X</a>
                    <a href="https://discord.gg/hmU2TssPf9" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-comic-purple)] cursor-none py-2">Discord</a>
                    {/* <a href="#" className="hover:text-[var(--color-comic-yellow)] cursor-none py-2">LinkedIn</a> */}

                    {/* Vertical Divider (Desktop Only) */}
                    <div className="hidden md:block w-px h-6 bg-gray-600"></div>

                    <a href="/rules" className="hover:text-white cursor-none py-2">Rules / CoC</a>
                </div>
                <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} Dropout Hacks. All rights reserved across the multiverse. <br />
                    Built with 🕸️ and ❤️ in Kolkata.
                </p>
            </div>
        </footer>
    );
};
