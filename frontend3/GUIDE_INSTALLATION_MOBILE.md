# 📱 Guide d'Installation Mobile - Salamati

## 🌟 Bienvenue!

Salamati est maintenant configurée comme une **Progressive Web App (PWA)**, ce qui signifie que vous pouvez l'installer sur votre téléphone mobile et l'utiliser comme une application native!

---

## 📋 Prérequis

Avant de commencer, assurez-vous d'avoir:
- ✅ Un smartphone (Android ou iOS)
- ✅ Un navigateur moderne (Chrome, Safari, Firefox, Edge)
- ✅ Une connexion Internet (pour la première installation)

---

## 🚀 Option 1: Installation Locale (Test et Développement)

### Étape 1: Démarrer le serveur de développement

```bash
npm run dev
# ou
pnpm dev
```

### Étape 2: Accéder depuis votre mobile

#### A. Via le même réseau WiFi

1. Trouvez l'adresse IP de votre ordinateur:
   - **Windows**: `ipconfig` dans le terminal
   - **Mac/Linux**: `ifconfig` ou `ip addr` dans le terminal
   
2. Notez l'URL locale (exemple: `http://192.168.1.10:5173`)

3. Sur votre mobile, connectez-vous au **même réseau WiFi**

4. Ouvrez le navigateur mobile et tapez l'URL (ex: `http://192.168.1.10:5173`)

#### B. Via Ngrok (tunnel public temporaire)

1. Installez Ngrok: https://ngrok.com/download

2. Démarrez un tunnel:
```bash
ngrok http 5173
```

3. Ngrok vous donnera une URL publique (ex: `https://abc123.ngrok.io`)

4. Ouvrez cette URL sur votre mobile

### Étape 3: Installer l'application sur mobile

#### 📱 Sur Android (Chrome/Samsung Internet)

1. Ouvrez l'URL de l'application dans Chrome
2. Tapez sur le menu ⋮ (trois points en haut à droite)
3. Sélectionnez **"Installer l'application"** ou **"Ajouter à l'écran d'accueil"**
4. Confirmez l'installation
5. L'icône Salamati apparaîtra sur votre écran d'accueil! 🎉

#### 🍎 Sur iPhone/iPad (Safari)

1. Ouvrez l'URL de l'application dans Safari
2. Tapez sur le bouton **Partager** 📤 (en bas au centre)
3. Faites défiler et sélectionnez **"Sur l'écran d'accueil"**
4. Modifiez le nom si nécessaire (ex: "Salamati")
5. Tapez sur **"Ajouter"**
6. L'icône Salamati apparaîtra sur votre écran d'accueil! 🎉

---

## 🌐 Option 2: Déploiement en Production

Pour une utilisation réelle, vous devez déployer l'application sur un serveur HTTPS. Voici les options recommandées:

### A. Vercel (Gratuit & Facile) ⭐ RECOMMANDÉ

