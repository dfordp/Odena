import { SlidersHorizontal, Layers, BarChart3, Database, Zap, Shield, BriefcaseBusiness } from "lucide-react";
import Link from "next/link";
import CallToAction from "@/components/CallToAction";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services – Data Ranking, Segregation, Insights & Infrastructure | Odena",
  description:
    "Odena builds research-grade systems for data ranking, segregation, insights, ingestion, optimization, and AI safety. Explore how our adaptive pipelines and multimodal operators power high-throughput, production-ready intelligence.",
  keywords: [
    "Odena services",
    "data ranking",
    "zero-shot ranking",
    "data segregation",
    "multimodal segmentation",
    "data insights",
    "anomaly detection",
    "pipeline consulting",
    "AI consulting",
    "data ingestion pipelines",
    "real-time data processing",
    "data optimization",
    "query optimization",
    "AI safety",
    "AI regulation",
    "systems engineering",
    "adaptive data pipelines",
    "high throughput data systems"
  ],
  openGraph: {
    title: "Odena Services – Systems That Organize, Rank & Understand Data",
    description:
      "Learn how Odena builds adaptive ranking engines, self-organizing clustering systems, anomaly detection pipelines, robust data ingestion layers, and AI-safety compliant infrastructure.",
    url: "https://www.odena.io/services",
    siteName: "Odena",
    images: [
      {
        url: "https://www.odena.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "Odena – Data Ranking, Segregation and AI Systems Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Odena Services – Research-Grade Data & AI Systems",
    description:
      "Explore Odena’s engineering services for ranking, segmentation, multimodal insights, pipeline design, optimization, ingestion, and AI safety.",
    images: ["https://www.odena.io/og-image.png"],
  },
  alternates: {
    canonical: "https://www.odena.io/services",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ServicesPage() {
  const services = [
    {
      icon: SlidersHorizontal,
      title: "Data Ranking",
      desc: "Zero-shot ranking systems that understand datasets without training. Built for speed, relevance, and precision across domains.",
      href: "/services/data-ranking",
      highlights: ["Zero-shot models", "Cross-domain ranking", "Real-time scoring"]
    },
    {
      icon: Layers,
      title: "Data Segregation",
      desc: "Self-organizing clustering engines that automatically segment data by behavior, semantics, and structure.",
      href: "/services/data-segregation",
      highlights: ["Adaptive clustering", "Multi-modal segmentation", "Automated grouping"]
    },
    {
      icon: BarChart3,
      title: "Data Insights",
      desc: "Intelligence extraction systems that surface patterns, anomalies, and actionable insights from complex datasets.",
      href: "/services/insights",
      highlights: ["Pattern detection", "Anomaly identification", "Predictive analytics"]
    },
    {
      icon: BriefcaseBusiness,
      title: "Consulting",
      desc: "Strategic guidance on data architecture, pipeline design, and system optimization from engineers who build production systems.",
      href: "/services/consulting",
      highlights: ["Architecture review", "Pipeline optimization", "Research partnerships"]
    },
    {
      icon: Database,
      title: "Data Ingestion",
      desc: "Robust, scalable pipelines that move data from any source to your infrastructure with real-time validation and automated recovery.",
      href: "/services/data-ingestion",
      highlights: ["Multi-source integration", "Real-time processing", "Data quality checks"]
    },
    {
      icon: Zap,
      title: "Data Optimization",
      desc: "Transform slow, expensive data systems into fast, cost-effective infrastructure through query tuning and resource optimization.",
      href: "/services/data-optimization",
      highlights: ["Query performance", "Storage optimization", "Cost reduction"]
    },
    {
      icon: Shield,
      title: "AI Safety & Regulation",
      desc: "Navigate AI compliance and build trustworthy systems that meet regulatory standards for fairness, transparency, and safety.",
      href: "/services/ai-safety-regulation",
      highlights: ["Compliance frameworks", "Safety audits", "Ethical AI"]
    }
  ];
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">

      {/* ===========================
          HERO
      ============================ */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
          Systems That Organize, Rank, and Understand Data
        </h1>

        <p className="mt-4 sm:mt-6 text-base sm:text-md text-muted-foreground leading-relaxed max-w-[1050px] text-center">
          Odena builds research-grade pipelines for ranking, segmenting, cleaning, and interpreting multimodal datasets. Everything we make comes from first-principles experiments, competition-level problem solving, and a need to push what&apos;s possible.
        </p>
      </section>

      {/* ===========================
          SERVICES GRID
      ============================ */}
      <section className="py-8 sm:py-10 px-4 sm:px-6 max-w-6xl mx-auto grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, idx) => {
          const Icon = service.icon;
          return (
            <Link 
              key={idx} 
              href={service.href}
              className="group p-8 rounded-[10px] bg-amber-900/4 border border-amber-900/18 hover:border-amber-900/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                </div>
              </div>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.highlights.map((highlight, i) => (
                  <span 
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-primary/5 text-primary font-medium"
                  >
                    {highlight}
                  </span>
                ))}
              </div>

              <div className="mt-4 inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                Learn more →
              </div>
            </Link>
          );
        })}
      </section>

      {/* ===========================
          HOW WE WORK
      ============================ */}
      <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
          Built on Research, Scaled for Production
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-[10px] bg-card/50 border border-border/50">
            <div className="text-3xl font-bold text-primary mb-2">01</div>
            <h3 className="text-lg font-semibold mb-2">First-Principles Design</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We don&apos;t use off-the-shelf solutions. Every system starts with fundamental questions about the problem space.
            </p>
          </div>

          <div className="p-6 rounded-[10px] bg-card/50 border border-border/50">
            <div className="text-3xl font-bold text-primary mb-2">02</div>
            <h3 className="text-lg font-semibold mb-2">Competition-Grade Engineering</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Our systems are built by engineers who compete, iterate fast, and optimize for real-world constraints.
            </p>
          </div>

          <div className="p-6 rounded-[10px] bg-card/50 border border-border/50">
            <div className="text-3xl font-bold text-primary mb-2">03</div>
            <h3 className="text-lg font-semibold mb-2">Production-Ready Delivery</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              From prototype to production, we ensure systems scale, integrate cleanly, and maintain performance.
            </p>
          </div>
        </div>
      </section>

      {/* ===========================
          CTA SECTION
      ============================ */}
      <section className="py-6 text-center px-4 sm:px-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Ready to Solve Hard Data Problems?</h2>
        <p className="mt-2 max-w-xl md:max-w-2xl mx-auto text-muted-foreground leading-relaxed mb-6">
          If you have complex datasets, scaling challenges, or ambitious technical goals, let&apos;s talk.
        </p>
        <CallToAction />
      </section>
    </div>
  );
}
