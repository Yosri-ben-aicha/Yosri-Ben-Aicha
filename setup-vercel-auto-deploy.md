# 🤖 Configuration Déploiement Automatique Vercel

## ⚡ Déploiement Automatique Configuré!

Un workflow GitHub Actions a été créé pour déployer automatiquement sur Vercel.

## 🔧 Configuration Requise (Une Seule Fois)

### Étape 1: Créer un Token Vercel

1. Allez sur: https://vercel.com/account/tokens
2. Cliquez "Create Token"
3. Nommez-le: `github-actions-auto-deploy`
4. **Copiez le token** (vous ne le verrez qu'une fois!)

### Étape 2: Ajouter les Secrets GitHub

1. Allez sur: https://github.com/Yosri-ben-aicha/Yosri-Ben-Aicha/settings/secrets/actions
2. Cliquez "New repository secret"
3. Ajoutez ces secrets:

   **VERCEL_TOKEN**
   - Nom: `VERCEL_TOKEN`
   - Valeur: Le token que vous avez copié

   **VERCEL_ORG_ID** (après le premier déploiement)
   - Allez sur Vercel Dashboard → Settings → General
   - Copiez "Team ID" ou "User ID"
   - Nom: `VERCEL_ORG_ID`
   - Valeur: Votre Team/User ID

   **VERCEL_PROJECT_ID** (après le premier déploiement)
   - Allez sur Vercel Dashboard → Votre Projet → Settings → General
   - Copiez "Project ID"
   - Nom: `VERCEL_PROJECT_ID`
   - Valeur: Votre Project ID

### Étape 3: Premier Déploiement

1. Allez sur: https://vercel.com/new
2. Importez `Yosri-Ben-Aicha`
3. Déployez une première fois
4. Récupérez les IDs (voir Étape 2)
5. Ajoutez les secrets manquants

## ✅ Après Configuration

**Chaque push sur `main` déploiera automatiquement sur Vercel!**

Le workflow GitHub Actions s'exécutera automatiquement et déploiera votre site.

## 📊 Vérifier les Déploiements

- **GitHub Actions:** https://github.com/Yosri-ben-aicha/Yosri-Ben-Aicha/actions
- **Vercel Dashboard:** https://vercel.com/dashboard

