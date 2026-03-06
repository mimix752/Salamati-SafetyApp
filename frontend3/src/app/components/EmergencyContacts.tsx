import { useState } from 'react';
import { UserPlus, Phone, Trash2, Edit2 } from 'lucide-react';

export interface Contact {
  id: string;
  name: string;
  phone: string;
}

export function EmergencyContacts() {
  const [contacts, setContacts] = useState<Contact[]>(() => {
    const saved = localStorage.getItem('salamati_contacts');
    return saved ? JSON.parse(saved) : [];
  });
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const saveContacts = (newContacts: Contact[]) => {
    setContacts(newContacts);
    localStorage.setItem('salamati_contacts', JSON.stringify(newContacts));
  };

  const addContact = () => {
    if (name.trim() && phone.trim()) {
      const newContact: Contact = {
        id: Date.now().toString(),
        name: name.trim(),
        phone: phone.trim(),
      };
      saveContacts([...contacts, newContact]);
      setName('');
      setPhone('');
      setIsAdding(false);
    }
  };

  const updateContact = () => {
    if (editingId && name.trim() && phone.trim()) {
      const updated = contacts.map(c =>
        c.id === editingId ? { ...c, name: name.trim(), phone: phone.trim() } : c
      );
      saveContacts(updated);
      setEditingId(null);
      setName('');
      setPhone('');
    }
  };

  const deleteContact = (id: string) => {
    saveContacts(contacts.filter(c => c.id !== id));
  };

  const startEdit = (contact: Contact) => {
    setEditingId(contact.id);
    setName(contact.name);
    setPhone(contact.phone);
    setIsAdding(false);
  };

  const cancelForm = () => {
    setIsAdding(false);
    setEditingId(null);
    setName('');
    setPhone('');
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Contacts d'urgence</h2>
        {!isAdding && !editingId && (
          <button
            onClick={() => setIsAdding(true)}
            className="p-2 rounded-full bg-pink-100 text-pink-600 hover:bg-pink-200 transition-colors"
          >
            <UserPlus className="w-5 h-5" />
          </button>
        )}
      </div>

      {(isAdding || editingId) && (
        <div className="mb-4 p-4 bg-gray-50 rounded-xl space-y-3">
          <input
            type="text"
            placeholder="Nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="tel"
            placeholder="Numéro de téléphone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <div className="flex gap-2">
            <button
              onClick={editingId ? updateContact : addContact}
              className="flex-1 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
            >
              {editingId ? 'Modifier' : 'Ajouter'}
            </button>
            <button
              onClick={cancelForm}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Annuler
            </button>
          </div>
        </div>
      )}

      <div className="space-y-2">
        {contacts.length === 0 ? (
          <p className="text-gray-500 text-sm text-center py-4">
            Aucun contact d'urgence ajouté
          </p>
        ) : (
          contacts.map(contact => (
            <div
              key={contact.id}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center gap-3 flex-1">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-pink-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{contact.name}</p>
                  <p className="text-sm text-gray-600">{contact.phone}</p>
                </div>
              </div>
              <div className="flex gap-1">
                <button
                  onClick={() => startEdit(contact)}
                  className="p-2 text-gray-600 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => deleteContact(contact.id)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
