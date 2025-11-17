import { aarchidData } from "./projects/aarchid";
import { hackmateData } from "./projects/hackmate";
import { zenithData } from "./projects/zenith";
import { onlynerdsData } from "./projects/onlynerds";
import { openlensData } from "./projects/openlens";
import { retoldData } from "./projects/retold";

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



export interface Project {
    id: string;
    image: string;
    alt: string;
    title: string;
    description: string;
    slug: string;
    contentBlocks: ContentBlock[];
}



export const projects : Project[] = [
    {
        id: "hackmate-match-making",
        image: "/hackmate.jpeg",
        alt: "HackMate",
        title: "HackMate - The CoFounder MatchMaking",
        description: "A swipe-based matchmaking platform designed to help founders and builders discover potential co-founders, collaborators, or indie hackers",
        slug: "hackmate-match-making",
        contentBlocks: hackmateData
    },
    {
        id: "zenith-ai-career-coach",
        image: "/zenith.png",
        alt: "Zenith",
        title: "Zenith – AI Career Coach",
        description: "An AI-driven career platform offering tailored resume tools, real-time industry insights, and adaptive skill assessments.",
        slug: "zenith-ai-career-coach",
        contentBlocks: zenithData,
    },
    {
        id: "onlynerds-edtech",
        image: "/onlynerds.jpeg",
        alt: "OnlyNerds",
        title: "OnlyNerds – The Decentralized Learning Platform",
        description: "An AI-driven career platform offering tailored resume tools, real-time industry insights, and adaptive skill assessments.",
        slug: "onlynerds-edtech",
        contentBlocks: onlynerdsData,
    },
    {
        id: "openlens-dashboard",
        image: "/openlens.png",
        alt: "OpenLens",
        title: "OpenLens – Community Focused Github App",
        description: "OpenLens focuses on community health, contribution quality, and actionable signals so maintainers can spend less time filtering spam or duplicates, and more time merging meaningful work.",
        slug: "openlens-dashboard",
        contentBlocks: openlensData
    },
    {
        id: "retold-story",
        image: "/retold.jpg",
        alt: "Retold",
        title: "Retold – Bring Stories Back To Life.",
        description: "Retold AI transforms full movies, long-form videos, or raw .mp4 files into AI-generated cinematic trailers and human-style story retellings.",
        slug: "retold-story",
        contentBlocks: retoldData
    },
    {
        id: "aarchid-monitoring-system",
        image: "/aarchid.JPG",
        alt: "Aarchid",
        title: "Aarchid - Flora Monitoring System",
        description: "This application helps individuals by providing plant care assistance using Google's Gemini Pro models for vision and text analysis.",
        slug: "aarchid-monitoring-system",
        contentBlocks : aarchidData
    }
];
