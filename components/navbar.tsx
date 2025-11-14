'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="w-full bg-transparent font-sans">
      <div className="max-w-7xl mx-auto px-2">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
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

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium hover:cursor-pointer"
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {isServicesOpen && (
                <div className="absolute top-full mt-2 left-0 w-56 bg-card border border-border rounded-lg shadow-lg py-2 z-50">
                  <Link
                    href="/services/data-ranking"
                    className="block px-4 py-2 text-foreground hover:bg-background transition-colors"
                  >
                    Data Ranking
                  </Link>
                  <Link
                    href="/services/data-segregation"
                    className="block px-4 py-2 text-foreground hover:bg-background transition-colors"
                  >
                    Data Segregation
                  </Link>
                  <Link
                    href="/services/insights"
                    className="block px-4 py-2 text-foreground hover:bg-background transition-colors"
                  >
                    Data Insights
                  </Link>
                  <Link
                    href="/services/consulting"
                    className="block px-4 py-2 text-foreground hover:bg-background transition-colors"
                  >
                    Consulting
                  </Link>
                </div>
              )}
            </div>

            {/* About Us */}
            <Link
              href="/about"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              About Us
            </Link>

            {/* Career */}
            <Link
              href="/career"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Career
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
