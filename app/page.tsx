"use client";

import Link from "next/link";
import DomainNetworkMap from "@/components/DomainNetworkMap";
import TargetingSection from "@/components/TargetingSection";
import CallToAction from "@/components/CallToAction";



export default function Home() {

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground font-sans">

      {/* ===========================================================
          HERO SECTION
      ============================================================ */}
      <section className="pt-2 pb-20 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
          
          {/* Left: Text and Buttons */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            {/* Hero Text */}
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight max-w-2xl leading-tight animate-fade-in">
              Make Sense of Your <span className="text-primary"> Data</span> Quickly, Accurately, Anytime
            </h1>

            <p className="mt-8 text-lg max-w-2xl text-muted-foreground leading-relaxed animate-fade-in delay-200">
              Harness the power of high-throughput microservices, multimedia embeddings, and scalable AI workflows to transform how enterprises classify, rank, and segment data in real time, across any domain.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mt-12 animate-fade-in delay-300">
              <Link
                href="/projects"
                className="h-12 px-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-medium hover:opacity-90 transition cursor-pointer"
              >
                Explore Our Systems
              </Link>
              <a
                href="mailto:team@odena.ai"
                className="h-12 px-8 rounded-full border border-border flex items-center justify-center hover:bg-muted transition cursor-pointer"
              >
                Collaborate With Us
              </a>
            </div>

            {/* Small stat row */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 mt-16 text-sm opacity-80 animate-fade-in delay-500">
              <div>
                <span className="text-primary font-semibold">2M+ / sec</span>{" "}
                throughput operators
              </div>
              <div>
                <span className="text-primary font-semibold">Zero-shot</span>{" "}
                ranking engines
              </div>
              <div>
                <span className="text-primary font-semibold">Cross-domain</span>{" "}
                generalization
              </div>
            </div>
          </div>

          {/* Right: Spline Element - Hidden on small screens */}
          <div className="hidden md:flex flex-1 w-full h-[650px] lg:h-[750px] items-center justify-center touch-none select-none relative">
            <iframe 
              src='https://my.spline.design/database-gz136BnSzn7JiItLByWnyxzo/' 
              frameBorder='0' 
              width='100%' 
              height='100%'
              title="3D Database Visualization"
              className="touch-none"
              style={{ 
                overflow: 'hidden',
                touchAction: 'none'
              }}
              suppressHydrationWarning
            ></iframe>
            {/* Overlay to hide Spline logo */}
            <div 
              className="absolute bottom-3 right-3 w-37 h-11 pointer-events-none z-10 rounded-xl"
              style={{ backgroundColor: '#fdf6e3' }}
              suppressHydrationWarning
            ></div>
          </div>
        </div>
      </section>

      {/* ===========================================================
          WHAT WE ARE TARGETING
      ============================================================ */}
      <section className="py-32 px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center">
          WHAT WE ARE TARGETING?
        </h2>
        <TargetingSection/>
      </section>

      {/* ===========================================================
          DOMAIN NETWORK MAP
      ============================================================ */}
      <section className="py-32 px-6 flex flex-col items-center ">
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
      <section className="py-32 px-6 flex flex-col items-center text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold">Connect With Us</h2>
        <p className="mt-4 text-muted-foreground max-w-xl leading-relaxed">
          Whether you&apos;re building a new system, exploring research collaboration,
          or evaluating infrastructure we’d love to talk.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center items-center w-full">
          <CallToAction />
        </div>
      </section>
    </div>
  );
}
