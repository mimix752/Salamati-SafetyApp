import { useState, useEffect } from 'react';
import { Download, X, Smartphone } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Détecter iOS
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
    setIsIOS(iOS);

    // Vérifier si déjà installé (mode standalone)
    const standalone = window.matchMedia('(display-mode: standalone)').matches 
      || (window.navigator as any).standalone 
      || document.referrer.includes('android-app://');
    setIsStandalone(standalone);

    // Vérifier si l'utilisateur a déjà fermé le prompt
    const hasClosedPrompt = localStorage.getItem('salamati_install_prompt_closed');
    
    if (!standalone && !hasClosedPrompt) {
      // Sur iOS, afficher le prompt après 3 secondes
      if (iOS) {
        const timer = setTimeout(() => {
          setShowPrompt(true);
        }, 3000);
        return () => clearTimeout(timer);
      }

      // Sur Android/Desktop, écouter l'événement beforeinstallprompt
      const handler = (e: Event) => {
        e.preventDefault();
        setDeferredPrompt(e as BeforeInstallPromptEvent);
        setShowPrompt(true);
      };

      window.addEventListener('beforeinstallprompt', handler);

      return () => {
        window.removeEventListener('beforeinstallprompt', handler);
      };
    }
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      // Android/Desktop
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      
      if (outcome === 'accepted') {
        console.log('PWA installée');
      }
      
      setDeferredPrompt(null);
      setShowPrompt(false);
    }
    // Pour iOS, le prompt reste affiché avec les instructions
  };

  const handleClose = () => {
    setShowPrompt(false);
    localStorage.setItem('salamati_install_prompt_closed', 'true');
  };

  // Ne rien afficher si déjà installé
  if (isStandalone) {
    return null;
  }

  // Ne pas afficher si fermé
  if (!showPrompt) {
    return null;
  }

  return (
    <div className="fixed top-4 left-4 right-4 z-50 animate-in slide-in-from-top duration-500">
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-2xl shadow-2xl p-4 relative">
        {/* Bouton fermer */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 p-1 hover:bg-white/20 rounded-full transition-colors"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Contenu */}
        <div className="flex items-start gap-3 pr-8">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
            <Smartphone className="w-6 h-6" />
          </div>
          
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-1">
              Installer Salamati
            </h3>
            
            {isIOS ? (
              // Instructions pour iOS
              <div className="text-sm text-pink-50 space-y-2">
                <p>
                  Pour installer l'application sur votre iPhone:
                </p>
                <ol className="list-decimal list-inside space-y-1 text-xs">
                  <li>Tapez sur le bouton Partager <span className="inline-block">📤</span> en bas</li>
                  <li>Sélectionnez "Sur l'écran d'accueil"</li>
                  <li>Tapez sur "Ajouter"</li>
                </ol>
              </div>
            ) : (
              // Message pour Android/Desktop
              <div className="text-sm text-pink-50">
                <p className="mb-3">
                  Installez Salamati sur votre appareil pour un accès rapide et une expérience optimale!
                </p>
                <button
                  onClick={handleInstallClick}
                  className="bg-white text-pink-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-pink-50 transition-colors flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Installer maintenant
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Indicateur visuel */}
        <div className="mt-3 flex gap-1 justify-center">
          <div className="w-1.5 h-1.5 bg-white/50 rounded-full"></div>
          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
          <div className="w-1.5 h-1.5 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
