"use client";

import Link from "next/link";
import DomainNetworkMap from "@/components/DomainNetworkMap";
import Image from "next/image";
import { useState, useEffect } from "react";
import TargetingSection from "@/components/TargetingSection";
import CallToAction from "@/components/CallToAction";

// simple scroll reveal utility
function useReveal() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 80) setVisible(true);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return visible;
}

export default function Home() {

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground font-sans">

      {/* ===========================================================
          HERO SECTION
      ============================================================ */}
      <section className="pt-40 pb-32 px-6 flex flex-col items-center text-center relative overflow-hidden">

        {/* Ambient glow */}
        <div className="absolute inset-0 flex justify-center pointer-events-none">
          <div className="w-[800px] h-[800px] bg-primary/10 blur-[120px] rounded-full opacity-60" />
        </div>

        {/* Hero Text */}
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight max-w-5xl leading-tight animate-fade-in">
          Systems that <span className="text-primary">interpret data</span>
          <br />
          as fast as you can generate it
        </h1>

        <p className="mt-8 text-lg max-w-3xl text-muted-foreground leading-relaxed animate-fade-in delay-200">
          We build research-first, high-throughput operators that classify, rank,
          and segment multimodal datasets on the fly.  
          Everything adapts. Nothing waits for retraining.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 mt-12 animate-fade-in delay-300">
          <Link
            href="/projects"
            className="h-12 px-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-medium hover:opacity-90 transition"
          >
            Explore Our Systems
          </Link>
          <a
            href="mailto:team@odena.ai"
            className="h-12 px-8 rounded-full border border-border flex items-center justify-center hover:bg-muted transition"
          >
            Collaborate With Us
          </a>
        </div>

        {/* Small stat row */}
        <div className="flex gap-10 mt-16 text-sm opacity-80 animate-fade-in delay-500">
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
