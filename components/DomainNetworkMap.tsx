"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { X, Database } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- Types ---
type NodeType = "captured" | "current" | "next";
type Node = {
  id: string;
  label: string;
  type: NodeType;
  desc?: string;
  value?: number;
  sub?: string[];
  bridge?: string;
  x?: number;
  y?: number;
};

// --- Data ---
const nodesData: Node[] = [
  { id: "coding", label: "Coding", type: "captured", desc: "Repository insights, code dependency mapping, PR ranking", value: 10, sub: ["Code analysis", "Impact mapping"], bridge: "Links engineering artefacts to security, compliance and research." },
  { id: "education", label: "Education", type: "captured", desc: "Assignment scoring, conceptual understanding patterns", value: 9, sub: ["Grading", "Learning analytics"], bridge: "Connects learner signals to curriculum, finance and research." },
  { id: "satellite", label: "Satellite Imagery", type: "captured", desc: "Land use classification, cloud removal, region segmentation", value: 10, sub: ["Geosegmentation", "Change detection"], bridge: "Bridges geospatial context with climate, agriculture and public planning." },
  { id: "social", label: "Social Data", type: "captured", desc: "Trend detection, content clustering, noise filtering", value: 8, sub: ["Trend mapping", "Signal extraction"], bridge: "Maps social signal flows into commerce, entertainment and public insights." },
  { id: "research", label: "Research Data", type: "captured", desc: "Paper classification, citation mapping, topic discovery", value: 8, sub: ["Topic mapping", "Citation graphing"], bridge: "Links research to health, AI safety, and product teams." },
  
  { id: "telemetry", label: "Telemetry Streams", type: "current", desc: "High-frequency event signals from distributed systems", value: 8, sub: ["Event flows", "Live segmentation"], bridge: "Feeds live operational insight into mobility, telecom and manufacturing." },
  { id: "logistics", label: "Logistics", type: "current", desc: "Routing signals, delivery events, warehouse telemetry", value: 8, sub: ["Route scoring", "Node bottlenecks"], bridge: "Joins routing signals to supply chain and manufacturing operations." },
  { id: "finance", label: "Finance Signals", type: "current", desc: "Transaction patterns, risk events, anomaly flows", value: 7, sub: ["Risk scoring", "Micro-pattern detection"], bridge: "Connects finance fingerprints to security, real estate and regulatory monitoring." },
  { id: "climate", label: "Climate Data", type: "current", desc: "Weather patterns, region shifts, environmental signals", value: 7, sub: ["Weather segmentation", "Geo-temporal shifts"], bridge: "Ties climate trends to agriculture, satellite and public planning." },
  { id: "security", label: "Security Events", type: "current", desc: "Access logs, network flows, intrusion pattern signals", value: 7, sub: ["Threat patterns", "Access anomalies"], bridge: "Integrates threat signals with coding, finance and energy operations." },
  { id: "health", label: "Health Signals", type: "current", desc: "Vital signs, waveform changes, patient trends", value: 7, sub: ["ECG events", "Vitals segmentation"], bridge: "Links patient trends to research, public health and regulatory oversight." },
  { id: "commerce", label: "E-Commerce", type: "current", desc: "Browsing flows, demand curves, customer signals", value: 8, sub: ["Demand curves", "Product activity"], bridge: "Bridges customer intent to retail, entertainment and supply chain." },
  { id: "gaming", label: "Gaming Telemetry", type: "current", desc: "Player behavior, match signals, anti-cheat patterns", value: 7, sub: ["Match data", "Behavior signals"], bridge: "Feeds player behaviour into security and engagement pipelines." },
  { id: "travel", label: "Travel Systems", type: "current", desc: "Flight delays, route flows, airport congestion patterns", value: 7, sub: ["Delay patterns", "Traffic flows"], bridge: "Links travel signals to mobility and logistics." },
  
  { id: "agri", label: "Agriculture", type: "next", desc: "Crop health signals, soil patterns, farm activity data", value: 7, sub: ["Plant health", "Soil signals"], bridge: "Combines satellite, climate and ground telemetry for actionable agronomy." },
  { id: "manufacturing", label: "Manufacturing", type: "next", desc: "Machine telemetry, defect patterns, process streams", value: 7, sub: ["Machine events", "Quality signals"], bridge: "Links production telemetry to supply chain and energy signals." },
  { id: "energy", label: "Energy", type: "next", desc: "Grid flows, consumption patterns, sensor events", value: 7, sub: ["Load curves", "Consumption spikes"], bridge: "Joins grid data with manufacturing and security." },
  { id: "mobility", label: "Mobility", type: "next", desc: "Vehicle signals, traffic telemetry, route behaviors", value: 8, sub: ["Traffic patterns", "Vehicle events"], bridge: "Integrates vehicle flows with telemetry and travel systems." },
  { id: "telecom", label: "Telecom", type: "next", desc: "Tower performance, packet loss flows, network routing", value: 7, sub: ["Network flows", "Signal stability"], bridge: "Connects telecom telemetry to mobility and IoT streams." },
  { id: "public", label: "Public Data", type: "next", desc: "Civic signals, government datasets, population shifts", value: 6, sub: ["Census patterns", "Public signals"], bridge: "Bridges civic datasets to urban planning, climate and regulatory teams." },
  { id: "sports", label: "Sports Analytics", type: "next", desc: "Player stats, motion tracking, event flow", value: 7, sub: ["Match flow", "Player segmentation"], bridge: "Maps motion and event signals into entertainment and fan engagement pipelines." },
  { id: "retail", label: "Retail", type: "next", desc: "Footfall signals, product movement, store operations", value: 6, sub: ["Footfall maps", "Store telemetry"], bridge: "Links in-store behaviour to commerce and supply chain." },
  { id: "realestate", label: "Real Estate", type: "next", desc: "Price movement, locality shifts, amenity signals", value: 6, sub: ["Price curves", "Locality signals"], bridge: "Combines public, finance and satellite signals to reveal locality trends." },
  { id: "entertainment", label: "Entertainment", type: "next", desc: "Viewership patterns, scene segmentation, engagement flows", value: 6, sub: ["Scene changes", "Engagement tracks"], bridge: "Ties audience data to social and commerce." },
  { id: "legal", label: "Legal Data", type: "next", desc: "Case networks, citation chains, pattern matching", value: 6, sub: ["Case clustering", "Citation flows"], bridge: "Connects legal patterns to regulatory and research signals." },
  { id: "supplychain", label: "Supply Chain", "type": "next", desc: "Inventory signals, movement flows, bottlenecks", value: 7, sub: ["Inventory shifts", "Warehouse telemetry"], bridge: "Joins logistics, manufacturing and retail signals into a single operational view." },
  { id: "ai_safety", label: "AI Safety & Governance", type: "next", desc: "Model audits, behaviour tracing, misuse detection", value: 9, sub: ["Audit trails", "Behaviour monitoring"], bridge: "Connects model outputs to engineering, legal and public accountability." },
  { id: "regulatory", label: "Regulatory Intelligence", type: "next", desc: "Policy alignment, compliance signals, audit reporting", value: 8, sub: ["Policy mapping", "Compliance dashboards"], bridge: "Bridges operational logs, model outputs and public policy." },
  { id: "model_drift", label: "Model Drift & Misuse Detection", type: "next", desc: "Continuous monitoring, anomaly detection, misuse flags", value: 8, sub: ["Drift alerts", "Misuse patterns"], bridge: "Links telemetry, user signals and model outputs to quickly detect drift and potential misuse." },
  { id: "ai_risk", label: "AI Risk Prediction", type: "next", desc: "Forecasting safety-sensitive events and systemic risks", value: 8, sub: ["Risk scoring", "Scenario forecasting"], bridge: "Aggregates cross-domain signals (finance, health, public) to predict AI-related risks." }
];

