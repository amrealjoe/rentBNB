import React from 'react'
import { Route, Routes, useLocation, Outlet } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

//Pages
import Profile from '@pages/profile'
import Home from '@pages/home'

function Routers() {
    const location = useLocation()

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/agent/:agentname" element={<Profile />} />
            </Routes>
            <Outlet />
        </AnimatePresence>
    )
}

export default Routers
