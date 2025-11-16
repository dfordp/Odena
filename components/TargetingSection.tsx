"use client";

import { motion, useScroll } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function TargetingDial() {
  const ref = useRef<HTMLDivElement | null>(null);
  // Adjust scroll offset so animation starts after 20% and ends at 80% of the section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 20%", "end 80%"],
  });

  const items = [
    { title: "Zero-Shot Ranking Models", desc: "Operators that understand unseen datasets instantly." },
    { title: "Network-Style Pipelines", desc: "Systems that restructure based on data behavior." },
    { title: "High-Throughput Systems", desc: "Millions of events per second across distributed nodes." },
    { title: "Cross-Domain Engines", desc: "One operator chain for code, media, telemetry and more." },
    { title: "Self-Organizing Layers", desc: "Clustering engines that reorganize as data grows." },
    { title: "Enterprise Integrations", desc: "Designed to drop into real stacks: Databricks, Airflow, K8s." }
  ];

  const [active, setActive] = useState(0);

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      const idx = Math.floor(v * (items.length + 0.3));
      setActive(Math.max(0, Math.min(items.length - 1, idx)));
    });
  }, []);

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
            width={isMobile ? "120" : screenWidth < 1280 ? "280" : "360"}
            height={isMobile ? "240" : screenWidth < 1280 ? "300" : "360"}
            viewBox={isMobile ? "0 0 220 240" : screenWidth < 1280 ? "0 0 260 300" : "0 0 280 360"}
            className="absolute left-1 top-7 md:top-14 lg:top-16 opacity-50"
            style={{ transform: "translateX(-80%)" }}
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
              const x = Math.cos((angle * Math.PI) / 144) * RADIUS;
              const y = Math.sin((angle * Math.PI) / 128) * RADIUS;
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
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="absolute w-full"
              animate={{
                opacity: active === i ? 1 : 0,
                x: active === i ? 0 : 20,
                filter: active === i ? "blur(0px)" : "blur(6px)",
              }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
              }}
            >
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-3 sm:mb-4">{item.title}</h3>
              <p className="text-base sm:text-lg text-muted-foreground max-w-xl">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
