import { useState, useRef } from 'react';
import { Shield, AlertCircle } from 'lucide-react';
import { EmergencyContacts } from './components/EmergencyContacts';
import { QuickActions } from './components/QuickActions';
import { EmergencyNumbers } from './components/EmergencyNumbers';
import { LegalAssistant } from './components/LegalAssistant';
import { InstallPrompt } from './components/InstallPrompt';
import { OfflineIndicator } from './components/OfflineIndicator';
import { IconCustomizer } from './components/IconCustomizer';

export default function App() {
  const [isSOSPressed, setIsSOSPressed] = useState(false);
  const [countdown, setCountdown] = useState<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [currentIconId, setCurrentIconId] = useState(
    () => localStorage.getItem('salamati_icon_id') || 'shield-heart'
  );
  const [currentIconSvg, setCurrentIconSvg] = useState(
    () => localStorage.getItem('salamati_icon_svg') || null
  );

  const handleIconChange = (iconId: string, svgContent: string) => {
    setCurrentIconId(iconId);
    setCurrentIconSvg(svgContent);
  };

  const handleSOSPress = () => {
    setIsSOSPressed(true);
    setCountdown(3);

    // Vibration si disponible (mobile)
    if ('vibrate' in navigator) {
      navigator.vibrate([100, 50, 100]); // Pattern de vibration
    }

    // Compte à rebours
    let count = 3;
    const countdownInterval = setInterval(() => {
      count--;
      setCountdown(count);
      
      // Vibration à chaque seconde
      if ('vibrate' in navigator && count > 0) {
        navigator.vibrate(50);
      }
      
      if (count <= 0) {
        clearInterval(countdownInterval);
      }
    }, 1000);

    // Après 3 secondes, envoyer les messages
    timeoutRef.current = setTimeout(() => {
      // Vibration finale plus longue
      if ('vibrate' in navigator) {
        navigator.vibrate([200, 100, 200, 100, 200]);
      }
      sendSOSAlert();
      setIsSOSPressed(false);
      setCountdown(null);
    }, 3000);
  };

  const handleSOSRelease = () => {
    // Annuler si relâché avant 3 secondes
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      setIsSOSPressed(false);
      setCountdown(null);
    }
  };

  const sendSOSAlert = () => {
    // Récupérer les contacts depuis localStorage
    const savedContacts = localStorage.getItem('salamati_contacts');
    const contacts = savedContacts ? JSON.parse(savedContacts) : [];

    if (contacts.length === 0) {
      alert('⚠️ Aucun contact d\'urgence configuré!\n\nVeuillez ajouter des contacts d\'urgence pour utiliser cette fonctionnalité.');
      return;
    }

    // Obtenir la localisation
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const locationUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
          const message = `🆘 ALERTE URGENCE SALAMATI 🆘\n\nJ'ai besoin d'aide immédiatement!\n\nMa localisation:\n${locationUrl}\n\nNuméros d'urgence Maroc:\nPolice: 19 | Gendarmerie: 177\n\nEnvoyé depuis l'application Salamati`;

          // Essayer de partager via l'API Web Share
          if (navigator.share) {
            navigator.share({
              title: '🆘 ALERTE URGENCE',
              text: message,
            }).then(() => {
              alert('✅ Message d\'urgence envoyé à vos contacts!');
            }).catch(() => {
              // Fallback: copier dans le presse-papier
              fallbackAlert(message, contacts);
            });
          } else {
            fallbackAlert(message, contacts);
          }
        },
        () => {
          // Si la géolocalisation échoue, envoyer quand même
          const message = `🆘 ALERTE URGENCE SALAMATI 🆘\n\nJ'ai besoin d'aide immédiatement!\n\n(Localisation non disponible)\n\nNuméros d'urgence Maroc:\nPolice: 19 | Gendarmerie: 177\n\nEnvoyé depuis l'application Salamati`;
          fallbackAlert(message, contacts);
        }
      );
    } else {
      const message = `🆘 ALERTE URGENCE SALAMATI 🆘\n\nJ'ai besoin d'aide immédiatement!\n\n(Localisation non disponible)\n\nNuméros d'urgence Maroc:\nPolice: 19 | Gendarmerie: 177\n\nEnvoyé depuis l'application Salamati`;
      fallbackAlert(message, contacts);
    }
  };

  const fallbackAlert = (message: string, contacts: any[]) => {
    // Copier dans le presse-papier
    navigator.clipboard.writeText(message);
    
    // Afficher les options
    const contactsList = contacts.map(c => `${c.name}: ${c.phone}`).join('\n');
    alert(`🆘 ALERTE ACTIVÉE!\n\nMessage copié dans le presse-papier:\n\n"${message}"\n\nVos contacts d'urgence:\n${contactsList}\n\nPartagez ce message avec vos contacts immédiatement!`);

    // Essayer d'ouvrir SMS si possible
    if (contacts.length > 0) {
      const firstContact = contacts[0];
      const smsUrl = `sms:${firstContact.phone}?body=${encodeURIComponent(message)}`;
      window.location.href = smsUrl;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Indicateur de connexion */}
      <OfflineIndicator />
      
      {/* Prompt d'installation PWA */}
      <InstallPrompt />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-6 shadow-lg relative">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm overflow-hidden">
            {currentIconSvg ? (
              <svg width="28" height="28" viewBox="0 0 512 512" dangerouslySetInnerHTML={{ __html: currentIconSvg.replace(/<\/?svg[^>]*>/g, '') }} />
            ) : (
              <Shield className="w-6 h-6" />
            )}
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold">Salamati</h1>
            <p className="text-pink-100 text-sm">Votre sécurité, notre priorité 🇲🇦</p>
          </div>
        </div>
        {/* Bouton caché de personnalisation de l'icône */}
        <IconCustomizer onIconChange={handleIconChange} currentIconId={currentIconId} />
      </div>

      {/* Contenu principal */}
      <div className="px-4 py-6 space-y-6 pb-32">
        {/* Alerte d'information */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex gap-3">
          <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm text-blue-900 font-medium mb-1">
              Comment utiliser le bouton SOS
            </p>
            <p className="text-xs text-blue-700">
              Maintenez le bouton rouge pendant 3 secondes pour déclencher l'alerte d'urgence. 
              Relâchez avant pour annuler.
            </p>
          </div>
        </div>

        {/* Contacts d'urgence */}
        <EmergencyContacts />

        {/* Actions rapides */}
        <QuickActions />

        {/* Numéros d'urgence */}
        <EmergencyNumbers />
      </div>

      {/* Assistant juridique */}
      <LegalAssistant />

      {/* Bouton SOS fixe en bas */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white to-transparent pointer-events-none">
        <div className="pointer-events-auto">
          <button
            onTouchStart={handleSOSPress}
            onTouchEnd={handleSOSRelease}
            onMouseDown={handleSOSPress}
            onMouseUp={handleSOSRelease}
            onMouseLeave={handleSOSRelease}
            className={`w-full h-32 rounded-3xl font-bold text-3xl transition-all shadow-2xl relative overflow-hidden ${
              isSOSPressed
                ? 'bg-gradient-to-br from-red-700 to-red-900 scale-95'
                : 'bg-gradient-to-br from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 active:scale-95'
            }`}
            style={{
              boxShadow: isSOSPressed
                ? '0 10px 40px rgba(239, 68, 68, 0.6), inset 0 0 60px rgba(0, 0, 0, 0.3)'
                : '0 20px 60px rgba(239, 68, 68, 0.4)',
            }}
          >
            {/* Animation de pulsation */}
            {!isSOSPressed && (
              <>
                <div className="absolute inset-0 bg-white/20 rounded-3xl animate-ping" style={{ animationDuration: '2s' }}></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"></div>
              </>
            )}
            
            {/* Texte */}
            <span className="relative z-10 text-white drop-shadow-lg">
              {countdown !== null ? (
                <span className="text-5xl">{countdown}</span>
              ) : (
                'SOS'
              )}
            </span>

            {/* Cercle de progression */}
            {isSOSPressed && countdown !== null && (
              <div className="absolute inset-4 border-8 border-white/30 rounded-3xl">
                <div 
                  className="absolute inset-0 border-8 border-white rounded-3xl transition-all"
                  style={{
                    clipPath: `inset(0 ${100 - ((3 - countdown) / 3) * 100}% 0 0)`,
                  }}
                ></div>
              </div>
            )}
          </button>
          
          <p className="text-center text-sm text-gray-600 mt-3">
            {isSOSPressed
              ? 'Relâchez pour annuler'
              : 'Maintenez 3 secondes pour alerter'}
          </p>
        </div>
      </div>
    </div>
  );
}