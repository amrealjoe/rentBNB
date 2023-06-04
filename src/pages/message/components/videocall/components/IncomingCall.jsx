import React, { useState } from 'react'
import { Button, Backdrop, Paper, useTheme, Typography, Box} from "@mui/material"
import styled from '@emotion/styled'
import MuiIconButton from "@mui/material/IconButton"
import MuiAvatar from "@mui/material/Avatar"
import { PhoneAndroidSharp, PhoneIphone } from '@mui/icons-material'


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

const FlexBox = styled(Box)`
    display: flex;
    flex-direction: column;
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
                // onClick={handleClose}
            >
                <Container>
                    <Avatar src='/picture.jpg' alt='Jim Jallah' />
                    <Typography variant='h5' fontWeight={"normal"}>Rose Garteh</Typography>
                    <Typography variant='h6' fontWeight={"normal"}>Incoming call...</Typography>
                    <FlexBox>
                        <IconButton color='blue'>
                            <PhoneAndroidSharp />
                        </IconButton>
                        <IconButton color='primary'>
                            <PhoneIphone />
                        </IconButton>
                    </FlexBox>
                </Container>
            </Backdrop>
        </>
    )
}

export default IncomingCall