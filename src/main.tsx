import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './utils/AuthContext.tsx'
import UserProvider from './utils/UserProvider.jsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <UserProvider>
        <App />
        </UserProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
