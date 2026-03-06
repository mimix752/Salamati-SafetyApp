import AsyncStorage from '@react-native-async-storage/async-storage';
import { EmergencyContact } from '../types';

const DISGUISE_MODE_KEY = '@selmeti_disguise_mode';
const EMERGENCY_CONTACTS_KEY = '@selmeti_emergency_contacts';
const LANGUAGE_KEY = '@selmeti_language';

export const storageService = {
  // Disguise Mode
  setDisguiseMode: async (enabled: boolean): Promise<void> => {
    await AsyncStorage.setItem(DISGUISE_MODE_KEY, JSON.stringify(enabled));
  },

  getDisguiseMode: async (): Promise<boolean> => {
    const value = await AsyncStorage.getItem(DISGUISE_MODE_KEY);
    return value ? JSON.parse(value) : false;
  },

  // Emergency Contacts
  setEmergencyContacts: async (contacts: EmergencyContact[]): Promise<void> => {
    await AsyncStorage.setItem(EMERGENCY_CONTACTS_KEY, JSON.stringify(contacts));
  },

  getEmergencyContacts: async (): Promise<EmergencyContact[]> => {
    const value = await AsyncStorage.getItem(EMERGENCY_CONTACTS_KEY);
    return value ? JSON.parse(value) : [];
  },

  // Language
  setLanguage: async (language: 'fr' | 'ar'): Promise<void> => {
    await AsyncStorage.setItem(LANGUAGE_KEY, language);
  },

  getLanguage: async (): Promise<'fr' | 'ar'> => {
    const value = await AsyncStorage.getItem(LANGUAGE_KEY);
    return (value as 'fr' | 'ar') || 'fr';
  }
};
