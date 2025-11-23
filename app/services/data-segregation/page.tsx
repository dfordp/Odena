import CallToAction from "@/components/CallToAction";
import { ArrowRight, GitBranch, Network, Layers as LayersIcon, CheckCircle } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Data Segregation Services – Intelligent Multi-Modal Organization | Odena",
  description:
    "Transform chaotic data into structured, AI-ready layers. Odena intelligently segregates multimodal inputs into meaningful segments that reflect your information ecosystem's true architecture.",
  keywords: [
    "data segregation",
    "intelligent data organization",
    "multimodal data processing",
    "data structuring",
    "AI-ready data",
    "data pipeline optimization",
    "semantic data layers",
    "data architecture",
    "structural intelligence",
    "data ecosystem management"
  ],
  openGraph: {
    title: "Data Segregation – Transform Data Chaos Into Structured Intelligence",
    description:
      "Odena separates raw, multimodal inputs into structured, meaningful layers that are logical, accurate, and ready for advanced AI workflows.",
    url: "https://www.odena.io/services/data-segregation",
    siteName: "Odena",
    images: [
      {
        url: "https://www.odena.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "Odena Data Segregation Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Segregation – Intelligent Organization for AI Excellence",
    description:
      "Transform chaotic multimodal data into structured, AI-ready layers that accelerate innovation and enhance model quality.",
    images: ["https://www.odena.io/og-image.png"],
  },
  alternates: {
    canonical: "https://www.odena.io/services/data-segregation",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DataSegregationPage() {
  const useCases = [
    {
      title: "Cleaner Training Datasets",
      desc: "Eliminate inconsistencies and duplicates by segregating data into quality-verified, domain-specific layers."
    },
    {
      title: "Clearer Domain Boundaries",
      desc: "Establish logical separations between data types, sources, and contexts for better model calibration."
    },
    {
      title: "Enhanced Feature Engineering",
      desc: "Work with structurally organized data that reveals cross-domain connections and hidden patterns."
    },
    {
      title: "Faster Experimentation",
      desc: "Reduce time spent wrestling with disorganized data, start with a clean, well-architected foundation."
    },
    {
      title: "Improved Model Quality",
      desc: "Feed AI systems with predictable, interpretable data that improves accuracy and reduces failure rates."
    },
    {
      title: "Anomaly Detection",
      desc: "Identify outliers and data quality issues more easily when information is properly segregated."
    }
  ];

  const capabilities = [
    {
      icon: LayersIcon,
      title: "Intelligent Layering",
      desc: "Organize data into coherent, logically-tiered segments that reveal internal relationships and domain boundaries."
    },
    {
      icon: Network,
      title: "Multimodal Processing",
      desc: "Handle text, code, satellite imagery, telemetry, logs, events, financial signals, and behavioral patterns in unified workflows."
    },
    {
      icon: GitBranch,
      title: "Structural Intelligence",
      desc: "Decipher complex relationships across data types to create AI-ready foundations that accelerate innovation."
    }
  ];

  const technicalApproach = [
    {
      step: "01",
      title: "Relationship Discovery",
      desc: "Decipher internal relationships across multimodal data sources to understand true information architecture."
    },
    {
      step: "02",
      title: "Semantic Segregation",
      desc: "Separate data into meaningful layers based on content, context, quality, and domain boundaries."
    },
    {
      step: "03",
      title: "Structural Validation",
      desc: "Ensure segregated layers are logically coherent, analytically sound, and universally compatible."
    },
    {
      step: "04",
      title: "Pipeline Integration",
      desc: "Deliver organized data as a predictable, interpretable foundation for advanced AI workflows."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      
      {/* HERO */}
      <section className="flex flex-col items-center pt-22 pb-12 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="mb-4 md:mb-6 w-full md:pl-12 mx-auto">
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition md:mb-2"
          >
            ←<span className="underline underline-offset-[3px]">Back to Services</span>
          </Link>
        </div>
        
        <h1 className="text-3xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
          Transform Data Chaos Into Structured Intelligence
        </h1>
        
        <p className="mt-4 text-base sm:text-md text-muted-foreground leading-relaxed max-w-[1050px] text-center">
          As organizations scale, data becomes a tangled mixture of formats, sources, and contexts. Odena&apos;s Data Segregation 
          service intelligently separates raw, multimodal inputs into structured, meaningful layers that reflect the true architecture 
          of your information ecosystem, whether text, code, imagery, telemetry, logs, or behavioral patterns.
        </p>
      </section>

      {/* CAPABILITIES */}
      <section className="py-8 px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8">Core Capabilities</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div key={idx} className="p-6 rounded-[10px] bg-amber-900/4 border border-amber-900/18">
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{cap.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{cap.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* TECHNICAL APPROACH */}
      <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-2">How It Works</h2>
        <p className="text-muted-foreground mb-8 max-w-3xl">
          Our intelligent segregation engine transforms raw, chaotic data into structured layers that 
          are universally compatible with modern AI workflows and ready for advanced analysis.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {technicalApproach.map((item, idx) => (
            <div key={idx} className="p-6 rounded-[10px] bg-card/50 border border-border/50">
              <div className="text-3xl font-bold text-primary mb-3">{item.step}</div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SEGREGATION VISUALIZATION */}
      <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">Intelligent Segregation Process</h2>
        
        <div className="bg-card/30 border border-border rounded-[10px] p-8 sm:p-12">
          <div className="flex flex-col gap-8">
            {/* Input Data */}
            <div className="text-center">
              <div className="inline-block p-6 rounded-lg bg-amber-900/10 border border-amber-900/20">
                <div className="font-semibold mb-2">Unstructured Dataset</div>
                <div className="flex gap-2 justify-center flex-wrap">
                  {[...Array(12)].map((_, i) => (
                    <div 
                      key={i} 
                      className="w-3 h-3 rounded-full bg-muted"
                      style={{ opacity: 0.6 + Math.random() * 0.4 }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <ArrowRight className="w-6 h-6 text-primary rotate-90" />
            </div>

            {/* Processing */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg bg-primary/5 border border-primary/20">
                <div className="font-semibold mb-3 text-center">Feature Space Projection</div>
                <div className="relative h-32 bg-card/50 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-xs text-muted-foreground">High-dimensional embedding space</div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 rounded-lg bg-primary/5 border border-primary/20">
                <div className="font-semibold mb-3 text-center">Similarity Analysis</div>
                <div className="relative h-32 bg-card/50 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-xs text-muted-foreground">Distance-based grouping</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <ArrowRight className="w-6 h-6 text-primary rotate-90" />
            </div>

            {/* Clustered Output */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-primary/10 border border-primary/30 text-center">
                <div className="font-semibold mb-2 text-sm">Cluster A</div>
                <div className="flex gap-1 justify-center flex-wrap">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-2.5 h-2.5 rounded-full bg-primary/60" />
                  ))}
                </div>
              </div>
              
              <div className="p-4 rounded-lg bg-secondary/10 border border-secondary/30 text-center">
                <div className="font-semibold mb-2 text-sm">Cluster B</div>
                <div className="flex gap-1 justify-center flex-wrap">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-2.5 h-2.5 rounded-full bg-secondary/60" />
                  ))}
                </div>
              </div>
              
              <div className="p-4 rounded-lg bg-accent/10 border border-accent/30 text-center">
                <div className="font-semibold mb-2 text-sm">Cluster C</div>
                <div className="flex gap-1 justify-center flex-wrap">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-2.5 h-2.5 rounded-full bg-accent/60" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6 max-w-2xl mx-auto">
          Our segregation engine organizes multimodal data into coherent layers that reveal internal relationships, 
          creating an AI-ready foundation that&apos;s logically tiered and analytically sound.
        </p>
      </section>

      {/* USE CASES */}
      <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8">Where It&apos;s Applied</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, idx) => (
            <div key={idx} className="p-6 rounded-[10px] bg-card/40 border border-border/50">
              <div className="flex items-start gap-3 mb-2">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <h3 className="text-lg font-semibold">{useCase.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed ml-8">{useCase.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* THE FUNDAMENTAL PROBLEM */}
      <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">The Fundamental Problem We Solve</h2>
        
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Most companies try to force messy data into rigid schemas or manual cleaning routines, only to discover their 
            data remains inconsistent, duplicated, fragmented, or misaligned. This creates a critical industry problem: 
            AI systems often fail not because the model is weak, but because the data feeding it is disorganized.
          </p>
          
          <p>
            When companies integrate Odena&apos;s segregation engine into their projects, their entire data pipeline becomes more 
            predictable, interpretable, and stable. Training datasets become cleaner, domain boundaries become clearer, 
            anomalies become easier to identify, and cross-domain connections become visible where none existed before.
          </p>
          
          <p>
            This structured clarity enables better feature engineering, improved model calibration, faster experimentation, 
            and greater trust in downstream outputs. Instead of spending time wrestling with inconsistent data, teams gain 
            a foundation that feels less like chaos and more like a well-designed research instrument.
          </p>
        </div>
      </section>

      {/* SEGREGATION STRATEGIES */}
      <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8">Segregation Strategies We Deploy</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-[10px] bg-card/50 border border-border/50">
            <h3 className="text-lg font-semibold mb-3">Quality-Based Separation</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Automatically segregate high-quality, verified data from noisy, incomplete, or low-confidence sources.
            </p>
            <div className="text-xs text-primary font-medium">Confidence scoring • Completeness analysis • Source reputation</div>
          </div>

          <div className="p-6 rounded-[10px] bg-card/50 border border-border/50">
            <h3 className="text-lg font-semibold mb-3">Domain-Aware Layering</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Create logical boundaries between business domains, data types, and contextual categories.
            </p>
            <div className="text-xs text-primary font-medium">Semantic understanding • Ontology mapping • Context analysis</div>
          </div>

          <div className="p-6 rounded-[10px] bg-card/50 border border-border/50">
            <h3 className="text-lg font-semibold mb-3">Temporal Segregation</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Organize data by time-based relevance, recency, and historical significance for time-sensitive workflows.
            </p>
            <div className="text-xs text-primary font-medium">Event ordering • Temporal clustering • Drift detection</div>
          </div>

          <div className="p-6 rounded-[10px] bg-card/50 border border-border/50">
            <h3 className="text-lg font-semibold mb-3">Multi-Modal Alignment</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Intelligently segregate and align data across text, images, structured records, and behavioral signals.
            </p>
            <div className="text-xs text-primary font-medium">Cross-modal fusion • Format normalization • Relationship extraction</div>
          </div>
        </div>
      </section>

      {/* BUSINESS IMPACT */}
      <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">The Competitive Advantage</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="text-center p-6 rounded-[10px] bg-amber-900/4 border border-amber-900/18">
            <div className="text-4xl font-bold text-primary mb-2">Predictable</div>
            <div className="text-sm font-medium mb-1">Data Pipelines</div>
            <div className="text-xs text-muted-foreground">Transform chaos into stable, interpretable workflows</div>
          </div>
          
          <div className="text-center p-6 rounded-[10px] bg-amber-900/4 border border-amber-900/18">
            <div className="text-4xl font-bold text-primary mb-2">Faster</div>
            <div className="text-sm font-medium mb-1">Innovation Cycles</div>
            <div className="text-xs text-muted-foreground">Start experiments with clean, organized data</div>
          </div>
          
          <div className="text-center p-6 rounded-[10px] bg-amber-900/4 border border-amber-900/18">
            <div className="text-4xl font-bold text-primary mb-2">Greater</div>
            <div className="text-sm font-medium mb-1">Model Trust</div>
            <div className="text-xs text-muted-foreground">Foundation that enhances quality and accuracy</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-6 text-center px-4 sm:px-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Ready to Transform Data Chaos Into Structure?</h2>
        <p className="mt-2 max-w-xl md:max-w-2xl mx-auto text-muted-foreground leading-relaxed mb-6">
          Gain a data ecosystem that accelerates innovation, enhances model quality, and gives your organization 
          the competitive advantage of true structural intelligence.
        </p>
        <CallToAction />
      </section>
    </div>
  );
}
