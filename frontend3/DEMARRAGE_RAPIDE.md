# ⚡ Démarrage Rapide - Salamati Mobile

## 🎯 En 5 Minutes Chrono!

### 📱 Objectif
Avoir l'application Salamati installée et fonctionnelle sur votre téléphone mobile.

---

## 🚀 Étape par Étape

### 1️⃣ Sur votre Ordinateur (2 min)

Ouvrez un terminal et tapez:

```bash
cd [chemin-vers-le-projet-salamati]
npm install  # Si première fois
npm run dev
```

Vous verrez quelque chose comme:
```
  VITE v5.x.x  ready in 234 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: http://192.168.1.10:5173/
```

**✏️ NOTEZ l'adresse "Network"** (ex: `http://192.168.1.10:5173`)

---

### 2️⃣ Sur votre Mobile (1 min)

#### Option A - Même WiFi (Simple)

1. **Connectez votre téléphone au même WiFi** que votre ordinateur
2. **Ouvrez le navigateur** (Safari sur iPhone, Chrome sur Android)
3. **Tapez l'adresse notée** (ex: `http://192.168.1.10:5173`)

#### Option B - Ngrok (Si problème avec Option A)

Sur votre ordinateur, ouvrez un **2ème terminal**:

```bash
ngrok http 5173
```

Vous verrez:
```
Forwarding  https://abc-123-456.ngrok.io -> http://localhost:5173
```

**Sur mobile**, ouvrez: `https://abc-123-456.ngrok.io`

---

### 3️⃣ Installer l'App (1 min)

#### 📱 Sur Android:

L'app vous demande directement:
```
┌─────────────────────────┐
│  Installer Salamati?    │
│                         │
│  [Installer] [Non merci]│
└─────────────────────────┘
```

Tapez **"Installer"**. C'est tout! ✅

#### 🍎 Sur iPhone:

1. En bas de Safari, tapez **📤** (bouton Partager)
2. Faites défiler et trouvez **"Sur l'écran d'accueil"**
3. Tapez **"Ajouter"**

L'icône Salamati est sur votre écran! ✅

---

### 4️⃣ Configuration (1 min)

Ouvrez Salamati depuis l'écran d'accueil:

1. **Autorisez la localisation** quand demandé
2. **Ajoutez un contact d'urgence**:
   - Tapez sur "Ajouter Contact"
   - Nom: ex "Maman"
   - Numéro: ex "0612345678"
   - Tapez "Ajouter"

3. **Testez le SOS**:
   - Maintenez le bouton rouge
   - Comptez jusqu'à 2
   - **Relâchez** (pour annuler le test)

**✅ C'est prêt!**

---

## 🎉 Vous avez réussi!

Salamati est maintenant installée sur votre mobile. Voici ce que vous pouvez faire:

### ⚡ Actions Immédiates

- 🔴 **Bouton SOS**: Maintenir 3 secondes
- 📞 **Contacts d'urgence**: En gérer 5 max
- 🚨 **Actions rapides**: Faux appel, Alarme, Partage localisation
- 💜 **Assistant juridique**: Bouton violet (en bas à droite)

### 📋 Numéros Pré-configurés

L'app contient déjà tous les numéros d'urgence marocains:
- Police: 19
- Gendarmerie: 177
- Protection Civile: 15
- SAMU: 141
- Violence femmes: 8350

---

## 🔧 Ça ne marche pas?

### ❌ "Cannot connect" ou "Impossible de se connecter"

**Solution 1**: Vérifiez le WiFi
```
Ordinateur et mobile → Même réseau WiFi ✅
```

**Solution 2**: Désactivez temporairement votre pare-feu
```
Windows: Pare-feu Windows Defender → Désactiver temporairement
Mac: Préférences Système → Sécurité → Pare-feu → Désactiver
```

**Solution 3**: Utilisez Ngrok (voir Étape 2, Option B)

### ❌ "Installer" ne s'affiche pas

**Sur iPhone**: Utilisez **Safari** (pas Chrome, pas Firefox)
**Sur Android**: Utilisez **Chrome** (pas Samsung Internet, pas Firefox)

Rechargez la page (tirez vers le bas)

### ❌ Géolocalisation ne fonctionne pas

**iPhone**: Réglages → Safari → Localisation → **"En utilisant l'app"**
**Android**: Paramètres → Apps → Chrome → Autorisations → Localisation → **"Autoriser"**

Puis redémarrez l'app.

---

## 📚 Besoin de Plus d'Infos?

### Documentation Disponible

- **📱 Guide Express**: `UTILISATION_MOBILE.txt` (recommandé!)
- **📖 Guide Complet**: `GUIDE_INSTALLATION_MOBILE.md` (tous les détails)
- **💡 Astuces**: `ASTUCES_MOBILE.md` (optimisations)
- **❓ FAQ**: `COMMENT_UTILISER_SUR_MOBILE.md` (troubleshooting)

### Ouvrir un Guide

```bash
# Sur Windows
notepad UTILISATION_MOBILE.txt

# Sur Mac/Linux
cat UTILISATION_MOBILE.txt
```

Ou ouvrez simplement le fichier dans votre éditeur de code préféré!

---

## 🎯 Prochaines Étapes

Maintenant que l'app est installée:

### Aujourd'hui:
- ✅ Ajoutez 2-3 contacts d'urgence
- ✅ Testez le bouton SOS dans un endroit sûr
- ✅ Vérifiez que la géolocalisation fonctionne

### Cette Semaine:
- 📱 Partagez Salamati avec 3 amies
- 🎓 Explorez l'assistant juridique
- 🔔 Configurez les actions rapides

### Ce Mois:
- 🧪 Testez l'app une fois par semaine
- 📝 Donnez votre feedback
- 🌟 Devenez ambassadrice Salamati

---

## 💬 Questions Rapides

**Q: C'est gratuit?**
✅ Oui, 100% gratuit et open source

**Q: Mes données sont sécurisées?**
✅ Oui, tout est stocké localement sur votre téléphone

**Q: Ça fonctionne hors ligne?**
✅ Oui, après la première installation

**Q: Je peux désinstaller?**
✅ Oui, comme n'importe quelle app: maintenez l'icône → Supprimer

**Q: Ça remplace la police?**
❌ Non, en danger réel appelez toujours le 19 ou 177 en premier

---

## 🆘 Support

**Bug? Question? Suggestion?**

1. Consultez d'abord: `UTILISATION_MOBILE.txt`
2. Si problème persiste: ouvrez une issue GitHub
3. Urgent: contactez le support (voir documentation)

---

## 🌟 Merci d'utiliser Salamati!

Vous faites partie d'une communauté qui veille à la sécurité des femmes au Maroc. 

**Partagez, testez, améliorons ensemble! 💜**

---

🛡️ **Salamati - Votre sécurité, notre priorité 🇲🇦**

*Installation complète en 5 minutes | Gratuit | Sécurisé | Open Source*

**Dernière mise à jour:** Mars 2026 | **Version:** 1.0.0

---

**P.S.**: Sauvegardez ce guide! Vous en aurez peut-être besoin pour aider d'autres femmes à installer Salamati. 📱💪
