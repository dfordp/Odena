import React, { memo } from 'react';

const VisualAdaptiveModels = memo(() => (
    <div className="w-full h-full flex items-center justify-center p-4">
        <svg viewBox="0 0 200 250" className="w-full h-full">
        {/* Input Data Block */}
        <rect x="20" y="20" width="60" height="40" fill="white" stroke="black" strokeWidth="2" />
        <text x="50" y="45" textAnchor="middle" fontFamily="monospace" fontSize="10">INPUT</text>
        <circle cx="40" cy="55" r="3" fill="black" />
        <circle cx="50" cy="55" r="3" fill="black" />
        <circle cx="60" cy="55" r="3" fill="black" />

        {/* Arrow down */}
        <path d="M50 60 L50 90" stroke="black" strokeWidth="2" markerEnd="url(#arrowhead)" />

        {/* Adaptive Model Block - Reshaping */}
        <path d="M20 100 Q 50 90, 80 100 L 160 120 Q 180 150, 160 180 L 80 200 Q 50 210, 20 200 Z" fill="url(#diagonal-hatch)" stroke="black" strokeWidth="2" />
        <text x="90" y="155" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="white" stroke="white" strokeWidth="3" opacity="0.7">RESHAPING</text>
        <text x="90" y="155" textAnchor="middle" fontFamily="monospace" fontSize="10">RESHAPING</text>

        {/* Arrows indicating change */}
        <path d="M160 120 L 175 110" stroke="black" strokeWidth="2" markerEnd="url(#arrowhead)" />
        <path d="M160 180 L 175 190" stroke="black" strokeWidth="2" markerEnd="url(#arrowhead)" />
        <path d="M20 200 L 5 210" stroke="black" strokeWidth="2" markerEnd="url(#arrowhead)" />

        {/* Arrow down */}
        <path d="M90 200 L 90 220" stroke="black" strokeWidth="2" markerEnd="url(#arrowhead)" />

        {/* Optimized Path Block */}
        <rect x="50" y="230" width="80" height="20" fill="black" />
        <text x="90" y="243" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="white">OPTIMIZED PATH</text>

        {/* Definitions for pattern and markers */}
        <defs>
            <pattern id="diagonal-hatch" patternUnits="userSpaceOnUse" width="4" height="4">
            <path d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2" stroke="black" strokeWidth="0.5" opacity="0.3" />
            </pattern>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="black" />
            </marker>
        </defs>
        </svg>
    </div>
));
VisualAdaptiveModels.displayName = 'VisualAdaptiveModels';

const VisualDynamicChains = memo(() => (
    <div className="w-full h-full flex items-center justify-center p-6 relative overflow-hidden">
        {/* Isometric layers to represent dynamic chains */}
        <svg viewBox="0 0 300 150" className="w-full h-full">
        <defs>
            <marker id="arrowhead-chains" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="black" />
            </marker>
        </defs>
        
        <path d="M150 20 L250 50 L150 80 L50 50 Z" fill="white" stroke="black" strokeWidth="2" />
        <text x="150" y="55" textAnchor="middle" fontFamily="monospace" fontSize="10">WORKLOAD A</text>
        
        <path d="M150 60 L250 90 L150 120 L50 90 Z" fill="white" stroke="black" strokeWidth="2" />
        <text x="150" y="95" textAnchor="middle" fontFamily="monospace" fontSize="10">STRUCTURE B</text>

        {/* Path reconfiguring */}
        <circle cx="110" cy="40" r="2.5" fill="black" />
        <path d="M110 40 C 100 60, 90 65, 100 90" stroke="black" strokeWidth="2" strokeDasharray="4 2" fill="none" />
        <circle cx="100" cy="90" r="2.2" fill="black" />
        <path d="M100 90 L 110 100" stroke="black" strokeWidth="1" markerEnd="url(#arrowhead-chains)" />
        </svg>
    </div>
));
VisualDynamicChains.displayName = 'VisualDynamicChains';

