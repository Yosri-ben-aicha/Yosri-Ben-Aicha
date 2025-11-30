"use client";

import Section from "./Section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Utiliser mailto comme solution immédiate
      // Pour une solution plus avancée, utilisez EmailJS ou un service d'API
      const mailtoLink = `mailto:benaicha@et.esiea.fr?subject=${encodeURIComponent(
        formData.subject || "Message depuis le portfolio"
      )}&body=${encodeURIComponent(
        `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      window.location.href = mailtoLink;
      
      // Simuler un succès après un court délai
      setTimeout(() => {
        setSubmitStatus("success");
        setIsSubmitting(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
        
        // Réinitialiser le statut après 3 secondes
        setTimeout(() => setSubmitStatus("idle"), 3000);
      }, 500);
    } catch (error) {
      setSubmitStatus("error");
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" subtitle="Contact" title="Restons en Contact">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-6 bg-gradient-to-br from-primary/10 to-cyan-500/10 border-primary/20">
              <h3 className="text-xl font-bold mb-4">Informations de Contact</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:benaicha@et.esiea.fr"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      benaicha@et.esiea.fr
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Localisation</p>
                    <p className="text-muted-foreground">Paris, Le Kremlin Bicêtre</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-primary/10 to-cyan-500/10 border-primary/20">
              <h3 className="text-xl font-bold mb-4">Réseaux Sociaux</h3>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 w-full sm:w-auto" asChild>
                  <a
                    href="https://www.linkedin.com/in/yosri-ben-aicha-43b7a8262/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                  <a
                    href="https://github.com/Yosri-ben-aicha"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-6">Envoyer un Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  placeholder="votre.email@exemple.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  placeholder="Sujet du message"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 resize-none"
                  placeholder="Votre message..."
                />
              </div>

              {submitStatus === "success" && (
                <div className="flex items-center gap-2 text-green-500 text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Message envoyé! Votre client email s'ouvrira.</span>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="text-red-500 text-sm">
                  Erreur lors de l'envoi. Veuillez réessayer.
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Envoi en cours..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Envoyer le Message
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </Section>
  );
}
