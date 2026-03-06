import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Linking, Alert } from 'react-native';
import { mockProfessionals } from '../data/professionals';
import { Professional } from '../types';

export default function SupportScreen() {
  const [filter, setFilter] = useState<'all' | 'Lawyer' | 'Psychologist'>('all');

  const filteredProfessionals = filter === 'all'
    ? mockProfessionals
    : mockProfessionals.filter(p => p.profession === filter);

  const handleContact = (professional: Professional) => {
    Alert.alert(
      'Contacter',
      `Voulez-vous contacter ${professional.name}?`,
      [
        { text: 'Annuler', style: 'cancel' },
        {
          text: 'Appeler',
          onPress: () => Linking.openURL(`tel:${professional.phone}`)
        },
        professional.email && {
          text: 'Email',
          onPress: () => Linking.openURL(`mailto:${professional.email}`)
        }
      ].filter(Boolean) as any
    );
  };

  const renderProfessional = ({ item }: { item: Professional }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => handleContact(item)}
    >
      <View style={styles.cardHeader}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {item.profession === 'Lawyer' ? '⚖️' : '🧠'}
          </Text>
        </View>
        <View style={styles.cardInfo}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.profession}>{item.profession === 'Lawyer' ? 'Avocat(e)' : 'Psychologue'}</Text>
          <Text style={styles.city}>📍 {item.city}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.contactButton}
        onPress={() => handleContact(item)}
      >
        <Text style={styles.contactButtonText}>Contacter</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>👥 Support Professionnel</Text>
        <Text style={styles.headerSubtitle}>Avocats et Psychologues</Text>
      </View>

      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={[styles.filterButton, filter === 'all' && styles.filterButtonActive]}
          onPress={() => setFilter('all')}
        >
          <Text style={[styles.filterText, filter === 'all' && styles.filterTextActive]}>
            Tous
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filterButton, filter === 'Lawyer' && styles.filterButtonActive]}
          onPress={() => setFilter('Lawyer')}
        >
          <Text style={[styles.filterText, filter === 'Lawyer' && styles.filterTextActive]}>
            Avocats
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filterButton, filter === 'Psychologist' && styles.filterButtonActive]}
          onPress={() => setFilter('Psychologist')}
        >
          <Text style={[styles.filterText, filter === 'Psychologist' && styles.filterTextActive]}>
            Psychologues
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredProfessionals}
        renderItem={renderProfessional}
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
  filterContainer: {
    flexDirection: 'row',
    padding: 15,
    gap: 10
  },
  filterButton: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd'
  },
  filterButtonActive: {
    backgroundColor: '#E91E63',
    borderColor: '#E91E63'
  },
  filterText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '600'
  },
  filterTextActive: {
    color: '#fff'
  },
  list: {
    padding: 15,
    gap: 12
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  cardHeader: {
    flexDirection: 'row',
    marginBottom: 15
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12
  },
  avatarText: {
    fontSize: 30
  },
  cardInfo: {
    flex: 1,
    justifyContent: 'center'
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4
  },
  profession: {
    fontSize: 14,
    color: '#E91E63',
    fontWeight: '600',
    marginBottom: 4
  },
  city: {
    fontSize: 14,
    color: '#666'
  },
  contactButton: {
    backgroundColor: '#E91E63',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center'
  },
  contactButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
