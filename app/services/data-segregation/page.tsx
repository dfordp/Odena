import CallToAction from "@/components/CallToAction";
import { ArrowRight, GitBranch, Network, Layers as LayersIcon, CheckCircle } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Data Segregation Services – Adaptive Clustering & Segmentation | Odena",
  description:
    "Self-organizing clustering engines that automatically segment data by behavior, semantics, and structure. Built for multimodal datasets and high-throughput environments.",
  keywords: [
    "data segregation",
    "adaptive clustering",
    "data segmentation",
    "multimodal clustering",
    "automatic grouping",
    "behavioral clustering",
    "semantic segmentation",
    "self-organizing systems",
    "data partitioning",
    "intelligent filtering"
  ],
  openGraph: {
    title: "Data Segregation – Self-Organizing Clustering for Any Dataset",
    description:
      "Odena builds adaptive clustering engines that automatically segment data by behavior, semantics, and structure without manual configuration.",
    url: "https://www.odena.io/services/data-segregation",
    siteName: "Odena",
    images: [
      {
        url: "https://www.odena.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "Odena Data Segregation Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Segregation – Adaptive Clustering That Self-Organizes",
    description:
      "Clustering engines that understand data structure and behavior, automatically organizing datasets without predefined rules.",
    images: ["https://www.odena.io/og-image.png"],
  },
  alternates: {
    canonical: "https://www.odena.io/services/data-segregation",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DataSegregationPage() {
  const useCases = [
    {
      title: "Customer Segmentation",
      desc: "Group users by behavior patterns, preferences, and engagement without predefined categories."
    },
    {
      title: "Content Organization",
      desc: "Automatically cluster documents, images, and videos by topic, style, and semantic similarity."
    },
    {
      title: "Anomaly Isolation",
      desc: "Separate outliers and suspicious patterns from normal data flows in real-time."
    },
    {
      title: "Data Cleaning",
      desc: "Identify and segregate noisy, duplicate, or low-quality records before processing."
    },
    {
      title: "Multi-Source Integration",
      desc: "Merge and segment data from disparate sources based on structural and semantic alignment."
    },
    {
      title: "Pipeline Routing",
      desc: "Direct data to appropriate processing paths based on content type and characteristics."
    }
  ];

  const capabilities = [
    {
      icon: GitBranch,
      title: "Adaptive Clustering",
      desc: "Systems that discover optimal groupings without predefined cluster counts or manual tuning."
    },
    {
      icon: Network,
      title: "Multi-Modal Support",
      desc: "Process text, images, structured data, and time-series within the same segmentation framework."
    },
    {
      icon: LayersIcon,
      title: "Hierarchical Organization",
      desc: "Build nested cluster hierarchies that reveal both broad categories and fine-grained distinctions."
    }
  ];

  const technicalApproach = [
    {
      step: "01",
      title: "Feature Extraction",
      desc: "Extract meaningful representations from raw data using domain-aware encoders and embeddings."
    },
    {
      step: "02",
      title: "Similarity Computation",
      desc: "Calculate distances in high-dimensional space using optimized metrics for different data types."
    },
    {
      step: "03",
      title: "Dynamic Clustering",
      desc: "Apply adaptive algorithms that determine cluster boundaries based on data distribution."
    },
    {
      step: "04",
      title: "Continuous Refinement",
      desc: "Systems evolve as new data arrives, maintaining relevant groupings without full recomputation."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      
      {/* HERO */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="mb-4">
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition"
          >
            ← Back to Services
          </Link>
        </div>
        
        <h1 className="text-3xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
          Data Segregation Systems That Self-Organize
        </h1>
        
        <p className="mt-4 sm:mt-6 text-base sm:text-md text-muted-foreground leading-relaxed max-w-3xl">
          Adaptive clustering engines that automatically segment datasets by behavior, semantics, and structure. 
          No manual configuration. No predefined categories. Just intelligent grouping that adapts as data evolves.
        </p>
      </section>

      {/* CAPABILITIES */}
      <section className="py-8 px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8">Core Capabilities</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div key={idx} className="p-6 rounded-[10px] bg-amber-900/4 border border-amber-900/18">
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{cap.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{cap.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* TECHNICAL APPROACH */}
      <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-2">How It Works</h2>
        <p className="text-muted-foreground mb-8 max-w-3xl">
          Our segregation systems combine semantic understanding with adaptive algorithms 
          to discover natural groupings in your data.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {technicalApproach.map((item, idx) => (
            <div key={idx} className="p-6 rounded-[10px] bg-card/50 border border-border/50">
              <div className="text-3xl font-bold text-primary mb-3">{item.step}</div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CLUSTERING VISUALIZATION */}
      <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">Adaptive Clustering Process</h2>
        
        <div className="bg-card/30 border border-border rounded-[10px] p-8 sm:p-12">
          <div className="flex flex-col gap-8">
            {/* Input Data */}
            <div className="text-center">
              <div className="inline-block p-6 rounded-lg bg-amber-900/10 border border-amber-900/20">
                <div className="font-semibold mb-2">Unstructured Dataset</div>
                <div className="flex gap-2 justify-center flex-wrap">
                  {[...Array(12)].map((_, i) => (
                    <div 
                      key={i} 
                      className="w-3 h-3 rounded-full bg-muted"
                      style={{ opacity: 0.6 + Math.random() * 0.4 }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <ArrowRight className="w-6 h-6 text-primary rotate-90" />
            </div>

            {/* Processing */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg bg-primary/5 border border-primary/20">
                <div className="font-semibold mb-3 text-center">Feature Space Projection</div>
                <div className="relative h-32 bg-card/50 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-xs text-muted-foreground">High-dimensional embedding space</div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 rounded-lg bg-primary/5 border border-primary/20">
                <div className="font-semibold mb-3 text-center">Similarity Analysis</div>
                <div className="relative h-32 bg-card/50 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-xs text-muted-foreground">Distance-based grouping</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <ArrowRight className="w-6 h-6 text-primary rotate-90" />
            </div>

            {/* Clustered Output */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-primary/10 border border-primary/30 text-center">
                <div className="font-semibold mb-2 text-sm">Cluster A</div>
                <div className="flex gap-1 justify-center flex-wrap">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-2.5 h-2.5 rounded-full bg-primary/60" />
                  ))}
                </div>
              </div>
              
              <div className="p-4 rounded-lg bg-secondary/10 border border-secondary/30 text-center">
                <div className="font-semibold mb-2 text-sm">Cluster B</div>
                <div className="flex gap-1 justify-center flex-wrap">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-2.5 h-2.5 rounded-full bg-secondary/60" />
                  ))}
                </div>
              </div>
              
              <div className="p-4 rounded-lg bg-accent/10 border border-accent/30 text-center">
                <div className="font-semibold mb-2 text-sm">Cluster C</div>
                <div className="flex gap-1 justify-center flex-wrap">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-2.5 h-2.5 rounded-full bg-accent/60" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6 max-w-2xl mx-auto">
          The system automatically determines the optimal number of clusters based on data characteristics, 
          eliminating the need for manual parameter tuning.
        </p>
      </section>

      {/* USE CASES */}
      <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8">Where It&apos;s Applied</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, idx) => (
            <div key={idx} className="p-6 rounded-[10px] bg-card/40 border border-border/50">
              <div className="flex items-start gap-3 mb-2">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <h3 className="text-lg font-semibold">{useCase.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed ml-8">{useCase.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY ADAPTIVE CLUSTERING */}
      <section className="py-12 px-4 sm:px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Why Adaptive Clustering Works</h2>
        
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Traditional clustering requires you to specify the number of groups upfront and tune multiple hyperparameters. 
            That&apos;s impractical when you don&apos;t know the data structure in advance.
          </p>
          
          <p>
            Our adaptive approach learns the natural groupings from the data itself. The system considers density, 
            distance metrics, and semantic relationships to discover clusters that actually make sense.
          </p>
          
          <p>
            As your data evolves, the clustering adapts. New patterns emerge, old clusters split or merge, 
            and the system maintains coherent groupings without manual intervention.
          </p>
        </div>
      </section>

      {/* ALGORITHM TYPES */}
      <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8">Clustering Approaches We Use</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-[10px] bg-card/50 border border-border/50">
            <h3 className="text-lg font-semibold mb-3">Density-Based Clustering</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Identifies clusters based on regions of high data density, automatically handling noise and outliers.
            </p>
            <div className="text-xs text-primary font-medium">DBSCAN • HDBSCAN • OPTICS</div>
          </div>

          <div className="p-6 rounded-[10px] bg-card/50 border border-border/50">
            <h3 className="text-lg font-semibold mb-3">Hierarchical Clustering</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Builds tree-like structures revealing both broad categories and fine-grained distinctions.
            </p>
            <div className="text-xs text-primary font-medium">Agglomerative • Divisive • Linkage methods</div>
          </div>

          <div className="p-6 rounded-[10px] bg-card/50 border border-border/50">
            <h3 className="text-lg font-semibold mb-3">Semantic Clustering</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Groups data based on meaning and context rather than just statistical similarity.
            </p>
            <div className="text-xs text-primary font-medium">Embedding-based • Topic models • Graph clustering</div>
          </div>

          <div className="p-6 rounded-[10px] bg-card/50 border border-border/50">
            <h3 className="text-lg font-semibold mb-3">Streaming Clustering</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Real-time segmentation for data streams, maintaining clusters as new data arrives.
            </p>
            <div className="text-xs text-primary font-medium">Online algorithms • Incremental updates • Drift detection</div>
          </div>
        </div>
      </section>

      {/* PERFORMANCE */}
      <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">Performance Characteristics</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="text-center p-6 rounded-[10px] bg-amber-900/4 border border-amber-900/18">
            <div className="text-4xl font-bold text-primary mb-2">100K+</div>
            <div className="text-sm font-medium mb-1">Items/Second</div>
            <div className="text-xs text-muted-foreground">Clustering throughput for large datasets</div>
          </div>
          
          <div className="text-center p-6 rounded-[10px] bg-amber-900/4 border border-amber-900/18">
            <div className="text-4xl font-bold text-primary mb-2">Auto</div>
            <div className="text-sm font-medium mb-1">Cluster Detection</div>
            <div className="text-xs text-muted-foreground">No manual parameter tuning required</div>
          </div>
          
          <div className="text-center p-6 rounded-[10px] bg-amber-900/4 border border-amber-900/18">
            <div className="text-4xl font-bold text-primary mb-2">Real-time</div>
            <div className="text-sm font-medium mb-1">Adaptive Updates</div>
            <div className="text-xs text-muted-foreground">Clusters evolve with incoming data</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-6 text-center px-4 sm:px-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Ready to Organize Your Data?</h2>
        <p className="mt-2 max-w-xl md:max-w-2xl mx-auto text-muted-foreground leading-relaxed mb-6">
          Whether you&apos;re segmenting customers, organizing content, or routing data flows, our clustering systems adapt to your needs.
        </p>
        <CallToAction />
      </section>
    </div>
  );
}
