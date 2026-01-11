"use client";

import React from "react";
import { motion } from "framer-motion";
import { TeamMemberCard } from "./TeamMemberCard";

interface TeamGridProps {
    members: any[];
}

export const TeamGrid = ({ members }: TeamGridProps) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-5 max-w-7xl mx-auto">
            {members.map((member, idx) => (
                <motion.div
                    key={member.name + idx}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                >
                    <TeamMemberCard {...member} gender={member.gender} />
                </motion.div>
            ))}
        </div>
    );
};
