import { ExternalLink } from "lucide-react";
import { ContentBlock } from "../projects";
import { FaGithub } from "react-icons/fa6";

export const onlynerdsData : ContentBlock[] = [
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