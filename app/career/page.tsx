import CallToAction from "@/components/CallToAction";
import Link from "next/link";

export default function CareerPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">

      {/* ===========================
          HERO
      ============================ */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
          Build What Doesn’t Exist Yet
        </h1>

        <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Odena is a research collective for people who like difficult problems,
          fast iteration, and systems that push capability across domains.
        </p>
      </section>

      {/* ===========================
          WHY ODENA
      ============================ */}
      <section className="py-10 px-4 sm:px-6 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        
        {[
          {
            title: "Research-first culture",
            desc: "We start from first principles. No playbooks. No copy-paste engineering."
          },
          {
            title: "Real systems, not mockups",
            desc: "From multimodal ranking to large-scale routing you work on problems that matter."
          },
          {
            title: "Competitive mindset",
            desc: "Many of us come from hackathons, contests, or independent research. We like hard problems."
          },
          {
            title: "Ownership over everything",
            desc: "No layers. No micromanagement. You take an idea and push it to completion."
          },
          {
            title: "Builder-to-builder mentorship",
            desc: "Learn from people who’ve actually built systems not just read about them."
          },
          {
            title: "Impact > titles",
            desc: "Your work directly shapes our tooling and research directions. No filler work."
          }
        ].map((card, i) => (
          <div
            key={i}
            className="p-6 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold">{card.title}</h3>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
              {card.desc}
            </p>
          </div>
        ))}

      </section>

      {/* ===========================
          OPEN ROLES (FLEXIBLE)
      ============================ */}
      <section className="py-16 px-4 sm:px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold">We Don’t Hire for Positions</h2>

        <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm sm:text-base">
          We bring in people who are genuinely curious and capable.  
          If you can build, we’ll find the right place for you.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 sm:mt-12 text-left">

          {[
            {
              title: "Systems & Infra",
              desc: "Distributed queues, operators, optimization, high-throughput pipelines."
            },
            {
              title: "ML & Data Pipelines",
              desc: "Embeddings, ranking engines, segmentation, routing, multimodal operators."
            },
            {
              title: "Product Engineering",
              desc: "Interfaces and developer tools that make complex systems usable."
            },
            {
              title: "Independent Researchers",
              desc: "If you're exploring something interesting, we’ll help you push it further."
            }
          ].map((role, i) => (
            <div key={i} className="p-6 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold">{role.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{role.desc}</p>
            </div>
          ))}

        </div>

        <div className="mt-12">
          <a
            href="mailto:dilpreetgrover2@gmail.com"
            className="inline-block px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition"
          >
            Send Your Work
          </a>
          <p className="text-muted-foreground mt-4 text-sm">
            No resume needed. Send GitHub, notes, links, or something you built.
          </p>
        </div>
      </section>

      {/* ===========================
          FINAL CTA
      ============================ */}
      <section className="py-24 text-center px-6">
        <h2 className="text-3xl font-semibold">If You Want Easy Work, This Isn’t It</h2>
        <p className="text-muted-foreground max-w-xl mx-auto mt-4 leading-relaxed">
          If you want challenges, trust, and a team that builds out of passion welcome to Odena.
        </p>
        <CallToAction/>
      </section>
    </div>
  );
}
