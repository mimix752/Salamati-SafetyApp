# 🛡️ Selmeti Mobile App - Project Summary

## Overview

**Selmeti** is a comprehensive React Native mobile application designed to help women facing harassment or violence situations in Morocco. The app provides emergency features, legal information, professional support, and privacy-focused security features.

---

## 🎯 Project Goals

1. **Safety First:** Quick access to emergency services
2. **Privacy:** Disguise mode for discretion
3. **Information:** Legal resources and rights
4. **Support:** Connect with professionals
5. **Accessibility:** Simple, intuitive interface

---

## 🏗️ Technical Architecture

### Technology Stack

```
Frontend:
├── React Native (0.73.0)
├── Expo (50.0.0)
├── TypeScript (5.1.3)
├── React Navigation (6.x)
│   ├── Stack Navigator
│   └── Bottom Tabs Navigator
└── AsyncStorage (1.21.0)

Services:
├── Expo Location (16.5.5)
├── Expo Contacts (12.8.1)
└── React Native Gesture Handler (2.14.0)
```

### Project Structure

```
selmeti-mobile/
│
├── src/
│   ├── screens/              # UI Screens (10 screens)
│   │   ├── LandingScreen.tsx
│   │   ├── LoginScreen.tsx
│   │   ├── SignupScreen.tsx
│   │   ├── HomeScreen.tsx
│   │   ├── ChatbotScreen.tsx
│   │   ├── LegalScreen.tsx
│   │   ├── SupportScreen.tsx
│   │   ├── SettingsScreen.tsx
│   │   ├── DisguiseModeScreen.tsx
│   │   └── EmergencyContactsScreen.tsx
│   │
│   ├── navigation/           # Navigation Setup
│   │   ├── RootNavigator.tsx
│   │   └── MainNavigator.tsx
│   │
│   ├── services/            # Business Logic
│   │   ├── authService.ts
│   │   └── locationService.ts
│   │
│   ├── data/                # Mock Data
│   │   ├── professionals.ts
│   │   ├── legalResources.ts
│   │   └── chatbotResponses.ts
│   │
│   ├── utils/               # Utilities
│   │   └── storage.ts
│   │
│   ├── types/               # TypeScript Definitions
│   │   └── index.ts
│   │
│   └── App.tsx              # Root Component
│
├── app.json                 # Expo Configuration
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript Config
├── babel.config.js          # Babel Config
├── README.md                # Full Documentation
├── QUICKSTART.md            # Quick Start Guide
├── FEATURES.md              # Features Documentation
├── setup.sh                 # Unix Setup Script
└── setup.bat                # Windows Setup Script
```

---

## 📱 Core Features

### 1. Authentication System
- Email/password login
- User registration
- Guest mode
- Persistent sessions

### 2. SOS Emergency
- Triple-tap activation
- GPS location capture
- Emergency contacts alert
- Hotline numbers

### 3. Disguise Mode
- Calculator disguise
- Triple-tap to exit
- Privacy protection
- Persistent state

### 4. AI Chatbot
- Legal information
- Law 103-13 details
- Rights information
- Mock AI responses

### 5. Legal Resources
- Document library
- Categorized content
- PDF placeholders
- Law 103-13 info

### 6. Professional Support
- Lawyers directory
- Psychologists directory
- Contact information
- Filter by profession

### 7. Emergency Contacts
- Add/remove contacts
- Persistent storage
- SOS integration

### 8. Settings
- Disguise mode toggle
- Language selection
- Contact management
- Logout

---

## 🎨 Design System

### Color Palette
```css
Primary:    #E91E63  /* Pink - Main brand color */
Secondary:  #2196F3  /* Blue - Calculator mode */
Danger:     #f44336  /* Red - SOS button */
Background: #f5f5f5  /* Light gray */
Text:       #333333  /* Dark gray */
```

### Typography
```
Headers:  Bold, 24-32px
Body:     Regular, 16px
Captions: Regular, 12-14px
```

### Components
- Large touch targets (44x44 minimum)
- Rounded corners (8-12px)
- Shadows for depth
- Emoji icons for recognition

---

## 🔐 Security & Privacy

### Security Features
1. **Disguise Mode:** Hide as calculator
2. **Triple-tap Protection:** Prevent accidents
3. **Local Storage:** No external data transfer
4. **Mock Implementation:** Safe for testing

### Privacy Considerations
- No backend required
- All data stored locally
- No tracking or analytics
- User-controlled data

---

## 📊 Data Flow

### Authentication Flow
```
Landing → Login/Signup → AsyncStorage → Main App
   ↓
  Skip → Guest Mode → Main App (Limited)
```

### SOS Flow
```
Home → Triple-tap SOS → Confirm → Get Location → Send Alert → Success
```

### Disguise Mode Flow
```
Settings → Enable Disguise → Calculator UI → Triple-tap Header → Real App
```

---

## 🔄 State Management

### Local State (useState)
- Form inputs
- UI interactions
- Tap counters
- Loading states

### Persistent State (AsyncStorage)
- User session
- Settings
- Emergency contacts
- Language preference
- Disguise mode state

---

## 🌐 API Integration (Ready)

### Endpoints Structure

