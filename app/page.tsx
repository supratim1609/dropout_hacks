"use client";

import { motion } from "framer-motion";

export default function ComingSoon() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white relative overflow-hidden cursor-none">
      {/* Multiverse Energy Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Blob 1: Comic Blue/Purple */}
        <motion.div
          animate={{
            x: [0, 100, -100, 0],
            y: [0, -100, 100, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -left-[20%] w-[80vw] h-[80vw] bg-[var(--color-comic-blue)] rounded-full mix-blend-screen opacity-20 blur-[120px]"
        />

        {/* Blob 2: Comic Red */}
        <motion.div
          animate={{
            x: [0, -100, 100, 0],
            y: [0, 100, -100, 0],
            scale: [1, 1.5, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[20%] -right-[20%] w-[80vw] h-[80vw] bg-[var(--color-comic-red)] rounded-full mix-blend-screen opacity-20 blur-[120px]"
        />

        {/* Texture Overlay */}
        <div className="absolute inset-0 bg-halftone opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)]" />
      </div>

      {/* Spider-Punk Asset (Optional vibe) */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-10 w-32 md:w-48 opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
      >
        <img src="/assets/spidey-punk.png" alt="Spider-Punk" className="w-full" />
      </motion.div>

      <div className="z-10 text-center px-4 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="border-4 border-[var(--color-comic-red)] p-8 md:p-12 bg-black shadow-[10px_10px_0_var(--color-comic-blue)] relative"
        >
          {/* Decorative Corners */}
          <div className="absolute -top-3 -left-3 w-6 h-6 bg-[var(--color-comic-yellow)] border-2 border-black" />
          <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-[var(--color-comic-yellow)] border-2 border-black" />

          <h2 className="text-[var(--color-comic-red)] font-mono text-xs md:text-sm tracking-[0.5em] mb-4 animate-pulse">
            SIGNAL INTERCEPTED
          </h2>

          <h1 className="text-6xl md:text-9xl font-black font-[family-name:var(--font-comic)] leading-none mb-6">
            <span className="block text-white">PORTAL</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-comic-blue)] to-[var(--color-comic-purple)] animate-glitch pr-4 pb-1">
              OPENING SOON
            </span>
          </h1>

          <p className="font-[family-name:var(--font-body)] text-gray-400 text-lg md:text-xl max-w-lg mx-auto">
            Kolkata&apos;s Ultimate 48-Hour Hackathon.<br />
            <span className="text-[var(--color-comic-red)] font-bold">Build. Break. Declassify the Future.</span>
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-bounce" />
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-100" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full animate-bounce delay-200" />
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 text-center">
        <p className="text-xs font-mono text-gray-600">
          DROPOUT HACKS // 2026
        </p>
      </div>
    </main>
  );
}
