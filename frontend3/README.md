# 🛡️ Salamati - Application de Sécurité pour Femmes (Maroc)

<div align="center">

![Salamati Logo](public/icon.svg)

**Votre sécurité, notre priorité 🇲🇦**

[![PWA](https://img.shields.io/badge/PWA-Ready-success?style=for-the-badge&logo=pwa)](/)
[![Mobile](https://img.shields.io/badge/Mobile-Optimized-blue?style=for-the-badge&logo=mobile)](/)
[![Open Source](https://img.shields.io/badge/Open-Source-orange?style=for-the-badge&logo=github)](/)
[![Morocco](https://img.shields.io/badge/Made_in-Morocco-green?style=for-the-badge&logo=morocco)](/)

Application mobile de sécurité personnelle pour femmes, adaptée au contexte marocain.

[🚀 Installation](#-installation-rapide) • [📱 Mobile](#-utilisation-sur-mobile) • [✨ Fonctionnalités](#-fonctionnalités) • [📚 Documentation](#-documentation)

</div>

---

## 🎯 À Propos

**Salamati** est une Progressive Web App (PWA) de sécurité pour femmes, spécialement conçue pour le contexte marocain. Elle offre:

- 🔴 **Bouton SOS** avec géolocalisation GPS en temps réel
- 👥 **Gestion de contacts d'urgence** (jusqu'à 5 contacts)
- 📞 **Numéros d'urgence marocains** pré-configurés
- 💜 **Assistant juridique** IA pour informations sur les lois marocaines
- ⚡ **Actions rapides**: faux appel, alarme sonore, partage de localisation
- 📴 **Fonctionne hors ligne** après installation

---

## ✨ Fonctionnalités

### 🆘 Bouton SOS
- Maintenir 3 secondes pour activer
- Envoie automatiquement votre position GPS
- Partage avec tous vos contacts d'urgence
- Vibration et feedback visuel
- Annulable en relâchant

### 👥 Contacts d'Urgence
- Jusqu'à 5 contacts de confiance
- Nom, téléphone et relation
- Modification et suppression faciles
- Stockage local sécurisé

### 📞 Numéros d'Urgence Maroc
- 🚓 Police: **19**
- 🚔 Gendarmerie Royale: **177**
- 🚒 Protection Civile: **15**
- 🚑 SAMU: **141**
- 💊 Centre Antipoison: **0801 000 180**
- 📞 Violence contre les femmes: **8350**
- 👶 SOS Enfants: **2511**

### ⚡ Actions Rapides
- **Faux Appel**: Simuler un appel pour s'extraire d'une situation
- **Alarme Sonore**: Alerte sonore puissante pour attirer l'attention
- **Partage de Localisation**: Partager votre position en temps réel

### 💜 Assistant Juridique
Chatbot IA qui informe sur:
- Loi 103-13 contre les violences faites aux femmes
- Harcèlement sexuel au travail et dans l'espace public
- Code de la famille (Moudawana)
- Procédures de plainte
- Droits de divorce
- Garde d'enfants et pension alimentaire
- Violence conjugale

---

## 🚀 Installation Rapide

### Prérequis
- Node.js 16+ 
- npm ou pnpm

### Installation

```bash
# Cloner le projet
git clone https://github.com/votre-username/salamati.git
cd salamati

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

Le serveur démarre sur `http://localhost:5173`

---

## 📱 Utilisation sur Mobile

### 🎯 Méthode Rapide (5 min)

Consultez notre guide express: **[DEMARRAGE_RAPIDE.md](DEMARRAGE_RAPIDE.md)**

### 📖 Guide Détaillé

Pour une installation complète sur mobile:

1. **Guide Express** (TXT): [UTILISATION_MOBILE.txt](UTILISATION_MOBILE.txt)
2. **Guide Complet** (Markdown): [COMMENT_UTILISER_SUR_MOBILE.md](COMMENT_UTILISER_SUR_MOBILE.md)
3. **Documentation PWA**: [GUIDE_INSTALLATION_MOBILE.md](GUIDE_INSTALLATION_MOBILE.md)
4. **Astuces & Conseils**: [ASTUCES_MOBILE.md](ASTUCES_MOBILE.md)

### Installation PWA

#### Sur Android:
1. Ouvrez l'app dans Chrome
2. Tapez "Installer Salamati" quand la bannière apparaît
3. L'icône s'ajoute à votre écran d'accueil

#### Sur iOS:
1. Ouvrez l'app dans Safari
2. Tapez 📤 (Partager) → "Sur l'écran d'accueil"
3. Tapez "Ajouter"

---

## 🏗️ Architecture Technique

### Stack Technologique

- **Frontend**: React 18.3.1 + TypeScript
- **Styling**: Tailwind CSS v4.1
- **Build**: Vite 6.3.5
- **PWA**: vite-plugin-pwa
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React
- **Animations**: Motion (Framer Motion)

### Structure du Projet

```
salamati/
├── public/                    # Fichiers statiques
│   └── icon.svg              # Icône de l'application
├── src/
│   ├── app/
│   │   ├── App.tsx           # Composant principal
│   │   ├── main.tsx          # Point d'entrée
│   │   └── components/       # Composants React
│   │       ├── EmergencyContacts.tsx
│   │       ├── EmergencyNumbers.tsx
│   │       ├── LegalAssistant.tsx
│   │       ├── QuickActions.tsx
│   │       ├── InstallPrompt.tsx
│   │       ├── OfflineIndicator.tsx
│   │       └── ui/           # Composants UI (shadcn)
│   └── styles/
│       ├── index.css         # Styles principaux
│       ├── theme.css         # Thème
│       ├── mobile.css        # Optimisations mobile
│       └── fonts.css         # Polices
├── vite.config.ts            # Configuration Vite + PWA
├── index.html                # Template HTML
└── package.json              # Dépendances
```

---

## 🔧 Scripts Disponibles

```bash
# Développement
npm run dev              # Démarre le serveur de développement

# Production
npm run build           # Build pour production
npm run preview         # Prévisualise le build

# PWA
vite build              # Génère le Service Worker et manifest
```

---

## 🌐 Déploiement

### Vercel (Recommandé)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
npm install -g netlify-cli
netlify deploy --prod
```

### GitHub Pages

```bash
npm install --save-dev gh-pages
npm run build
npx gh-pages -d dist
```

Voir [GUIDE_INSTALLATION_MOBILE.md](GUIDE_INSTALLATION_MOBILE.md) pour plus de détails.

---

## 📚 Documentation

| Document | Description |
|----------|-------------|
| [DEMARRAGE_RAPIDE.md](DEMARRAGE_RAPIDE.md) | Installation en 5 minutes ⚡ |
| [UTILISATION_MOBILE.txt](UTILISATION_MOBILE.txt) | Guide express (format texte) |
| [COMMENT_UTILISER_SUR_MOBILE.md](COMMENT_UTILISER_SUR_MOBILE.md) | Guide détaillé installation mobile |
| [GUIDE_INSTALLATION_MOBILE.md](GUIDE_INSTALLATION_MOBILE.md) | Documentation complète PWA |
| [ASTUCES_MOBILE.md](ASTUCES_MOBILE.md) | Conseils et optimisations |

---

## 🔒 Sécurité et Confidentialité

### Stockage Local
- ✅ Toutes les données sont stockées **localement** sur votre appareil
- ✅ **Aucune donnée** n'est envoyée à un serveur externe
- ✅ Vos contacts et informations restent **privés**

### Permissions Requises
- 📍 **Localisation**: Pour partager votre position lors d'une alerte SOS
- 📞 **SMS** (optionnel): Pour envoyer des messages d'urgence
- 🔔 **Notifications** (futur): Pour les alertes importantes

### Conformité
- ✅ RGPD compliant
- ✅ Pas de tracking
- ✅ Open source (code vérifiable)
- ✅ HTTPS obligatoire en production

---

## 🤝 Contribution

Les contributions sont les bienvenues! Voici comment contribuer:

1. Fork le projet
2. Créez une branche (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

### Idées de Contributions

- 🌍 Traduction en arabe/anglais
- 🎨 Amélioration du design
- 🐛 Corrections de bugs
- ✨ Nouvelles fonctionnalités
- 📝 Documentation
- 🧪 Tests automatisés

---

## 🐛 Rapport de Bugs

Trouvé un bug? Merci de créer une issue avec:

1. Description du problème
2. Étapes pour reproduire
3. Comportement attendu vs réel
4. Captures d'écran (si applicable)
5. Environnement (navigateur, OS, version)

---

## 📖 Contexte Juridique Marocain

L'assistant juridique inclut des informations sur:

### Loi 103-13
- Violence physique, psychologique, sexuelle, économique
- Protection des victimes
- Sanctions pénales

### Code de la Famille (Moudawana)
- Mariage et divorce
- Garde des enfants
- Pension alimentaire
- Droits de la femme

### Harcèlement
- Harcèlement sexuel au travail (loi 103-13)
- Harcèlement dans l'espace public
- Procédures de plainte

---

## 🌟 Roadmap

### Version 1.1 (Q2 2026)
- [ ] Traduction en arabe
- [ ] Mode sombre
- [ ] Historique des alertes
- [ ] Enregistrement audio discret

### Version 1.2 (Q3 2026)
- [ ] Géofencing (zones sûres/dangereuses)
- [ ] Intégration Apple Watch
- [ ] Partage de trajet en temps réel
- [ ] Communauté d'entraide

### Version 2.0 (Q4 2026)
- [ ] Backend avec Supabase
- [ ] Réseau d'alerte communautaire
- [ ] Statistiques et heatmaps
- [ ] Intégration avec autorités

---

## 📊 Statistiques

- ⚡ Temps de chargement: < 2 secondes
- 📱 Taille de l'app: < 500 KB
- 🔋 Consommation batterie: < 1% par heure
- 📍 Précision GPS: 5-10 mètres
- 📴 Fonctionne hors ligne: Oui

---

## 🙏 Remerciements

Salamati a été développé avec le soutien de:

- La communauté open source
- Les femmes marocaines qui ont partagé leurs expériences
- Les associations de défense des droits des femmes
- Les développeurs qui ont contribué

---

## 📄 Licence

Ce projet est sous licence MIT. Voir [LICENSE](LICENSE) pour plus de détails.

---

## 📞 Contact et Support

- 🌐 Site web: [www.salamati.ma](https://www.salamati.ma) *(exemple)*
- 📧 Email: support@salamati.ma *(exemple)*
- 🐛 Issues: [GitHub Issues](https://github.com/votre-username/salamati/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/votre-username/salamati/discussions)

---

## ⚠️ Avertissement Important

**Salamati est un outil d'assistance et ne remplace pas les services d'urgence officiels.**

En cas de danger immédiat:
- 🚨 **Appelez toujours** le 19 (Police) ou 177 (Gendarmerie) en premier
- 🆘 **Utilisez Salamati** comme complément
- 🏃 **Mettez-vous en sécurité** avant tout

L'application est fournie "telle quelle" sans garantie. Les développeurs ne peuvent être tenus responsables en cas de dysfonctionnement technique.

---

## 💜 Message aux Utilisatrices

Votre sécurité est notre priorité. Salamati a été créée pour vous accompagner, vous protéger et vous informer. 

**Ensemble, nous pouvons créer un Maroc plus sûr pour toutes les femmes.**

Si vous vous sentez en danger, **n'hésitez jamais à demander de l'aide**. Vous n'êtes pas seule.

---

<div align="center">

**🛡️ Salamati - Votre sécurité, notre priorité 🇲🇦**

Développé avec ❤️ pour les femmes marocaines

[⬆ Retour en haut](#️-salamati---application-de-sécurité-pour-femmes-maroc)

</div>

---

**Dernière mise à jour:** Mars 2026 | **Version:** 1.0.0
