import { ExternalLink, Share2 } from "lucide-react";
import { FaGithub, FaProductHunt, FaXTwitter } from "react-icons/fa6";

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
        title: "HackMate - The CoFounder MatchMaking",
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
                    "Zenith is designed to help job seekers navigate hiring workflows with data-backed insights and AI-driven writing assistance. Instead of relying on generic templates or one-time skill tests, Zenith builds an evolving profile of the user aligning resume content, industry trends, and performance metrics into a coherent guidance loop."
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
    },
    {
        id: "onlynerds-edtech",
        image: "/onlynerds.jpeg",
        alt: "OnlyNerds",
        title: "OnlyNerds – The Decentralized Learning Platform",
        description: "An AI-driven career platform offering tailored resume tools, real-time industry insights, and adaptive skill assessments.",
        slug: "onlynerds-edtech",
        contentBlocks: [
        // ============================
        // EMBEDS (TOP)
        // ============================
        {
            type: "embeds",
            items: [
            { 
                type: "link",
                url: "https://onlynerds-rose.vercel.app/", 
                label: "Live",
                icon: ExternalLink
            },
            { 
                type: "link",
                url: "https://github.com/dfordp/onlynerds",
                label: "GitHub",
                icon: FaGithub
            },
            ]
        },

        // ============================
        // HERO IMAGE
        // ============================
        {
            type: "image",
            src: "/onlynerds.jpeg",
            alt: "OnlyNerds preview"
        },

        // ============================
        // OVERVIEW
        // ============================
        {
            type: "heading",
            level: 2,
            content: "Overview"
        },

        {
            type: "paragraph",
            content:
            "OnlyNerds is a decentralized, AI-powered learning platform built for autodidacts, builders, and technical creators who learn best by doing. Instead of passive videos or centralized LMS systems, OnlyNerds uses forkable courses, AI evaluation agents, and on-chain skill proofs to build a transparent and verifiable upskilling ecosystem."
        },

        {
            type: "paragraph",
            content:
            "The platform was built during the BNB Chain AI Hackathon at IIT Delhi, where it placed as Runners-Up out of 30+ finalists and generated more than 100 early signups within the first day. The goal was to design a learning environment where ownership, credibility, and proof-of-knowledge are embedded directly into the infrastructure, rather than controlled by centralized institutions."
        },

        // ============================
        // PROBLEM WE'RE SOLVING
        // ============================
        {
            type: "heading",
            level: 2,
            content: "Problem We’re Solving"
        },

        {
            type: "paragraph",
            content:
            "EdTech today is dominated by centralized platforms, low-quality content factories, and unverifiable credentials. Learners cannot prove what they know, creators cannot remix or improve existing material, and review systems are gamed or manipulated. OnlyNerds proposes a new model: open, verifiable, and community-curated."
        },

        {
            type: "list",
            style: "bulleted",
            items: [
            "Centralized LMS platforms gatekeep models, pricing, and discovery.",
            "Course marketplaces suffer from low accountability and inflated reviews.",
            "Learners cannot prove real capability beyond PDFs and certificates.",
            "Educators lack modular, forkable systems for remixing educational content."
            ]
        },

        // ============================
        // SOLUTION
        // ============================
        {
            type: "heading",
            level: 2,
            content: "Our Solution"
        },

        {
            type: "paragraph",
            content:
            "OnlyNerds introduces a decentralized, AI-native learning architecture where courses can be forked like Git repositories, learners earn dynamic on-chain Skill NFTs, and all progress is validated through a transparent proof-of-knowledge system."
        },

        {
            type: "list",
            style: "bulleted",
            items: [
            "Forkable and remixable courses structured as modular learning graphs.",
            "AI agents that evaluate milestone submissions and track learner progress.",
            "Dynamic Skill NFTs acting as evolving, non-transferable proof-of-knowledge.",
            "Community-driven curation replacing opaque rating systems.",
            "A post-course bounty board enabling skill-based gig discovery."
            ]
        },

        // ============================
        // HOW IT WORKS
        // ============================
        {
            type: "heading",
            level: 2,
            content: "How It Works"
        },

        {
            type: "paragraph",
            content:
            "OnlyNerds uses a milestone-driven learning loop. Each course is structured as a sequence of verifiable tasks. AI agents evaluate submissions, update learner models, and mint on-chain artifacts reflecting progress. Every contribution, remix, or performance metric is recorded as verifiable data."
        },

        {
            type: "list",
            style: "numbered",
            items: [
            "Creators structure courses using a modular builder interface.",
            "Learners select a course or fork an existing one.",
            "AI agents guide the learner through milestone-based tasks.",
            "Submissions are evaluated using a combination of local inference and hosted LLMs.",
            "Skill NFTs update after each significant milestone, encoding a user's progress."
            ]
        },

        // ============================
        // KEY FEATURES
        // ============================
        {
            type: "heading",
            level: 2,
            content: "Key Features"
        },

        {
            type: "list",
            style: "bulleted",
            items: [
            "Forkable and remixable courses for open-ended creativity.",
            "AI tutors that evaluate and guide learners in real time.",
            "Dynamic, non-transferable Skill NFTs as proof-of-knowledge.",
            "DAO-based reputation acting as a transparent alternative to ratings.",
            "A gig engine linking learners to real-world bounties after course completion.",
            "Multi-modal course structures with text, code, media, and tasks."
            ]
        },

        // ============================
        // SYSTEM ARCHITECTURE
        // ============================
        {
            type: "heading",
            level: 2,
            content: "System Architecture"
        },

        {
            type: "paragraph",
            content:
            "The architecture splits responsibilities across on-chain verification, decentralized storage, and AI-assisted learning logic. Smart contracts maintain the Skill NFT lifecycle and course metadata hashes, while IPFS stores course content. AI agents, running through hosted models or local inference, generate evaluations and learning feedback."
        },

        {
            type: "code",
            language: "text",
            content: `
        Smart Contracts:
        - CourseRegistry: content metadata + versioning
        - SkillNFT: dynamic, evolving proof-of-knowledge token
        - ReputationModule: curated validator system

        Storage:
        - IPFS via Web3.Storage / Bundlr

        AI Evaluation:
        - HF models (LLaMA / Mistral)
        - Local inference fallback for offline flows
        `
        },

        // ============================
        // TECHNOLOGY STACK
        // ============================
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
            "Smart Contracts: Solidity, Hardhat, OpenZeppelin",
            "AI Evaluation: Hugging Face models (LLaMA, Mistral)",
            "Storage: IPFS (course assets + NFT metadata)",
            "Database: Supabase/PostgreSQL (temporary for user auth)",
            "Backend/Agents: Node.js microservices",
            "Blockchain: Polygon or BNB Chain"
            ]
        },

        // ============================
        // LOCAL DEVELOPMENT
        // ============================
        {
            type: "heading",
            level: 2,
            content: "Local Development Setup"
        },

        {
            type: "code",
            language: "bash",
            content: `
        git clone https://github.com/onlynerds/onlynerds-platform  
        cd onlynerds  
        npm install

        # Initialize local chain
        npx hardhat node

        # Deploy contracts
        npx hardhat run scripts/deploy.ts --network localhost

        npm run dev
        `
        },

        // ============================
        // FUTURE DEVELOPMENT
        // ============================
        {
            type: "heading",
            level: 2,
            content: "Future Development"
        },

        {
            type: "list",
            style: "bulleted",
            items: [
            "Adaptive learning curves based on performance embeddings.",
            "A full gig engine matching real-world tasks to learner skill maps.",
            "Community-driven course library with DAO moderation.",
            "Skill tree visualizations based on completed milestones.",
            "Peer review layer for tasks requiring human judgment.",
            "Offline-learning mode powered by local inference."
            ]
        }
        ]
    },
    {
        id: "openlens-dashboard",
        image: "/openlens.png",
        alt: "OpenLens",
        title: "OpenLens – Community Focused Github App",
        description: "OpenLens focuses on community health, contribution quality, and actionable signals so maintainers can spend less time filtering spam or duplicates, and more time merging meaningful work.",
        slug: "openlens-dashboard",
        contentBlocks: [
            // ============================
            // EMBEDS
            // ============================
            {
                type: "embeds",
                items: [
                {
                    type: "link",
                    url: "https://github.com/dfordp/Sentinel",
                    label: "GitHub",
                    icon: FaGithub
                },
                {
                    type: "link",
                    url: "https://youtu.be/rJBH-l3n2CA?si=zRS5F6S0L1n7p_Bc",
                    label: "Demo Video",
                    icon: ExternalLink
                }
                ]
            },

            // ============================
            // IMAGE
            // ============================
            {
                type: "image",
                src: "/openlens.png",
                alt: "Sentinel preview"
            },

            // ============================
            // OVERVIEW
            // ============================
            {
                type: "heading",
                level: 2,
                content: "Overview"
            },

            {
                type: "paragraph",
                content:
                "Sentinel is a GitHub App built to help open-source maintainers reduce noise and surface meaningful contributions. Instead of focusing solely on code review, Sentinel highlights contributor history, semantic similarity across past work, and low-effort PR indicators. The system is designed to make triage faster for repos that receive high volumes of community activity."
            },

            {
                type: "paragraph",
                content:
                "This MVP demonstrates a minimal but functional workflow: loading a repository, embedding all open PRs and issues, identifying related work, and presenting actionable context through a streamlined dashboard."
            },

            // ============================
            // WHAT IT DOES
            // ============================
            {
                type: "heading",
                level: 2,
                content: "What It Does (MVP)"
            },

            {
                type: "list",
                style: "bulleted",
                items: [
                "Sync any GitHub repository’s open PRs and issues into a workspace.",
                "Generate vector embeddings for each item using pgvector.",
                "Detect related or duplicate PRs and issues through semantic search.",
                "Surface contributor insights (first-time contributor vs returning).",
                "Flag weak or low-effort contributions based on metadata signals.",
                "Allow repositories to be loaded or discarded without persistence overhead."
                ]
            },

            // ============================
            // WHY IT MATTERS
            // ============================
            {
                type: "heading",
                level: 2,
                content: "Why It Matters"
            },

            {
                type: "paragraph",
                content:
                "Maintainers of active open-source projects face a constant volume of noise: duplicate PRs, malformed issues, abandoned attempts, and low-effort contributions. Reviewing them manually erodes time that could be spent improving the project."
            },

            {
                type: "list",
                style: "bulleted",
                items: [
                "Spam and duplicate PRs often disguise themselves as genuine contributions.",
                "Context switching across many historical issues slows down triage.",
                "Maintainers rarely have enough time to understand contributor patterns."
                ]
            },

            {
                type: "paragraph",
                content:
                "Sentinel uses embedding-based retrieval, contributor profiling, and simple heuristics to reduce triage time and help maintainers focus on meaningful work."
            },

            // ============================
            // TECH OVERVIEW
            // ============================
            {
                type: "heading",
                level: 2,
                content: "Technical Overview (MVP)"
            },

            {
                type: "list",
                style: "bulleted",
                items: [
                "Backend: FastAPI for webhooks, sync jobs, and insight APIs.",
                "Frontend: Next.js + Tailwind for the maintainer dashboard.",
                "Database: PostgreSQL with pgvector for embeddings and semantic lookup.",
                "Workers: Background tasks for syncing, vectorizing, and cleaning repo data.",
                "Auth: GitHub App installation flow with repo-scoped permissions."
                ]
            },

            // ============================
            // DATA FLOW
            // ============================
            {
                type: "heading",
                level: 2,
                content: "Data Flow"
            },

            {
                type: "list",
                style: "numbered",
                items: [
                "Maintainer installs the GitHub App and selects a repository.",
                "A webhook triggers the backend to enqueue a repo-load job.",
                "Workers fetch PRs and issues, generate embeddings, and store them in Postgres.",
                "Frontend retrieves insights: similar PRs, related issues, contributor history.",
                "A cleanup routine removes data when the repo workspace is closed."
                ]
            },

            // ============================
            // FEATURES
            // ============================
            {
                type: "heading",
                level: 2,
                content: "Features in MVP"
            },

            {
                type: "list",
                style: "bulleted",
                items: [
                "End-to-end GitHub App integration",
                "Repo loader with background sync",
                "pgvector-based embedding and search",
                "Similar PR/Issue retrieval",
                "Contributor metadata and history",
                "Dashboard for insight consumption",
                "Cleanup endpoints for temporary workspaces"
                ]
            },

            // ============================
            // SYSTEM ARCHITECTURE
            // ============================
            {
                type: "heading",
                level: 2,
                content: "System Architecture"
            },

            {
                type: "code",
                language: "text",
                content: `
            Backend: FastAPI
            - Webhook receiver
            - Sync jobs and embedding pipeline
            - REST API for insights

            Database: PostgreSQL + pgvector
            - pr_embeddings
            - issue_embeddings
            - contributor history

            Workers:
            - Sync worker
            - Embedding worker
            - Cleanup worker

            Frontend: Next.js Dashboard
            - PR view
            - similarity panels
            - contributor context
            `
            },

            // ============================
            // ROADMAP
            // ============================
            {
                type: "heading",
                level: 2,
                content: "Future Roadmap"
            },

            {
                type: "list",
                style: "bulleted",
                items: [
                "AI-powered classification of PRs (spam, duplicate, valuable).",
                "Contributor trust and reputation scoring.",
                "Organization-wide community health dashboards.",
                "Long-term semantic history tracking and knowledge graph generation.",
                "Deeper GitHub App permissions and automated triage suggestions."
                ]
            },

            // ============================
            // DEPLOYMENT
            // ============================
            {
                type: "heading",
                level: 2,
                content: "Deployment"
            },

            {
                type: "list",
                style: "bulleted",
                items: [
                "Local: Docker Compose (backend, frontend, Postgres).",
                "Cloud: Supabase for Postgres, Vercel for frontend.",
                "Workers deployed via Railway or Fly.io.",
                "Automatic cleanup of temporary repo data after sessions."
                ]
            },

            // ============================
            // TARGET USERS
            // ============================
            {
                type: "heading",
                level: 2,
                content: "Target Users"
            },

            {
                type: "list",
                style: "bulleted",
                items: [
                "Open-source maintainers",
                "Community managers",
                "Developer relations teams",
                "Engineering orgs with external contributors"
                ]
            }
        ]
    },
    {
        id: "retold-story",
        image: "/retold.jpg",
        alt: "Retold",
        title: "Retold – Bring Stories Back To Life.",
        description: "Retold AI transforms full movies, long-form videos, or raw .mp4 files into AI-generated cinematic trailers and human-style story retellings.",
        slug: "retold-story",
        contentBlocks: [
        // ============================
        // EMBEDS / LINKS
        // ============================
        {
            type: "embeds",
            items: [
            {
                type: "link",
                url: "https://github.com/dfordp/retold-ai",
                label: "GitHub",
                icon: FaGithub
            },
            ]
        },

        // ============================
        // HERO IMAGE
        // ============================
        {
            type: "image",
            src: "/retold.jpg",
            alt: "Retold AI preview"
        },

        // ============================
        // OVERVIEW
        // ============================
        {
            type: "heading",
            level: 2,
            content: "Overview"
        },

        {
            type: "paragraph",
            content:
            "Retold AI is an experimental multimodal system that transforms full-length movies and long-form videos into cinematic AI-generated trailers and human-style narrative summaries. Built on top of OpenAI's multimodal models, Retold analyzes an entire film, identifies emotional and narrative peaks, and retells the story in concise prose that resembles a film critic or storyteller."
        },

        {
            type: "paragraph",
            content:
            "The system also generates a short video edit using selected scenes, paired narration, and optional AI-generated music. The output includes a narrative text summary and a cinematic trailer suitable for archives, short-form content, and creative research."
        },

        // ============================
        // WHAT IT DOES
        // ============================
        {
            type: "heading",
            level: 2,
            content: "What Retold Does"
        },

        {
            type: "list",
            style: "bulleted",
            items: [
            "Analyzes entire movies scene by scene.",
            "Detects emotional peaks, tension arcs, and narrative transitions.",
            "Generates a human-style narrative summary with cinematic tone.",
            "Creates a short AI-edited trailer that reflects the film’s major beats.",
            "Outputs a text retelling and a video edit ready for sharing or archiving."
            ]
        },

        // ============================
        // INSTALLATION
        // ============================
        {
            type: "heading",
            level: 2,
            content: "Installation"
        },

        {
            type: "code",
            language: "bash",
            content: `
        # Windows only
        git clone https://github.com/dfordp/retold-ai.git
        cd retold-ai
        python3 -m pip install -r requirements.txt

        # Remove placeholder files
        Get-ChildItem -Recurse -Filter ".placeholder" | Remove-Item
        `
        },

        // ============================
        // API SETUP
        // ============================
        {
            type: "heading",
            level: 2,
            content: "API Setup"
        },

        {
            type: "paragraph",
            content:
            "Retold uses OpenAI for multimodal story comprehension and ElevenLabs for optional voice narration. Users must provide their own API keys."
        },

        {
            type: "code",
            language: "json",
            content: `
        {
        "openai_api_key": "YOUR_API_KEY",
        "elevenlabs_api_key": "YOUR_ELEVENLABS_KEY"
        }
        `
        },

        // ============================
        // PIPELINE
        // ============================
        {
            type: "heading",
            level: 2,
            content: "How Retold Works"
        },

        {
            type: "paragraph",
            content:
            "Retold follows a four-stage pipeline inspired by video understanding research: ingest, extract, retell, and render."
        },

        {
            type: "list",
            style: "numbered",
            items: [
            "Ingest: Users place .mp4 movie files into the /movies directory.",
            "Extract: Retold loads or requests subtitles/scripts for narrative parsing.",
            "Retell: GPT-OSS identifies story structure, emotional peaks, and tension arcs, producing a cinematic prose retelling.",
            "Render: Selected scenes, narration, and timing cues are combined into a short trailer produced using MoviePy and FFmpeg."
            ]
        },

        {
            type: "code",
            language: "text",
            content: `
        output/
        ├── MovieName_summary.txt
        └── MovieName_trailer.mp4
        `
        },

        // ============================
        // RUNNING
        // ============================
        {
            type: "heading",
            level: 2,
            content: "Running Retold"
        },

        {
            type: "code",
            language: "bash",
            content: `python3 main.py`
        },

        {
            type: "paragraph",
            content:
            "A small GUI appears, allowing users to select movies, start generation, and view outputs in the /output directory."
        },

        // ============================
        // OPTIONAL YOUTUBE SETUP
        // ============================
        {
            type: "heading",
            level: 2,
            content: "Optional YouTube API Setup"
        },

        {
            type: "paragraph",
            content:
            "Users may configure the YouTube API to automatically upload generated trailers. Only audited YouTube applications can publish public videos; unaudited workflows default to private uploads."
        },

        // ============================
        // EXAMPLES
        // ============================
        {
            type: "heading",
            level: 2,
            content: "Example Output"
        },

        {
            type: "paragraph",
            content:
            "Each Retold run outputs a narrative summary and a one-minute cinematic edit based on selected scenes. These outputs support storytelling research, film metadata, content creation, and automated summarization workflows."
        },

        // ============================
        // RESEARCH BACKGROUND
        // ============================
        {
            type: "heading",
            level: 2,
            content: "Research Background"
        },

        {
            type: "paragraph",
            content:
            "Retold emerged from a weekend experiment exploring whether short-form cinematic explainers could be automated using modern multimodal models. The project draws on research in video segmentation, emotion detection, and narrative extraction."
        },

        {
            type: "list",
            style: "bulleted",
            items: [
            "Scene Segmentation: Tencent SCRL – representation learning for video scenes.",
            "Emotion Detection: Imentiv for multimodal emotional cues.",
            "Tone Alignment: EMSYNC for soundtrack emotion alignment.",
            "Story Generation: GPT-OSS for long-form narrative rewriting.",
            "Voice: ElevenLabs for multi-character narration.",
            "Rendering: MoviePy and FFmpeg for automated edit generation.",
            "Music: Mubert for emotion-aware background audio."
            ]
        },

        // ============================
        // STORY / MOTIVATION
        // ============================
        {
            type: "heading",
            level: 2,
            content: "Why I Built Retold"
        },

        {
            type: "paragraph",
            content:
            "Retold was built as a creative exploration into whether AI can capture the emotional rhythm of a story—not just summarize plot points. The system analyzes entire films, identifies narrative beats, rewrites them in human-like prose, and then pairs the text with relevant scenes to form a cohesive short trailer. The result is an early experiment in automated cinematic storytelling."
        },

        // ============================
        // FUTURE WORK
        // ============================
        {
            type: "heading",
            level: 2,
            content: "Future Development"
        },

        {
            type: "list",
            style: "bulleted",
            items: [
            "Automated music scoring aligned to emotional tone.",
            "More advanced scene selection heuristics.",
            "Shot-level semantic clustering.",
            "Full multimodal input (video + audio + script) for better coherence.",
            "Alternative narration styles with custom voice models."
            ]
        }
    ]
    },
    {
        id: "aarchid-monitoring-system",
        image: "/aarchid.JPG",
        alt: "Aarchid",
        title: "Aarchid - Flora Monitoring System",
        description: "This application helps individuals by providing plant care assistance using Google's Gemini Pro models for vision and text analysis.",
        slug: "aarchid-monitoring-system",
        contentBlocks: [
            // ============================
            // EMBEDS / LINKS
            // ============================
            {
                type: "embeds",
                items: [
                {
                    type: "link",
                    url: "https://aarkid-client.vercel.app/",
                    label: "Live",
                    icon: ExternalLink
                },
                {
                    type: "link",
                    url: "https://github.com/dfordp/aarchid-api",
                    label: "Github",
                    icon: FaGithub
                },
                ]
            },

            // ============================
            // IMAGE
            // ============================
            {
                type: "image",
                src: "/aarchid.JPG",
                alt: "Aarchid preview"
            },

            // ============================
            // OVERVIEW
            // ============================
            {
                type: "heading",
                level: 2,
                content: "Overview"
            },

            {
                type: "paragraph",
                content:
                "Aarchid is an individual-level flora monitoring system that uses Gemini Pro’s multimodal capabilities to help people track, understand, and care for the plants in their environment. The platform combines vision models, structured plant profiles, lifecycle analytics, and conversational assistance to deliver a complete, AI-assisted care companion."
            },

            {
                type: "paragraph",
                content:
                "The system is designed for long-term use, allowing plants to be monitored through their full lifecycle—capturing early signs of stress, recording growth velocities, and adapting care routines based on local climate and behavioral feedback."
            },

            // ============================
            // KEY FUNCTIONS
            // ============================
            {
                type: "heading",
                level: 2,
                content: "Core Capabilities"
            },

            {
                type: "list",
                style: "bulleted",
                items: [
                "AI-powered health detection using Gemini Pro vision models.",
                "Lifecycle tracking with weekly progress snapshots.",
                "Plant-specific task management and reminders.",
                "Smart routines that adapt based on performance and context.",
                "Conversational support with Gemini Pro for problem diagnosis.",
                "Structured analytics around species, health, and growth patterns."
                ]
            },

            // ============================
            // HOW IT WORKS
            // ============================
            {
                type: "heading",
                level: 2,
                content: "How It Works"
            },

            {
                type: "paragraph",
                content:
                "Aarchid operates on a dual-flow model: a vision-analysis pipeline for health detection and a structured analytics layer for lifecycle tracking. The system observes, interprets, and adapts over time to produce tailored care recommendations."
            },

            {
                type: "list",
                style: "numbered",
                items: [
                "User captures an image of their plant or logs an update.",
                "Gemini Pro analyzes the image for species ID, health cues, and stress signals.",
                "Aarchid updates the plant’s historical record and computes growth deltas.",
                "Smart routines generate or adjust tasks based on the new state.",
                "A conversational agent assists with diagnosis, care explanations, or custom queries."
                ]
            },

            // ============================
            // FEATURE DETAILS
            // ============================
            {
                type: "heading",
                level: 2,
                content: "Feature Details"
            },

            {
                type: "list",
                style: "bulleted",
                items: [
                "Health Detection: Identifies disease markers, discoloration, or lack of nutrients.",
                "Growth Analytics: Tracks weekly changes through visual and numerical metrics.",
                "Smart Routines: Task scheduling influenced by climate, soil, and historical data.",
                "Performance Insights: Benchmarks plants against internal scoring systems.",
                "In-App Chat: Users can ask questions or request detailed care explanations."
                ]
            },

            // ============================
            // SYSTEM ARCHITECTURE
            // ============================
            {
                type: "heading",
                level: 2,
                content: "System Architecture"
            },

            {
                type: "paragraph",
                content:
                "Aarchid separates vision inference, data storage, and task management into distinct layers. The backend manages image ingestion, health detection, and historical tracking while the client handles state, visualization, and user interaction."
            },

            {
                type: "code",
                language: "text",
                content: `
            Client (React/Next.js)
            ├── Plant Dashboard
            ├── Health Scan Interface
            ├── Lifecycle Timeline
            └── Gemini-powered Chat

            API (Express.js)
            ├── Vision Analysis with Gemini Pro
            ├── Plant Profiles & Lifecycle State
            ├── Image Upload (Cloudinary)
            ├── Task Engine
            └── MongoDB Persistence
            `
            },

            // ============================
            // TECH STACK
            // ============================
            {
                type: "heading",
                level: 2,
                content: "Technology Stack"
            },

            {
                type: "list",
                style: "bulleted",
                items: [
                "Frontend: React.js / Next.js (client under development), Tailwind CSS, ShadCN UI",
                "Backend: Express.js, MongoDB, Mongoose",
                "AI: Google Gemini Pro (vision + text)",
                "Storage: Cloudinary",
                "Infrastructure: Firebase (initial client), Docker-ready API"
                ]
            },

            // ============================
            // CLIENT SETUP
            // ============================
            {
                type: "heading",
                level: 2,
                content: "Client Setup"
            },

            {
                type: "code",
                language: "bash",
                content: `
            git clone https://github.com/dfordp/aarkid-client.git
            cd aarkid-client
            npm install
            `
            },

            {
                type: "paragraph",
                content: "Environment configuration is defined in `.env.example`:"
            },

            {
                type: "code",
                language: "text",
                content: `
            VITE_API_KEY=
            VITE_AUTH_DOMAIN=
            VITE_PROJECT_ID=
            VITE_STORAGE_BUCKET=
            VITE_MESSAGING_SENDER_ID=
            VITE_APP_ID=
            VITE_MEASUREMENT_ID=
            VITE_BACKEND_URL=
            `
            },

            // ============================
            // API SETUP
            // ============================
            {
                type: "heading",
                level: 2,
                content: "API Setup"
            },

            {
                type: "code",
                language: "bash",
                content: `
            git clone https://github.com/dfordp/aarkid-api.git
            cd aarkid-api
            npm install
            `
            },

            {
                type: "code",
                language: "text",
                content: `
            AUTH_SECRET=
            CLOUDINARY_API_KEY=
            CLOUDINARY_API_SECRET=
            CLOUDINARY_CLOUD_NAME=
            GEMINI_API_KEY=
            MONGODB_URL=
            `
            },

            // ============================
            // FUTURE ROADMAP
            // ============================
            {
                type: "heading",
                level: 2,
                content: "Future Development"
            },

            {
                type: "list",
                style: "bulleted",
                items: [
                "Community-based health datasets for improved species accuracy.",
                "Predictive growth modeling via time-series analysis.",
                "Climate-linked care models using environmental APIs.",
                "Cross-device syncing and multi-plant dashboards.",
                "Real-time anomaly alerts and proactive care recommendations."
                ]
            }
        ]
    }
];
