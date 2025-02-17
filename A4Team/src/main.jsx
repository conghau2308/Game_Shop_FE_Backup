import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LoginPage from './pages/Customer/LoginPage/loginpage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
