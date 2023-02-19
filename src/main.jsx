import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './routes/App'
import { GlobalProvider } from './context/global/GlobalProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>
)
