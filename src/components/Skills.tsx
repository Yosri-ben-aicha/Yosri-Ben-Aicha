"use client";

import Section from "./Section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, Database, BarChart, Settings, Sparkles, Zap, Layers, TrendingUp } from "lucide-react";

const skillCategories = [
  {
    icon: Brain,
    title: "Intelligence Artificielle",
    color: "primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/30",
    iconBg: "bg-primary/20",
    iconColor: "text-primary",
    skills: [
      { name: "Déploiement LLM", icon: Sparkles, color: "bg-blue-500/20 text-blue-300 border-blue-500/40 hover:bg-blue-500/30" },
      { name: "Ingénierie de prompts", icon: Layers, color: "bg-purple-500/20 text-purple-300 border-purple-500/40 hover:bg-purple-500/30" },
      { name: "Deep Learning", icon: Brain, color: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40 hover:bg-cyan-500/30" },
      { name: "CNN", icon: TrendingUp, color: "bg-indigo-500/20 text-indigo-300 border-indigo-500/40 hover:bg-indigo-500/30" },
      { name: "Azure AI Foundry", icon: Layers, color: "bg-blue-600/20 text-blue-200 border-blue-600/40 hover:bg-blue-600/30" },
      { name: "Ollama", icon: Sparkles, color: "bg-orange-500/20 text-orange-300 border-orange-500/40 hover:bg-orange-500/30" },
    ],
  },
  {
    icon: Code,
    title: "Machine Learning",
    color: "cyan",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/30",
    iconBg: "bg-cyan-500/20",
    iconColor: "text-cyan-500",
    skills: [
      { name: "TensorFlow", icon: Zap, color: "bg-orange-500/20 text-orange-300 border-orange-500/40 hover:bg-orange-500/30" },
      { name: "Keras", icon: Sparkles, color: "bg-red-500/20 text-red-300 border-red-500/40 hover:bg-red-500/30" },
      { name: "Scikit-learn", icon: TrendingUp, color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/40 hover:bg-yellow-500/30" },
      { name: "OpenCV", icon: Layers, color: "bg-green-500/20 text-green-300 border-green-500/40 hover:bg-green-500/30" },
      { name: "XGBoost", icon: TrendingUp, color: "bg-blue-500/20 text-blue-300 border-blue-500/40 hover:bg-blue-500/30" },
      { name: "Random Forest", icon: Brain, color: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40 hover:bg-emerald-500/30" },
    ],
  },
  {
    icon: Database,
    title: "Data Engineering",
    color: "green",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30",
    iconBg: "bg-green-500/20",
    iconColor: "text-green-500",
    skills: [
      { name: "Python", icon: Code, color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/40 hover:bg-yellow-500/30" },
      { name: "R", icon: BarChart, color: "bg-blue-500/20 text-blue-300 border-blue-500/40 hover:bg-blue-500/30" },
      { name: "SQL", icon: Database, color: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40 hover:bg-cyan-500/30" },
      { name: "MySQL", icon: Database, color: "bg-orange-500/20 text-orange-300 border-orange-500/40 hover:bg-orange-500/30" },
      { name: "Pandas", icon: Layers, color: "bg-purple-500/20 text-purple-300 border-purple-500/40 hover:bg-purple-500/30" },
      { name: "Web Scraping", icon: Zap, color: "bg-red-500/20 text-red-300 border-red-500/40 hover:bg-red-500/30" },
    ],
  },
  {
    icon: BarChart,
    title: "Visualisation de Données",
    color: "yellow",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/30",
    iconBg: "bg-yellow-500/20",
    iconColor: "text-yellow-500",
    skills: [
      { name: "Tableau", icon: BarChart, color: "bg-orange-500/20 text-orange-300 border-orange-500/40 hover:bg-orange-500/30" },
      { name: "Power BI", icon: TrendingUp, color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/40 hover:bg-yellow-500/30" },
      { name: "Matplotlib", icon: BarChart, color: "bg-blue-500/20 text-blue-300 border-blue-500/40 hover:bg-blue-500/30" },
      { name: "Seaborn", icon: Layers, color: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40 hover:bg-cyan-500/30" },
      { name: "Plotly", icon: TrendingUp, color: "bg-purple-500/20 text-purple-300 border-purple-500/40 hover:bg-purple-500/30" },
      { name: "ggplot2", icon: BarChart, color: "bg-pink-500/20 text-pink-300 border-pink-500/40 hover:bg-pink-500/30" },
    ],
  },
];

const tools = [
  { name: "Visual Studio Code", icon: Code, color: "bg-blue-500/20 text-blue-300 border-blue-500/40 hover:bg-blue-500/30" },
  { name: "Google Colab", icon: Sparkles, color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/40 hover:bg-yellow-500/30" },
  { name: "Jupyter Notebook", icon: Layers, color: "bg-orange-500/20 text-orange-300 border-orange-500/40 hover:bg-orange-500/30" },
  { name: "PyCharm", icon: Code, color: "bg-green-500/20 text-green-300 border-green-500/40 hover:bg-green-500/30" },
  { name: "Git", icon: Zap, color: "bg-red-500/20 text-red-300 border-red-500/40 hover:bg-red-500/30" },
  { name: "GitHub", icon: Code, color: "bg-gray-500/20 text-gray-300 border-gray-500/40 hover:bg-gray-500/30" },
  { name: "Azure DevOps", icon: Layers, color: "bg-blue-600/20 text-blue-200 border-blue-600/40 hover:bg-blue-600/30" },
  { name: "Azure ML", icon: Brain, color: "bg-purple-500/20 text-purple-300 border-purple-500/40 hover:bg-purple-500/30" },
  { name: "Flask", icon: Zap, color: "bg-red-500/20 text-red-300 border-red-500/40 hover:bg-red-500/30" },
  { name: "Power Automate", icon: Sparkles, color: "bg-indigo-500/20 text-indigo-300 border-indigo-500/40 hover:bg-indigo-500/30" },
];

export default function Skills() {
  return (
    <Section
      id="skills"
      subtitle="Compétences"
      title="Arsenal de Technologies"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-muted-foreground mb-12 text-lg text-center">
          Un ensemble complet d'outils qui me permet de développer des systèmes d'IA scalables et des applications robustes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className={`p-6 ${category.bgColor} ${category.borderColor} hover:border-primary/50 transition-all hover:scale-[1.02]`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-lg ${category.iconBg} flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${category.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = skill.icon;
                    return (
                      <Badge
                        key={skillIndex}
                        className={`${skill.color} px-4 py-2.5 text-sm font-medium border transition-all cursor-default flex items-center gap-2.5`}
                      >
                        <SkillIcon className="w-4 h-4" />
                        <span>{skill.name}</span>
                      </Badge>
                    );
                  })}
                </div>
              </Card>
            );
          })}
        </div>

        <Card className="p-6 bg-secondary/30 border-primary/20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
              <Settings className="w-6 h-6 text-primary" />
            </div>
            <h4 className="text-xl font-semibold">Outils & Environnements</h4>
          </div>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool, index) => {
              const ToolIcon = tool.icon;
              return (
                <Badge
                  key={index}
                  className={`${tool.color} px-4 py-2.5 text-sm font-medium border transition-all cursor-default flex items-center gap-2.5`}
                >
                  <ToolIcon className="w-4 h-4" />
                  <span>{tool.name}</span>
                </Badge>
              );
            })}
          </div>
        </Card>
      </div>
    </Section>
  );
}
