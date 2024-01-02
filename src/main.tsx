import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

if (import.meta.env.DEV) {
  const { worker } = await import('./mocks/browser.ts');
  await worker.stop();
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
