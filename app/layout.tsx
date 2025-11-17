import type { Metadata } from "next";
import { Outfit, Space_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/navbar";
import NavbarDesktop from "@/components/navbar-desktop";
import Footer from "@/components/Footer";
import CustomScrollbar from "@/components/CustomScrollbar";

const fontSans = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  preload: true,
});

const fontMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.odena.io"),
  title: {
    default: "Odena – Intelligent Data Ranking, Segregation & Insight Systems",
    template: "%s | Odena",
  },
  description:
    "Odena builds high-performance systems for ranking, segregating, and interpreting large datasets across code, media, telemetry, and enterprise pipelines. Powered by zero-shot operators, adaptive routing, and research-grade data infrastructure.",
  keywords: [
    "Odena",
    "data ranking",
    "zero-shot ranking",
    "dataset segregation",
    "AI data cleaning",
    "data intelligence",
    "large scale data pipelines",
    "adaptive operators",
    "multimodal processing",
    "LLM ops",
    "data infrastructure",
    "research engineering",
    "data quality automation",
    "high-throughput systems",
    "enterprise data integrations",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://www.odena.io",
  },
  authors: [{ name: "Odena Research Collective" }],
  creator: "Odena",
  publisher: "Odena",
  openGraph: {
    title: "Odena – Research-Grade Data Ranking & Segregation Systems",
    description:
      "We develop intelligent systems for organizing, ranking, and analyzing large datasets using adaptive operators, zero-shot classification, and efficient routing pipelines.",
    url: "https://www.odena.io",
    siteName: "Odena",
    images: [
      {
        url: "https://www.odena.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "Odena – Intelligent Data Systems",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Odena – Smarter Data Ranking & Insights",
    description:
      "Build cleaner, smarter datasets with adaptive, fault-tolerant data ranking and routing systems.",
    images: ["https://www.odena.io/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="scroll-smooth"
    >
      <body
        className={`${fontSans.variable} ${fontMono.variable} antialiased bg-background text-foreground`}
      >
        <NavbarDesktop />
        <Navbar />
        <CustomScrollbar/>
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
