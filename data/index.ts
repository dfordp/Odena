import { ExternalLink, Share2 } from "lucide-react";
import { FaGithub, FaProductHunt } from "react-icons/fa6";

type HeadingBlock = {
    type: "heading";
    level: 1 | 2 | 3;
    content: string;
};

type ParagraphBlock = {
    type: "paragraph";
    content: string;
};

type ImageBlock = {
    type: "image";
    src: string;
    alt: string;
};

type ListBlock = {
    type: "list";
    style: "bulleted" | "numbered";
    items: string[];
};

type CodeBlock = {
    type: "code";
    language?: string;
    content: string;
};

type EmbedItem = {
    type: "link" | "component" | "icon";
    url?: string;
    label?: string;
    component?: React.ComponentType<Record<string, unknown>>;
    icon?: React.ComponentType<Record<string, unknown>>;
    props?: Record<string, unknown>;
};

type EmbedsBlock = {
    type: "embeds";
    items: EmbedItem[];
};

export type ContentBlock =
    | HeadingBlock
    | ParagraphBlock
    | ImageBlock
    | ListBlock
    | CodeBlock
    | EmbedsBlock;

interface TeamMember {
    name: string;
    role: string;
    img: string;
    portfolio: string;
    twitter: string;
    linkedin: string;
}

export interface Project {
    id: string;
    image: string;
    alt: string;
    title: string;
    description: string;
    slug: string;
    contentBlocks: ContentBlock[];
}

export const members: TeamMember[] = [
    {
        name: "Paranjai Gusaria",
        role: "Research Systems, Adaptive Pipelines, and Automation",
        img: "/paranjai.jpeg",
        portfolio: "",
        twitter: "",
        linkedin: "https://linkedin.com/in/paranjai",
    },
    {
        name: "Anant Kumar Sharma",
        role: "Product Architect, Developer, and Solutions Specialist",
        img: "/anant.png",
        portfolio: "https://www.anantx.dev/",
        twitter: "https://x.com/anantXdev",
        linkedin: "https://www.linkedin.com/in/anant-kr-sharma-341793273/",
    },
    {
        name: "Dhruv Singhal",
        role: "Product Strategist, Outreach Lead, and Growth Catalyst",
        img: "/dhruv.png",
        portfolio: "",
        twitter: "",
        linkedin: "https://www.linkedin.com/in/dhruvsinghal6888/",
    },
    {
        name: "Dilpreet Grover",
        role: "Solution Designer, Data Analyst, and Operations Specialist",
        img: "/dilpreet.png",
        portfolio: "https://www.dilpreetgrover.me/",
        twitter: "https://x.com/dfordp11",
        linkedin: "https://www.linkedin.com/in/dilpreet-grover-17726b224/",
    },
];