```typescript
// Authentication
POST   /api/auth/login
POST   /api/auth/signup
POST   /api/auth/logout
GET    /api/auth/me

// SOS
POST   /api/sos/alert
GET    /api/sos/contacts
POST   /api/sos/contacts
DELETE /api/sos/contacts/:id

// Chatbot
POST   /api/chatbot/message
WS     /api/chatbot/stream

// Professionals
GET    /api/professionals
GET    /api/professionals/:id
POST   /api/professionals/contact

// Legal
GET    /api/legal/resources
GET    /api/legal/resources/:id
GET    /api/legal/resources/:id/pdf

// Settings
GET    /api/settings
PUT    /api/settings
```

---

## 📦 Dependencies

### Core Dependencies
```json
{
  "expo": "~50.0.0",
  "react": "18.2.0",
  "react-native": "0.73.0",
  "@react-navigation/native": "^6.1.9",
  "@react-navigation/stack": "^6.3.20",
  "@react-navigation/bottom-tabs": "^6.5.11",
  "expo-location": "~16.5.5",
  "@react-native-async-storage/async-storage": "1.21.0",
  "react-native-gesture-handler": "~2.14.0"
}
```

---

## 🧪 Testing Strategy

### Manual Testing
- [ ] All screens render correctly
- [ ] Navigation works smoothly
- [ ] Forms validate input
- [ ] SOS triple-tap works
- [ ] Disguise mode activates
- [ ] Data persists correctly

### Future Automated Testing
- Unit tests (Jest)
- Component tests (React Native Testing Library)
- E2E tests (Detox)
- Performance tests

---

## 🚀 Deployment

### Development
```bash
npm install
npm start
```

### Production Build

#### iOS
```bash
expo build:ios
```

#### Android
```bash
expo build:android
```

### App Store Submission
1. Configure app.json
2. Add app icons
3. Add splash screens
4. Build production version
5. Submit to stores

---

## 📈 Future Roadmap

### Phase 1 (Current)
- ✅ Core features
- ✅ Mock data
- ✅ Basic UI/UX
- ✅ Local storage

### Phase 2 (Next)
- [ ] Backend integration
- [ ] Real authentication
- [ ] SMS/Call functionality
- [ ] Push notifications

### Phase 3 (Future)
- [ ] Real AI chatbot
- [ ] End-to-end encryption
- [ ] Biometric auth
- [ ] Voice commands
- [ ] Offline mode
- [ ] Multi-language support

### Phase 4 (Advanced)
- [ ] Panic gestures
- [ ] Silent mode
- [ ] Location history
- [ ] Evidence collection
- [ ] Legal case management

---

## 🌍 Localization

### Current
- French (Default)
- Arabic (Partial)

### Future
- Full Arabic translation
- Berber languages
- English (International)

---

## 📞 Emergency Resources

### Morocco
- **8350** - Violence against women hotline
- **19** - Police
- **177** - Gendarmerie
- **141** - Medical emergency (SAMU)

### Legal Framework
- **Law 103-13** - Violence against women
- **Law 24-03** - Domestic violence
- **Penal Code** - Assault articles

---

## 👥 Target Users

1. **Primary:** Women in Morocco facing violence/harassment
2. **Secondary:** Support organizations
3. **Tertiary:** Legal professionals

---

## 💡 Key Innovations

1. **Disguise Mode:** Unique privacy feature
2. **Triple-tap Safety:** Prevents accidents
3. **Integrated Support:** All-in-one solution
4. **Morocco-specific:** Tailored to local context
5. **Privacy-first:** No data collection

---

## 📝 Development Notes

### Code Quality
- TypeScript for type safety
- Modular architecture
- Reusable components
- Clean code principles
- Comprehensive comments

### Performance
- Optimized renders
- Lazy loading ready
- Efficient state management
- Minimal dependencies

### Maintainability
- Clear folder structure
- Consistent naming
- Documentation
- Mock data separation

---

## 🤝 Contributing

### For Developers
1. Fork the repository
2. Create feature branch
3. Follow code style
4. Add tests
5. Submit pull request

### For Designers
1. Follow design system
2. Maintain accessibility
3. Consider mobile constraints
4. Test on real devices

---

## 📄 License

This project is created for educational and humanitarian purposes.

---

## 🆘 Support

### Technical Support
- Check README.md
- Review QUICKSTART.md
- See FEATURES.md

### Emergency Support
- Call 8350 (Morocco)
- Visit local support centers
- Contact legal professionals

---

## ✅ Project Status

**Status:** ✅ Complete MVP
**Version:** 1.0.0
**Last Updated:** 2024
**Platform:** iOS & Android
**Framework:** React Native (Expo)

---

## 📊 Project Statistics

- **Screens:** 10
- **Components:** 10+
- **Services:** 3
- **Mock Data Files:** 3
- **Lines of Code:** ~2,500+
- **Dependencies:** 15+
- **Documentation Pages:** 4

---

## 🎓 Learning Resources

### React Native
- [React Native Docs](https://reactnative.dev/)
- [Expo Docs](https://docs.expo.dev/)

### Navigation
- [React Navigation](https://reactnavigation.org/)

### TypeScript
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

**Selmeti** - Votre sécurité, notre priorité 🇲🇦

Built with ❤️ for women's safety in Morocco
