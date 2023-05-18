import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import { Avatar } from '@mui/material'
import styled from "styled-components"
// import { LocalActivity, NotificationsActive } from "@mui/icons-material"


const Bar = styled(Toolbar)`
    && {
        justify-content: space-between;
    }
`

const Actions = styled.div`
    display: flex;
    gap: 4px;
    margin-right: 4px;
`

function DesktopNav() {
    return (

        <AppBar position="static" color="primary" >
            <Bar>
                <Typography variant="h6">
                    logo
                </Typography>
                <Actions>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        {/* <LocalActivity /> */}
                        {/* <NotificationsActive /> */}
                    </IconButton>

                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Avatar />
                    </IconButton>
                </Actions>
            </Bar>
        </AppBar>
    )
}

export default DesktopNav