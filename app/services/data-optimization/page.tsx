import Link from "next/link";
import { ArrowLeft, Zap, Target, Gauge, CheckCircle, TrendingUp, Cpu, HardDrive } from "lucide-react";
import CallToAction from "@/components/CallToAction";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Optimization Services | Odena",
  description: "Optimize your data infrastructure for performance, cost, and scalability. Reduce query times by 10x and cut storage costs by up to 60%.",
  keywords: ["data optimization", "query performance", "database tuning", "storage optimization", "cost reduction", "indexing strategies", "data compression"],
  openGraph: {
    title: "Data Optimization Services | Odena",
    description: "Optimize your data infrastructure for performance, cost, and scalability. Reduce query times by 10x and cut storage costs by up to 60%.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Optimization Services | Odena",
    description: "Optimize your data infrastructure for performance, cost, and scalability. Reduce query times by 10x and cut storage costs by up to 60%.",
  },
};

const capabilities = [
  {
    icon: Zap,
    title: "Query Performance Tuning",
    desc: "Optimize slow queries, improve execution plans, and implement smart indexing strategies for dramatic speed improvements.",
  },
  {
    icon: HardDrive,
    title: "Storage Optimization",
    desc: "Reduce storage costs through intelligent compression, partitioning, and archival strategies without sacrificing access patterns.",
  },
  {
    icon: Cpu,
    title: "Resource Efficiency",
    desc: "Right-size compute resources, eliminate waste, and optimize for both performance and cost across your data stack.",
  },
];

const optimizationAreas = [
  {
    area: "Query Execution",
    techniques: ["Index optimization", "Query rewriting", "Materialized views", "Partition pruning"],
    impact: "10-100x faster",
    color: "bg-blue-500/10 border-blue-500/30",
  },
  {
    area: "Data Storage",
    techniques: ["Columnar formats", "Compression", "Tiered storage", "Deduplication"],
    impact: "40-60% cost reduction",
    color: "bg-purple-500/10 border-purple-500/30",
  },
  {
    area: "Data Models",
    techniques: ["Schema normalization", "Denormalization", "Star/snowflake design", "Type optimization"],
    impact: "30-50% less storage",
    color: "bg-amber-500/10 border-amber-500/30",
  },
  {
    area: "Infrastructure",
    techniques: ["Auto-scaling", "Caching layers", "Resource allocation", "Workload isolation"],
    impact: "20-40% cost savings",
    color: "bg-green-500/10 border-green-500/30",
  },
];

const optimizationProcess = [
  {
    step: "Baseline Assessment",
    desc: "Profile current performance, identify bottlenecks, and establish metrics for tracking improvements.",
  },
  {
    step: "Opportunity Analysis",
    desc: "Analyze query patterns, storage usage, and resource utilization to prioritize high-impact optimizations.",
  },
  {
    step: "Implementation",
    desc: "Apply optimizations incrementally with A/B testing and careful validation at each stage.",
  },
  {
    step: "Monitoring & Iteration",
    desc: "Continuously monitor performance gains and refine strategies based on evolving workload patterns.",
  },
];

const useCases = [
  "Reducing cloud data warehouse costs by optimizing storage and compute",
  "Speeding up business-critical dashboards from minutes to seconds",
  "Scaling analytics platforms to handle 10x more concurrent users",
  "Optimizing machine learning feature stores for real-time inference",
  "Improving ETL pipeline throughput by 5-10x through parallelization",
  "Reducing database hosting costs through intelligent indexing and caching",
];

const performanceMetrics = [
  { metric: "10-100x", label: "Query Speed Improvement", desc: "Average across optimizations" },
  { metric: "40-60%", label: "Storage Cost Reduction", desc: "Through compression & tiering" },
  { metric: "30-50%", label: "Compute Savings", desc: "Via resource right-sizing" },
];

