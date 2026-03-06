import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { storageService } from '../utils/storage';
import LandingScreen from '../screens/LandingScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import SettingsScreen from '../screens/SettingsScreen';
import EmergencyContactsScreen from '../screens/EmergencyContactsScreen';
import DisguiseModeScreen from '../screens/DisguiseModeScreen';
import MainNavigator from './MainNavigator';

const Stack = createStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  const [disguiseMode, setDisguiseMode] = useState(false);

  useEffect(() => {
    checkDisguiseMode();
  }, []);

  const checkDisguiseMode = async () => {
    const mode = await storageService.getDisguiseMode();
    setDisguiseMode(mode);
  };

  if (disguiseMode) {
    return (
      <DisguiseModeScreen
        onExit={() => {
          setDisguiseMode(false);
          storageService.setDisguiseMode(false);
        }}
      />
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Main" component={MainNavigator} />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            headerShown: true,
            headerTitle: 'Paramètres',
            headerStyle: { backgroundColor: '#E91E63' },
            headerTintColor: '#fff'
          }}
        />
        <Stack.Screen
          name="EmergencyContacts"
          component={EmergencyContactsScreen}
          options={{
            headerShown: true,
            headerTitle: 'Contacts d\'urgence',
            headerStyle: { backgroundColor: '#E91E63' },
            headerTintColor: '#fff'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
