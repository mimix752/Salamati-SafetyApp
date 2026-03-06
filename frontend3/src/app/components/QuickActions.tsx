import { Phone, Volume2, MapPin, Timer } from 'lucide-react';
import { useState, useEffect } from 'react';

export function QuickActions() {
  const [isAlarmOn, setIsAlarmOn] = useState(false);
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const [oscillator, setOscillator] = useState<OscillatorNode | null>(null);
  const [timerActive, setTimerActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timerActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setTimerActive(false);
            // Déclencher une alerte quand le timer se termine
            alert('⚠️ Votre minuteur de sécurité a expiré!');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerActive, timeLeft]);

  const fakeCall = () => {
    // Simuler un appel entrant
    if (window.confirm('📞 Simuler un appel entrant?\n\nVotre écran va afficher un appel entrant factice pour vous aider à quitter une situation inconfortable.')) {
      // Créer un écran d'appel factice
      const overlay = document.createElement('div');
      overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        z-index: 9999;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: white;
      `;
      overlay.innerHTML = `
        <div style="text-align: center;">
          <div style="font-size: 18px; margin-bottom: 20px; opacity: 0.9;">Appel entrant...</div>
          <div style="width: 100px; height: 100px; background: rgba(255,255,255,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </div>
          <div style="font-size: 28px; font-weight: bold; margin-bottom: 10px;">Maman</div>
          <div style="font-size: 16px; opacity: 0.8; margin-bottom: 60px;">Mobile</div>
          <button onclick="this.parentElement.parentElement.remove()" style="width: 70px; height: 70px; border-radius: 50%; background: #f44336; border: none; color: white; font-size: 24px; cursor: pointer;">✕</button>
        </div>
      `;
      document.body.appendChild(overlay);
    }
  };

  const toggleAlarm = () => {
    if (!isAlarmOn) {
      // Créer un contexte audio et jouer une alarme
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.frequency.value = 1000; // 1000 Hz
      gain.gain.value = 0.3;
      osc.type = 'sine';
      
      osc.start();
      
      // Moduler la fréquence pour créer un effet de sirène
      let increasing = true;
      const interval = setInterval(() => {
        if (increasing) {
          osc.frequency.value += 50;
          if (osc.frequency.value >= 1500) increasing = false;
        } else {
          osc.frequency.value -= 50;
          if (osc.frequency.value <= 800) increasing = true;
        }
      }, 100);
      
      setAudioContext(ctx);
      setOscillator(osc);
      setIsAlarmOn(true);
      
      // Stocker l'interval pour pouvoir le nettoyer
      (osc as any).interval = interval;
    } else {
      // Arrêter l'alarme
      if (oscillator) {
        clearInterval((oscillator as any).interval);
        oscillator.stop();
        oscillator.disconnect();
      }
      if (audioContext) {
        audioContext.close();
      }
      setOscillator(null);
      setAudioContext(null);
      setIsAlarmOn(false);
    }
  };

  const shareLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const message = `🆘 Localisation d'urgence:\nhttps://www.google.com/maps?q=${latitude},${longitude}`;
          
          if (navigator.share) {
            navigator.share({
              title: 'Ma localisation - Salamati',
              text: message,
            }).catch(() => {
              // Fallback: copier dans le presse-papier
              navigator.clipboard.writeText(message);
              alert('📍 Localisation copiée dans le presse-papier!');
            });
          } else {
            navigator.clipboard.writeText(message);
            alert('📍 Localisation copiée dans le presse-papier!');
          }
        },
        () => {
          alert('❌ Impossible d\'obtenir votre localisation. Vérifiez les autorisations.');
        }
      );
    } else {
      alert('❌ La géolocalisation n\'est pas disponible sur cet appareil.');
    }
  };

  const startSafetyTimer = () => {
    const minutes = prompt('Minuteur de sécurité\n\nCombien de minutes? (Ex: 30 pour 30 minutes)');
    if (minutes && !isNaN(Number(minutes)) && Number(minutes) > 0) {
      setTimeLeft(Number(minutes) * 60);
      setTimerActive(true);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Actions rapides</h2>
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={fakeCall}
          className="flex flex-col items-center gap-2 p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:from-blue-100 hover:to-blue-200 transition-all active:scale-95"
        >
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
            <Phone className="w-6 h-6 text-white" />
          </div>
          <span className="text-sm font-medium text-gray-900">Faux appel</span>
        </button>

        <button
          onClick={toggleAlarm}
          className={`flex flex-col items-center gap-2 p-4 rounded-xl transition-all active:scale-95 ${
            isAlarmOn
              ? 'bg-gradient-to-br from-red-500 to-red-600 text-white'
              : 'bg-gradient-to-br from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200'
          }`}
        >
          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
            isAlarmOn ? 'bg-white/20' : 'bg-orange-500'
          }`}>
            <Volume2 className={`w-6 h-6 ${isAlarmOn ? 'text-white' : 'text-white'}`} />
          </div>
          <span className={`text-sm font-medium ${isAlarmOn ? 'text-white' : 'text-gray-900'}`}>
            {isAlarmOn ? 'Arrêter alarme' : 'Alarme'}
          </span>
        </button>

        <button
          onClick={shareLocation}
          className="flex flex-col items-center gap-2 p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl hover:from-green-100 hover:to-green-200 transition-all active:scale-95"
        >
          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
            <MapPin className="w-6 h-6 text-white" />
          </div>
          <span className="text-sm font-medium text-gray-900">Localisation</span>
        </button>

        <button
          onClick={timerActive ? () => setTimerActive(false) : startSafetyTimer}
          className={`flex flex-col items-center gap-2 p-4 rounded-xl transition-all active:scale-95 ${
            timerActive
              ? 'bg-gradient-to-br from-purple-500 to-purple-600 text-white'
              : 'bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200'
          }`}
        >
          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
            timerActive ? 'bg-white/20' : 'bg-purple-500'
          }`}>
            <Timer className={`w-6 h-6 ${timerActive ? 'text-white' : 'text-white'}`} />
          </div>
          <span className={`text-sm font-medium ${timerActive ? 'text-white' : 'text-gray-900'}`}>
            {timerActive ? formatTime(timeLeft) : 'Minuteur'}
          </span>
        </button>
      </div>
    </div>
  );
}
