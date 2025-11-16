"use client";

import Image from "next/image";

type Block =
  | { type: "heading"; level: number; content: string }
  | { type: "paragraph"; content: string }
  | { type: "list"; style: "bulleted" | "numbered"; items: (string | { label: string })[] }
  | { type: "image"; src: string; alt?: string; caption?: string }
  | { type: "code"; language?: string; content: string; title?: string }
  | { type: "quote"; content: string; source?: string }
  | { type: "callout"; variant?: "info" | "warn" | "success"; content: string }
  | { type: "embed"; url: string }
  | { type: "video"; src: string }
  | { type: "two-column"; left: Block[]; right: Block[] }
  | { type: "divider" }
  | { type: "grid"; images: { src: string; alt?: string }[] }
  | {
      type: "embeds";
      items: { url: string; label: string }[];
    };

export default function ContentRenderer({ blocks }: { blocks: Block[] }) {
  return (
    <div className="custom-prose">
      {blocks.map((block, idx) => {
        switch (block.type) {
          // Headings -------------------------------------
          case "heading":
            if (block.level === 1)
              return <h1 key={idx}>{block.content}</h1>;
            if (block.level === 2)
              return <h2 key={idx}>{block.content}</h2>;
            return <h3 key={idx}>{block.content}</h3>;

          // Paragraph ------------------------------------
          case "paragraph":
            return <p key={idx}>{block.content}</p>;

          // Lists ----------------------------------------
          case "list":
            return block.style === "bulleted" ? (
              <ul key={idx} className="list-disc ml-6">
                {block.items.map((item, i) => (
                  <li key={i}>{typeof item === "string" ? item : item.label}</li>
                ))}
              </ul>
            ) : (
              <ol key={idx} className="list-decimal ml-6">
                {block.items.map((item, i) => (
                  <li key={i}>{typeof item === "string" ? item : item.label}</li>
                ))}
              </ol>
            );

          // Images ---------------------------------------
          case "image":
            return (
              <figure key={idx} className="my-8">
                <Image
                  src={block.src}
                  alt={block.alt || ""}
                  width={1100}
                  height={700}
                  className="rounded-xl border border-border shadow-sm"
                />
                {block.caption && (
                  <figcaption className="mt-2 text-center text-sm text-muted-foreground">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );

          // Code Blocks -----------------------------------
          case "code":
            return (
              <div key={idx} className="my-6">
                {block.title && (
                  <div className="text-xs mb-1 text-muted-foreground">
                    {block.title}
                  </div>
                )}
                <pre className="bg-black/5 p-4 rounded-xl overflow-x-auto text-sm border border-border/40">
                  <code>{block.content}</code>
                </pre>
              </div>
            );

          // Quote block -----------------------------------
          case "quote":
            return (
              <blockquote
                key={idx}
                className="border-l-4 border-primary pl-4 italic my-6 text-lg"
              >
                {block.content}
                {block.source && (
                  <div className="text-sm text-muted-foreground mt-2">
                    — {block.source}
                  </div>
                )}
              </blockquote>
            );

          // Callout ---------------------------------------
          case "callout": {
            const color =
              block.variant === "warn"
                ? "bg-yellow-500/10 border-yellow-500/20"
                : block.variant === "success"
                ? "bg-green-500/10 border-green-500/20"
                : "bg-blue-500/10 border-blue-500/20";

            return (
              <div
                key={idx}
                className={`p-4 rounded-lg border ${color} my-6 text-sm`}
              >
                {block.content}
              </div>
            );
          }

          // Video -----------------------------------------
          case "video":
            return (
              <video
                key={idx}
                controls
                className="rounded-xl border border-border my-8 w-full"
              >
                <source src={block.src} />
              </video>
            );

          // Iframe / embed --------------------------------
          case "embed":
            return (
              <div key={idx} className="my-8">
                <iframe
                  src={block.url}
                  className="w-full h-96 rounded-lg border border-border"
                />
              </div>
            );

          // Two-column layout -----------------------------
          case "two-column":
            return (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8"
              >
                <ContentRenderer blocks={block.left} />
                <ContentRenderer blocks={block.right} />
              </div>
            );

          // Horizontal rule --------------------------------
          case "divider":
            return <hr key={idx} className="my-12 border-border/40" />;

          // Image Grid -------------------------------------
          case "grid":
            return (
              <div
                key={idx}
                className="grid grid-cols-2 md:grid-cols-3 gap-4 my-10"
              >
                {block.images.map((img, i) => (
                  <Image
                    key={i}
                    src={img.src}
                    alt={img.alt || ""}
                    width={400}
                    height={400}
                    className="rounded-lg border border-border"
                  />
                ))}
              </div>
            );

          // Link embeds -------------------------------------
          case "embeds":
            return (
              <div key={idx} className="space-y-2 my-6">
                {block.items.map((embed, i) => (
                  <a
                    key={i}
                    href={embed.url}
                    target="_blank"
                    className="text-primary underline hover:opacity-80 block"
                  >
                    {embed.label}
                  </a>
                ))}
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
