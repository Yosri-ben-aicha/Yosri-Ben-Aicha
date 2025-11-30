# Script de déploiement automatique complet pour Vercel
# Ce script tente de déployer automatiquement votre portfolio

Write-Host "🚀 Déploiement Automatique sur Vercel" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""

# Vérifier si on est dans le bon répertoire
if (-not (Test-Path "package.json")) {
    Write-Host "❌ Erreur: package.json introuvable. Exécutez ce script depuis la racine du projet." -ForegroundColor Red
    exit 1
}

# Vérifier si Git est initialisé
Write-Host "📦 Vérification Git..." -ForegroundColor Yellow
try {
    $gitStatus = git status 2>&1
    if ($LASTEXITCODE -ne 0) {
        Write-Host "⚠️  Git n'est pas initialisé. Initialisation..." -ForegroundColor Yellow
        git init
        git add .
        git commit -m "Initial commit - Auto deployment setup"
    }
    Write-Host "✅ Git OK" -ForegroundColor Green
} catch {
    Write-Host "❌ Erreur Git: $_" -ForegroundColor Red
    exit 1
}

# Vérifier si le remote existe
Write-Host ""
Write-Host "🔗 Vérification du remote GitHub..." -ForegroundColor Yellow
$remoteUrl = git remote get-url origin 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "⚠️  Aucun remote GitHub trouvé." -ForegroundColor Yellow
    Write-Host "📝 Veuillez ajouter votre remote:" -ForegroundColor Yellow
    Write-Host "   git remote add origin https://github.com/Yosri-ben-aicha/Yosri-Ben-Aicha.git" -ForegroundColor Cyan
    Write-Host ""
    $addRemote = Read-Host "Voulez-vous ajouter le remote maintenant? (o/n)"
    if ($addRemote -eq "o" -or $addRemote -eq "O") {
        git remote add origin https://github.com/Yosri-ben-aicha/Yosri-Ben-Aicha.git
        Write-Host "✅ Remote ajouté" -ForegroundColor Green
    } else {
        Write-Host "❌ Remote requis pour le déploiement" -ForegroundColor Red
        exit 1
    }
} else {
    Write-Host "✅ Remote GitHub: $remoteUrl" -ForegroundColor Green
}

# Pousser vers GitHub si nécessaire
Write-Host ""
Write-Host "📤 Vérification des commits à pousser..." -ForegroundColor Yellow
$status = git status --porcelain
if ($status -or (git log origin/main..HEAD 2>&1)) {
    Write-Host "📝 Changements détectés. Poussée vers GitHub..." -ForegroundColor Yellow
    git add -A
    git commit -m "Auto: Préparation déploiement Vercel" -m "Déploiement automatique"
    git push origin main
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Code poussé sur GitHub" -ForegroundColor Green
    } else {
        Write-Host "⚠️  Erreur lors de la poussée. Continuez quand même..." -ForegroundColor Yellow
    }
} else {
    Write-Host "✅ Code à jour sur GitHub" -ForegroundColor Green
}

# Instructions pour Vercel
Write-Host ""
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "🌐 DÉPLOIEMENT VERCEL" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Votre code est maintenant sur GitHub!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Étapes finales (2 minutes):" -ForegroundColor Yellow
Write-Host ""
Write-Host "1. Ouvrez ce lien dans votre navigateur:" -ForegroundColor White
Write-Host "   https://vercel.com/new" -ForegroundColor Cyan
Write-Host ""
Write-Host "2. Cliquez 'Import Git Repository'" -ForegroundColor White
Write-Host ""
Write-Host "3. Sélectionnez: Yosri-Ben-Aicha" -ForegroundColor White
Write-Host ""
Write-Host "4. Cliquez 'Deploy'" -ForegroundColor White
Write-Host ""
Write-Host "✅ C'est tout! Vercel déploiera automatiquement." -ForegroundColor Green
Write-Host ""
Write-Host "🔄 Après le premier déploiement, chaque push déclenchera" -ForegroundColor Yellow
Write-Host "   automatiquement un nouveau déploiement!" -ForegroundColor Yellow
Write-Host ""

# Essayer d'ouvrir le navigateur automatiquement
$openBrowser = Read-Host "Voulez-vous ouvrir Vercel dans votre navigateur maintenant? (o/n)"
if ($openBrowser -eq "o" -or $openBrowser -eq "O") {
    Start-Process "https://vercel.com/new"
    Write-Host "✅ Navigateur ouvert!" -ForegroundColor Green
}

Write-Host ""
Write-Host "✨ Déploiement prêt! Suivez les instructions ci-dessus." -ForegroundColor Green