export default function DataOptimizationPage() {
  return (
    <main className="min-h-screen">
      {/* HERO SECTION */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 px-4 sm:px-6 max-w-4xl mx-auto">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Services
        </Link>

        <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
          Data Optimization
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
          Transform your data infrastructure from slow and expensive to fast and cost-effective. 
          Our optimization services deliver measurable improvements in query performance, storage efficiency, and resource utilization.
        </p>
      </section>

      {/* CAPABILITIES */}
      <section className="py-8 px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {capabilities.map((cap, idx) => (
            <div key={idx} className="p-6 rounded-[10px] bg-card/40 border border-border/50">
              <cap.icon className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold mb-2">{cap.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{cap.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OPTIMIZATION AREAS */}
      <section className="py-12 px-4 sm:px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Optimization Focus Areas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {optimizationAreas.map((area, idx) => (
            <div key={idx} className={`${area.color} border rounded-[10px] p-6`}>
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-bold text-lg">{area.area}</h3>
                <div className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                  {area.impact}
                </div>
              </div>
              <ul className="space-y-2">
                {area.techniques.map((technique, techIdx) => (
                  <li key={techIdx} className="flex items-start gap-2 text-sm">
                    <Target className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{technique}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* OPTIMIZATION PROCESS */}
      <section className="py-12 px-4 sm:px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Our Optimization Process</h2>
        <div className="bg-card/30 border border-border rounded-[10px] p-8 sm:p-10">
          <div className="space-y-6">
            {optimizationProcess.map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{item.step}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISUALIZATION: BEFORE/AFTER */}
      <section className="py-12 px-4 sm:px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Typical Performance Improvements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-red-500/5 border border-red-500/20 rounded-[10px] p-6">
            <div className="text-sm font-mono text-red-600 mb-2">Before Optimization</div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Query Time</span>
                <span className="font-mono text-lg">45.3s</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Storage Cost</span>
                <span className="font-mono text-lg">$12,400/mo</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">CPU Utilization</span>
                <span className="font-mono text-lg">78%</span>
              </div>
            </div>
          </div>

          <div className="bg-green-500/5 border border-green-500/20 rounded-[10px] p-6">
            <div className="text-sm font-mono text-green-600 mb-2">After Optimization</div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Query Time</span>
                <span className="font-mono text-lg text-green-600">1.2s</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Storage Cost</span>
                <span className="font-mono text-lg text-green-600">$4,900/mo</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">CPU Utilization</span>
                <span className="font-mono text-lg text-green-600">42%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-12 px-4 sm:px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Common Use Cases</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {useCases.map((useCase, idx) => (
            <div key={idx} className="flex items-start gap-3 p-4 rounded-lg bg-card/30 border border-border/40">
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <p className="text-sm leading-relaxed">{useCase}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY OPTIMIZATION MATTERS */}
      <section className="py-12 px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="bg-linear-to-br from-primary/5 to-primary/10 rounded-[10px] p-8 sm:p-10 border border-primary/20">
          <h2 className="text-2xl font-bold mb-4">Why Data Optimization Matters</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Unoptimized data systems don&apos;t just cost more—they slow down decision-making, frustrate users, and create technical debt. 
            Our optimization work pays for itself within months through reduced cloud bills and improved productivity.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <TrendingUp className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-sm">Measurable ROI with detailed before/after performance benchmarks</span>
            </li>
            <li className="flex items-start gap-3">
              <Gauge className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-sm">Continuous monitoring to ensure optimizations remain effective over time</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-sm">Zero-downtime implementations with comprehensive testing and rollback plans</span>
            </li>
          </ul>
        </div>
      </section>

      {/* PERFORMANCE METRICS */}
      <section className="py-12 px-4 sm:px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Typical Results</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {performanceMetrics.map((item, idx) => (
            <div key={idx} className="text-center p-6 rounded-[10px] bg-card/40 border border-border/50">
              <div className="text-3xl font-bold text-primary mb-2">{item.metric}</div>
              <div className="font-semibold mb-1">{item.label}</div>
              <div className="text-xs text-muted-foreground">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-12 px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-3">Ready to Optimize Your Data Systems?</h2>
          <p className="text-muted-foreground">Let&apos;s analyze your infrastructure and identify opportunities for dramatic performance and cost improvements.</p>
        </div>
        <CallToAction />
      </section>
    </main>
  );
}
