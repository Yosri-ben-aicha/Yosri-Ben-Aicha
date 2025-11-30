"use client";

import Section from "./Section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Linkedin, Github, Send, CheckCircle2, MessageSquare } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

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
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_default";
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_default";
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "public_key";

      const templateParams = {
        to_email: "benaicha@et.esiea.fr",
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        reply_to: formData.email,
      };

      if (publicKey !== "public_key") {
        await emailjs.send(serviceId, templateId, templateParams, publicKey);
        setSubmitStatus("success");
        setIsSubmitting(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        const mailtoLink = `mailto:benaicha@et.esiea.fr?subject=${encodeURIComponent(
          formData.subject || "Message depuis le portfolio"
        )}&body=${encodeURIComponent(
          `Bonjour Yosri,\n\n${formData.message}\n\nCordialement,\n${formData.name}\n${formData.email}`
        )}`;
        
        window.location.href = mailtoLink;
        
        setSubmitStatus("success");
        setIsSubmitting(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("Erreur:", error);
      const mailtoLink = `mailto:benaicha@et.esiea.fr?subject=${encodeURIComponent(
        formData.subject || "Message depuis le portfolio"
      )}&body=${encodeURIComponent(
        `Bonjour Yosri,\n\n${formData.message}\n\nCordialement,\n${formData.name}\n${formData.email}`
      )}`;
      
      window.location.href = mailtoLink;
      setSubmitStatus("success");
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" subtitle="Contact" title="Restons en Contact">
      <div className="max-w-6xl mx-auto">
        <p className="text-muted-foreground mb-12 text-lg text-center">
          Intéressé par mon profil ? N'hésitez pas à me contacter pour discuter de vos projets ou opportunités.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Contact Information Card */}
          <Card className="p-6 bg-secondary/30 border-primary/20 hover:border-primary/50 transition-all hover:scale-[1.01]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Informations de Contact</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium mb-1">Email</p>
                  <a
                    href="mailto:benaicha@et.esiea.fr"
                    className="text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    benaicha@et.esiea.fr
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium mb-1">Localisation</p>
                  <p className="text-muted-foreground">Paris, Le Kremlin Bicêtre</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Social Networks Card */}
          <Card className="p-6 bg-secondary/30 border-primary/20 hover:border-primary/50 transition-all hover:scale-[1.01]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                <Linkedin className="w-6 h-6 text-cyan-500" />
              </div>
              <h3 className="text-xl font-semibold">Réseaux Sociaux</h3>
            </div>
            <div className="flex flex-col gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 w-full" asChild>
                <a
                  href="https://www.linkedin.com/in/yosri-ben-aicha-43b7a8262/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button size="lg" variant="outline" className="w-full" asChild>
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

        {/* Contact Form Card */}
        <Card className="p-8 bg-secondary/30 border-primary/20 hover:border-primary/40 transition-all">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-purple-500" />
            </div>
            <h3 className="text-xl font-semibold">Envoyer un Message</h3>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
    </Section>
  );
}
