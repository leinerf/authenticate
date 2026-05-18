import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route} from "react-router";

import './index.css'

import App from './App.jsx'
import Auth from './Auth.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<App />}/>
        <Route path="auth" element={<Auth />} />  
      </Route>
    </Routes>  
  </BrowserRouter>  
)
