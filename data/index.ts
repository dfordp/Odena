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
  type: "link";
  url: string;
  label: string;
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
    alt: "Hackmate",
    title: "Hackmate",
    description: "A swipe-based matchmaking platform designed to help founders and builders discover potential co-founders, collaborators, or indie hackers",
    slug: "hackmate-match-making",
    contentBlocks : [
    {
        type: "heading",
        level: 1,
        content: "Hackmate"
    },

    {
        type: "paragraph",
        content:
        "Hackmate is an experimental, swipe-based matchmaking system designed to help founders, builders, and independent hackers discover aligned collaborators quickly. Instead of long profiles and generic networking platforms, Hackmate focuses on intent, skills, and mutual interest as the primary signals for forming new teams."
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
        "Hackmate began as a research project exploring whether collaboration discovery could be made as fast and intuitive as swiping. The platform reduces networking friction by presenting one potential collaborator at a time, capturing just enough structure (skills, intent, experience) to surface meaningful matches without demanding long-form bios."
    },

    {
        type: "list",
        style: "bulleted",
        items: [
        "Users create lightweight, skill-focused profiles.",
        "The app shows one builder at a time for a right/left swipe.",
        "When both users swipe right, they instantly appear in each other's match feed.",
        "All match logic runs through an in-memory Redis layer for real-time performance."
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
        "Hackmate uses a two-path model: a fast interaction path powered by Redis, and a slow persistence path backed by PostgreSQL. All real-time matching, swipe storage, and profile caching occur in the Redis fast path, ensuring minimal latency and immediate feedback."
    },

    {
        type: "list",
        style: "numbered",
        items: [
        "User fills a short profile describing skills, experience, and collaboration goals.",
        "Hackmate serves relevant profiles for swiping.",
        "Each swipe writes to a Redis SET to avoid duplicates.",
        "Mutual swipes trigger a match, added to a Redis LIST for each user.",
        "Users view matches in a real-time feed powered by WebSockets/SSE."
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
        "Swipe-based discovery optimized for quick decision-making.",
        "Real-time matches with low-latency Redis operations.",
        "Profiles built around skills, experience, and intent.",
        "Mutual-only visibility to reduce noise and awkwardness.",
        "Integrated Redis caching layer for real-time responsiveness.",
        "Clean, minimal UI focused on efficient evaluation."
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
        "The system separates state into two layers: a persistent relational layer (PostgreSQL) and a volatile, high-speed matching layer (Redis). This separation allows Hackmate to support real-time collaboration discovery with minimal resource overhead."
    },

    {
        type: "code",
        language: "text",
        content: `
    Likes Given (SET)        likes:<user_id>
    Match Queue (LIST)       matches:<user_id>
    User Profile Cache (HASH) user:<user_id>
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
        "SET stores all swipes from a given user, preventing duplicates.",
        "LIST stores confirmed matches in chronological order.",
        "HASH stores cached profile data to reduce DB fetches during swipe sessions."
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
        "**Frontend:** Next.js, Tailwind CSS",
        "**Backend:** Next.js API routes, Prisma, PostgreSQL",
        "**Matching Engine:** Redis (SETs, LISTs, HASHes)",
        "**Authentication:** Clerk",
        "**Hosting:** Vercel",
        "**Dev Environment:** Docker Compose (app + Postgres + Redis)"
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
        "Role and interest-based filtering.",
        "Time zone and region-aware matching.",
        "Lightweight pitch cards and project summaries.",
        "Improved scoring and ranking logic.",
        "Enhanced match feed with conversation prompts."
        ]
    },

    {
        type: "heading",
        level: 2,
        content: "Repository & Project Links"
    },

    {
        type: "embeds",
        items: [
        { type: "link", url: "https://hackmate.app", label: "Live: hackmate.app" },
        { type: "link", url: "https://peerlist.io", label: "Hackmate on Peerlist" },
        { type: "link", url: "https://producthunt.com", label: "Hackmate on Product Hunt" },
        { type: "link", url: "https://github.com/dfordp/hackmate-rework", label: "GitHub Repository" }
        ]
    }
    ]
  },
];