import Link from "next/link";
import { ArrowLeft, Brain, Target, Gauge, CheckCircle, TrendingUp, Layers, Shield } from "lucide-react";
import CallToAction from "@/components/CallToAction";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Data Optimization Services | Odena",
  description: "Transform raw datasets into finely tuned learning material for deep learning models and AI agents. Reduce training costs, improve accuracy, and strengthen model robustness.",
  keywords: ["data optimization", "machine learning", "deep learning", "AI training", "model performance", "data quality", "training optimization", "AI agents"],
  openGraph: {
    title: "AI Data Optimization Services | Odena",
    description: "Transform raw datasets into finely tuned learning material for deep learning models and AI agents. Reduce training costs, improve accuracy, and strengthen model robustness.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Data Optimization Services | Odena",
    description: "Transform raw datasets into finely tuned learning material for deep learning models and AI agents. Reduce training costs, improve accuracy, and strengthen model robustness.",
  },
};

const capabilities = [
  {
    icon: Brain,
    title: "Data Quality Analysis",
    desc: "Analyze your data's internal composition, identify redundancies, expose harmful skews, and strengthen weak segments across all modalities.",
  },
  {
    icon: Layers,
    title: "Multimodal Optimization",
    desc: "Refine signal quality across imagery, text, code, time series, telemetry, and more—elevating datasets into structured, balanced learning resources.",
  },
  {
    icon: Shield,
    title: "Robustness Engineering",
    desc: "Strengthen out-of-distribution behavior, reduce hallucinations, and protect models from future brittleness through purposeful data engineering.",
  },
];

const optimizationAreas = [
  {
    area: "Data Composition",
    techniques: ["Redundancy detection", "Skew identification", "Segment strengthening", "Balance optimization"],
    impact: "Fewer epochs needed",
    color: "bg-blue-500/10 border-blue-500/30",
  },
  {
    area: "Signal Quality",
    techniques: ["Noise reduction", "Feature extraction", "Sample prioritization", "Down-weighting strategies"],
    impact: "More stable gradients",
    color: "bg-purple-500/10 border-purple-500/30",
  },
  {
    area: "Learning Efficiency",
    techniques: ["Augmentation guidance", "Curriculum design", "Hard example mining", "Active learning"],
    impact: "Better generalization",
    color: "bg-amber-500/10 border-amber-500/30",
  },
  {
    area: "Safety & Robustness",
    techniques: ["Distribution alignment", "Adversarial hardening", "Bias mitigation", "Edge case coverage"],
    impact: "Stable deployment",
    color: "bg-green-500/10 border-green-500/30",
  },
];

const optimizationProcess = [
  {
    step: "Dataset Analysis",
    desc: "Deep dive into your data's internal structure, identifying imbalances, redundancies, and quality issues across all modalities.",
  },
  {
    step: "Optimization Strategy",
    desc: "Develop a tailored plan for which samples to prioritize, augment, down-weight, or remove based on model learning dynamics.",
  },
  {
    step: "Refinement & Validation",
    desc: "Apply optimizations systematically, validating improvements through controlled experiments and performance benchmarks.",
  },
  {
    step: "Integration & Monitoring",
    desc: "Integrate the optimization layer into your pipelines and continuously monitor model performance across real-world scenarios.",
  },
];

const useCases = [
  "Reducing training epochs by 40-60% while maintaining or improving accuracy",
  "Eliminating data redundancies that cause models to overfit on repeated patterns",
  "Identifying and strengthening underrepresented segments for better generalization",
  "Optimizing multimodal datasets for vision-language models and AI agents",
  "Reducing hallucinations in LLMs through better training data curation",
  "Improving out-of-distribution robustness for production AI systems",
];

const performanceMetrics = [
  { metric: "40-60%", label: "Fewer Training Epochs", desc: "Through data quality refinement" },
  { metric: "3-5x", label: "Faster Convergence", desc: "More stable gradient descent" },
  { metric: "25-40%", label: "Cost Reduction", desc: "Less compute, fewer retries" },
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
          Transform raw datasets into finely tuned learning material that deep learning models and AI agents can understand deeply and generalize from effectively. 
          The most meaningful gains in model performance come not from upgrading architectures or compute, but from optimizing the data itself.
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
        <h2 className="text-2xl font-bold mb-6">Training Impact: Before vs After</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-red-500/5 border border-red-500/20 rounded-[10px] p-6">
            <div className="text-sm font-mono text-red-600 mb-2">Unoptimized Data</div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Training Epochs</span>
                <span className="font-mono text-lg">120</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Validation Accuracy</span>
                <span className="font-mono text-lg">87.2%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">OOD Performance</span>
                <span className="font-mono text-lg">64%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Training Cost</span>
                <span className="font-mono text-lg">$18,400</span>
              </div>
            </div>
          </div>

          <div className="bg-green-500/5 border border-green-500/20 rounded-[10px] p-6">
            <div className="text-sm font-mono text-green-600 mb-2">Optimized Data</div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Training Epochs</span>
                <span className="font-mono text-lg text-green-600">48</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Validation Accuracy</span>
                <span className="font-mono text-lg text-green-600">91.8%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">OOD Performance</span>
                <span className="font-mono text-lg text-green-600">82%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Training Cost</span>
                <span className="font-mono text-lg text-green-600">$7,200</span>
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
          <h2 className="text-2xl font-bold mb-4">The Data-First Approach to AI</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Deep learning models are extremely sensitive to data quality, structure, and balance. Instead of force-feeding models with brute volumes of data, 
            we elevate your dataset into a structured, balanced, and highly informative resource—the difference between training harder and training smarter.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <TrendingUp className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-sm">Dramatic improvements in model learning: fewer epochs, more stable gradients, better interpretability</span>
            </li>
            <li className="flex items-start gap-3">
              <Gauge className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-sm">Discover which data needs augmentation, prioritization, down-weighting, or removal</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-sm">Long-term strategic asset that accelerates experimentation and stabilizes deployment</span>
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
          <h2 className="text-2xl font-bold mb-3">Transform Your Training Data into a Strategic Asset</h2>
          <p className="text-muted-foreground">Let&apos;s analyze your datasets and unlock model performance that many organizations never realize is possible.</p>
        </div>
        <CallToAction />
      </section>
    </main>
  );
}
