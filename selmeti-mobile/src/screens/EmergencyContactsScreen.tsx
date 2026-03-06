import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, Alert } from 'react-native';
import { storageService } from '../utils/storage';
import { EmergencyContact } from '../types';

export default function EmergencyContactsScreen() {
  const [contacts, setContacts] = useState<EmergencyContact[]>([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    const savedContacts = await storageService.getEmergencyContacts();
    setContacts(savedContacts);
  };

  const addContact = async () => {
    if (!name || !phone) {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs');
      return;
    }

    const newContact: EmergencyContact = {
      id: Date.now().toString(),
      name,
      phone
    };

    const updatedContacts = [...contacts, newContact];
    await storageService.setEmergencyContacts(updatedContacts);
    setContacts(updatedContacts);
    setName('');
    setPhone('');
  };

  const deleteContact = async (id: string) => {
    Alert.alert(
      'Supprimer',
      'Voulez-vous supprimer ce contact?',
      [
        { text: 'Annuler', style: 'cancel' },
        {
          text: 'Supprimer',
          style: 'destructive',
          onPress: async () => {
            const updatedContacts = contacts.filter(c => c.id !== id);
            await storageService.setEmergencyContacts(updatedContacts);
            setContacts(updatedContacts);
          }
        }
      ]
    );
  };

  const renderContact = ({ item }: { item: EmergencyContact }) => (
    <View style={styles.contactCard}>
      <View style={styles.contactInfo}>
        <Text style={styles.contactName}>{item.name}</Text>
        <Text style={styles.contactPhone}>{item.phone}</Text>
      </View>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => deleteContact(item.id)}
      >
        <Text style={styles.deleteText}>✕</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>📞 Contacts d'urgence</Text>
        <Text style={styles.headerSubtitle}>Seront alertés en cas de SOS</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nom du contact"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Numéro de téléphone"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />
        <TouchableOpacity style={styles.addButton} onPress={addContact}>
          <Text style={styles.addButtonText}>Ajouter</Text>
        </TouchableOpacity>
      </View>

      {contacts.length === 0 ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyEmoji}>📱</Text>
          <Text style={styles.emptyText}>Aucun contact d'urgence</Text>
          <Text style={styles.emptySubtext}>
            Ajoutez des contacts qui seront alertés en cas d'urgence
          </Text>
        </View>
      ) : (
        <FlatList
          data={contacts}
          renderItem={renderContact}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.list}
        />
      )}
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
  form: {
    padding: 20,
    backgroundColor: '#fff',
    gap: 12
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16
  },
  addButton: {
    backgroundColor: '#E91E63',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center'
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  list: {
    padding: 20,
    gap: 12
  },
  contactCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  contactInfo: {
    flex: 1
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4
  },
  contactPhone: {
    fontSize: 16,
    color: '#666'
  },
  deleteButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#f44336',
    alignItems: 'center',
    justifyContent: 'center'
  },
  deleteText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40
  },
  emptyEmoji: {
    fontSize: 64,
    marginBottom: 20
  },
  emptyText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8
  },
  emptySubtext: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center'
  }
});
