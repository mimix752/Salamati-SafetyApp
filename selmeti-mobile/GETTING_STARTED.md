# 🚀 Getting Started with Selmeti

## Welcome!

Thank you for using **Selmeti** - a mobile safety application for women in Morocco. This guide will help you set up and run the application.

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

### Required:
- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**

### Optional but Recommended:
- **Expo CLI** - Install with: `npm install -g expo-cli`
- **Expo Go app** on your phone:
  - [iOS App Store](https://apps.apple.com/app/expo-go/id982107779)
  - [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

### For Emulator Testing:
- **Android Studio** (for Android emulator)
- **Xcode** (for iOS simulator - macOS only)

---

## 🔧 Installation

### Step 1: Navigate to Project Directory

```bash
cd selmeti-mobile
```

### Step 2: Install Dependencies

**Option A: Using npm**
```bash
npm install
```

**Option B: Using yarn**
```bash
yarn install
```

**If you encounter errors, try:**
```bash
npm install --legacy-peer-deps
```

### Step 3: Verify Installation

Check that all dependencies are installed:
```bash
npm list --depth=0
```

---

## 🎯 Running the App

### Method 1: Using npm (Recommended)

```bash
npm start
```

This will:
1. Start the Expo development server
2. Open Expo DevTools in your browser
3. Display a QR code in the terminal

### Method 2: Using Expo CLI

```bash
expo start
```

### Method 3: Using Setup Scripts

**Windows:**
```bash
setup.bat
```

**Mac/Linux:**
```bash
chmod +x setup.sh
./setup.sh
```

---

## 📱 Running on Your Device

### Physical Device (Easiest Method)

1. **Install Expo Go** on your phone
2. **Ensure same WiFi**: Phone and computer must be on the same network
3. **Scan QR code**:
   - **Android**: Open Expo Go app → Scan QR code
   - **iOS**: Open Camera app → Scan QR code → Open in Expo Go

### Android Emulator

1. **Start Android Studio**
2. **Open AVD Manager**
3. **Start an emulator**
4. **In terminal, press:** `a`

### iOS Simulator (macOS only)

1. **Ensure Xcode is installed**
2. **In terminal, press:** `i`

---

## 🧪 Testing the App

### 1. Landing Screen
- You'll see the Selmeti logo and two buttons
- Tap **"Se connecter"** to login
- Tap **"Passer"** to skip (guest mode)

### 2. Login
- **Email**: Enter any email (e.g., test@example.com)
- **Password**: Enter at least 6 characters
- Tap **"Se connecter"**

### 3. Main App
You'll see 4 tabs at the bottom:
- 🏠 **Accueil** (Home)
- 💬 **Assistant** (Chatbot)
- 📚 **Juridique** (Legal)
- 👥 **Support** (Professional Support)

### 4. Test SOS Feature
1. Go to **Home** tab
2. **Triple-tap** the red SOS button quickly
3. Confirm the alert
4. Check console for location logs

### 5. Test Chatbot
1. Go to **Assistant** tab
2. Type: "loi 103-13"
3. Send message
4. Receive AI response

### 6. Test Disguise Mode
1. Tap ⚙️ icon on Home screen
2. Enable **"Mode Déguisement"**
3. App transforms to calculator
4. **Triple-tap "Calculatrice"** to exit

### 7. Add Emergency Contact
1. Go to Settings
2. Tap **"Contacts d'urgence"**
3. Add name and phone number
4. Tap **"Ajouter"**

---

## 🔍 Troubleshooting

### Problem: "Module not found" errors

**Solution:**
```bash
npm install
# or
npm install --legacy-peer-deps
```

### Problem: Can't connect to Expo Go

**Solutions:**
1. Ensure phone and computer are on same WiFi
2. Try tunnel mode:
   ```bash
   npm start -- --tunnel
   ```
3. Restart Expo server:
   ```bash
   npm start -- --reset-cache
   ```

### Problem: TypeScript errors

**Solution:**
```bash
npm install --save-dev @types/react @types/react-native typescript
```

### Problem: Expo Go crashes

**Solutions:**
1. Update Expo Go app
2. Clear Expo cache:
   ```bash
   expo start -c
   ```
3. Restart development server

### Problem: Location not working

**Solution:**
- Grant location permissions when prompted
- Check device location settings
- For emulator, set mock location

### Problem: Build errors

**Solution:**
```bash
# Clear cache
npm start -- --reset-cache

# Reinstall dependencies
rm -rf node_modules
npm install

# Clear watchman (Mac/Linux)
watchman watch-del-all
```

---

## 📂 Project Structure

```
selmeti-mobile/
├── src/
│   ├── screens/          # All app screens
│   ├── navigation/       # Navigation setup
│   ├── services/         # Business logic
│   ├── data/            # Mock data
│   ├── utils/           # Utilities
│   ├── types/           # TypeScript types
│   └── App.tsx          # Root component
├── app.json             # Expo config
├── package.json         # Dependencies
└── README.md            # Documentation
```

---

## 🎓 Learning the Codebase

### Start Here:
1. **App.tsx** - Entry point
2. **RootNavigator.tsx** - Navigation structure
3. **HomeScreen.tsx** - Main screen with SOS
4. **authService.ts** - Authentication logic

### Key Files:
- **screens/** - All UI screens
- **services/** - Business logic
- **data/** - Mock data for testing
- **types/** - TypeScript definitions

---

## 📚 Documentation

- **README.md** - Full documentation
- **QUICKSTART.md** - Quick start guide
- **FEATURES.md** - Feature documentation
- **PROJECT_SUMMARY.md** - Architecture overview
- **APP_FLOW.md** - Visual flow diagram

---

## 🔐 Security Notes

### Mock Implementation
- This is a **prototype** with mock data
- No real backend connection
- All data stored locally
- Safe for testing and development

### For Production:
- Implement real backend API
- Add proper authentication
- Enable SMS/Call functionality
- Add end-to-end encryption
- Implement proper error handling

---

## 🌍 Supported Platforms

- ✅ iOS (iPhone & iPad)
- ✅ Android (Phone & Tablet)
- ✅ Expo Go (Development)
- ✅ Standalone builds (Production)

---

## 📞 Emergency Numbers (Morocco)

- **8350** - Violence against women hotline
- **19** - Police
- **177** - Gendarmerie
- **141** - Medical emergency (SAMU)

---

## 💡 Tips for Development

1. **Hot Reload**: Changes appear automatically
2. **Console Logs**: Check terminal for logs
3. **React DevTools**: Use for debugging
4. **Expo DevTools**: Access via browser
5. **Shake Device**: Open developer menu

---

## 🚀 Next Steps

### After Setup:
1. ✅ Test all features
2. ✅ Review code structure
3. ✅ Read documentation
4. ✅ Customize for your needs

### For Production:
1. Configure app.json
2. Add app icons
3. Add splash screens
4. Build production version
5. Submit to app stores

---

## 🤝 Need Help?

### Documentation:
- Check **README.md** for full docs
- Review **FEATURES.md** for feature details
- See **QUICKSTART.md** for quick reference

### Common Issues:
- Check **Troubleshooting** section above
- Review Expo documentation
- Check React Native docs

### Emergency Support:
- Call **8350** (Morocco)
- Visit local support centers
- Contact legal professionals

---

## ✅ Checklist

Before you start:
- [ ] Node.js installed
- [ ] Dependencies installed (`npm install`)
- [ ] Expo Go app on phone (optional)
- [ ] Same WiFi network (for physical device)

After setup:
- [ ] App runs successfully
- [ ] Can navigate between screens
- [ ] SOS button works (triple-tap)
- [ ] Chatbot responds
- [ ] Disguise mode activates

---

## 🎉 You're Ready!

Run this command to start:

```bash
npm start
```

Then scan the QR code with Expo Go!

---

**Selmeti** - Votre sécurité, notre priorité 🇲🇦

Built with ❤️ for women's safety in Morocco
