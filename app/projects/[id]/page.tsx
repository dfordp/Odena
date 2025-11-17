import ContentRenderer from "@/components/ContentRenderer";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { FaGithub, FaProductHunt } from "react-icons/fa6";
import { SiPeerlist } from "react-icons/si";

export default async function ProjectPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) return notFound();

  // Extract embeds block if it exists
  const embedsBlock = project.contentBlocks.find(
    (block) => block.type === "embeds"
  );

  return (
    <div className="min-h-screen bg-background text-foreground px-6 pt-24 pb-4">
      <div className="max-w-[1100px] mx-auto">

        {/* Header */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
              {project.title}
            </h1>

            {/* Embeds Links - Top Right */}
            {embedsBlock && embedsBlock.type === "embeds" && (
              <div className="flex flex-wrap gap-2">
                {embedsBlock.items.map((embed, idx) => {
                  if (!embed.url) return null;
                  
                  // Map labels to simpler versions and appropriate icons
                  let label = "Link";
                  let IconComponent = null;
                  
                  if (embed.label?.toLowerCase().includes("live") || embed.label?.toLowerCase().includes("hackmate.app")) {
                    label = "Live";
                    IconComponent = <ExternalLink size={14} />;
                  } else if (embed.label?.toLowerCase().includes("peerlist")) {
                    label = "Peerlist";
                    IconComponent = <SiPeerlist size={14} />;
                  } else if (embed.label?.toLowerCase().includes("producthunt") || embed.label?.toLowerCase().includes("product hunt")) {
                    label = "ProductHunt";
                    IconComponent = <FaProductHunt size={14} />;
                  } else if (embed.label?.toLowerCase().includes("github")) {
                    label = "GitHub";
                    IconComponent = <FaGithub size={14} />;
                  } else {
                    IconComponent = <ExternalLink size={14} />;
                  }
                  
                  return (
                    <Link
                      key={idx}
                      href={embed.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-1.5 bg-black hover:bg-gray-900 text-white rounded-full text-sm font-medium transition-all duration-200 hover:scale-103 border border-gray-800"
                    >
                      {IconComponent}
                      {label}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <p className="text-muted-foreground text-lg mt-4 max-w-2xl">
            {project.description}
          </p>
        </div>

        {/* Content - filter out embeds block */}
        <ContentRenderer 
          blocks={project.contentBlocks.filter((b) => b.type !== "embeds")} 
        />
      </div>
    </div>
  );
}
