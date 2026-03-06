# Selmeti - Features Documentation

## 📋 Complete Feature List

### 1. Authentication System
**Files:** `LoginScreen.tsx`, `SignupScreen.tsx`, `authService.ts`

- ✅ Email/Password login
- ✅ User registration
- ✅ Guest mode (Skip login)
- ✅ Mock authentication (ready for backend)
- ✅ Persistent login with AsyncStorage
- ✅ Logout functionality

**How it works:**
- Users can login with any email and password (6+ characters)
- Data is stored locally in AsyncStorage
- Guest users have limited access
- Ready to integrate with real backend API

---

### 2. SOS Emergency System
**Files:** `HomeScreen.tsx`, `locationService.ts`

- ✅ Large, accessible SOS button
- ✅ Triple-tap activation (prevents accidents)
- ✅ GPS location capture
- ✅ Alert confirmation dialog
- ✅ Emergency contacts notification (mock)
- ✅ Hotline numbers display

**Emergency Numbers:**
- 8350 - National listening line
- 19 - Police
- 177 - Gendarmerie

**How it works:**
1. User taps SOS button 3 times quickly
2. Confirmation dialog appears
3. GPS location is captured
4. Alert sent to emergency contacts
5. Success message with hotline numbers

---

### 3. Disguise Mode (Security Feature)
**Files:** `DisguiseModeScreen.tsx`, `SettingsScreen.tsx`, `storage.ts`

- ✅ Transform app into calculator
- ✅ Toggle in settings
- ✅ Triple-tap to exit disguise
- ✅ Fully functional calculator
- ✅ Persistent state

**How it works:**
1. Enable in Settings
2. App transforms to calculator UI
3. Triple-tap "Calculatrice" header to reveal real app
4. Provides privacy and discretion

---

### 4. AI Chatbot Assistant
**Files:** `ChatbotScreen.tsx`, `chatbotResponses.ts`

- ✅ Chat interface with message bubbles
- ✅ Legal information about Law 103-13
- ✅ Women's rights information
- ✅ How to file complaints
- ✅ Emergency procedures
- ✅ Mock AI responses (ready for real AI)

**Supported Topics:**
- Law 103-13 details
- Victim rights
- Filing complaints
- Types of violence
- Protection orders
- Emergency contacts

**Sample Questions:**
- "loi 103-13"
- "porter plainte"
- "droits"
- "violence"
- "urgence"
- "protection"

---

### 5. Legal Resources Library
**Files:** `LegalScreen.tsx`, `legalResources.ts`

- ✅ Categorized legal documents
- ✅ Law 103-13 information
- ✅ Victim rights guides
- ✅ Complaint procedures
- ✅ Protection order info
- ✅ PDF viewer placeholders

**Categories:**
- Législation
- Droits
- Procédures
- Protection
- Assistance
- Types de violence

---

### 6. Professional Support Directory
**Files:** `SupportScreen.tsx`, `professionals.ts`

- ✅ Lawyers directory
- ✅ Psychologists directory
- ✅ Filter by profession
- ✅ Contact information
- ✅ City-based listings
- ✅ Direct call/email links

**Features:**
- Professional cards with avatar
- Filter: All / Lawyers / Psychologists
- Contact button with options
- Phone and email integration
- 6 mock professionals included

---

### 7. Emergency Contacts Management
**Files:** `EmergencyContactsScreen.tsx`, `storage.ts`

- ✅ Add emergency contacts
- ✅ Delete contacts
- ✅ Phone number storage
- ✅ Persistent storage
- ✅ Empty state handling
- ✅ Contact validation

**How it works:**
1. Navigate to Settings → Emergency Contacts
2. Add name and phone number
3. Contacts saved locally
4. Used during SOS alerts

---

### 8. Settings & Configuration
**Files:** `SettingsScreen.tsx`, `storage.ts`

- ✅ Disguise mode toggle
- ✅ Emergency contacts management
- ✅ Language selection (FR/AR)
- ✅ Logout functionality
- ✅ App version display
- ✅ Persistent settings