const linksData = [
  { source: "coding", target: "security", weight: 1 },
  { source: "education", target: "research", weight: 0.9 },
  { source: "satellite", target: "climate", weight: 1 },
  { source: "social", target: "commerce", weight: 1 },
  { source: "research", target: "health", weight: 0.8 },
  { source: "telemetry", target: "mobility", weight: 1 },
  { source: "logistics", target: "supplychain", weight: 1 },
  { source: "finance", target: "security", weight: 1 },
  { source: "climate", target: "agri", weight: 1 },
  { source: "security", target: "energy", weight: 0.8 },
  { source: "health", target: "public", weight: 0.8 },
  { source: "commerce", target: "retail", weight: 1 },
  { source: "gaming", target: "entertainment", weight: 0.75 },
  { source: "travel", target: "mobility", weight: 0.7 },
  { source: "agri", target: "public", weight: 0.6 },
  { source: "manufacturing", target: "energy", weight: 1 },
  { source: "energy", target: "manufacturing", weight: 1 },
  { source: "mobility", target: "telecom", weight: 0.7 },
  { source: "telecom", target: "model_drift", weight: 0.7 },
  { source: "public", target: "regulatory", weight: 0.85 },
  { source: "sports", target: "entertainment", weight: 0.6 },
  { source: "retail", target: "supplychain", weight: 0.7 },
  { source: "realestate", target: "public", weight: 0.5 },
  { source: "entertainment", target: "social", weight: 0.7 },
  { source: "legal", target: "regulatory", weight: 0.9 },
  { source: "supplychain", target: "logistics", weight: 1 },
  { source: "ai_safety", target: "regulatory", weight: 1 },
  { source: "regulatory", target: "finance", weight: 0.9 },
  { source: "model_drift", target: "telemetry", weight: 0.95 },
  { source: "ai_risk", target: "public", weight: 0.85 }
];

