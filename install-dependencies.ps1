# Script d'installation automatique des dépendances
# Ce script installe Node.js/npm si nécessaire, puis installe les dépendances du projet

Write-Host "🔧 Installation des Dépendances" -ForegroundColor Cyan
Write-Host "=============================" -ForegroundColor Cyan
Write-Host ""

# Vérifier si Node.js est installé
Write-Host "📦 Vérification de Node.js..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version 2>&1
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Node.js trouvé: $nodeVersion" -ForegroundColor Green
    } else {
        throw "Node.js non trouvé"
    }
} catch {
    Write-Host "❌ Node.js n'est pas installé" -ForegroundColor Red
    Write-Host ""
    Write-Host "📥 Installation requise:" -ForegroundColor Yellow
    Write-Host "   1. Téléchargez Node.js depuis: https://nodejs.org/" -ForegroundColor Cyan
    Write-Host "   2. Installez la version LTS (Long Term Support)" -ForegroundColor Cyan
    Write-Host "   3. Redémarrez votre terminal après l'installation" -ForegroundColor Cyan
    Write-Host "   4. Relancez ce script" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "💡 Alternative: Utilisez winget pour installer automatiquement:" -ForegroundColor Yellow
    Write-Host "   winget install OpenJS.NodeJS.LTS" -ForegroundColor Cyan
    Write-Host ""
    
    $installNow = Read-Host "Voulez-vous ouvrir le site de téléchargement Node.js maintenant? (o/n)"
    if ($installNow -eq "o" -or $installNow -eq "O") {
        Start-Process "https://nodejs.org/"
    }
    
    exit 1
}

# Vérifier npm
Write-Host ""
Write-Host "📦 Vérification de npm..." -ForegroundColor Yellow
try {
    $npmVersion = npm --version 2>&1
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ npm trouvé: $npmVersion" -ForegroundColor Green
    } else {
        throw "npm non trouvé"
    }
} catch {
    Write-Host "❌ npm n'est pas disponible" -ForegroundColor Red
    Write-Host "   npm devrait être inclus avec Node.js" -ForegroundColor Yellow
    exit 1
}

# Installer les dépendances
Write-Host ""
Write-Host "📥 Installation des dépendances..." -ForegroundColor Yellow
Write-Host "   Cela peut prendre quelques minutes..." -ForegroundColor Gray
Write-Host ""

npm install

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ Dépendances installées avec succès!" -ForegroundColor Green
    Write-Host ""
    Write-Host "🎉 Les erreurs dans l'éditeur devraient maintenant disparaître!" -ForegroundColor Green
    Write-Host ""
    Write-Host "💡 Redémarrez votre éditeur (VS Code) pour que les changements prennent effet." -ForegroundColor Yellow
} else {
    Write-Host ""
    Write-Host "❌ Erreur lors de l'installation" -ForegroundColor Red
    Write-Host "   Vérifiez les messages d'erreur ci-dessus" -ForegroundColor Yellow
    exit 1
}

