import { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Scale, FileText } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface LegalTopic {
  id: string;
  title: string;
  question: string;
}

const legalTopics: LegalTopic[] = [
  { id: 'violence', title: 'Violence conjugale', question: 'Que dit la loi sur la violence conjugale?' },
  { id: 'harcelement', title: 'Harcèlement sexuel', question: 'Quelles sont les lois contre le harcèlement?' },
  { id: 'divorce', title: 'Divorce et droits', question: 'Quels sont mes droits en cas de divorce?' },
  { id: 'plainte', title: 'Déposer plainte', question: 'Comment déposer une plainte?' },
  { id: 'garde', title: 'Garde des enfants', question: 'Comment fonctionne la garde des enfants?' },
  { id: 'pension', title: 'Pension alimentaire', question: 'Comment obtenir une pension alimentaire?' },
];

const legalResponses: Record<string, string> = {
  violence: `📋 **Loi 103-13 contre les violences faites aux femmes**

La loi marocaine punit sévèrement la violence conjugale :

🔹 **Violence physique** : 1 mois à 2 ans de prison + amende
🔹 **Violence aggravée** : Jusqu'à 5 ans si blessures graves
🔹 **Violence psychologique** : 1 à 6 mois + amende

**📞 Que faire ?**
1. Appelez le 8350 (ligne d'écoute)
2. Déposez plainte au commissariat
3. Demandez un certificat médical
4. Contactez une association d'aide

**🏛️ Vos droits :**
- Protection immédiate par ordonnance
- Éloignement de l'agresseur
- Aide juridique gratuite disponible`,

  harcelement: `📋 **Loi sur le harcèlement sexuel au Maroc**

Le Code pénal marocain (Articles 503-1 et suivants) :

🔹 **Harcèlement dans l'espace public** : 1 à 6 mois + amende
🔹 **Harcèlement au travail** : 2 à 6 mois + amende
🔹 **Par personne en autorité** : Peine aggravée

**Types de harcèlement punis :**
- Gestes ou paroles à connotation sexuelle
- Poursuivre une personne insistamment
- Messages électroniques inappropriés

**📞 Que faire ?**
1. Documentez (captures d'écran, témoins)
2. Signalez à votre employeur (si au travail)
3. Déposez plainte au commissariat
4. Contactez le 8350 pour assistance`,

  divorce: `📋 **Droits de la femme en cas de divorce (Moudawana)**

**Types de divorce :**
🔹 **Divorce consensuel** : D'un commun accord
🔹 **Khol'e** : À la demande de l'épouse
🔹 **Chikak** : Pour préjudice ou discorde

**💰 Vos droits financiers :**
- Pension alimentaire (nafaqa) pour les enfants
- Compensation (mout'a) selon la durée du mariage
- Logement pendant la période de garde
- Part des biens acquis pendant le mariage

**📋 Démarches :**
1. Tentative de réconciliation (obligatoire)
2. Saisir le tribunal de la famille
3. Présence d'un avocat recommandée
4. Jugement sous 3 à 6 mois

**🏠 Garde des enfants :**
La mère a priorité jusqu'à 15 ans (filles et garçons)`,

  plainte: `📋 **Comment déposer une plainte au Maroc**

**📍 Où déposer ?**
- Commissariat de police (19)
- Brigade de gendarmerie (177)
- Procureur du Roi (tribunal)

**📄 Documents nécessaires :**
✅ Carte d'identité nationale
✅ Certificat médical (si violence physique)
✅ Preuves (photos, messages, témoins)
✅ Adresse de l'auteur des faits

**⚡ Procédure :**
1. **Plainte immédiate** : Commissariat 24h/24
2. **Audition** : Racontez les faits en détail
3. **Procès-verbal** : Signez après lecture
4. **Enquête** : La police mène l'investigation
5. **Justice** : Convocation au tribunal

**⏰ Délais de prescription :**
- Délits : 4 ans après les faits
- Violence conjugale : Délai suspendu pendant le mariage

**💡 Conseil :** Vous pouvez être accompagnée par une association`,

  garde: `📋 **Garde des enfants selon la Moudawana**

**👩‍👧‍👦 Ordre de priorité :**
1. La mère (priorité absolue)
2. Le père (si mère incapable)
3. Grand-mère maternelle
4. Grand-mère paternelle
5. Autres proches

**⏰ Durée de la garde :**
- **Jusqu'à 15 ans** : Filles et garçons
- **Après 15 ans** : L'enfant peut choisir
- **Conditions** : La mère doit être apte

**🏠 Droits de la mère gardienne :**
- Logement décent payé par le père
- Pension alimentaire (nafaqa)
- Frais de scolarité et santé
- Salaire de garde (oujrat al-hadana)

**👨‍👧 Droit de visite du père :**
Fixé par le juge (généralement week-ends alternés)

**⚠️ Perte de garde si :**
- Remariage (sauf intérêt de l'enfant)
- Comportement inapproprié
- Incapacité physique/mentale`,

  pension: `📋 **Pension alimentaire (Nafaqa) au Maroc**

**💰 Qui y a droit ?**
- Les enfants (jusqu'à 18 ans, garçons)
- Les filles jusqu'au mariage
- L'ex-épouse pendant la période de viduité

**📊 Calcul de la pension :**
Selon les ressources du père et besoins des enfants :
- Nourriture, vêtements, logement
- Scolarité et soins médicaux
- Activités extrascolaires

**⚖️ Comment l'obtenir ?**
1. **Demande au juge** : Tribunal de la famille
2. **Enquête sociale** : Vérification des revenus
3. **Fixation du montant** : Jugement
4. **Exécution** : Saisie sur salaire possible

**🚫 Non-paiement :**
Le père risque :
- Saisie sur salaire automatique
- Interdiction de quitter le territoire
- Prison de 1 mois à 1 an
- Amende de 2000 à 10000 DH

**💡 Bon à savoir :**
La pension peut être révisée en cas de changement de situation`,
};

