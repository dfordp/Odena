"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  ChevronDown,
  SlidersHorizontal,
  Layers,
  BarChart3,
  Sparkles
} from "lucide-react";

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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

  // Scroll shrink effect
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <nav
        className={`
          pointer-events-auto flex items-center justify-between 
          w-full transition-all duration-300
          ${scrolled
            ? "w-[92%] max-w-6xl mt-4 rounded-2xl bg-background/60 backdrop-blur-md shadow-lg border border-border/50"
            : "w-full mt-0 bg-transparent border-none rounded-none"
          }
        `}
      >
        <div
          className={`flex items-center justify-between w-full transition-all duration-300
            ${scrolled ? "px-6 py-2 h-14" : "px-4 py-4 h-20"}
          `}
        >

          {/* LOGO */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/odena-logo.png"
              alt="Odena Logo"
              width={scrolled ? 55 : 80}
              height={scrolled ? 55 : 80}
              className="transition-all duration-300"
            />
          </Link>

          {/* NAVIGATION */}
          <div className="flex items-center gap-8">

            {/* SERVICES DROPDOWN */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center gap-1 text-foreground hover:text-primary transition font-medium"
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isServicesOpen && (
                <div
                  className="
                    absolute top-full mt-3 left-0 w-64 bg-card border border-border 
                    rounded-xl shadow-lg py-3 z-50 animate-fade-in
                  "
                >
                  <Link
                    href="/services/data-ranking"
                    className="flex gap-3 px-4 py-3 items-center hover:bg-muted/40 transition rounded-lg"
                  >
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
              className="text-foreground hover:text-primary transition font-medium"
            >
              Projects
            </Link>

            <Link
              href="/about"
              className="text-foreground hover:text-primary transition font-medium"
            >
              About
            </Link>

            <Link
              href="/career"
              className="text-foreground hover:text-primary transition font-medium"
            >
              Career
            </Link>

          </div>
        </div>
      </nav>
    </div>
  );
}
