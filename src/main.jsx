import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ProvideUser } from './contexts/ProvideUser.jsx'
import { ProvideUtils } from './contexts/ProvideUtils.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProvideUtils>
      <ProvideUser>
        <App />
      </ProvideUser>
    </ProvideUtils>
  </React.StrictMode>
)
