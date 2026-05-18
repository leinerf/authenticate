import React, {useState} from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [userAuth, setUserAuth] = useState(false)
  
  const verifyUser = async () => {
    const getAccessToken = () => {
      const urlString = window.location.href;
      const delimiter = urlString.indexOf("#")
      const params = urlString.substring(delimiter + 1, urlString.length).split("&")
      for(let i = 0; i < params.length; i++){
        const param = params[i];
        const [key, value] = param.split("=")
        if(key === 'access_token') {
          history.pushState("", document.title, window.location.pathname + window.location.search);
          return value
        }
      }
      
      return "";
    }

    const token = getAccessToken()
    if(token === ""){
      return
    }

    const resp = await axios.get("https://www.googleapis.com/oauth2/v1/userinfo?access_token=" + token);
    setUserAuth(resp.data.verified_email)
  }
  
  const signInGoogleAuth = () => {
      let oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

      // Create <form> element to submit parameters to OAuth 2.0 endpoint.
      let form = document.createElement('form');
      form.setAttribute('method', 'GET'); // Send as a GET request.
      form.setAttribute('action', oauth2Endpoint);

      // Parameters to pass to OAuth 2.0 endpoint.
      let params = {'client_id': process.env.CLIENT_ID,
                    'redirect_uri': 'http://localhost:5173',
                    'response_type': 'token',
                    'scope': 'https://www.googleapis.com/auth/userinfo.email',
                    'include_granted_scopes': 'true',
                    'state': 'pass-through value'};

      // Add form parameters as hidden input values.
      for (let p in params) {
        let input = document.createElement('input');
        input.setAttribute('type', 'hidden');
        input.setAttribute('name', p);
        input.setAttribute('value', params[p]);
        form.appendChild(input);
      }

      // Add form to page and submit it to open the OAuth 2.0 endpoint.
      document.body.appendChild(form);
      form.submit();
  }
  
  verifyUser();
  
  return (
    <>
    <h1>Hello World</h1>
    {!userAuth ? <button onClick={signInGoogleAuth}>SignIn With Google</button>: <h1>Youre Logged In</h1>}
    </>
  )
}

export default App
