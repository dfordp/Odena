/* eslint-disable react-hooks/refs */
"use client";

import React, { useEffect, useRef, useState } from "react";

type NodeType = "captured" | "current" | "next";
type Node = {
  id: string;
  label: string;
  type: NodeType;
  desc?: string;
  value?: number;
  sub?: string[];
  x?: number;
  y?: number;
};

type LinkT = { source: string; target: string; weight?: number };

const nodes: Node[] = [
  { id: "coding", label: "Coding", type: "captured", desc: "Repository insights, code dependency mapping, PR ranking", value: 10, sub: ["Code analysis", "Impact mapping"] },
  { id: "education", label: "Education", type: "captured", desc: "Assignment scoring, conceptual understanding patterns", value: 9, sub: ["Grading", "Learning analytics"] },
  { id: "satellite", label: "Satellite Imagery", type: "captured", desc: "Land use classification, cloud removal, region segmentation", value: 10, sub: ["Geosegmentation", "Change detection"] },
  { id: "social", label: "Social Data", type: "captured", desc: "Trend detection, content clustering, noise filtering", value: 8, sub: ["Trend mapping", "Signal extraction"] },
  { id: "research", label: "Research Data", type: "captured", desc: "Paper classification, citation mapping, topic discovery", value: 8, sub: ["Topic mapping", "Citation graphing"] },
  { id: "telemetry", label: "Telemetry Streams", type: "current", desc: "High-frequency event signals from distributed systems", value: 8, sub: ["Event flows", "Live segmentation"] },
  { id: "logistics", label: "Logistics", type: "current", desc: "Routing signals, delivery events, warehouse telemetry", value: 8, sub: ["Route scoring", "Node bottlenecks"] },
  { id: "finance", label: "Finance Signals", type: "current", desc: "Transaction patterns, risk events, anomaly flows", value: 7, sub: ["Risk scoring", "Micro-pattern detection"] },
  { id: "climate", label: "Climate Data", type: "current", desc: "Weather patterns, region shifts, environmental signals", value: 7, sub: ["Weather segmentation", "Geo-temporal shifts"] },
  { id: "security", label: "Security Events", type: "current", desc: "Access logs, network flows, intrusion pattern signals", value: 7, sub: ["Threat patterns", "Access anomalies"] },
  { id: "health", label: "Health Signals", type: "current", desc: "Vital signs, waveform changes, patient trends", value: 7, sub: ["ECG events", "Vitals segmentation"] },
  { id: "commerce", label: "E-Commerce", type: "current", desc: "Browsing flows, demand curves, customer signals", value: 8, sub: ["Demand curves", "Product activity"] },
  { id: "gaming", label: "Gaming Telemetry", type: "current", desc: "Player behavior, match signals, anti-cheat patterns", value: 7, sub: ["Match data", "Behavior signals"] },
  { id: "travel", label: "Travel Systems", type: "current", desc: "Flight delays, route flows, airport congestion patterns", value: 7, sub: ["Delay patterns", "Traffic flows"] },
  { id: "agri", label: "Agriculture", type: "next", desc: "Crop health signals, soil patterns, farm activity data", value: 7, sub: ["Plant health", "Soil signals"] },
  { id: "manufacturing", label: "Manufacturing", type: "next", desc: "Machine telemetry, defect patterns, process streams", value: 7, sub: ["Machine events", "Quality signals"] },
  { id: "energy", label: "Energy", type: "next", desc: "Grid flows, consumption patterns, sensor events", value: 7, sub: ["Load curves", "Consumption spikes"] },
  { id: "mobility", label: "Mobility", type: "next", desc: "Vehicle signals, traffic telemetry, route behaviors", value: 8, sub: ["Traffic patterns", "Vehicle events"] },
  { id: "telecom", label: "Telecom", type: "next", desc: "Tower performance, packet loss flows, network routing", value: 7, sub: ["Network flows", "Signal stability"] },
  { id: "public", label: "Public Data", type: "next", desc: "Civic signals, government datasets, population shifts", value: 6, sub: ["Census patterns", "Public signals"] },
  { id: "sports", label: "Sports Analytics", type: "next", desc: "Player stats, motion tracking, event flow", value: 7, sub: ["Match flow", "Player segmentation"] },
  { id: "retail", label: "Retail", type: "next", desc: "Footfall signals, product movement, store operations", value: 6, sub: ["Footfall maps", "Store telemetry"] },
  { id: "realestate", label: "Real Estate", type: "next", desc: "Price movement, locality shifts, amenity signals", value: 6, sub: ["Price curves", "Locality signals"] },
  { id: "entertainment", label: "Entertainment", type: "next", desc: "Viewership patterns, scene segmentation, engagement flows", value: 6, sub: ["Scene changes", "Engagement tracks"] },
  { id: "legal", label: "Legal Data", type: "next", desc: "Case networks, citation chains, pattern matching", value: 6, sub: ["Case clustering", "Citation flows"] },
  { id: "supplychain", label: "Supply Chain", type: "next", desc: "Inventory signals, movement flows, bottlenecks", value: 7, sub: ["Inventory shifts", "Warehouse telemetry"] }
];

