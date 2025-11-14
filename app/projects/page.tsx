import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground font-sans">

      {/* =========================
          HERO
      ========================== */}
      <section className="pt-32 pb-16 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight max-w-4xl mx-auto">
          Experiments, Systems, and Research We’re Proud Of
        </h1>

        <p className="mt-6 text-lg max-w-2xl mx-auto text-muted-foreground leading-relaxed">
          Every project here started as someone’s late-night idea, competition
          prototype, or research obsession.  
          We build fast, ship early, and treat each system as a stepping stone
          toward our larger vision of intelligent data pipelines.
        </p>
      </section>

      {/* =========================
          PROJECTS GRID
      ========================== */}
      <section className="py-12 px-6 max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

        {/* PROJECT 1 */}
        <div className="group p-6 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition">
          <div className="relative w-full h-40 rounded-lg overflow-hidden">
            <Image
              src="/project-embeddings.png"
              alt="Embedding Pipeline"
              fill
              className="object-cover group-hover:scale-105 transition"
            />
          </div>
          <h3 className="text-xl font-semibold mt-5">Adaptive Zero-Shot Data Ranking</h3>
          <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
            A containerized zero-shot operator that automatically ranks,
            segments, and labels arbitrary datasets code, media, or text —
            with no fine-tuning.  
            Designed for high throughput pipelines and multimodal workflows.
          </p>

          <Link
            href="https://github.com/odena-ai"
            className="inline-block mt-4 text-primary font-medium hover:underline"
          >
            View repository →
          </Link>
        </div>

        {/* PROJECT 2 */}
        <div className="group p-6 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition">
          <div className="relative w-full h-40 rounded-lg overflow-hidden">
            <Image
              src="/project-ops.png"
              alt="Distributed Queue System"
              fill
              className="object-cover group-hover:scale-105 transition"
            />
          </div>
          <h3 className="text-xl font-semibold mt-5">High-Throughput Dataflow Mesh</h3>
          <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
            A distributed queue and routing system built for millions of
            events per second.  
            Built to test how far we can push low-cost infra for
            real-time multimodal pipelines.
          </p>

          <Link
            href="https://github.com/odena-ai"
            className="inline-block mt-4 text-primary font-medium hover:underline"
          >
            Learn more →
          </Link>
        </div>

        {/* PROJECT 3 */}
        <div className="group p-6 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition">
          <div className="relative w-full h-40 rounded-lg overflow-hidden">
            <Image
              src="/project-clean.png"
              alt="Data Cleaning Engine"
              fill
              className="object-cover group-hover:scale-105 transition"
            />
          </div>
          <h3 className="text-xl font-semibold mt-5">Multimodal Data Cleaning Engine</h3>
          <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
            A unified engine that detects duplicates, anomalies,
            contradictions, hallucination-prone segments, and bad samples
            across any dataset images, text, or structured data.
          </p>

          <Link
            href="https://github.com/odena-ai"
            className="inline-block mt-4 text-primary font-medium hover:underline cursor-pointer"
          >
            View details →
          </Link>
        </div>

        {/* PROJECT 4 */}
        <div className="group p-6 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition">
          <div className="relative w-full h-40 rounded-lg overflow-hidden">
            <Image
              src="/project-network.png"
              alt="Operator Network"
              fill
              className="object-cover group-hover:scale-105 transition"
            />
          </div>
          <h3 className="text-xl font-semibold mt-5">Operator Network Simulator</h3>
          <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
            A visual sandbox for modeling operator graphs,
            dataflow behaviors, and multimodal inference routes.  
            Useful for understanding bottlenecks and designing 
            intelligent routing strategies.
          </p>

          <Link
            href="https://github.com/odena-ai"
            className="inline-block mt-4 text-primary font-medium hover:underline cursor-pointer"
          >
            Explore →
          </Link>
        </div>

        {/* PROJECT 5 */}
        <div className="group p-6 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition">
          <div className="relative w-full h-40 rounded-lg overflow-hidden">
            <Image
              src="/project-competition.png"
              alt="Competition Projects"
              fill
              className="object-cover group-hover:scale-105 transition"
            />
          </div>
          <h3 className="text-xl font-semibold mt-5">Competition-Grade Systems</h3>
          <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
            A collection of national-level competition projects that evolved into
            real systems ranking models, inference pipelines, optimization
            engines, and constraint-based solvers.
          </p>

          <Link
            href="https://github.com/odena-ai"
            className="inline-block mt-4 text-primary font-medium hover:underline cursor-pointer"
          >
            Browse projects →
          </Link>
        </div>

        {/* PROJECT 6 */}
        <div className="group p-6 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition">
          <div className="relative w-full h-40 rounded-lg overflow-hidden">
            <Image
              src="/project-research.png"
              alt="Research Notebook"
              fill
              className="object-cover group-hover:scale-105 transition"
            />
          </div>
          <h3 className="text-xl font-semibold mt-5">Research Notebooks & Operator Tests</h3>
          <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
            Research logs, ablation tests, operator comparisons, and
            weird experiments that turned into unexpectedly useful insights.
          </p>

          <Link
            href="https://github.com/odena-ai"
            className="inline-block mt-4 text-primary font-medium hover:underline cursor-pointer"
          >
            Read notebooks →
          </Link>
        </div>
      </section>

      {/* =========================
          CTA
      ========================== */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl font-semibold">Want to Collaborate?</h2>
        <p className="mt-4 max-w-xl mx-auto text-muted-foreground leading-relaxed">
          If you have datasets, scaling problems, or research ideas that feel
          too ambitious for a normal team we want to hear about it.
        </p>

        <a
          href="mailto:team@odena.ai"
          className="mt-8 px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition inline-block cursor-pointer"
        >
          Reach Out
        </a>
      </section>

    </div>
  );
}
