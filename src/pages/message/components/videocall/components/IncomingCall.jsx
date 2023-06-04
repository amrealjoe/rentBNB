import React, { useState } from 'react'
import { Button, Backdrop, CircularProgress, Paper } from "@mui/material"
import styled from '@emotion/styled'
import MuiIconButton from "@mui/material/IconButton"
import MuiAvatar from "@mui/material/Avatar"


const Container = styled(Paper)`
    /* background-color: blue; */
    box-shadow: unset;
    /* width: 300px;
    height: 300px; */
`
const Avatar = styled(MuiAvatar)`
    width: 68px;
    height: 68px;
`

const IconButton = styled(MuiIconButton)`
    background-color: ${props => props.color};
    width: 35px;
    height: 35px;
`

function IncomingCall() {
    const [open, setOpen] = useState(false)
    const theme = useTheme()
    const handleToggle = () => setOpen(!open)
    const handleClose = () => setOpen(false)
    return (
        <>
            <Button onClick={handleToggle}>Show backdrop</Button>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={handleClose}
            >
                <Container>
                    <CircularProgress color="inherit" />
                </Container>
            </Backdrop>
        </>
    )
}

export default IncomingCall