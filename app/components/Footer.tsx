"use client";

import React from "react";

export const Footer = () => {
    return (
        <footer className="bg-black text-white py-12 border-t-4 border-[var(--color-comic-blue)]">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-black font-[family-name:var(--font-comic)] mb-4">
                    DROPOUT HACKS
                </h2>
                <div className="flex justify-center gap-6 mb-8 font-bold font-[family-name:var(--font-body)]">
                    <a href="#" className="hover:text-[var(--color-comic-red)] cursor-none">Instagram</a>
                    <a href="#" className="hover:text-[var(--color-comic-blue)] cursor-none">Twitter</a>
                    <a href="#" className="hover:text-[var(--color-comic-purple)] cursor-none">Discord</a>
                    <a href="#" className="hover:text-[var(--color-comic-yellow)] cursor-none">LinkedIn</a>
                    <a href="/rules" className="hover:text-white border-l-2 border-gray-600 pl-6 cursor-none">Rules / CoC</a>
                </div>
                <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} Dropout Hacks. All rights reserved across the multiverse. <br />
                    Built with 🕸️ and ❤️ in Kolkata.
                </p>
            </div>
        </footer>
    );
};
