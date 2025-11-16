import CallToAction from "@/components/CallToAction";
import { ArrowRight, TrendingUp, AlertCircle, Activity, CheckCircle } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Data Insights Services – Intelligence Extraction & Analytics | Odena",
  description:
    "Intelligence extraction systems that surface patterns, anomalies, and actionable insights from complex datasets. Built for predictive analytics and real-time decision making.",
  keywords: [
    "data insights",
    "intelligence extraction",
    "pattern detection",
    "anomaly detection",
    "predictive analytics",
    "data visualization",
    "business intelligence",
    "real-time analytics",
    "actionable insights",
    "data intelligence"
  ],
  openGraph: {
    title: "Data Insights – Extract Intelligence from Complex Datasets",
    description:
      "Odena builds intelligence extraction systems that automatically surface patterns, anomalies, and predictions from your data.",
    url: "https://www.odena.io/services/insights",
    siteName: "Odena",
    images: [
      {
        url: "https://www.odena.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "Odena Data Insights Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Insights – Turn Data into Actionable Intelligence",
    description:
      "Systems that automatically discover patterns, detect anomalies, and generate predictions from complex datasets.",
    images: ["https://www.odena.io/og-image.png"],
  },
  alternates: {
    canonical: "https://www.odena.io/services/insights",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DataInsightsPage() {
  const useCases = [
    {
      title: "Predictive Analytics",
      desc: "Forecast trends, behaviors, and outcomes using historical patterns and real-time signals."
    },
    {
      title: "Anomaly Detection",
      desc: "Identify unusual patterns, security threats, and operational issues before they escalate."
    },
    {
      title: "Customer Intelligence",
      desc: "Understand user behavior, preferences, and churn risk through behavioral analysis."
    },
    {
      title: "Performance Monitoring",
      desc: "Track system health, identify bottlenecks, and optimize resource allocation in real-time."
    },
    {
      title: "Market Analysis",
      desc: "Extract competitive intelligence, trend signals, and opportunity indicators from market data."
    },
    {
      title: "Root Cause Analysis",
      desc: "Trace problems to their sources by analyzing correlations across distributed systems."
    }
  ];

  const capabilities = [
    {
      icon: TrendingUp,
      title: "Pattern Recognition",
      desc: "Discover hidden correlations, trends, and recurring behaviors across temporal and spatial dimensions."
    },
    {
      icon: AlertCircle,
      title: "Anomaly Identification",
      desc: "Real-time detection of outliers, deviations, and suspicious patterns using adaptive thresholds."
    },
    {
      icon: Activity,
      title: "Predictive Modeling",
      desc: "Generate forecasts and probability estimates based on historical data and current context."
    }
  ];

  const insightTypes = [
    {
      category: "Descriptive Insights",
      desc: "What happened?",
      examples: ["Trend summaries", "Distribution analysis", "Statistical profiles"]
    },
    {
      category: "Diagnostic Insights",
      desc: "Why did it happen?",
      examples: ["Correlation analysis", "Root cause tracing", "Factor attribution"]
    },
    {
      category: "Predictive Insights",
      desc: "What will happen?",
      examples: ["Forecasting", "Risk scoring", "Probability estimation"]
    },
    {
      category: "Prescriptive Insights",
      desc: "What should we do?",
      examples: ["Recommendation generation", "Optimization suggestions", "Action planning"]
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
          Transform Data into Actionable Intelligence
        </h1>
        
        <p className="mt-4 sm:mt-6 text-base sm:text-md text-muted-foreground leading-relaxed max-w-3xl">
          Intelligence extraction systems that automatically surface patterns, anomalies, and predictions from complex datasets. 
          Built for real-time decision making, our insights engines combine statistical rigor with semantic understanding.
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

      {/* INSIGHT TYPES */}
      <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8">Four Layers of Intelligence</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {insightTypes.map((type, idx) => (
            <div key={idx} className="p-6 rounded-[10px] bg-card/50 border border-border/50">
              <div className="flex items-baseline gap-3 mb-2">
                <div className="text-2xl font-bold text-primary">{String(idx + 1).padStart(2, '0')}</div>
                <div>
                  <h3 className="text-lg font-semibold">{type.category}</h3>
                  <div className="text-sm text-muted-foreground italic">{type.desc}</div>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {type.examples.map((example, i) => (
                  <span 
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-primary/5 text-primary font-medium"
                  >
                    {example}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INSIGHTS PIPELINE */}
      <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">Intelligence Extraction Pipeline</h2>
        
        <div className="bg-card/30 border border-border rounded-[10px] p-8 sm:p-12">
          <div className="flex flex-col gap-6">
            {/* Data Ingestion */}
            <div className="p-4 rounded-lg bg-amber-900/10 border border-amber-900/20 text-center">
              <div className="font-semibold mb-1">Multi-Source Data Ingestion</div>
              <div className="text-xs text-muted-foreground">Logs • Metrics • Events • User behavior • Business data</div>
            </div>

            <div className="flex justify-center">
              <ArrowRight className="w-6 h-6 text-primary rotate-90" />
            </div>

            {/* Processing Layer */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                <div className="font-semibold mb-2 text-sm text-center">Pattern Analysis</div>
                <div className="text-xs text-muted-foreground text-center">
                  Time-series analysis • Correlation detection • Trend identification
                </div>
              </div>
              
              <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                <div className="font-semibold mb-2 text-sm text-center">Anomaly Detection</div>
                <div className="text-xs text-muted-foreground text-center">
                  Statistical outliers • Behavioral deviations • Threshold monitoring
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <ArrowRight className="w-6 h-6 text-primary rotate-90" />
            </div>

            {/* Intelligence Layer */}
            <div className="p-6 rounded-lg bg-primary/10 border border-primary/30">
              <div className="font-semibold mb-3 text-center">Intelligence Synthesis</div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center text-xs">
                <div className="p-2 bg-background/50 rounded">Context fusion</div>
                <div className="p-2 bg-background/50 rounded">Causal inference</div>
                <div className="p-2 bg-background/50 rounded">Prediction generation</div>
              </div>
            </div>

            <div className="flex justify-center">
              <ArrowRight className="w-6 h-6 text-primary rotate-90" />
            </div>

            {/* Output Layer */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-secondary/10 border border-secondary/30 text-center">
                <div className="font-semibold text-sm mb-1">Insights</div>
                <div className="text-xs text-muted-foreground">Discoveries & patterns</div>
              </div>
              
              <div className="p-4 rounded-lg bg-secondary/10 border border-secondary/30 text-center">
                <div className="font-semibold text-sm mb-1">Alerts</div>
                <div className="text-xs text-muted-foreground">Anomalies & warnings</div>
              </div>
              
              <div className="p-4 rounded-lg bg-secondary/10 border border-secondary/30 text-center">
                <div className="font-semibold text-sm mb-1">Recommendations</div>
                <div className="text-xs text-muted-foreground">Actions & optimizations</div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6 max-w-2xl mx-auto">
          Each layer operates independently, allowing you to plug in custom analysis modules 
          or integrate with existing analytics infrastructure.
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

      {/* TECHNICAL DEPTH */}
      <section className="py-12 px-4 sm:px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">How We Extract Intelligence</h2>
        
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Statistical Foundation</h3>
            <p>
              Our systems use rigorous statistical methods—time-series analysis, regression models, 
              distribution fitting—to establish baselines and identify deviations with confidence intervals.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Semantic Understanding</h3>
            <p>
              Beyond numbers, we analyze meaning. Semantic embeddings help the system understand context, 
              intent, and relationships that pure statistics miss.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Causal Inference</h3>
            <p>
              We don&apos;t just find correlations—we trace causal relationships using graph analysis 
              and counterfactual reasoning to explain why things happen.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Real-Time Adaptation</h3>
            <p>
              Models continuously learn from new data, adjusting thresholds and updating predictions 
              as patterns evolve. No manual retraining required.
            </p>
          </div>
        </div>
      </section>

      {/* INSIGHT DELIVERY */}
      <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8">How Insights Are Delivered</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-[10px] bg-card/50 border border-border/50">
            <h3 className="text-lg font-semibold mb-3">Real-Time Dashboards</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Live visualization of patterns, anomalies, and predictions with drill-down capabilities.
            </p>
            <div className="text-xs text-primary font-medium">Interactive charts • Metric tracking • Alert panels</div>
          </div>

          <div className="p-6 rounded-[10px] bg-card/50 border border-border/50">
            <h3 className="text-lg font-semibold mb-3">API Integration</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Programmatic access to insights, predictions, and anomaly scores for downstream systems.
            </p>
            <div className="text-xs text-primary font-medium">REST APIs • GraphQL • Webhooks</div>
          </div>

          <div className="p-6 rounded-[10px] bg-card/50 border border-border/50">
            <h3 className="text-lg font-semibold mb-3">Automated Reports</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Scheduled summaries with key findings, trend analysis, and actionable recommendations.
            </p>
            <div className="text-xs text-primary font-medium">Daily digests • Weekly trends • Custom schedules</div>
          </div>

          <div className="p-6 rounded-[10px] bg-card/50 border border-border/50">
            <h3 className="text-lg font-semibold mb-3">Alert Systems</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Proactive notifications when critical patterns or anomalies are detected.
            </p>
            <div className="text-xs text-primary font-medium">Slack • Email • PagerDuty • Custom channels</div>
          </div>
        </div>
      </section>

      {/* PERFORMANCE */}
      <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">Built for Real-Time Intelligence</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="text-center p-6 rounded-[10px] bg-amber-900/4 border border-amber-900/18">
            <div className="text-4xl font-bold text-primary mb-2">&lt;100ms</div>
            <div className="text-sm font-medium mb-1">Insight Latency</div>
            <div className="text-xs text-muted-foreground">From data arrival to actionable insight</div>
          </div>
          
          <div className="text-center p-6 rounded-[10px] bg-amber-900/4 border border-amber-900/18">
            <div className="text-4xl font-bold text-primary mb-2">95%+</div>
            <div className="text-sm font-medium mb-1">Anomaly Accuracy</div>
            <div className="text-xs text-muted-foreground">Precision in detecting real issues</div>
          </div>
          
          <div className="text-center p-6 rounded-[10px] bg-amber-900/4 border border-amber-900/18">
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm font-medium mb-1">Continuous Monitoring</div>
            <div className="text-xs text-muted-foreground">Always-on intelligence extraction</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-6 text-center px-4 sm:px-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Ready to Extract Intelligence from Your Data?</h2>
        <p className="mt-2 max-w-xl md:max-w-2xl mx-auto text-muted-foreground leading-relaxed mb-6">
          Whether you need predictive analytics, anomaly detection, or automated insights, our systems deliver intelligence that drives decisions.
        </p>
        <CallToAction />
      </section>
    </div>
  );
}
