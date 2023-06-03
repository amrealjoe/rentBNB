import React from 'react'
import MuiGrid from '@mui/material/Grid'
import MuiIconButton from '@mui/material/IconButton'
import styled from '@emotion/styled'
import { VideoCallRounded } from '@mui/icons-material'
import { Box } from '@mui/material'

const Container = styled(Box)`
    width: 100%;
    height: 98vh;
    border: solid red;
    display: grid;
    place-items: center;
`

const IconButton = styled(MuiIconButton)`
    
`

function VideoCall() {
    return (
        <Container>
            <IconButton>
                <VideoCallRounded />
            </IconButton>
        </Container>
    )
}

export default VideoCall