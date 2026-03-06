import { Phone } from 'lucide-react';

interface EmergencyNumber {
  name: string;
  number: string;
  description: string;
}

const emergencyNumbers: EmergencyNumber[] = [
  { name: 'Police', number: '19', description: 'Police Secours Maroc' },
  { name: 'Gendarmerie', number: '177', description: 'Gendarmerie Royale' },
  { name: 'Protection Civile', number: '15', description: 'Urgences incendie' },
  { name: 'SAMU', number: '141', description: 'Urgences médicales' },
  { name: 'Violence femmes', number: '8350', description: 'Écoute violence conjugale' },
  { name: 'Enfance en danger', number: '2511', description: 'Protection de l\'enfance' },
];

export function EmergencyNumbers() {
  const callNumber = (number: string) => {
    window.location.href = `tel:${number}`;
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Numéros d'urgence</h2>
      <div className="space-y-2">
        {emergencyNumbers.map((item, index) => (
          <button
            key={index}
            onClick={() => callNumber(item.number)}
            className="w-full flex items-center justify-between p-3 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl hover:from-red-100 hover:to-pink-100 transition-all active:scale-98"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900">{item.name}</p>
                <p className="text-xs text-gray-600">{item.description}</p>
              </div>
            </div>
            <span className="text-xl font-bold text-red-600">{item.number}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
