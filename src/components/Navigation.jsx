import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import { Avatar } from '@mui/material'
import styled from "styled-components"

const Bar = styled(Toolbar)`
    && {
        justify-content: space-between;
    }
`

function Navigation() {
    return (

        <AppBar position="static" color="primary" >
            <Bar>
                <Typography variant="h6">
                    logo
                </Typography>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <Avatar />
                </IconButton>
            </Bar>
        </AppBar>
    )
}

export default Navigation