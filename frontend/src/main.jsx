import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { BackgroundBeams } from "./ui/background-beams.tsx";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <BackgroundBeams />
    <App />
    </BrowserRouter>
  </React.StrictMode>
)