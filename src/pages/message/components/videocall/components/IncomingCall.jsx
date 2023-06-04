import React, { useState } from 'react'
import { Button, Backdrop, CircularProgress, useTheme, Paper } from "@mui/material"

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
                <Paper
                    sx={{
                        width: 500,
                        height: 250
                    }}
                >
                    <CircularProgress color="inherit" />
                </Paper>
            </Backdrop>
        </>
    )
}

export default IncomingCall