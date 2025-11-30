// Mapping des compétences avec leur contexte d'utilisation spécifique
export const skillContext: Record<string, {
  context: string;
  projectType: string;
  definition?: string;
  usage?: string[];
}> = {
  "Déploiement LLM": {
    context: "Utilisé lors de mon stage chez Altametris (Mai-Août 2025). J'ai déployé le modèle DevStral-24B pour automatiser la documentation technique.",
    projectType: "Internship",
    definition: "Le déploiement de modèles de langage (LLM) consiste à mettre en production des modèles d'intelligence artificielle capables de comprendre et générer du texte naturel.",
    usage: [
      "Déploiement du modèle DevStral-24B chez Altametris",
      "Automatisation de la documentation technique",
      "Intégration dans un pipeline de production"
    ]
  },
  "Azure AI Foundry": {
    context: "Utilisé chez Altametris pour comparer et tester les performances et coûts de plusieurs modèles LLM.",
    projectType: "Internship",
    definition: "Azure AI Foundry est une plateforme Microsoft qui permet de développer, déployer et gérer des applications d'intelligence artificielle à l'échelle.",
    usage: [
      "Comparaison des performances de différents modèles LLM",
      "Analyse des coûts d'infrastructure",
      "Tests et évaluation de modèles"
    ]
  },
  "Flask": {
    context: "Développé une API Flask connectée à un LLM local chez Altametris pour garantir la confidentialité du code.",
    projectType: "Internship",
    definition: "Flask est un framework web léger et flexible pour Python, idéal pour créer des APIs RESTful et des applications web.",
    usage: [
      "Développement d'API REST pour l'intégration LLM",
      "Garantie de confidentialité des données",
      "Architecture microservices"
    ]
  },
  "Power Automate": {
    context: "Automatisé la génération de cartes de résultats dans Azure DevOps lors du stage Altametris.",
    projectType: "Internship",
    definition: "Power Automate est un service Microsoft permettant d'automatiser des workflows et des processus métier entre différentes applications.",
    usage: [
      "Automatisation de la génération de rapports",
      "Intégration avec Azure DevOps",
      "Optimisation des processus de développement"
    ]
  },
  "R": {
    context: "Utilisé dans mon projet de 'Prédiction du Cancer du Sein' pour l'analyse exploratoire et la visualisation.",
    projectType: "Academic Project",
    definition: "R est un langage de programmation et un environnement logiciel spécialisé dans l'analyse statistique et la visualisation de données.",
    usage: [
      "Analyse exploratoire de données médicales",
      "Visualisation statistique",
      "Modélisation prédictive"
    ]
  },
  "ggplot2": {
    context: "Utilisé dans mon projet de 'Prédiction du Cancer du Sein' pour l'analyse exploratoire et la visualisation.",
    projectType: "Academic Project",
    definition: "ggplot2 est une bibliothèque R pour la création de graphiques statistiques élégants et personnalisables basés sur la grammaire des graphiques.",
    usage: [
      "Visualisation de données médicales",
      "Création de graphiques statistiques",
      "Analyse exploratoire de données"
    ]
  },
  "XGBoost": {
    context: "Modèles utilisés pour atteindre 82% de précision dans la prédiction des récidives de cancer.",
    projectType: "Academic Project",
    definition: "XGBoost est un algorithme de machine learning basé sur le gradient boosting, particulièrement efficace pour les problèmes de classification et de régression.",
    usage: [
      "Prédiction des récidives de cancer du sein",
      "Atteinte de 82% de précision",
      "Optimisation des hyperparamètres"
    ]
  },
  "Random Forest": {
    context: "Modèles utilisés pour atteindre 82% de précision dans la prédiction des récidives de cancer.",
    projectType: "Academic Project",
    definition: "Random Forest est un algorithme d'ensemble qui combine plusieurs arbres de décision pour améliorer la précision et réduire le surapprentissage.",
    usage: [
      "Prédiction des récidives de cancer du sein",
      "Atteinte de 82% de précision",
      "Analyse de l'importance des caractéristiques"
    ]
  },
  "Python": {
    context: "Langage principal utilisé transversalement : Stage Altametris (Automation), Stage Topnet (Data Analysis) et projets académiques.",
    projectType: "Core",
    definition: "Python est un langage de programmation polyvalent, particulièrement populaire en data science, machine learning et développement web.",
    usage: [
      "Développement d'APIs et automatisation (Altametris)",
      "Analyse de données et visualisation (Topnet)",
      "Projets académiques de machine learning"
    ]
  },
  "Tableau": {
    context: "Utilisé chez Topnet et pour le projet 'Visualisation de l'autisme' pour créer des dashboards interactifs.",
    projectType: "Internship & Project",
    definition: "Tableau est un outil de visualisation de données qui permet de créer des tableaux de bord interactifs et des analyses visuelles puissantes.",
    usage: [
      "Création de dashboards interactifs chez Topnet",
      "Visualisation de données sur l'autisme",
      "Analyse et présentation de données métier"
    ]
  },
  "Power BI": {
    context: "Utilisé pour visualiser les relations entre variables dans le projet de Visualiseur de Données Médicales.",
    projectType: "Academic Project",
    definition: "Power BI est une suite d'outils d'analyse métier de Microsoft permettant de visualiser et partager des insights à partir de données.",
    usage: [
      "Visualisation de données médicales",
      "Analyse des relations entre variables",
      "Création de rapports interactifs"
    ]
  },
};

// Fonction helper pour obtenir le contexte d'une compétence
export function getSkillContext(skillName: string) {
  return skillContext[skillName] || {
    context: "Compétence clé dans mon stack technologique",
    projectType: "General",
    definition: "Technologie importante dans mon parcours professionnel et académique.",
    usage: ["Utilisée dans divers projets"]
  };
}

