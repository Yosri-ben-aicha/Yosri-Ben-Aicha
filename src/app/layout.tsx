import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yosri Ben Aicha - Ingénieur IA & Data Scientist | Portfolio",
  description: "Portfolio professionnel de Yosri Ben Aicha, Ingénieur IA & Data Scientist spécialisé en Machine Learning, MLOps, architectures RAG et systèmes d'IA agentique. Étudiant en 3ème année à l'ESIEA Paris. Disponible pour stage Février 2026.",
  keywords: [
    "Yosri Ben Aicha",
    "Data Scientist",
    "Machine Learning",
    "IA",
    "Artificial Intelligence",
    "MLOps",
    "Python",
    "Portfolio",
    "Ingénieur IA",
    "Deep Learning",
    "Azure AI",
    "ESIEA",
    "Paris",
  ],
  authors: [{ name: "Yosri Ben Aicha" }],
  creator: "Yosri Ben Aicha",
  publisher: "Yosri Ben Aicha",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/logo.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Yosri Ben Aicha - Ingénieur IA & Data Scientist",
    description: "Portfolio professionnel de Yosri Ben Aicha, spécialisé en intelligence artificielle, machine learning et data science. Disponible pour stage Février 2026.",
    type: "website",
    locale: "fr_FR",
    siteName: "Yosri Ben Aicha Portfolio",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Yosri Ben Aicha - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yosri Ben Aicha - Ingénieur IA & Data Scientist",
    description: "Portfolio professionnel spécialisé en intelligence artificielle et data science",
    images: ["/logo.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
