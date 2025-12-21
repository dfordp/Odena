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
  BriefcaseBusiness
} from "lucide-react";

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isOurWorkOpen, setIsOurWorkOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const ourWorkDropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  const handleScheduleCall = () => {
    setIsMobileMenuOpen(false);
    
    // Small delay to allow menu to close
    setTimeout(() => {
      const connectSection = document.getElementById("connect");
      const calIframe = document.querySelector('[data-cal-namespace="openlens-discussion"]');
      const calEmbed = document.querySelector('.cal-embed');
      
      if (connectSection) {
        connectSection.scrollIntoView({ behavior: "smooth" });
      } else if (calIframe || calEmbed) {
        const calElement = calIframe || calEmbed;
        if (calElement) {
          calElement.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      } else {
        router.push("/#connect");
      }
    }, 100);
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
      // Don't close mobile menu if clicking the toggle button
      if (
        mobileMenuRef.current && 
        !mobileMenuRef.current.contains(event.target as Node) &&
        mobileMenuButtonRef.current &&
        !mobileMenuButtonRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Scroll shrink effect
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="md:hidden fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none mx-2">
      <nav
        className={`
          pointer-events-auto flex items-center justify-between 
          w-full transition-all duration-150 ease-in-out
          ${scrolled
            ? "w-full max-w-6xl mt-2 sm:mt-4 rounded-2xl bg-background/60 backdrop-blur-md shadow-lg border border-border/50"
            : "w-full mt-0 bg-transparent border-none rounded-none"
          }
        `}
      >
        <div
          className={`flex items-center justify-between w-full transition-all duration-100 ease-in-out
            ${scrolled ? "px-4 sm:px-6 py-2 h-12 sm:h-14" : "px-4 sm:px-6 py-3 sm:py-4 h-16 sm:h-20"}
          `}
        >

          {/* LOGO */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/odena-logo.png"
              alt="Odena Logo"
              width={scrolled ? 45 : 60}
              height={scrolled ? 45 : 60}
              className="transition-all duration-150 ease-in-out sm:w-auto sm:h-auto"
              style={{
                width: '60px',
                height: '60px'
              }}
            />
          </Link>

          {/* MOBILE MENU BUTTON - Animated Hamburger */}
          <button
            ref={mobileMenuButtonRef}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-foreground hover:text-primary transition relative w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center gap-[5px]">
              <span
                className={`block h-0.5 w-full bg-current transition-all duration-200 ease-out origin-center ${
                  isMobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-current transition-all duration-200 ease-out ${
                  isMobileMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-current transition-all duration-200 ease-out origin-center ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        ref={mobileMenuRef}
        className={`fixed top-16 sm:top-20 left-0 right-0 bg-[#faf6eb]/95 backdrop-blur-md border-b border-border shadow-lg pointer-events-auto max-h-[calc(100vh-5rem)] overflow-y-auto transition-all duration-200 ease-out ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
          <div className="px-4 py-6 space-y-4">
            
            {/* Services Section */}
            <div className="space-y-2">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center justify-between w-full text-foreground hover:text-primary transition font-medium text-lg py-2 hover:cursor-pointer"
              >
                Services
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-200 ease-out ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`pl-4 space-y-2 border-l-2 border-primary/30 overflow-hidden transition-all duration-200 ease-out ${
                  isServicesOpen
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                  <Link
                    href="/services/data-ranking"
                    className="flex gap-3 py-2 items-center text-foreground hover:text-primary transition"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <SlidersHorizontal className="w-4 h-4 text-primary" />
                    <span>Data Ranking</span>
                  </Link>

                  <Link
                    href="/services/data-segregation"
                    className="flex gap-3 py-2 items-center text-foreground hover:text-primary transition"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Layers className="w-4 h-4 text-primary" />
                    <span>Data Segregation</span>
                  </Link>

                  <Link
                    href="/services/insights"
                    className="flex gap-3 py-2 items-center text-foreground hover:text-primary transition"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <BarChart3 className="w-4 h-4 text-primary" />
                    <span>Data Insights</span>
                  </Link>

                  <Link
                    href="/services/consulting"
                    className="flex gap-3 py-2 items-center text-foreground hover:text-primary transition"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <BriefcaseBusiness className="w-4 h-4 text-primary" />
                    <span>Consulting</span>
                  </Link>

                  <Link
                    href="/services/data-ingestion"
                    className="flex gap-3 py-2 items-center text-foreground hover:text-primary transition"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Database className="w-4 h-4 text-primary" />
                    <span>Data Ingestion</span>
                  </Link>

                  <Link
                    href="/services/data-optimization"
                    className="flex gap-3 py-2 items-center text-foreground hover:text-primary transition"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Zap className="w-4 h-4 text-primary" />
                    <span>Data Optimization</span>
                  </Link>

                  <Link
                    href="/services/ai-safety-regulation"
                    className="flex gap-3 py-2 items-center text-foreground hover:text-primary transition"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Shield className="w-4 h-4 text-primary" />
                    <span>AI Safety & Regulation</span>
                  </Link>
                </div>
            </div>

            {/* Our Work Section */}
            <div className="space-y-2" ref={ourWorkDropdownRef}>
              <button
                onClick={() => setIsOurWorkOpen(!isOurWorkOpen)}
                className="flex items-center justify-between w-full text-foreground hover:text-primary transition font-medium text-lg py-2 hover:cursor-pointer"
              >
                Our Work
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-200 ease-out ${
                    isOurWorkOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`pl-4 space-y-2 border-l-2 border-primary/30 overflow-hidden transition-all duration-200 ease-out ${
                  isOurWorkOpen
                    ? "max-h-[300px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                  <Link
                    href="/projects"
                    className="flex gap-3 py-2 items-center text-foreground hover:text-primary transition"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span>Projects</span>
                  </Link>

                  <Link
                    href="/publications"
                    className="flex gap-3 py-2 items-center text-foreground hover:text-primary transition"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span>Publications</span>
                  </Link>

                  <Link
                    href="/blogs"
                    className="flex gap-3 py-2 items-center text-foreground hover:text-primary transition"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span>Blogs</span>
                  </Link>
                </div>
            </div>

            {/* Top Level Links */}
            <Link
              href="/about"
              className="block text-foreground hover:text-primary transition font-medium text-lg py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>

            {/* Schedule a Call Button */}
            <button
              onClick={handleScheduleCall}
              className="w-full mt-4 px-4 py-3 bg-black text-white rounded-full text-base font-medium hover:bg-black/80 transition-colors duration-200"
            >
              Schedule a Call
            </button>
          </div>
        </div>
    </div>
  );
}
