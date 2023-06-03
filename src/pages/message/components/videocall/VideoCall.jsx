import React from 'react'
import MuiIconButton from '@mui/material/IconButton'
import styled from '@emotion/styled'
import { VideoCallRounded } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'

const Container = styled(Box)`
    width: 100%;
    height: 98vh;
    display: grid;
    place-items: center;
    align-content: center;
`

const IconButton = styled(MuiIconButton)`
    width: 150px;
    height: 150px;
    background-color: #ebeaeaa9;

    & > svg {
        font-size: 5rem;
        color: #0099FF;
    }
    
`

const Textbox = styled(Typography)`
    margin-bottom: 20px;
    
`

function VideoCall() {
    return (
        <Container>
            <Textbox variant='h5' >Start a video call</Textbox>
            <IconButton>
                <VideoCallRounded />
            </IconButton>
        </Container>
    )
}

export default VideoCall