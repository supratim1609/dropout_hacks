"use client";

import React from "react";
import Image from "next/image";
import { DanglingSpidey } from "./DanglingSpidey";
import { FloatingParticles } from "./FloatingParticles";
import { Instagram, Twitter, Linkedin, Mail } from "lucide-react";

// Simple custom SVG for Discord since lucide doesn't have it natively
const DiscordIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
    </svg>
);

export const Footer = () => {
    return (
        <footer className="bg-black text-white pt-12 border-t-[0.5vw] border-[var(--color-comic-blue)] relative overflow-hidden font-[family-name:var(--font-body)]">
            <FloatingParticles />

            {/* Dangling Spidey - Left Side */}
            <DanglingSpidey width={180} height={252} />

            <div className="container mx-auto relative z-10 hidden md:block px-4">
                {/* 3-Column Grid for Desktop */}
                <div className="grid grid-cols-1 lg:grid-cols-3 border-t border-b border-gray-800 lg:min-h-[300px]">

                    {/* LEFT COLUMN: Logo & Socials */}
                    <div className="flex flex-col items-center justify-center p-8 xl:p-12 border-b lg:border-b-0 lg:border-r border-gray-800 relative z-20">
                        <div className="flex flex-row items-center gap-6 xl:gap-8 justify-center w-full max-w-sm mt-12 md:mt-16 xl:mt-8 pl-4 md:pl-0">
                            <div className="w-[100px] xl:w-[120px] transition-transform hover:scale-105 cursor-pointer flex-shrink-0">
                                <Image
                                    src="/logo.png"
                                    alt="Dropout Hacks"
                                    width={200}
                                    height={60}
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex gap-4 text-white hover:[&>a]:text-[var(--color-comic-yellow)] [&>a]:transition-colors [&>a]:cursor-none">
                                <a href="https://discord.gg/hmU2TssPf9" target="_blank" rel="noopener noreferrer"><DiscordIcon /></a>
                                <a href="https://instagram.com/dropouthacks" target="_blank" rel="noopener noreferrer"><Instagram size={24} /></a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><Linkedin size={24} /></a>
                                <a href="mailto:hello@dropouthacks.com" target="_blank" rel="noopener noreferrer"><Mail size={24} /></a>
                                <a href="https://x.com/dropouthacks" target="_blank" rel="noopener noreferrer"><Twitter size={24} /></a>
                            </div>
                        </div>
                    </div>

                    {/* MIDDLE COLUMN: Links */}
                    <div className="flex flex-col border-b lg:border-b-0 lg:border-r border-gray-800 font-bold uppercase tracking-widest text-sm relative z-20">
                        <a href="#" className="flex-1 px-8 py-6 border-b border-gray-800 hover:bg-white hover:text-black hover:pl-10 transition-all flex justify-between items-center group cursor-none">
                            BRAND ASSETS <span className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
                        </a>
                        <a href="/rules" className="flex-1 px-8 py-6 border-b border-gray-800 hover:bg-white hover:text-black hover:pl-10 transition-all flex justify-between items-center group cursor-none">
                            CODE OF CONDUCT <span className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
                        </a>
                        <a href="/privacy" className="flex-1 px-8 py-6 border-b border-gray-800 hover:bg-white hover:text-black hover:pl-10 transition-all flex justify-between items-center group cursor-none">
                            PRIVACY POLICY <span className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
                        </a>
                        <a href="/timeline" className="flex-1 px-8 py-6 hover:bg-[var(--color-comic-red)] hover:text-white hover:pl-10 transition-all flex justify-between items-center group cursor-none">
                            EXPLORE ROADMAP <span className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
                        </a>
                    </div>

                    {/* RIGHT COLUMN: CTA Text */}
                    <div className="p-8 xl:p-12 flex flex-col justify-center relative z-20">
                        <h3 className="text-3xl xl:text-4xl font-normal leading-tight mb-4">
                            Ready to enter the multiverse?<br />
                            A magical journey awaits you.
                        </h3>
                        <p className="text-gray-400 text-sm mb-8 font-normal">
                            Register now! Or reach us if you have any queries.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 font-bold text-xs uppercase tracking-widest text-gray-300">
                            <a href="#" className="hover:text-[var(--color-comic-yellow)] transition-colors flex items-center gap-2 group cursor-none">
                                <span className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-white group-hover:text-[var(--color-comic-yellow)]">↗</span> VIEW BROCHURE
                            </a>
                            <a href="mailto:hello@dropouthacks.com" className="hover:text-[var(--color-comic-blue)] transition-colors flex items-center gap-2 group cursor-none">
                                <span className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-white group-hover:text-[var(--color-comic-blue)]">↗</span> CONTACT US
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Footer Version (Simplified to avoid cramped grid) */}
            <div className="md:hidden container mx-auto text-center relative z-20 flex flex-col items-center mt-12 px-4">
                <div className="mb-6 w-[200px]">
                    <Image
                        src="/logo.png"
                        alt="Dropout Hacks"
                        width={300}
                        height={100}
                        className="object-contain"
                    />
                </div>
                <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-white">
                    <a href="https://discord.gg/hmU2TssPf9" className="hover:text-[var(--color-comic-yellow)]"><DiscordIcon /></a>
                    <a href="https://instagram.com/dropouthacks"><Instagram size={24} /></a>
                    <a href="https://linkedin.com"><Linkedin size={24} /></a>
                    <a href="mailto:hello@dropouthacks.com"><Mail size={24} /></a>
                    <a href="https://x.com/dropouthacks"><Twitter size={24} /></a>
                </div>

                <div className="flex flex-col border-t border-b border-gray-800 font-bold uppercase tracking-widest text-xs w-full text-left mb-8">
                    <a href="#" className="px-4 py-4 border-b border-gray-800 flex justify-between">BRAND ASSETS <span>↗</span></a>
                    <a href="/rules" className="px-4 py-4 border-b border-gray-800 flex justify-between">CODE OF CONDUCT <span>↗</span></a>
                    <a href="/privacy" className="px-4 py-4 border-b border-gray-800 flex justify-between">PRIVACY POLICY <span>↗</span></a>
                    <a href="/timeline" className="px-4 py-4 text-[var(--color-comic-yellow)] flex justify-between">EXPLORE ROADMAP <span>↗</span></a>
                </div>
            </div>

            {/* Bottom Footer Copyright  */}
            <div className="py-6 flex flex-col items-center justify-center text-gray-500 text-xs text-center relative z-20 mt-4 px-4 font-bold border-t border-gray-900 md:border-none">
                <p>
                    © {new Date().getFullYear()} Dropout Hacks. All rights reserved across the multiverse. <br />
                    Built with 🕸️ and ❤️ in Kolkata.
                </p>
            </div>
        </footer>
    );
};
