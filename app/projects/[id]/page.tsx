import ContentRenderer from "@/components/ContentRenderer";
import { projects } from "@/data";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function ProjectPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) return notFound();

  // Extract embeds block if it exists
  const embedsBlock = project.contentBlocks.find(
    (block) => block.type === "embeds"
  );

  return (
    <div className="min-h-screen bg-background text-foreground px-6 py-28">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            {project.title}
          </h1>

          <p className="text-muted-foreground text-lg mt-4 max-w-2xl">
            {project.description}
          </p>

          {/* Embeds Links */}
          {embedsBlock && embedsBlock.type === "embeds" && (
        <div className="flex flex-wrap gap-3 mt-6">
          {embedsBlock.items.map((embed, idx) => {
            if (!embed.url) return null;
            const Icon = embed.icon;
            return (
              <Link
                key={idx}
                href={embed.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 border border-primary/30 text-primary rounded-lg text-sm font-medium transition"
              >
                {Icon && <Icon size={16} />}
                {embed.label}
              </Link>
            );
          })}
        </div>
      )}
        </div>

        {/* Content - filter out embeds block */}
        <ContentRenderer 
          blocks={project.contentBlocks.filter((b) => b.type !== "embeds")} 
        />
      </div>
    </div>
  );
}