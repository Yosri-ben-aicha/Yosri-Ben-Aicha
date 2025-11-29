# 🚀 Configuration Nouveau Repository - Yosri Ben Aicha Portfolio

## 📋 Étapes Rapides

### 1️⃣ Créer le Nouveau Repository sur GitHub

1. Allez sur: **https://github.com/new**
2. **Repository name:** `yosri-ben-aicha-portfolio`
3. **Description:** "Portfolio professionnel de Yosri Ben Aicha - Ingénieur IA & Data Scientist"
4. **Visibility:** Public ✅
5. ⚠️ **NE COCHEZ PAS** "Add a README file" (nous avons déjà tout)
6. Cliquez **"Create repository"**

### 2️⃣ Copier l'URL du Nouveau Repository

Après création, GitHub affichera une URL comme:
```
https://github.com/Yosri-ben-aicha/yosri-ben-aicha-portfolio.git
```

**Copiez cette URL** - vous en aurez besoin!

### 3️⃣ Mettre à Jour Git Remote

Exécutez ces commandes dans votre terminal (dans le dossier du projet):

```bash
# Supprimer l'ancien remote
git remote remove origin

# Ajouter le nouveau remote (remplacez par votre URL réelle)
git remote add origin https://github.com/Yosri-ben-aicha/yosri-ben-aicha-portfolio.git

# Pousser vers le nouveau repository
git push -u origin main
```

### 4️⃣ Configurer Vercel avec le Nouveau Repository

1. Allez sur: **https://vercel.com/dashboard**
2. Cliquez **"Add New Project"**
3. **Importez** le repository: `yosri-ben-aicha-portfolio`
4. **Configurez:**
   - **Project Name:** `Yosri Ben Aicha` (ou comme vous voulez)
   - **Framework Preset:** Next.js (auto-détecté)
   - **Root Directory:** `./`
5. Cliquez **"Deploy"**

---

## ✅ C'est Tout!

Votre portfolio sera déployé avec le nouveau nom de repository et de projet!

