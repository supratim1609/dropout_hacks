"use client";

import React from "react";
import { motion } from "framer-motion";

export const OrganisersMessage = () => {
    return (
        <section className="py-20 px-4 bg-white text-black relative border-t-4 border-black">
            <div className="container mx-auto max-w-4xl relative z-10">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    {/* Visual: Avatar or Comic Illustration */}
                    <div className="w-full md:w-1/3 flex justify-center">
                        <div className="w-64 h-64 bg-black p-2 transform rotate-2 shadow-[8px_8px_0_var(--color-comic-red)]">
                            <div className="w-full h-full bg-white border-2 border-white flex items-center justify-center overflow-hidden relative">
                                <span className="text-8xl">❤️</span>
                                <div className="absolute inset-0 bg-halftone opacity-20" />
                            </div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="w-full md:w-2/3">
                        <div className="bg-black text-white px-4 py-1 inline-block -rotate-2 mb-6 font-bold uppercase text-sm">
                            Incoming Transmission
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black font-[family-name:var(--font-comic)] uppercase mb-6 leading-none">
                            FROM THE <br />
                            <span className="text-[var(--color-comic-red)]">ARCHITECTS</span>
                        </h2>

                        <div className="prose prose-lg font-[family-name:var(--font-body)] font-bold text-gray-800">
                            <p>
                                We didn't just build DropOut Hacks to host another event.
                                We built it because we were tired of the same old slides, same old venues, and same old rules.
                            </p>
                            <p>
                                We believe the best hackers aren't defined by their degrees, but by their curiosity.
                                This is for the builders, the breakers, and the ones who debug until sunrise.
                            </p>
                            <p>
                                See you in the multiverse.
                            </p>
                        </div>

                        <div className="mt-8 font-black font-[family-name:var(--font-comic)] text-xl">
                            - Team DropOut
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
