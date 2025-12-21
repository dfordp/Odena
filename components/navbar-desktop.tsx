"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
    const [isOurWorkOpen, setIsOurWorkOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const ourWorkDropdownRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const handleScheduleCall = () => {
        // Try to find the connect section (landing page)
        const connectSection = document.getElementById("connect");
        
        // Also try to find Cal.com iframe or Cal component namespace
        const calIframe = document.querySelector('[data-cal-namespace="openlens-discussion"]');
        const calEmbed = document.querySelector('.cal-embed');
        
        if (connectSection) {
            // If connect section exists, scroll to it
            connectSection.scrollIntoView({ behavior: "smooth" });
        } else if (calIframe || calEmbed) {
            // If Cal component exists on current page, scroll to it
            const calElement = calIframe || calEmbed;
            if (calElement) {
                calElement.scrollIntoView({ behavior: "smooth", block: "center" });
            }
        } else {
            // Otherwise navigate to landing page connect section
            router.push("/#connect");
        }
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsServicesOpen(false);
        }
        if (ourWorkDropdownRef.current && !ourWorkDropdownRef.current.contains(event.target as Node)) {
            setIsOurWorkOpen(false);
        }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Scroll handler
    useEffect(() => {
        const handler = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handler, { passive: true });
        return () => window.removeEventListener("scroll", handler);
    }, []);

    return (
        <>
        {/* Decorative lines and symbols - absolute positioned, stays in place */}
        <div className="hidden md:block absolute left-[50.5%] -translate-x-1/2 w-[75%] max-w-7xl pointer-events-none" style={{ top: '60px', zIndex: 1 }}>
            {/* Left vertical line extending upward (stops well before +) */}
            <div className="absolute w-px bg-yellow-900/20" style={{ left: '-18px', height: '200vh', bottom: '-4.5px' }} />
            
            {/* Right vertical line extending upward (stops well before +) */}
            <div className="absolute w-px bg-yellow-900/20" style={{ right: '-18px', height: '200vh', bottom: '-4.5px' }} />
            
            {/* Bottom horizontal line - extends beyond navbar */}
            <div className="absolute -bottom-4 h-px bg-yellow-900/20" style={{ left: '-8px', right: '-8px' }} />
            
            {/* Left horizontal line extending to viewport edge */}
            <div className="absolute -bottom-4 h-px bg-yellow-900/20" style={{ right: 'calc(100% + 27.5px)', width: 'calc(13vw - 34px)' }} />
            
            {/* Right horizontal line extending to viewport edge */}
            <div className="absolute -bottom-4 h-px bg-yellow-900/20" style={{ left: 'calc(100% + 27.5px)', width: 'calc(12vw - 36px)' }} />
            
            {/* Bottom-left '+' symbol */}
            <div className="absolute -bottom-[15px] text-yellow-900/20 flex items-center justify-center font-extralight" style={{ left: '-17.4px', fontSize: '20px', lineHeight: '1', transform: 'translate(-50%, 50%)' }}>+</div>
            
            {/* Bottom-right '+' symbol */}
            <div className="absolute -bottom-[15px] text-yellow-900/20 flex items-center justify-center font-extralight" style={{ right: '-18.2px', fontSize: '20px', lineHeight: '1', transform: 'translate(50%, 50%)' }}>+</div>
        </div>
        
        <div className="hidden md:flex fixed top-0 left-0 right-0 z-50 justify-center pointer-events-none">
        <nav
            className={`
                pointer-events-auto flex items-center justify-between
                w-[75%] max-w-7xl mt-4 rounded-2xl
                transition-all duration-200 ease-in-out
                border border-transparent
                relative
                ${
                    scrolled
                        ? "bg-background/75 backdrop-blur-md shadow-sm border-amber-950/20!"
                        : "bg-transparent"
                }
            `}
        >
            <div className={`flex items-center justify-between w-full px-4 -my-2.5 transition-all duration-300 ease-in-out`}>
                {/* LOGO */}
                <Link href="/" className="flex items-center group">
                    <Image
                    src="/odena-logo.png"
                    alt="Odena Logo"
                    width={70}
                    height={70}
                    className="transition-all duration-300"
                    />
                </Link>

                {/* NAVIGATION LINKS */}
                <div className="flex items-center gap-6">
                    {/* SERVICES DROPDOWN */}
                    <div className="relative" ref={dropdownRef}>
                    <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="flex items-center gap-1 text-foreground hover:text-primary transition-colors duration-200 font-medium text-sm hover:cursor-pointer"
                    >
                        Services
                        <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                            isServicesOpen ? "rotate-180" : ""
                        }`}
                        />
                    </button>

                    <div
                        className={`absolute top-full mt-3 left-0 w-64 border border-border/40 rounded-xl shadow-sm py-2 z-50 transition-all duration-200 ease-in-out ${
                            isServicesOpen
                                ? "opacity-100 translate-y-0 pointer-events-auto"
                                : "opacity-0 -translate-y-2 pointer-events-none"
                        }`}
                        style={{ background: 'rgba(250, 246, 235, 0.98)', backdropFilter: 'blur(40px) saturate(180%)', WebkitBackdropFilter: 'blur(40px) saturate(180%)' }}
                    >
                        
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
                    </div>

                    {/* OUR WORK DROPDOWN */}
                    <div className="relative" ref={ourWorkDropdownRef}>
                    <button
                        onClick={() => setIsOurWorkOpen(!isOurWorkOpen)}
                        className="flex items-center gap-1 text-foreground hover:text-primary transition-colors duration-200 font-medium text-sm hover:cursor-pointer"
                    >
                        Our Work
                        <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                            isOurWorkOpen ? "rotate-180" : ""
                        }`}
                        />
                    </button>

                    <div
                        className={`absolute top-full mt-3 left-0 w-48 border border-border/40 rounded-xl shadow-sm py-2 z-50 transition-all duration-200 ease-in-out ${
                            isOurWorkOpen
                                ? "opacity-100 translate-y-0 pointer-events-auto"
                                : "opacity-0 -translate-y-2 pointer-events-none"
                        }`}
                        style={{ background: 'rgba(250, 246, 235, 0.98)', backdropFilter: 'blur(40px) saturate(180%)', WebkitBackdropFilter: 'blur(40px) saturate(180%)' }}
                    >
                        
                        <Link 
                            href="/projects" 
                            className="flex gap-3 px-4 py-3 items-center hover:bg-pink-200/50 transition-colors duration-200 rounded-lg mx-2"
                            onClick={() => setIsOurWorkOpen(false)}
                        >
                            <span>Projects</span>
                        </Link>

                        <Link
                            href="/publications"
                            className="flex gap-3 px-4 py-3 items-center hover:bg-pink-200/50 transition-colors duration-200 rounded-lg mx-2"
                            onClick={() => setIsOurWorkOpen(false)}
                        >
                            <span>Publications</span>
                        </Link>

                        <Link
                            href="/blogs"
                            className="flex gap-3 px-4 py-3 items-center hover:bg-pink-200/50 transition-colors duration-200 rounded-lg mx-2"
                            onClick={() => setIsOurWorkOpen(false)}
                        >
                            <span>Blogs</span>
                        </Link>
                    </div>
                    </div>

                    {/* TOP LEVEL LINKS */}
                    <Link
                    href="/about"
                    className="text-foreground hover:text-primary transition-colors duration-200 font-medium text-sm"
                    >
                    About
                    </Link>
                </div>
                <button
                    onClick={handleScheduleCall}
                    className="ml-4 px-4 py-2 bg-black/90 text-background rounded-[12px] text-sm hover:bg-neutral-900/85 hover:shadow-sm transition-all duration-200 hover:cursor-pointer"
                >
                    Schedule a Call
                </button>
            </div>
        </nav>
        </div>
        </>
    );
}
