import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BalanceContextProvider } from './context/balance.context.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BalanceContextProvider>
      <App />
    </BalanceContextProvider>
  </React.StrictMode>,
)
