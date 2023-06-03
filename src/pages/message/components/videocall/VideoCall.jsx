import React, { useContext, useState } from 'react'
import MuiIconButton from '@mui/material/IconButton'
import styled from '@emotion/styled'
import { VideoCallRounded } from '@mui/icons-material'
import { Box, Button, Typography } from '@mui/material'
import Frame from './components/Frame'
import { withMsg } from '@contexts/ProvideMsg'
import { SlideUp } from "@/Animations/SlideUp"

const Container = styled(Box)`
    height: 98vh;
    width: 100%;
`

const Grid = styled(Box)`
    height: 100%;
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
    const { open, handleOpen } = useContext(withMsg)

    return (
        <SlideUp>
            <Container>
                {
                    open ?
                        <Frame />
                        :
                        <Grid>
                            <Textbox variant='h5' >Start a video call</Textbox>
                            <IconButton onClick={handleOpen}>
                                <VideoCallRounded />
                            </IconButton>
                        </Grid>
                }
            </Container>
        </SlideUp>

    )
}

export default VideoCall