import React from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const getAccessToken = () => {
    const urlString = window.location.href;
    const delimiter = urlString.indexOf("#")
    const params = urlString.substring(delimiter + 1, urlString.length).split("&")
    for(let i = 0; i < params.length; i++){
      const param = params[i];
      const [key, value] = param.split("=")
      if(key === 'access_token') {
        return value
      }
    }
    return "";
  }
  const verifyUser = async () => {
    const token = getAccessToken()
    if(token === ""){
      return
    }
    const resp = await axios.get("https://www.googleapis.com/oauth2/v1/userinfo?access_token=" + token);
    console.log(resp.data)
    
  }
  
  verifyUser();
  
  return (
    <>
    <h1>Hello World</h1>
    </>
  )
}

export default App
