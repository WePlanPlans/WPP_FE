import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// if (process.env.NODE_ENV === 'development') {
//   import('./mocks/browser.ts').then(({ worker }) => {
//     worker.start();
//   });
// }
if (import.meta.env.DEV) {
  const { worker } = await import('./mocks/browser.ts');
  await worker.start();
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
