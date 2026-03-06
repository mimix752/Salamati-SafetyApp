# 📱 Comment Utiliser Salamati sur Mobile - Guide Rapide

## 🚀 Installation en 3 Étapes

### Étape 1: Démarrez le serveur

```bash
npm run dev
```

### Étape 2: Accédez depuis votre mobile

**Option A - Via WiFi (Recommandé pour test):**

1. Assurez-vous que votre ordinateur et votre téléphone sont sur le **même WiFi**
2. Trouvez l'adresse IP de votre ordinateur:
   - **Windows**: Ouvrez CMD et tapez `ipconfig`
   - **Mac**: Ouvrez Terminal et tapez `ifconfig | grep inet`
   - Notez l'adresse (ex: `192.168.1.10`)
3. Sur votre mobile, ouvrez le navigateur et allez à: `http://[VOTRE-IP]:5173`
   - Exemple: `http://192.168.1.10:5173`

**Option B - Via Ngrok (Accès depuis n'importe où):**

1. Téléchargez Ngrok: https://ngrok.com/download
2. Ouvrez un terminal et tapez:
   ```bash
   ngrok http 5173
   ```
3. Ngrok vous donnera une URL (ex: `https://abc123.ngrok.io`)
4. Ouvrez cette URL sur votre mobile

### Étape 3: Installez l'application

#### 📱 Sur Android:

1. Une fois l'app ouverte dans Chrome, vous verrez une bannière en haut "Installer Salamati"
2. Cliquez sur **"Installer"**
3. L'icône apparaîtra sur votre écran d'accueil!

**Ou manuellement:**
1. Menu ⋮ (trois points) → "Installer l'application"
2. Confirmez l'installation

#### 🍎 Sur iPhone:

1. Ouvrez Safari (important!)
2. Tapez sur le bouton **Partager** 📤 en bas
3. Faites défiler et sélectionnez **"Sur l'écran d'accueil"**
4. Tapez **"Ajouter"**
5. L'icône Salamati apparaît sur votre écran d'accueil!

---

## ✨ Fonctionnalités Mobiles

### 🔴 Bouton SOS
- **Maintenez 3 secondes** pour activer
- Envoie votre localisation GPS automatiquement
- Partage avec vos contacts d'urgence

### 📍 Géolocalisation
- Autorisez les permissions de localisation
- Fonctionne même hors ligne (après première utilisation)

### 📞 Partage SMS
- Sur mobile, le bouton SOS ouvre directement l'app SMS
- Message pré-rempli avec votre position

### 💜 Assistant Juridique
- Bouton violet flottant en bas à droite
- Répond à vos questions sur les lois marocaines

---

## 🔧 Résolution de Problèmes Rapides

### ❌ "Impossible d'accéder à l'adresse"
✅ Vérifiez que vous êtes sur le même WiFi
✅ Désactivez temporairement le pare-feu de votre ordinateur
✅ Utilisez Ngrok comme alternative

### 📍 "La géolocalisation ne fonctionne pas"
✅ Autorisez les permissions dans les paramètres du navigateur
✅ Sur iOS: Réglages → Safari → Localisation → "Autoriser"
✅ Assurez-vous que le GPS est activé

### 📱 "Le bouton Installer n'apparaît pas"
✅ Sur iOS: Utilisez Safari (pas Chrome!)
✅ Sur Android: Utilisez Chrome
✅ Rechargez la page (F5)
✅ Assurez-vous d'être sur HTTPS (utilisez Ngrok si problème)

### 🔴 "Le bouton SOS ne fonctionne pas"
✅ Ajoutez au moins 1 contact d'urgence
✅ Autorisez les permissions de localisation
✅ **Maintenez** le bouton (ne tapez pas juste)

---

## 🎯 Checklist Première Utilisation

Une fois l'app installée:

- [ ] ✅ Ouvrir l'app depuis l'écran d'accueil
- [ ] ✅ Ajouter 2-3 contacts d'urgence
- [ ] ✅ Tester le bouton SOS (maintenir 3 sec, relâcher pour annuler)
- [ ] ✅ Vérifier que la géolocalisation fonctionne
- [ ] ✅ Explorer l'assistant juridique (bouton violet)
- [ ] ✅ Tester l'alarme sonore (Actions Rapides)
- [ ] ✅ Noter les numéros d'urgence marocains

---

## 📊 Pour Déployer en Production

Si vous voulez déployer l'app pour qu'elle soit accessible par Internet:

### Vercel (Le plus simple) ⭐

```bash
npm install -g vercel
vercel
```

Suivez les instructions, Vercel vous donnera une URL publique!

### Netlify

```bash
npm run build
npm install -g netlify-cli
netlify deploy --prod
```

Consultez le fichier `GUIDE_INSTALLATION_MOBILE.md` pour plus de détails.

---

## 🆘 Besoin d'Aide?

1. **Lisez le guide complet**: `GUIDE_INSTALLATION_MOBILE.md`
2. **Testez d'abord en local** avec Ngrok
3. **Vérifiez les permissions** (localisation, notifications)
4. **Testez avec un contact** avant utilisation réelle

---

## 🌟 C'est Tout!

Votre application Salamati est maintenant prête à être utilisée sur mobile! 

**Important**: Ajoutez vos vrais contacts d'urgence et testez le bouton SOS dans un environnement sûr avant de compter dessus en situation réelle.

---

**Développé avec ❤️ pour la sécurité des femmes marocaines**

🛡️ **Salamati - Votre sécurité, notre priorité 🇲🇦**
