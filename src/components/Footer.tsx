"use client";

import { Button } from "@/components/ui/button";
import { Linkedin, Github, Mail, Send, Download } from "lucide-react";
import { Card } from "@/components/ui/card";

interface FooterProps {
  onScrollToTop: () => void;
}

export default function Footer({ onScrollToTop }: FooterProps) {
  return (
    <>
      {/* CTA Banner Section */}
      <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <Card className="p-8 md:p-12 bg-gradient-to-r from-primary/20 via-purple-500/20 to-cyan-500/20 border-primary/30 rounded-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Left Side - Text */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Travaillons ensemble
                </h3>
                <p className="text-lg text-muted-foreground">
                  N'hésitez pas à me contacter si vous souhaitez collaborer ou simplement dire bonjour 👋
                </p>
              </div>

              {/* Right Side - Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-background/50 backdrop-blur-sm border-primary/30 hover:bg-primary/10 hover:border-primary/50"
                  asChild
                >
                  <a href="mailto:benaicha@et.esiea.fr">
                    <Send className="w-4 h-4 mr-2" />
                    Envoyer un Message
                  </a>
                </Button>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90"
                  asChild
                >
                  <a href="mailto:benaicha@et.esiea.fr">
                    <Download className="w-4 h-4 mr-2" />
                    Télécharger CV
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 border-t border-primary/20 bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Yosri Ben Aicha. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6">
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
              <a
                href="mailto:benaicha@et.esiea.fr"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
