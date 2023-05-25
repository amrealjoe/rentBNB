import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ProvideUser } from '@contexts/ProvideUser'
import { ProvideUtils } from '@contexts/ProvideUtils'
import { ProvideModal } from '@contexts/ProvideModal'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProvideUtils>
      <ProvideUser>
        <ProvideModal>
          <App />
        </ProvideModal>
      </ProvideUser>
    </ProvideUtils>
  </React.StrictMode>
)
