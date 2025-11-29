# Script Automatique - Configuration Nouveau Repository
# Usage: .\setup-new-repo.ps1

Write-Host "🚀 Configuration Automatique du Nouveau Repository" -ForegroundColor Cyan
Write-Host "=================================================" -ForegroundColor Cyan
Write-Host ""

# Demander le nom du nouveau repository
$repoName = Read-Host "Entrez le nom du nouveau repository (ex: yosri-ben-aicha-portfolio)"

if ([string]::IsNullOrWhiteSpace($repoName)) {
    $repoName = "yosri-ben-aicha-portfolio"
    Write-Host "Utilisation du nom par défaut: $repoName" -ForegroundColor Yellow
}

$repoUrl = "https://github.com/Yosri-ben-aicha/$repoName.git"

Write-Host ""
Write-Host "📋 Étapes à suivre:" -ForegroundColor Green
Write-Host "1. Créez le repository sur GitHub: https://github.com/new" -ForegroundColor White
Write-Host "   - Nom: $repoName" -ForegroundColor White
Write-Host "   - Description: Portfolio professionnel de Yosri Ben Aicha" -ForegroundColor White
Write-Host "   - Public" -ForegroundColor White
Write-Host "   - NE COCHEZ PAS 'Add a README'" -ForegroundColor Yellow
Write-Host ""
Write-Host "2. Une fois créé, appuyez sur Entrée pour continuer..." -ForegroundColor Cyan
Read-Host

Write-Host ""
Write-Host "🔄 Mise à jour du remote Git..." -ForegroundColor Cyan

# Supprimer l'ancien remote
try {
    git remote remove origin 2>$null
    Write-Host "✅ Ancien remote supprimé" -ForegroundColor Green
} catch {
    Write-Host "⚠️  Pas d'ancien remote à supprimer" -ForegroundColor Yellow
}

# Ajouter le nouveau remote
try {
    git remote add origin $repoUrl
    Write-Host "✅ Nouveau remote ajouté: $repoUrl" -ForegroundColor Green
} catch {
    Write-Host "⚠️  Remote existe déjà, mise à jour..." -ForegroundColor Yellow
    git remote set-url origin $repoUrl
    Write-Host "✅ Remote mis à jour" -ForegroundColor Green
}

Write-Host ""
Write-Host "📤 Envoi du code vers le nouveau repository..." -ForegroundColor Cyan

# Pousser vers le nouveau repo
try {
    git push -u origin main
    Write-Host ""
    Write-Host "✅ Code poussé avec succès!" -ForegroundColor Green
} catch {
    Write-Host ""
    Write-Host "❌ Erreur lors du push. Vérifiez que le repository existe sur GitHub." -ForegroundColor Red
    Write-Host "   URL attendue: $repoUrl" -ForegroundColor Yellow
    exit 1
}

Write-Host ""
Write-Host "🎉 Configuration terminée!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Prochaines étapes:" -ForegroundColor Cyan
Write-Host "1. Allez sur Vercel: https://vercel.com/dashboard" -ForegroundColor White
Write-Host "2. Cliquez 'Add New Project'" -ForegroundColor White
Write-Host "3. Importez: $repoName" -ForegroundColor White
Write-Host "4. Project Name: Yosri Ben Aicha" -ForegroundColor White
Write-Host "5. Cliquez 'Deploy'" -ForegroundColor White
Write-Host ""
Write-Host "Repository URL: $repoUrl" -ForegroundColor Cyan

