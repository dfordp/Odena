"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground font-sans">

      {/* =========================
          HERO SECTION
      ========================== */}
      <section className="pt-32 pb-24 px-6 flex flex-col items-center text-center">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight max-w-4xl leading-tight">
          Data that understands iteself
        </h1>

        <p className="mt-6 text-lg max-w-2xl text-muted-foreground leading-relaxed">
          We engineer adaptive operators, high-throughput pipelines, and 
          self-organizing data systems that generalize across codebases, media, 
          telemetry, and complex enterprise datasets.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <Link
            href="/projects"
            className="h-12 px-8 flex items-center justify-center rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition"
          >
            View Our Systems
          </Link>
          <a
            href="mailto:team@odena.ai"
            className="h-12 px-8 flex items-center justify-center rounded-full border border-border hover:bg-muted transition"
          >
            Partner With Us
          </a>
        </div>
      </section>

      {/* =========================
          WHO WE ARE
      ========================== */}
      <section className="py-24 px-6 flex flex-col items-center text-center bg-card/40 rounded-xl">
        <h2 className="text-3xl font-semibold">Who We Are</h2>
        
        <p className="mt-6 text-muted-foreground max-w-3xl leading-relaxed text-lg">
          Odena is a competitive research collective that iterates like tournament 
          engineers fast cycles, prototype-first thinking, and a habit of 
          outperforming traditional solutions through experimentation.  
          We treat datasets like evolving systems and build technology that adapts 
          faster than industry norms.
        </p>

        <Link
          href="/about"
          className="mt-8 px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-medium hover:opacity-90 transition"
        >
          Learn More About Us
        </Link>
      </section>

      {/* =========================
          WHAT WE ARE TARGETING
      ========================== */}
      <section className="py-24 px-6 flex flex-col items-center">
        <h2 className="text-3xl font-semibold">What We Are Targeting</h2>

        <p className="mt-6 max-w-3xl text-center text-muted-foreground leading-relaxed text-lg">
          Our research focuses on building general-purpose data operators that 
          outperform hand-tuned pipelines.  
          The goal is simple: enable teams to process, cluster, rank, and interpret 
          any dataset without requiring retraining or domain-specific heuristics.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 w-full max-w-6xl">
          {[
            { title: "Zero-Shot Ranking Models", desc: "Operators that adapt to unseen datasets without fine-tuning." },
            { title: "Network-Style Pipelines", desc: "Systems that reconfigure dynamically based on the data graph." },
            { title: "High-Throughput Distributed Systems", desc: "Pipelines that scale to millions of events per second." },
            { title: "Cross-Domain Generalization", desc: "Systems usable for code, media, telemetry, tabular data." },
            { title: "Self-Organizing Data Layers", desc: "Embedding and clustering layers that evolve with data." },
            { title: "Enterprise Data Tooling", desc: "APIs and job runners for integration into production stacks." },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition group"
            >
              <h3 className="text-lg font-medium mb-2 group-hover:text-primary transition">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================
          DOMAIN MAP / NETWORK PROGRESS
      ========================== */}
      <section className="py-24 px-6 flex flex-col items-center">
        <h2 className="text-3xl font-semibold text-center">Domains We’ve Already Captured</h2>

        <p className="mt-4 text-muted-foreground text-center max-w-2xl">
          We build operators that generalize. This network map shows what domains 
          we&apos;ve already built for and what’s coming next.
        </p>

        {/* Placeholder for your network graph UI */}
        <div className="mt-12 w-full max-w-4xl p-6 rounded-xl bg-card border border-border shadow-sm text-center">
          <p className="text-sm text-muted-foreground">
            (Interactive domain network map will go here)
          </p>
        </div>
      </section>

      {/* =========================
          OUR PROJECTS
      ========================== */}
      <section className="py-24 px-6 flex flex-col items-center">
        <h2 className="text-3xl font-semibold">Our Projects</h2>

        <p className="mt-4 text-muted-foreground text-center max-w-2xl">
          Research prototypes, internal tools, competitions, and production-ready systems.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 w-full max-w-6xl">
          <div className="p-6 bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="font-medium text-primary mb-2">Odena ZeroShot Engine</h3>
            <p className="text-sm text-muted-foreground">
              A containerized zero-shot ranking system used on multimodal datasets.
            </p>
          </div>

          <div className="p-6 bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="font-medium text-primary mb-2">Distributed Operator Graph</h3>
            <p className="text-sm text-muted-foreground">
              A dynamic routing network for high-volume data transformation.
            </p>
          </div>

          <div className="p-6 bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="font-medium text-primary mb-2">Codebase Insight Engine</h3>
            <p className="text-sm text-muted-foreground">
              Zero-shot dependency mapping + ranking for large engineering orgs.
            </p>
          </div>
        </div>

        <Link
          href="/projects"
          className="mt-8 px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-medium hover:opacity-90 transition"
        >
          Explore All Projects
        </Link>
      </section>

      {/* =========================
          WHAT WE CAN DO (SERVICES)
      ========================== */}
      <section className="py-24 px-6 flex flex-col items-center bg-card/40 rounded-xl">
        <h2 className="text-3xl font-semibold">What We Can Do</h2>

        <p className="mt-6 text-muted-foreground max-w-2xl text-center leading-relaxed">
          We partner with teams to deploy high-leverage systems tailored to their 
          data, infrastructure, and speed requirements.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl w-full">
          <div className="p-6 bg-card border border-border rounded-xl shadow-sm">
            <h3 className="font-medium mb-2">Custom Data Pipelines</h3>
            <p className="text-sm text-muted-foreground">
              Fully optimized ingestion, ranking, and clustering systems.
            </p>
          </div>

          <div className="p-6 bg-card border border-border rounded-xl shadow-sm">
            <h3 className="font-medium mb-2">Embedding & Retrieval Systems</h3>
            <p className="text-sm text-muted-foreground">
              Cross-domain embedding models & vector-based ranking engines.
            </p>
          </div>

          <div className="p-6 bg-card border border-border rounded-xl shadow-sm">
            <h3 className="font-medium mb-2">Distributed Infrastructure</h3>
            <p className="text-sm text-muted-foreground">
              Scalable event processing using queues and multi-node compute.
            </p>
          </div>
        </div>

        <Link
          href="/services"
          className="mt-8 px-6 py-3 rounded-full border border-border hover:bg-muted transition"
        >
          View All Services
        </Link>
      </section>

      {/* =========================
          CONNECT WITH US
      ========================== */}
      <section className="py-24 px-6 flex flex-col items-center text-center">
        <h2 className="text-3xl font-semibold">Connect With Us</h2>

        <p className="mt-4 text-muted-foreground max-w-xl leading-relaxed">
          Whether you&apos;re exploring research collaboration, need custom data 
          infrastructure, or want to join our experiments we’re open to talking.
        </p>

        <a
          href="mailto:team@odena.ai"
          className="mt-8 px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition"
        >
          Reach Out
        </a>
      </section>

    </div>
  );
}
