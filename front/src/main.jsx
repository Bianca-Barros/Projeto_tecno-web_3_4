import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ProvedorFilmes } from './contexts/FilmeContexto'
import App from './App'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProvedorFilmes>
      <App />
    </ProvedorFilmes>
  </StrictMode>
)