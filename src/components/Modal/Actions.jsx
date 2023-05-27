import styled from '@emotion/styled'
import { TextsmsRounded, VideoCallRounded } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import React from 'react'
import MuiButton from "@mui/material/Button"
import MainActions from '@/Tile/Actions'

const Container = styled(Box)`
    margin-top: auto;
    box-sizing: border-box;
    background-color: #F0F2F5;
    border-radius: 12px;
    padding: 6px;
`

const ButtonGroup = styled(Box)`
    display: flex;
    gap: 12px;
    & > * {
        flex: 2
    }
`

const Button = styled(MuiButton)`
        text-transform: capitalize;
        border-radius: 17px;
`

export function Actions() {
    return (
        <Container>
            <MainActions />
        </Container>
    )
}
