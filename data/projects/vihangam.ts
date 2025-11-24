import { ExternalLink } from "lucide-react";
import { ContentBlock } from "../projects";
import { FaGithub } from "react-icons/fa6";

export const vihangamData: ContentBlock[] = [
  /* -------------------------------------------------------
     HERO IMAGE
  ------------------------------------------------------- */
  {
    type: "image",
    src: "/vihangam.jpeg",
    alt: "Vihangam preview",
  },

  /* -------------------------------------------------------
     OVERVIEW
  ------------------------------------------------------- */
  {
    type: "heading",
    level: 2,
    content: "Overview",
  },
  {
    type: "paragraph",
    content:
      "Vihangam is a foundational, multi-resolution geospatial model built from first principles designed to unify decades of optical and SAR satellite missions from 5 m to 100 m resolution into a single, adaptive, analytics-ready baseline. Covering the entire Indo-Pacific, it powers AI/ML training, monitoring systems, and large-scale operational decisions with clean, harmonized and physically consistent geospatial outputs.",
  },

  {
    type: "image",
    src: "/vihangam-data.JPG",
    alt: "Vihangam sensor fusion flow",
  },

  /* -------------------------------------------------------
     HOW IT WAS BUILT (ALIGNED WITH APPROACH 1 + 2)
  ------------------------------------------------------- */
  {
    type: "heading",
    level: 2,
    content: "How Vihangam Was Built",
  },
  {
    type: "paragraph",
    content:
      "Vihangam follows Odena’s first-principles engineering philosophy: no template architectures, no black-box assumptions. Every component from harmonization to multi-scale fusion is built around the raw physics of Earth-observation signals, resolution mismatches, seasonal drift, and cross-sensor inconsistencies. The model relies on adaptive, self-reconfiguring pipelines that reshape themselves around sensor behavior, cloud cover, temporal variation, and scene complexity.",
  },

  {
    type: "list",
    style: "bulleted",
    items: [
      "Cross-sensor harmonization over AWiFS, LISS-3/4, Sentinel-2, Landsat-8, EOS-04 SAR.",
      "Multi-temporal smoothing (Savitzky–Golay, Whittaker–Eilers) for stable long-range consistency.",
      "PIF-based radiometric normalization and per-mission physical alignment.",
      "A multi-resolution spatial pyramid (5m → 10m → 23m → 56m → 100m) encoded as STAC tiles.",
      "Self-supervised learning via Multi-MAE, cross-scale ViT, and Swin-Transformer fusion.",
    ],
  },

  {
    type: "image",
    src: "/vihangam-architecture.JPG",
    alt: "Vihangam processing architecture",
  },

  /* -------------------------------------------------------
     ARCHITECTURE (Approach 1 + 5)
  ------------------------------------------------------- */
  {
    type: "heading",
    level: 2,
    content: "Architectural Innovations",
  },
  {
    type: "list",
    style: "bulleted",
    items: [
      "Cross-Scale Attention merging high-resolution and low-resolution features in a physically meaningful way.",
      "SAR-aware ingestion with speckle-adaptive fusion modules for EOS-04.",
      "Multi-headed spectral pathways preserving texture-level signals and long-range topographic structure.",
      "3D reconstruction layers generating continuous terrain, semantic surfaces, and elevation-aware layers.",
    ],
  },

  {
    type: "image",
    src: "/vihangam-architecture2.JPG",
    alt: "3D Indo-Pacific reconstruction",
  },

  {
    type: "paragraph",
    content:
      "These components allow Vihangam to construct a unified 3D representation of the Indo-Pacific terrain, land-cover, SAR-derived structure, and elevation layers forming a seamless, zoomable view that remains stable across missions, sensors, and resolutions.",
  },

  /* -------------------------------------------------------
     ODENA INTEGRATION (Approach 2 + 5)
  ------------------------------------------------------- */
  {
    type: "heading",
    level: 2,
    content: "Integration with Odena",
  },
  {
    type: "paragraph",
    content:
      "Vihangam plugs directly into Odena’s distributed compute stack. Each stage harmonization, preprocessing, inference, and 3D tile generation is deployed as a containerized micro-operator. This ensures scalability, observability, and clean boundaries between data flow and compute logic.",
  },

  {
    type: "list",
    style: "bulleted",
    items: [
      "Harmonization, inference, and 3D mapping as isolated container services.",
      "Versioned model registry capturing checkpoints, preprocessing logs, and lineage.",
      "REST APIs for bounding-box inference, semantic outputs, and 3D mesh tile retrieval.",
      "Interactive 3D Indo-Pacific viewer inside Odena for exploration and export.",
      "Native support for S3, Azure Blob, GCP Storage, and private object-storage backends.",
    ],
  },

  /* -------------------------------------------------------
     CAPABILITIES
  ------------------------------------------------------- */
  {
    type: "heading",
    level: 2,
    content: "Key Technical Capabilities",
  },
  {
    type: "list",
    style: "bulleted",
    items: [
      "Fusion of optical + SAR data from all major Indo-Pacific satellites.",
      "Unified multi-resolution learning spanning 5 m to 100 m.",
      "Radiometric and temporal harmonization with PIF/MAD pipelines.",
      "STAC-compliant metadata, COG tiles, and reproducible governance.",
      "Outputs: cloud-free composites, semantic maps, terrain meshes, change detection.",
      "Optimized for cloud-native clusters and on-premise high-security deployments.",
    ],
  },

  /* -------------------------------------------------------
     IMPACT
  ------------------------------------------------------- */
  {
    type: "heading",
    level: 2,
    content: "Impact & Applications",
  },
  {
    type: "list",
    style: "bulleted",
    items: [
      "Accurate LULC mapping across mixed-resolution satellites.",
      "Near real-time disaster mapping using fused optical + SAR imagery.",
      "Stable geospatial baselines for training AI models without sensor drift.",
      "Climate monitoring, deforestation tracking, agricultural planning.",
      "High-fidelity topographic reconstruction for national and environmental planning.",
      "Future-ready adaptable to new satellite missions and extraterrestrial datasets.",
    ],
  },

  /* -------------------------------------------------------
     WHY IT MATTERS
  ------------------------------------------------------- */
  {
    type: "heading",
    level: 2,
    content: "Why Vihangam Matters",
  },
  {
    type: "paragraph",
    content:
      "Most geospatial pipelines break when faced with inconsistent sensors, changing resolutions, or poor radiometric alignment. Vihangam corrects these issues at the source by establishing a harmonized physical baseline and applying a cross-scale, self-supervised architecture on top of it. The result is a production-grade geospatial foundation for today's Earth-observation workloads and a future-proof layer for upcoming space missions.",
  },
];
