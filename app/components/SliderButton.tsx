"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronRight, Check } from "lucide-react";

interface SliderButtonProps {
    onComplete: () => void;
    text?: string;
}

export const SliderButton = ({ onComplete, text = "Slide to Register" }: SliderButtonProps) => {
    const [isComplete, setIsComplete] = useState(false);
    const [sliderX, setSliderX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [showInitialPulse, setShowInitialPulse] = useState(true);
    const [isMounted, setIsMounted] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const sliderSize = 48;
    const containerWidth = 240;
    const containerHeight = 56;
    const padding = 4;
    const maxDrag = containerWidth - sliderSize - (padding * 2);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => setShowInitialPulse(false), 5000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!isDragging || isComplete || !containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left - sliderSize / 2 - padding;
            const clampedX = Math.max(0, Math.min(x, maxDrag));

            setSliderX(clampedX);

            if (clampedX >= maxDrag * 0.9) {
                setIsComplete(true);
                setSliderX(maxDrag);
                setIsDragging(false);
                onComplete();

                setTimeout(() => {
                    setIsComplete(false);
                    setSliderX(0);
                }, 1500);
            }
        };

        const handleMouseUp = () => {
            if (!isComplete) {
                setSliderX(0);
            }
            setIsDragging(false);
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (!isDragging || isComplete || !containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const x = e.touches[0].clientX - rect.left - sliderSize / 2 - padding;
            const clampedX = Math.max(0, Math.min(x, maxDrag));

            setSliderX(clampedX);

            if (clampedX >= maxDrag * 0.9) {
                setIsComplete(true);
                setSliderX(maxDrag);
                setIsDragging(false);
                onComplete();

                setTimeout(() => {
                    setIsComplete(false);
                    setSliderX(0);
                }, 1500);
            }
        };

        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
            window.addEventListener('touchmove', handleTouchMove);
            window.addEventListener('touchend', handleMouseUp);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleMouseUp);
        };
    }, [isDragging, isComplete, maxDrag, onComplete]);

    const handleStart = () => {
        setShowInitialPulse(false);
        if (!isComplete) {
            setIsDragging(true);
        }
    };

    const showGlow = isMounted && (showInitialPulse || isHovered) && !isDragging && !isComplete;
    const yellowColor = '#FFE600';

    return (
        <div
            ref={containerRef}
            className="relative rounded-full overflow-hidden select-none flex items-center"
            style={{
                width: containerWidth,
                height: containerHeight,
                backgroundColor: '#1e2030',
                border: `2px solid ${yellowColor}`,
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Subtle progress fill */}
            <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                    background: isComplete
                        ? 'linear-gradient(90deg, #22c55e 0%, #4ade80 100%)'
                        : 'linear-gradient(90deg, rgba(255, 230, 0, 0.2) 0%, rgba(255, 230, 0, 0.1) 100%)',
                    width: sliderX + sliderSize + padding,
                    transition: isDragging ? 'none' : 'width 0.3s ease-out',
                    opacity: sliderX > 0 || isComplete ? 1 : 0,
                }}
            />

            {/* Background text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span
                    className={`font-semibold text-sm uppercase tracking-widest transition-all duration-300 ${isComplete ? 'opacity-0' : 'opacity-100'}`}
                    style={{
                        marginLeft: sliderSize / 2,
                        color: 'rgba(255, 255, 255, 0.5)'
                    }}
                >
                    {text}
                </span>
                <span className={`absolute text-white font-bold text-sm transition-opacity duration-300 ${isComplete ? 'opacity-100' : 'opacity-0'}`}>
                    ✓ Opening...
                </span>
            </div>

            {/* Circular slider handle */}
            <div
                className="absolute rounded-full flex items-center justify-center z-10"
                style={{
                    width: sliderSize,
                    height: sliderSize,
                    left: padding,
                    cursor: isDragging ? 'grabbing' : 'grab',
                    backgroundColor: isComplete ? '#22c55e' : yellowColor,
                    boxShadow: isDragging
                        ? `0 0 ${15 + (sliderX / maxDrag) * 25}px rgba(255, 230, 0, ${0.4 + (sliderX / maxDrag) * 0.5}), 0 4px 12px rgba(0,0,0,0.3)`
                        : showGlow
                            ? `0 0 15px rgba(255, 230, 0, 0.6), 0 4px 12px rgba(0,0,0,0.3)`
                            : '0 4px 12px rgba(0,0,0,0.3)',
                    transform: `translateX(${sliderX}px)`,
                    transition: isDragging ? 'none' : 'transform 0.3s ease-out',
                    animation: !isDragging && !isComplete && sliderX === 0 ? 'handleNudge 1.5s ease-in-out infinite' : 'none',
                }}
                onMouseDown={handleStart}
                onTouchStart={handleStart}
            >
                <div
                    className="flex items-center justify-center text-black"
                    style={{
                        animation: showGlow ? 'arrowPulse 0.8s ease-in-out infinite' : 'none'
                    }}
                >
                    {isComplete ? (
                        <Check className="w-6 h-6 text-white" strokeWidth={3} />
                    ) : (
                        <ChevronRight className="w-6 h-6" strokeWidth={2.5} />
                    )}
                </div>
            </div>

            <style jsx>{`
                @keyframes arrowPulse {
                    0%, 100% { transform: translateX(0); }
                    50% { transform: translateX(4px); }
                }
                @keyframes handleNudge {
                    0%, 100% { transform: translateX(0); }
                    50% { transform: translateX(12px); }
                }
            `}</style>
        </div>
    );
};
