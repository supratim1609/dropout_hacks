"use client";

import React from "react";
import Image from "next/image";
import { DanglingSpidey } from "./DanglingSpidey";
import FooterCanvas from "./FooterCanvas";
import { Instagram, Twitter, Linkedin, Mail, ArrowUpRight } from "lucide-react";

// (Skipping Discord icon definition to keep diff short but replacing from line 1 through the Left Panel content)

const DiscordIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
    </svg>
);

export const Footer = () => {
    return (
        <footer className="bg-[var(--color-comic-dark)] text-white relative overflow-hidden font-[family-name:var(--font-body)] pb-12">
            {/* Top Slanted Divider Cut */}
            <div
                className="absolute inset-x-0 top-0 h-16 md:h-32 bg-[var(--color-comic-yellow)] pointer-events-none z-10"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 10%, 0 100%)" }}
            />
            <div
                className="absolute inset-x-0 top-0 h-16 md:h-32 bg-[var(--color-comic-red)] pointer-events-none z-0"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 0)" }}
            />

            {/* Giant Dots Halftone Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
                backgroundImage: "radial-gradient(#fff 4px, transparent 4px)",
                backgroundSize: "40px 40px",
                backgroundPosition: "0 0, 20px 20px"
            }} />

            {/* Dangling Spidey */}
            <div className="pt-[8vw]">
                <DanglingSpidey width={120} height={168} />
            </div>

            <div className="container mx-auto px-4 relative z-20">

                {/* Asymmetrical Comic Panel Grid layout */}
                <div className="flex flex-col xl:flex-row items-stretch justify-center gap-6 mt-10 max-w-7xl mx-auto">

                    {/* Left Panel: Primary Logo Block */}
                    <div className="flex-1 bg-white text-black border-4 border-black p-6 md:p-8 relative group transform md:-rotate-1 hover:rotate-0 transition-transform shadow-[8px_8px_0_var(--color-comic-blue)] flex flex-col justify-between">
                        {/* Halftone subtle inside */}
                        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(#000 1.5px, transparent 1.5px)", backgroundSize: "12px 12px" }} />

                        <div className="relative z-10 w-full mb-6 flex justify-between items-start">
                            <Image
                                src="/logo.png"
                                alt="Dropout Hacks"
                                width={200}
                                height={60}
                                className="object-contain"
                            />
                            {/* Animated badge corner */}
                            <div className="w-16 h-16 bg-[var(--color-comic-yellow)] rounded-full border-4 border-black flex items-center justify-center -rotate-12 animate-[spin_10s_linear_infinite] shrink-0">
                                <span className="font-black text-xs text-center leading-tight">V1.0<br />LIVE</span>
                            </div>
                        </div>

                        {/* Interactive Drawing Canvas */}
                        <div className="flex-1 w-full min-h-[160px] relative z-10 flex flex-col">
                            <FooterCanvas />
                        </div>

                        <div className="relative z-10 mt-auto">
                            <h4 className="font-black font-[family-name:var(--font-comic)] text-xl uppercase tracking-tighter">Enter the Multiverse</h4>
                        </div>

                        {/* Decorative Top Left Strip */}
                        <div className="absolute top-0 left-0 w-24 h-4 bg-[var(--color-comic-red)] border-b-4 border-r-4 border-black" />
                    </div>

                    {/* Middle Column of Smaller Stacked Panels */}
                    <div className="flex flex-col gap-6 w-full xl:w-80">
                        {/* Top Link Panel */}
                        <div className="bg-[var(--color-comic-yellow)] text-black border-4 border-black p-6 relative group transform md:rotate-1 hover:rotate-0 transition-transform shadow-[6px_6px_0_#FFF]">
                            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "radial-gradient(#000 1.5px, transparent 1.5px)", backgroundSize: "12px 12px" }} />
                            <ul className="space-y-4 font-black tracking-wider uppercase text-sm relative z-10">
                                <li><a href="#" className="flex justify-between items-center hover:translate-x-2 transition-transform cursor-none">Brand Kit <ArrowUpRight size={18} /></a></li>
                                <li className="border-t-2 border-dashed border-black/30 pt-4"><a href="/rules" className="flex justify-between items-center hover:translate-x-2 transition-transform cursor-none">Code of Conduct <ArrowUpRight size={18} /></a></li>
                                <li className="border-t-2 border-dashed border-black/30 pt-4"><a href="/privacy" className="flex justify-between items-center hover:translate-x-2 transition-transform cursor-none">Privacy Policy <ArrowUpRight size={18} /></a></li>
                            </ul>
                        </div>

                        {/* Bottom CTA Button Panel */}
                        <div className="bg-[#b200ff] text-white border-4 border-black p-6 flex-grow flex flex-col justify-between relative group transform md:-rotate-2 hover:rotate-0 transition-transform shadow-[6px_6px_0_var(--color-comic-red)] cursor-none">
                            <a href="https://dropouthacks.devfolio.co/" target="_blank" rel="noopener noreferrer" className="block relative z-10">
                                <span className="font-[family-name:var(--font-comic)] font-black text-2xl uppercase tracking-tighter block mb-2 group-hover:scale-105 transition-transform origin-left">Register.</span>
                                <p className="font-bold text-sm mb-6">Secure your spot in the timeline.</p>
                                <ArrowUpRight strokeWidth={3} className="absolute right-0 top-0 opacity-50 w-8 h-8 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
                            </a>

                            {/* Socials moved here */}
                            <div className="relative z-10 mt-auto pt-4 border-t-2 border-black/20 flex gap-4 justify-between items-center">
                                <a href="https://discord.gg/hmU2TssPf9" className="hover:text-[var(--color-comic-yellow)] transition-colors transform hover:scale-110"><DiscordIcon /></a>
                                <a href="https://instagram.com/dropouthacks" className="hover:text-[var(--color-comic-yellow)] transition-colors transform hover:scale-110"><Instagram strokeWidth={2.5} size={22} /></a>
                                <a href="https://linkedin.com" className="hover:text-[var(--color-comic-yellow)] transition-colors transform hover:scale-110"><Linkedin strokeWidth={2.5} size={22} /></a>
                                <a href="mailto:hello@dropouthacks.com" className="hover:text-[var(--color-comic-yellow)] transition-colors transform hover:scale-110"><Mail strokeWidth={2.5} size={22} /></a>
                                <a href="https://x.com/dropouthacks" className="hover:text-[var(--color-comic-yellow)] transition-colors transform hover:scale-110"><Twitter strokeWidth={2.5} size={22} /></a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Final Credits Row */}
                <div className="mt-10 pt-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-gray-500 tracking-wider">
                    <p>© {new Date().getFullYear()} Dropout Hacks.</p>
                    <p className="text-gray-400">All rights reserved across the multiverse.</p>
                    <p className="flex items-center gap-1">Built with 🕸️ and ❤️ in Kolkata.</p>
                </div>

            </div>
        </footer>
    );
};
