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
  title: {
    default: "Yosri Ben Aicha",
    template: "%s | Yosri Ben Aicha",
  },
  description: "Portfolio of Yosri Ben Aicha - AI Engineering Student specialized in Data Science and LLMs.",
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
    "LLM",
    "Large Language Models",
    "Data Science",
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
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/logo.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.ico", type: "image/x-icon", sizes: "any" },
    ],
    apple: [
      { url: "/favicon.png", type: "image/png", sizes: "180x180" },
      { url: "/logo.png", type: "image/png", sizes: "180x180" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Yosri Ben Aicha",
    description: "Portfolio of Yosri Ben Aicha - AI Engineering Student specialized in Data Science and LLMs.",
    type: "website",
    locale: "fr_FR",
    siteName: "Yosri Ben Aicha",
    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "Yosri Ben Aicha - Portfolio",
      },
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
    title: "Yosri Ben Aicha",
    description: "Portfolio of Yosri Ben Aicha - AI Engineering Student specialized in Data Science and LLMs.",
    images: ["/favicon.png", "/logo.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    themeColor: [
      { media: "(prefers-color-scheme: light)", color: "#3b82f6" },
      { media: "(prefers-color-scheme: dark)", color: "#0a0e27" },
    ],
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Yosri Ben Aicha",
  },
  formatDetection: {
    telephone: false,
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
