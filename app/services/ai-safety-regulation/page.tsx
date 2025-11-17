import Link from "next/link";
import { ArrowLeft, Shield, Scale, FileCheck, CheckCircle, AlertTriangle, BookOpen, Users } from "lucide-react";
import CallToAction from "@/components/CallToAction";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Safety & Regulation Services | Odena",
  description: "Navigate the complex landscape of AI safety, compliance, and regulation. Ensure your AI systems meet ethical standards and regulatory requirements.",
  keywords: ["AI safety", "AI regulation", "AI compliance", "ethical AI", "responsible AI", "AI governance", "GDPR compliance", "AI auditing"],
  openGraph: {
    title: "AI Safety & Regulation Services | Odena",
    description: "Navigate the complex landscape of AI safety, compliance, and regulation. Ensure your AI systems meet ethical standards and regulatory requirements.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Safety & Regulation Services | Odena",
    description: "Navigate the complex landscape of AI safety, compliance, and regulation. Ensure your AI systems meet ethical standards and regulatory requirements.",
  },
};

const capabilities = [
  {
    icon: Shield,
    title: "AI Safety Audits",
    desc: "Comprehensive assessments of AI systems for bias, fairness, robustness, and potential failure modes.",
  },
  {
    icon: Scale,
    title: "Regulatory Compliance",
    desc: "Navigate GDPR, EU AI Act, and emerging regulations with expert guidance and implementation support.",
  },
  {
    icon: FileCheck,
    title: "Documentation & Governance",
    desc: "Create model cards, risk assessments, and governance frameworks that meet regulatory standards.",
  },
];

const complianceFrameworks = [
  {
    framework: "EU AI Act",
    requirements: ["Risk classification", "Conformity assessment", "Technical documentation", "Human oversight"],
    color: "bg-blue-500/10 border-blue-500/30",
  },
  {
    framework: "GDPR",
    requirements: ["Data privacy", "Right to explanation", "Data minimization", "Consent management"],
    color: "bg-purple-500/10 border-purple-500/30",
  },
  {
    framework: "ISO/IEC 42001",
    requirements: ["AI management system", "Risk management", "Transparency", "Accountability"],
    color: "bg-amber-500/10 border-amber-500/30",
  },
  {
    framework: "NIST AI RMF",
    requirements: ["Governance", "Map", "Measure", "Manage"],
    color: "bg-green-500/10 border-green-500/30",
  },
];

const safetyPillars = [
  {
    pillar: "Fairness & Bias",
    desc: "Detect and mitigate bias across protected attributes, ensuring equitable outcomes.",
    checks: ["Demographic parity testing", "Equal opportunity analysis", "Disparate impact assessment"],
  },
  {
    pillar: "Robustness & Security",
    desc: "Ensure AI systems are resilient to adversarial attacks and edge cases.",
    checks: ["Adversarial testing", "Input validation", "Failure mode analysis"],
  },
  {
    pillar: "Transparency & Explainability",
    desc: "Make AI decisions interpretable and auditable for stakeholders and regulators.",
    checks: ["Model interpretability", "Decision logging", "Audit trail generation"],
  },
  {
    pillar: "Privacy & Data Protection",
    desc: "Safeguard sensitive data and comply with privacy regulations throughout the AI lifecycle.",
    checks: ["PII detection", "Differential privacy", "Data anonymization"],
  },
];

const complianceProcess = [
  {
    step: "Risk Assessment",
    desc: "Classify your AI system according to regulatory frameworks and identify compliance requirements.",
  },
  {
    step: "Gap Analysis",
    desc: "Audit existing systems and processes to identify areas where compliance is lacking.",
  },
  {
    step: "Implementation",
    desc: "Deploy technical controls, documentation, and governance processes to achieve compliance.",
  },
  {
    step: "Monitoring & Reporting",
    desc: "Continuous monitoring of AI systems with regular compliance reporting and updates.",
  },
];

