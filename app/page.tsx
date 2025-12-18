"use client";

import Link from "next/link";
import DomainNetworkMap from "@/components/DomainNetworkMap";
import TargetingSection from "@/components/TargetingSection";
import CallToAction from "@/components/CallToAction";
import SplineAutoLoop from "@/components/SplineAutoLoop";

export default function Home() {

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground font-sans">
      {/* ===========================================================
          HERO SECTION
      ============================================================ */}
      <section className="h-dvh lg:min-h-0 pt-16 sm:pt-20 md:pt-20 lg:pt-14 pb-6 sm:pb-10 md:pb-20 px-4 sm:px-6 relative overflow-hidden flex items-center">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-3 sm:gap-5 lg:gap-12 w-full h-full lg:h-auto">
          {/* Spline Element - Shown on top for mobile/tablet, on right side for desktop */}
          <div className="w-[120%] sm:w-[110%] lg:w-full lg:hidden flex-[0_0_50%] sm:flex-[0_0_52%] max-h-[380px] sm:max-h-[420px] flex items-center justify-center touch-none select-none relative -mx-[10%] sm:-mx-[5%]">
            <div className="w-full h-full scale-150 sm:scale-125">
              <SplineAutoLoop />
            </div>
            {/* Overlay to hide Spline logo */}
            <div 
              className="absolute bottom-3 right-3 w-37 h-12 pointer-events-none z-10 rounded-xl"
              style={{ backgroundColor: '#fdf6e3' }}
              suppressHydrationWarning
            ></div>
          </div>

          {/* Left: Text and Buttons */}
          <div className="flex-[0_0_50%] sm:flex-[0_0_48%] lg:flex-1 flex flex-col items-center lg:items-start text-center lg:text-left md:pl-28">
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
          <div className="hidden lg:flex flex-1 w-full h-[500px] xl:h-[650px] 2xl:h-[750px] items-center justify-center touch-none select-none relative">
            <SplineAutoLoop />
            {/* Overlay to hide Spline logo */}
            <div 
              className="absolute bottom-3 right-3 w-37 h-12 pointer-events-none z-10 rounded-xl"
              style={{ backgroundColor: '#fdf6e3' }}
              suppressHydrationWarning
            ></div>
          </div>
        </div>
      </section>

      {/* ===========================================================
          WHAT WE ARE TARGETING
      ============================================================ */}
      <section className="pt-8 px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center">
          What Are We Offering?
        </h2>
        <TargetingSection/>
      </section>

      {/* ===========================================================
          DOMAIN NETWORK MAP
      ============================================================ */}
      <section className="py-8 px-6 flex flex-col items-center ">
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
