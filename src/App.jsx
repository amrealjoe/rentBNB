import React from 'react'
import { BrowserRouter as Router, Outlet } from "react-router-dom"
import { ThemeProvider, createTheme } from '@mui/material'
import Routers from './Routers'

const theme = createTheme({
  palette: {
    // mode: 'dark',
  }
})
function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routers />
      </Router>
    </ThemeProvider>
  )
}

export default App
