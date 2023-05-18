import React from 'react'
import Home from '@pages/home'
import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom"
import { ThemeProvider, createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    // mode: 'dark',
  }
})
function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Outlet />
      </Router>
    </ThemeProvider>
  )
}

export default App
