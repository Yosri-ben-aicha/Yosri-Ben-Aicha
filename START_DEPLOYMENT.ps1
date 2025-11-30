# Script de demarrage du deploiement Vercel
# Ce script ouvre Vercel et guide l'utilisateur

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  DEPLOIEMENT VERCEL - GUIDE RAPIDE" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "Statut du projet:" -ForegroundColor Yellow
Write-Host "  Repository: https://github.com/Yosri-ben-aicha/Yosri-Ben-Aicha" -ForegroundColor Green
Write-Host "  Branche: main" -ForegroundColor Green
Write-Host "  Statut: Pret pour deploiement" -ForegroundColor Green
Write-Host ""

Write-Host "Etapes de deploiement:" -ForegroundColor Yellow
Write-Host "  1. Ouvrir Vercel dans votre navigateur" -ForegroundColor White
Write-Host "  2. Cliquer 'Import Git Repository'" -ForegroundColor White
Write-Host "  3. Selectionner 'Yosri-Ben-Aicha'" -ForegroundColor White
Write-Host "  4. Cliquer 'Deploy'" -ForegroundColor White
Write-Host ""

$openVercel = Read-Host "Voulez-vous ouvrir Vercel maintenant? (o/n)"
if ($openVercel -eq "o" -or $openVercel -eq "O") {
    Start-Process "https://vercel.com/new"
    Write-Host ""
    Write-Host "Navigateur ouvert!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Suivez les etapes ci-dessus pour deployer." -ForegroundColor Yellow
} else {
    Write-Host ""
    Write-Host "Allez sur: https://vercel.com/new" -ForegroundColor Cyan
    Write-Host "Et suivez les etapes ci-dessus." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Apres le premier deploiement," -ForegroundColor Green
Write-Host "  chaque push declenchera" -ForegroundColor Green
Write-Host "  automatiquement un nouveau deploiement!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan

