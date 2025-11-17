import CallToAction from "@/components/CallToAction";
import { Code, Database, Network, Workflow, Shield, Zap, CheckCircle } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Consulting Services – Strategic Intelligence Architecture | Odena",
  description:
    "Strategic AI consulting that bridges vision and execution. Expert guidance on data pipelines, model deployment, multimodal integration, safety frameworks, and AI architecture.",
  keywords: [
    "AI consulting",
    "AI strategy",
    "AI architecture",
    "machine learning consulting",
    "data pipeline consulting",
    "AI deployment",
    "multimodal AI",
    "AI safety frameworks",
    "AI governance",
    "intelligent systems consulting"
  ],
  openGraph: {
    title: "AI Consulting – Strategic Intelligence Architecture",
    description:
      "Bridge scientific thinking with operational execution. Strategic AI consulting from data pipelines to deployment frameworks and safety standards.",
    url: "https://www.odena.io/services/consulting",
    siteName: "Odena",
    images: [
      {
        url: "https://www.odena.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "Odena AI Consulting Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Consulting – Intelligence Architecture That Works",
    description:
      "Strategic AI consulting that bridges vision and execution. From data pipelines to multimodal integration and safety frameworks.",
    images: ["https://www.odena.io/og-image.png"],
  },
  alternates: {
    canonical: "https://www.odena.io/services/consulting",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ConsultingPage() {
  const expertiseAreas = [
    {
      icon: Database,
      title: "Data Pipeline Architecture",
      desc: "Design and optimize ETL/ELT pipelines, streaming systems, and batch processing workflows for scale and reliability.",
      deliverables: ["Architecture blueprints", "Performance analysis", "Migration roadmaps"]
    },
    {
      icon: Network,
      title: "Distributed Systems",
      desc: "Build fault-tolerant, high-throughput systems that handle millions of events per second across geographic regions.",
      deliverables: ["System design documents", "Scalability assessments", "Deployment strategies"]
    },
    {
      icon: Code,
      title: "Custom Operator Development",
      desc: "Create domain-specific data operators, ranking functions, and transformation logic tailored to your use cases.",
      deliverables: ["Production code", "Testing frameworks", "Documentation"]
    },
    {
      icon: Workflow,
      title: "Workflow Optimization",
      desc: "Identify bottlenecks, eliminate redundancies, and streamline data flows for better performance and lower costs.",
      deliverables: ["Performance reports", "Optimization recommendations", "Implementation support"]
    },
    {
      icon: Shield,
      title: "Data Quality & Governance",
      desc: "Establish validation frameworks, lineage tracking, and governance policies that scale with your organization.",
      deliverables: ["Quality frameworks", "Governance policies", "Monitoring systems"]
    },
    {
      icon: Zap,
      title: "Real-Time Systems",
      desc: "Build streaming pipelines, event-driven architectures, and real-time analytics platforms for immediate insights.",
      deliverables: ["Streaming architectures", "Event processing systems", "Latency optimization"]
    }
  ];

  const engagementModels = [
    {
      title: "Technical Advisory",
      duration: "Ongoing",
      desc: "Regular check-ins with your engineering team to review decisions, solve technical challenges, and provide strategic guidance.",
      ideal: "Teams building complex systems who need expert validation and architectural guidance."
    },
    {
      title: "Architecture Review",
      duration: "2-4 weeks",
      desc: "Deep dive into your existing systems to identify issues, bottlenecks, and improvement opportunities with actionable recommendations.",
      ideal: "Organizations with growing data infrastructure looking to optimize before scaling."
    },
    {
      title: "Custom Development",
      duration: "1-6 months",
      desc: "We build the systems you need from prototypes to production-ready pipelines, ranking engines, or custom operators.",
      ideal: "Teams that need specialized capabilities but lack in-house expertise or bandwidth."
    },
    {
      title: "Research Partnership",
      duration: "3-12 months",
      desc: "Collaborate on novel approaches to hard problems. We experiment, iterate, and build systems that push technical boundaries.",
      ideal: "Organizations tackling unprecedented challenges or exploring cutting-edge data techniques."
    }
  ];

  const whyOdena = [
    {
      title: "We Build What We Recommend",
      desc: "Our consultants are engineers who write production code daily. No theorists just builders who understand real constraints."
    },
    {
      title: "First-Principles Approach",
      desc: "We don't apply templates. Every system is designed from fundamental requirements, not copied patterns."
    },
    {
      title: "Competition-Proven",
      desc: "Our team comes from hackathons, research competitions, and open-source projects. We optimize for results, not process."
    },
    {
      title: "End-to-End Support",
      desc: "From architecture design to implementation to deployment, we stick around until systems work in production."
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
          Strategic AI Consulting That Bridges Vision and Execution
        </h1>
        
        <p className="mt-4 sm:mt-6 text-base sm:text-md text-muted-foreground leading-relaxed max-w-3xl">
          Building intelligent systems is no longer about choosing the right model—it&apos;s about designing the right ecosystem around data, infrastructure, safety, and long-term scalability. Most organizations face strategic uncertainty: they know AI is essential, but they struggle with architecture choices, dataset readiness, workflow integration, governance standards, and aligning teams around a unified direction.
        </p>
        
        <p className="mt-4 text-base sm:text-md text-muted-foreground leading-relaxed max-w-3xl">
          Odena&apos;s Consulting service exists to solve this exact problem. We work alongside companies as strategic partners, guiding them through the complexities of modern AI adoption with the precision of researchers and the practicality of engineers. Our approach begins by understanding your existing systems, your operational reality, and your long-term ambitions. From there, we craft tailored strategies—data pipelines, deployment frameworks, roadmap planning, multimodal integration paths, and safety frameworks—that elevate your capabilities while staying deeply aligned with your business goals.
        </p>
      </section>

      {/* EXPERTISE AREAS */}
      <section className="py-8 px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8">Areas of Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {expertiseAreas.map((area, idx) => {
            const Icon = area.icon;
            return (
              <div key={idx} className="p-6 rounded-[10px] bg-amber-900/4 border border-amber-900/18">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{area.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{area.desc}</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border/50">
                  <div className="text-xs font-medium text-primary mb-2">Deliverables:</div>
                  <div className="flex flex-wrap gap-2">
                    {area.deliverables.map((item, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded bg-primary/5 text-foreground">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ENGAGEMENT MODELS */}
      <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8">How We Work Together</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {engagementModels.map((model, idx) => (
            <div key={idx} className="p-6 rounded-[10px] bg-card/50 border border-border/50">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold">{model.title}</h3>
                <div className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium whitespace-nowrap">
                  {model.duration}
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{model.desc}</p>
              <div className="pt-4 border-t border-border/30">
                <div className="text-xs font-medium mb-1">Ideal for:</div>
                <div className="text-xs text-muted-foreground leading-relaxed">{model.ideal}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TYPICAL ENGAGEMENT FLOW */}
      <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">Typical Engagement Flow</h2>
        
        <div className="bg-card/30 border border-border rounded-[10px] p-8 sm:p-12 max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                1
              </div>
              <div>
                <h3 className="font-semibold mb-1">Discovery Call</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We discuss your challenges, goals, and current infrastructure to determine if we&apos;re a good fit.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                2
              </div>
              <div>
                <h3 className="font-semibold mb-1">Technical Assessment</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We dive deep into your systems, reviewing architecture, code, and documentation to understand the full picture.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                3
              </div>
              <div>
                <h3 className="font-semibold mb-1">Proposal & Roadmap</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We provide a detailed plan with milestones, deliverables, timelines, and cost estimates.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                4
              </div>
              <div>
                <h3 className="font-semibold mb-1">Execution & Iteration</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We work alongside your team, delivering iteratively with regular check-ins and feedback loops.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                5
              </div>
              <div>
                <h3 className="font-semibold mb-1">Handoff & Support</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We ensure your team can maintain and extend the systems we build, with documentation and knowledge transfer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY ODENA */}
      <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8">Why Work With Odena</h2>
        
        <div className="space-y-6 text-muted-foreground leading-relaxed max-w-4xl">
          <p>
            What sets Odena apart is our ability to bridge scientific thinking with operational execution. We don&apos;t offer generic advice or slide decks; we build solutions that work in the real world. Whether you are refining a dataset, scaling a model, deploying an AI agent, designing a new data architecture, or exploring domain-specific intelligence, we provide guidance grounded in rigorous understanding of data systems, multimodal reasoning, and performance engineering.
          </p>
          
          <p>
            Companies that partner with Odena experience clearer decision-making, reduced technical uncertainty, and significantly faster progress toward impactful AI outcomes. Every recommendation we make is designed to minimize risk, maximize insight, and future-proof your organization&apos;s AI capabilities.
          </p>
          
          <p>
            With Odena by your side, you gain a dedicated intelligence partner who understands both the science and the strategy behind modern data-driven transformation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          {whyOdena.map((reason, idx) => (
            <div key={idx} className="p-6 rounded-[10px] bg-card/40 border border-border/50">
              <div className="flex items-start gap-3 mb-2">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{reason.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="py-12 px-4 sm:px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Who We Work With</h2>
        
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            <strong className="text-foreground">Early-stage startups</strong> building their first data infrastructure and need 
            guidance on architecture that scales without over-engineering.
          </p>
          
          <p>
            <strong className="text-foreground">Growth companies</strong> whose existing pipelines are breaking under load 
            and need optimization or redesign to handle the next order of magnitude.
          </p>
          
          <p>
            <strong className="text-foreground">Enterprise teams</strong> tackling novel data challenges that don&apos;t fit 
            standard patterns multimodal analysis, zero-shot systems, or distributed intelligence.
          </p>
          
          <p>
            <strong className="text-foreground">Research organizations</strong> exploring cutting-edge techniques and need 
            partners who can bridge the gap between academic ideas and production systems.
          </p>
        </div>
      </section>

      {/* RECENT ENGAGEMENTS */}
      <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8">Recent Engagements</h2>
        
        <div className="space-y-4">
          <div className="p-6 rounded-[10px] bg-amber-900/4 border border-amber-900/18">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-semibold">High-Throughput Ranking System</h3>
              <div className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">3 months</div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Built a zero-shot ranking engine for a content platform processing 50M+ items daily. 
              Reduced latency from 200ms to &lt;10ms while improving relevance scores.
            </p>
          </div>

          <div className="p-6 rounded-[10px] bg-amber-900/4 border border-amber-900/18">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-semibold">Multi-Source Data Integration</h3>
              <div className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">6 weeks</div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Designed and implemented a pipeline merging data from 12+ disparate sources with automatic 
              schema detection, deduplication, and quality validation.
            </p>
          </div>

          <div className="p-6 rounded-[10px] bg-amber-900/4 border border-amber-900/18">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-semibold">Anomaly Detection Framework</h3>
              <div className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">4 months</div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Developed a real-time anomaly detection system for financial transactions with 95%+ precision 
              and &lt;100ms latency, handling 1M+ events per second.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-6 text-center px-4 sm:px-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Let&apos;s Build Something Ambitious</h2>
        <p className="mt-2 max-w-xl md:max-w-2xl mx-auto text-muted-foreground leading-relaxed mb-6">
          Whether you need strategic guidance, architecture reviews, or hands-on development, 
          we&apos;re here to help you build systems that work.
        </p>
        <CallToAction />
      </section>
    </div>
  );
}