export const projects : Project[] = [
  {
    id: "hackmate-match-making",
    image: "/hackmate.jpeg",
    alt: "HackMate",
    title: "HackMate",
    description: "A swipe-based matchmaking platform designed to help founders and builders discover potential co-founders, collaborators, or indie hackers",
    slug: "hackmate-match-making",
    contentBlocks: [
    {
            type: "embeds",
            items: [
                { 
                    type: "link", 
                    url: "https://hackmate.app", 
                    label: "Live",
                    icon: ExternalLink
                },
                { 
                    type: "link", 
                    url: "https://peerlist.io/dfordp/project/hackmate", 
                    label: "Peerlist",
                    icon: Share2
                },
                { 
                    type: "link", 
                    url: "https://www.producthunt.com/products/hackmate", 
                    label: "ProductHunt",
                    icon: FaProductHunt 
                },
                { 
                    type: "link", 
                    url: "https://github.com/dfordp/hackmate-rework", 
                    label: "GitHub",
                    icon: FaGithub
                }
            ]
        },
    {
        type: "image",
        src: "/hackmate.jpeg",
        alt: "Hackmate preview"
    },

    {
        type: "heading",
        level: 2,
        content: "Overview"
    },

    {
        type: "paragraph",
        content:
        "Hackmate began as a research project exploring whether collaborator discovery could be compressed into a fast, minimal interaction loop. Instead of long profiles or open-ended browsing, the platform presents a single relevant builder at a time and asks only one decision: would you build with this person?"
    },

    {
        type: "list",
        style: "bulleted",
        items: [
        "Lightweight profiles capture only skills, intent, and experience.",
        "Users evaluate one builder at a time through a left/right swipe.",
        "A mutual right-swipe instantly creates a shared match.",
        "All matching logic runs on an in-memory Redis layer for real-time responsiveness."
        ]
    },

    {
        type: "heading",
        level: 2,
        content: "How It Works"
    },

    {
        type: "paragraph",
        content:
        "The system operates on a dual-path architecture: a fast interaction layer running entirely in Redis, and a persistence layer backed by PostgreSQL. All high-frequency operations swipes, match checks, feed updates occur in the Redis fast path to minimize latency during active sessions."
    },

    {
        type: "list",
        style: "numbered",
        items: [
        "Users create concise profiles outlining skills, experience, and collaboration goals.",
        "Hackmate surfaces relevant candidates for swiping based on intent and skills.",
        "Each swipe is written to a Redis SET, ensuring duplicates cannot occur.",
        "If both users swipe right, the system writes a match into each user's Redis LIST.",
        "Matches appear instantly in a real-time feed delivered through WebSockets or SSE."
        ]
    },

    {
        type: "heading",
        level: 2,
        content: "Key Features"
    },

    {
        type: "list",
        style: "bulleted",
        items: [
        "Decision-centric matching: a single swipe determines interest.",
        "Low-latency real-time matches powered by Redis operations.",
        "Profiles emphasize skill and intent rather than social presence.",
        "Mutual-only visibility eliminates cold outreach and reduces noise.",
        "In-memory caching provides sub-millisecond response during swiping.",
        "Minimal UI optimized for quick evaluation instead of social engagement."
        ]
    },

    {
        type: "heading",
        level: 2,
        content: "System Architecture"
    },

    {
        type: "paragraph",
        content:
        "Hackmate separates fast collaborative interactions from long-term data storage. PostgreSQL holds durable state such as user profiles and historical matches, while Redis handles all volatile, high-frequency operations. This architecture allows the platform to scale without compromising responsiveness."
    },

    {
        type: "code",
        language: "text",
        content: `
            Likes Given (SET)           likes:<user_id>
            Match Queue (LIST)          matches:<user_id>
            User Profile Cache (HASH)   user:<user_id>
        `
    },

    {
        type: "heading",
        level: 3,
        content: "Data Structures"
    },

    {
        type: "list",
        style: "bulleted",
        items: [
            "SET stores all outgoing swipes for each user, preventing duplicates and ensuring clean match logic.",
            "LIST stores confirmed matches in chronological order for real-time feed rendering.",
            "HASH stores cached user profile data to avoid repeated database queries."
        ]
    },

    {
        type: "heading",
        level: 2,
        content: "Technology Stack"
    },

    {
        type: "list",
        style: "bulleted",
        items: [
            "Frontend: Next.js, Tailwind CSS",
            "Backend: Next.js API Routes, Prisma, PostgreSQL",
            "Matching Engine: Redis (SETs, LISTs, HASHes)",
            "Authentication: Clerk",
            "Hosting: Vercel",
            "Dev Environment: Docker Compose (app + Postgres + Redis)"
        ]
    },

    {
        type: "heading",
        level: 2,
        content: "Local Development Setup"
    },

    {
        type: "code",
        language: "bash",
        content: `
    git clone https://github.com/dfordp/hackmate-rework.git
    cd hackmate
    npm install

    docker run -p 6379:6379 redis

    npm run dev
        `
    },

    {
        type: "heading",
        level: 2,
        content: "Docker-Based Setup"
    },

    {
        type: "list",
        style: "numbered",
        items: [
        "docker-compose up --build",
        "docker-compose down",
        "docker exec -it hackmate-postgres psql -U hackmate -d hackmate",
        "docker exec -it hackmate-redis redis-cli"
        ]
    },

    {
        type: "heading",
        level: 2,
        content: "Future Development"
    },

    {
        type: "list",
        style: "bulleted",
        items: [
        "Filtering weighted by skills, role, and collaboration intent.",
        "Region- and timezone-aware matching modes.",
        "Lightweight project cards and pitch summaries.",
        "Improved scoring and compatibility ranking.",
        "A more expressive match feed with guided conversation prompts."
        ]
    },
    ]

  },
];