const useCases = [
  "Preparing for EU AI Act compliance for high-risk AI systems",
  "Conducting fairness audits for hiring or lending algorithms",
  "Creating model cards and technical documentation for regulatory submissions",
  "Implementing explainability frameworks for financial services AI",
  "Building AI governance structures for enterprise-scale deployments",
  "Conducting privacy impact assessments for AI-powered analytics",
];

const whyItMatters = [
  {
    title: "Regulatory Landscape is Evolving",
    desc: "New AI regulations are emerging globally. Non-compliance risks fines, lawsuits, and reputational damage.",
  },
  {
    title: "Trust is a Competitive Advantage",
    desc: "Demonstrable AI safety and compliance build customer trust and differentiate your products.",
  },
  {
    title: "Ethical AI is Better AI",
    desc: "Safer, fairer AI systems perform better and avoid costly failures and biases.",
  },
];

export default function AISafetyRegulationPage() {
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
          AI Safety & Regulation
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
          Build trustworthy AI systems that meet evolving regulatory standards. 
          Our experts help you navigate compliance requirements while ensuring your AI is fair, transparent, and robust.
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

      {/* COMPLIANCE FRAMEWORKS */}
      <section className="py-12 px-4 sm:px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Compliance Frameworks We Support</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {complianceFrameworks.map((item, idx) => (
            <div key={idx} className={`${item.color} border rounded-[10px] p-6`}>
              <h3 className="font-bold text-lg mb-3">{item.framework}</h3>
              <ul className="space-y-2">
                {item.requirements.map((req, reqIdx) => (
                  <li key={reqIdx} className="flex items-start gap-2 text-sm">
                    <FileCheck className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* AI SAFETY PILLARS */}
      <section className="py-12 px-4 sm:px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Four Pillars of AI Safety</h2>
        <div className="space-y-6">
          {safetyPillars.map((pillar, idx) => (
            <div key={idx} className="bg-card/30 border border-border rounded-[10px] p-6">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">{pillar.pillar}</h3>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{pillar.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {pillar.checks.map((check, checkIdx) => (
                      <div key={checkIdx} className="text-xs bg-primary/5 border border-primary/20 rounded-full px-3 py-1">
                        {check}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COMPLIANCE PROCESS */}
      <section className="py-12 px-4 sm:px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Our Compliance Process</h2>
        <div className="bg-card/30 border border-border rounded-[10px] p-8 sm:p-10">
          <div className="space-y-6">
            {complianceProcess.map((item, idx) => (
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

      {/* VISUAL: COMPLIANCE LIFECYCLE */}
      <section className="py-12 px-4 sm:px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">AI Safety Lifecycle</h2>
        <div className="bg-linear-to-br from-amber-500/5 to-amber-500/10 border border-amber-500/20 rounded-[10px] p-8 sm:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Design Phase</h3>
              <p className="text-xs text-muted-foreground">Risk assessment, data governance, and ethical review</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                <AlertTriangle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Deployment Phase</h3>
              <p className="text-xs text-muted-foreground">Safety testing, bias audits, and compliance checks</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Operations Phase</h3>
              <p className="text-xs text-muted-foreground">Continuous monitoring, incident response, and retraining</p>
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

      {/* WHY IT MATTERS */}
      <section className="py-12 px-4 sm:px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Why AI Safety Matters</h2>
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
      <section className="py-12 px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="bg-linear-to-br from-primary/5 to-primary/10 rounded-[10px] p-8 sm:p-10 border border-primary/20">
          <h2 className="text-2xl font-bold mb-4">Our Commitment to Responsible AI</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We believe AI should be safe, fair, and beneficial for everyone. Our safety and compliance work isn&apos;t just about 
            checking boxes it&apos;s about building AI systems that earn and maintain the trust of users, regulators, and society.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-sm">Deep expertise in both technical AI safety and regulatory compliance</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-sm">Practical, implementation-focused guidance that goes beyond theory</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-sm">Ongoing support as regulations evolve and your AI systems mature</span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-12 px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-3">Build Trustworthy AI Systems</h2>
          <p className="text-muted-foreground">Let&apos;s ensure your AI meets the highest standards of safety, fairness, and regulatory compliance.</p>
        </div>
        <CallToAction />
      </section>
    </main>
  );
}
