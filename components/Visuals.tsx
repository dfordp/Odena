"use client";

import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

function useIsMobile(breakpoint = 1024) {
  const [isMobile, setMobile] = useState<boolean>(typeof window !== "undefined" ? window.innerWidth < breakpoint : false);
  useEffect(() => {
    const onResize = () => setMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [breakpoint]);
  return isMobile;
}


export const AdaptiveVisual = () => {
  const reduce = useReducedMotion();

  return (
    <g>
      {/* Background */}
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--foreground)" strokeWidth="0.5" opacity="0.08"/>
        </pattern>
        <linearGradient id="flowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.6"/>
          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.1"/>
        </linearGradient>
      </defs>
      <rect width="640" height="260" fill="url(#grid)" />

      {/* HEADER */}
      <text x="320" y="18" fontSize="12" fill="var(--primary)" textAnchor="middle" fontWeight="600">
        Data Flow → Self-Adaptive Engine → Optimized Output
      </text>

      {/* LEFT: DATA INPUT */}
      <g>
        <circle cx="50" cy="100" r="8" fill="var(--primary)" opacity="0.9"/>
        <text x="50" y="130" fontSize="11" fill="var(--primary)" textAnchor="middle" fontWeight="600">Input</text>
        <text x="50" y="145" fontSize="8" fill="var(--muted-foreground)" textAnchor="middle">JSON • CSV • Binary</text>

        {/* Flow particles */}
        {[0, 1, 2].map((i) => (
          <motion.circle
            key={`flow-${i}`}
            cx="50" cy="110" r="2.5"
            fill="var(--primary)"
            opacity="0.6"
            animate={reduce ? {} : { cy: [110, 190] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.5, ease: "linear" }}
          />
        ))}

        {/* Input connector */}
        <line x1="50" y1="110" x2="50" y2="190" stroke="var(--primary)" strokeWidth="1" opacity="0.2" strokeDasharray="2,2"/>
      </g>

      {/* CENTER: ADAPTIVE ENGINE CORE */}
      <g>
        {/* Main container */}
        <rect x="140" y="60" width="360" height="140" rx="8" fill="none" stroke="var(--primary)" strokeWidth="2" opacity="0.5"/>
        <text x="150" y="76" fontSize="9" fill="var(--primary)" fontWeight="700">ADAPTIVE ENGINE</text>

        {/* Three-stage pipeline */}
        {[
          { x: 170, label: "Parse", desc: "Structure" },
          { x: 270, label: "Infer", desc: "Schema" },
          { x: 370, label: "Optimize", desc: "Tune" }
        ].map((stage, i) => (
          <g key={`stage-${i}`}>
            {/* Box */}
            <rect x={stage.x - 40} y="100" width="80" height="50" rx="4" fill="none" stroke="var(--primary)" strokeWidth="1.2" opacity="0.7"/>
            <text x={stage.x} y="122" fontSize="10" fill="var(--primary)" textAnchor="middle" fontWeight="600">{stage.label}</text>
            <text x={stage.x} y="138" fontSize="8" fill="var(--muted-foreground)" textAnchor="middle">{stage.desc}</text>

            {/* Arrow to next stage */}
            {i < 2 && (
              <path d={`M ${stage.x + 40} 125 L ${stage.x + 60} 125`} stroke="var(--primary)" strokeWidth="1.5" opacity="0.4" markerEnd="url(#arrowSmall)"/>
            )}
          </g>
        ))}

        {/* Central neural network visualization */}
        <circle cx="320" cy="125" r="35" fill="none" stroke="var(--primary)" strokeWidth="1.5" opacity="0.3"/>
        <circle cx="320" cy="125" r="22" fill="none" stroke="var(--primary)" strokeWidth="1.5" opacity="0.4"/>
        <circle cx="320" cy="125" r="10" fill="var(--primary)" opacity="0.2"/>

        {/* Core label */}
        <text x="320" y="195" fontSize="9" fill="var(--primary)" textAnchor="middle" fontWeight="600">Self-Reshaping Core</text>
      </g>

      {/* RIGHT: PERFORMANCE OUTPUT */}
      <g>
        {/* Output indicator */}
        <path d="M 570 100 L 600 125 L 570 150 Z" fill="var(--primary)" opacity="0.75"/>

        {/* Metrics stack */}
        <g>
          {/* Accuracy */}
          <text x="520" y="80" fontSize="9" fill="var(--muted-foreground)" fontWeight="600">Accuracy</text>
          <rect x="505" y="85" width="40" height="10" rx="2" fill="none" stroke="var(--primary)" strokeWidth="0.8" opacity="0.5"/>
          <rect x="505" y="85" width="36" height="10" fill="var(--primary)" opacity="0.5" rx="2"/>
          <text x="555" y="92" fontSize="8" fill="var(--primary)" fontWeight="600">98%</text>

          {/* Latency */}
          <circle cx="515" cy="115" r="2" fill="var(--primary)" opacity="0.7"/>
          <text x="525" y="118" fontSize="8" fill="var(--muted-foreground)">12ms</text>

          {/* Throughput */}
          <circle cx="515" cy="135" r="2" fill="var(--primary)" opacity="0.7"/>
          <text x="525" y="138" fontSize="8" fill="var(--muted-foreground)">45K/sec</text>
        </g>

        <text x="565" y="175" fontSize="9" fill="var(--primary)" textAnchor="middle" fontWeight="600">Output</text>
      </g>

      {/* FEEDBACK LOOP */}
      <motion.path
        d="M 60 190 Q 320 220 580 190"
        stroke="var(--primary)"
        strokeWidth="1"
        fill="none"
        strokeDasharray="3,3"
        opacity="0.3"
        animate={reduce ? {} : { strokeDashoffset: [0, 6] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
      />
      <text x="320" y="237" fontSize="8" fill="var(--muted-foreground)" textAnchor="middle" fontWeight="500">
        Continuous Learning Loop
      </text>

      {/* Feature badges */}
      {[
        { text: "Real-time", x: 150, y: 40 },
        { text: "AutoML", x: 390, y: 40 },
        { text: "Zero-Config", x: 320, y: 250 }
      ].map((badge, i) => (
        <g key={`badge-${i}`}>
          <rect x={badge.x - 35} y={badge.y - 10} width="70" height="18" rx="4" fill="none" stroke="var(--primary)" strokeWidth="0.8" opacity="0.4"/>
          <text x={badge.x} y={badge.y + 3} fontSize="7" fill="var(--muted-foreground)" textAnchor="middle" fontWeight="600">{badge.text}</text>
        </g>
      ))}

      {/* Arrow marker */}
      <defs>
        <marker id="arrowSmall" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <polygon points="0 0, 6 3, 0 6" fill="var(--primary)" opacity="0.4"/>
        </marker>
      </defs>
    </g>
  );
};

export const DynamicPipeline: React.FC<{ tooltip?: string }> = ({ tooltip }) => {
  const isMobile = useIsMobile();
  const reduce = useReducedMotion();
  const packetAnim = reduce || isMobile ? {} : { cx: [120, 520] };

  return (
    <svg viewBox="0 0 640 180" width="100%" height="360" className="block mx-auto">
      <text x="40" y="24" style={{ fill: "var(--color-muted)", fontFamily: "var(--font-mono)", fontSize: 12 }}>DAG: parse → transform → aggregate</text>

      {/* stages */}
      {["Parse", "Transform", "Aggregate"].map((label, i) => (
        <g key={label}>
          <rect x={80 + i * 180} y={50} width={140} height={54} rx={8} fill="transparent" stroke="var(--color-border)" strokeWidth={1.2} />
          <text x={150 + i * 180} y={82} textAnchor="middle" style={{ fill: "var(--color-foreground)", fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 700 }}>
            {label}
          </text>
        </g>
      ))}

      {/* arrows */}
      {[0, 1].map((i) => (
        <path key={`arrow-${i}`} d={`M ${220 + i * 180} 77 L ${260 + i * 180} 77`} stroke="var(--color-muted)" strokeWidth={1.4} strokeLinecap="round" markerEnd="url(#a2)" opacity={0.6} />
      ))}

      {/* moving packets */}
      {[0, 1, 2].map((i) => (
        <motion.circle key={`pkt-${i}`} cx={120} cy={77 + i * 12} r={4} fill="var(--color-primary)"
          animate={packetAnim}
          transition={{ duration: 3.2, repeat: Infinity, delay: i * 0.6, ease: "linear" }}
        />
      ))}

      <defs>
        <marker id="a2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 z" fill="var(--color-border)"></path>
        </marker>
      </defs>
    </svg>
  );
};

export const DecisionLayer: React.FC<{ tooltip?: string }> = ({ tooltip }) => {
  const reduce = useReducedMotion();
  const pulse = reduce ? {} : { scale: [1, 1.04, 1] };

  return (
    <svg viewBox="0 0 640 220" width="100%" height="440" className="block mx-auto">
      <text x="40" y="22" style={{ fill: "var(--color-muted)", fontFamily: "var(--font-mono)", fontSize: 12 }}>Branching evaluator — instant operators</text>

      {/* root node */}
      <motion.rect x={280} y={60} width={80} height={48} rx={8} fill="transparent" stroke="var(--color-primary)" strokeWidth={1.4} animate={pulse} transition={{ duration: 1.8, repeat: Infinity }} />
      <text x={320} y={92} textAnchor="middle" style={{ fill: "var(--color-primary)", fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 700 }}>eval()</text>

      {/* branches */}
      <line x1={320} y1={108} x2={200} y2={160} stroke="var(--color-border)" strokeWidth={1.1} strokeDasharray="3 4" />
      <line x1={320} y1={108} x2={440} y2={160} stroke="var(--color-border)" strokeWidth={1.1} strokeDasharray="3 4" />

      <rect x={160} y={160} width={80} height={44} rx={6} fill="transparent" stroke="var(--color-muted)" />
      <text x={200} y={188} textAnchor="middle" style={{ fill: "var(--color-muted)", fontFamily: "var(--font-mono)", fontSize: 12 }}>True</text>

      <rect x={400} y={160} width={80} height={44} rx={6} fill="transparent" stroke="var(--color-muted)" />
      <text x={440} y={188} textAnchor="middle" style={{ fill: "var(--color-muted)", fontFamily: "var(--font-mono)", fontSize: 12 }}>False</text>

      {/* result */}
      <rect x={280} y={180} width={120} height={22} rx={6} fill="transparent" stroke="var(--color-border)" />
      <text x={340} y={196} textAnchor="middle" style={{ fill: "var(--color-muted)", fontFamily: "var(--font-mono)", fontSize: 11 }}>→ route</text>
    </svg>
  );
};

export const MultiFormat: React.FC<{ tooltip?: string }> = ({ tooltip }) => {
  const reduce = useReducedMotion();
  const rotate = reduce ? {} : { rotate: [0, 4, -2, 0] };

  return (
    <svg viewBox="0 0 640 260" width="100%" height="440" className="block mx-auto">
      <text x="40" y="24" style={{ fill: "var(--color-muted)", fontFamily: "var(--font-mono)", fontSize: 12 }}>Single engine for code/media/text/logs</text>

      {/* engine core */}
      <motion.rect x={260} y={90} width={120} height={80} rx={8} fill="transparent" stroke="var(--color-primary)" strokeWidth={1.4} animate={{ scale: [1, 1.03, 1] }} transition={{ duration: 2.6, repeat: Infinity }} />
      <text x={320} y={140} textAnchor="middle" style={{ fill: "var(--color-primary)", fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 700 }}>ENGINE</text>

      {/* format nodes around */}
      {[
        { lbl: ".py", x: 130, y: 60 },
        { lbl: ".mp4", x: 500, y: 60 },
        { lbl: ".log", x: 130, y: 220 },
        { lbl: ".txt", x: 500, y: 220 }
      ].map((f, i) => (
        <g key={i}>
          <motion.rect x={f.x - 36} y={f.y - 18} width={72} height={36} rx={6} fill="transparent" stroke="var(--color-border)" strokeWidth={1.0} animate={rotate} transition={{ duration: 4.2, repeat: Infinity, delay: i * 0.2 }} />
          <text x={f.x} y={f.y + 4} textAnchor="middle" style={{ fill: "var(--color-muted)", fontFamily: "var(--font-mono)", fontSize: 12 }}>{f.lbl}</text>
          <line x1={320} y1={130} x2={f.x} y2={f.y} stroke="var(--color-border)" strokeWidth={1} strokeDasharray="3 4" opacity={0.6} />
        </g>
      ))}
    </svg>
  );
};

export const SelfMaintaining: React.FC<{ tooltip?: string }> = ({ tooltip }) => {
  const reduce = useReducedMotion();
  const pulse = reduce ? {} : { scale: [1, 1.06, 1] };

  return (
    <svg viewBox="0 0 640 260" width="100%" height="440" className="block mx-auto">
      <text x="40" y="24" style={{ fill: "var(--color-muted)", fontFamily: "var(--font-mono)", fontSize: 12 }}>Self-heal · clean · reorganize · optimize</text>

      <motion.circle cx={320} cy={120} r={46} fill="transparent" stroke="var(--color-border)" strokeWidth={1.2} animate={pulse} transition={{ duration: 2.8, repeat: Infinity }} />
      <text x={320} y={126} textAnchor="middle" style={{ fill: "var(--color-foreground)", fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 700 }}>SELF-HEAL</text>

      {/* peripheral cycles */}
      {["Clean", "Correct", "Reorg", "Optimize"].map((label, i) => {
        const angle = (i / 4) * Math.PI * 2 - Math.PI / 2;
        const x = 320 + Math.cos(angle) * 110;
        const y = 120 + Math.sin(angle) * 80;
        return (
          <g key={i}>
            <line x1={320} y1={120} x2={x} y2={y} stroke="var(--color-border)" strokeWidth={1} strokeDasharray="2 4" opacity={0.5} />
            <rect x={x - 36} y={y - 16} width={72} height={32} rx={6} fill="transparent" stroke="var(--color-primary)" strokeWidth={1} opacity={0.9} />
            <text x={x} y={y + 6} textAnchor="middle" style={{ fill: "var(--color-muted)", fontFamily: "var(--font-mono)", fontSize: 11 }}>{label}</text>
          </g>
        );
      })}
    </svg>
  );
};

export const StackCompatibility: React.FC<{ tooltip?: string }> = ({ tooltip }) => {
  const reduce = useReducedMotion();

  return (
    <svg viewBox="0 0 640 260" width="100%" height="440" className="block mx-auto">
      <text x="40" y="22" style={{ fill: "var(--color-muted)", fontFamily: "var(--font-mono)", fontSize: 12 }}>From prototype → distributed clusters</text>

      {[
        { label: "Application", y: 56 },
        { label: "Service", y: 96 },
        { label: "Runtime", y: 136 },
        { label: "Kernel", y: 176 },
        { label: "Hardware", y: 216 }
      ].map((layer, i) => (
        <g key={layer.label}>
          <rect x={120 - i * 6} y={layer.y} width={400 + i * 12} height={28} rx={6} fill="transparent" stroke="var(--color-border)" strokeWidth={1.0} />
          <text x={320} y={layer.y + 18} textAnchor="middle" style={{ fill: "var(--color-muted)", fontFamily: "var(--font-mono)", fontSize: 12 }}>{layer.label}</text>
        </g>
      ))}

      <line x1={320} y1={56} x2={320} y2={244} stroke="var(--color-border)" strokeWidth={1} strokeDasharray="3 5" opacity={0.5} />
    </svg>
  );
};