import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'


import theme from './styles/theme'
import { EditDish } from './pages/EditDish'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <EditDish />
    </ThemeProvider>
  </React.StrictMode>,
)
