"use client";

import Image from "next/image";

type Block = {
  type: string;
  level?: number;
  content?: string;
  style?: string;
  items?: string[] | { url: string; label: string }[];
  src?: string;
  alt?: string;
};

export default function ContentRenderer({ blocks }: { blocks: Block[] }) {
  return (
    <div className="prose prose-invert max-w-none">
      {blocks.map((block, idx) => {
        switch (block.type) {
          case "heading":
            if (block.level === 1)
              return <h1 key={idx}>{block.content}</h1>;
            if (block.level === 2)
              return <h2 key={idx}>{block.content}</h2>;
            return <h3 key={idx}>{block.content}</h3>;

          case "paragraph":
            return <p key={idx}>{block.content}</p>;

          case "list":
            return block.style === "bulleted" ? (
              <ul key={idx} className="list-disc ml-6">
                {block.items?.map((item, i: number) => (
                  <li key={i}>{typeof item === "string" ? item : item.label}</li>
                ))}
              </ul>
            ) : (
              <ol key={idx} className="list-decimal ml-6">
                {block.items?.map((item, i: number) => (
                  <li key={i}>{typeof item === "string" ? item : item.label}</li>
                ))}
              </ol>
            );

          case "image":
            return block.src ? (
              <div key={idx} className="my-6">
                <Image
                  src={block.src}
                  alt={block.alt || ""}
                  width={900}
                  height={600}
                  className="rounded-lg border border-border"
                />
              </div>
            ) : null;

          case "code":
            return (
              <pre
                key={idx}
                className="bg-black/40 p-4 rounded-lg overflow-x-auto text-sm border border-border"
              >
                <code>{block.content}</code>
              </pre>
            );

          case "embeds":
            return (
              <div key={idx} className="space-y-2 my-6">
                {(block.items as { url: string; label: string }[] || []).map((embed: { url: string; label: string }, i: number) => (
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
