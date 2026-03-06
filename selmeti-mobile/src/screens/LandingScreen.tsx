import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

type LandingScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Landing'>;

export default function LandingScreen() {
  const navigation = useNavigation<LandingScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.logo}>🛡️</Text>
        <Text style={styles.title}>Selmeti</Text>
        <Text style={styles.subtitle}>Votre sécurité, notre priorité</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.loginButtonText}>Se connecter</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.skipButton}
          onPress={() => navigation.navigate('Main')}
        >
          <Text style={styles.skipButtonText}>Passer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E91E63',
    justifyContent: 'space-between',
    padding: 20
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    fontSize: 100,
    marginBottom: 20
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    opacity: 0.9
  },
  buttonContainer: {
    gap: 15,
    marginBottom: 40
  },
  loginButton: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center'
  },
  loginButtonText: {
    color: '#E91E63',
    fontSize: 18,
    fontWeight: 'bold'
  },
  skipButton: {
    backgroundColor: 'transparent',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff'
  },
  skipButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
