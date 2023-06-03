import React, { useContext } from 'react'
import styled from '@emotion/styled'
import { Box } from '@mui/material'
import MuiIconButton from '@mui/material/IconButton'
import InFrame from './InFrame'
import { CallEndRounded } from '@mui/icons-material'
import { withMsg } from '@contexts/ProvideMsg'

const Container = styled(Box)`
    height: 100%;
    position: relative;
    background-color: #f2f2f2;
`

const Footer = styled(Box)`
    position: absolute;
    display: flex;
    justify-content: center;
    bottom: 12px;
    width:  100%;
`

const IconButton = styled(MuiIconButton)`
    background-color: #ff143b;
    &:hover {
        background-color: #e00a2e;
    }

    & > svg {
        color: white;
    }
`

const Ringing = styled(Box)`
    height: 100%;
    background-color: #0000006c;
    display: grid;
    place-items: center;
    font-size: medium;
    color: #d7d7d7;
`

function Frame() {
    const { handleOpen } = useContext(withMsg)

    return (
            <Container>
                <Ringing>Ringing...</Ringing>
                <InFrame />
                <Footer>
                    <IconButton onClick={handleOpen}>
                        <CallEndRounded />
                    </IconButton>
                </Footer>
            </Container>
    )
}

export default Frame