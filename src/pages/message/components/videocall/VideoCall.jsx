import React from 'react'
import MuiGrid from '@mui/material/Grid'
import MuiIconButton from '@mui/material/IconButton'
import styled from '@emotion/styled'
import { VideoCallRounded } from '@mui/icons-material'

const Grid = styled(MuiGrid)`
    place-items: center;
`

const IconButton = styled(MuiIconButton)`
    
`

function VideoCall() {
    return (
        <Grid>
            <IconButton>
                <VideoCallRounded />
            </IconButton>
        </Grid>
    )
}

export default VideoCall