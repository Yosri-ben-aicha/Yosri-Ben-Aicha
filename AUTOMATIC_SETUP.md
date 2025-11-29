# ⚡ Configuration Automatique - Nouveau Repository

## 🚀 Méthode Automatique (Recommandée)

### Étape 1: Créer le Repository sur GitHub

1. **Allez sur:** https://github.com/new
2. **Repository name:** `yosri-ben-aicha-portfolio`
3. **Description:** `Portfolio professionnel de Yosri Ben Aicha - Ingénieur IA & Data Scientist`
4. **Visibility:** Public ✅
5. ⚠️ **NE COCHEZ PAS** "Add a README file"
6. **Cliquez:** "Create repository"

### Étape 2: Exécuter le Script Automatique

**Dans PowerShell** (dans le dossier du projet):

```powershell
.\setup-new-repo.ps1
```

Le script va:
- ✅ Vous demander le nom du repository
- ✅ Mettre à jour le remote Git automatiquement
- ✅ Pousser tout le code vers le nouveau repository
- ✅ Vous donner les instructions pour Vercel

---

## 📋 Méthode Manuelle (Alternative)

Si le script ne fonctionne pas, exécutez ces commandes:

```bash
# 1. Créer le repository sur GitHub d'abord (https://github.com/new)
# Nom: yosri-ben-aicha-portfolio

# 2. Mettre à jour le remote
git remote remove origin
git remote add origin https://github.com/Yosri-ben-aicha/yosri-ben-aicha-portfolio.git

# 3. Pousser le code
git push -u origin main
```

---

## 🌐 Déployer sur Vercel

1. **Allez sur:** https://vercel.com/dashboard
2. **Cliquez:** "Add New Project"
3. **Importez:** `yosri-ben-aicha-portfolio`
4. **Project Name:** `Yosri Ben Aicha`
5. **Framework:** Next.js (auto-détecté)
6. **Cliquez:** "Deploy"

---

## ✅ C'est Tout!

Votre portfolio sera déployé avec le nouveau nom!

