import Image from "next/image";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground font-sans">
      <Navbar />
      
      <div className="flex flex-1 items-center justify-center">
        <main className="flex w-full max-w-4xl flex-col items-center justify-between gap-12 p-12 rounded-xl shadow-md bg-card text-card-foreground dark:bg-background dark:text-foreground">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/odena-logo.png"
              alt="Odena Logo"
              width={60}
              height={60}
              priority
              className="rounded-full shadow-sm"
            />
            <h1 className="text-3xl font-semibold tracking-tight text-primary">
              Odena
            </h1>
          </div>

          {/* Intro Text */}
          <div className="flex flex-col items-center gap-4 text-center max-w-2xl">
            <h2 className="text-2xl font-medium leading-snug">
              Systems for Data Organization and Insight
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              We build research-driven systems that help teams rank, segment, and
              analyze datasets of any kind — code, media, or tabular — using
              adaptive zero-shot operators and high-throughput pipelines.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://github.com/odena-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 items-center justify-center rounded-full bg-primary text-primary-foreground px-6 font-medium hover:opacity-90 transition-all"
            >
              Explore Projects
            </a>
            <a
              href="mailto:team@odena.ai"
              className="flex h-12 items-center justify-center rounded-full border border-border text-foreground px-6 hover:bg-muted transition-all"
            >
              Collaborate With Us
            </a>
          </div>

          {/* Footer */}
          <footer className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Odena Research Collective
          </footer>
        </main>
      </div>
    </div>
  );
}
