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
    {
        id: "zenith-ai-career-coach",
        image: "/zenith.png",
        alt: "Zenith",
        title: "Zenith – AI Career Coach",
        description: "An AI-driven career platform offering tailored resume tools, real-time industry insights, and adaptive skill assessments.",
        slug: "zenith-ai-career-coach",
        contentBlocks: [
            {
                type: "embeds",
                items: [{ 
                        type: "link", 
                        url: "https://https://zenith-gg.vercel.app/", 
                        label: "Live",
                        icon: ExternalLink
                    },
                    {
                        type: "link",
                        url: "https://github.com/anantkrsharma/Zenith",
                        label: "GitHub",
                        icon: FaGithub
                    },
                ]
            },

            {
                type: "image",
                src: "/zenith.png",
                alt: "Zenith preview"
            },

            {
                type: "heading",
                level: 2,
                content: "Overview"
            },

            {
                type: "paragraph",
                content:
                    "Zenith is designed to help job seekers navigate hiring workflows with data-backed insights and AI-driven writing assistance. Instead of relying on generic templates or one-time skill tests, Zenith builds an evolving profile of the user — aligning resume content, industry trends, and performance metrics into a coherent guidance loop."
            },

            {
                type: "list",
                style: "bulleted",
                items: [
                    "Real-time insight generation based on the user's tech stack and market signals.",
                    "Adaptive skill assessments that update difficulty and scope using historical performance.",
                    "Resume and cover letter synthesis grounded in role descriptions and user input.",
                    "End-to-end authentication and onboarding using Clerk."
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
                    "Zenith operates on a job-seeker feedback loop: users provide skills and goals, the system fetches real-time trends, and Inngest processes scheduled background tasks that keep insights fresh. The Gemini API generates content and evaluations, while Prisma anchors user data, test history, and generated assets in a relational schema."
            },

            {
                type: "list",
                style: "numbered",
                items: [
                    "Users authenticate and set up their skill profile during onboarding.",
                    "Inngest schedules periodic jobs to fetch industry data aligned with the user’s tech stack.",
                    "Trend snapshots are persisted in PostgreSQL and surfaced in the dashboard.",
                    "Users take AI-curated assessments that adjust difficulty based on performance patterns.",
                    "The resume builder produces role-aligned drafts that users can refine directly inside the UI."
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
                    "Role-aware resume and cover letter generation.",
                    "Timed and adaptive skill assessments with historical tracking.",
                    "Scheduled ingestion of industry data using Inngest.",
                    "Clean, modular UI built with Shadcn components.",
                    "Secure and seamless authentication through Clerk.",
                    "Strong type-safety across frontend and backend with TypeScript and Prisma."
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
                    "Zenith uses Next.js as both the application shell and the backend runtime via Server Actions. Background workloads are delegated to Inngest, allowing the platform to fetch industry indicators or generate insights without blocking UI interactions. Prisma serves as the data access layer for PostgreSQL, ensuring schema reliability while enabling typed queries across all layers."
            },

            {
                type: "code",
                language: "text",
                content: `
                    Data Tables:
                    User                    – profile, onboarding state
                    SkillProfile            – primary tech stack and experience signals
                    Assessment              – generated tests tied to topics and difficulty
                    AssessmentResult        – performance history and scoring
                    GeneratedAssets         – resume and cover letter drafts
                `
            },

            {
                type: "heading",
                level: 3,
                content: "Workflow Breakdown"
            },

            {
                type: "list",
                style: "bulleted",
                items: [
                    "Inngest runs cron-like functions to periodically fetch industry data.",
                    "Gemini powers generation for resumes, cover letters, and test questions.",
                    "Prisma models maintain strict relational boundaries for user and assessment data.",
                    "Next.js Server Actions reduce API surface complexity by colocating logic with components."
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
                    "Frontend: Next.js, React, TypeScript",
                    "Backend: Next.js Server Actions, Inngest",
                    "AI Services: Gemini API",
                    "Authentication: Clerk",
                    "Database: PostgreSQL",
                    "ORM: Prisma",
                    "UI: Shadcn UI"
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
                    git clone https://github.com/AnantKrSharma/Zenith.git
                    cd zenith
                    pnpm install

                    # Configure environment variables
                    # (Clerk keys, database URL, Gemini API key)

                    pnpx prisma migrate dev --name init
                    pnpx prisma generate

                    pnpx inngest-cli dev
                    pnpm dev
                `
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
                    "Deeper personalization using longitudinal performance data.",
                    "Automated job-role matching tied to user skill evolution.",
                    "Interview prep modules using retrieval-augmented prompts.",
                    "User portfolios generated from assessment outcomes and coding exercises."
                ]
            }
        ]
    }
];
