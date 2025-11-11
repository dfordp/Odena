import type { Metadata } from "next";
import { Outfit, Space_Mono } from "next/font/google";
import "./globals.css";

// Correct variable assignments to match CSS custom properties
const fontSans = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const fontMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"], 
});

export const metadata: Metadata = {
  title: "Odena – Intelligent Data Segregation, Ranking, and Insights Systems",
  description:
    "Odena builds research-grade systems that help teams organize, rank, and interpret large datasets across code, media, and tabular formats. Our architecture leverages zero-shot classification and adaptive operators to deliver fault-tolerant, high-throughput data intelligence pipelines.",
  keywords: [
    "Odena",
    "data ranking",
    "data segregation",
    "dataset cleaning",
    "AI data preprocessing",
    "zero-shot classification",
    "machine learning infrastructure",
    "data quality systems",
    "data engineering research",
    "LLM dataset optimization",
    "Databricks integration",
    "data insights automation"
  ],
  authors: [{ name: "Odena Research Collective" }],
  openGraph: {
    title: "Odena – Organize and Rank Data Intelligently",
    description:
      "Odena develops scalable systems for ranking, segregating, and analyzing datasets with adaptive operators and zero-shot classification. Built for research and data-driven teams.",
    url: "https://www.odena.io/",
    siteName: "Odena",
    images: [
      {
        url: "https://www.odena.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "Odena – Data Ranking and Insights",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Odena – Smarter Data Ranking & Insights",
    description:
      "Odena helps teams build cleaner, smarter datasets with adaptive, fault-tolerant data processing systems.",
    creator: "@odena",
    images: ["https://www.odena.io/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        // Only use the relevant font variable classes, not the font constructor variable names (avoid duplicating geistMono)
        className={`${fontSans.variable} ${fontMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