const VisualUnifiedFormats = memo(() => (
    <div className="w-full h-full p-4 flex flex-col justify-center relative">
        <div className="bg-[radial-gradient(#3b3b3b_2px,transparent_2.5px)] bg-size-[16px_16px] absolute inset-0 opacity-10"></div>
        <div className="relative grid grid-cols-2 gap-3 z-10 transform scale-90 md:scale-100 transition-transform">
        {['JSON', 'CSV', 'XML', 'LOGS'].map((fmt, i) => (
            <div key={fmt} className={`bg-white border-2 border-black p-2 text-center text-xs font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] ${i % 2 === 0 ? '-rotate-2' : 'rotate-2'}`}>
            {fmt}
            </div>
        ))}
        <div className="col-span-2 flex justify-center mt-2">
            <div className="bg-black text-white px-4 py-1 text-xs font-mono border-2 border-black shadow-[3px_3px_0px_0px_rgba(255,255,255,1)]">
            ONE ENGINE
            </div>
        </div>
        </div>
    </div>
));
VisualUnifiedFormats.displayName = 'VisualUnifiedFormats';

const VisualRealTime = memo(() => (
    <div className="w-full h-full flex items-end justify-center pb-4 px-4">
        <div className="w-full border-b-2 border-black relative h-full max-h-[120px] flex items-end space-x-1">
            {[40, 70, 50, 90, 60, 80, 45, 95, 55, 85].map((h, i) => (
                <div 
                    key={i} 
                    className="flex-1 bg-black/10 border-t-2 border-x-2 border-black hover:bg-black transition-colors cursor-pointer relative group/bar"
                    style={{ height: `${h}%` }}
                >
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-white text-[8px] font-mono px-1 opacity-0 group-hover/bar:opacity-100 transition-opacity">
                        {h}ms
                    </div>
                </div>
            ))}
            <div className="absolute top-0 right-0 font-mono text-[10px] bg-black text-white px-1">
                INSTANT EVAL
            </div>
        </div>
    </div>
));
VisualRealTime.displayName = 'VisualRealTime';

const VisualSelfMaintaining = memo(() => (
    <div className="w-full h-full flex items-center justify-center p-4">
        <svg viewBox="0 0 200 100" className="w-3/4 max-w-md h-auto max-h-32">
        {/* Disorganized blocks */}
        <rect x="10" y="10" width="30" height="30" fill="white" stroke="black" strokeWidth="2" transform="rotate(-10 25 25)" />
        <rect x="45" y="15" width="30" height="30" fill="url(#diagonal-hatch)" stroke="black" strokeWidth="2" transform="rotate(5 60 30)" />
        <rect x="20" y="50" width="30" height="30" fill="url(#diagonal-hatch)" stroke="black" strokeWidth="2" transform="rotate(15 35 65)" />

        {/* Arrow to organized state */}
        <path d="M90 50 L 120 50" stroke="black" strokeWidth="2" markerEnd="url(#arrowhead)" />

        {/* Organized blocks */}
        <rect x="130" y="20" width="30" height="30" fill="white" stroke="black" strokeWidth="2" />
        <rect x="160" y="20" width="30" height="30" fill="url(#diagonal-hatch)" stroke="black" strokeWidth="2" />
        <rect x="130" y="50" width="30" height="30" fill="url(#diagonal-hatch)" stroke="black" strokeWidth="2" />
        <rect x="160" y="50" width="30" height="30" fill="white" stroke="black" strokeWidth="2" />
        
        <text x="160" y="95" textAnchor="middle" fontFamily="monospace" fontSize="10">AUTO-CLEAN</text>
        </svg>
    </div>
));
VisualSelfMaintaining.displayName = 'VisualSelfMaintaining';

