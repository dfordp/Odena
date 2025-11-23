import CallToAction from "@/components/CallToAction";
import { ArrowRight, TrendingUp, AlertCircle, Activity, CheckCircle } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Data Insights Services – Context-Rich Intelligence & Cross-Domain Reasoning | Odena",
  description:
    "Transform raw information into meaningful, context-rich intelligence. Odena reveals why things happen, not just what happened, uncovering cross-domain connections and strategic insights.",
  keywords: [
    "data insights",
    "connected interpretation",
    "cross-domain reasoning",
    "strategic intelligence",
    "context-rich analytics",
    "data narratives",
    "multidimensional insights",
    "actionable intelligence",
    "data understanding",
    "intelligent analysis"
  ],
  openGraph: {
    title: "Data Insights – From Numbers to Narratives, From Data to Understanding",
    description:
      "Odena transforms data into meaningful intelligence that reveals why things happen, uncovering cross-domain connections traditional systems miss.",
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
    title: "Data Insights – Make Your Data Speak Clearly",
    description:
      "Context-rich intelligence that reveals purpose, not just patterns. Strategic insights with cross-domain reasoning built in.",
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
      title: "Product Team Intelligence",
      desc: "Understand customer intent more deeply through cross-domain behavioral and usage pattern analysis."
    },
    {
      title: "Research Hypothesis Discovery",
      desc: "Uncover new hypothesis pathways by connecting data domains that traditionally operate in isolation."
    },
    {
      title: "AI Data Blind Spots",
      desc: "Identify gaps, biases, and quality issues in training data before they impact model performance."
    },
    {
      title: "Operations Efficiency Detection",
      desc: "Detect inefficiencies early by analyzing how environmental shifts correlate with operational decisions."
    },
    {
      title: "Leadership Clarity",
      desc: "Gain clarity on where outcomes are truly being driven with multidimensional, context-rich insights."
    },
    {
      title: "Strategic Foresight",
      desc: "Operate with foresight rather than hindsight by identifying emerging trends before they become obvious."
    }
  ];

  const capabilities = [
    {
      icon: TrendingUp,
      title: "Cross-Domain Reasoning",
      desc: "Uncover how user behavior impacts system performance, how code changes affect security, how market signals evolve across time."
    },
    {
      icon: AlertCircle,
      title: "Deep Interaction Analysis",
      desc: "Analyze flows, transitions, anomalies, and correlations that traditional systems routinely overlook."
    },
    {
      icon: Activity,
      title: "Strategic Intelligence",
      desc: "Extract signals that illuminate opportunities, risks, and emerging trends long before they become obvious."
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
          From Numbers to Narratives: Intelligence That Explains Why
        </h1>
        
        <p className="mt-4 text-base sm:text-md text-muted-foreground leading-relaxed max-w-[1050px] text-center">
          Most organizations collect enormous data but struggle to translate it into genuine understanding. Dashboards provide 
          numbers, not narratives; charts show patterns, but not purpose. Odena&apos;s Data Insights service turns raw information into 
          meaningful, context-rich intelligence that reveals why things happen, not just what happened.
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

      {/* THE FUNDAMENTAL CHALLENGE */}
      <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">The Challenge: Isolated Metrics Without Meaning</h2>
        
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            The industry&apos;s biggest challenge is not lack of data. It&apos;s the lack of connected interpretation. Teams are 
            often left guessing which patterns matter or how to act on them. Traditional analytics provide isolated metrics, 
            but miss the deeper interactions between data domains that drive real outcomes.
          </p>
          
          <p>
            When companies integrate Odena&apos;s Data Insights into their projects, they finally gain the ability to see beyond 
            isolated metrics. Insights become alive, multidimensional, and strategically actionable. Every insight showcases 
            not just information, but the cross-domain reasoning behind it.
          </p>
          
          <p>
            This empowers organizations to make decisions with confidence, operate with foresight rather than hindsight, 
            and build systems that evolve intelligently over time. With Odena, insights become a strategic weapon. Your data 
            stops whispering and starts speaking clearly.
          </p>
        </div>
      </section>

      {/* INSIGHTS PIPELINE */}
      <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">Connected Intelligence Pipeline</h2>
        
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
          Our pipeline doesn&apos;t just analyze data. It connects domains, uncovers relationships, and synthesizes 
          intelligence that reveals the deeper story behind your metrics.
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

      {/* CROSS-DOMAIN CONNECTIONS */}
      <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">What We Uncover</h2>
        
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Behavioral-System Interactions</h3>
            <p>
              How user behavior patterns impact system performance, resource utilization, and operational stability, revealing 
              optimization opportunities that single-domain analysis misses.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Code-Security Correlations</h3>
            <p>
              How code changes, deployment patterns, and development practices affect security posture and vulnerability 
              exposure across your entire technology stack.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Environmental-Operational Dependencies</h3>
            <p>
              How environmental shifts, market conditions, and external signals correlate with operational decisions and 
              business outcomes over time.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Temporal Evolution Patterns</h3>
            <p>
              How market signals, customer preferences, and competitive dynamics evolve across time, identifying inflection 
              points before they become widely recognized.
            </p>
          </div>
        </div>
      </section>

      {/* INSIGHT DELIVERY */}
      <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8">Multidimensional Intelligence Delivery</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-[10px] bg-card/50 border border-border/50">
            <h3 className="text-lg font-semibold mb-3">Context-Rich Narratives</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Insights that explain not just what happened, but why it happened and what it means for your strategy.
            </p>
            <div className="text-xs text-primary font-medium">Causal explanations • Impact analysis • Strategic implications</div>
          </div>

          <div className="p-6 rounded-[10px] bg-card/50 border border-border/50">
            <h3 className="text-lg font-semibold mb-3">Cross-Domain Visualizations</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Interactive displays that show how different data domains influence each other over time.
            </p>
            <div className="text-xs text-primary font-medium">Relationship maps • Flow analysis • Interaction timelines</div>
          </div>

          <div className="p-6 rounded-[10px] bg-card/50 border border-border/50">
            <h3 className="text-lg font-semibold mb-3">Actionable Recommendations</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Strategic guidance based on cross-domain reasoning and forward-looking pattern analysis.
            </p>
            <div className="text-xs text-primary font-medium">Decision support • Optimization paths • Risk mitigation</div>
          </div>

          <div className="p-6 rounded-[10px] bg-card/50 border border-border/50">
            <h3 className="text-lg font-semibold mb-3">Emerging Trend Alerts</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Early warnings about patterns forming across domains before they become obvious to competitors.
            </p>
            <div className="text-xs text-primary font-medium">Opportunity signals • Risk indicators • Market shifts</div>
          </div>
        </div>
      </section>

      {/* STRATEGIC IMPACT */}
      <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">Insights as a Strategic Weapon</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="text-center p-6 rounded-[10px] bg-amber-900/4 border border-amber-900/18">
            <div className="text-4xl font-bold text-primary mb-2">Connected</div>
            <div className="text-sm font-medium mb-1">Cross-Domain Intelligence</div>
            <div className="text-xs text-muted-foreground">See beyond isolated metrics to true drivers</div>
          </div>
          
          <div className="text-center p-6 rounded-[10px] bg-amber-900/4 border border-amber-900/18">
            <div className="text-4xl font-bold text-primary mb-2">Confident</div>
            <div className="text-sm font-medium mb-1">Decision Making</div>
            <div className="text-xs text-muted-foreground">Strategic clarity backed by reasoning</div>
          </div>
          
          <div className="text-center p-6 rounded-[10px] bg-amber-900/4 border border-amber-900/18">
            <div className="text-4xl font-bold text-primary mb-2">Foresight</div>
            <div className="text-sm font-medium mb-1">Not Hindsight</div>
            <div className="text-xs text-muted-foreground">Spot trends before competitors do</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-6 text-center px-4 sm:px-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Ready to Make Your Data Speak Clearly?</h2>
        <p className="mt-2 max-w-xl md:max-w-2xl mx-auto text-muted-foreground leading-relaxed mb-6">
          Transform raw information into context-rich intelligence that reveals purpose, connections, and strategic opportunities. 
          Stop guessing. Start understanding.
        </p>
        <CallToAction />
      </section>
    </div>
  );
}
