# 📦 Installation de Node.js - Guide Rapide

## 🎯 Pourquoi Installer Node.js?

Node.js est nécessaire pour:
- ✅ Installer les dépendances du projet
- ✅ Corriger les erreurs rouges dans l'éditeur
- ✅ Tester le projet localement (optionnel)

## 🚀 Installation Rapide

### Option 1: Installation Automatique (Recommandée)

Ouvrez PowerShell en tant qu'administrateur et exécutez:

```powershell
winget install OpenJS.NodeJS.LTS
```

### Option 2: Installation Manuelle

1. **Téléchargez Node.js:**
   - Allez sur: https://nodejs.org/
   - Cliquez sur le bouton vert "LTS" (Long Term Support)
   - Téléchargez le fichier `.msi` pour Windows

2. **Installez Node.js:**
   - Double-cliquez sur le fichier téléchargé
   - Suivez l'assistant d'installation
   - ✅ Cochez "Automatically install the necessary tools" si proposé

3. **Redémarrez votre terminal:**
   - Fermez VS Code
   - Rouvrez VS Code
   - Ou redémarrez PowerShell

4. **Vérifiez l'installation:**
   ```powershell
   node --version
   npm --version
   ```
   Vous devriez voir des numéros de version (ex: v20.x.x)

## ✅ Après l'Installation

Une fois Node.js installé, exécutez:

```powershell
.\install-dependencies.ps1
```

Ou manuellement:

```powershell
npm install
```

## 🎉 Résultat

Après l'installation des dépendances:
- ✅ Les erreurs rouges dans l'éditeur disparaîtront
- ✅ TypeScript pourra résoudre tous les types
- ✅ L'éditeur fonctionnera correctement

## ⏱️ Temps Estimé

- Installation de Node.js: 2-3 minutes
- Installation des dépendances: 2-5 minutes
- **Total: ~5-8 minutes**

## 📝 Note

L'installation de Node.js est **optionnelle** pour le déploiement Vercel. Vercel installera automatiquement toutes les dépendances lors du build. Cependant, l'installation locale est recommandée pour:
- Corriger les erreurs dans l'éditeur
- Tester le projet localement
- Développer de nouvelles fonctionnalités