const links: LinkT[] = [
  { source: "coding", target: "security", weight: 1 },
  { source: "satellite", target: "climate", weight: 1 },
  { source: "education", target: "finance", weight: 0.9 },
  { source: "social", target: "commerce", weight: 1 },
  { source: "research", target: "health", weight: 0.8 },
  { source: "logistics", target: "supplychain", weight: 1 },
  { source: "commerce", target: "retail", weight: 1 },
  { source: "finance", target: "security", weight: 1 },
  { source: "telemetry", target: "mobility", weight: 1 },
  { source: "climate", target: "agri", weight: 1 },
  { source: "health", target: "public", weight: 0.8 },
  { source: "gaming", target: "security", weight: 0.7 },
  { source: "travel", target: "mobility", weight: 0.7 },
  { source: "logistics", target: "manufacturing", weight: 0.9 },
  { source: "telemetry", target: "telecom", weight: 0.9 },
  { source: "commerce", target: "entertainment", weight: 0.8 },
  { source: "finance", target: "realestate", weight: 0.7 },
  { source: "security", target: "energy", weight: 0.8 },
  { source: "energy", target: "manufacturing", weight: 1 },
  { source: "agri", target: "public", weight: 0.6 },
  { source: "sports", target: "entertainment", weight: 0.6 },
  { source: "realestate", target: "public", weight: 0.5 },
  { source: "supplychain", target: "manufacturing", weight: 0.8 }
];

function clamp(v: number, a: number, b: number) {
  return Math.max(a, Math.min(b, v));
}

function getColor(type: NodeType) {
  if (type === "captured") return "#ff419d";
  if (type === "current") return "#3de6f2";
  return "#ffb818";
}

