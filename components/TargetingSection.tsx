"use client";

import { motion, useScroll } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { AdaptiveVisual, DecisionLayer, DynamicPipeline, MultiFormat, SelfMaintaining, StackCompatibility } from "./Visuals";

export default function TargetingDial() {
  const ref = useRef<HTMLDivElement | null>(null);
  // Adjust scroll offset so animation starts after 20% and ends at 80% of the section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 20%", "end 80%"],
  });

  const items = [
    {
      title: "Adaptive Data Models",
      desc: "Models that reshape themselves around the data they're given, without requiring manual tuning or retraining."
    },
    {
      title: "Dynamic Processing Chains",
      desc: "Pipelines that reconfigure on the fly to match workload, structure, or behavior always using the most efficient path."
    },
    {
      title: "Real-Time Decision Layers",
      desc: "Fast systems that evaluate incoming data instantly and choose the most useful operations with zero delay."
    },
    {
      title: "Unified Format Engines",
      desc: "One engine for every format code, video, logs, text so teams don't juggle separate tools for each domain."
    },
    {
      title: "Self-Maintaining Structures",
      desc: "Systems that clean, correct, and reorganize themselves as information grows, reducing manual effort to near zero."
    },
    {
      title: "Deep Stack Compatibility",
      desc: "Built to drop cleanly into existing environments, scaling from prototypes to massive distributed workloads."
    }
  ];

  const visuals = [
    AdaptiveVisual,
    DynamicPipeline,
    DecisionLayer,
    MultiFormat,
    SelfMaintaining,
    StackCompatibility
  ];


  const [active, setActive] = useState(0);

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      const idx = Math.floor(v * (items.length + 0.3));
      setActive(Math.max(0, Math.min(items.length - 1, idx)));
    });
  }, [items.length, scrollYProgress]);

  // ----- ARC CALCULATIONS -----
  const [isMobile, setIsMobile] = useState(false);
  const [screenWidth, setScreenWidth] = useState(1920); // Default to desktop size
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
      setScreenWidth(window.innerWidth);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const RADIUS = isMobile ? 120 : 190;          // Wheel radius
  const START_ANGLE = 0;     // top-left
  const SPREAD = 100;          // how wide the semicircle is

  return (
    <section ref={ref} className="relative min-h-[260vh] bg-background">

      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex flex-col lg:flex-row items-center px-4 sm:px-6 lg:px-10 py-4">

        {/* LEFT AREA - PIVOT + ARC + TITLES */}
        <div className="relative w-full lg:w-[45vw] h-[40vh] lg:h-[65vh] flex items-center justify-center">

          {/* Pivot semicircle */}
            <svg
            width={isMobile ? "120" : screenWidth < 1280 ? "0" : "360"}
            height={isMobile ? "240" : screenWidth < 1280 ? "0" : "360"}
            viewBox={isMobile ? "0 0 220 240" : screenWidth < 1280 ? "0 0 260 300" : "0 0 280 360"}
            className={`absolute opacity-50 ${isMobile ? "block" : screenWidth < 1280 ? "hidden" : "block"}`}
            style={{ 
              transform: isMobile ? "translateX(-80%)" : screenWidth < 1280 ? "translateX(-85%)" : "translateX(-80%)",
              left: isMobile ? "0%" : screenWidth < 1280 ? "0%" : "4px",
              top: isMobile ? "10%" : screenWidth < 1280 ? "15%" : "10%"
            }}
            >
            <path
              d={isMobile ? "M60 0 A 55 60 0 0 1 60 240" : screenWidth < 1280 ? "M70 0 A 65 75 0 0 1 70 300" : "M90 0 A 75 90 0 0 1 90 360"}
              stroke="var(--foreground)"
              strokeWidth={isMobile ? "2" : screenWidth < 1280 ? "2.5" : "3"}
              fill="none"
              opacity="0.35"
            />
            </svg>
          <div className="absolute top-9/10 -translate-y-1/2 w-full h-full" style={{ transform: "translateX(-20%)" }}>
            {items.map((item, i) => {
              const offset = i - active;
              const angle = START_ANGLE + offset * (SPREAD / (items.length - 1));
              const x = Math.cos((angle * Math.PI) / 180) * RADIUS;
              const y = Math.sin((angle * Math.PI) / 160) * RADIUS;
              
              return (
                <motion.div
                  key={i}
                  className={`absolute font-medium whitespace-nowrap ${isMobile ? 'text-sm' : 'text-xl'}`}
                  animate={{
                    x,
                    y,
                    opacity: Math.abs(offset) > 2.3 ? 0 : 1,
                    scale: offset === 0 ? (isMobile ? 1.1 : 1.15) : (isMobile ? 0.85 : 0.87),
                    rotate: angle * 0.18
                  }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  style={{ transformOrigin: "left center" }}
                >
                  <span
                    className={
                      offset === 0
                        ? "text-primary font-semibold"
                        : "text-muted-foreground"
                    }
                  >
                    {item.title}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* RIGHT SIDE – DETAILS ALIGNED WITH ACTIVE TITLE */}
        <div className="w-full lg:w-[55vw] relative mt-8 lg:mt-0 px-4 lg:px-0">
          {items.map((item, i) => {
            const Visual = visuals[i];

            return (
               <motion.div
                key={i}
                className="absolute w-full flex flex-col gap-8 items-start"
                animate={{
                  opacity: active === i ? 1 : 0,
                  x: active === i ? 0 : 40,
                }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                {/* Visual - with proper height constraint */}
                {/* <div className="w-full max-w-2xl">
                  <svg viewBox="0 0 640 260" width="100%" height="auto" preserveAspectRatio="xMidYMid meet" className="block mx-auto">
                    <Visual />
                  </svg>
                </div> */}

                {/* Text */}
                <div className="w-full">
                  <p className="text-muted-foreground max-w-xl text-base lg:text-lg leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
