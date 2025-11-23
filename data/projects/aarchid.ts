import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { ContentBlock } from "../projects";

export const aarchidData : ContentBlock[] = [
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
                "The system is designed for long-term use, allowing plants to be monitored through their full lifecycle, capturing early signs of stress, recording growth velocities, and adapting care routines based on local climate and behavioral feedback."
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