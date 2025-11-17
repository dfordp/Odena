import CallToAction from "@/components/CallToAction";
import { projects } from "@/data/projects";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects – Research Systems, Experiments & Technical Explorations | Odena",
  description:
    "Explore Odena’s portfolio of research systems, engineering experiments, and high-throughput data pipelines. From distributed compute to multimodal models, each project showcases our approach to building adaptive, production-ready infrastructure.",
  keywords: [
    "Odena projects",
    "Odena research",
    "AI engineering projects",
    "machine learning systems",
    "distributed systems portfolio",
    "AI pipelines",
    "geospatial models",
    "foundational models",
    "multimodal pipelines",
    "computer vision research",
    "data infrastructure",
    "high throughput AI systems",
    "research engineering",
    "adaptive data systems"
  ],
  openGraph: {
    title: "Odena Projects – Research Systems, Experiments & Infrastructure",
    description:
      "A curated collection of Odena’s research systems and engineering experiments—geospatial models, adaptive engines, distributed compute meshes, multimodal workflows, and AI-driven data pipelines.",
    url: "https://www.odena.io/projects",
    siteName: "Odena",
    images: [
      {
        url: "https://www.odena.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "Odena – Research Projects and Technical Systems",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Odena Research Projects – Experiments & Intelligent Systems",
    description:
      "Dive into Odena’s most ambitious research: distributed compute layers, multimodal engines, geospatial models, adaptive data systems, and zero-shot operators.",
    images: ["https://www.odena.io/og-image.png"],
  },
  alternates: {
    canonical: "https://www.odena.io/projects",
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function Projects() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground font-sans">
      <section className="pt-24 sm:pt-28 md:pt-30 pb-2 px-4 sm:px-6 text-center">
        <h1 className="text-3xl sm:text-3xl md:text-4xl font-semibold tracking-tight max-w-6xl mx-auto">
          Experiments, Systems, and Research We&apos;re Proud Of
        </h1>
        <p className="mt-4 sm:mt-6 text-base sm:text-md max-w-[750px] mx-auto text-muted-foreground leading-relaxed px-4">
          Every project here started as someone&apos;s late-night idea, competition
          prototype, or research obsession. We build fast, ship early, and treat
          each system as a stepping stone toward our larger vision of intelligent
          data pipelines.
        </p>
      </section>

      <section className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 max-w-6xl mx-auto grid gap-6 sm:gap-8 lg:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div key={project.id} className="flex flex-col justify-between group p-6 rounded-[10px] bg-amber-900/4 border border-amber-900/18">
            <Link href={`/projects/${project.slug}`} className="block">
              <div className="relative w-full h-40 rounded-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover group-hover:scale-102 transition"
                />
              </div>
              <h3 className="text-xl font-semibold mt-5">{project.title}</h3>
            </Link>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
              {project.description}
            </p>
            <Link
              href={`/projects/${project.id}`}
              className="inline-block mt-4 text-primary font-medium hover:underline"
            >
              Read more →
            </Link>
          </div>
        ))}
      </section>

      <section className="py-6 px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold">Want to Collaborate?</h2>
        <p className="mt-2 max-w-xl md:max-w-2xl mx-auto text-muted-foreground leading-relaxed mb-6">
          If you have datasets, scaling problems, or research ideas that feel
          too ambitious for a normal team we want to hear about it.
        </p>
        <CallToAction />
      </section>
    </div>
  );
}
