"use client";

import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { getSkillContext } from "@/lib/skillContext";
import { LucideIcon } from "lucide-react";
import { useState } from "react";

interface SkillBadgeProps {
  name: string;
  icon: LucideIcon;
  color: string;
}

export default function SkillBadge({ name, icon: Icon, color }: SkillBadgeProps) {
  const [isHovered, setIsHovered] = useState(false);
  const skillInfo = getSkillContext(name);

  const getProjectTypeColor = (type: string) => {
    switch (type) {
      case "Internship":
        return "text-blue-400";
      case "Academic Project":
        return "text-green-400";
      case "Core":
        return "text-purple-400";
      case "Internship & Project":
        return "text-cyan-400";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <TooltipProvider delayDuration={200}>
      <Dialog>
        <Tooltip>
          <TooltipTrigger asChild>
            <div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="inline-block"
            >
              <DialogTrigger asChild>
                <Badge
                  className={`
                    ${color} 
                    px-3 py-2 sm:px-4 sm:py-2.5 
                    text-xs sm:text-sm font-medium 
                    border 
                    transition-all 
                    cursor-pointer 
                    flex items-center gap-2 sm:gap-2.5
                    touch-manipulation
                    ${isHovered ? "scale-105 sm:scale-110 shadow-lg shadow-primary/20 border-primary/60" : ""}
                    active:scale-95
                  `}
                >
                  <Icon className="w-4 h-4" />
                  <span>{name}</span>
                </Badge>
              </DialogTrigger>
            </div>
          </TooltipTrigger>
          <TooltipContent
            side="top"
            className="max-w-xs bg-popover border-primary/30"
          >
            <div className="space-y-1">
              <p className="font-semibold text-primary">{name}</p>
              <p className="text-xs text-muted-foreground">{skillInfo.context}</p>
              <span className={`text-xs font-medium ${getProjectTypeColor(skillInfo.projectType)}`}>
                {skillInfo.projectType}
              </span>
            </div>
          </TooltipContent>
        </Tooltip>

        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center gap-3">
              <Icon className="w-6 h-6 text-primary" />
              {name}
            </DialogTitle>
            <DialogDescription className="text-base pt-2">
              {skillInfo.definition || "Technologie importante dans mon parcours professionnel et académique."}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 pt-4">
            {/* Contexte d'utilisation */}
            <div className="space-y-2">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Contexte d'utilisation
              </h3>
              <div className="bg-secondary/30 rounded-lg p-4 border border-primary/20">
                <p className="text-muted-foreground mb-2">{skillInfo.context}</p>
                <span className={`inline-block text-sm font-medium px-2 py-1 rounded ${getProjectTypeColor(skillInfo.projectType)} bg-primary/10`}>
                  {skillInfo.projectType}
                </span>
              </div>
            </div>

            {/* Utilisations spécifiques */}
            {skillInfo.usage && skillInfo.usage.length > 0 && (
              <div className="space-y-2">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Utilisations spécifiques
                </h3>
                <ul className="space-y-2">
                  {skillInfo.usage.map((usage, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-muted-foreground"
                    >
                      <span className="text-primary mt-1.5">•</span>
                      <span>{usage}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </TooltipProvider>
  );
}

