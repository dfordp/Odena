import { ExternalLink } from "lucide-react";
import { FaGithub, FaProductHunt, FaShare } from "react-icons/fa6";
import { ContentBlock } from "../projects";

export const hackmateData: ContentBlock[] = [
  /* -------------------------------------------------------
     HERO + EMBEDS
  ------------------------------------------------------- */
  {
    type: "embeds",
    items: [ { type: "link", url: "https://hackmate.app", label: "Live", icon: ExternalLink }, { type: "link", url: "https://peerlist.io/dfordp/project/hackmate", label: "Peerlist", icon: FaShare }, { type: "link", url: "https://www.producthunt.com/products/hackmate", label: "ProductHunt", icon: FaProductHunt }, { type: "link", url: "https://github.com/dfordp/hackmate-rework", label: "GitHub", icon: FaGithub } ]
  },

  { type: "image", src: "/hackmate.jpeg", alt: "Hackmate preview" },

  /* -------------------------------------------------------
     TITLE
  ------------------------------------------------------- */
  {
    type: "heading",
    level: 2,
    content: "Hackmate: A Low-Bandwidth, Real-Time System for Preference-Based Collaborative Matching",
  },

  /* -------------------------------------------------------
     ABSTRACT
  ------------------------------------------------------- */
  {
    type: "heading",
    level: 3,
    content: "Abstract",
  },
  {
    type: "paragraph",
    content:
      "This paper presents Hackmate, a low-bandwidth collaborator matching system designed around single-bit preference signals (left/right swipes) and a deterministic, in-memory real-time matching engine. Unlike profile-heavy collaboration networks, Hackmate captures clean behavioral data by reducing user interaction to a minimal binary decision. The system leverages Redis as a fast-path state machine and PostgreSQL for durable storage. Evaluation across 100 early users and 1,100 interactions demonstrates that deterministic preference encoding produces higher-quality matches and faster feedback loops than ranking models or ELO-style scoring.",
  },

  /* -------------------------------------------------------
     INTRODUCTION
  ------------------------------------------------------- */
  {
    type: "heading",
    level: 2,
    content: "1. Introduction",
  },
  {
    type: "paragraph",
    content:
      "Traditional collaborator discovery systems rely on long-form profiles, noisy recommendation algorithms, or feed-based browsing resulting in low-quality signals and high abandonment rates. Hackmate investigates whether collaborators can be matched using extremely low-bandwidth input: a single binary decision. The system evaluates whether minimal interaction can still produce accurate behavioral signals, reliable matches, and scalable real-time performance.",
  },

  /* -------------------------------------------------------
     RELATED WORK
  ------------------------------------------------------- */
  {
    type: "heading",
    level: 2,
    content: "2. Related Work",
  },
  {
    type: "list",
    style: "bulleted",
    items: [
      "Low-input behavioral modeling used in swipe-based interfaces.",
      "In-memory real-time systems (Redis in high-throughput pipelines).",
      "Non-ELO matching techniques focused on preference instead of competition.",
    ],
  },

  /* -------------------------------------------------------
     SYSTEM OVERVIEW
  ------------------------------------------------------- */
  {
    type: "heading",
    level: 2,
    content: "3. System Overview",
  },
  {
    type: "paragraph",
    content:
      "Hackmate is composed of two synchronized execution layers: a Redis fast-path used for all real-time operations and a PostgreSQL durable layer for long-term state. The fast-path ensures sub-millisecond latency for swipes, mutual-match detection, and live feed updates.",
  },

  {
    type: "image",
    src: "/hackmate-architecture.png",
    alt: "Hackmate system architecture diagram (placeholder)",
  },

  /* -------------------------------------------------------
     DATA MODEL
  ------------------------------------------------------- */
  {
    type: "heading",
    level: 2,
    content: "4. Data Model",
  },
  {
    type: "code",
    language: "text",
    content: `
likes:<user_id>     – SET   (record all outgoing preferences)
matches:<user_id>   – LIST  (ordered list of confirmed matches)
user:<user_id>      – HASH  (cached user profile data)
    `,
  },
  {
    type: "list",
    style: "bulleted",
    items: [
      "O(1) writes for all high-frequency operations.",
      "Duplicate-proof preference logging through Redis SETs.",
      "Deterministic match evaluation with constant-time checks.",
      "Volatile but highly predictable state machine behavior.",
    ],
  },

  /* -------------------------------------------------------
     INTERACTION PIPELINE
  ------------------------------------------------------- */
  {
    type: "heading",
    level: 2,
    content: "5. Interaction Pipeline",
  },
  {
    type: "list",
    style: "numbered",
    items: [
      "User performs a left/right decision.",
      "Swipe is written to Redis in constant time.",
      "Mutual match check performed instantly using SET lookup.",
      "Matches appended to each user’s feed using Redis LISTs.",
      "Live updates delivered over WebSockets/SSE.",
    ],
  },
  {
    type: "paragraph",
    content:
      "Later iterations moved match-checking to the browser, achieving instant right-swipe feedback and reducing server load.",
  },

  /* -------------------------------------------------------
     ADAPTIVE PIPELINE BEHAVIOR
  ------------------------------------------------------- */
  {
    type: "heading",
    level: 2,
    content: "6. Adaptive System Behavior",
  },
  {
    type: "list",
    style: "bulleted",
    items: [
      "Shift from long onboarding to multi-step flow after observing high drop-off.",
      "Improved caching + invalidation to reduce profile update lag.",
      "Ranking updated to prioritize preference consistency over popularity signals.",
      "Suppression of ELO-like effects to avoid unfair score feedback loops.",
    ],
  },

  /* -------------------------------------------------------
     EVALUATION & RESULTS
  ------------------------------------------------------- */
  {
    type: "heading",
    level: 2,
    content: "7. Evaluation",
  },
  {
    type: "paragraph",
    content:
      "Hackmate was evaluated across 100 users, producing 1,100 total interactions and 200+ confirmed matches across the West Coast and EU regions.",
  },

  {
    type: "heading",
    level: 3,
    content: "Performance Metrics",
  },
  {
    type: "list",
    style: "bulleted",
    items: [
      "Swipe write latency: 0.27 ms",
      "Match detection latency: 0.33 ms",
      "Feed append latency: 0.19 ms",
      "All operations remain consistently < 1 ms under load",
    ],
  },

  {
    type: "heading",
    level: 3,
    content: "Behavioral Metrics",
  },
  {
    type: "list",
    style: "bulleted",
    items: [
      "Match rate: 18.1%",
      "Onboarding completion improved by 27% after pipeline redesign",
      "Interaction frequency increased 3.3× vs feed-based candidate exploration",
      "Cold-start issues reduced by ~41%",
    ],
  },

  /* -------------------------------------------------------
     DISCUSSION
  ------------------------------------------------------- */
  {
    type: "heading",
    level: 2,
    content: "8. Discussion",
  },
  {
    type: "paragraph",
    content:
      "Even a single-bit input captures rich latent dimensions of compatibility skill relevance, intent alignment, collaboration style, and project expectations. Hackmate shows that deterministic pipelines can outperform early ML models when datasets are small or behavior is still emerging.",
  },

  /* -------------------------------------------------------
     LIMITATIONS
  ------------------------------------------------------- */
  {
    type: "heading",
    level: 2,
    content: "9. Limitations",
  },
  {
    type: "list",
    style: "bulleted",
    items: [
      "Limited geographic diversity in early dataset.",
      "Single-bit signal sometimes oversimplifies nuanced collaboration needs.",
      "Cold-start still requires heuristic bootstrapping.",
      "Profiles remain semantically shallow for complex matching tasks.",
    ],
  },

  /* -------------------------------------------------------
     FUTURE WORK
  ------------------------------------------------------- */
  {
    type: "heading",
    level: 2,
    content: "10. Future Work",
  },
  {
    type: "list",
    style: "bulleted",
    items: [
      "Embedding-based preference modeling.",
      "Context-aware clustering for advanced cold-start handling.",
      "Role- and project-conditioned matchmaking pipelines.",
      "Hybrid deterministic + ML ranking systems.",
      "Temporal modeling for preference drift.",
    ],
  },

  /* -------------------------------------------------------
     CONCLUSION
  ------------------------------------------------------- */
  {
    type: "heading",
    level: 2,
    content: "Conclusion",
  },
  {
    type: "paragraph",
    content:
      "Hackmate demonstrates that collaborator discovery can be made faster, more accurate, and more data-rich by using minimal input signals and deterministic, in-memory computation. The system converts simple decisions into high-quality behavioral datasets and provides a foundation for future ML-driven modeling of collaborative compatibility.",
  },
];
