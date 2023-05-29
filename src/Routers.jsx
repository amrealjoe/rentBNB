import React from 'react'
import { Route, Routes, useLocation, Outlet } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

//Pages
import Profile from '@pages/profile'
import Home from '@pages/home'
import { Message } from '@pages/message'

function Routers() {
    const location = useLocation()

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/agent/:agentname" element={<Profile />} />
                <Route path="/message" element={<Message />}>
                    <Route path="/message/:id" element={<Message />} />
                </Route>
            </Routes>
            <Outlet />
        </AnimatePresence>
    )
}

export default Routers
