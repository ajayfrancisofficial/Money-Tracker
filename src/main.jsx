import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import './bootstrap.min.css'
import TokenContext from './Contexts/TokenContext.jsx'
import AddContext from './Contexts/AddContext.jsx'





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
               <TokenContext>
                   <AddContext>
                      <BrowserRouter>
                        <App />
                      </BrowserRouter>
                   </AddContext>
               </TokenContext>
  </React.StrictMode>,
)
