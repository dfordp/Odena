"use client";

import Link from "next/link";
import DomainNetworkMap from "@/components/DomainNetworkMap";
import CallToAction from "@/components/CallToAction";
import SplineAutoLoop from "@/components/SplineAutoLoop";
import OdenaBentoGrid from "@/components/OdenaBentoGrid";

export default function Home() {

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground font-sans">
      {/* ===========================================================
          HERO SECTION
      ============================================================ */}
      <section className="min-h-screen lg:h-screen pt-10 sm:pt-20 md:pt-24 lg:pt-0 pb-12 sm:pb-16 md:pb-20 lg:pb-0 px-4 sm:px-6 lg:px-12 relative overflow-hidden flex items-center justify-center">
        <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-12 xl:gap-20 w-full">
          {/* Spline Element - Shown on top for mobile/tablet, on right side for desktop */}
          <div className="w-full max-w-2xl sm:max-w-3xl lg:hidden flex items-center justify-center touch-none select-none relative">
            <div className="w-full h-[450px] sm:h-[550px] relative">
              <SplineAutoLoop />
              {/* Overlay to hide Spline logo */}
              <div 
                className="absolute bottom-3 right-3 w-37 h-12 pointer-events-none z-10 rounded-xl"
                style={{ backgroundColor: '#fdf6e3' }}
                suppressHydrationWarning
              ></div>
            </div>
          </div>

          {/* Left: Text and Buttons */}
          <div className="lg:flex-1 flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl lg:max-w-xl xl:max-w-2xl lg:pl-24 xl:pl-40 2xl:pl-52">
            {/* Hero Text */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-semibold tracking-tight max-w-2xl leading-tight animate-fade-in">
              Make Sense of Your <span className="text-primary"> Data</span> Quickly, Accurately, Anytime
            </h1>

            <p className="mt-6 sm:mt-8 text-sm sm:text-base max-w-2xl text-muted-foreground leading-relaxed animate-fade-in delay-200">
              Harness the power of high-throughput microservices, multimedia embeddings, and scalable AI workflows to transform how enterprises classify, rank, and segment data in real time, across any domain.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 sm:mt-12 w-full sm:w-auto animate-fade-in delay-300">
              <Link
                href="/projects"
                className="h-11 sm:h-12 px-6 sm:px-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-medium hover:bg-pink-700 transition cursor-pointer text-sm sm:text-base"
              >
                Explore Our Systems
              </Link>
              <a
                href="#connect"
                onClick={(e) => {
              e.preventDefault();
              document.querySelector('#connect')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="h-11 sm:h-12 px-6 sm:px-8 rounded-full bg- border border-border/70 flex items-center justify-center hover:bg-muted/25 hover:border-border/40 transition cursor-pointer text-sm sm:text-base"
              >
                Collaborate With Us
              </a>
            </div>
          </div>

          {/* Right: Spline Element - Desktop only */}
          <div className="hidden lg:flex lg:flex-1 w-full max-w-2xl xl:max-w-3xl h-[550px] xl:h-[650px] items-center justify-center touch-none select-none lg:pr-8 xl:pr-16">
            <div className="w-full h-full relative">
              <SplineAutoLoop />
              {/* Overlay to hide Spline logo */}
              <div 
                className="absolute bottom-3 right-3 w-37 h-12 pointer-events-none z-10 rounded-xl"
                style={{ backgroundColor: '#fdf6e3' }}
                suppressHydrationWarning
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===========================================================
          WHAT WE ARE TARGETING
      ============================================================ */}
      <section className="pt-8 px-4">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center">
          What Are We Offering?
        </h2>
        <OdenaBentoGrid />
      </section>

      {/* ===========================================================
          DOMAIN NETWORK MAP
      ============================================================ */}
      <section className="py-8 px-6 flex flex-col items-center mt-8">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center">
          Domains We’ve Captured And Where We’re Going Next
        </h2>
        <p className="mt-4 text-muted-foreground text-center max-w-2xl">
          A live map of the domains our systems support today, and the ones we’re
          constructing next.  
          Everything is connected. Everything evolves.
        </p>
        <DomainNetworkMap />
      </section>

      {/* ===========================================================
          CONNECT WITH US
      ============================================================ */}
      <section id="connect" className="px-4 flex flex-col items-center text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold">Connect With Us</h2>
        <p className="mt-2 mb-6 text-muted-foreground max-w-xl md:max-w-2xl leading-relaxed">
          Whether you&apos;re building a new system, exploring research collaboration,
          or evaluating infrastructure we’d love to talk.
        </p>
        
        <CallToAction />
      </section>
    </div>
  );
}
