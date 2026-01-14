"use client";

import React, { useEffect, useRef, useState } from "react";
import { TeamMember } from "../lib/googleSheets";

interface TeamSphereProps {
    members: TeamMember[];
}

interface SphereItem {
    type: 'image' | 'text';
    content: string;
    name?: string; // Added for identifying specific members
    x: number;
    y: number;
    z: number;
    scale: number;
    opacity: number;
    id: number;
    effectType?: number;
    // Physics properties for repel effect
    dx: number;
    dy: number;
    dz: number;
}

// 30 unique hackathon/coding words
const TEXT_TAGS = [
    "BUILD", "SHIP", "CODE", "HACK", "DEBUG",
    "DEPLOY", "PUSH", "MERGE", "COMMIT", "FORK",
    "SPRINT", "MVP", "SHIP IT", "DEMO", "PITCH",
    "GRIND", "CAFFEINE", "3AM", "COMPILE", "EXECUTE"
];

export const TeamSphere = ({ members }: TeamSphereProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [items, setItems] = useState<SphereItem[]>([]);
    const [clickedItem, setClickedItem] = useState<number | null>(null);
    const [radius, setRadius] = useState(90); // Start compact (Big Bang) - tuned to 90 to avoid heavy overlap
    const [hasExploded, setHasExploded] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const rotationRef = useRef({ x: 0, y: 0 });
    const isDraggingRef = useRef(false);
    const isHoveringRef = useRef(false); // Track if user is hovering an item
    const previousMouseRef = useRef({ x: 0, y: 0 });
    const momentumRef = useRef({ x: 0.001, y: 0.001 });
    const requestRef = useRef<number>();

    // Target radius (responsive)
    const targetRadiusRef = useRef(250);

    // Responsive radius based on screen width
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            let newRadius = 250;
            if (width < 480) {
                newRadius = 120; // Very small screens
                setIsMobile(true);
            } else if (width < 768) {
                newRadius = 160; // Mobile
                setIsMobile(true);
            } else if (width < 1024) {
                newRadius = 200; // Tablet
                setIsMobile(false);
            } else {
                newRadius = 250; // Desktop
                setIsMobile(false);
            }
            targetRadiusRef.current = newRadius;

            // Only update active radius if already exploded
            if (hasExplodedRef.current || radiusRef.current > 60) {
                setRadius(newRadius);
                radiusRef.current = newRadius;
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const tempItems: SphereItem[] = [];
        let idCounter = 0;

        // Debug logging
        console.log("TeamSphere members:", members);

        members.forEach(member => {
            let img = member.image;
            console.log("Processing member:", member.name, "Image:", img);

            // Removed overrides to use sheet images
            // const lowerName = member.name.toLowerCase();
            // if (lowerName.includes("supratim")) img = "/team/supratim.png";
            // else if (lowerName.includes("diptish")) img = "/team/diptish.png";
            // else if (lowerName.includes("sourodeep")) img = "/team/sourodeep.png";

            tempItems.push({
                type: 'image',
                content: img,
                name: member.name, // Pass the name for identification
                x: 0, y: 0, z: 0, scale: 1, opacity: 1,
                id: idCounter++,
                dx: 0, dy: 0, dz: 0 // Init physics
            });
        });

        TEXT_TAGS.forEach((text) => {
            tempItems.push({
                type: 'text',
                content: text,
                x: 0, y: 0, z: 0, scale: 1, opacity: 1,
                id: idCounter++,
                dx: 0, dy: 0, dz: 0 // Init physics
            });
        });

        // Shuffle
        for (let i = tempItems.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [tempItems[i], tempItems[j]] = [tempItems[j], tempItems[i]];
        }

        const phi = Math.PI * (3 - Math.sqrt(5));
        tempItems.forEach((item, i, arr) => {
            const y = 1 - (i / (arr.length - 1)) * 2;
            const radiusAtY = Math.sqrt(1 - y * y);
            const theta = phi * i;
            item.x = Math.cos(theta) * radiusAtY;
            item.y = y;
            item.z = Math.sin(theta) * radiusAtY;
            item.scale = 0.8 + Math.random() * 0.4;
        });

        setItems(tempItems);
    }, [members]);

    const hasExplodedRef = useRef(false);
    const radiusRef = useRef(50);

    // Sync state with refs
    useEffect(() => { hasExplodedRef.current = hasExploded; }, [hasExploded]);

    useEffect(() => {
        const animate = () => {
            // 1. Big Bang Expansion
            if (hasExplodedRef.current && radiusRef.current < targetRadiusRef.current) {
                radiusRef.current += (targetRadiusRef.current - radiusRef.current) * 0.05;
                if (Math.abs(targetRadiusRef.current - radiusRef.current) < 1) radiusRef.current = targetRadiusRef.current;
                setRadius(radiusRef.current);
            }

            // 2. Rotation Physics (only after explosion)
            if (hasExplodedRef.current && !isDraggingRef.current && !isHoveringRef.current) {
                rotationRef.current.x += momentumRef.current.x;
                rotationRef.current.y += momentumRef.current.y;
                momentumRef.current.x *= 0.95;
                momentumRef.current.y *= 0.95;
                if (Math.abs(momentumRef.current.x) < 0.001) momentumRef.current.x = 0.001 * Math.sign(momentumRef.current.x || 1);
                if (Math.abs(momentumRef.current.y) < 0.001) momentumRef.current.y = 0.001 * Math.sign(momentumRef.current.y || 1);
            }
            setRotationState({ ...rotationRef.current });

            // 3. Repel Physics Decay
            setItems(prevItems => {
                let changed = false;
                const newItems = prevItems.map(item => {
                    if (Math.abs(item.dx) > 0.1 || Math.abs(item.dy) > 0.1 || Math.abs(item.dz) > 0.1) {
                        changed = true;
                        return {
                            ...item,
                            dx: item.dx * 0.9,
                            dy: item.dy * 0.9,
                            dz: item.dz * 0.9
                        };
                    }
                    return item;
                });
                return changed ? newItems : prevItems;
            });

            requestRef.current = requestAnimationFrame(animate);
        };
        requestRef.current = requestAnimationFrame(animate);
        return () => { if (requestRef.current) cancelAnimationFrame(requestRef.current); };
    }, []);

    const [rotationState, setRotationState] = useState({ x: 0, y: 0 });

    const handleMouseDown = (e: React.MouseEvent) => {
        isDraggingRef.current = true;
        previousMouseRef.current = { x: e.clientX, y: e.clientY };
        momentumRef.current = { x: 0, y: 0 };
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDraggingRef.current) return;
        const deltaX = e.clientX - previousMouseRef.current.x;
        const deltaY = e.clientY - previousMouseRef.current.y;
        previousMouseRef.current = { x: e.clientX, y: e.clientY };
        const sensitivity = 0.005;
        rotationRef.current.y += deltaX * sensitivity;
        rotationRef.current.x -= deltaY * sensitivity;
        momentumRef.current = { x: -deltaY * sensitivity, y: deltaX * sensitivity };
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        isDraggingRef.current = true;
        previousMouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        momentumRef.current = { x: 0, y: 0 };
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDraggingRef.current) return;
        const deltaX = e.touches[0].clientX - previousMouseRef.current.x;
        const deltaY = e.touches[0].clientY - previousMouseRef.current.y;
        previousMouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        const sensitivity = 0.005;
        rotationRef.current.y += deltaX * sensitivity;
        rotationRef.current.x -= deltaY * sensitivity;
        momentumRef.current = { x: -deltaY * sensitivity, y: deltaX * sensitivity };
    };

    const handleTouchEnd = () => { isDraggingRef.current = false; };
    const handleMouseUp = () => { isDraggingRef.current = false; };
    const handleMouseLeave = () => { isDraggingRef.current = false; };

    const [hoveredItemId, setHoveredItemId] = useState<number | null>(null);

    const handleTextClick = (e: React.MouseEvent | React.TouchEvent, item: SphereItem) => {
        if (!hasExploded) return; // Allow bubble to trigger explosion
        e.stopPropagation();
        setClickedItem(item.id);
        setTimeout(() => setClickedItem(null), 300); // Match animation duration
    };

    const handleContainerClick = (e: React.MouseEvent) => {
        if (!hasExploded) {
            setHasExploded(true);
            return;
        }

        // Repel Effect
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        setItems(prev => prev.map(item => {
            // Calculate projected position (approximate match to render logic)
            // We need to re-calculate projection here or store it. 
            // Storing projection in state/ref is heavy. Re-calcluating is fine.
            const { x: rotX, y: rotY } = rotationRef.current;
            const cosY = Math.cos(rotY);
            const sinY = Math.sin(rotY);
            let x1 = (item.x * cosY - item.z * sinY) * radius;
            let z1 = (item.z * cosY + item.x * sinY) * radius;
            const cosX = Math.cos(rotX);
            const sinX = Math.sin(rotX);
            let y1 = (item.y * cosX * radius) - z1 * sinX;

            const itemScreenX = centerX + x1;
            const itemScreenY = centerY + y1;

            const distX = itemScreenX - mouseX;
            const distY = itemScreenY - mouseY;
            const dist = Math.sqrt(distX * distX + distY * distY);

            // Repel force
            const force = Math.max(0, 150 - dist) / 5; // Range 150px
            if (force > 0) {
                return {
                    ...item,
                    dx: item.dx + (distX / (dist || 1)) * force * 5,
                    dy: item.dy + (distY / (dist || 1)) * force * 5
                };
            }
            return item;
        }));
    };

    return (
        <>
            <style jsx global>{`
                @keyframes invert-flash {
                    0% { filter: invert(0); }
                    50% { filter: invert(1); }
                    100% { filter: invert(0); }
                }
                @keyframes shake {
                    0% { transform: translate(0.2px, 0.2px) rotate(0deg); }
                    10% { transform: translate(-0.2px, -0.4px) rotate(-0.25deg); }
                    20% { transform: translate(-0.6px, 0px) rotate(0.25deg); }
                    30% { transform: translate(0.6px, 0.4px) rotate(0deg); }
                    40% { transform: translate(0.2px, -0.2px) rotate(0.25deg); }
                    50% { transform: translate(-0.2px, 0.4px) rotate(-0.25deg); }
                    60% { transform: translate(-0.6px, 0.2px) rotate(0deg); }
                    70% { transform: translate(0.6px, 0.2px) rotate(-0.25deg); }
                    80% { transform: translate(-0.2px, -0.2px) rotate(0.25deg); }
                    90% { transform: translate(0.2px, 0.4px) rotate(0deg); }
                    100% { transform: translate(0.2px, -0.4px) rotate(-0.25deg); }
                }
                .animate-invert { animation: invert-flash 0.3s ease-out; }
                .animate-shake { animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) infinite; }
            `}</style>

            <div
                ref={containerRef}
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] relative flex items-center justify-center perspective-1000 cursor-grab active:cursor-grabbing touch-none"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onClick={handleContainerClick}
            >
                <div className={`relative w-full h-full transform-style-3d flex items-center justify-center ${!hasExploded ? 'animate-shake' : ''}`}>
                    {items.map(item => {
                        const { x: rotX, y: rotY } = rotationState;
                        const cosY = Math.cos(rotY);
                        const sinY = Math.sin(rotY);
                        let x1 = (item.x * cosY - item.z * sinY) * radius + item.dx; // Apply physics offset
                        let z1 = (item.z * cosY + item.x * sinY) * radius + item.dz; // Apply physics offset

                        const cosX = Math.cos(rotX);
                        const sinX = Math.sin(rotX);
                        let y1 = (item.y * cosX * radius) - z1 * sinX + item.dy; // Apply physics offset
                        let z2 = z1 * cosX + (item.y * radius) * sinX;

                        const perspectiveDiv = isMobile ? 300 : 500;
                        const scale = (perspectiveDiv + z2) / perspectiveDiv;
                        const opacity = (z2 + radius) / (2 * radius);

                        // Check name for organiser detection (case insensitive)
                        const lowerName = (item.name || "").toLowerCase();
                        const isOrganiser = lowerName.includes("supratim") || lowerName.includes("diptish") || lowerName.includes("sourodeep");

                        const isHovered = hoveredItemId === item.id;
                        // Enlarge significantly if hovered (1.8x), else normal scale
                        const visualScale = scale * item.scale * (isHovered ? 1.8 : 1);

                        return (
                            <div
                                key={item.id}
                                className={`absolute transition-transform duration-300 ease-out will-change-transform ${item.type === 'image' ? 'z-10' : 'z-0'}`}
                                style={{
                                    transform: `translate3d(${x1}px, ${y1}px, ${z2}px) scale(${visualScale})`,
                                    opacity: isHovered ? 1 : Math.max(0.2, opacity),
                                    zIndex: isHovered ? 2000 : Math.floor(scale * 100), // Bring to front on hover
                                    pointerEvents: 'auto',
                                    cursor: 'pointer'
                                }}
                                onClick={(e) => {
                                    if (!hasExploded) return; // Allow bubble to trigger explosion

                                    if (item.type === 'text') handleTextClick(e, item);
                                    else if (item.type === 'image') {
                                        e.stopPropagation();
                                        window.location.href = '/team';
                                    }
                                }}
                                onMouseEnter={() => {
                                    if (item.type === 'image') {
                                        isHoveringRef.current = true;
                                        setHoveredItemId(item.id);
                                    }
                                }}
                                onMouseLeave={() => {
                                    if (item.type === 'image') {
                                        isHoveringRef.current = false;
                                        setHoveredItemId(null);
                                    }
                                }}
                            >
                                {item.type === 'image' ? (
                                    <div className={`
                                        transition-colors duration-200
                                        ${isOrganiser
                                            ? 'w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 border-2 md:border-[3px] border-black shadow-[4px_4px_0_#bc13fe]'
                                            : 'w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 border-2 border-black shadow-[2px_2px_0_var(--color-comic-red)] sm:shadow-[3px_3px_0_var(--color-comic-red)]'}
                                        rounded-full overflow-hidden bg-gray-300 flex items-center justify-center
                                    `}>
                                        {item.content ? (
                                            <img
                                                src={item.content}
                                                alt="Member"
                                                loading="lazy"
                                                referrerPolicy="no-referrer"
                                                className="w-full h-full object-cover"
                                                onLoad={() => console.log("Loaded:", item.content)}
                                                onError={(e) => {
                                                    console.error("Failed to load:", item.content);
                                                    e.currentTarget.style.display = 'none';
                                                    e.currentTarget.parentElement?.classList.add('bg-black');
                                                }}
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-black" />
                                        )}
                                    </div>
                                ) : (
                                    <span
                                        onClick={(e) => handleTextClick(e, item)}
                                        className={`font-black font-[family-name:var(--font-comic)] text-xs sm:text-sm md:text-base lg:text-lg text-black bg-white px-1.5 sm:px-2 md:px-3 py-0.5 border sm:border-2 border-black rotate-[-5deg] shadow-[1px_1px_0_var(--color-comic-blue)] sm:shadow-[2px_2px_0_var(--color-comic-blue)] whitespace-nowrap cursor-pointer hover:scale-110 transition-transform ${clickedItem === item.id ? 'animate-invert' : ''}`}
                                    >
                                        {item.content}
                                    </span>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* BLAST Button */}
                {!hasExploded && (
                    <button
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 px-4 py-2 sm:px-6 sm:py-3 bg-yellow-400 hover:bg-yellow-300 text-black font-comic font-black text-lg sm:text-xl border-[3px] border-black shadow-[4px_4px_0_black] active:shadow-[2px_2px_0_black] active:translate-x-[2px] active:translate-y-[2px] transition-all z-50 animate-bounce cursor-pointer"
                        onClick={(e) => {
                            e.stopPropagation();
                            setHasExploded(true);
                        }}
                    >
                        BLAST! 💥
                    </button>
                )}
            </div>
        </>
    );
};
