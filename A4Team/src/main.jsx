import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './fonts.css'
import LoginPage from './pages/Customer/LoginPage/LoginPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Customer/HomePage/HomePage'
import SignUpPage from './pages/Customer/SignUpPage/SignupPage'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
