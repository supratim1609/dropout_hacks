import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TeamMember } from "../lib/googleSheets";
import { TeamSphere } from "./TeamSphere";

interface OrganisersMessageProps {
    members?: TeamMember[];
}

export const OrganisersMessage = ({ members = [] }: OrganisersMessageProps) => {
    return (
        <section className="py-10 px-4 bg-white text-black relative border-t-4 border-black overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                {/* Header - Centered or Left aligned based on preference, keeping it clear at top */}
                <div className="flex flex-col items-center mb-12 text-center">
                    <div className="bg-black text-white px-4 py-1 inline-block -rotate-2 mb-4 font-bold uppercase text-sm">
                        INCOMING TRANSMISSION
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black font-[family-name:var(--font-comic)] uppercase leading-none">
                        FROM THE <span className="text-[var(--color-comic-red)] tracking-[0.2em]">ARCHITECTS</span>
                    </h2>
                </div>

                {/* Main Content Layout: Left Text - Sphere - Right Text */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative">

                    {/* Left Text Block */}
                    <div className="w-full lg:w-1/4 prose prose-lg font-[family-name:var(--font-body)] font-bold text-gray-800 text-center lg:text-right order-2 lg:order-1">
                        <p>
                            We didn't just build DropOut Hacks to host another event.
                            We built it because we were tired of the same old slides, same old venues, and same old rules.
                        </p>
                    </div>

                    {/* Center Sphere */}
                    <div className="w-full lg:w-1/2 relative order-1 lg:order-2">
                        {/* Comic Background Elements */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle,rgba(255,255,0,0.1)_0%,transparent_70%)] opacity-50 pointer-events-none" />

                        <TeamSphere members={members} />
                    </div>

                    {/* Right Text Block */}
                    <div className="w-full lg:w-1/4 prose prose-lg font-[family-name:var(--font-body)] font-bold text-gray-800 text-center lg:text-left order-3">
                        <p>
                            We believe the best hackers aren't defined by their degrees, but by their curiosity.
                            This is for the builders, the breakers, and the ones who debug until sunrise.
                        </p>
                        <p className="mt-4 text-[var(--color-comic-red)] uppercase">
                            See you in the multiverse.
                        </p>
                    </div>
                </div>


            </div>
        </section>
    );
};
