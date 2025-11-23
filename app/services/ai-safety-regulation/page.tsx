import Link from "next/link";
import { Shield, Scale, FileCheck, CheckCircle, AlertTriangle, BookOpen, Users } from "lucide-react";
import CallToAction from "@/components/CallToAction";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Safety & Regulation Services | Odena",
  description: "Ensure AI systems behave reliably with continuous behavioral monitoring, model alignment tracking, and proactive risk detection. Operate AI responsibly at scale.",
  keywords: ["AI safety", "model alignment", "behavioral monitoring", "AI oversight", "model drift detection", "responsible AI", "AI compliance", "decision pathway analysis"],
  openGraph: {
    title: "AI Safety & Regulation Services | Odena",
    description: "Ensure AI systems behave reliably with continuous behavioral monitoring, model alignment tracking, and proactive risk detection. Operate AI responsibly at scale.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Safety & Regulation Services | Odena",
    description: "Ensure AI systems behave reliably with continuous behavioral monitoring, model alignment tracking, and proactive risk detection. Operate AI responsibly at scale.",
  },
};

const capabilities = [
  {
    icon: Shield,
    title: "Behavioral Monitoring",
    desc: "Analyze behavioral patterns, monitor subtle shifts in model intent, and detect misuse signals before they become issues.",
  },
  {
    icon: Scale,
    title: "Alignment Intelligence",
    desc: "Understand whether your AI is aligned with your policies, domain constraints, and users' trust through continuous evaluation.",
  },
  {
    icon: FileCheck,
    title: "Regulatory Readiness",
    desc: "Prepare for regulatory changes and document model behavior in ways auditors can understand and verify.",
  },
];

const oversightCapabilities = [
  {
    capability: "Decision Pathway Analysis",
    features: ["Trace decision logic", "Identify failure pathways", "Map model reasoning", "Detect intent drift"],
    color: "bg-blue-500/10 border-blue-500/30",
  },
  {
    capability: "Continuous Monitoring",
    features: ["Real-time behavior tracking", "Drift detection", "Performance consistency", "Misuse signal identification"],
    color: "bg-purple-500/10 border-purple-500/30",
  },
  {
    capability: "Structured Evaluation",
    features: ["Policy alignment testing", "Domain constraint validation", "Trust metric tracking", "Context-aware assessment"],
    color: "bg-amber-500/10 border-amber-500/30",
  },
  {
    capability: "Operational Intelligence",
    features: ["Risk visibility", "Compliance tracking", "Audit documentation", "Evolution monitoring"],
    color: "bg-green-500/10 border-green-500/30",
  },
];

const safetyLayers = [
  {
    layer: "Behavioral Analysis",
    desc: "Understand how your models make decisions and identify patterns that could lead to failures.",
    capabilities: ["Intent tracking", "Decision pattern analysis", "Failure prediction"],
  },
  {
    layer: "Drift Detection",
    desc: "Monitor subtle shifts in model behavior over time and catch misalignment before deployment.",
    capabilities: ["Temporal consistency checks", "Output distribution monitoring", "Performance degradation alerts"],
  },
  {
    layer: "Alignment Verification",
    desc: "Ensure AI remains consistent with your policies, domain constraints, and ethical standards.",
    capabilities: ["Policy compliance testing", "Domain constraint validation", "Trust metric evaluation"],
  },
  {
    layer: "Visibility & Documentation",
    desc: "Maintain comprehensive visibility into model evolution with auditor-friendly documentation.",
    capabilities: ["Behavior logging", "Change tracking", "Regulatory reporting"],
  },
];

const safetyIntegration = [
  {
    step: "Baseline Behavior Profiling",
    desc: "Establish behavioral baselines and identify existing decision pathways, risks, and alignment gaps.",
  },
  {
    step: "Safety Layer Integration",
    desc: "Deploy our monitoring and evaluation infrastructure seamlessly into your existing systems.",
  },
  {
    step: "Continuous Intelligence",
    desc: "Real-time tracking of model behavior, intent shifts, and emerging risk patterns across deployments.",
  },
  {
    step: "Adaptive Response",
    desc: "Proactive alerts, documentation updates, and guidance as your AI evolves and regulations change.",
  },
];

const useCases = [
  "Monitoring AI agents for behavioral consistency and policy alignment",
  "Detecting model drift in production multimodal systems before failures occur",
  "Tracking decision pathways in enterprise AI to identify hidden risk patterns",
  "Maintaining visibility into how user-facing assistants evolve over time",
  "Preparing audit-ready documentation for regulatory reviews and assessments",
  "Ensuring deployed AI remains aligned with domain constraints and user trust",
];

