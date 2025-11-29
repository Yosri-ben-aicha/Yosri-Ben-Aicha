# 🔧 Configuration GitHub Actions pour Déploiement Automatique

## 📋 Étapes de Configuration (Une seule fois)

### 1. Obtenir un Token Vercel

1. Allez sur: https://vercel.com/account/tokens
2. Cliquez **"Create Token"**
3. Nommez-le: `github-actions-deploy`
4. Copiez le token (vous ne le verrez qu'une fois!)

### 2. Ajouter le Token à GitHub Secrets

1. Allez sur votre repository: https://github.com/Yosri-ben-aicha/Yosri-Ben-Aicha
2. Cliquez sur **Settings** (en haut)
3. Dans le menu de gauche, cliquez sur **Secrets and variables** → **Actions**
4. Cliquez **"New repository secret"**
5. Nom: `VERCEL_TOKEN`
6. Valeur: Collez le token Vercel que vous avez copié
7. Cliquez **"Add secret"**

### 3. Créer le Projet sur Vercel (Première fois)

1. Allez sur: https://vercel.com/new
2. Importez `Yosri-Ben-Aicha`
3. Déployez une première fois (pour créer le projet)
4. Notez le nom du projet dans Vercel

### 4. Obtenir Vercel Project ID et Org ID

1. Allez sur votre projet dans Vercel
2. Allez dans **Settings** → **General**
3. Copiez:
   - **Project ID**
   - **Team ID** (ou votre User ID)

### 5. Ajouter les IDs aux Secrets GitHub (Optionnel mais recommandé)

Ajoutez ces secrets pour un déploiement plus fiable:

- `VERCEL_ORG_ID`: Votre Team/User ID
- `VERCEL_PROJECT_ID`: Votre Project ID

## ✅ C'est Tout!

Après cette configuration, **chaque push sur `main` déploiera automatiquement sur Vercel!**

## 🚀 Test

1. Faites un petit changement dans votre code
2. Committez et poussez:
   ```bash
   git add .
   git commit -m "Test auto-deployment"
   git push origin main
   ```
3. Allez dans l'onglet **Actions** de votre repository GitHub
4. Vous verrez le workflow s'exécuter et déployer automatiquement!

## 📊 Monitoring

- **GitHub Actions:** Voir les déploiements dans l'onglet "Actions"
- **Vercel Dashboard:** Voir les déploiements dans votre dashboard Vercel

