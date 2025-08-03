import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/style/index'
import App from './pages/App'
import { ModalProvider } from './widgets/Modal/ModalContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ModalProvider>
      <App />
    </ModalProvider>
  </StrictMode>,
)
