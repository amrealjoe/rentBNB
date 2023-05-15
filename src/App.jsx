import React from 'react'
import Home from '@pages/home'
import {BrowserRouter as Router, Route, Routes, Outlet} from "react-router-dom"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Outlet />
    </Router>
  )
}

export default App
