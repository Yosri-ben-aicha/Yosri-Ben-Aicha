"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Linkedin, Github, Menu, X, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "home", label: "Accueil" },
  { id: "about", label: "À propos" },
  { id: "skills", label: "Compétences" },
  { id: "experience", label: "Expérience" },
  { id: "projects", label: "Projets" },
  { id: "education", label: "Formation" },
  { id: "contact", label: "Contact" },
];

interface NavigationProps {
  activeSection: string;
  onNavClick: (sectionId: string) => void;
}

export default function Navigation({ activeSection, onNavClick }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    onNavClick(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-xl border-primary/20 shadow-lg"
          : "bg-background/80 backdrop-blur-lg border-primary/10"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => handleNavClick("home")}
            className="text-xl md:text-2xl font-bold text-primary hover:opacity-80 transition-opacity font-mono"
          >
            &lt;yosri.ben-aicha/&gt;
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                  activeSection === item.id
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop Social Links & CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/yosri-ben-aicha-43b7a8262/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-primary/10 transition-colors group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://github.com/Yosri-ben-aicha"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-primary/10 transition-colors group"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <Button
              onClick={() => handleNavClick("contact")}
              variant="outline"
              className="border-primary/20 hover:bg-primary/10"
              asChild
            >
              <a href="mailto:benaicha@et.esiea.fr">
                <FileText className="w-4 h-4 mr-2" />
                Télécharger CV
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 space-y-1 animate-slideIn">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={cn(
                  "block w-full text-left px-4 py-3 rounded-lg transition-all duration-200",
                  activeSection === item.id
                    ? "bg-primary/20 text-primary font-medium"
                    : "text-muted-foreground hover:bg-primary/10 hover:text-primary"
                )}
              >
                {item.label}
              </button>
            ))}
            <div className="flex items-center gap-3 px-4 pt-4 border-t border-primary/10">
              <a
                href="https://www.linkedin.com/in/yosri-ben-aicha-43b7a8262/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/Yosri-ben-aicha"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

