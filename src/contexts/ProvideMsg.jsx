import React, { createContext, useState } from 'react'
export const withMsg = createContext(null)

function ProvideMsg({ children }) {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(!open)

    const VALUES = {
        open,
        handleOpen
    }
  return (
    <withMsg.Provider value={VALUES}>{children}</withMsg.Provider>
  )
}

export default ProvideMsg