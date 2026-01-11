"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
  baseSpeedX: number;
  baseSpeedY: number;
}

export const FloatingParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef<{ x: number; y: number }>({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Minimal color palette - mostly subtle
    const colors = [
      "#00D2FF", // comic-blue
      "#ffffff", // white
      "#D000FF", // comic-purple (rare)
    ];

    // Mouse repel settings
    const repelRadius = 100; // pixels
    const repelStrength = 3; // force multiplier

    // Set canvas size to parent
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
      }
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Initialize particles - more minimal
    const initParticles = () => {
      const particleCount = 55; // slightly more particles
      particlesRef.current = [];

      for (let i = 0; i < particleCount; i++) {
        const speedX = (Math.random() - 0.5) * 0.2;
        const speedY = Math.random() * -0.15 - 0.05;
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1, // 1-3px (slightly bigger)
          speedX: speedX,
          speedY: speedY,
          baseSpeedX: speedX,
          baseSpeedY: speedY,
          opacity: Math.random() * 0.3 + 0.2, // 0.2-0.5 (more subtle)
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };
    initParticles();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        // Calculate distance from mouse
        const dx = particle.x - mouseRef.current.x;
        const dy = particle.y - mouseRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Apply repel effect if within radius
        if (distance < repelRadius && distance > 0) {
          const force = (repelRadius - distance) / repelRadius;
          const angle = Math.atan2(dy, dx);
          particle.speedX = particle.baseSpeedX + Math.cos(angle) * force * repelStrength;
          particle.speedY = particle.baseSpeedY + Math.sin(angle) * force * repelStrength;
        } else {
          // Gradually return to base speed
          particle.speedX += (particle.baseSpeedX - particle.speedX) * 0.05;
          particle.speedY += (particle.baseSpeedY - particle.speedY) * 0.05;
        }

        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around edges
        if (particle.y < -10) {
          particle.y = canvas.height + 10;
          particle.x = Math.random() * canvas.width;
        }
        if (particle.x < -10) particle.x = canvas.width + 10;
        if (particle.x > canvas.width + 10) particle.x = -10;

        // Draw particle with subtle glow
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.shadowBlur = particle.size * 2;
        ctx.shadowColor = particle.color;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
      });

      animationRef.current = requestAnimationFrame(animate);
    };
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
};
