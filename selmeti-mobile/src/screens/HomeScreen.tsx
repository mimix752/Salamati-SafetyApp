import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { locationService } from '../services/locationService';

export default function HomeScreen() {
  const navigation = useNavigation();
  const [tapCount, setTapCount] = useState(0);
  const [lastTapTime, setLastTapTime] = useState(0);

  const handleSOSPress = async () => {
    const now = Date.now();
    
    if (now - lastTapTime > 2000) {
      setTapCount(1);
    } else {
      setTapCount(tapCount + 1);
    }
    
    setLastTapTime(now);

    if (tapCount + 1 >= 3) {
      setTapCount(0);
      await triggerSOS();
    }
  };

  const triggerSOS = async () => {
    Alert.alert(
      'Alerte SOS',
      'Voulez-vous envoyer une alerte d\'urgence?',
      [
        { text: 'Annuler', style: 'cancel' },
        {
          text: 'Envoyer',
          style: 'destructive',
          onPress: async () => {
            const location = await locationService.getCurrentLocation();
            if (location) {
              await locationService.sendSOSAlert(location);
              Alert.alert(
                'Alerte envoyée',
                'Votre position a été envoyée à vos contacts d\'urgence.\n\nLigne d\'écoute: 8350\nPolice: 19\nGendarmerie: 177'
              );
            } else {
              Alert.alert('Erreur', 'Impossible d\'obtenir votre position');
            }
          }
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>🛡️ Selmeti</Text>
          <Text style={styles.subtitle}>Vous êtes en sécurité</Text>
        </View>
        <TouchableOpacity
          style={styles.settingsButton}
          onPress={() => navigation.navigate('Settings' as never)}
        >
          <Text style={styles.settingsIcon}>⚙️</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <TouchableOpacity
          style={styles.sosButton}
          onPress={handleSOSPress}
          activeOpacity={0.8}
        >
          <Text style={styles.sosEmoji}>🚨</Text>
          <Text style={styles.sosText}>SOS</Text>
          <Text style={styles.sosHint}>Appuyez 3 fois</Text>
        </TouchableOpacity>

        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>Numéros d'urgence</Text>
          <Text style={styles.infoText}>🔴 Ligne d'écoute: 8350</Text>
          <Text style={styles.infoText}>👮 Police: 19</Text>
          <Text style={styles.infoText}>🚔 Gendarmerie: 177</Text>
        </View>
      </View>

      <View style={styles.quickActions}>
        <Text style={styles.quickActionsTitle}>Accès rapide</Text>
        <View style={styles.actionButtons}>
          <View style={styles.actionButton}>
            <Text style={styles.actionEmoji}>💬</Text>
            <Text style={styles.actionText}>Chatbot</Text>
          </View>
          <View style={styles.actionButton}>
            <Text style={styles.actionEmoji}>📚</Text>
            <Text style={styles.actionText}>Ressources</Text>
          </View>
          <View style={styles.actionButton}>
            <Text style={styles.actionEmoji}>👥</Text>
            <Text style={styles.actionText}>Support</Text>
          </View>
        </View>
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
    paddingBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.9
  },
  settingsButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  settingsIcon: {
    fontSize: 24
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  sosButton: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#f44336',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    marginBottom: 40
  },
  sosEmoji: {
    fontSize: 50,
    marginBottom: 10
  },
  sosText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff'
  },
  sosHint: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.9,
    marginTop: 5
  },
  infoBox: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333'
  },
  infoText: {
    fontSize: 16,
    marginBottom: 8,
    color: '#666'
  },
  quickActions: {
    padding: 20,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee'
  },
  quickActionsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333'
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  actionButton: {
    alignItems: 'center',
    flex: 1
  },
  actionEmoji: {
    fontSize: 32,
    marginBottom: 5
  },
  actionText: {
    fontSize: 12,
    color: '#666'
  }
});
