import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.css'
import { motion } from 'framer-motion'

// Add smooth loading class to body
document.body.classList.add('loading');

// Wait for fonts and resources to load
window.addEventListener('load', () => {
  document.body.classList.remove('loading');
  document.body.classList.add('loaded');
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)