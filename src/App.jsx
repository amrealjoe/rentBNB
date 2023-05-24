import React, { useCallback, useEffect, useState } from 'react'
import { BrowserRouter as Router, Outlet } from "react-router-dom"
import { ThemeProvider, createTheme } from '@mui/material'
import Routers from './Routers'
import MuiSnackbar from '@mui/material/Snackbar';
import { useOnline } from '@react-hooks-library/core';
import styled from '@emotion/styled';
import { Alert } from "@mui/material"
import { NetworkCell } from '@mui/icons-material';

const theme = createTheme({})

const Snackbar = styled(MuiSnackbar)`
`


function App() {
  const isOnline = useOnline()
  const [open, setOpen] = useState(false)

  const handleOpen = () => { setOpen(true) }
  const handleClose = () => { setOpen(false) }


  useEffect(() => {
    if (!isOnline) {
      handleOpen()
    } else {
      handleClose()
    }
  }, [isOnline])




  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routers />
      </Router>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          You're currently offline
        </Alert>
      </Snackbar>
    </ThemeProvider>
  )
}

export default App
