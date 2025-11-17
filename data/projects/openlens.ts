import { FaGithub } from "react-icons/fa"
import { ContentBlock } from "../projects"
import { ExternalLink } from "lucide-react"

export const openlensData : ContentBlock[] = [
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