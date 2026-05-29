import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ErrorBoundary } from './components/ErrorBoundary';
import './index.css';

// Capture the PWA install prompt AS EARLY AS POSSIBLE. The event can fire
// before React mounts; if no listener is attached the event is lost and the
// install button never appears. We stash it on window so the in-app Install
// button (which mounts later) can find it.
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  (window as Window & { deferredInstallPrompt?: Event }).deferredInstallPrompt = e;
  window.dispatchEvent(new Event('pwa-installable'));
});

window.addEventListener('appinstalled', () => {
  (window as Window & { deferredInstallPrompt?: Event }).deferredInstallPrompt = undefined;
  window.dispatchEvent(new Event('pwa-installed'));
});

const rootEl = document.getElementById('root');
if (!rootEl) throw new Error('Root element #root not found');

ReactDOM.createRoot(rootEl).render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter basename="/ship-it">
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>,
);
