# 📦 Guide d'Installation des Dépendances

## 🎯 Objectif

Installer les dépendances pour corriger les erreurs rouges dans l'éditeur.

## 🚀 Méthode Rapide (Recommandée)

### Étape 1: Installer Node.js

**Option A: Téléchargement manuel**
1. Allez sur: https://nodejs.org/
2. Téléchargez la version **LTS** (Long Term Support)
3. Installez Node.js
4. Redémarrez votre terminal

**Option B: Installation automatique avec winget**
```powershell
winget install OpenJS.NodeJS.LTS
```

### Étape 2: Installer les Dépendances

Une fois Node.js installé, exécutez:

```powershell
.\install-dependencies.ps1
```

Ou manuellement:
```powershell
npm install
```

## ✅ Vérification

Après l'installation:
1. Redémarrez VS Code
2. Les erreurs rouges devraient disparaître
3. L'éditeur pourra maintenant résoudre les types TypeScript

## 🔍 Vérifier que Node.js est installé

```powershell
node --version
npm --version
```

Vous devriez voir des numéros de version (ex: v20.x.x)

## 📝 Note

- L'installation peut prendre 2-5 minutes
- Vous aurez besoin d'une connexion Internet
- Environ 200-300 MB d'espace disque requis

## 🆘 Problèmes Courants

**Erreur: "npm n'est pas reconnu"**
- Redémarrez votre terminal après l'installation de Node.js
- Vérifiez que Node.js est dans votre PATH

**Erreur: "Permission denied"**
- Exécutez PowerShell en tant qu'administrateur
- Ou utilisez `npm install --global` si nécessaire

