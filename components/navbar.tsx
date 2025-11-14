'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  ChevronDown,
  SlidersHorizontal,
  Layers,
  BarChart3,
  Sparkles,
  PackageSearch
} from "lucide-react";

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full bg-transparent font-sans">
      <div className="max-w-7xl mx-auto px-2">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/odena-logo.png"
              alt="Odena Logo"
              width={100}
              height={100}
              priority
              className="transition-transform group-hover:scale-103"
            />
          </Link>

          {/* Nav Links */}
          <div className="flex items-center gap-8">

            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium"
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full mt-2 left-0 w-64 bg-card border border-border rounded-lg shadow-lg py-2 z-50">
                  
                  <Link href="/services/data-ranking" className="flex gap-3 px-4 py-3 items-center hover:bg-muted transition">
                    <SlidersHorizontal className="w-4 h-4 text-primary" />
                    <span>Data Ranking</span>
                  </Link>

                  <Link href="/services/data-segregation" className="flex gap-3 px-4 py-3 items-center hover:bg-muted transition">
                    <Layers className="w-4 h-4 text-primary" />
                    <span>Data Segregation</span>
                  </Link>

                  <Link href="/services/insights" className="flex gap-3 px-4 py-3 items-center hover:bg-muted transition">
                    <BarChart3 className="w-4 h-4 text-primary" />
                    <span>Data Insights</span>
                  </Link>

                  <Link href="/services/consulting" className="flex gap-3 px-4 py-3 items-center hover:bg-muted transition">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span>Consulting</span>
                  </Link>

                  <div className="border-t border-border my-2" />

                  <Link href="/projects" className="flex gap-3 px-4 py-3 items-center hover:bg-muted transition">
                    <PackageSearch className="w-4 h-4 text-primary" />
                    <span>Projects</span>
                  </Link>

                </div>
              )}
            </div>

            {/* Other Links */}
            <Link href="/about" className="text-foreground hover:text-primary transition font-medium">About Us</Link>
            <Link href="/career" className="text-foreground hover:text-primary transition font-medium">Career</Link>

          </div>
        </div>
      </div>
    </nav>
  );
}
