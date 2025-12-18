import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
    title: "Projects – Research Systems, Experiments & Technical Explorations | Odena",
    description:
        "Explore Odena's portfolio of research systems, engineering experiments, and high-throughput data pipelines. From distributed compute to multimodal models, each project showcases our approach to building adaptive, production-ready infrastructure.",
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
        "A curated collection of Odena's research systems and engineering experiments: geospatial models, adaptive engines, distributed compute meshes, multimodal workflows, and AI-driven data pipelines.",
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
        "Dive into Odena's most ambitious research: distributed compute layers, multimodal engines, geospatial models, adaptive data systems, and zero-shot operators.",
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

export default function ProjectsLayout({ children }: { children: ReactNode }) {
    return <>{children}</>;
}
