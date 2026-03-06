import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from '../types';

const STORAGE_KEY = '@selmeti_user';

export const authService = {
  login: async (email: string, password: string): Promise<User> => {
    // Mock authentication
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (email && password.length >= 6) {
      const user: User = {
        id: '1',
        email,
        name: email.split('@')[0]
      };
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(user));
      return user;
    }
    throw new Error('Invalid credentials');
  },

  signup: async (email: string, password: string, name: string): Promise<User> => {
    // Mock signup
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (email && password.length >= 6 && name) {
      const user: User = {
        id: Date.now().toString(),
        email,
        name
      };
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(user));
      return user;
    }
    throw new Error('Invalid data');
  },

  logout: async (): Promise<void> => {
    await AsyncStorage.removeItem(STORAGE_KEY);
  },

  getCurrentUser: async (): Promise<User | null> => {
    const userData = await AsyncStorage.getItem(STORAGE_KEY);
    return userData ? JSON.parse(userData) : null;
  },

  skipLogin: async (): Promise<User> => {
    const user: User = {
      id: 'guest',
      email: 'guest@selmeti.com',
      name: 'Guest'
    };
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    return user;
  }
};
