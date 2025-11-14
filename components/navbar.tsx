"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  ChevronDown,
  SlidersHorizontal,
  Layers,
  BarChart3,
  Sparkles,
  Menu,
  X
} from "lucide-react";

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
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
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none mx-2">
      <nav
        className={`
          pointer-events-auto flex items-center justify-between 
          w-full transition-all duration-300
          ${scrolled
            ? "w-[95%] lg:w-[92%] max-w-6xl mt-2 sm:mt-4 rounded-2xl bg-background/60 backdrop-blur-md shadow-lg border border-border/50"
            : "w-full mt-0 bg-transparent border-none rounded-none"
          }
        `}
      >
        <div
          className={`flex items-center justify-between w-full transition-all duration-300
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
              className="transition-all duration-300 sm:w-auto sm:h-auto"
              style={{
                width: scrolled ? '45px' : '60px',
                height: scrolled ? '45px' : '60px'
              }}
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">

            {/* SERVICES DROPDOWN */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center gap-1 text-foreground hover:text-primary transition font-medium text-sm xl:text-base"
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full mt-2 left-0 w-64 bg-card border border-border rounded-lg shadow-lg py-2 z-50">
                  
                  <Link href="/services/data-ranking" className="flex gap-3 px-4 py-3 items-center hover:bg-background transition cursor-pointer">
                    <SlidersHorizontal className="w-4 h-4 text-primary" />
                    <span>Data Ranking</span>
                  </Link>

                  <Link
                    href="/services/data-segregation"
                    className="flex gap-3 px-4 py-3 items-center hover:bg-muted/40 transition rounded-lg"
                  >
                    <Layers className="w-4 h-4 text-primary" />
                    <span>Data Segregation</span>
                  </Link>

                  <Link
                    href="/services/insights"
                    className="flex gap-3 px-4 py-3 items-center hover:bg-muted/40 transition rounded-lg"
                  >
                    <BarChart3 className="w-4 h-4 text-primary" />
                    <span>Data Insights</span>
                  </Link>

                  <Link
                    href="/services/consulting"
                    className="flex gap-3 px-4 py-3 items-center hover:bg-muted/40 transition rounded-lg"
                  >
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span>Consulting</span>
                  </Link>
                </div>
              )}
            </div>

            {/* TOP LEVEL LINKS */}
            <Link
              href="/projects"
              className="text-foreground hover:text-primary transition font-medium text-sm xl:text-base"
            >
              Projects
            </Link>

            <Link
              href="/about"
              className="text-foreground hover:text-primary transition font-medium text-sm xl:text-base"
            >
              About
            </Link>

            <Link
              href="/career"
              className="text-foreground hover:text-primary transition font-medium text-sm xl:text-base"
            >
              Career
            </Link>

          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="lg:hidden fixed top-16 sm:top-20 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border shadow-lg pointer-events-auto max-h-[calc(100vh-5rem)] overflow-y-auto"
        >
          <div className="px-4 py-6 space-y-4">
            
            {/* Services Section */}
            <div className="space-y-2">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center justify-between w-full text-foreground hover:text-primary transition font-medium text-lg py-2"
              >
                Services
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isServicesOpen && (
                <div className="pl-4 space-y-2 border-l-2 border-primary/30">
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
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span>Consulting</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Top Level Links */}
            <Link
              href="/projects"
              className="block text-foreground hover:text-primary transition font-medium text-lg py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </Link>

            <Link
              href="/about"
              className="block text-foreground hover:text-primary transition font-medium text-lg py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>

            <Link
              href="/career"
              className="block text-foreground hover:text-primary transition font-medium text-lg py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Career
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
