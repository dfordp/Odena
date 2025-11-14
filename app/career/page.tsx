import Link from "next/link";

export default function CareerPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">

      {/* ===========================
          HERO SECTION
      ============================ */}
      <section className="pt-28 pb-20 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
          Build What Hasn’t Been Built Yet
        </h1>

        <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Odena is not a traditional company. We are a research collective made up of 
          people who enjoy solving ambitious problems, competing in technical challenges, 
          and building systems that push capability across domains.
        </p>

        <p className="mt-3 text-base text-muted-foreground max-w-xl mx-auto">
          If you want a place where you can experiment, break things, ship fast, and 
          genuinely learn with people who care you might be the right fit.
        </p>
      </section>

      {/* ===========================
          WHY ODENA
      ============================ */}
      <section className="py-12 px-6 max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

        <div className="p-6 rounded-xl bg-card border border-border shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold">Research-first culture</h3>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
            We don’t copy. We don’t follow playbooks.  
            Every project starts from first principles and experimentation.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-card border border-border shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold">Work on real problems</h3>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
            From multi-modal ranking systems to large-scale dataset routing,
            you’ll work on challenges companies don’t even know how to scope yet.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-card border border-border shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold">We compete to grow</h3>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
            Many of us actively participate in national competitions and  
            independent research sprints.  
            If you like doing hard things for fun you’ll fit in.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-card border border-border shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold">Extreme ownership</h3>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
            You own problems end-to-end.  
            No micromanagement. No middle layers.  
            Just builders working with builders.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-card border border-border shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold">Deep mentorship</h3>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
            Everyone here is self-taught, curious, and constantly experimenting.  
            You’ll learn from people who build real systems, not just read about them.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-card border border-border shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold">Impact  titles</h3>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
            Your work directly shapes our research and pipelines.  
            No busywork. No fluff. Only meaningful contributions.
          </p>
        </div>
      </section>

      {/* ===========================
          OPEN ROLES (FLEXIBLE)
      ============================ */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold">We Don’t Hire for Positions</h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto leading-relaxed">
          We bring in people who are genuinely obsessed with solving technical problems.  
          If you’re good, curious, and willing to build we’ll find the right place for you.
        </p>

        {/* Role Categories */}
        <div className="grid gap-6 sm:grid-cols-2 mt-12">

          <div className="p-6 rounded-xl bg-card border border-border shadow hover:shadow-lg transition text-left">
            <h3 className="text-xl font-semibold">Systems & Infra</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Distributed queues, container operators, optimization, high-throughput pipelines.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-card border border-border shadow hover:shadow-lg transition text-left">
            <h3 className="text-xl font-semibold">ML & Data Pipelines</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Embeddings, dataset ranking, segmentation, routing, multi-modal operators.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-card border border-border shadow hover:shadow-lg transition text-left">
            <h3 className="text-xl font-semibold">Product Engineering</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Building real interfaces and tools that make our research usable.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-card border border-border shadow hover:shadow-lg transition text-left">
            <h3 className="text-xl font-semibold">Independent Researchers</h3>
            <p className="text-sm text-muted-foreground mt-2">
              If you have a self-driven project or want to explore a new direction, 
              we’ll support you.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-12">
          <a
            href="mailto:team@odena.ai"
            className="inline-block px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition"
          >
            Send Your Work
          </a>

          <p className="text-muted-foreground mt-4 text-sm">
            No resume needed. Send links, notes, GitHub, or something you built.
          </p>
        </div>
      </section>

      {/* ===========================
          FINAL CTA (FOMO)
      ============================ */}
      <section className="py-24 text-center px-6">
        <h2 className="text-3xl font-semibold">If You Want Easy Work, This Isn’t It</h2>
        <p className="text-muted-foreground max-w-xl mx-auto mt-4 leading-relaxed">
          If you want a place where you’re challenged, trusted, and surrounded by people 
          who build out of passion welcome to Odena.
        </p>

        <a
          href="mailto:team@odena.ai"
          className="mt-8 inline-block px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition"
        >
          Start a Conversation
        </a>
      </section>
    </div>
  );
}
