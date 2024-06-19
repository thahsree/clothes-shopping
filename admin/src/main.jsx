import { SnackbarProvider } from 'notistack'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { AuthContextProvider } from './context/AuthContext.jsx'
import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
      <SnackbarProvider maxSnack={3}>
        <App />
      </SnackbarProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
