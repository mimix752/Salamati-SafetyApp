# 🚀 Quick Start Guide - Selmeti Mobile App

## Installation Steps

### 1. Install Dependencies
```bash
cd selmeti-mobile
npm install
```

### 2. Start the App
```bash
npm start
```

This will open Expo DevTools in your browser.

### 3. Run on Your Device

#### Option A: Physical Device (Recommended)
1. Install **Expo Go** app from:
   - [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent) (Android)
   - [Apple App Store](https://apps.apple.com/app/expo-go/id982107779) (iOS)

2. Scan the QR code shown in terminal/browser with:
   - **Android:** Expo Go app
   - **iOS:** Camera app (will open in Expo Go)

#### Option B: Emulator
- **Android:** Press `a` in terminal (requires Android Studio)
- **iOS:** Press `i` in terminal (requires Xcode, macOS only)

## 📱 Testing the App

### 1. Landing Screen
- Tap **"Se connecter"** to go to login
- Tap **"Passer"** to skip login (guest mode)

### 2. Login/Signup
- **Email:** any email format (e.g., test@example.com)
- **Password:** minimum 6 characters
- Or create a new account via "S'inscrire"

### 3. Home Screen - SOS Feature
- **Triple-tap** the red SOS button
- Confirm the alert
- Location will be simulated (check console logs)

### 4. Chatbot
- Navigate to **"Assistant"** tab
- Try these questions:
  - "bonjour"
  - "loi 103-13"
  - "porter plainte"
  - "droits"
  - "urgence"

### 5. Legal Resources
- Navigate to **"Juridique"** tab
- Tap any resource to view details
- PDF viewer is mocked (shows alert)

### 6. Professional Support
- Navigate to **"Support"** tab
- Filter by **Avocats** or **Psychologues**
- Tap **"Contacter"** to see contact options

### 7. Settings & Disguise Mode
- From Home screen, you need to add a settings button or navigate manually
- Enable **"Mode Déguisement"**
- App transforms into a calculator
- **Triple-tap "Calculatrice"** header to exit

### 8. Emergency Contacts
- Go to Settings → Contacts d'urgence
- Add contacts with name and phone
- These will be notified during SOS alerts

## 🔧 Troubleshooting

### "Module not found" errors
```bash
npm install
# or
npm install --legacy-peer-deps
```

### Expo Go connection issues
- Ensure phone and computer are on same WiFi
- Try tunnel mode: `npm start --tunnel`

### TypeScript errors
```bash
npm install --save-dev @types/react @types/react-native
```

### Clear cache
```bash
expo start -c
# or
npm start -- --reset-cache
```

## 📂 Project Structure

```
selmeti-mobile/
├── src/
│   ├── screens/        # All screen components
│   ├── navigation/     # Navigation setup
│   ├── services/       # Business logic
│   ├── data/          # Mock data
│   ├── utils/         # Utilities
│   └── types/         # TypeScript types
├── app.json           # Expo config
├── package.json       # Dependencies
└── README.md          # Full documentation
```

## 🎯 Key Features to Test

✅ Landing & Authentication
✅ SOS Emergency Button (triple-tap)
✅ Chatbot with legal info
✅ Legal resources library
✅ Professional directory
✅ Disguise mode (calculator)
✅ Emergency contacts management
✅ Language selection (FR/AR)

## 📞 Mock Emergency Numbers

- **8350** - National listening line
- **19** - Police
- **177** - Gendarmerie

## 🔐 Security Features

1. **Disguise Mode:** Hides app as calculator
2. **Triple-tap Protection:** Prevents accidental SOS
3. **Local Storage:** All data stored locally
4. **No Backend:** Complete privacy (mock implementation)

## 🌐 Next Steps for Production

1. Implement real backend API
2. Add proper authentication (JWT)
3. Integrate real AI chatbot
4. Add end-to-end encryption
5. Implement SMS/Call functionality
6. Add real GPS tracking
7. Connect to emergency services
8. Add comprehensive testing

## 💡 Tips

- Use **Expo Go** for fastest development
- Hot reload works automatically
- Check terminal for console logs
- Use React DevTools for debugging

## 🆘 Need Help?

- Check `README.md` for full documentation
- Review code comments in source files
- Test with mock data first
- Verify all dependencies are installed

---

**Ready to start!** Run `npm start` and scan the QR code! 🚀
