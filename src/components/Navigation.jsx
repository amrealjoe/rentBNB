import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'

function Navigation() {
    return (
        
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <Typography variant="h6">
              logo
            </Typography>
            <IconButton edge="start" color="inherit" aria-label="menu">
            </IconButton>
          </Toolbar>
        </AppBar>
    )
}

export default Navigation