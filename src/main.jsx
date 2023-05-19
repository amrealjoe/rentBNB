import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ProvideUser } from './contexts/ProvideUser.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>,
    <ProvideUser>
      <App />
    </ProvideUser>
  </React.StrictMode>,
)