export default function DomainNetworkMap() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [size, setSize] = useState({ width: 1200, height: 600 });
  const [positions, setPositions] = useState<Node[]>([]);
  const [hover, setHover] = useState<{ id: string; clientX: number; clientY: number } | null>(null);

  // Responsive sizing
  useEffect(() => {
    function updateSize() {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const width = Math.max(rect.width, 400);
        const height = Math.max(width * 0.75, 500);
        setSize({ width, height });
      }
    }
    updateSize();
    const ro = new window.ResizeObserver(updateSize);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  // Place nodes on concentric rings by type, animate rotation
  useEffect(() => {
    const { width, height } = size;
    const centerX = width / 2;
    const centerY = height / 2;
    const captured = nodes.filter((n) => n.type === "captured");
    const current = nodes.filter((n) => n.type === "current");
    const next = nodes.filter((n) => n.type === "next");

    const radii = [
      Math.min(width, height) * 0.18,
      Math.min(width, height) * 0.32,
      Math.min(width, height) * 0.46,
    ];

    function place(arr: Node[], radius: number, phase = 0) {
      const step = (2 * Math.PI) / arr.length;
      return arr.map((n, i) => ({
        ...n,
        x: centerX + Math.cos(i * step + phase) * radius,
        y: centerY + Math.sin(i * step + phase) * radius,
      }));
    }

    setPositions([
      ...place(captured, radii[0], 0.1),
      ...place(current, radii[1], Math.PI / 8),
      ...place(next, radii[2], Math.PI / 6),
    ]);
  }, [size]);

  // Animate rotation
  useEffect(() => {
    let frame: number;
    let t = 0;
    function animate() {
      t += 0.002;
      setPositions((prev) => {
        const { width, height } = size;
        const centerX = width / 2;
        const centerY = height / 2;
        const captured = prev.filter((n) => n.type === "captured");
        const current = prev.filter((n) => n.type === "current");
        const next = prev.filter((n) => n.type === "next");
        const radii = [
          Math.min(width, height) * 0.18,
          Math.min(width, height) * 0.32,
          Math.min(width, height) * 0.46,
        ];
        function place(arr: Node[], radius: number, phase = 0, speed = 1) {
          const step = (2 * Math.PI) / arr.length;
          return arr.map((n, i) => ({
            ...n,
            x: centerX + Math.cos(i * step + phase + t * speed) * radius,
            y: centerY + Math.sin(i * step + phase + t * speed) * radius,
          }));
        }
        return [
          ...place(captured, radii[0], 0.1, 1.2),
          ...place(current, radii[1], Math.PI / 8, 0.8),
          ...place(next, radii[2], Math.PI / 6, 0.5),
        ];
      });
      frame = requestAnimationFrame(animate);
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [size]);

  function nodeById(id: string) {
    return positions.find((p) => p.id === id);
  }

  function tooltipStyle(clientX: number, clientY: number) {
    const box = containerRef.current?.getBoundingClientRect();
    if (!box) return { left: clientX + 12, top: clientY + 12 };
    return { left: clientX - box.left + 12, top: clientY - box.top + 12 };
  }

  function linkPath(sx: number, sy: number, tx: number, ty: number) {
    const mx = (sx + tx) / 2;
    const my = (sy + ty) / 2;
    const dx = tx - sx;
    const dy = ty - sy;
    const nx = -dy;
    const ny = dx;
    const nl = Math.sqrt(nx * nx + ny * ny) || 1;
    const offset = clamp(0.06 * Math.sqrt(dx * dx + dy * dy), 8, 40);
    const cx = mx + (nx / nl) * offset * Math.sin((sx + sy + tx + ty) * 0.0003);
    const cy = my + (ny / nl) * offset * Math.cos((sx + sy + tx + ty) * 0.0003);
    return `M ${sx} ${sy} Q ${cx} ${cy} ${tx} ${ty}`;
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full mx-auto py-4 sm:py-6"
      style={{ minHeight: Math.max(size.height, 500) }}
    >
      <div className="flex flex-wrap items-center justify-center mb-3 sm:mb-4 px-2 sm:px-4 gap-3 sm:gap-6">
        <div className="flex items-center gap-2 text-xs sm:text-sm">
          <span className="inline-block w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border border-black" style={{ background: "#ffb818" }} />
          <span>Next</span>
        </div>
        <div className="flex items-center gap-2 text-xs sm:text-sm">
          <span className="inline-block w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border border-black" style={{ background: "#3de6f2" }} />
          <span>Current</span>
        </div>
        <div className="flex items-center gap-2 text-xs sm:text-sm">
          <span className="inline-block w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border border-black" style={{ background: "#ff419d" }} />
          <span>Captured</span>
        </div>
      </div>
      <div className="relative" style={{ minHeight: size.height }}>
        <svg
          viewBox={`0 0 ${size.width} ${size.height}`}
          width={size.width}
          height={size.height}
          style={{ width: "100%", height: "auto", display: "block" }}
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <radialGradient id="bgGrad" cx="50%" cy="40%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.04)" />
              <stop offset="45%" stopColor="rgba(0,0,0,0.02)" />
              <stop offset="100%" stopColor="rgba(0,0,0,0.0)" />
            </radialGradient>
          </defs>
          <rect x={0} y={0} width={size.width} height={size.height} fill="url(#bgGrad)" rx={8} />
          {/* Concentric rings */}
          <g opacity={0.08} stroke="currentColor" className="text-muted-foreground">
            <circle cx={size.width / 2} cy={size.height / 2} r={Math.min(size.width, size.height) * 0.18} fill="none" strokeWidth={3} strokeDasharray="6 6" />
            <circle cx={size.width / 2} cy={size.height / 2} r={Math.min(size.width, size.height) * 0.32} fill="none" strokeWidth={2} strokeDasharray="8 8" />
            <circle cx={size.width / 2} cy={size.height / 2} r={Math.min(size.width, size.height) * 0.46} fill="none" strokeWidth={1.6} strokeDasharray="10 10" />
          </g>
          {/* Links */}
          <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
            {links.map((l, idx) => {
              const s = nodeById(l.source);
              const t = nodeById(l.target);
              if (!s || !t) return null;
              const strokeOpacity = clamp(0.08 + (l.weight ?? 0.8) * 0.16, 0.08, 0.9);
              const strokeW = clamp((l.weight ?? 0.8) * 2, 0.8, 3.2);
              const d = linkPath(s.x!, s.y!, t.x!, t.y!);
              return <path key={idx} d={d} stroke="currentColor" strokeOpacity={strokeOpacity} strokeWidth={strokeW} fill="none" />;
            })}
          </g>
          {/* Nodes */}
          <g>
            {positions.map((n) => {
              const r = 12 + (n.value ?? 6) * 1.2;
              const cx = n.x ?? size.width / 2;
              const cy = n.y ?? size.height / 2;
              return (
                <g
                  key={n.id}
                  transform={`translate(${cx}, ${cy})`}
                  style={{ cursor: "pointer" }}
                  onMouseEnter={(e: React.MouseEvent<SVGGElement, MouseEvent>) => setHover({ id: n.id, clientX: e.clientX, clientY: e.clientY })}
                  onMouseMove={(e: React.MouseEvent<SVGGElement, MouseEvent>) => setHover({ id: n.id, clientX: e.clientX, clientY: e.clientY })}
                  onMouseLeave={() => setHover(null)}
                  role="button"
                  aria-label={n.label}
                >
                  <circle
                    cx={0}
                    cy={0}
                    r={r}
                    fill={getColor(n.type)}
                    stroke="var(--border)"
                    strokeWidth={2}
                    style={{ transition: "fill 0.2s, stroke 0.2s" }}
                  />
                  <text x={0} y={4} textAnchor="middle" fontSize={14} fill="var(--card-foreground)" style={{ pointerEvents: "none", fontWeight: 600 }}>
                    {n.label}
                  </text>
                </g>
              );
            })}
          </g>
        </svg>
        {/* Tooltip */}
        {hover && (() => {
          const node = nodeById(hover.id);
          if (!node) return null;
          const pos = tooltipStyle(hover.clientX, hover.clientY);
          return (
            <div
              className="pointer-events-none z-50"
              style={{
                position: "absolute",
                transform: `translate(${pos.left}px, ${pos.top}px)`,
                minWidth: 220,
                maxWidth: 300,
              }}
            >
              <div className="rounded-xl bg-card border border-border px-4 sm:px-6 py-4 sm:py-5 text-sm sm:text-base shadow-2xl"
                style={{
                  color: "var(--card-foreground)",
                  boxShadow: "0 8px 32px 0 rgba(0,0,0,0.18)",
                  fontWeight: 500,
                  backdropFilter: "blur(10px)",
                }}>
                <div className="font-bold mb-2 text-base sm:text-lg">{node.label}</div>
                <div className="text-muted-foreground text-sm sm:text-base mb-2">{node.desc}</div>
                {node.sub && (
                  <ul className="list-disc pl-4 sm:pl-5 text-xs sm:text-sm text-muted-foreground">
                    {node.sub.map((s, i) => <li key={i}>{s}</li>)}
                  </ul>
                )}
              </div>
            </div>
          );
        })()}
      </div>
    </div>
  );
}