export function LegalAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Marhaba! 👋 Je suis votre assistant juridique Salamati. Je peux vous informer sur vos droits selon les lois marocaines. Comment puis-je vous aider?',
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addMessage = (text: string, isBot: boolean) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleTopicClick = (topic: LegalTopic) => {
    addMessage(topic.question, false);
    
    setTimeout(() => {
      const response = legalResponses[topic.id] || 'Désolé, je n\'ai pas d\'information sur ce sujet pour le moment.';
      addMessage(response, true);
    }, 500);
  };

  const handleSendMessage = () => {
    if (inputText.trim()) {
      addMessage(inputText, false);
      setInputText('');

      setTimeout(() => {
        // Recherche simple de mots-clés
        const text = inputText.toLowerCase();
        let response = '';

        if (text.includes('violence') || text.includes('frappe') || text.includes('battre')) {
          response = legalResponses.violence;
        } else if (text.includes('harcèlement') || text.includes('harcele')) {
          response = legalResponses.harcelement;
        } else if (text.includes('divorce') || text.includes('sépar')) {
          response = legalResponses.divorce;
        } else if (text.includes('plainte') || text.includes('porter plainte')) {
          response = legalResponses.plainte;
        } else if (text.includes('garde') || text.includes('enfant')) {
          response = legalResponses.garde;
        } else if (text.includes('pension') || text.includes('nafaqa')) {
          response = legalResponses.pension;
        } else {
          response = `Je comprends votre question. Voici les sujets pour lesquels je peux vous aider:\n\n• Violence conjugale (Loi 103-13)\n• Harcèlement sexuel\n• Divorce et droits\n• Déposer une plainte\n• Garde des enfants\n• Pension alimentaire\n\nChoisissez un sujet ci-dessous ou posez votre question différemment. 🙏`;
        }

        addMessage(response, true);
      }, 800);
    }
  };

  return (
    <>
      {/* Bouton flottant */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-40 right-6 w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-40"
        >
          <Scale className="w-8 h-8" />
        </button>
      )}

      {/* Fenêtre de chat */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center sm:justify-center">
          <div className="bg-white w-full sm:w-96 sm:max-w-lg h-[85vh] sm:h-[600px] rounded-t-3xl sm:rounded-3xl flex flex-col shadow-2xl">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-4 rounded-t-3xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Scale className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold">Assistant Juridique</h3>
                  <p className="text-xs text-purple-200">Lois marocaines</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 flex items-center justify-center hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      message.isBot
                        ? 'bg-gray-100 text-gray-900'
                        : 'bg-purple-600 text-white'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                  </div>
                </div>
              ))}

              {/* Sujets suggérés */}
              {messages.length === 1 && (
                <div className="space-y-2">
                  <p className="text-xs text-gray-500 text-center mb-3">Sujets populaires :</p>
                  {legalTopics.map((topic) => (
                    <button
                      key={topic.id}
                      onClick={() => handleTopicClick(topic)}
                      className="w-full text-left p-3 bg-purple-50 hover:bg-purple-100 rounded-xl transition-colors flex items-center gap-3"
                    >
                      <FileText className="w-5 h-5 text-purple-600 flex-shrink-0" />
                      <span className="text-sm text-gray-900">{topic.title}</span>
                    </button>
                  ))}
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t p-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Posez votre question..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button
                  onClick={handleSendMessage}
                  className="w-12 h-12 bg-purple-600 text-white rounded-xl flex items-center justify-center hover:bg-purple-700 transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                ⚖️ Informations générales - Consultez un avocat pour votre cas
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
