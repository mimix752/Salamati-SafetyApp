import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainTabParamList } from '../types';
import HomeScreen from '../screens/HomeScreen';
import ChatbotScreen from '../screens/ChatbotScreen';
import LegalScreen from '../screens/LegalScreen';
import SupportScreen from '../screens/SupportScreen';

const Tab = createBottomTabNavigator<MainTabParamList>();

export default function MainNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#E91E63',
        tabBarInactiveTintColor: '#999',
        tabBarStyle: {
          paddingBottom: 5,
          paddingTop: 5,
          height: 60
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600'
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Accueil',
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 24 }}>🏠</Text>
        }}
      />
      <Tab.Screen
        name="Chatbot"
        component={ChatbotScreen}
        options={{
          tabBarLabel: 'Assistant',
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 24 }}>💬</Text>
        }}
      />
      <Tab.Screen
        name="Legal"
        component={LegalScreen}
        options={{
          tabBarLabel: 'Juridique',
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 24 }}>📚</Text>
        }}
      />
      <Tab.Screen
        name="Support"
        component={SupportScreen}
        options={{
          tabBarLabel: 'Support',
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 24 }}>👥</Text>
        }}
      />
    </Tab.Navigator>
  );
}
