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
  title: "Yosri Ben Aicha - Ingénieur IA & Data Scientist",
  description: "Portfolio de Yosri Ben Aicha, Ingénieur IA & Data Scientist spécialisé en Machine Learning, MLOps et architectures RAG. Étudiant à l'ESIEA Paris.",
  keywords: ["Data Scientist", "Machine Learning", "IA", "Artificial Intelligence", "MLOps", "Python", "Portfolio"],
  authors: [{ name: "Yosri Ben Aicha" }],
  openGraph: {
    title: "Yosri Ben Aicha - Ingénieur IA & Data Scientist",
    description: "Portfolio de Yosri Ben Aicha, spécialisé en intelligence artificielle et data science",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
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