const VisualDeepStack = memo(() => (
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-gray-50/20 p-4">
        <div className="font-mono text-xs mb-2 text-center w-full">
            <div className="border-b border-black pb-1">EXISTING_ENV</div>
        </div>
        <div className="flex items-center justify-center w-full">
            {/* Stack of layers dropping in */}
            <div className="w-3/4 relative">
            <div className="h-8 bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-1 z-10 relative flex items-center justify-center font-mono text-[10px]">APP LAYER</div>
            <div className="h-8 bg-black text-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-1 z-20 relative flex items-center justify-center font-mono text-[10px]">ODENA CORE</div>
            <div className="h-8 bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] z-0 relative flex items-center justify-center font-mono text-[10px]">DATA LAYER</div>
            </div>
        </div>
        </div>
));
VisualDeepStack.displayName = 'VisualDeepStack';

// --- Content Data with varied sizes ---

const items = [
{
    title: "Adaptive Data Models",
    desc: "Models that reshape themselves around the data they're given, without requiring manual tuning or retraining.",
    visual: <VisualAdaptiveModels />,
    // Tall left box, spans 2 rows.
    className: "md:col-span-1 md:row-span-2",
},
{
    title: "Dynamic Processing Chains",
    desc: "Pipelines that reconfigure on the fly to match workload, structure, or behavior always using the most efficient path.",
    visual: <VisualDynamicChains />,
    // Wide top box, spans 2 columns.
    className: "md:col-span-2 md:row-span-1",
},
{
    title: "Unified Format Engines",
    desc: "One engine for every format code, video, logs, text so teams don't juggle separate tools.",
    visual: <VisualUnifiedFormats />,
    // Standard size.
    className: "md:col-span-1 md:row-span-1",
},
{
    title: "Real-Time Decision Layers",
    desc: "Fast systems that evaluate incoming data instantly and choose the most useful operations with zero delay.",
    visual: <VisualRealTime />,
    // Standard size.
    className: "md:col-span-1 md:row-span-1",
},
{
    title: "Self-Maintaining Structures",
    desc: "Systems that clean, correct, and reorganize themselves as information grows.",
    visual: <VisualSelfMaintaining />,
    // Wide bottom box.
    className: "md:col-span-2 md:row-span-1",
},
{
    title: "Deep Stack Compatibility",
    desc: "Built to drop cleanly into existing environments, scaling from prototypes to massive workloads.",
    visual: <VisualDeepStack />,
    // Standard size, fills the gap.
    className: "md:col-span-1 md:row-span-1",
}
];

// --- Main Components ---

const BentoCard = memo(({ title, desc, visual, className }: { title: string, desc: string, visual: React.ReactNode, className?: string }) => {
    return (
        <div className={`bg-white/25 border-2 border-black/50 flex flex-col justify-between overflow-hidden relative group rounded-lg ${className}`}>
        {/* Content Section */}
        <div className="p-6 z-10 bg-white/25 border-b-2 border-transparent group-hover:border-black/5 transition-colors">
            <h3 className="text-sm font-mono font-bold uppercase tracking-widest text-gray-900 mb-3">
                {title}
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
                {desc}
            </p>
        </div>
        
        {/* Visual Section (Fills the remaining space) */}
        <div className="grow relative bg-gray-50/10 group-hover:bg-gray-50/30 transition-colors duration-300 flex items-stretch justify-stretch">
            {/* The visual asset will stretch to fill this container */}
            {visual}
        </div>
        </div>
    );
});
BentoCard.displayName = 'BentoCard';

export default function OdenaBentoGrid() {
    return (
        <section className="bg-[#fdf6e3] min-h-screen px-4 py-2 flex items-center justify-center font-sans text-black">
        <div className="max-w-5xl w-full py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 auto-rows-[minmax(250px,auto)]">
                {items.map((item, idx) => (
                    <BentoCard
                        key={idx}
                        title={item.title}
                        desc={item.desc}
                        visual={item.visual}
                        className={item.className}
                    />
                ))}
            </div>
        </div>
        </section>
    );
}
