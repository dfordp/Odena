import CallToAction from "@/components/CallToAction";
import { ArrowRight, Brain, Network, TrendingUp, CheckCircle, Sparkles } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Data Ranking Services – Uncover Hidden Hierarchy in Your Datasets | Odena",
  description:
    "Automatically discover which data points drive model performance, strengthen generalization, and reduce hallucinations. Stop treating all data equally, rank by true strategic value.",
  keywords: [
    "data ranking",
    "model performance optimization",
    "training data efficiency",
    "cross-domain data analysis",
    "data influence detection",
    "signal quality ranking",
    "dataset optimization",
    "AI training efficiency",
    "data strategic value",
    "intelligent data selection"
  ],
  openGraph: {
    title: "Data Ranking – Discover the Hidden Hierarchy in Your Datasets",
    description:
      "Odena reveals which data points genuinely improve model performance, generalization, and reliability. Transform data from vague asset to precisely mapped strategic landscape.",
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
    title: "Data Ranking – Build Smarter AI by Learning What Matters",
    description:
      "Automatically identify which signals improve models, which reduce hallucinations, and which introduce noise. Train smarter, not larger.",
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
  const impactMetrics = [
    {
      title: "Training Pipeline Efficiency",
      desc: "Dramatically accelerate model convergence by focusing compute on high-influence data points, reducing training time and costs."
    },
    {
      title: "Model Quality & Generalization",
      desc: "Identify signals that strengthen generalization and reduce hallucinations, leading to more reliable AI systems."
    },
    {
      title: "Strategic Labeling Focus",
      desc: "Direct labeling efforts toward the most valuable data slices, maximizing ROI on human annotation."
    },
    {
      title: "Noise & Bias Detection",
      desc: "Automatically surface data points that silently introduce noise or bias, enabling proactive dataset cleanup."
    },
    {
      title: "Compute Cost Reduction",
      desc: "Amplify meaningful information and suppress low-value signals, cutting wasted compute while improving output quality."
    },
    {
      title: "Data Intelligence Advantage",
      desc: "Transform datasets from vague assets into precisely mapped landscapes of strategic opportunity."
    }
  ];

  const capabilities = [
    {
      icon: Brain,
      title: "Influence Hierarchy Detection",
      desc: "Automatically uncover which data points genuinely improve model performance versus those that add noise or redundancy."
    },
    {
      icon: Network,
      title: "Cross-Domain Interaction Analysis",
      desc: "Connect behavioral patterns with telemetry, satellite imagery with environmental shifts, code changes with security events, revealing relevance structures invisible to human analysis."
    },
    {
      icon: TrendingUp,
      title: "Strategic Value Mapping",
      desc: "Determine which dataset slices hold the highest strategic value for training, which need augmentation, and which can be deprioritized."
    },
    {
      icon: Sparkles,
      title: "Performance-Driven Prioritization",
      desc: "Rank data based on real impact metrics: convergence speed, generalization strength, hallucination reduction, and output reliability."
    }
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Deep Dataset Analysis",
      desc: "We analyze your complete dataset to understand its structure, patterns, and hidden relationships across domains."
    },
    {
      step: "02",
      title: "Influence Mapping",
      desc: "Our system evaluates every data point's contribution to model performance, generalization, and reliability, creating a precise hierarchy of value."
    },
    {
      step: "03",
      title: "Cross-Domain Correlation",
      desc: "Detect interactions between different data types and domains that human teams cannot identify at scale, revealing the true relevance structure."
    },
    {
      step: "04",
      title: "Actionable Intelligence",
      desc: "Deliver clear insights on where to focus labeling, which slices need augmentation, and which data points to amplify or suppress."
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
          Stop Treating All Data Equally. Discover What Actually Matters.
        </h1>
        
        <p className="mt-4 text-base sm:text-md text-muted-foreground leading-relaxed max-w-[1050px] text-center">
          Most companies waste compute on data that doesn&apos;t improve their models. Odena&apos;s Data Ranking reveals the 
          hidden hierarchy of influence within your datasets automatically identifying which signals genuinely drive 
          performance, strengthen generalization, reduce hallucinations, and which silently introduce noise or bias. 
          Train smarter, not larger.
        </p>
      </section>

      {/* CAPABILITIES */}
      <section className="py-8 px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8">Core Capabilities</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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

      {/* HOW IT WORKS */}
      <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-2">How We Uncover Data Influence</h2>
        <p className="text-muted-foreground mb-8 max-w-3xl">
          Our system deeply analyzes datasets to reveal relevance structures that human teams cannot detect at scale, 
          transforming data from a vague asset into a precisely mapped strategic landscape.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {howItWorks.map((item, idx) => (
            <div key={idx} className="p-6 rounded-[10px] bg-card/50 border border-border/50">
              <div className="text-3xl font-bold text-primary mb-3">{item.step}</div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CROSS-DOMAIN INTELLIGENCE */}
      <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">Cross-Domain Intelligence Pipeline</h2>
        
        <div className="bg-card/30 border border-border rounded-[10px] p-8 sm:p-12">
          <div className="flex flex-col gap-6">
            {/* Input Layer */}
            <div className="flex items-center gap-4">
              <div className="flex-1 p-4 rounded-lg bg-amber-900/10 border border-amber-900/20 text-center">
                <div className="font-semibold mb-1">Multi-Domain Datasets</div>
                <div className="text-xs text-muted-foreground">Behavioral • Telemetry • Satellite • Code • Environmental</div>
              </div>
            </div>

            <div className="flex justify-center">
              <ArrowRight className="w-6 h-6 text-primary rotate-90" />
            </div>

            {/* Analysis Layer */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 text-center">
                <div className="font-semibold mb-1 text-sm">Deep Analysis</div>
                <div className="text-xs text-muted-foreground">Structure & patterns</div>
              </div>
              <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 text-center">
                <div className="font-semibold mb-1 text-sm">Influence Mapping</div>
                <div className="text-xs text-muted-foreground">Performance impact</div>
              </div>
              <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 text-center">
                <div className="font-semibold mb-1 text-sm">Cross-Domain Links</div>
                <div className="text-xs text-muted-foreground">Hidden correlations</div>
              </div>
            </div>

            <div className="flex justify-center">
              <ArrowRight className="w-6 h-6 text-primary rotate-90" />
            </div>

            {/* Intelligence Layer */}
            <div className="p-6 rounded-lg bg-primary/10 border border-primary/30 text-center">
              <div className="font-semibold mb-2">Hierarchy of Influence</div>
              <div className="text-sm text-muted-foreground">
                Performance drivers • Generalization signals • Noise sources • Bias indicators
              </div>
            </div>

            <div className="flex justify-center">
              <ArrowRight className="w-6 h-6 text-primary rotate-90" />
            </div>

            {/* Output Layer */}
            <div className="p-4 rounded-lg bg-amber-900/10 border border-amber-900/20 text-center">
              <div className="font-semibold mb-1">Actionable Intelligence</div>
              <div className="text-xs text-muted-foreground">Strategic priorities • Training focus • Dataset optimization</div>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6 max-w-4xl mx-auto">
          Our system evaluates cross-domain interactions at scale, connecting behavioral patterns with telemetry, 
          satellite imagery with environmental shifts, and code changes with security events, revealing relevance 
          structures invisible to human analysis.
        </p>
      </section>

      {/* IMMEDIATE BENEFITS */}
      <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8">Immediate & Measurable Benefits</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {impactMetrics.map((metric, idx) => (
            <div key={idx} className="p-6 rounded-[10px] bg-card/40 border border-border/50">
              <div className="flex items-start gap-3 mb-2">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <h3 className="text-lg font-semibold">{metric.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed ml-8">{metric.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">The Problem: Not All Data is Created Equal</h2>
        
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Most companies operate in an environment where datasets are massive, messy, and constantly evolving. 
            Yet the industry still treats all data points as if they hold the same importance, leading to wasted 
            compute, slower experiments, and AI systems that learn inefficiently.
          </p>
          
          <p>
            Traditional approaches rely on guesswork or manual sampling to determine data value. This leaves teams 
            uncertain about where to focus labeling efforts, which signals genuinely improve models, and which 
            introduce noise or bias that degrades performance.
          </p>
          
          <p>
            Odena&apos;s Data Ranking disrupts this paradigm. Instead of treating data as a uniform blob, we automatically 
            determine which signals genuinely improve model performance, which strengthen generalization, which reduce 
            hallucinations, and which silently corrupt your training pipeline. This transforms data from a vague asset 
            into a precisely mapped landscape of strategic opportunity.
          </p>
        </div>
      </section>

      {/* MEASURABLE OUTCOMES */}
      <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">Real-World Impact</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="text-center p-6 rounded-[10px] bg-amber-900/4 border border-amber-900/18">
            <div className="text-4xl font-bold text-primary mb-2">40-60%</div>
            <div className="text-sm font-medium mb-1">Training Cost Reduction</div>
            <div className="text-xs text-muted-foreground">By focusing compute on high-influence data</div>
          </div>
          
          <div className="text-center p-6 rounded-[10px] bg-amber-900/4 border border-amber-900/18">
            <div className="text-4xl font-bold text-primary mb-2">3-5x</div>
            <div className="text-sm font-medium mb-1">Faster Convergence</div>
            <div className="text-xs text-muted-foreground">Models learn efficiently from prioritized signals</div>
          </div>
          
          <div className="text-center p-6 rounded-[10px] bg-amber-900/4 border border-amber-900/18">
            <div className="text-4xl font-bold text-primary mb-2">Superior</div>
            <div className="text-sm font-medium mb-1">Output Quality</div>
            <div className="text-xs text-muted-foreground">Enhanced reliability and reduced hallucinations</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-6 text-center px-4 sm:px-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Build AI That Learns Smarter, Not Larger</h2>
        <p className="mt-2 max-w-xl md:max-w-2xl mx-auto text-muted-foreground leading-relaxed mb-6">
          Stop wasting compute on low-value data. Discover which signals truly drive model performance and gain 
          a formidable competitive advantage through intelligent data prioritization.
        </p>
        <CallToAction />
      </section>
    </div>
  );
}
