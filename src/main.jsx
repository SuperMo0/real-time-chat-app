import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { HeroUIProvider } from "@heroui/react";


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <HeroUIProvider>
        <App />
      </HeroUIProvider>
    </StrictMode>
  </BrowserRouter>
)
