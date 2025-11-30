"use client";

import { Button } from "@/components/ui/button";
import { Mail, FileText, MapPin, Briefcase, ArrowRight, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

interface HeroProps {
  onContactClick: () => void;
}

const quickTech = [
  "Python",
  "TypeScript",
  "PyTorch",
  "TensorFlow",
  "FastAPI",
  "Next.js",
  "Docker",
  "Azure",
  "LLMs",
  "RAG",
];

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-muted-foreground mb-4">
              <Briefcase className="w-4 h-4 text-primary" />
              <span>Disponible pour stage · Février 2026</span>
            </div>

            {/* Greeting & Name */}
            <div className="space-y-4">
              <p className="text-lg sm:text-xl text-muted-foreground">
                Bonjour, je suis
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-foreground">Yosri </span>
                <span className="text-primary">Ben Aicha</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Je développe des systèmes d'IA fiables, des APIs de production et des produits data-driven de bout en bout : 
              de la modélisation et des pipelines aux interfaces frontend et aux déploiements cloud scalables.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 w-full sm:w-auto group"
                onClick={() => {
                  const projectsSection = document.getElementById("projects");
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Voir les Projets
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto"
                asChild
              >
                <a href="/cv-Yosri-Ben-Aicha.pdf" download="cv-Yosri-Ben-Aicha.pdf">
                  <FileText className="w-4 h-4 mr-2" />
                  Télécharger CV
                </a>
              </Button>
            </div>

            {/* Location & Social */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Paris, Le Kremlin Bicêtre</span>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/Yosri-ben-aicha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/yosri-ben-aicha-43b7a8262/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Tech Stack */}
            <div className="pt-4">
              <div className="flex flex-wrap gap-2">
                {quickTech.map((tech, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="text-xs border-primary/20 hover:border-primary/50 transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-48 h-48 xs:w-64 xs:h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-primary/20 to-cyan-500/20 p-1 animate-float">
                <div className="w-full h-full rounded-full bg-background/50 backdrop-blur-sm p-2">
                  <Image
                    src="/profile.jpg"
                    alt="Yosri Ben Aicha"
                    width={384}
                    height={384}
                    className="w-full h-full rounded-full object-cover"
                    priority
                    quality={95}
                  />
                </div>
              </div>
              {/* Status Badge */}
              <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
                <span className="text-xs sm:text-sm font-medium text-primary">#OpenToWork</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
