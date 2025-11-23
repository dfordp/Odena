import CallToAction from "@/components/CallToAction";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers at Odena – Join a Research-Driven Engineering Collective",
  description:
    "Odena is a research-first engineering collective building adaptive pipelines, distributed systems, and zero-shot operators. We don't hire for titles. We look for builders who enjoy solving technically ambitious problems.",
  keywords: [
    "Odena careers",
    "Odena hiring",
    "research engineering jobs",
    "distributed systems jobs",
    "data infrastructure roles",
    "machine learning pipelines",
    "compete-based hiring",
    "AI systems engineering",
    "high-throughput systems",
    "research engineer collective",
    "zero-shot models work",
    "technical competitions recruiting"
  ],
  openGraph: {
    title: "Careers at Odena – Build Systems That Shouldn’t Work",
    description:
      "Join Odena and work on adaptive routing meshes, high-throughput data pipelines, zero-shot ranking models, and multimodal operator chains. No titles, no hierarchy, just deep technical work.",
    url: "https://www.odena.io/careers",
    siteName: "Odena",
    images: [
      {
        url: "https://www.odena.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "Odena Careers – Research Engineering Collective",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at Odena – Work on Hard Technical Problems",
    description:
      "Odena recruits builders who love deep engineering challenges: adaptive pipelines, multimodal systems, distributed infra, zero-shot operators, and research-grade data tooling.",
    images: ["https://www.odena.io/og-image.png"],
  },
  alternates: {
    canonical: "https://www.odena.io/careers",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CareerPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* ===========================
          HERO
      ============================ */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-4 text-center px-4 max-w-4xl md:max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-3xl md:text-4xl font-semibold tracking-tight mx-auto">
          Build What Doesn’t Exist Yet
        </h1>
        <p className="mt-4 text-base sm:text-md text-muted-foreground leading-relaxed max-w-3xl md:max-w-5xl mx-auto">
          Odena is a research collective for people who like difficult problems,
          fast iteration, and systems that push capability across domains.
        </p>
      </section>

      {/* ===========================
          WHY ODENA
      ============================ */}
      <section className="py-4 px-4 sm:px-6 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
            className="p-6 rounded-[10px] bg-amber-900/3 border border-amber-900/10"
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
      <section className="py-8 px-4 sm:px-6 text-center max-w-4xl mx-auto">
        <div className="mt-2">
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
      <section className="py-6 text-center px-6">
        <h2 className="text-2xl md:text-3xl font-semibold">If You Want Easy Work, This Isn’t It</h2>
        <p className="text-muted-foreground max-w-xl md:max-w-2xl mx-auto mt-2 leading-relaxed mb-6">
          If you want challenges, trust, and a team that builds out of passion welcome to Odena.
        </p>
        <CallToAction/>
      </section>
    </div>
  );
}