// --- Utilities ---
function getColor(type: NodeType) {
  if (type === "captured") return "#d33682"; // Magenta
  if (type === "current") return "#2aa198";  // Cyan
  return "#b58900";                          // Yellow/Orange
}

function generateMiniGraphPath(width: number, height: number, value: number) {
  const points = [];
  const segments = 10;
  for (let i = 0; i <= segments; i++) {
    const x = (i / segments) * width;
    const randomY = Math.sin(i * 1.5 + value) * (height * 0.3) + (height * 0.5); 
    const bias = (value / 10) * height * 0.8; 
    const y = height - Math.max(5, Math.min(height - 5, randomY * 0.5 + (i/segments) * bias * 0.5));
    points.push(`${x},${y}`);
  }
  const linePath = `M ${points.join(" L ")}`;
  const areaPath = `${linePath} L ${width},${height} L 0,${height} Z`;
  return { linePath, areaPath };
}

// --- Mobile SVG Layout Logic ---
function getMobileCoordinates(index: number, type: NodeType, width: number) {
  const cx = width / 2;
  
  if (type === "captured") {
    // Honeycomb Ring pattern
    const xHex = cx + Math.cos(index * 1.05) * (index % 2 === 0 ? 60 : 120); 
    return { x: xHex, y: index * 90 };
  } 
  
  if (type === "current") {
    // Wide DNA Wave
    const xOffset = Math.sin(index * 1.2) * 110;
    return { x: cx + xOffset, y: index * 90 };
  }
  
  // Next (Bounded Zig-Zag)
  const xOffset = Math.cos(index * 0.8) * 85;
  return { x: cx + xOffset, y: index * 85 };
}

