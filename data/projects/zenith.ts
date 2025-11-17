import { ExternalLink } from "lucide-react";
import { ContentBlock } from "../projects";
import { FaGithub } from "react-icons/fa6";

export const zenithData : ContentBlock[] = [
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