1. Créez un compte sur [Vercel](https://vercel.com)
2. Installez Vercel CLI:
```bash
npm install -g vercel
```
3. Dans le dossier du projet, exécutez:
```bash
vercel
```
4. Suivez les instructions
5. Vercel vous donnera une URL (ex: `https://salamati.vercel.app`)
6. Partagez cette URL et installez l'app depuis cette URL!

### B. Netlify (Alternative gratuite)

1. Créez un compte sur [Netlify](https://netlify.com)
2. Installez Netlify CLI:
```bash
npm install -g netlify-cli
```
3. Build et déployez:
```bash
npm run build
netlify deploy --prod
```

### C. GitHub Pages

1. Ajoutez dans `package.json`:
```json
{
  "homepage": "https://votre-nom.github.io/salamati"
}
```
2. Installez gh-pages:
```bash
npm install --save-dev gh-pages
```
3. Ajoutez dans `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```
4. Déployez:
```bash
npm run deploy
```

---

## ✨ Fonctionnalités PWA Incluses

### 📴 Mode Hors Ligne
- L'application fonctionne même sans connexion Internet (après la première installation)
- Les données sont stockées localement sur votre téléphone

### 🔔 Notifications
- Le bouton SOS fonctionne instantanément
- Pas besoin d'ouvrir le navigateur

### 📍 Géolocalisation
- Accès direct au GPS de votre téléphone
- Partage de localisation en temps réel lors d'une alerte SOS

### 🎨 Interface Native
- L'app s'ouvre en plein écran (sans la barre du navigateur)
- Ressemble à une vraie application native
- Icône personnalisée sur l'écran d'accueil

### ⚡ Performance
- Chargement ultra-rapide
- Cache intelligent pour une expérience fluide

---

## 🎨 Personnalisation des Icônes

L'application utilise actuellement une icône SVG simple. Pour une icône professionnelle:

### Option 1: Utiliser un générateur en ligne

1. Allez sur [PWA Asset Generator](https://progressier.com/pwa-icons-generator) ou [Favicon Generator](https://favicon.io/)
2. Uploadez un logo (512x512px recommandé)
3. Téléchargez le pack d'icônes généré
4. Remplacez les fichiers dans `/public/`:
   - `pwa-192x192.png`
   - `pwa-512x512.png`
   - `pwa-maskable-192x192.png`
   - `pwa-maskable-512x512.png`
   - `favicon.ico`
   - `apple-touch-icon.png`

### Option 2: Créer manuellement avec Figma/Photoshop

1. Créez un carré 512x512px
2. Design avec le logo Salamati (bouclier rose/violet avec cœur)
3. Exportez en PNG avec les tailles: 192x192, 512x512
4. Pour les icônes "maskable", ajoutez 10% de padding sur tous les côtés

---

## 🔧 Résolution de Problèmes

### ❌ Le bouton "Installer l'app" n'apparaît pas

**Causes possibles:**
- Vous n'êtes pas sur HTTPS (sauf localhost)
- L'app est déjà installée
- Votre navigateur ne supporte pas les PWA
- Le manifest.json a des erreurs

**Solutions:**
1. Vérifiez que vous êtes sur HTTPS
2. Essayez de désinstaller puis réinstaller
3. Utilisez Chrome/Safari (navigateurs recommandés)
4. Vérifiez la console du navigateur pour les erreurs

### 📍 La géolocalisation ne fonctionne pas

**Solutions:**
1. Autorisez les permissions de localisation dans les paramètres du navigateur
2. Sur iOS, autorisez Safari à accéder à votre position
3. Assurez-vous que le GPS est activé sur votre téléphone

### 📱 L'app ne fonctionne pas hors ligne

**Solutions:**
1. Rechargez l'application au moins une fois avec Internet
2. Vérifiez que le Service Worker est actif (DevTools → Application → Service Workers)
3. Videz le cache et réinstallez

### 🔴 Le bouton SOS ne fonctionne pas

**Solutions:**
1. Ajoutez au moins un contact d'urgence dans l'app
2. Autorisez les permissions de localisation
3. Sur iOS, autorisez le partage de données

---

## 📊 Tester la PWA en Développement

### Chrome DevTools (Desktop)

1. Ouvrez l'app dans Chrome
2. Appuyez sur F12 (DevTools)
3. Allez dans l'onglet **Lighthouse**
4. Sélectionnez "Progressive Web App"
5. Cliquez sur "Generate report"
6. Score idéal: 100/100 ✅

### Mobile Simulation

1. Dans DevTools, cliquez sur l'icône mobile 📱
2. Sélectionnez un appareil (ex: iPhone 12 Pro)
3. Testez toutes les fonctionnalités

---

## 🔒 Sécurité et Confidentialité

### Données Locales
- ✅ Toutes les données (contacts, préférences) sont stockées LOCALEMENT sur votre téléphone
- ✅ Aucune donnée n'est envoyée à un serveur externe
- ✅ Vos informations restent privées et sécurisées

### Permissions Requises
- 📍 **Localisation**: Pour partager votre position lors d'une alerte SOS
- 📞 **Contacts** (optionnel): Pour faciliter l'ajout de contacts d'urgence
- 🔔 **Notifications** (futur): Pour les alertes importantes

---

## 📞 Numéros d'Urgence Marocains (Pré-configurés)

L'application inclut tous les numéros d'urgence marocains:
- 🚓 Police: **19**
- 🚔 Gendarmerie Royale: **177**
- 🚒 Protection Civile: **15**
- 🚑 SAMU: **141**
- 💊 Centre Antipoison: **0801 000 180**
- 📞 Numéro Vert (Violence): **8350**

---

## 🎯 Prochaines Étapes

Après l'installation:

1. **Ajoutez vos contacts d'urgence**
   - Au moins 2-3 personnes de confiance
   - Vérifiez que les numéros sont corrects

2. **Testez le bouton SOS**
   - Maintenez 3 secondes
   - Vérifiez que l'alerte s'active correctement

3. **Explorez l'assistant juridique**
   - Posez des questions sur vos droits
   - Consultez les lois marocaines (103-13, Moudawana, etc.)

4. **Configurez les actions rapides**
   - Faux appel
   - Alarme sonore
   - Partage de localisation

5. **Partagez avec vos proches**
   - Envoyez le lien d'installation
   - Expliquez comment utiliser l'app en urgence

---

## 💝 Support et Contact

Pour toute question ou assistance:
- 📧 Email: support@salamati.ma (exemple)
- 📱 WhatsApp: +212 XXX XXX XXX (exemple)
- 🌐 Site web: www.salamati.ma (exemple)

---

## 📄 Licence et Mentions Légales

© 2026 Salamati - Application de sécurité pour femmes
Développée avec ❤️ pour les femmes marocaines

**Important**: Cette application est un outil d'assistance et ne remplace pas les services d'urgence officiels. En cas de danger immédiat, appelez toujours les autorités (Police: 19, Gendarmerie: 177).

---

## 🌟 Merci d'utiliser Salamati!

Votre sécurité est notre priorité. 🛡️💜

**#Salamati #SécuritéFemmes #Maroc #PWA**
