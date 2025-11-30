# Script pour lancer le site localement
# Ce script installe Node.js si necessaire, puis lance le serveur de developpement

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  LANCEMENT DU SITE LOCAL" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Verifier Node.js
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
    Write-Host "Installation requise pour lancer le site localement:" -ForegroundColor Yellow
    Write-Host "  1. Telechargez Node.js: https://nodejs.org/" -ForegroundColor Cyan
    Write-Host "  2. Installez la version LTS" -ForegroundColor Cyan
    Write-Host "  3. Redemarrez votre terminal" -ForegroundColor Cyan
    Write-Host "  4. Relancez ce script" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Ou installez avec winget:" -ForegroundColor Yellow
    Write-Host "  winget install OpenJS.NodeJS.LTS" -ForegroundColor Cyan
    Write-Host ""
    
    $openNode = Read-Host "Voulez-vous ouvrir le site de telechargement Node.js? (o/n)"
    if ($openNode -eq "o" -or $openNode -eq "O") {
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
    exit 1
}

# Installer les dependances si necessaire
Write-Host ""
if (-not (Test-Path "node_modules")) {
    Write-Host "Installation des dependances..." -ForegroundColor Yellow
    Write-Host "Cela peut prendre 2-5 minutes..." -ForegroundColor Gray
    npm install
    
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Erreur lors de l'installation des dependances" -ForegroundColor Red
        exit 1
    }
    Write-Host "Dependances installees!" -ForegroundColor Green
} else {
    Write-Host "Dependances deja installees" -ForegroundColor Green
}

# Lancer le serveur de developpement
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  LANCEMENT DU SERVEUR DE DEVELOPPEMENT" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Le site sera accessible sur:" -ForegroundColor Yellow
Write-Host "  http://localhost:3000" -ForegroundColor Green
Write-Host ""
Write-Host "Appuyez sur Ctrl+C pour arreter le serveur" -ForegroundColor Gray
Write-Host ""

# Lancer Next.js dev server
npm run dev

