#!/bin/bash

# Script de vérification du déploiement
# Usage: ./scripts/check-deployment.sh

echo "🚀 Vérification du Déploiement Portfolio"
echo "========================================"
echo ""

# Vérifier si git est configuré
echo "📦 Vérification Git..."
if git rev-parse --git-dir > /dev/null 2>&1; then
    echo "✅ Repository Git détecté"
    echo "   Remote: $(git remote get-url origin)"
else
    echo "❌ Pas de repository Git"
fi
echo ""

# Vérifier les fichiers de configuration
echo "⚙️  Vérification Configuration..."
if [ -f "vercel.json" ]; then
    echo "✅ vercel.json trouvé"
else
    echo "⚠️  vercel.json manquant"
fi

if [ -f "next.config.js" ]; then
    echo "✅ next.config.js trouvé"
else
    echo "⚠️  next.config.js manquant"
fi
echo ""

# Vérifier les dépendances
echo "📚 Vérification Dépendances..."
if [ -f "package.json" ]; then
    echo "✅ package.json trouvé"
    if [ -d "node_modules" ]; then
        echo "✅ node_modules présent"
    else
        echo "⚠️  node_modules manquant - exécutez 'bun install'"
    fi
else
    echo "❌ package.json manquant"
fi
echo ""

# Instructions
echo "📋 Prochaines Étapes:"
echo "1. Vérifiez votre déploiement sur: https://vercel.com/dashboard"
echo "2. Pour un domaine personnalisé, suivez: DOMAIN_SETUP.md"
echo "3. Votre repository: https://github.com/Yosri-ben-aicha/yosri-portfolio"
echo ""
echo "✅ Vérification terminée!"

