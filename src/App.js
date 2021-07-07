import './App.css';
import { useState, useEffect } from 'react';
import { getAccessTokenFromUrl } from './configuration/spotify'
import AuthComponent from './auth/auth'
import CoreComponent from './core/core'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './reducer/store'
import { setAuthToken } from './reducer/index'

function App() {

  const [accessToken, setAccessToken] = useState('')

  useEffect(() => {
    const hash = getAccessTokenFromUrl()
    console.log(hash)
    window.location.hash = ''
    const _authToken = hash['access_token']
    if (_authToken) {
      setAccessToken(_authToken)
      sessionStorage.setItem('access_token', _authToken)
      store.dispatch(setAuthToken(_authToken))
    }
  }, [accessToken])

  return (
    <Provider store={store} >
      <BrowserRouter>
        <div className="App">
          {(accessToken || sessionStorage.getItem('access_token')) ? <CoreComponent /> : <AuthComponent />}
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
