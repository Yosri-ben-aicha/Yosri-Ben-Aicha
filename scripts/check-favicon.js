#!/usr/bin/env node

/**
 * Script to check if favicon files exist and provide helpful feedback
 */

const fs = require('fs');
const path = require('path');

const publicDir = path.join(process.cwd(), 'public');
const faviconFiles = [
  'favicon.png',
  'logo.png',
  'favicon.ico',
  'logo.svg'
];

console.log('🔍 Vérification des fichiers favicon...\n');

let foundFiles = [];
let missingFiles = [];

faviconFiles.forEach(file => {
  const filePath = path.join(publicDir, file);
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);
    const sizeKB = (stats.size / 1024).toFixed(2);
    foundFiles.push({ name: file, size: sizeKB });
    console.log(`✅ ${file} trouvé (${sizeKB} KB)`);
  } else {
    missingFiles.push(file);
  }
});

console.log('\n');

if (foundFiles.length === 0) {
  console.log('❌ Aucun fichier favicon trouvé !\n');
  console.log('📋 Pour ajouter votre logo :');
  console.log('   1. Placez votre fichier logo dans public/');
  console.log('   2. Renommez-le en favicon.png ou logo.png');
  console.log('   3. Redémarrez le serveur (npm run dev)');
  console.log('   4. Videz le cache du navigateur\n');
  process.exit(1);
} else {
  console.log(`✅ ${foundFiles.length} fichier(s) favicon trouvé(s) !\n`);
  
  // Check priority
  if (foundFiles.find(f => f.name === 'favicon.png')) {
    console.log('🎯 favicon.png sera utilisé comme favicon principal\n');
  } else if (foundFiles.find(f => f.name === 'logo.png')) {
    console.log('🎯 logo.png sera utilisé comme favicon principal\n');
  }
  
  console.log('✨ Votre logo devrait apparaître dans l\'onglet du navigateur !\n');
  process.exit(0);
}

