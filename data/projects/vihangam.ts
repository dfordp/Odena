import { ExternalLink } from "lucide-react";
import { ContentBlock } from "../projects";
import { FaGithub } from "react-icons/fa6";

export const vihangamData: ContentBlock[] = [
  /* -------------------------------------------------------
     PROJECT HERO IMAGE
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
      "Vihangam is a foundational, multi-resolution geospatial model covering the entire Indo-Pacific region. It merges satellite data across optical and SAR sensors from 5 m to 100 m resolution into a unified, zoomable 3D geospatial engine. Built for AI/ML teams, defense, climate science, and geospatial platforms, Vihangam provides harmonized, analytics-ready datasets for model training, monitoring systems, and operational decision-making.",
  },

  /* -------------------------------------------------------
     IMAGE SLOT: GEOSPATIAL FLOW
  ------------------------------------------------------- */
  {
    type: "image",
    src: "/vihangam-data.JPG",
    alt: "Vihangam data flow",
  },

  /* -------------------------------------------------------
     HOW IT WAS BUILT
  ------------------------------------------------------- */
  {
    type: "heading",
    level: 2,
    content: "How Vihangam Was Built",
  },
  {
    type: "paragraph",
    content:
      "Vihangam is engineered using a data-first architecture combining rigorous cross-sensor harmonization with a self-supervised, cross-scale transformer backbone. The system is optimized for noisy, high-variability remote-sensing conditions clouds, seasonal drift, differing radiometry, and multi-mission inconsistencies.",
  },

  {
    type: "list",
    style: "bulleted",
    items: [
      "Cross-sensor harmonization across AWiFS, LISS-3/4, Sentinel-2, Landsat-8, and EOS-04 SAR.",
      "Multi-temporal smoothing using Savitzky–Golay and Whittaker–Eilers filters.",
      "PIF-based radiometric normalization and per-sensor physical alignment.",
      "A multi-scale pyramid (5 m → 100 m) encoded as STAC-compliant tiles.",
      "Self-supervised pretraining using Multi-MAE, multi-scale ViT, and Swin Transformer fusion.",
    ],
  },

  /* -------------------------------------------------------
     ARCHITECTURE IMAGE SLOT
  ------------------------------------------------------- */
  {
    type: "image",
    src: "/vihangam-architecture.JPG",
    alt: "Vihangam architecture",
  },

  /* -------------------------------------------------------
     CORE ARCHITECTURE DETAILS
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
      "Cross-Scale Attention for fusing high-res and low-res features.",
      "SAR-specific ingestion paths for EOS-04 with speckle-aware normalization.",
      "Spectral-pathway fusion combining texture-level signals with global topographic cues.",
      "3D reconstruction layers generating continuous terrain and semantic layers.",
    ],
  },

  /* -------------------------------------------------------
     3D MODEL IMAGE SLOT
  ------------------------------------------------------- */
  {
    type: "image",
    src: "/vihangam-architecture2.JPG",
    alt: "3D topographic reconstruction",
  },

  {
    type: "paragraph",
    content:
      "The model outputs multi-layer 3D maps land cover, terrain, SAR-derived structures, elevation layers creating a seamless, zoomable understanding of the Indo-Pacific geography.",
  },

  /* -------------------------------------------------------
     INTEGRATION WITH ODENA
  ------------------------------------------------------- */
  {
    type: "heading",
    level: 2,
    content: "Integration with Odena",
  },
  {
    type: "paragraph",
    content:
      "Vihangam integrates natively into Odena’s distributed compute, packaging preprocessing, inference, and visualization into scalable microservices.",
  },
  {
    type: "list",
    style: "bulleted",
    items: [
      "Preprocessing, harmonization, and inference as containerized services.",
      "Model registry storing checkpoints, metadata, and reproducibility logs.",
      "REST APIs for tile-based or bounding box-based inference.",
      "A built-in 3D Indo-Pacific viewer for interactive exploration.",
      "Cloud-ready connectors: S3, Azure Blob, GCP Storage, and custom object stores.",
    ],
  },
  /* -------------------------------------------------------
     KEY TECHNICAL CAPABILITIES
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
      "Optical + SAR multi-sensor fusion across all major Indo-Pacific satellites.",
      "Unified multi-resolution learning (5 m to 100 m pyramids).",
      "Radiometric, spectral, and temporal harmonization using PIF/MAD normalization.",
      "STAC-compliant metadata and COG tiles for scalable data governance.",
      "High-quality outputs: cloud-free composites, semantic layers, 3D meshes, change maps.",
      "Optimized for cloud-native and on-premise environments.",
    ],
  },

  /* -------------------------------------------------------
     APPLICATIONS
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
      "Accurate LULC mapping across inconsistent satellite sources.",
      "Near real-time disaster mapping using optical + SAR fusion.",
      "Stable geospatial inputs for AI model training without sensor drift.",
      "Climate monitoring, deforestation analysis, agricultural planning.",
      "High-fidelity terrain reconstruction for national and regional planning.",
      "Supports upcoming satellite missions and extraterrestrial datasets.",
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
      "Most geospatial workflows suffer from inconsistent sensors, variable resolutions, poor radiometric alignment, and difficulty scaling across regions. Vihangam solves this by unifying decades of satellite missions into a harmonized physical baseline and powering it with a modern, cross-scale self-supervised model. The result is a production-ready foundation for any geospatial AI today, and for future space missions.",
  },
];
