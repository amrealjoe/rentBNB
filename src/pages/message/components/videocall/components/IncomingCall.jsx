import React, { useContext, useState } from 'react'
import { Button, Backdrop, Paper, useTheme, Typography, Box} from "@mui/material"
import styled from '@emotion/styled'
import MuiIconButton from "@mui/material/IconButton"
import MuiAvatar from "@mui/material/Avatar"
import { CallEndRounded, PhoneLocked } from '@mui/icons-material'
import { withMsg } from '@contexts/ProvideMsg'


const Container = styled(Paper)`
    box-shadow: unset;
    background-color: #ffffff34;
    display: flex;
    flex-direction: column;
    min-width: 250px;
    text-align: center;
    padding: 12px 0;
    border-radius: 11px;
`

const Avatar = styled(MuiAvatar)`
    width: 68px;
    height: 68px;
    margin: 0 auto;
    margin-bottom: 12px;
`

const FlexBox = styled(Box)`
    display: flex;
    gap: 12px;
    margin-top: 12px;
    justify-content: center;
    align-items: center;
`


const SmallButton = styled(MuiIconButton)`
    width: 50px;
    height: 50px;
    background-color: #cacaca7b;
    &:hover {
        background-color: #cacaca7b;
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
    const { toggle, handleClose, handleOpen } = useContext(withMsg);

    return (
        <>
            {/* <Button onClick={handleToggle}>Show backdrop</Button> */}
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={toggle}
            >
                <Container>
                    <Avatar src={"/picture.jpg"} alt='Jim Jallah' />
                    <Typography variant='h5' fontWeight={"normal"} color={"InfoText"} >Jim Jallah</Typography>
                    <Typography variant='body1' fontWeight={"normal"} color={"MenuText"}>Incoming call</Typography>
                    <FlexBox>
                        <SmallButton onClick={handleClose} color='error'>
                            <PhoneLocked />
                        </SmallButton>
                        <BigButton onClick={() => {
                            handleOpen()
                            handleClose()
                        }} color='success' size='large'>
                            <CallEndRounded />
                        </BigButton>
                    </FlexBox>
                </Container>
            </Backdrop>
        </>
    )
}

export default IncomingCall