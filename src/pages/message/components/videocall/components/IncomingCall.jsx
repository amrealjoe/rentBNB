import React, { useState } from 'react'
import { Button, Backdrop, Paper, useTheme, Typography, Box} from "@mui/material"
import styled from '@emotion/styled'
import MuiIconButton from "@mui/material/IconButton"
import MuiAvatar from "@mui/material/Avatar"
import { CallEndRounded, PhoneLocked } from '@mui/icons-material'


const Container = styled(Paper)`
    box-shadow: unset;
    display: flex;
    flex-direction: column;
    min-width: 250px;
    text-align: center;
    padding: 12px 0;
`

const Avatar = styled(MuiAvatar)`
    width: 68px;
    height: 68px;
    margin: 0 auto;
`

const FlexBox = styled(Box)`
    display: flex;
    gap: 12px;
    margin-top: 12px;
    border: solid red;
    justify-content: center;
`


const SmallButton = styled(MuiIconButton)`
    width: 50px;
    height: 50px;
    background-color: #d3d2d2;
    &:hover {
        background-color: #d3d2d2;
    }
    
    
`
const BigButton = styled(SmallButton)`
    width: 70px;
    height: 70px;
    & > svg {
        font-size: 2.75rem;
    }
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
                    <Avatar src={"/picture.jpg"} alt='Jim Jallah' />
                    <Typography variant='h5' fontWeight={"normal"} >Jim Jallah</Typography>
                    <Typography variant='body1' fontWeight={"normal"} color={"GrayText"}>Incoming call...</Typography>
                    <FlexBox>
                        <SmallButton
                            onClick={handleClose}
                            color='error'>
                            <PhoneLocked />
                        </SmallButton>
                        <BigButton color='success' size='large'>
                            <CallEndRounded />
                        </BigButton>
                    </FlexBox>
                </Container>
            </Backdrop>
        </>
    )
}

export default IncomingCall