// --- Component: Mobile Molecule Section ---
function MobileMoleculeSection({ 
  title, 
  color, 
  nodes, 
  onSelect, 
  type,
  width 
}: { 
  title: string; 
  color: string; 
  nodes: Node[]; 
  onSelect: (id: string) => void;
  type: NodeType;
  width: number;
}) {
  const height = nodes.length * (type === 'next' ? 85 : 90); 

  return (
    <div className="relative last:mb-0">
      <div className="flex items-center justify-center mb-8">
        <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-white/50 border border-black/5 text-[#586e75] shadow-sm">
            {title}
        </span>
      </div>
      
      <svg width="100%" height={height} className="overflow-visible">
          {/* Bonds (Lines) */}
          <g stroke={color} strokeWidth="1.5" opacity="0.3">
              {nodes.map((node, i) => {
                if (i === 0) return null;
                const prev = getMobileCoordinates(i - 1, type, width);
                const curr = getMobileCoordinates(i, type, width);
                return <line key={`link-${i}`} x1={prev.x} y1={prev.y} x2={curr.x} y2={curr.y} />;
              })}
          </g>

          {/* Atoms (Nodes) */}
          {nodes.map((node, i) => {
              const { x, y } = getMobileCoordinates(i, type, width);
              return (
                <g 
                    key={node.id} 
                    transform={`translate(${x}, ${y})`}
                    onClick={() => onSelect(node.id)}
                    className="cursor-pointer"
                >
                    {/* Glow */}
                    <circle r={28} fill={color} opacity={0.15} className="animate-pulse" />
                    {/* Core */}
                    <circle r={18} fill={color} stroke="#fdf6e3" strokeWidth={2} className="drop-shadow-sm" />
                    {/* Label - alternating sides to prevent overlap */}
                    <text 
                      x={0} 
                      y={40} 
                      textAnchor="middle" 
                      fontSize={11} 
                      fontWeight="700" 
                      fill="#073642"
                      className="bg-white/80"
                      style={{ textShadow: "0px 1px 2px rgba(255,255,255,0.8)" }}
                    >
                      {node.label}
                    </text>
                </g>
              )
          })}
      </svg>
    </div>
  );
}

// --- Main Hybrid Component ---
export default function DomainNetworkMap() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [size, setSize] = useState({ width: 800, height: 800 });
  const [activeNodeId, setActiveNodeId] = useState<string | null>(null);
  const [positions, setPositions] = useState<Node[]>([]);
  const timeRef = useRef(0);
  const lastFrameTimeRef = useRef<number>(0);
  
  const activeNode = useMemo(() => nodesData.find((n) => n.id === activeNodeId), [activeNodeId]);

  // Group nodes
  const capturedNodes = useMemo(() => nodesData.filter(n => n.type === 'captured'), []);
  const currentNodes = useMemo(() => nodesData.filter(n => n.type === 'current'), []);
  const nextNodes = useMemo(() => nodesData.filter(n => n.type === 'next'), []);

  // --- Strict Scroll Lock Effect ---
  // Locks BOTH html and body.
  useEffect(() => {
    if (activeNodeId) {
      // 1. Lock Body
      document.body.style.overflow = "hidden";
      // 2. Lock HTML (Crucial for some browsers/frameworks)
      document.documentElement.style.overflow = "hidden";
    } else {
      // Unlock
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    // Cleanup
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [activeNodeId]);

  // Responsive Observer
  useEffect(() => {
    const ro = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) {
        const { width, height } = entry.contentRect;
        setSize({ width, height });
      }
    });
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  // Desktop Animation Loop
  useEffect(() => {
    let frameId: number;
    
    const animate = (timestamp: number) => {
      // Initialize lastFrameTime on first frame
      if (lastFrameTimeRef.current === 0) {
        lastFrameTimeRef.current = timestamp;
      }
      
      // Calculate delta time in seconds for smooth, frame-rate independent animation
      const deltaTime = (timestamp - lastFrameTimeRef.current) / 1000;
      lastFrameTimeRef.current = timestamp;
      
      if (!activeNodeId) {
        // Increment time based on actual elapsed time (60 FPS normalized)
        timeRef.current += deltaTime * 0.15; // Smooth constant speed
      }
      
      const { width, height } = size;
      const t = timeRef.current;
      const centerX = width / 2;
      const centerY = height / 2;
      const minDim = Math.min(width, height);
      
      const radii = [minDim * 0.16, minDim * 0.28, minDim * 0.42];

      function place(arr: Node[], radius: number, phase = 0, speed = 1) {
        const step = (2 * Math.PI) / arr.length;
        return arr.map((n, i) => ({
          ...n,
          x: centerX + Math.cos(i * step + phase + t * speed) * radius,
          y: centerY + Math.sin(i * step + phase + t * speed) * radius,
        }));
      }

      const newPos = [
        ...place(capturedNodes, radii[0], 0.1, 1.0),
        ...place(currentNodes, radii[1], Math.PI / 8, 0.6),
        ...place(nextNodes, radii[2], Math.PI / 6, 0.3),
      ];
      setPositions(newPos);
      frameId = requestAnimationFrame(animate);
    };
    
    // Start animation loop
    frameId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(frameId);
      lastFrameTimeRef.current = 0; // Reset for next mount
    };
  }, [size, activeNodeId, capturedNodes, currentNodes, nextNodes]);

  const nodeById = (id: string) => positions.find((p) => p.id === id);

  // Link curve helper
  function linkPath(sx: number, sy: number, tx: number, ty: number) {
      const mx = (sx + tx) / 2;
      const my = (sy + ty) / 2;
      const dx = tx - sx;
      const dy = ty - sy;
      const nx = -dy;
      const ny = dx;
      const nl = Math.sqrt(nx * nx + ny * ny) || 1;
      const offset = Math.max(8, Math.min(40, 0.06 * Math.sqrt(dx * dx + dy * dy)));
      const curve = Math.sin((sx + sy + tx + ty) * 0.0003); 
      const cx = mx + (nx / nl) * offset * curve;
      const cy = my + (ny / nl) * offset * curve;
      return `M ${sx} ${sy} Q ${cx} ${cy} ${tx} ${ty}`;
  }

  return (
    <div ref={containerRef} className="w-full bg-[#fdf6e3]" style={{ minHeight: '600px' }}>
      
      {/* ----------------- MOBILE VIEW (< md) ----------------- */}
      <div 
        className="md:hidden py-10 px-0 w-full overflow-hidden" 
      >

        {/* Molecule 1: Captured (Hex/Ring) */}
        <MobileMoleculeSection 
          title="Captured" 
          color="#d33682" 
          nodes={capturedNodes} 
          onSelect={setActiveNodeId} 
          type="captured"
          width={size.width || 350} // Fallback width
        />

        {/* Connector Line between Sections */}
        <div className="h-12 w-0.5 bg-linear-to-b from-[#d33682] to-[#2aa198] mx-auto opacity-40 mb-4" />

        {/* Molecule 2: Current (Helix) */}
        <MobileMoleculeSection 
          title="Current" 
          color="#2aa198" 
          nodes={currentNodes} 
          onSelect={setActiveNodeId} 
          type="current"
          width={size.width || 350}
        />

        <div className="h-12 w-0.5 bg-linear-to-b from-[#2aa198] to-[#b58900] mx-auto opacity-40 mb-4" />

        {/* Molecule 3: Next (Bounded Zig-Zag) */}
        <MobileMoleculeSection 
          title="Going Next" 
          color="#b58900" 
          nodes={nextNodes} 
          onSelect={setActiveNodeId} 
          type="next"
          width={size.width || 350}
        />
      </div>

      {/* ----------------- DESKTOP VIEW (>= md) ----------------- */}
      <div 
        className="hidden md:block relative w-full h-[850px] overflow-hidden"
      >
        <div className="absolute top-4 left-0 right-0 z-10 flex justify-center gap-6 px-4">
          {[
            { color: "#d33682", label: "Captured" },
            { color: "#2aa198", label: "Current" },
            { color: "#b58900", label: "Next" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full border border-black/10 shadow-sm" style={{ background: item.color }} />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#586e75]">{item.label}</span>
            </div>
          ))}
        </div>

        <svg
          className="h-full w-full"
          viewBox={`0 0 ${size.width} ${size.height}`}
          preserveAspectRatio="xMidYMid meet"
          style={{ transform: 'translateZ(0)', willChange: 'transform' }}
        >
          <defs>
            <radialGradient id="creamGradDesktop" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fff" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#fdf6e3" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width={size.width} height={size.height} fill="url(#creamGradDesktop)" />

          <g className="pointer-events-none">
            {linksData.map((l, i) => {
              const s = nodeById(l.source);
              const t = nodeById(l.target);
              if (!s || !t) return null;
              return (
                <path
                  key={i}
                  d={linkPath(s.x!, s.y!, t.x!, t.y!)}
                  fill="none"
                  stroke="#657b83"
                  strokeWidth={l.weight || 0.5}
                  strokeOpacity={0.15}
                />
              );
            })}
          </g>

          {positions.map((n) => (
            <g
              key={n.id}
              transform={`translate(${n.x}, ${n.y})`}
              className="cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setActiveNodeId(n.id);
              }}
            >
              <circle r={20} fill={getColor(n.type)} opacity={0.1} className="animate-pulse" />
              <circle
                r={6 + (n.value || 5) * 0.8}
                fill={getColor(n.type)}
                stroke="#fdf6e3"
                strokeWidth={2}
                className="transition-transform duration-300 hover:scale-110"
              />
              <text
                dy={24 + (n.value || 5)}
                textAnchor="middle"
                fontSize={12}
                fontWeight="600"
                fill="#073642"
                className="pointer-events-none select-none"
                style={{ textShadow: "0px 1px 4px rgba(253, 246, 227, 0.9)" }}
              >
                {n.label}
              </text>
            </g>
          ))}
        </svg>
      </div>

      {/* ----------------- UNIVERSAL DIALOG ----------------- */}
      <AnimatePresence>
        {activeNode && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveNodeId(null)}
              className="absolute inset-0 bg-black/10 backdrop-blur-md" 
            />

            <motion.div
              layoutId={`card-${activeNode.id}`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              // Added overscroll-behavior-y: contain to prevent scroll chaining
              className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/50 bg-[#fdf6e3]/95 shadow-2xl backdrop-blur-xl overscroll-y-contain"
              style={{ color: "#002b36", maxHeight: "90vh", overflowY: "auto" }}
            >
              <div 
                className="relative flex items-center justify-between px-6 py-4 top-0 z-10 bg-[#fdf6e3]/90 backdrop-blur-md border-b border-[#eaddc5]"
              >
                <div className="flex items-center gap-3">
                  <div>
                    <h2 className="text-xl font-bold leading-tight">{activeNode.label}</h2>
                    <span className="text-xs font-medium uppercase tracking-wider opacity-60">Domain: {activeNode.type}</span>
                  </div>
                </div>
                <button 
                  onClick={() => setActiveNodeId(null)}
                  className="rounded-full bg-black/5 p-2 transition-colors hover:bg-black/10 cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="grid gap-6 px-6 py-6">
                <div className="relative h-32 w-full overflow-hidden rounded-lg bg-white/40 border border-[#eaddc5] p-4">
                  <div className="mb-2 flex justify-between text-xs font-semibold uppercase opacity-60">
                    <span>Live Signal Strength</span>
                    <span>{(activeNode.value || 0) * 10}% Capacity</span>
                  </div>
                  {(() => {
                    const { linePath, areaPath } = generateMiniGraphPath(400, 80, activeNode.value || 5);
                    return (
                      <svg className="h-full w-full" viewBox="0 0 400 80" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id={`grad-${activeNode.id}`} x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor={getColor(activeNode.type)} stopOpacity={0.4} />
                                <stop offset="100%" stopColor={getColor(activeNode.type)} stopOpacity={0} />
                            </linearGradient>
                          </defs>
                          <path d={areaPath} fill={`url(#grad-${activeNode.id})`} />
                          <path d={linePath} fill="none" stroke={getColor(activeNode.type)} strokeWidth={2} />
                      </svg>
                    )
                  })()}
                </div>

                <div className="space-y-4">
                  <div className="rounded-xl border border-black/20 bg-white p-3 text-sm leading-relaxed text-[#586e75]">
                    <span className="font-semibold text-[#073642]">Description: </span>
                    {activeNode.desc}
                  </div>
                  
                  {activeNode.bridge && (
                  <div className="flex gap-3 rounded-xl bg-blue-100/70 p-3 text-sm leading-relaxed text-[#586e75] border border-blue-800/25">
                      <div>
                        <span className="font-semibold text-[#073642]">The Bridge: </span>
                        {activeNode.bridge}
                      </div>
                  </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  {activeNode.sub?.map(s => (
                    <span 
                      key={s} 
                      className="flex items-center gap-1 rounded-md border border-[#eaddc5] bg-[#eee8d5] px-2.5 py-1 text-xs font-medium text-[#586e75]"
                    >
                        <Database size={12} className="opacity-50"/>
                        {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
