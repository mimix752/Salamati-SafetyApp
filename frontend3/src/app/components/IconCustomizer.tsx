import { useState, useRef } from 'react';
import { X, Lock, Check, Palette } from 'lucide-react';

function updateFavicon(svgContent: string) {
  try {
    const blob = new Blob([svgContent], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    document.querySelectorAll<HTMLLinkElement>('link[rel="icon"], link[rel="apple-touch-icon"]')
      .forEach(link => { link.href = url; });
  } catch (_) {}
}

// 4 icon options with SVG paths
const ICON_OPTIONS = [
  {
    id: 'shield-heart',
    label: 'Bouclier & Cœur',
    description: 'Original Salamati',
    gradient: ['#ec4899', '#9333ea'],
    svg: `<rect width="512" height="512" rx="110" fill="url(#bg)"/>
<defs><linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#ec4899"/><stop offset="100%" style="stop-color:#9333ea"/></linearGradient></defs>
<path d="M256 96C256 96 160 128 160 192V288C160 352 256 416 256 416C256 416 352 352 352 288V192C352 128 256 96 256 96Z" fill="white" stroke="white" stroke-width="12"/>
<path d="M256 230C256 230 232 210 212 210C192 210 180 222 180 242C180 270 210 295 256 330C302 295 332 270 332 242C332 222 320 210 300 210C280 210 256 230 256 230Z" fill="#ec4899" stroke="#c026d3" stroke-width="4"/>
<text x="256" y="450" font-family="Arial" font-size="72" font-weight="bold" fill="white" text-anchor="middle" letter-spacing="8">SOS</text>`,
  },
  {
    id: 'star-crescent',
    label: 'Croissant & Étoile',
    description: 'Identité marocaine',
    gradient: ['#dc2626', '#991b1b'],
    svg: `<rect width="512" height="512" rx="110" fill="url(#bg2)"/>
<defs><linearGradient id="bg2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#dc2626"/><stop offset="100%" style="stop-color:#991b1b"/></linearGradient></defs>
<circle cx="256" cy="220" r="130" fill="none" stroke="white" stroke-width="28"/>
<circle cx="300" cy="190" r="100" fill="#dc2626"/>
<polygon points="256,110 265,140 296,140 272,158 281,188 256,170 231,188 240,158 216,140 247,140" fill="white"/>
<text x="256" y="430" font-family="Arial" font-size="72" font-weight="bold" fill="white" text-anchor="middle" letter-spacing="8">SOS</text>`,
  },
  {
    id: 'flower',
    label: 'Fleur & Protection',
    description: 'Nature & douceur',
    gradient: ['#0ea5e9', '#7c3aed'],
    svg: `<rect width="512" height="512" rx="110" fill="url(#bg3)"/>
<defs><linearGradient id="bg3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#0ea5e9"/><stop offset="100%" style="stop-color:#7c3aed"/></linearGradient></defs>
<circle cx="256" cy="220" r="55" fill="white"/>
<ellipse cx="256" cy="130" rx="36" ry="55" fill="white" fill-opacity="0.85"/>
<ellipse cx="256" cy="310" rx="36" ry="55" fill="white" fill-opacity="0.85"/>
<ellipse cx="166" cy="220" rx="55" ry="36" fill="white" fill-opacity="0.85"/>
<ellipse cx="346" cy="220" rx="55" ry="36" fill="white" fill-opacity="0.85"/>
<ellipse cx="193" cy="157" rx="36" ry="55" transform="rotate(-45 193 157)" fill="white" fill-opacity="0.7"/>
<ellipse cx="319" cy="157" rx="36" ry="55" transform="rotate(45 319 157)" fill="white" fill-opacity="0.7"/>
<ellipse cx="193" cy="283" rx="36" ry="55" transform="rotate(45 193 283)" fill="white" fill-opacity="0.7"/>
<ellipse cx="319" cy="283" rx="36" ry="55" transform="rotate(-45 319 283)" fill="white" fill-opacity="0.7"/>
<circle cx="256" cy="220" r="42" fill="#0ea5e9"/>
<circle cx="256" cy="220" r="22" fill="white"/>
<text x="256" y="430" font-family="Arial" font-size="72" font-weight="bold" fill="white" text-anchor="middle" letter-spacing="8">SOS</text>`,
  },
  {
    id: 'hand',
    label: 'Main Protectrice',
    description: 'Force & solidarité',
    gradient: ['#059669', '#0d9488'],
    svg: `<rect width="512" height="512" rx="110" fill="url(#bg4)"/>
<defs><linearGradient id="bg4" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#059669"/><stop offset="100%" style="stop-color:#0d9488"/></linearGradient></defs>
<path d="M256 370 C200 370 160 340 150 290 L140 200 C138 185 148 175 160 175 C168 175 175 180 178 188 L178 230 C178 232 180 233 181 231 L181 155 C181 140 191 130 203 130 C215 130 225 140 225 155 L225 220 C225 222 228 222 228 220 L228 145 C228 130 238 120 250 120 C262 120 272 130 272 145 L272 220 C272 222 275 222 275 220 L275 158 C275 143 285 133 297 133 C309 133 319 143 319 158 L319 260 C330 248 345 248 352 260 L330 310 C318 348 290 370 256 370Z" fill="white"/>
<circle cx="256" cy="260" r="30" fill="#059669"/>
<path d="M244 260 L256 272 L276 248" stroke="white" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<text x="256" y="450" font-family="Arial" font-size="72" font-weight="bold" fill="white" text-anchor="middle" letter-spacing="8">SOS</text>`,
  },
];

const SECRET_CODE = '1234'; // Code secret par défaut

interface IconCustomizerProps {
  onIconChange: (iconId: string, svgContent: string) => void;
  currentIconId: string;
}

export function IconCustomizer({ onIconChange, currentIconId }: IconCustomizerProps) {
  const [holdProgress, setHoldProgress] = useState(0);
  const [showCodeInput, setShowCodeInput] = useState(false);
  const [showIconPicker, setShowIconPicker] = useState(false);
  const [code, setCode] = useState('');
  const [codeError, setCodeError] = useState(false);
  const [shakeAnim, setShakeAnim] = useState(false);
  const holdTimerRef = useRef<NodeJS.Timeout | null>(null);
  const progressTimerRef = useRef<NodeJS.Timeout | null>(null);

  const savedCode = localStorage.getItem('salamati_secret_code') || SECRET_CODE;

  const startHold = () => {
    setHoldProgress(0);
    let progress = 0;
    progressTimerRef.current = setInterval(() => {
      progress += 100 / 30; // 3 seconds at ~100ms intervals
      setHoldProgress(Math.min(progress, 100));
    }, 100);

    holdTimerRef.current = setTimeout(() => {
      clearInterval(progressTimerRef.current!);
      setHoldProgress(100);
      // Vibration
      if ('vibrate' in navigator) navigator.vibrate([50, 30, 50]);
      setTimeout(() => {
        setShowCodeInput(true);
        setHoldProgress(0);
      }, 200);
    }, 3000);
  };

  const cancelHold = () => {
    if (holdTimerRef.current) clearTimeout(holdTimerRef.current);
    if (progressTimerRef.current) clearInterval(progressTimerRef.current);
    setHoldProgress(0);
  };

  const handleCodeSubmit = () => {
    if (code === savedCode) {
      setShowCodeInput(false);
      setShowIconPicker(true);
      setCode('');
      setCodeError(false);
    } else {
      setCodeError(true);
      setShakeAnim(true);
      if ('vibrate' in navigator) navigator.vibrate([100, 50, 100]);
      setTimeout(() => setShakeAnim(false), 500);
      setTimeout(() => setCodeError(false), 2000);
      setCode('');
    }
  };

  const handleSelectIcon = (option: typeof ICON_OPTIONS[0]) => {
    const fullSvg = `<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">${option.svg}</svg>`;
    onIconChange(option.id, fullSvg);
    localStorage.setItem('salamati_icon_id', option.id);
    localStorage.setItem('salamati_icon_svg', fullSvg);
    updateFavicon(fullSvg);
    setShowIconPicker(false);
    if ('vibrate' in navigator) navigator.vibrate(50);
  };

  return (
    <>
      {/* Bouton caché — minuscule point discret en bas à droite du header */}
      <button
        onTouchStart={startHold}
        onTouchEnd={cancelHold}
        onMouseDown={startHold}
        onMouseUp={cancelHold}
        onMouseLeave={cancelHold}
        className="absolute bottom-2 right-3 w-5 h-5 rounded-full flex items-center justify-center overflow-hidden"
        style={{ opacity: 0.25 }}
        aria-label=""
      >
        <div
          className="absolute inset-0 rounded-full bg-white origin-bottom transition-none"
          style={{
            transform: `scaleY(${holdProgress / 100})`,
            transformOrigin: 'bottom',
          }}
        />
        <div className="w-2 h-2 rounded-full bg-white/60 relative z-10" />
      </button>

      {/* Modal: Saisie du code */}
      {showCodeInput && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div
            className={`bg-white rounded-3xl shadow-2xl w-full max-w-sm p-6 ${shakeAnim ? 'animate-[shake_0.4s_ease-in-out]' : ''}`}
            style={shakeAnim ? { animation: 'shake 0.4s ease-in-out' } : {}}
          >
            <style>{`
              @keyframes shake {
                0%, 100% { transform: translateX(0); }
                20% { transform: translateX(-10px); }
                40% { transform: translateX(10px); }
                60% { transform: translateX(-8px); }
                80% { transform: translateX(8px); }
              }
            `}</style>
            <button
              onClick={() => { setShowCodeInput(false); setCode(''); setCodeError(false); }}
              className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>

            <div className="flex flex-col items-center mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mb-3 shadow-lg">
                <Lock className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-xl font-bold text-gray-800">Code secret</h2>
              <p className="text-sm text-gray-500 text-center mt-1">Entrez le code pour personnaliser l'icône</p>
            </div>

            {/* Code dots display */}
            <div className="flex justify-center gap-3 mb-6">
              {[0, 1, 2, 3].map(i => (
                <div
                  key={i}
                  className={`w-4 h-4 rounded-full border-2 transition-all ${
                    i < code.length
                      ? codeError ? 'bg-red-500 border-red-500' : 'bg-gradient-to-br from-pink-500 to-purple-600 border-purple-600'
                      : 'border-gray-300 bg-white'
                  }`}
                />
              ))}
            </div>

            {/* Numeric keypad */}
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => (
                <button
                  key={n}
                  onClick={() => { if (code.length < 4) setCode(c => c + n); }}
                  className="h-14 rounded-2xl bg-gray-50 hover:bg-pink-50 active:scale-95 transition-all font-bold text-xl text-gray-800 border border-gray-200 hover:border-pink-300"
                >
                  {n}
                </button>
              ))}
              <button
                onClick={() => setCode('')}
                className="h-14 rounded-2xl bg-gray-50 hover:bg-red-50 active:scale-95 transition-all text-gray-500 border border-gray-200 text-sm font-medium"
              >
                Effacer
              </button>
              <button
                onClick={() => { if (code.length < 4) setCode(c => c + '0'); }}
                className="h-14 rounded-2xl bg-gray-50 hover:bg-pink-50 active:scale-95 transition-all font-bold text-xl text-gray-800 border border-gray-200 hover:border-pink-300"
              >
                0
              </button>
              <button
                onClick={() => setCode(c => c.slice(0, -1))}
                className="h-14 rounded-2xl bg-gray-50 hover:bg-orange-50 active:scale-95 transition-all text-gray-500 border border-gray-200 text-lg"
              >
                ⌫
              </button>
            </div>

            {codeError && (
              <p className="text-center text-red-500 text-sm mt-3 font-medium">Code incorrect. Réessayez.</p>
            )}

            <button
              onClick={handleCodeSubmit}
              disabled={code.length < 4}
              className="mt-4 w-full h-12 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold disabled:opacity-40 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <Check className="w-5 h-5" />
              Valider
            </button>
          </div>
        </div>
      )}

      {/* Modal: Choix de l'icône */}
      {showIconPicker && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-t-3xl shadow-2xl w-full max-w-lg p-6 pb-10 animate-[slideUp_0.3s_ease-out]">
            <style>{`
              @keyframes slideUp {
                from { transform: translateY(100%); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
              }
            `}</style>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Palette className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-gray-800">Choisir l'icône</h2>
                  <p className="text-xs text-gray-500">Sélectionnez votre icône préférée</p>
                </div>
              </div>
              <button
                onClick={() => setShowIconPicker(false)}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {ICON_OPTIONS.map(option => (
                <button
                  key={option.id}
                  onClick={() => handleSelectIcon(option)}
                  className={`relative p-4 rounded-2xl border-2 text-left transition-all active:scale-95 ${
                    currentIconId === option.id
                      ? 'border-purple-500 bg-purple-50 shadow-lg shadow-purple-100'
                      : 'border-gray-200 bg-gray-50 hover:border-pink-300 hover:bg-pink-50'
                  }`}
                >
                  {currentIconId === option.id && (
                    <div className="absolute top-2 right-2 w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                  )}
                  {/* Icon preview */}
                  <div className="w-16 h-16 rounded-xl overflow-hidden mb-3 mx-auto shadow-md">
                    <svg
                      width="64" height="64" viewBox="0 0 512 512"
                      dangerouslySetInnerHTML={{ __html: option.svg }}
                    />
                  </div>
                  <p className="font-semibold text-sm text-gray-800 text-center leading-tight">{option.label}</p>
                  <p className="text-xs text-gray-500 text-center mt-0.5">{option.description}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
