import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";

//components
import App from './App.jsx'
import GoogleAuth from "./GoogleAuth.jsx"

//styling
import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/google-signup" element={<GoogleAuth redirectURL="/" authType="google-signup" />} />
      <Route path="/google-signin" element={<GoogleAuth redirectURL="/" authType="google-signin"/>} />
    </Routes>
  </BrowserRouter>,
)