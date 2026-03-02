"use client";

import React, { useEffect, useRef, useCallback, useState } from "react";
import { Droplet, Share2, Check } from "lucide-react";

// Google Holi Easter Egg Colors
const HOLI_COLORS = [
    "#FF007F", // Neon Pink
    "#FFD700", // Bright Yellow
    "#FF5722", // Vibrant Orange
    "#00D2FF", // Cyan/Blue
    "#00FF66", // Green
    "#D000FF", // Purple
];

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    color: string; // pre-computed rgb string
    alpha: number;
    friction: number;
    gravity: number;
}

// Helper to convert hex to rgb string for rgba() usage
function hexToRgb(hex: string) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r}, ${g}, ${b}`;
}

const RGB_COLORS = HOLI_COLORS.map(hexToRgb);

export const HoliEffect = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    // Use a mutable ref for particles to avoid React state re-renders during animation
    const particlesRef = useRef<Particle[]>([]);
    const animationFrameRef = useRef<number>(undefined);
    const isWashingRef = useRef(false);
    const washProgressRef = useRef(0);

    // UI state
    const [hasClicked, setHasClicked] = useState(false);
    const [copied, setCopied] = useState(false);

    // We use a ref to store the audio element so we can load it once
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Initialize audio on mount
    useEffect(() => {
        // Wet splat / powder throwing sound
        const audio = new Audio("https://cdn.pixabay.com/audio/2022/03/15/audio_7acb8c715b.mp3");
        audio.volume = 1.0;
        audio.preload = "auto";
        audioRef.current = audio;
    }, []);

    // Initialize animation loop
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        handleResize();
        window.addEventListener("resize", handleResize);

        const animate = () => {
            // clear the canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const particles = particlesRef.current;
            const isWashing = isWashingRef.current;

            // Update the water wash sweep position once per frame
            if (isWashing) {
                washProgressRef.current += 10; // Smooth downward sweep
            }

            for (let i = particles.length - 1; i >= 0; i--) {
                const p = particles[i];

                if (isWashing) {
                    // If the water wave touches the particle, it gets washed down
                    if (p.y < washProgressRef.current) {
                        p.vx *= 0.8; // Lose horizontal momentum to the water
                        p.vy += 1; // Gain downward momentum to ride the wave down
                        p.alpha -= 0.02; // Melt/fade away into the water
                    }
                    p.x += p.vx;
                    p.y += p.vy;
                } else {
                    // Normal idle physics: Only move if significantly fast
                    if (Math.abs(p.vx) > 0.01 || Math.abs(p.vy) > 0.01) {
                        p.x += p.vx;
                        p.y += p.vy;
                        p.vx *= p.friction;
                        p.vy *= p.friction;
                    }
                }

                // If a particle falls off the bottom of the screen normally, or fades out completely, remove it
                if (p.y > canvas.height + 50 || p.alpha <= 0) {
                    particles.splice(i, 1);
                    continue;
                }

                // We NO LONGER decrease p.alpha so they stay permanently
                // p.alpha -= 0.008; 

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
                ctx.fill();
            }

            // Draw the water wash effect
            if (isWashing) {
                const washY = washProgressRef.current;

                // Draw trailing water block (semi-transparent)
                ctx.fillStyle = "rgba(100, 200, 255, 0.4)";
                ctx.fillRect(0, 0, canvas.width, washY - 10);

                // Draw a smooth, wavy leading edge for the water
                const waveHeight = 15; // Amplitude of the wave
                const waveLength = 0.01; // Frequency of the wave
                const time = Date.now() * 0.005; // Animation speed

                ctx.beginPath();
                ctx.moveTo(0, 0); // Start at top left
                ctx.lineTo(0, washY); // Down to the wave start height

                // Draw the wavy bottom edge
                for (let x = 0; x <= canvas.width; x += 10) {
                    // Combine two sine waves for a more natural chaotic liquid look
                    const yOffset = Math.sin(x * waveLength + time) * waveHeight +
                        Math.sin(x * waveLength * 0.5 - time) * (waveHeight * 0.5);
                    ctx.lineTo(x, washY + yOffset);
                }

                ctx.lineTo(canvas.width, 0); // Back up to the top right
                ctx.closePath();

                // Fill the wavy leading edge with a solid color
                ctx.fillStyle = "rgba(100, 200, 255, 0.8)";
                ctx.fill();
            }

            // Once the wash has passed the whole screen + buffer for waves, end the wash state
            if (isWashing && washProgressRef.current > canvas.height + 150) {
                isWashingRef.current = false;
                washProgressRef.current = 0;
            }

            animationFrameRef.current = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            window.removeEventListener("resize", handleResize);
            if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
        };
    }, []);

    // Create a burst of particles on click
    const handleClick = useCallback((e: MouseEvent) => {
        // Prevent clicks while washing away
        if (isWashingRef.current) return;

        const target = e.target as HTMLElement;

        // Prevent click if clicking on anything explicitly marked or standard interactive elements like buttons/links we don't want to overlay
        // We will just let it trigger everywhere except the footer canvas since drawing there is important
        if (target.closest('canvas') && !target.classList.contains('holi-background-canvas')) {
            return;
        }

        // Prevent splash when clicking our holi controls
        if (target.closest('.holi-controls')) {
            return;
        }

        setHasClicked(true);

        // Play the pop sound vigorously!
        // Browsers block autoplay on cloned nodes inside event listeners, so we reuse the SAME audio node
        // by resetting its time to 0. This also creates a natural "interrupting" effect on rapid clicks!
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(e => console.log("Audio play blocked by browser:", e));
        }

        const x = e.clientX;
        const y = e.clientY;
        const color = RGB_COLORS[Math.floor(Math.random() * RGB_COLORS.length)];


        const newParticles: Particle[] = [];

        // Spawn 80-120 particles for the burst
        const particleCount = Math.floor(Math.random() * 40) + 80;
        for (let i = 0; i < particleCount; i++) {
            const angle = Math.random() * Math.PI * 2;
            const velocity = Math.random() * 18 + 2; // Explosion speed
            const isLargeBlob = Math.random() > 0.9; // 10% chance to be a large blob of powder

            newParticles.push({
                x: x,
                y: y,
                vx: Math.cos(angle) * velocity,
                vy: Math.sin(angle) * velocity,
                radius: isLargeBlob ? Math.random() * 8 + 4 : Math.random() * 4 + 1,
                color: color,
                alpha: 1,
                friction: 0.85 + Math.random() * 0.1, // air resistance slows them down
                gravity: 0.1 + Math.random() * 0.3, // slow fall
            });
        }

        // Add a central dense blob
        for (let i = 0; i < 10; i++) {
            const angle = Math.random() * Math.PI * 2;
            const velocity = Math.random() * 5;
            newParticles.push({
                x: x,
                y: y,
                vx: Math.cos(angle) * velocity,
                vy: Math.sin(angle) * velocity,
                radius: Math.random() * 15 + 10,
                color: color,
                alpha: 0.9,
                friction: 0.8,
                gravity: 0.4,
            });
        }

        particlesRef.current.push(...newParticles);
    }, []);

    useEffect(() => {
        window.document.addEventListener("click", handleClick);
        return () => window.document.removeEventListener("click", handleClick);
    }, [handleClick]);

    const handleClear = () => {
        // Trigger the wash animation
        isWashingRef.current = true;
        setHasClicked(false);
    };

    const handleShare = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <>
            <canvas
                ref={canvasRef}
                className="holi-background-canvas fixed inset-0 z-[100] pointer-events-none"
                aria-hidden="true"
            />

            {/* Google-style bottom controls */}
            <div className={`holi-controls fixed bottom-10 left-1/2 -translate-x-1/2 z-[101] flex items-center gap-4 transition-all duration-500 font-sans ${hasClicked ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
                {/* Water drop button to clear canvas */}
                <button
                    onClick={handleClear}
                    className="w-16 h-16 bg-white/90 backdrop-blur-md rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.2)] flex items-center justify-center hover:scale-110 hover:bg-white active:scale-95 transition-all outline-none border-2 border-transparent focus:border-blue-400 group"
                    title="Wash screen"
                    aria-label="Wash screen"
                >
                    <Droplet className="text-[#3b82f6] w-8 h-8 fill-blue-400/20 group-hover:fill-blue-400/50 transition-colors" />
                </button>

                {/* Share button */}
                <button
                    onClick={handleShare}
                    className="h-14 px-6 bg-white/90 backdrop-blur-md rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.2)] flex items-center gap-3 hover:scale-105 hover:bg-white active:scale-95 transition-all outline-none border-2 border-transparent focus:border-gray-300 text-gray-800"
                >
                    {copied ? (
                        <Check className="w-5 h-5 text-green-600" />
                    ) : (
                        <Share2 className="w-5 h-5 text-black" />
                    )}
                    <span className="font-semibold text-[15px] pt-0.5">
                        {copied ? "Copied to clipboard!" : "Share this experience"}
                    </span>
                </button>
            </div>
        </>
    );
};
