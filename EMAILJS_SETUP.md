# 📧 Configuration EmailJS pour Envoi Direct d'Emails

## 🎯 Objectif

Configurer EmailJS pour envoyer des emails directement depuis le formulaire de contact vers `benaicha@et.esiea.fr` sans ouvrir le client email.

## ✅ Solution Actuelle

Le formulaire fonctionne déjà avec un fallback `mailto:` qui ouvre le client email de l'utilisateur.

## 🚀 Pour Envoyer Directement (Optionnel)

### Étape 1: Créer un Compte EmailJS

1. Allez sur: https://www.emailjs.com/
2. Créez un compte gratuit (200 emails/mois)
3. Vérifiez votre email

### Étape 2: Configurer un Service Email

1. Dans EmailJS Dashboard → **Email Services**
2. Cliquez **Add New Service**
3. Choisissez votre fournisseur (Gmail, Outlook, etc.)
4. Connectez votre compte email
5. **Copiez le Service ID**

### Étape 3: Créer un Template

1. Dans EmailJS Dashboard → **Email Templates**
2. Cliquez **Create New Template**
3. Configurez le template:
   - **To Email:** `benaicha@et.esiea.fr`
   - **From Name:** `{{from_name}}`
   - **From Email:** `{{from_email}}`
   - **Subject:** `{{subject}}`
   - **Message:** `{{message}}`
   - **Reply To:** `{{reply_to}}`
4. **Copiez le Template ID**

### Étape 4: Obtenir la Clé Publique

1. Dans EmailJS Dashboard → **Account** → **General**
2. **Copiez la Public Key**

### Étape 5: Ajouter les Variables d'Environnement

Créez un fichier `.env.local` à la racine du projet:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=votre_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=votre_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=votre_public_key
```

### Étape 6: Ajouter .env.local à .gitignore

Le fichier `.env.local` est déjà dans `.gitignore` pour la sécurité.

## 📝 Note

- **Gratuit:** 200 emails/mois avec EmailJS
- **Sécurisé:** Les clés sont dans `.env.local` (non commité)
- **Fallback:** Si EmailJS n'est pas configuré, le formulaire utilise `mailto:`

## ✅ Après Configuration

Une fois configuré, les emails seront envoyés directement sans ouvrir le client email!

