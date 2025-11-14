import { SlidersHorizontal, Layers, BarChart3, Sparkles } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">

      {/* ===========================
          HERO
      ============================ */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
          Systems That Organize, Rank, and Understand Data
        </h1>

        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto px-4">
          Odena builds research-grade pipelines for ranking, segmenting,
          cleaning, and interpreting multimodal datasets.  
          Everything we make comes from first-principles experiments, competition-level problem solving, 
          and a need to push what’s possible.
        </p>
      </section>

      {/* ===========================
          SERVICES GRID
      ============================ */}
      <section className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 max-w-6xl mx-auto grid gap-6 sm:gap-8 lg:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

        {/* Service 1 */}
        <div className="p-6 rounded-xl bg-card border border-border shadow hover:shadow-lg transition group">
          <SlidersHorizontal className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition" />
          <h3 className="text-xl font-semibold">Data Ranking Pipelines</h3>
          <p className="text-sm mt-2 text-muted-foreground leading-relaxed">
            Zero-shot ranking systems that score any dataset code, media, text 
            based on relevance, quality, anomaly likelihood, or custom criteria.
          </p>
          <Link href="/services/data-ranking" className="text-primary font-medium text-sm mt-4 inline-block hover:underline cursor-pointer">
            Learn more →
          </Link>
        </div>

        {/* Service 2 */}
        <div className="p-6 rounded-xl bg-card border border-border shadow hover:shadow-lg transition group">
          <Layers className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition" />
          <h3 className="text-xl font-semibold">Data Segregation Engines</h3>
          <p className="text-sm mt-2 text-muted-foreground leading-relaxed">
            Segmentation, clustering, and adaptive filtering for large-scale datasets.  
            Built for high-throughput environments and multimodal inputs.
          </p>
          <Link href="/services/data-segregation" className="text-primary font-medium text-sm mt-4 inline-block hover:underline cursor-pointer">
            Learn more →
          </Link>
        </div>

        {/* Service 3 */}
        <div className="p-6 rounded-xl bg-card border border-border shadow hover:shadow-lg transition group">
          <BarChart3 className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition" />
          <h3 className="text-xl font-semibold">Insight & Scoring Systems</h3>
          <p className="text-sm mt-2 text-muted-foreground leading-relaxed">
            Models that generate actionable insights across datasets by combining embeddings,
            routing heuristics, and high-dimensional comparisons.
          </p>
          <Link href="/services/insights" className="text-primary font-medium text-sm mt-4 inline-block hover:underline cursor-pointer">
            Learn more →
          </Link>
        </div>

        {/* Service 4 */}
        <div className="p-6 rounded-xl bg-card border border-border shadow hover:shadow-lg transition group">
          <Sparkles className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition" />
          <h3 className="text-xl font-semibold">Research & Engineering Consulting</h3>
          <p className="text-sm mt-2 text-muted-foreground leading-relaxed">
            We help teams design custom pipelines, operator networks,
            and high-throughput architectures.  
            If your data stack feels too slow or too messy we can fix it.
          </p>
          <Link href="/services/consulting" className="text-primary font-medium text-sm mt-4 inline-block hover:underline cursor-pointer">
            Learn more →
          </Link>
        </div>

      </section>

      {/* ===========================
          CTA (FOMO SECTION)
      ============================ */}
      <section className="py-16 sm:py-20 md:py-24 text-center px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold">Need systems that scale with ambition?</h2>
        <p className="text-muted-foreground max-w-xl mx-auto mt-4 leading-relaxed text-sm sm:text-base px-4">
          We collaborate with teams that want to build beyond templates.
          If you're trying something unconventional or ambitious good.  
          That's where we work best.
        </p>

        <a
          href="mailto:team@odena.ai"
          className="mt-6 sm:mt-8 inline-block px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition cursor-pointer text-sm sm:text-base"
        >
          Start a Conversation
        </a>
      </section>
    </div>
  );
}
