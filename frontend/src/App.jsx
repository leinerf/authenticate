import React from 'react';

//Components
import Auth from './Auth';
import Profile from './Profile';

// Styling
import './App.css';

function App() {
  const username = localStorage.getItem("username");
  const email = localStorage.getItem("user-email");
  const jwt = localStorage.getItem("user-jwt");

  return (  
    <div className="landing center-content">
      {!jwt ? <Auth/> : <Profile username={username} email={email} />}  
    </div>
  )
}

export default App;