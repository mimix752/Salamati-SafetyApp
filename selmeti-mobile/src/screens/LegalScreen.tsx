import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import { mockLegalResources } from '../data/legalResources';
import { LegalResource } from '../types';

export default function LegalScreen() {
  const handleResourcePress = (resource: LegalResource) => {
    Alert.alert(
      resource.title,
      `${resource.description}\n\nCatégorie: ${resource.category}\n\nDans une version complète, ce document s'ouvrirait ici.`,
      [{ text: 'OK' }]
    );
  };

  const renderResource = ({ item }: { item: LegalResource }) => (
    <TouchableOpacity
      style={styles.resourceCard}
      onPress={() => handleResourcePress(item)}
    >
      <View style={styles.resourceIcon}>
        <Text style={styles.resourceEmoji}>📄</Text>
      </View>
      <View style={styles.resourceContent}>
        <Text style={styles.resourceCategory}>{item.category}</Text>
        <Text style={styles.resourceTitle}>{item.title}</Text>
        <Text style={styles.resourceDescription} numberOfLines={2}>
          {item.description}
        </Text>
      </View>
      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>📚 Ressources Juridiques</Text>
        <Text style={styles.headerSubtitle}>Loi 103-13 et vos droits</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>À propos de la Loi 103-13</Text>
        <Text style={styles.infoText}>
          La loi 103-13 relative à la lutte contre les violences faites aux femmes
          définit et criminalise plusieurs formes de violence: physique, psychologique,
          sexuelle et économique.
        </Text>
      </View>

      <FlatList
        data={mockLegalResources}
        renderItem={renderResource}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
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
    color: '#fff',
    marginBottom: 5
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.9
  },
  infoBox: {
    backgroundColor: '#fff3e0',
    padding: 15,
    margin: 15,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#ff9800'
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e65100',
    marginBottom: 8
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20
  },
  list: {
    padding: 15,
    gap: 12
  },
  resourceCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  resourceIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12
  },
  resourceEmoji: {
    fontSize: 24
  },
  resourceContent: {
    flex: 1
  },
  resourceCategory: {
    fontSize: 12,
    color: '#E91E63',
    fontWeight: 'bold',
    marginBottom: 4
  },
  resourceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4
  },
  resourceDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 18
  },
  arrow: {
    fontSize: 24,
    color: '#ccc',
    marginLeft: 8
  }
});
