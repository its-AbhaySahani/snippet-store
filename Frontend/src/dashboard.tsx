
import React from 'react'
import ReactDOM from 'react-dom/client'
import 'vite/modulepreload-polyfill'
import Dashboard from './components/Dashboard/Dashboard'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Dashboard/>
  </React.StrictMode>,
)
