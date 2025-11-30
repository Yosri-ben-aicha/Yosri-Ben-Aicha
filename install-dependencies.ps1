# Script d'installation automatique des dependances
# Ce script installe Node.js/npm si necessaire, puis installe les dependances du projet

Write-Host "Installation des Dependances" -ForegroundColor Cyan
Write-Host "=============================" -ForegroundColor Cyan
Write-Host ""

# Verifier si Node.js est installe
Write-Host "Verification de Node.js..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version 2>&1
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Node.js trouve: $nodeVersion" -ForegroundColor Green
    } else {
        throw "Node.js non trouve"
    }
} catch {
    Write-Host "Node.js n'est pas installe" -ForegroundColor Red
    Write-Host ""
    Write-Host "Installation requise:" -ForegroundColor Yellow
    Write-Host "   1. Telechargez Node.js depuis: https://nodejs.org/" -ForegroundColor Cyan
    Write-Host "   2. Installez la version LTS (Long Term Support)" -ForegroundColor Cyan
    Write-Host "   3. Redemarrez votre terminal apres l'installation" -ForegroundColor Cyan
    Write-Host "   4. Relancez ce script" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Alternative: Utilisez winget pour installer automatiquement:" -ForegroundColor Yellow
    Write-Host "   winget install OpenJS.NodeJS.LTS" -ForegroundColor Cyan
    Write-Host ""
    
    $installNow = Read-Host "Voulez-vous ouvrir le site de telechargement Node.js maintenant? (o/n)"
    if ($installNow -eq "o" -or $installNow -eq "O") {
        Start-Process "https://nodejs.org/"
    }
    
    exit 1
}

# Verifier npm
Write-Host ""
Write-Host "Verification de npm..." -ForegroundColor Yellow
try {
    $npmVersion = npm --version 2>&1
    if ($LASTEXITCODE -eq 0) {
        Write-Host "npm trouve: $npmVersion" -ForegroundColor Green
    } else {
        throw "npm non trouve"
    }
} catch {
    Write-Host "npm n'est pas disponible" -ForegroundColor Red
    Write-Host "   npm devrait etre inclus avec Node.js" -ForegroundColor Yellow
    exit 1
}

# Installer les dependances
Write-Host ""
Write-Host "Installation des dependances..." -ForegroundColor Yellow
Write-Host "   Cela peut prendre quelques minutes..." -ForegroundColor Gray
Write-Host ""

npm install

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "Dependances installees avec succes!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Les erreurs dans l'editeur devraient maintenant disparaitre!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Redemarrez votre editeur (VS Code) pour que les changements prennent effet." -ForegroundColor Yellow
} else {
    Write-Host ""
    Write-Host "Erreur lors de l'installation" -ForegroundColor Red
    Write-Host "   Verifiez les messages d'erreur ci-dessus" -ForegroundColor Yellow
    exit 1
}
