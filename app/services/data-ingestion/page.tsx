import Link from "next/link";
import { Database, Zap, Shield, CheckCircle, GitBranch, Activity } from "lucide-react";
import CallToAction from "@/components/CallToAction";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Data Ingestion – Precision Pipelines for Intelligent Systems | Odena",
  description: "Build clean, context-aware data ingestion pipelines designed for AI. Eliminate fragmentation, ensure consistency, and prepare data with scientific precision for advanced model performance.",
  keywords: ["AI data ingestion", "machine learning pipelines", "multimodal data", "AI preprocessing", "data quality for AI", "model training data", "AI data preparation", "context-aware ingestion"],
  openGraph: {
    title: "AI Data Ingestion – Precision Pipelines for Intelligent Systems | Odena",
    description: "Clean, coherent, context-aware ingestion pipelines that prepare data for AI with laboratory precision. Transform fragmented data into a unified foundation for advanced models.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Data Ingestion – Precision for Intelligence",
    description: "Eliminate data fragmentation. Build AI ingestion pipelines with scientific precision, consistency, and context awareness.",
  },
};

const capabilities = [
  {
    icon: Database,
    title: "Multi-Source Integration",
    desc: "Connect to databases, APIs, files, streams, and cloud storage with unified interfaces and automatic schema detection.",
  },
  {
    icon: Zap,
    title: "Real-Time & Batch Processing",
    desc: "Support both streaming ingestion for live data and batch processing for large-scale historical loads.",
  },
  {
    icon: Shield,
    title: "Data Quality & Validation",
    desc: "Built-in validation rules, deduplication, error handling, and data quality checks at every stage.",
  },
];

const pipelineStages = [
  {
    stage: "Extract",
    desc: "Pull data from diverse sources with intelligent rate limiting and retry mechanisms.",
    color: "bg-blue-500/10 border-blue-500/30",
  },
  {
    stage: "Transform",
    desc: "Clean, normalize, enrich, and reshape data to match target schemas and business rules.",
    color: "bg-purple-500/10 border-purple-500/30",
  },
  {
    stage: "Validate",
    desc: "Apply quality checks, schema validation, and business rule enforcement before loading.",
    color: "bg-amber-500/10 border-amber-500/30",
  },
  {
    stage: "Load",
    desc: "Efficiently write to data warehouses, lakes, or operational databases with optimized batch sizes.",
    color: "bg-green-500/10 border-green-500/30",
  },
];

const useCases = [
  "Migrating legacy systems to modern cloud data warehouses",
  "Building real-time analytics dashboards from streaming data",
  "Consolidating data from multiple SaaS tools into a central repository",
  "Ingesting IoT sensor data at scale with sub-second latency",
  "Creating master data management systems with multi-source synchronization",
  "Building compliance-ready audit trails with immutable data logs",
];

const features = [
  {
    title: "Schema Evolution",
    desc: "Automatically adapt to schema changes without breaking pipelines or losing data.",
  },
  {
    title: "Incremental Loading",
    desc: "Smart change detection and delta processing to minimize data transfer and processing costs.",
  },
  {
    title: "Error Recovery",
    desc: "Automatic retry logic, dead-letter queues, and alerting for failed records.",
  },
  {
    title: "Monitoring & Observability",
    desc: "Real-time metrics, lineage tracking, and detailed logging for every ingestion job.",
  },
];

const performanceMetrics = [
  { metric: "10M+", label: "Records/Hour", desc: "Sustained throughput" },
  { metric: "<500ms", label: "End-to-End Latency", desc: "For streaming ingestion" },
  { metric: "99.95%", label: "Uptime", desc: "Pipeline availability" },
];

export default function DataIngestionPage() {
  return (
    <main className="min-h-screen">
      {/* HERO SECTION */}
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
          Data Ingestion for Intelligent Systems
        </h1>
        <p className="mt-4 text-base sm:text-md text-muted-foreground leading-relaxed max-w-[1050px] text-center">
          AI systems are only as strong as the data they ingest, yet most organizations still rely on fragmented pipelines, inconsistent preprocessing steps, and ad-hoc integrations that silently erode model performance. Data arrives from countless sources: internal tools, sensors, logs, APIs, documents, satellite feeds, user events, and each carries its own structure, noise profile, and implicit biases.
        </p>
        <p className="mt-4 text-base sm:text-md text-muted-foreground leading-relaxed max-w-[1050px] text-center">
          Without a unified ingestion framework, teams spend more time stitching data together than training or innovating. Odena&apos;s Data Ingestion service eliminates this bottleneck by creating clean, coherent, and context-aware ingestion pipelines that prepare data for AI the way laboratories prepare samples for scientific experiments: with precision, intention, and consistency.
        </p>
      </section>

      {/* CAPABILITIES */}
      <section className="py-8 px-4 sm:px-6 max-w-6xl mx-auto">
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

      {/* INGESTION PIPELINE DIAGRAM */}
      <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">ETL Pipeline Architecture</h2>
        <div className="bg-card/30 border border-border rounded-[10px] p-8 sm:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            {pipelineStages.map((stage, idx) => (
              <div key={idx} className="relative">
                <div className={`${stage.color} border rounded-lg p-6 h-full`}>
                  <div className="text-xs font-mono text-muted-foreground mb-2">Stage {idx + 1}</div>
                  <div className="font-bold text-lg mb-2">{stage.stage}</div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{stage.desc}</p>
                </div>
                {idx < pipelineStages.length - 1 && (
                  <div className="hidden sm:block absolute top-1/2 -right-2 transform -translate-y-1/2">
                    <div className="w-4 h-0.5 bg-border"></div>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4 border-l-border"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-border/50">
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Activity className="w-4 h-4 text-primary" />
              <span>Continuous monitoring and logging at every stage</span>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
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

      {/* KEY FEATURES */}
      <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Advanced Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="p-6 rounded-[10px] bg-amber-900/4 border border-amber-900/18">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <GitBranch className="w-4 h-4 text-primary" />
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY ODENA FOR DATA INGESTION */}
      <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="bg-linear-to-br from-primary/5 to-primary/10 rounded-[10px] p-8 sm:p-10 border border-primary/20">
          <h2 className="text-2xl font-bold mb-4">The Impact on Your AI Infrastructure</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            When teams integrate Odena&apos;s ingestion pipeline into their AI infrastructure, they experience an immediate lift in reliability, accuracy, and stability across the entire development lifecycle. Models converge faster, require fewer retraining cycles, and respond more predictively to new data.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Experimentation becomes smoother, since every run is backed by consistent and traceable data preparation. Teams no longer have to rebuild preprocessing logic for every project. They gain a reusable backbone that powers every model with the same high-quality standards.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            For companies scaling multimodal systems, deploying AI agents, or building foundational models, Odena transforms ingestion from a fragile manual process into a scientific, repeatable, and future-proof foundation. It&apos;s the silent engine that makes advanced AI truly possible.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-sm">Unified framework that eliminates data stitching and preprocessing redundancy</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-sm">Scientific precision in data preparation with consistent quality standards</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-sm">Reusable backbone that accelerates model development and experimentation</span>
            </li>
          </ul>
        </div>
      </section>

      {/* PERFORMANCE METRICS */}
      <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Performance You Can Count On</h2>
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
      <section className="py-6 text-center px-4 sm:px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-3">Ready to Build Your Data Pipeline?</h2>
          <p className="text-muted-foreground">Let&apos;s design an ingestion system that scales with your needs and keeps your data flowing reliably.</p>
        </div>
        <CallToAction />
      </section>
    </main>
  );
}
