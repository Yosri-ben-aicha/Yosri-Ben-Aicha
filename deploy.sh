#!/bin/bash
# Script de déploiement automatique pour Vercel
# Usage: ./deploy.sh

echo "🚀 Déploiement automatique du portfolio sur Vercel"
echo ""

# Vérifier si Vercel CLI est installé
echo "📦 Vérification de Vercel CLI..."
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI n'est pas installé"
    echo "📥 Installation de Vercel CLI..."
    npm install -g vercel
    if [ $? -ne 0 ]; then
        echo "❌ Échec de l'installation. Veuillez installer manuellement: npm install -g vercel"
        exit 1
    fi
else
    echo "✅ Vercel CLI trouvé: $(vercel --version)"
fi

# Vérifier si on est connecté à Vercel
echo ""
echo "🔐 Vérification de la connexion Vercel..."
if ! vercel whoami &> /dev/null; then
    echo "⚠️  Non connecté. Connexion requise..."
    vercel login
else
    echo "✅ Connecté à Vercel"
fi

# Déployer
echo ""
echo "🚀 Déploiement en cours..."
echo ""

# Déploiement en production
vercel --prod --yes

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Déploiement réussi!"
    echo "🌐 Vérifiez votre dashboard Vercel pour l'URL"
else
    echo ""
    echo "❌ Échec du déploiement"
    echo "💡 Alternative: Déployez via https://vercel.com/new"
    exit 1
fi

