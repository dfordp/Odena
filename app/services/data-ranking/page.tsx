import CallToAction from "@/components/CallToAction";
import { ArrowRight, Zap, Target, Layers as LayersIcon, CheckCircle } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Data Ranking Services – Zero-Shot Ranking Systems | Odena",
  description:
    "Advanced zero-shot ranking systems that score and prioritize data without training. Built for speed, relevance, and precision across code, media, text, and structured datasets.",
  keywords: [
    "data ranking",
    "zero-shot ranking",
    "relevance scoring",
    "data prioritization",
    "cross-domain ranking",
    "ranking algorithms",
    "semantic ranking",
    "data quality scoring",
    "real-time ranking",
    "adaptive ranking systems"
  ],
  openGraph: {
    title: "Data Ranking Services – Zero-Shot Systems That Understand Any Dataset",
    description:
      "Odena builds zero-shot ranking systems that score datasets instantly without training. From code quality to media relevance, our ranking engines adapt to any domain.",
    url: "https://www.odena.io/services/data-ranking",
    siteName: "Odena",
    images: [
      {
        url: "https://www.odena.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "Odena Data Ranking Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Ranking – Zero-Shot Systems for Any Dataset",
    description:
      "Ranking systems that understand unseen data instantly. Built for relevance, quality, and anomaly detection across domains.",
    images: ["https://www.odena.io/og-image.png"],
  },
  alternates: {
    canonical: "https://www.odena.io/services/data-ranking",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DataRankingPage() {
  const useCases = [
    {
      title: "Code Quality Ranking",
      desc: "Score repositories, pull requests, and code snippets based on complexity, maintainability, and best practices."
    },
    {
      title: "Content Relevance",
      desc: "Rank documents, articles, and media by semantic relevance to queries without fine-tuning."
    },
    {
      title: "Anomaly Detection",
      desc: "Identify outliers and suspicious patterns in transaction logs, telemetry, or user behavior."
    },
    {
      title: "Search Result Ranking",
      desc: "Power intelligent search with context-aware ranking that adapts to user intent."
    },
    {
      title: "Data Quality Assessment",
      desc: "Score datasets for completeness, consistency, and reliability before downstream processing."
    },
    {
      title: "Recommendation Engines",
      desc: "Build adaptive recommendation systems that learn from minimal examples."
    }
  ];

  const capabilities = [
    {
      icon: Zap,
      title: "Zero-Shot Learning",
      desc: "Our models understand new datasets without retraining. Define criteria, and the system adapts instantly."
    },
    {
      icon: Target,
      title: "Multi-Criteria Scoring",
      desc: "Combine relevance, quality, recency, and custom heuristics into unified ranking scores."
    },
    {
      icon: LayersIcon,
      title: "Cross-Domain Adaptability",
      desc: "One ranking engine works across code, text, images, structured data, and multimodal inputs."
    }
  ];

  const technicalApproach = [
    {
      step: "01",
      title: "Embedding Generation",
      desc: "We extract semantic representations using state-of-the-art encoders optimized for your domain."
    },
    {
      step: "02",
      title: "Context-Aware Scoring",
      desc: "Ranking functions combine embeddings with metadata, temporal signals, and behavioral patterns."
    },
    {
      step: "03",
      title: "Adaptive Calibration",
      desc: "Systems self-tune based on feedback loops, improving precision without manual intervention."
    },
    {
      step: "04",
      title: "Real-Time Execution",
      desc: "Built for high-throughput environments with sub-millisecond latency for scoring operations."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      
      {/* HERO */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="mb-4">
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition"
          >
            ← Back to Services
          </Link>
        </div>
        
        <h1 className="text-3xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
          Data Ranking Systems That Understand Without Training
        </h1>
        
        <p className="mt-4 sm:mt-6 text-base sm:text-md text-muted-foreground leading-relaxed max-w-3xl">
          Zero-shot ranking engines that score any dataset code, media, text, structured data based on relevance, 
          quality, anomaly likelihood, or custom criteria. No training required. Just define what matters, 
          and the system adapts.
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
          Our ranking systems combine semantic understanding with adaptive scoring mechanisms, 
          delivering accurate results from the first query.
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

      {/* ARCHITECTURE DIAGRAM */}
      <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">Ranking Pipeline Architecture</h2>
        
        <div className="bg-card/30 border border-border rounded-[10px] p-8 sm:p-12">
          <div className="flex flex-col gap-6">
            {/* Input Layer */}
            <div className="flex items-center gap-4">
              <div className="flex-1 p-4 rounded-lg bg-amber-900/10 border border-amber-900/20 text-center">
                <div className="font-semibold mb-1">Input Data</div>
                <div className="text-xs text-muted-foreground">Code • Text • Media • Structured</div>
              </div>
            </div>

            <div className="flex justify-center">
              <ArrowRight className="w-6 h-6 text-primary rotate-90" />
            </div>

            {/* Processing Layer */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 text-center">
                <div className="font-semibold mb-1 text-sm">Embedding Engine</div>
                <div className="text-xs text-muted-foreground">Semantic vectors</div>
              </div>
              <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 text-center">
                <div className="font-semibold mb-1 text-sm">Feature Extraction</div>
                <div className="text-xs text-muted-foreground">Metadata & signals</div>
              </div>
              <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 text-center">
                <div className="font-semibold mb-1 text-sm">Context Analysis</div>
                <div className="text-xs text-muted-foreground">Behavioral patterns</div>
              </div>
            </div>

            <div className="flex justify-center">
              <ArrowRight className="w-6 h-6 text-primary rotate-90" />
            </div>

            {/* Scoring Layer */}
            <div className="p-6 rounded-lg bg-primary/10 border border-primary/30 text-center">
              <div className="font-semibold mb-2">Adaptive Scoring Engine</div>
              <div className="text-sm text-muted-foreground">
                Multi-criteria ranking • Real-time calibration • Context fusion
              </div>
            </div>

            <div className="flex justify-center">
              <ArrowRight className="w-6 h-6 text-primary rotate-90" />
            </div>

            {/* Output Layer */}
            <div className="p-4 rounded-lg bg-amber-900/10 border border-amber-900/20 text-center">
              <div className="font-semibold mb-1">Ranked Results</div>
              <div className="text-xs text-muted-foreground">Scored • Sorted • Ready for downstream use</div>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6 max-w-2xl mx-auto">
          Each component operates independently, allowing horizontal scaling and domain-specific customization 
          without rewriting the entire pipeline.
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

      {/* WHY ZERO-SHOT */}
      <section className="py-12 px-4 sm:px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Why Zero-Shot Matters</h2>
        
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Traditional ranking systems require extensive labeled datasets and domain-specific training. 
            That&apos;s slow, expensive, and breaks when data patterns shift.
          </p>
          
          <p>
            Our zero-shot approach uses pre-trained semantic understanding combined with adaptive scoring heuristics. 
            This means you can deploy ranking systems for new domains in hours, not months.
          </p>
          
          <p>
            The system learns from structure, context, and minimal feedback making it ideal for rapidly changing 
            datasets, novel domains, or applications where labeled data doesn&apos;t exist yet.
          </p>
        </div>
      </section>

      {/* PERFORMANCE METRICS */}
      <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">Built for Scale</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="text-center p-6 rounded-[10px] bg-amber-900/4 border border-amber-900/18">
            <div className="text-4xl font-bold text-primary mb-2">&lt;10ms</div>
            <div className="text-sm font-medium mb-1">Scoring Latency</div>
            <div className="text-xs text-muted-foreground">Per-item ranking in real-time systems</div>
          </div>
          
          <div className="text-center p-6 rounded-[10px] bg-amber-900/4 border border-amber-900/18">
            <div className="text-4xl font-bold text-primary mb-2">1M+</div>
            <div className="text-sm font-medium mb-1">Items/Second</div>
            <div className="text-xs text-muted-foreground">Throughput on distributed clusters</div>
          </div>
          
          <div className="text-center p-6 rounded-[10px] bg-amber-900/4 border border-amber-900/18">
            <div className="text-4xl font-bold text-primary mb-2">Zero</div>
            <div className="text-sm font-medium mb-1">Training Data Required</div>
            <div className="text-xs text-muted-foreground">Deploy to new domains instantly</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-6 text-center px-4 sm:px-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Ready to Rank Smarter?</h2>
        <p className="mt-2 max-w-xl md:max-w-2xl mx-auto text-muted-foreground leading-relaxed mb-6">
          Whether you&apos;re building search, recommendations, or quality filters, our ranking systems adapt to your needs.
        </p>
        <CallToAction />
      </section>
    </div>
  );
}
