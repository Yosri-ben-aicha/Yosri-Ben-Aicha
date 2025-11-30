# 🎨 Configuration du Logo comme Favicon

## 📸 Votre Logo

Pour que votre logo apparaisse à côté de l'URL dans le navigateur (comme Google et YouTube), vous devez placer votre fichier logo dans le dossier `public/` avec l'un de ces noms:

### Option 1: Format PNG (Recommandé)
- **Nom du fichier:** `logo.png`
- **Taille recommandée:** 
  - 32x32 pixels (pour le favicon de base)
  - 180x180 pixels (pour Apple Touch Icon)
  - 512x512 pixels (pour les partages sociaux)
- **Format:** PNG avec fond transparent (si possible)

### Option 2: Format SVG (Meilleure qualité)
- **Nom du fichier:** `logo.svg`
- **Format:** SVG vectoriel (s'adapte à toutes les tailles)

### Option 3: Format ICO (Classique)
- **Nom du fichier:** `favicon.ico`
- **Taille:** 16x16, 32x32, ou 48x48 pixels

## ✅ Configuration Actuelle

Le site est configuré pour utiliser:
- `/logo.png` comme favicon principal (32x32)
- `/favicon.ico` comme fallback
- `/logo.svg` pour les navigateurs modernes
- `/logo.png` (180x180) pour Apple Touch Icon

## 📋 Étapes pour Ajouter Votre Logo

1. **Préparez votre logo:**
   - Si vous avez une image PNG/SVG de votre logo avec "PORTFOLIO"
   - Redimensionnez-la à 32x32 pixels pour le favicon
   - Ou utilisez un SVG qui s'adapte automatiquement

2. **Placez le fichier dans `public/`:**
   - Copiez votre logo dans `public/logo.png`
   - (Optionnel) Créez aussi `public/favicon.ico` pour compatibilité

3. **Redémarrez le serveur:**
   - Le logo apparaîtra automatiquement dans l'onglet du navigateur

## 🎯 Où le Logo Apparaîtra

- ✅ **Onglet du navigateur** (favicon à côté de l'URL)
- ✅ **Favoris/Bookmarks**
- ✅ **Partages sur réseaux sociaux** (LinkedIn, Twitter, Facebook)
- ✅ **Résultats de recherche Google**
- ✅ **Écran d'accueil mobile** (iOS/Android)

## 🎯 Nom du Site

Le nom du site est maintenant: **"Yosri Ben Aicha"**

Il apparaîtra:
- Dans l'onglet du navigateur (titre de la page)
- Dans les résultats de recherche
- Dans les partages sociaux

## 💡 Astuce

Si votre logo est complexe (avec texte "PORTFOLIO"), créez une version simplifiée pour le favicon (juste l'avatar ou les initiales "YB") car les favicons sont très petits (16x16 ou 32x32 pixels).
