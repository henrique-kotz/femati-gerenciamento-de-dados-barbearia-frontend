import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { ThemeProvider } from 'styled-components'
import theme from './assets/theme.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme} >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
)
