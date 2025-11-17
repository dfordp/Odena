import CallToAction from "@/components/CallToAction";
import { members } from "@/data/members";
import { Metadata } from "next";
import Image from "next/image";
import { FaCode, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "About Odena – Research Collective Building Adaptive Data Systems",
  description:
    "Odena is a research-driven engineering collective focused on building adaptive pipelines, zero-shot operators, and intelligent data systems. Learn about the people behind Odena and how we prototype, iterate, and scale through first principles.",
  keywords: [
    "Odena team",
    "Odena research collective",
    "Odena founders",
    "data engineering research",
    "zero-shot operators",
    "adaptive pipelines",
    "high-throughput systems",
    "data infrastructure engineers",
    "research engineering",
    "AI engineering collective",
    "distributed systems engineering",
  ],
  openGraph: {
    title: "About Odena – The People Behind the Systems",
    description:
      "Meet the contributors, engineers, and researchers behind Odena. We build adaptive data pipelines, routing meshes, and zero-shot ranking models driven by curiosity and first-principles experimentation.",
    url: "https://www.odena.io/about",
    siteName: "Odena",
    images: [
      {
        url: "https://www.odena.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "Odena Research Collective",
      },
    ],
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Odena – Built by Engineers Who Love Hard Problems",
    description:
      "Odena is a competitive research collective creating adaptive pipelines, zero-shot operators, and intelligent infrastructure. Learn about our contributors.",
    images: ["https://www.odena.io/og-image.png"],
  },
  alternates: {
    canonical: "https://www.odena.io/about",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function About() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground font-sans">

      {/* =========================
          HERO
      ========================== */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 text-center px-4">
        <h1 className="text-3xl sm:text-3xl md:text-4xl font-semibold tracking-tight max-w-6xl mx-auto">
          A Collective of People Who Build Out of Curiosity, Not Obligation
        </h1>
      </section>

      {/* =========================
          ETHOS
      ========================== */}
      <section className="py-4 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-2xl font-semibold mb-2">How We Work</h2>

        <p className="text-muted-foreground leading-relaxed text-base sm:text-md">
          People join Odena through competitions, personal research, open-source work,
          or late-night experiments that spiraled into real systems.  
          There&apos;s no hierarchy just people who can&apos;t resist a difficult problem. We debate, iterate, and build through first principles.  
          If something shouldn&apos;t work, we try it anyway.  
          If it works, we scale it.
        </p>
      </section>

      {/* =========================
          CONTRIBUTORS
      ========================== */}
      <section className="py-14 px-4 bg-card/50 rounded-xl mx-4 sm:mx-8 lg:mx-auto max-w-4xl md:max-w-6xl">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6">
          People Behind Odena
        </h2>

        <p className="text-center text-muted-foreground max-w-4xl mx-auto mb-6 leading-relaxed text-sm sm:text-base">
          No titles. No formal org chart.  
          Just contributors, engineers, and researchers who treat building like a sport.
        </p>
        <div className="flex justify-center gap-4 mb-12">
          <a href="https://x.com/Odenadotio" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition">
            <FaXTwitter/>
          </a>
          <a href="https://www.linkedin.com/company/odena" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition">
            <FaLinkedinIn/>
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {members.map((person, i) => (
            <div
              key={i}
              className="p-6 rounded-[10px] bg-amber-900/3 border border-amber-900/10 text-center"
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
              <Image
                src={person.img}
                alt={person.name}
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
              </div>
              <h3 className="text-lg font-medium">{person.name}</h3>
              <p className="text-primary text-sm">{person.role}</p>
                <div className="flex justify-center gap-3 mt-4">
                {person.portfolio && (
                  <a href={person.portfolio} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition text-xs font-medium">
                  <FaCode className="w-4 h-4"/>
                  </a>
                )}
                {person.twitter && (
                  <a href={person.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition">
                  <FaXTwitter className="w-4 h-4" />
                  </a>
                )}
                {person.linkedin && (
                  <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition">
                  <FaLinkedinIn className="w-4 h-4" />
                  </a>
                )}
                </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================
          WHY WE EXIST
      ========================== */}
      <section className="py-8 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-2xl font-semibold mb-6">Why We Build</h2>

        <p className="text-muted-foreground text-base sm:text-md leading-relaxed">
          Most data tooling is patchwork: brittle pipelines, slow retrieval, noisy signals.  
          We build the systems we wish existed fast, adaptive, and grounded in operator-level control.
        </p>

        <p className="mt-4 text-muted-foreground text-base sm:text-md leading-relaxed">
          If you partner with us, you get people who care obsessively about the craft.  
          If not someone else will, and they&apos;ll move faster.
        </p>
      </section>

      {/* =========================
          CTA
      ========================== */}
      <section className="py-6 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold">Let&apos;s Build Something Hard</h2>
        <p className="mt-2 max-w-xl md:max-w-2xl mx-auto text-muted-foreground leading-relaxed mb-6">
          If you have complex datasets, scaling problems, or messy pipelines we want to work with you.
        </p>
        <CallToAction/>
      </section>

    </div>
  );
}
