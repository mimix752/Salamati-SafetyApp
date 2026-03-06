export interface User {
  id: string;
  email: string;
  name: string;
}

export interface EmergencyContact {
  id: string;
  name: string;
  phone: string;
}

export interface Professional {
  id: string;
  name: string;
  profession: 'Lawyer' | 'Psychologist';
  city: string;
  phone: string;
  email?: string;
}

export interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export interface LegalResource {
  id: string;
  title: string;
  description: string;
  category: string;
  pdfUrl?: string;
}

export type RootStackParamList = {
  Landing: undefined;
  Login: undefined;
  Signup: undefined;
  Main: undefined;
  Settings: undefined;
  EmergencyContacts: undefined;
  Professionals: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Chatbot: undefined;
  Legal: undefined;
  Support: undefined;
};
