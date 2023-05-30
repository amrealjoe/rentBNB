import { Avatar, Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import styled from '@emotion/styled'
import { VideoCallRounded } from '@mui/icons-material'

const Rowbox = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    border-bottom: thin solid #E4E6EB;
`

const Media = styled(Box)`
    display: flex;
    align-items: center;
    gap: 8px;
    border-radius: 4px;
    &:hover {
        background-color: #cbc9c9a6;
        cursor: pointer;
    }
`
function Header() {
    return (
        <Rowbox>
            <Media>
                <Avatar src='/profile2.jpg' alt='TJ' />
                <Typography variant='h6' fontWeight={900}>Username</Typography>
            </Media>
            <IconButton>
                <VideoCallRounded />
            </IconButton>
        </Rowbox>
    )
}

export default Header