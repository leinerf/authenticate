import React from 'react';
import axios from 'axios'
//Components
import Auth from './Auth';
import Profile from './Profile';


// Styling
import './App.css';

function  App() {
  const username = localStorage.getItem("username");
  const email = localStorage.getItem("user-email"); 
  return (  
    <div className="landing center-content">
      {!username ? <Auth/> : <Profile username={username} email={email} />}  
    </div>
  )
}

export default App;