**Settings Options:**
- Security: Disguise mode
- Contacts: Manage emergency contacts
- Language: French / Arabic
- Account: Logout

---

### 9. Navigation System
**Files:** `RootNavigator.tsx`, `MainNavigator.tsx`

- ✅ Stack navigation for auth flow
- ✅ Bottom tab navigation for main app
- ✅ Deep linking ready
- ✅ Navigation guards
- ✅ Smooth transitions

**Navigation Structure:**
```
Landing
├── Login
├── Signup
└── Main (Tabs)
    ├── Home
    ├── Chatbot
    ├── Legal
    └── Support
Settings
└── Emergency Contacts
```

---

### 10. Data Persistence
**Files:** `storage.ts`, `authService.ts`

- ✅ AsyncStorage integration
- ✅ User session management
- ✅ Settings persistence
- ✅ Emergency contacts storage
- ✅ Disguise mode state
- ✅ Language preference

---

## 🎨 UI/UX Features

### Design System
- **Primary Color:** #E91E63 (Pink)
- **Accent Color:** #2196F3 (Blue)
- **Danger Color:** #f44336 (Red)
- **Background:** #f5f5f5 (Light Gray)

### Accessibility
- Large touch targets (44x44 minimum)
- High contrast colors
- Clear typography
- Emoji icons for quick recognition
- Simple, intuitive navigation

### Responsive Design
- Works on all screen sizes
- Safe area handling
- Keyboard avoidance
- Optimized for mobile

---

## 🔐 Security Features

1. **Disguise Mode:** Hide app as calculator
2. **Triple-tap Protection:** Prevent accidental triggers
3. **Local Storage:** No data sent to servers
4. **Privacy First:** Mock implementation for testing
5. **Secure Navigation:** Protected routes

---

## 🌍 Localization

### Supported Languages
- **French (Français)** - Default
- **Arabic (العربية)** - Available

### Implementation
- Language selection in settings
- Persistent language preference
- Ready for full i18n integration

---

## 📱 Platform Support

- ✅ iOS (iPhone & iPad)
- ✅ Android (Phone & Tablet)
- ✅ Expo Go for development
- ✅ Standalone builds ready

---

## 🔄 Backend Integration Points

### Ready for API Integration:

1. **Authentication**
   - POST /api/auth/login
   - POST /api/auth/signup
   - POST /api/auth/logout

2. **SOS Alerts**
   - POST /api/sos/alert
   - GET /api/sos/contacts

3. **Chatbot**
   - POST /api/chatbot/message
   - WebSocket for real-time chat

4. **Professionals**
   - GET /api/professionals
   - GET /api/professionals/:id

5. **Legal Resources**
   - GET /api/legal/resources
   - GET /api/legal/resources/:id/pdf

---

## 📊 Mock Data

### Included Mock Data:
- 6 Professionals (3 lawyers, 3 psychologists)
- 6 Legal resources
- 10+ Chatbot response patterns
- Emergency hotline numbers

---

## 🧪 Testing Checklist

- [ ] Login with email/password
- [ ] Skip login (guest mode)
- [ ] Triple-tap SOS button
- [ ] Send SOS alert
- [ ] Chat with bot
- [ ] View legal resources
- [ ] Filter professionals
- [ ] Contact professional
- [ ] Enable disguise mode
- [ ] Exit disguise mode
- [ ] Add emergency contact
- [ ] Delete emergency contact
- [ ] Change language
- [ ] Logout

---

## 🚀 Future Enhancements

1. Real AI chatbot integration
2. SMS/Call functionality
3. Real-time location tracking
4. Push notifications
5. Offline mode
6. End-to-end encryption
7. Biometric authentication
8. Voice commands
9. Panic gesture (shake phone)
10. Silent mode (no sound/vibration)

---

## 📞 Support Resources

### Morocco Emergency Services
- **8350** - Violence against women hotline
- **19** - Police
- **177** - Gendarmerie
- **141** - SAMU (Medical emergency)

### Legal Framework
- Law 103-13: Violence against women
- Law 24-03: Domestic violence
- Penal Code: Articles on assault

---

**Selmeti** - Votre sécurité, notre priorité 🇲🇦
