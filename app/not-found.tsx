"use client";

import Link from "next/link";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export default function NotFound() {
    return (
        <main className="min-h-screen bg-[var(--color-comic-dark)] text-white relative flex flex-col cursor-none overflow-hidden selection:bg-[var(--color-comic-red)]">
            <Navbar />

            <div className="flex-1 flex flex-col items-center justify-center relative z-10 p-4 text-center">
                <div className="absolute inset-0 bg-halftone opacity-10 pointer-events-none" />

                <h1 className="text-[10rem] md:text-[15rem] leading-none font-black font-[family-name:var(--font-comic)] text-[var(--color-comic-red)] relative drop-shadow-[5px_5px_0_white] animate-pulse">
                    404
                </h1>

                <div className="bg-black border-2 border-[var(--color-comic-blue)] p-6 max-w-xl transform rotate-1 shadow-[8px_8px_0_var(--color-comic-blue)] mb-12 relative">
                    {/* Decorative Elements */}
                    <div className="absolute -top-3 -left-3 w-6 h-6 bg-white border-2 border-black" />
                    <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-white border-2 border-black" />

                    <h2 className="text-2xl md:text-4xl font-black font-[family-name:var(--font-comic)] uppercase mb-4 text-white">
                        TIMELINE <span className="text-[var(--color-comic-blue)]">DESTABILIZED</span>
                    </h2>
                    <p className="font-[family-name:var(--font-body)] text-gray-300 text-lg">
                        You've wandered into a void dimension. This page doesn't exist in Earth-616 (or any other known universe).
                    </p>
                </div>

                <Link href="/" className="bg-[var(--color-comic-yellow)] text-black font-black text-xl py-4 px-12 uppercase border-4 border-black shadow-[6px_6px_0_white] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all cursor-none rotate-[-1deg] hover:rotate-1">
                    Return to Safety
                </Link>
            </div>

            <Footer />
        </main>
    );
}
