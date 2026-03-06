import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { storageService } from '../utils/storage';
import { authService } from '../services/authService';

export default function SettingsScreen() {
  const navigation = useNavigation();
  const [disguiseMode, setDisguiseMode] = useState(false);
  const [language, setLanguage] = useState<'fr' | 'ar'>('fr');

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    const mode = await storageService.getDisguiseMode();
    const lang = await storageService.getLanguage();
    setDisguiseMode(mode);
    setLanguage(lang);
  };

  const toggleDisguiseMode = async (value: boolean) => {
    setDisguiseMode(value);
    await storageService.setDisguiseMode(value);
    if (value) {
      Alert.alert(
        'Mode Déguisement Activé',
        'L\'application ressemblera à une calculatrice. Appuyez 3 fois sur le logo pour revenir à l\'interface normale.'
      );
    }
  };

  const changeLanguage = async (lang: 'fr' | 'ar') => {
    setLanguage(lang);
    await storageService.setLanguage(lang);
    Alert.alert('Langue changée', `Langue définie sur: ${lang === 'fr' ? 'Français' : 'العربية'}`);
  };

  const handleLogout = () => {
    Alert.alert(
      'Déconnexion',
      'Voulez-vous vraiment vous déconnecter?',
      [
        { text: 'Annuler', style: 'cancel' },
        {
          text: 'Déconnexion',
          style: 'destructive',
          onPress: async () => {
            await authService.logout();
            navigation.reset({
              index: 0,
              routes: [{ name: 'Landing' as never }]
            });
          }
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>⚙️ Paramètres</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sécurité</Text>
        
        <View style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <Text style={styles.settingLabel}>Mode Déguisement</Text>
            <Text style={styles.settingDescription}>
              Masquer l'application comme une calculatrice
            </Text>
          </View>
          <Switch
            value={disguiseMode}
            onValueChange={toggleDisguiseMode}
            trackColor={{ false: '#ddd', true: '#E91E63' }}
            thumbColor="#fff"
          />
        </View>

        <TouchableOpacity
          style={styles.settingItem}
          onPress={() => navigation.navigate('EmergencyContacts' as never)}
        >
          <View style={styles.settingInfo}>
            <Text style={styles.settingLabel}>Contacts d'urgence</Text>
            <Text style={styles.settingDescription}>
              Gérer vos contacts d'urgence
            </Text>
          </View>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Langue</Text>
        
        <View style={styles.languageButtons}>
          <TouchableOpacity
            style={[styles.languageButton, language === 'fr' && styles.languageButtonActive]}
            onPress={() => changeLanguage('fr')}
          >
            <Text style={[styles.languageText, language === 'fr' && styles.languageTextActive]}>
              Français
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[styles.languageButton, language === 'ar' && styles.languageButtonActive]}
            onPress={() => changeLanguage('ar')}
          >
            <Text style={[styles.languageText, language === 'ar' && styles.languageTextActive]}>
              العربية
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Compte</Text>
        
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Déconnexion</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Selmeti v1.0.0</Text>
        <Text style={styles.footerText}>Votre sécurité, notre priorité 🇲🇦</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  header: {
    backgroundColor: '#E91E63',
    padding: 20,
    paddingTop: 60,
    paddingBottom: 20
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff'
  },
  section: {
    marginTop: 20,
    backgroundColor: '#fff',
    padding: 15
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#999',
    marginBottom: 15,
    textTransform: 'uppercase'
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5'
  },
  settingInfo: {
    flex: 1
  },
  settingLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4
  },
  settingDescription: {
    fontSize: 14,
    color: '#666'
  },
  arrow: {
    fontSize: 24,
    color: '#ccc'
  },
  languageButtons: {
    flexDirection: 'row',
    gap: 10
  },
  languageButton: {
    flex: 1,
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent'
  },
  languageButtonActive: {
    backgroundColor: '#ffe0f0',
    borderColor: '#E91E63'
  },
  languageText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666'
  },
  languageTextActive: {
    color: '#E91E63'
  },
  logoutButton: {
    backgroundColor: '#f44336',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center'
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  footer: {
    alignItems: 'center',
    padding: 20,
    marginTop: 'auto'
  },
  footerText: {
    fontSize: 12,
    color: '#999',
    marginBottom: 4
  }
});
