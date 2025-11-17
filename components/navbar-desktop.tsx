"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
    ChevronDown,
    SlidersHorizontal,
    Layers,
    BarChart3,
    Database,
    Zap,
    Shield,
    BriefcaseBusiness,
} from "lucide-react";

export default function NavbarDesktop() {
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsServicesOpen(false);
        }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Scroll progress for gradient animation
    useEffect(() => {
        const handler = () => {
        const scrolled = window.scrollY;
        
        // Use exponential easing for smoother transition near the top
        // Extend the fade-out range for more gradual transition
        const rawProgress = Math.min(scrolled / 400, 1);
        
        // Apply easing function for smoother near-zero transitions
        // This makes the gradient fade very gradually as you approach top
        const progress = rawProgress < 0.1 
            ? rawProgress * 5 // Slower fade in the last 10%
            : 0.5 + (rawProgress - 0.1) * 0.556; // Adjust remaining range
        
        setScrollProgress(Math.min(progress, 1));
        };
        window.addEventListener("scroll", handler, { passive: true });
        return () => window.removeEventListener("scroll", handler);
    }, []);

    // Calculate gradient based on scroll progress
    const getGradientStyle = () => {
        // Always apply transition for smooth animations
        const baseStyle = {
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        transition: 'background 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        };
        
        // Calculate the gradient spread from center (50%) outward with smoother diffusion
        const spread = 50 * scrollProgress; // 0 to 50
        
        // Create multiple gradient stops for smoother diffusion
        const centerIntensity = scrollProgress; // How intense the pink is at center
        const innerSpread = spread * 0.3; // Inner gradient zone (more diffused)
        const midSpread = spread * 0.6; // Mid gradient zone
        const outerSpread = spread * 0.9; // Outer gradient zone
        
        // Calculate positions
        const innerLeft = 50 - innerSpread;
        const midLeft = 50 - midSpread;
        const outerLeft = 50 - outerSpread;
        const innerRight = 50 + innerSpread;
        const midRight = 50 + midSpread;
        const outerRight = 50 + outerSpread;
        
        // Color intensities based on progress with smoother interpolation
        const pinkIntensity = 228 + (255 - 228) * (1 - centerIntensity); // 228 to 255
        const lightPinkIntensity = 240 + (255 - 240) * (1 - centerIntensity); // 240 to 255
        
        // Opacity that fades as we approach the top
        const opacity = 0.5 + (centerIntensity * 0.45); // 0.5 to 0.95
        
        return {
        ...baseStyle,
        background: `linear-gradient(90deg, 
            rgba(255, 255, 255, ${opacity}) 0%, 
            rgba(255, ${Math.round(lightPinkIntensity)}, ${Math.round(245 + (255 - 245) * (1 - centerIntensity * 0.5))}, ${opacity}) ${outerLeft}%,
            rgba(255, ${Math.round(lightPinkIntensity - 5)}, ${Math.round(242 + (255 - 242) * (1 - centerIntensity * 0.6))}, ${opacity}) ${midLeft}%,
            rgba(255, ${Math.round(pinkIntensity + 5)}, ${Math.round(240 + (255 - 240) * (1 - centerIntensity * 0.7))}, ${opacity}) ${innerLeft}%,
            rgba(255, ${Math.round(pinkIntensity)}, 238, ${opacity}) 50%, 
            rgba(255, ${Math.round(pinkIntensity + 5)}, ${Math.round(240 + (255 - 240) * (1 - centerIntensity * 0.7))}, ${opacity}) ${innerRight}%,
            rgba(255, ${Math.round(lightPinkIntensity - 5)}, ${Math.round(242 + (255 - 242) * (1 - centerIntensity * 0.6))}, ${opacity}) ${midRight}%,
            rgba(255, ${Math.round(lightPinkIntensity)}, ${Math.round(245 + (255 - 245) * (1 - centerIntensity * 0.5))}, ${opacity}) ${outerRight}%,
            rgba(255, 255, 255, ${opacity}) 100%)`,
        };
    };

    return (
        <div className="hidden md:block fixed top-0 left-0 right-0 z-50 pointer-events-none">
        <nav
            className="pointer-events-auto w-full transition-all duration-500 ease-out border-b border-pink-200/80"
            style={getGradientStyle()}
        >
            <div className="flex items-center justify-between w-full px-6 lg:px-12 xl:px-16 py-4 h-14">
            
            {/* LOGO */}
            <Link href="/" className="flex items-center group">
                <Image
                src="/odena-logo.png"
                alt="Odena Logo"
                width={80}
                height={80}
                className="transition-all duration-300"
                />
            </Link>

            {/* NAVIGATION LINKS */}
            <div className="flex items-center gap-8 xl:gap-10">

                {/* SERVICES DROPDOWN */}
                <div className="relative" ref={dropdownRef}>
                <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="flex items-center gap-1 text-foreground hover:text-primary transition-colors duration-200 font-medium text-base hover:cursor-pointer"
                >
                    Services
                    <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                        isServicesOpen ? "rotate-180" : ""
                    }`}
                    />
                </button>

                {isServicesOpen && (
                    <div className="absolute top-full mt-3 left-0 w-64 border border-border/40 rounded-xl shadow-sm py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200" style={{ background: 'rgba(250, 246, 235, 0.98)', backdropFilter: 'blur(40px) saturate(180%)', WebkitBackdropFilter: 'blur(40px) saturate(180%)' }}>
                    
                    <Link 
                        href="/services/data-ranking" 
                        className="flex gap-3 px-4 py-3 items-center hover:bg-pink-200/50 transition-colors duration-200 rounded-lg mx-2"
                        onClick={() => setIsServicesOpen(false)}
                    >
                        <SlidersHorizontal className="w-4 h-4 text-primary" />
                        <span>Data Ranking</span>
                    </Link>

                    <Link
                        href="/services/data-segregation"
                        className="flex gap-3 px-4 py-3 items-center hover:bg-pink-200/50 transition-colors duration-200 rounded-lg mx-2"
                        onClick={() => setIsServicesOpen(false)}
                    >
                        <Layers className="w-4 h-4 text-primary" />
                        <span>Data Segregation</span>
                    </Link>

                    <Link
                        href="/services/insights"
                        className="flex gap-3 px-4 py-3 items-center hover:bg-pink-200/50 transition-colors duration-200 rounded-lg mx-2"
                        onClick={() => setIsServicesOpen(false)}
                    >
                        <BarChart3 className="w-4 h-4 text-primary" />
                        <span>Data Insights</span>
                    </Link>

                    <Link
                        href="/services/consulting"
                        className="flex gap-3 px-4 py-3 items-center hover:bg-pink-200/50 transition-colors duration-200 rounded-lg mx-2"
                        onClick={() => setIsServicesOpen(false)}
                    >
                        <BriefcaseBusiness className="w-4 h-4 text-primary" />
                        <span>Consulting</span>
                    </Link>

                    <Link
                        href="/services/data-ingestion"
                        className="flex gap-3 px-4 py-3 items-center hover:bg-pink-200/50 transition-colors duration-200 rounded-lg mx-2"
                        onClick={() => setIsServicesOpen(false)}
                    >
                        <Database className="w-4 h-4 text-primary" />
                        <span>Data Ingestion</span>
                    </Link>

                    <Link
                        href="/services/data-optimization"
                        className="flex gap-3 px-4 py-3 items-center hover:bg-pink-200/50 transition-colors duration-200 rounded-lg mx-2"
                        onClick={() => setIsServicesOpen(false)}
                    >
                        <Zap className="w-4 h-4 text-primary" />
                        <span>Data Optimization</span>
                    </Link>

                    <Link
                        href="/services/ai-safety-regulation"
                        className="flex gap-3 px-4 py-3 items-center hover:bg-pink-200/50 transition-colors duration-200 rounded-lg mx-2"
                        onClick={() => setIsServicesOpen(false)}
                    >
                        <Shield className="w-4 h-4 text-primary" />
                        <span>AI Safety & Regulation</span>
                    </Link>
                    </div>
                )}
                </div>

                {/* TOP LEVEL LINKS */}
                <Link
                href="/projects"
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium text-base"
                >
                Projects
                </Link>

                <Link
                href="/about"
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium text-base"
                >
                About
                </Link>

                <Link
                href="/career"
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium text-base"
                >
                Career
                </Link>

            </div>
            </div>
        </nav>
        </div>
    );
}
