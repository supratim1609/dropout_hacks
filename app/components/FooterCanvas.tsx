"use client";

import React, { useRef, useState, useEffect } from 'react';
import { Eraser, PenTool } from 'lucide-react';

export default function FooterCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [mode, setMode] = useState<"draw" | "erase">("draw");
    const [penColor, setPenColor] = useState<string>("#000000");
    const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

    const colors = [
        { label: "Black", value: "#000000" },
        { label: "Red", value: "#FF0033" },       // var(--color-comic-red)
        { label: "Blue", value: "#00D2FF" },      // var(--color-comic-blue)
        { label: "Purple", value: "#D000FF" },    // var(--color-comic-purple)
        { label: "Yellow", value: "#FFE600" },    // var(--color-comic-yellow)
        { label: "Green", value: "#00FF66" },
        { label: "White", value: "#FFFFFF" }
    ];

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
        ctx.strokeStyle = penColor;
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

    // Update context tool when mode or color changes
    useEffect(() => {
        if (!context) return;
        if (mode === "draw") {
            context.globalCompositeOperation = "source-over";
            context.lineWidth = 4;
            context.strokeStyle = penColor;
        } else {
            // Eraser mode
            context.globalCompositeOperation = "destination-out";
            context.lineWidth = 30; // Thicker eraser
        }
    }, [mode, penColor, context]);

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
        <div className="flex-1 w-full h-full min-h-[240px] relative mt-4 border-4 border-black group/canvas rounded-none overflow-hidden bg-white shadow-[inset_0_0_20px_rgba(0,0,0,0.05)] flex flex-col">
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
                className={`w-full flex-1 cursor-crosshair touch-none ${mode === "erase" ? "cursor-[url('/eraser.png'),_pointer]" : ""}`}
                style={{ touchAction: 'none' }} // Crucial for mobile drawing
            />

            {/* Color Palette (Bottom) */}
            <div className="h-12 bg-gray-100 border-t-4 border-black flex items-center px-4 gap-3 overflow-x-auto select-none">
                <span className="text-sm font-black uppercase text-gray-500 mr-2 shrink-0">INK:</span>
                {colors.map((c) => (
                    <button
                        key={c.value}
                        onClick={() => {
                            setPenColor(c.value);
                            setMode("draw"); // switch back to draw if picking a color
                        }}
                        className={`w-6 h-6 rounded-full border-2 shrink-0 hover:scale-110 transition-transform ${penColor === c.value && mode === "draw" ? "border-black scale-110 shadow-[2px_2px_0_black]" : "border-black/20"}`}
                        style={{ backgroundColor: c.value }}
                        title={c.label}
                    />
                ))}
            </div>

            {/* Instruction overlay (disappears on hover/interaction) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-20 font-bold text-lg md:text-2xl text-black font-[family-name:var(--font-comic)] flex flex-col items-center gap-2 group-hover/canvas:opacity-0 transition-opacity">
                <PenTool size={32} />
                <span className="text-center tracking-widest uppercase">Draw Something!</span>
            </div>
        </div>
    );
}
