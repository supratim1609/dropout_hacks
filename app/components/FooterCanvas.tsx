"use client";

import React, { useRef, useState, useEffect } from 'react';
import { Eraser, PenTool } from 'lucide-react';

export default function FooterCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [mode, setMode] = useState<"draw" | "erase">("draw");
    const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

    // Initialize canvas
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // Make canvas responsive to container
        const parent = canvas.parentElement;
        if (parent) {
            canvas.width = parent.clientWidth;
            canvas.height = parent.clientHeight;
        }

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set default styles
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.lineWidth = 4;
        ctx.strokeStyle = '#000000';
        setContext(ctx);

        // Pre-fill canvas with fun prompt if desired
        ctx.fillStyle = "rgba(0,0,0,0.1)";
        ctx.font = "bold 14px 'Comic Sans MS', cursive, sans-serif";
        ctx.fillText("Draw your multiverse variant here...", 20, 30);

        // Handle resize
        const handleResize = () => {
            if (parent) {
                // Save current drawing
                const tempCanvas = document.createElement('canvas');
                const tempCtx = tempCanvas.getContext('2d');
                tempCanvas.width = canvas.width;
                tempCanvas.height = canvas.height;
                tempCtx?.drawImage(canvas, 0, 0);

                // Resize
                canvas.width = parent.clientWidth;
                canvas.height = parent.clientHeight;

                // Restore drawing & settings
                ctx.lineCap = 'round';
                ctx.lineJoin = 'round';
                ctx.lineWidth = mode === 'erase' ? 20 : 4;
                ctx.strokeStyle = mode === 'erase' ? '#ffffff' : '#000000';
                ctx.drawImage(tempCanvas, 0, 0);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Update context tool when mode changes
    useEffect(() => {
        if (!context) return;
        if (mode === "draw") {
            context.globalCompositeOperation = "source-over";
            context.lineWidth = 4;
            context.strokeStyle = "#000000";
        } else {
            // Eraser mode
            context.globalCompositeOperation = "destination-out";
            context.lineWidth = 30; // Thicker eraser
        }
    }, [mode, context]);

    const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
        setIsDrawing(true);
        draw(e);
    };

    const stopDrawing = () => {
        setIsDrawing(false);
        if (context) context.beginPath(); // Reset path so next line doesn't connect
    };

    const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
        if (!isDrawing || !context || !canvasRef.current) return;

        e.preventDefault(); // Prevent scrolling on touch devices while drawing

        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();

        let clientX, clientY;

        if ('touches' in e) {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        } else {
            clientX = e.clientX;
            clientY = e.clientY;
        }

        const x = clientX - rect.left;
        const y = clientY - rect.top;

        context.lineTo(x, y);
        context.stroke();
        context.beginPath();
        context.moveTo(x, y);
    };

    const clearCanvas = () => {
        if (!context || !canvasRef.current) return;
        context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    };

    return (
        <div className="flex-1 w-full h-full min-h-[150px] relative mt-4 border-2 border-dashed border-black/20 group/canvas rounded-sm overflow-hidden bg-white/50">
            {/* Toolbar */}
            <div className="absolute top-2 right-2 z-10 flex gap-2 opacity-50 group-hover/canvas:opacity-100 transition-opacity">
                <button
                    onClick={() => setMode("draw")}
                    className={`p-1.5 border-2 border-black ${mode === "draw" ? "bg-[var(--color-comic-yellow)]" : "bg-white"} transition-colors hover:scale-110`}
                    title="Draw"
                >
                    <PenTool size={16} className="text-black" />
                </button>
                <button
                    onClick={() => setMode("erase")}
                    className={`p-1.5 border-2 border-black ${mode === "erase" ? "bg-[var(--color-comic-red)] text-white" : "bg-white text-black"} transition-colors hover:scale-110`}
                    title="Eraser"
                >
                    <Eraser size={16} className={mode === "erase" ? "text-white" : "text-black"} />
                </button>
                <button
                    onClick={clearCanvas}
                    className="p-1.5 border-2 border-black bg-black text-white text-xs font-black font-[family-name:var(--font-comic)] uppercase hover:scale-110 transition-transform"
                    title="Clear All"
                >
                    Clear
                </button>
            </div>

            {/* Canvas Area */}
            <canvas
                ref={canvasRef}
                onMouseDown={startDrawing}
                onMouseUp={stopDrawing}
                onMouseOut={stopDrawing}
                onMouseMove={draw}
                onTouchStart={startDrawing}
                onTouchEnd={stopDrawing}
                onTouchCancel={stopDrawing}
                onTouchMove={draw}
                className={`w-full h-full cursor-crosshair touch-none ${mode === "erase" ? "cursor-[url('/eraser.png'),_pointer]" : ""}`}
                style={{ touchAction: 'none' }} // Crucial for mobile drawing
            />

            {/* Instruction overlay (disappears on hover/interaction) */}
            <div className="absolute bottom-2 left-2 pointer-events-none opacity-40 font-bold text-xs text-black flex items-center gap-2 group-hover/canvas:opacity-0 transition-opacity">
                <PenTool size={12} />
                <span>Interact with the timeline</span>
            </div>
        </div>
    );
}
