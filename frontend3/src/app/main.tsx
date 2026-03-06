import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../styles/index.css';

// Dynamic favicon update utility
export function updateFavicon(svgContent: string) {
  const blob = new Blob([svgContent], { type: 'image/svg+xml' });
  const url = URL.createObjectURL(blob);
  const links = document.querySelectorAll<HTMLLinkElement>('link[rel="icon"], link[rel="apple-touch-icon"]');
  links.forEach(link => { link.href = url; });
}

// Apply saved icon on startup
const savedIconSvg = localStorage.getItem('salamati_icon_svg');
if (savedIconSvg) {
  setTimeout(() => updateFavicon(savedIconSvg), 500);
}

// Register Service Worker for PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(
      (registration) => {
        console.log('✅ Service Worker enregistré avec succès:', registration.scope);
      },
      (error) => {
        console.log('❌ Échec de l\'enregistrement du Service Worker:', error);
      }
    );
  });
}

// Request notification permission (for future features)
if ('Notification' in window && Notification.permission === 'default') {
  // Don't ask immediately, wait for user interaction
  setTimeout(() => {
    if (Notification.permission === 'default') {
      Notification.requestPermission();
    }
  }, 10000); // Ask after 10 seconds
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
