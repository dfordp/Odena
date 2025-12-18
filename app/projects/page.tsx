"use client";

import CallToAction from "@/components/CallToAction";
import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type FilterStatus = "all" | "Open for Partnership" | "Finished" | "In Progress";

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<FilterStatus>("all");

  const filteredProjects = selectedFilter === "all" 
    ? projects 
    : projects.filter(project => project.status === selectedFilter);

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

      <section className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="mb-6">
          <Select value={selectedFilter} onValueChange={(value) => setSelectedFilter(value as FilterStatus)}>
            <SelectTrigger className="w-[200px] rounded-xl border-amber-900/15! bg-amber-100/60! hover:bg-amber-200/45! hover:border-amber-900/30! transition-all cursor-pointer focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent className="rounded-xl border-amber-900/10 bg-amber-100! backdrop-blur-md">
              <SelectItem value="all" className="rounded-lg cursor-pointer focus:bg-white/70! focus:text-foreground! data-highlighted:bg-white! data-highlighted:text-foreground! data-state-checked:bg-white!">All Projects</SelectItem>
              <SelectItem value="Open for Partnership" className="rounded-lg cursor-pointer focus:bg-white/70! focus:text-foreground! data-highlighted:bg-white! data-highlighted:text-foreground! data-state-checked:bg-white!">Open for Partnership</SelectItem>
              <SelectItem value="In Progress" className="rounded-lg cursor-pointer focus:bg-white/70! focus:text-foreground! data-highlighted:bg-white! data-highlighted:text-foreground! data-state-checked:bg-white!">In Progress</SelectItem>
              <SelectItem value="Finished" className="rounded-lg cursor-pointer focus:bg-white/70! focus:text-foreground! data-highlighted:bg-white! data-highlighted:text-foreground! data-state-checked:bg-white!">Finished</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-6 sm:gap-8 lg:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div key={project.id} className="relative flex flex-col justify-between group p-6 rounded-[10px] bg-amber-900/5 border border-amber-900/9">
              <div
                className={`absolute -top-3.5 right-3.5 px-3 py-1 text-[10px] uppercase tracking-widest font-medium rounded-xl border z-10 ${
                  project.status === "Open for Partnership"
                    ? "bg-purple-50 text-black/75 border-purple-700/15 shadow-[2px_2px_3px_0_rgba(168,85,247,0.4)]"
                    : project.status === "Finished"
                    ? "bg-green-50 text-black/75 border-emerald-700/20 shadow-[2px_2px_3px_0_rgba(16,185,129,0.4)]"
                    : "bg-amber-50 text-black/75 border-amber-600/15 shadow-[2px_2px_3px_0_rgba(245,158,11,0.4)]"
                }`}
              >
                {project.status}
              </div>
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
        </div>
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
