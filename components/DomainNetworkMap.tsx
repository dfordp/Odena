"use client";

import { useRef, useEffect, useState } from "react";


/**
 * Lightweight force layout network.
 * - nodes: { id, label, type: "captured" | "current" | "next", desc, value }
 * - links: { source, target }
 *
 * Usage: <DomainNetworkMap />
 *
 * Replace sampleNodes/sampleLinks with dynamic data from API or props.
 */

type NodeType = "captured" | "current" | "next";

type Node = {
  id: string;
  label: string;
  type: NodeType;
  desc?: string;
  value?: number; // used for visual sizing
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
};

type LinkT = { source: string; target: string };

const WIDTH = 920;
const HEIGHT = 480;

function rand(min = 0, max = 1) {
  return Math.random() * (max - min) + min;
}

export default function DomainNetworkMap() {
  // sample data — swap out with real data
  const sampleNodes: Node[] = [
    { id: "code", label: "Codebases", type: "captured", desc: "Dependency mapping, PR ranking", value: 8 },
    { id: "media", label: "Media", type: "captured", desc: "Video/image ranking & cleaning", value: 6 },
    { id: "tabular", label: "Tabular", type: "captured", desc: "Feature ranking, anomaly detection", value: 5 },
    { id: "telemetry", label: "Telemetry", type: "current", desc: "Stream segmentation & routing", value: 7 },
    { id: "nlp", label: "NLP", type: "next", desc: "Controlled fine-grain scoring pipelines", value: 6 },
    { id: "multimodal", label: "Multimodal", type: "next", desc: "Cross-modal operator graphs", value: 7 },
    { id: "infra", label: "Infra", type: "captured", desc: "Queue & routing meshes", value: 6 },
  ];

  const sampleLinks: LinkT[] = [
    { source: "code", target: "telemetry" },
    { source: "code", target: "nlp" },
    { source: "media", target: "multimodal" },
    { source: "telemetry", target: "infra" },
    { source: "tabular", target: "nlp" },
    { source: "infra", target: "multimodal" },
    { source: "code", target: "media" },
  ];

  const svgRef = useRef<SVGSVGElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const [nodes, setNodes] = useState<Node[]>(() =>
    sampleNodes.map((n) => ({
      ...n,
      x: rand(WIDTH * 0.2, WIDTH * 0.8),
      y: rand(HEIGHT * 0.2, HEIGHT * 0.8),
      vx: 0,
      vy: 0,
    }))
  );
  const [links] = useState<LinkT[]>(sampleLinks);
  const [hover, setHover] = useState<{ id: string; x: number; y: number } | null>(null);
  const [selected, setSelected] = useState<string | null>(null);

  // physics parameters
  const REPULSION = 6000; // higher = more spread out
  const LINK_STRENGTH = 0.07;
  const CENTERING = 0.02;
  const DAMPING = 0.85;
  const NODE_RADIUS_BASE = 20;

  useEffect(() => {
    let running = true;

    function step() {
      setNodes((prev) => {
        // create quick lookup for positions
        const nodeMap: Record<string, Node> = {};
        prev.forEach((n) => (nodeMap[n.id] = n));

        // clone array for mutation
        const next = prev.map((n) => ({ ...n }));

        // repulsion (Coulomb)
        for (let i = 0; i < next.length; i++) {
          for (let j = i + 1; j < next.length; j++) {
            const a = next[i];
            const b = next[j];
            const dx = a.x! - b.x!;
            const dy = a.y! - b.y!;
            let dist2 = dx * dx + dy * dy;
            if (dist2 < 0.01) dist2 = 0.01;
            const force = REPULSION / dist2;
            const dist = Math.sqrt(dist2);
            const ux = dx / dist;
            const uy = dy / dist;
            a.vx = (a.vx || 0) + ux * force;
            a.vy = (a.vy || 0) + uy * force;
            b.vx = (b.vx || 0) - ux * force;
            b.vy = (b.vy || 0) - uy * force;
          }
        }

        // link attraction
        for (const l of links) {
          const a = nodeMap[l.source];
          const b = nodeMap[l.target];
          if (!a || !b) continue;
          const ax = a.x!;
          const ay = a.y!;
          const bx = b.x!;
          const by = b.y!;
          const dx = bx - ax;
          const dy = by - ay;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          const desired = 120; // ideal link length
          const diff = dist - desired;
          const aVal = a.value ?? 1;
          const bVal = b.value ?? 1;
          const k = LINK_STRENGTH * (1 + Math.min(3, (aVal + bVal) / 6));
          const fx = (dx / dist) * diff * k;
          const fy = (dy / dist) * diff * k;
          a.vx = (a.vx || 0) + fx;
          a.vy = (a.vy || 0) + fy;
          b.vx = (b.vx || 0) - fx;
          b.vy = (b.vy || 0) - fy;
        }

        // centering force & integrate
        for (const n of next) {
          // centering toward middle
          const cx = WIDTH / 2;
          const cy = HEIGHT / 2;
          n.vx = (n.vx || 0) + (cx - n.x!) * CENTERING * (1 / (n.value ?? 1));
          n.vy = (n.vy || 0) + (cy - n.y!) * CENTERING * (1 / (n.value ?? 1));
          // apply velocity
          n.x = (n.x || 0) + (n.vx || 0) * 0.02;
          n.y = (n.y || 0) + (n.vy || 0) * 0.02;
          // damping
          n.vx = (n.vx || 0) * DAMPING;
          n.vy = (n.vy || 0) * DAMPING;

          // bound
          n.x = Math.max(40, Math.min(WIDTH - 40, n.x!));
          n.y = Math.max(40, Math.min(HEIGHT - 40, n.y!));
        }

        return next;
      });

      if (running) rafRef.current = requestAnimationFrame(step);
    }

    rafRef.current = requestAnimationFrame(step);

    return () => {
      running = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [links]);

  function nodeRadius(n: Node) {
    return NODE_RADIUS_BASE + (n.value ?? 1) * 2;
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-3 items-center">
          <div className="flex items-center gap-2 text-sm">
            <span className="inline-block w-3 h-3 rounded-full bg-primary" />
            <span>Captured</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="inline-block w-3 h-3 rounded-full border-2 border-primary bg-transparent" />
            <span>Current / Target</span>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card p-4">
        <svg
          ref={svgRef}
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          width="100%"
          height="400"
          className="w-full"
        >
          {/* links */}
          {links.map((l, idx) => {
            const s = nodes.find((n) => n.id === l.source);
            const t = nodes.find((n) => n.id === l.target);
            if (!s || !t) return null;
            const strokeOpacity = 0.12 + Math.min(0.4, ((s.value ?? 1) + (t.value ?? 1)) / 20);
            return (
              <line
                key={idx}
                x1={s.x}
                y1={s.y}
                x2={t.x}
                y2={t.y}
                stroke="currentColor"
                strokeWidth={1.2}
                strokeOpacity={strokeOpacity}
                className="text-muted-foreground"
              />
            );
          })}

          {/* nodes */}
          {nodes.map((n) => {
            const r = nodeRadius(n);
            const isCaptured = n.type === "captured";
            const isNext = n.type === "next";
            const cx = n.x!;
            const cy = n.y!;
            return (
              <g
                key={n.id}
                transform={`translate(${cx}, ${cy})`}
                style={{ cursor: "pointer" }}
                onMouseEnter={(e) => {
                  setHover({ id: n.id, x: (e.nativeEvent.clientX || 0), y: (e.nativeEvent.clientY || 0) });
                }}
                onMouseLeave={() => setHover(null)}
                onClick={() => {
                  setSelected(n.id === selected ? null : n.id);
                  // Example: navigate to /domains/[id] if you have such a page
                  // use router.push(`/domains/${n.id}`)
                }}
              >
                {/* pulsing ring for 'next' */}
                {isNext && (
                  <circle
                    r={r + 10}
                    fill="none"
                    stroke="currentColor"
                    strokeOpacity={0.06}
                    className="animate-pulse"
                  />
                )}

                {/* node circle */}
                <circle
                  r={r}
                  fill={isCaptured ? "currentColor" : "transparent"}
                  stroke="currentColor"
                  strokeWidth={isCaptured ? 0 : 2}
                  className={isCaptured ? "text-primary" : "text-accent"}
                />

                {/* label */}
                <text
                  x={0}
                  y={r + 16}
                  textAnchor="middle"
                  fontSize={12}
                  fill="currentColor"
                  opacity={0.9}
                  className="text-foreground"
                >
                  {n.label}
                </text>

                {/* small badge if selected */}
                {selected === n.id && (
                  <g transform={`translate(${r + 14}, ${-r - 8})`}>
                    <rect x={-6} y={-14} rx={6} ry={6} width={160} height={44} fill="var(--card)" stroke="var(--border)" />
                    <text x={2} y={-2} fontSize={11} fill="var(--foreground)">
                      {n.desc}
                    </text>
                  </g>
                )}
              </g>
            );
          })}
        </svg>

        {/* tooltip */}
        {hover && (() => {
          const node = nodes.find((x) => x.id === hover.id);
          if (!node) return null;
          return (
            <div
              className="absolute z-50 pointer-events-none"
              style={{
                transform: `translate(${hover.x}px, ${hover.y}px)`,
                left: 0,
                top: 0,
              }}
            >
              <div className="max-w-xs rounded-md bg-card border border-border px-4 py-3 text-sm shadow-lg">
                <div className="font-medium">{node.label}</div>
                <div className="text-muted-foreground text-xs mt-1">{node.desc}</div>
                <div className="text-xs text-muted-foreground mt-2">Status: {node.type}</div>
              </div>
            </div>
          );
        })()}
      </div>
    </div>
  );
}
