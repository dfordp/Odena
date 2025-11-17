import { ContentBlock } from "../projects";
import { FaGithub } from "react-icons/fa6";

export const retoldData : ContentBlock[] = [
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