const whyItMatters = [
  {
    title: "Visibility Into Model Behavior",
    desc: "Most companies lack insight into how their models make decisions or how they drift over time. We provide the intelligence layer that makes AI observable and predictable.",
  },
  {
    title: "Proactive Risk Detection",
    desc: "Identify decision pathways that could lead to failures long before they become issues. Our safety work catches problems in the design, not in production.",
  },
  {
    title: "Confidence to Innovate",
    desc: "When you understand your AI's behavior and have systems to track its evolution, your teams can innovate without fear of unexpected failures or compliance violations.",
  },
];

export default function AISafetyRegulationPage() {
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
          AI Safety & Regulation
        </h1>
        <p className="mt-4 text-base sm:text-md text-muted-foreground leading-relaxed max-w-[1050px] text-center">
          Ensure your AI systems behave reliably in real-world environments while meeting rising regulatory and ethical expectations. 
          Most companies lack visibility into how models make decisions or where hidden risks emerge. We provide the oversight and intelligence to operate AI responsibly at scale.
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

      {/* OVERSIGHT CAPABILITIES */}
      <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Comprehensive Oversight Capabilities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {oversightCapabilities.map((item, idx) => (
            <div key={idx} className={`${item.color} border rounded-[10px] p-6`}>
              <h3 className="font-bold text-lg mb-3">{item.capability}</h3>
              <ul className="space-y-2">
                {item.features.map((feature, featureIdx) => (
                  <li key={featureIdx} className="flex items-start gap-2 text-sm">
                    <FileCheck className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* SAFETY LAYERS */}
      <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Integrated Safety Layers</h2>
        <div className="space-y-6">
          {safetyLayers.map((layer, idx) => (
            <div key={idx} className="bg-card/30 border border-border rounded-[10px] p-6">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">{layer.layer}</h3>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{layer.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {layer.capabilities.map((capability, capIdx) => (
                      <div key={capIdx} className="text-xs bg-primary/5 border border-primary/20 rounded-full px-3 py-1">
                        {capability}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SAFETY INTEGRATION */}
      <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Seamless Safety Integration</h2>
        <div className="bg-card/30 border border-border rounded-[10px] p-8 sm:p-10">
          <div className="space-y-6">
            {safetyIntegration.map((item, idx) => (
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

      {/* VISUAL: SAFETY APPROACH */}
      <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Beyond Basic Guardrails</h2>
        <div className="bg-linear-to-br from-amber-500/5 to-amber-500/10 border border-amber-500/20 rounded-[10px] p-8 sm:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Structured Evaluation</h3>
              <p className="text-xs text-muted-foreground">Systematic assessment of model behavior and alignment</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                <AlertTriangle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Continuous Monitoring</h3>
              <p className="text-xs text-muted-foreground">Real-time tracking of behavioral shifts and intent changes</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Contextual Understanding</h3>
              <p className="text-xs text-muted-foreground">Policy-aware intelligence that adapts to your domain</p>
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

      {/* WHY IT MATTERS */}
      <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">The Challenge of Modern AI</h2>
        <div className="grid grid-cols-1 gap-6">
          {whyItMatters.map((reason, idx) => (
            <div key={idx} className="p-6 rounded-[10px] bg-card/40 border border-border/50">
              <div className="flex items-start gap-3 mb-2">
                <Shield className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{reason.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COMMITMENT SECTION */}
      <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="bg-linear-to-br from-primary/5 to-primary/10 rounded-[10px] p-8 sm:p-10 border border-primary/20">
          <h2 className="text-2xl font-bold mb-4">Invisible Yet Indispensable</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Our safety work is designed to be a layer of intelligence that strengthens reliability without slowing down innovation. 
            Whether you&apos;re deploying agents, multimodal models, or enterprise systems, Odena ensures your AI remains consistent, compliant, and grounded.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-sm">Seamlessly integrates with existing systems, no major architectural changes required</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-sm">Maintains visibility as your AI evolves, providing audit trails auditors can understand</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-sm">Reduces operational risk while giving teams confidence to push boundaries safely</span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-6 text-center px-4 sm:px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-3">Make Your AI Predictable, Reliable, and Aligned</h2>
          <p className="text-muted-foreground">Let&apos;s build the safety and oversight layer your AI systems need to operate responsibly at scale.</p>
        </div>
        <CallToAction />
      </section>
    </main>
  );
}
