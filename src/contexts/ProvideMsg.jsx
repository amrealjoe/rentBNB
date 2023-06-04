import React, { createContext, useState } from 'react'
export const withMsg = createContext(null)

function ProvideMsg({ children }) {
  const [open, setOpen] = useState(false)
  const [toggle, setToggle] = useState(false)
  const handleOpen = () => setOpen(!open)
  const handleToggle = () => setOpen(!toggle)
  const handleClose = () => setToggle(false)

  const VALUES = {
    open,
    toggle,
    handleOpen,
    handleClose,
    handleToggle
  }

  return (
    <withMsg.Provider value={VALUES}>{children}</withMsg.Provider>
  )
}

export default ProvideMsg