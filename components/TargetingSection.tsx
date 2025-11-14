"use client";

import { motion, useScroll } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function TargetingDial() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
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

  // ----- MAP SCROLL TO ACTIVE ITEM -----
  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      const idx = Math.floor(v * (items.length + 0.3));
      setActive(Math.max(0, Math.min(items.length - 1, idx)));
    });
  }, []);

  // ----- ARC CALCULATIONS -----
  const RADIUS = 190;          // Wheel radius
  const START_ANGLE = 0;     // top-left
  const SPREAD = 100;          // how wide the semicircle is

  return (
    <section ref={ref} className="relative min-h-[260vh] bg-background">

      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex items-center px-10">

        {/* LEFT AREA - PIVOT + ARC + TITLES */}
        <div className="relative w-[45vw] h-[65vh] flex items-center">

          {/* Pivot semicircle */}
          <svg
            width="180"
            height="360"
            viewBox="0 0 180 360"
            className="absolute left-0"
            style={{ transform: "translateX(-50%)" }}
          >
            <path
              d="M90 10 A 80 80 0 0 1 90 350"
              stroke="var(--foreground)"
              strokeWidth="3"
              fill="none"
              opacity="0.35"
            />
          </svg>

          {/* Titles placed on the arc */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-full">
            {items.map((item, i) => {
              const offset = i - active;

              // Angle on arc
              const angle = START_ANGLE + offset * (SPREAD / (items.length - 1));

              // Convert polar → cartesian
              const x = Math.cos((angle * Math.PI) / 180) * RADIUS;
              const y = Math.sin((angle * Math.PI) / 180) * RADIUS;

              return (
                <motion.div
                  key={i}
                  className="absolute text-xl font-medium whitespace-nowrap"
                  animate={{
                    x,
                    y,
                    opacity: Math.abs(offset) > 2.3 ? 0 : 1,
                    scale: offset === 0 ? 1.15 : 0.87,
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
        <div className="w-[55vw] relative">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="absolute"
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
              <h3 className="text-4xl font-semibold mb-4">{item.title}</h3>
              <p className="text-lg text-muted-foreground max-w-xl">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
