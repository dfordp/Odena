import ContentRenderer from "@/components/ContentRenderer";
import { projects } from "@/data";
import { notFound } from "next/navigation";

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) return notFound();

  return (
    <div className="min-h-screen bg-background text-foreground px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold mb-6">{project.title}</h1>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          {project.description}
        </p>

        <ContentRenderer blocks={project.contentBlocks} />
      </div>
    </div>
  );
}