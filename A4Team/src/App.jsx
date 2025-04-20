import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import RouteComponent from './router'
import GlobalAlert from './components/GlobalAlert'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <RouteComponent />

        <GlobalAlert />
      </BrowserRouter>
    </>
  )
}

export default App
