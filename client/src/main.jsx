import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';
import { ModalProvider } from './context/ModalContext.jsx';
import { FileProvider } from './context/FileContext.jsx';
import { ShareProvider } from './context/ShareContext.jsx';
import { ChatAppProvider } from './context/chatAppContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
<Auth0Provider
    domain="dev-ll0sgznjvlor1e2t.us.auth0.com"
    clientId="puHnG3bnKhM8qLs6bV3xKIRf998Q5WGz"
    authorizationParams={{
      redirect_uri: window.location.origin
      
    }}
    // onRedirectCallback={onRedirectCallback}
    useRefreshTokens={true}
    cacheLocation="localstorage"
  >
    <ModalProvider>
    <FileProvider>
    <ShareProvider>
    <ChatAppProvider>
    <App />

    </ChatAppProvider>
    </ShareProvider>
    </FileProvider>
    </ModalProvider>
  </Auth0Provider>,
)
