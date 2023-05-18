import { Typography } from '@mui/material'
import MuiAvatar from '@mui/material/Avatar'
import React from 'react'
import { styled } from 'styled-components'
import SendText from './SendText'
import VideoCall from './VideoCall'

const Container = styled.section`
    border-radius: 12px;
    background-color: #f4f3f3;
    display:flex;
    padding: 2px;
    box-sizing: border-box;
    margin: 3px;
    align-items: center;
`

const Avatar = styled(MuiAvatar)`
    && {
        height: 45px;
        width: 45px;
    }
`

const Online = styled.span`
    display: inline-block;
    overflow: hidden;
    border-radius: 50%;
    border: 4px solid #11af26;
`

const Offline = styled(Online)`
    border-color: #f0bd03;
`
const Name = styled(Typography)`
    && {
        font-size: small;
    }
`

const Actions = styled.section`
    display: flex;
    align-items: center;
    margin-left: auto;
`



function Card() {
    return (
        <Container>
            <Offline>
                <Avatar />
            </Offline>
            <Name variant='h2'>
                Timothy T. Joe
            </Name>
            <Actions>
                <SendText color="primary" />
                <VideoCall />
            </Actions>
        </Container>
    )
}

export default Card