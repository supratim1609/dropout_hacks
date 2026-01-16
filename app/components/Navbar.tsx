"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, Trophy, Calendar, Users, HelpCircle, HandHeart, Lock, Map } from "lucide-react";
import clsx from "clsx";

const navLinks = [
    { name: "Home", icon: <Home className="w-6 h-6" />, href: "/" },
    { name: "Roadmap", icon: <Map className="w-6 h-6" />, href: "/#roadmap" },
    { name: "Tracks", icon: <Users className="w-6 h-6" />, href: "/#tracks" },
    { name: "Team", icon: <Users className="w-6 h-6" />, href: "/team" },
    { name: "Volunteer", icon: <HandHeart className="w-6 h-6" />, href: "/volunteer" },
    { name: "FAQ", icon: <HelpCircle className="w-6 h-6" />, href: "/#faq" },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Top Bar */}
            <nav className="fixed top-0 left-0 right-0 z-[9999] p-6 flex justify-between items-center pointer-events-none">
                {/* Logo - Pointer events auto to allow clicking */}
                {/* Logo - Pointer events auto to allow clicking */}
                <Link href="/" className="pointer-events-auto cursor-none">
                    <div className="transform -rotate-1 hover:rotate-2 transition-transform w-[180px]">
                        <Image
                            src="/logo.png"
                            alt="Dropout Hacks"
                            width={200}
                            height={80}
                            className="object-contain drop-shadow-[4px_4px_0_rgba(0,0,0,0.5)]"
                        />
                    </div>
                </Link>

                {/* Hamburger Button */}
                <button
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                    className="pointer-events-auto bg-[var(--color-comic-blue)] text-black border-2 border-black p-2 hover:bg-white transition-colors shadow-[4px_4px_0_black] cursor-none"
                >
                    {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                </button>
            </nav>

            {/* The Web Pull Animation & Sidebar */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.8 }}
                            exit={{ opacity: 0 }}
                            onClick={toggleMenu}
                            className="fixed inset-0 bg-black z-[98]"
                        />

                        {/* Spider-Man Animation Container - DESKTOP ONLY */}
                        {windowWidth >= 768 && (
                            <div className="fixed inset-0 pointer-events-none z-[101] overflow-visible">
                                {/* The Spider-Man (Entering from left) */}
                                <motion.div
                                    initial={{ x: -200, y: window.innerHeight / 2 }}
                                    animate={{ x: -50 }}
                                    exit={{ x: -200 }}
                                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                                    className="absolute"
                                    style={{ top: 0, left: 0 }}
                                >
                                    <svg width="200" height="200" viewBox="0 0 200 200" className="transform -rotate-90 drop-shadow-xl">
                                        {/* Head Shape */}
                                        <path d="M100 30 C 60 30 35 70 35 100 C 35 140 65 170 100 175 C 135 170 165 140 165 100 C 165 70 140 30 100 30 Z" fill="#D80027" stroke="black" strokeWidth="3" />

                                        {/* Webbing (Subtle) */}
                                        <g stroke="black" strokeWidth="1" opacity="0.3" fill="none">
                                            <path d="M100 100 L100 30" />
                                            <path d="M100 100 L165 100" />
                                            <path d="M100 100 L35 100" />
                                            <path d="M100 100 L145 155" />
                                            <path d="M100 100 L55 155" />
                                            <path d="M100 100 L145 45" />
                                            <path d="M100 100 L55 45" />
                                            <ellipse cx="100" cy="100" rx="20" ry="25" />
                                            <ellipse cx="100" cy="100" rx="40" ry="50" />
                                            <ellipse cx="100" cy="100" rx="60" ry="70" />
                                        </g>

                                        {/* The Eyes (Iconic) */}
                                        {/* Left Eye */}
                                        <path d="M85 80 Q 50 70 55 110 C 60 130 80 120 90 110 C 95 105 90 85 85 80 Z" fill="white" stroke="black" strokeWidth="4" />
                                        {/* Right Eye */}
                                        <path d="M115 80 Q 150 70 145 110 C 140 130 120 120 110 110 C 105 105 110 85 115 80 Z" fill="white" stroke="black" strokeWidth="4" />

                                        {/* Hand/Web-shooter connecting to line */}
                                        <path d="M100 175 L100 200" stroke="white" strokeWidth="4" />
                                    </svg>
                                </motion.div>

                                {/* The Web Line (Connecting Spidey to Menu) */}
                                <svg className="absolute inset-0 w-full h-full">
                                    <motion.line
                                        x1="150" // Adjusted to match Spidey's web shooter position (Div X: -50 + Local X: 200)
                                        y1={window.innerHeight / 2 + 100} // Adjusted to match Spidey's vertical center (Div Y + Local Y: 100)
                                        x2={windowWidth - 400}
                                        y2={window.innerHeight / 2}
                                        stroke="white"
                                        strokeWidth="4"
                                        initial={{ pathLength: 0, opacity: 1 }}
                                        animate={{ pathLength: 1, opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </svg>
                            </div>
                        )}

                        {/* Sidebar/Menu */}
                        <motion.div
                            initial={windowWidth < 768 ? { y: "-100%" } : { x: "100%" }}
                            animate={windowWidth < 768 ? { y: 0 } : { x: 0 }}
                            exit={windowWidth < 768 ? { y: "-100%" } : { x: "100%" }}
                            transition={{
                                type: "spring",
                                damping: 15,
                                stiffness: 100,
                                delay: windowWidth < 768 ? 0 : 0.2
                            }}
                            className={clsx(
                                "fixed bg-black z-[100] p-8 flex flex-col justify-center shadow-[-20px_0_40px_rgba(0,0,0,1)]",
                                windowWidth < 768
                                    ? "inset-0 w-full h-full border-b-4 border-[var(--color-comic-red)]" // Mobile: Fullscreen, Top-down
                                    : "top-0 right-0 h-full w-[400px] border-l-4 border-[var(--color-comic-red)]" // Desktop: Sidebar, Right-pull
                            )}
                        >
                            {/* Close Button for Mobile */}
                            {windowWidth < 768 && (
                                <button
                                    onClick={toggleMenu}
                                    className="absolute top-6 right-6 text-white border-2 border-white p-2 hover:bg-[var(--color-comic-red)] transition-colors"
                                >
                                    <X className="w-8 h-8" />
                                </button>
                            )}

                            {/* Background Pattern for Sidebar */}
                            <div className="absolute inset-0 bg-halftone opacity-20 pointer-events-none" />

                            <div className="space-y-6 relative z-10">
                                {navLinks.map((link, idx) => (
                                    <motion.a
                                        key={idx}
                                        href={link.href}
                                        initial={windowWidth < 768 ? { y: -20, opacity: 0 } : { x: 100, opacity: 0 }}
                                        animate={windowWidth < 768 ? { y: 0, opacity: 1 } : { x: 0, opacity: 1 }}
                                        transition={{ delay: 0.3 + idx * 0.1 }}
                                        className="flex items-center gap-4 text-3xl font-black font-[family-name:var(--font-comic)] text-white hover:text-[var(--color-comic-yellow)] transition-colors group cursor-none"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <span className="bg-white text-black p-2 border-2 border-black group-hover:rotate-12 transition-transform shadow-[4px_4px_0_black]">
                                            {link.icon}
                                        </span>
                                        <span className="uppercase text-stroke-white group-hover:translate-x-2 transition-transform">
                                            {link.name}
                                        </span>
                                    </motion.a>
                                ))}
                            </div>

                            <div className="mt-12 border-t-2 border-dashed border-gray-600 pt-8 text-center relative z-10">
                                <a
                                    href="https://dropouthacks.devfolio.co/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 bg-[#3770ff] text-white font-bold px-4 rounded-[4px] hover:scale-105 transition-transform"
                                    style={{ height: '44px', width: '100%' }}
                                >
                                    <img src="/sponsors/Devfolio_Icon.svg" alt="Devfolio" className="h-5 w-auto" />
                                    Apply with Devfolio
                                </a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};
