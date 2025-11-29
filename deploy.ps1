# Script de déploiement automatique pour Vercel
# Usage: .\deploy.ps1

Write-Host "🚀 Déploiement automatique du portfolio sur Vercel" -ForegroundColor Cyan
Write-Host ""

# Vérifier si Vercel CLI est installé
Write-Host "📦 Vérification de Vercel CLI..." -ForegroundColor Yellow
try {
    $vercelVersion = vercel --version 2>&1
    Write-Host "✅ Vercel CLI trouvé: $vercelVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Vercel CLI n'est pas installé" -ForegroundColor Red
    Write-Host "📥 Installation de Vercel CLI..." -ForegroundColor Yellow
    npm install -g vercel
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Échec de l'installation. Veuillez installer manuellement: npm install -g vercel" -ForegroundColor Red
        exit 1
    }
}

# Vérifier si on est connecté à Vercel
Write-Host ""
Write-Host "🔐 Vérification de la connexion Vercel..." -ForegroundColor Yellow
try {
    vercel whoami 2>&1 | Out-Null
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Connecté à Vercel" -ForegroundColor Green
    } else {
        Write-Host "⚠️  Non connecté. Connexion requise..." -ForegroundColor Yellow
        vercel login
    }
} catch {
    Write-Host "⚠️  Connexion requise..." -ForegroundColor Yellow
    vercel login
}

# Déployer
Write-Host ""
Write-Host "🚀 Déploiement en cours..." -ForegroundColor Cyan
Write-Host ""

# Déploiement en production
vercel --prod --yes

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ Déploiement réussi!" -ForegroundColor Green
    Write-Host "🌐 Vérifiez votre dashboard Vercel pour l'URL" -ForegroundColor Cyan
} else {
    Write-Host ""
    Write-Host "❌ Échec du déploiement" -ForegroundColor Red
    Write-Host "💡 Alternative: Déployez via https://vercel.com/new" -ForegroundColor Yellow
    exit 1
}

