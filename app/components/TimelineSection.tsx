"use client";

import React from "react";
import { motion } from "framer-motion";
import { ComicPanel } from "./ComicPanel";

const events = [
    { time: "09:00 AM", title: "PORTAL OPENS", description: "Registration & Team Formation. Enter the lobby.", date: "Day 1" },
    { time: "11:00 AM", title: "OPENING CEREMONY", description: "The Multiverse begins to fracture. Briefing starts.", date: "Day 1" },
    { time: "12:00 PM", title: "HACKING BEGINS", description: "Start your engines. 48 hours to save the world.", date: "Day 1" },
    { time: "08:00 PM", title: "PIZZA DROP", description: "Fuel for the spiders. Don't let the symbiote take over.", date: "Day 1" },
    { time: "12:00 AM", title: "MIDNIGHT GAMES", description: "AFK challenge. Test your reflexes.", date: "Day 1" },
    { time: "12:00 PM", title: "SUBMISSION DEADLINE", description: "Close your portals. Upload your code.", date: "Day 2" },
    { time: "02:00 PM", title: "JUDGING", description: "The Council of Kangs reviews your work.", date: "Day 2" },
    { time: "05:00 PM", title: "WINNERS DECLARED", description: "Who will become the new Spider-Supreme?", date: "Day 2" },
];

export const TimelineSection = () => {
    return (
        <section className="py-20 px-4 relative bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] bg-fixed">
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-7xl font-black font-[family-name:var(--font-comic)] text-white mb-4 uppercase" style={{ textShadow: "4px 4px 0px var(--color-comic-red)" }}>
                        THE TIMELINE
                    </h2>
                </motion.div>

                <div className="relative">
                    {/* Center Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 md:w-2 bg-white transform md:-translate-x-1/2 z-0 border-l-2 md:border-l-4 border-dashed border-black"></div>

                    <div className="space-y-12">
                        {events.map((event, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                <div className="flex-1 w-full md:w-auto pl-12 md:pl-0">
                                    <ComicPanel variant={index % 2 === 0 ? "blue" : "primary"} className="w-full">
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="bg-black text-white px-2 py-1 font-mono text-sm font-bold">{event.date}</span>
                                            <span className="text-xl font-black font-[family-name:var(--font-comic)]">{event.time}</span>
                                        </div>
                                        <h3 className="text-2xl font-bold uppercase mb-1">{event.title}</h3>
                                        <p className="text-gray-300 font-[family-name:var(--font-body)]">{event.description}</p>
                                    </ComicPanel>
                                </div>

                                {/* Dot on Timeline */}
                                <div className="absolute left-4 md:left-1/2 w-4 h-4 md:w-6 md:h-6 bg-white border-2 md:border-4 border-black z-10 transform md:-translate-x-1/2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"></div>

                                <div className="flex-1 hidden md:block"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
