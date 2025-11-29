# 🚀 Configuration Nouveau Repository

## 📋 Étapes pour Créer le Nouveau Repository

### Étape 1: Créer le Nouveau Repository sur GitHub

1. **Allez sur GitHub:** https://github.com/new
2. **Repository name:** `yosri-ben-aicha-portfolio` (ou `Yosri-Ben-Aicha-Portfolio`)
3. **Description:** "Portfolio professionnel de Yosri Ben Aicha - Ingénieur IA & Data Scientist"
4. **Visibility:** Public (recommandé pour portfolio)
5. **Important:** Ne cochez PAS "Initialize with README" (nous avons déjà tout)
6. **Cliquez:** "Create repository"

### Étape 2: Mettre à Jour le Remote Git

Une fois le repository créé, GitHub vous donnera une URL. Utilisez-la pour mettre à jour le remote :

```bash
# Supprimer l'ancien remote
git remote remove origin

# Ajouter le nouveau remote
git remote add origin https://github.com/Yosri-ben-aicha/yosri-ben-aicha-portfolio.git

# Pousser vers le nouveau repo
git push -u origin main
```

### Étape 3: Configurer Vercel avec le Nouveau Repository

1. **Allez sur Vercel:** https://vercel.com/dashboard
2. **Supprimez l'ancien projet** (optionnel, ou gardez-le)
3. **Cliquez "Add New Project"**
4. **Importez le nouveau repository:** `yosri-ben-aicha-portfolio`
5. **Configurez:**
   - **Project Name:** `Yosri Ben Aicha` (comme vous voulez)
   - **Framework Preset:** Next.js (auto-détecté)
   - **Root Directory:** `./`
6. **Cliquez "Deploy"**

---

## ✅ Alternative: Script Automatique

Exécutez ces commandes après avoir créé le nouveau repository :

```bash
# 1. Supprimer l'ancien remote
git remote remove origin

# 2. Ajouter le nouveau remote (remplacez par votre URL)
git remote add origin https://github.com/Yosri-ben-aicha/yosri-ben-aicha-portfolio.git

# 3. Pousser vers le nouveau repo
git push -u origin main
```

---

## 📝 Notes

- Le nom du repository GitHub peut être: `yosri-ben-aicha-portfolio`
- Le nom du projet Vercel sera: `Yosri Ben Aicha`
- Tous vos fichiers sont déjà prêts, il suffit de changer le remote!

