"use client";

import React from "react";
import { ComicPanel } from "./ComicPanel";

export const SponsorsSection = () => {
    return (
        <section className="py-20 px-4 bg-white text-black bg-halftone-white">
            <div className="container mx-auto text-center mb-16">
                <h2 className="text-5xl md:text-7xl font-black font-[family-name:var(--font-comic)] uppercase mb-4 text-stroke-black" style={{ WebkitTextStroke: "2px black", color: "transparent" }}>
                    OUR ALLIES
                </h2>
                <p className="text-xl font-bold font-[family-name:var(--font-body)]">
                    Powering the grid across all dimensions.
                </p>
            </div>

            <div className="container mx-auto max-w-4xl space-y-12">
                {/* Top Tier */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <ComicPanel className="h-40 flex items-center justify-center bg-[var(--color-comic-dark)] text-white">
                        <span className="text-2xl font-black uppercase">Sponsor 1</span>
                    </ComicPanel>
                    <ComicPanel className="h-40 flex items-center justify-center bg-[var(--color-comic-dark)] text-white">
                        <span className="text-2xl font-black uppercase">Sponsor 2</span>
                    </ComicPanel>
                </div>

                {/* Second Tier */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <ComicPanel variant="blue" className="h-24 flex items-center justify-center">
                        <span className="font-bold uppercase">Sponsor A</span>
                    </ComicPanel>
                    <ComicPanel variant="blue" className="h-24 flex items-center justify-center">
                        <span className="font-bold uppercase">Sponsor B</span>
                    </ComicPanel>
                    <ComicPanel variant="purple" className="h-24 flex items-center justify-center">
                        <span className="font-bold uppercase">Sponsor C</span>
                    </ComicPanel>
                    <ComicPanel variant="purple" className="h-24 flex items-center justify-center">
                        <span className="font-bold uppercase">Sponsor D</span>
                    </ComicPanel>
                </div>

                <div className="text-center mt-12">
                    <button className="bg-black text-white font-bold px-8 py-4 uppercase hover:scale-105 transition-transform font-[family-name:var(--font-comic)] text-xl shadow-[4px_4px_0_0_rgba(100,100,100,1)]">
                        Become a Sponsor
                    </button>
                </div>
            </div>
        </section>
    );
};
