import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import './locales';
import { MessageProvider } from './services/hooks/messageContext.tsx';
import '@ant-design/v5-patch-for-react-19';
createRoot(document.getElementById('root')!).render(
  <MessageProvider>
    <App />
  </MessageProvider>
);
