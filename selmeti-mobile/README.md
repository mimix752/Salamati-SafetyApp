# Selmeti - Women's Safety Mobile App 🛡️

A comprehensive mobile application designed to help women facing harassment or violence situations in Morocco.

## 🎯 Features

### 1. **Landing & Authentication**
- Simple landing screen with Skip and Login options
- User authentication (mock implementation)
- Guest mode for limited access

### 2. **Disguise Mode** 🔒
- Transform the app into a harmless calculator
- Activate/deactivate in settings
- Triple-tap on calculator header to reveal real app
- Enhanced privacy and security

### 3. **SOS Emergency Button** 🚨
- Large, accessible emergency button
- Triple-tap activation to prevent accidental triggers
- Sends GPS location to emergency contacts
- Quick access to emergency hotlines:
  - 8350 (National listening line)
  - 19 (Police)
  - 177 (Gendarmerie)

### 4. **AI Chatbot Assistant** 💬
- Legal information about Moroccan Law 103-13
- Women's rights information
- How to file complaints
- Mock AI responses with contextual answers

### 5. **Legal Resources** 📚
- Complete information about Law 103-13
- Victim rights documentation
- How to obtain protection orders
- Types of violence definitions
- PDF viewer placeholders

### 6. **Professional Support** 👥
- Directory of lawyers and psychologists
- Filter by profession
- Contact information
- City-based listings
- Direct call/email functionality

### 7. **Settings** ⚙️
- Toggle disguise mode
- Manage emergency contacts
- Language selection (French/Arabic)
- Account management

### 8. **Emergency Contacts Management** 📞
- Add/remove emergency contacts
- Contacts notified during SOS alerts
- Phone number validation

## 🏗️ Architecture

```
selmeti-mobile/
├── src/
│   ├── components/          # Reusable UI components
│   ├── screens/            # Screen components
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
│   ├── navigation/         # Navigation setup
│   │   ├── RootNavigator.tsx
│   │   └── MainNavigator.tsx
│   ├── services/          # Business logic & API calls
│   │   ├── authService.ts
│   │   └── locationService.ts
│   ├── data/              # Mock data
│   │   ├── professionals.ts
│   │   ├── legalResources.ts
│   │   └── chatbotResponses.ts
│   ├── utils/             # Utility functions
│   │   └── storage.ts
│   ├── types/             # TypeScript types
│   │   └── index.ts
│   └── App.tsx            # Root component
├── app.json               # Expo configuration
├── package.json           # Dependencies
└── tsconfig.json          # TypeScript config
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (optional but recommended)

### Installation

1. **Navigate to project directory:**
```bash
cd selmeti-mobile
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm start
```

4. **Run on device/emulator:**
- Press `a` for Android
- Press `i` for iOS
- Scan QR code with Expo Go app on your phone

## 📱 Tech Stack

- **Framework:** React Native with Expo
- **Language:** TypeScript
- **Navigation:** React Navigation (Stack & Bottom Tabs)
- **Storage:** AsyncStorage
- **Location:** Expo Location
- **State Management:** React Hooks (useState, useEffect)

## 🔐 Security Features

1. **Disguise Mode:** Hide the app as a calculator
2. **Triple-tap Protection:** Prevents accidental SOS triggers
3. **Secure Storage:** Local data encryption via AsyncStorage
4. **Privacy First:** No data sent to external servers (mock implementation)

## 🌍 Localization

- French (Français) - Default
- Arabic (العربية) - Available in settings

## 📋 Mock Data

The app uses mock data for:
- User authentication
- Professional directory (lawyers & psychologists)
- Legal resources
- Chatbot responses
- Emergency contact storage

## 🔄 Backend Integration (Future)

The architecture is prepared for backend integration:

### API Endpoints Structure:
```typescript
// Authentication
POST /api/auth/login
POST /api/auth/signup
POST /api/auth/logout

// SOS
POST /api/sos/alert
GET /api/sos/contacts

// Chatbot
POST /api/chatbot/message

// Professionals
GET /api/professionals
GET /api/professionals/:id

// Legal Resources
GET /api/legal/resources
GET /api/legal/resources/:id
```

## 🎨 Design System

### Colors
- Primary: `#E91E63` (Pink)
- Secondary: `#2196F3` (Blue)
- Danger: `#f44336` (Red)
- Background: `#f5f5f5` (Light Gray)
- Text: `#333333` (Dark Gray)

### Typography
- Headers: Bold, 24-32px
- Body: Regular, 16px
- Captions: Regular, 12-14px

## 📞 Emergency Numbers (Morocco)

- **8350** - National listening line for violence against women
- **19** - Police
- **177** - Gendarmerie

## 🧪 Testing

To test the app:

1. **Landing Screen:** Skip or login with any email/password (6+ chars)
2. **SOS Feature:** Triple-tap the red button
3. **Disguise Mode:** Enable in settings, triple-tap "Calculatrice" to exit
4. **Chatbot:** Ask about "loi 103-13", "droits", "porter plainte"
5. **Emergency Contacts:** Add contacts in settings

## 📝 License

This project is created for educational and humanitarian purposes.

## 🤝 Contributing

This is a prototype. For production use:
1. Implement real backend API
2. Add proper authentication (JWT, OAuth)
3. Integrate real AI chatbot
4. Add end-to-end encryption
5. Implement proper error handling
6. Add comprehensive testing
7. Optimize performance
8. Add analytics (privacy-focused)

## 🆘 Support

For support or questions about women's rights in Morocco:
- Call: 8350 (National listening line)
- Visit: Local women's support centers

---

**Selmeti** - Votre sécurité, notre priorité 🇲🇦
