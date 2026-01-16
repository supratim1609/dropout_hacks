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

            <div className="container mx-auto max-w-4xl">
                <div className="bg-white border-4 border-black p-6 md:p-12 relative shadow-[12px_12px_0_var(--color-comic-dark)]">
                    {/* Decorative corners */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-black -mt-2 -ml-2" />
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-black -mt-2 -mr-2" />
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-black -mb-2 -ml-2" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-black -mb-2 -mr-2" />

                    <div className="flex flex-col items-center text-center space-y-6">
                        <div className="animate-bounce">
                            <span className="text-6xl md:text-8xl filter drop-shadow-[4px_4px_0_rgba(0,0,0,0.2)]">🛰️</span>
                        </div>

                        <h3 className="text-2xl md:text-4xl font-black font-[family-name:var(--font-comic)] uppercase">
                            1 ALLY FOUND
                        </h3>

                        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 py-8">
                            <a href="https://devfolio.co" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
                                <img
                                    src="/sponsors/Devfolio_Logo-Colored.png"
                                    alt="DEVFOLIO LOGO"
                                    className="h-12 md:h-16 object-contain"
                                />
                            </a>
                            <a href="https://polygon.technology" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
                                <img
                                    src="/sponsors/Polygon_Logo-Colored.jpg"
                                    alt="Polygon"
                                    className="h-12 md:h-16 object-contain"
                                />
                            </a>
                            <a href="https://ethindia.co" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
                                <img
                                    src="/sponsors/ETHIndia_Logo-Colored.jpg"
                                    alt="ETHIndia"
                                    className="h-12 md:h-16 object-contain"
                                />
                            </a>
                        </div>

                        <p className="text-lg md:text-xl font-bold font-[family-name:var(--font-body)] text-gray-800 max-w-2xl">
                            Powering the next generation of builders. <br />
                            <span className="text-[var(--color-comic-red)]">Alliance Established.</span>
                        </p>

                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSc70_R3slKTVC6f5BTABlYvz6wBaNbEXaRV9r3I7kh0ZQpzew/viewform" target="_blank" rel="noopener noreferrer">
                            <button className="bg-black text-white font-black px-6 py-3 md:px-10 md:py-5 uppercase hover:scale-105 transition-transform font-[family-name:var(--font-comic)] text-lg md:text-2xl shadow-[6px_6px_0_0_var(--color-comic-red)] hover:shadow-[2px_2px_0_0_var(--color-comic-red)] hover:translate-x-1 hover:translate-y-1 cursor-none border-2 border-transparent hover:border-black hover:bg-[var(--color-comic-yellow)] hover:text-black mt-4">
                                Become a Sponsor
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
