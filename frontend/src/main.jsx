import { createRoot } from 'react-dom/client';
import './Style/app.scss';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { ToastProvider } from './Contexts/Toast.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ToastProvider>
      <App />
    </ToastProvider>
  </BrowserRouter>

)
