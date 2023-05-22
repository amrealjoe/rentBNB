import React from 'react'
import { Avatar, Box, Card, Typography } from '@mui/material'
import MuiButton from '@mui/material/Button'
import MuiIconButton from '@mui/material/IconButton'
import { TextsmsRounded, VideoCallRounded, VerifiedRounded } from '@mui/icons-material'
import { Link } from "react-router-dom"
import styled from '@emotion/styled'

const Container = styled(Box)`
        /* display: flex; */
        background-color: #F0F2F5;
        border-radius: 12px;
        padding: 8px;
        gap: 8px;
        margin-top: 12px;
`

const Block = styled.div`
    display: flex;
    align-items: center;
    /* margin-top: 12px; */
`

const Media = styled.section`
    position: relative;
    margin-right: 8px;
`

const Badge = styled.span`
    position: absolute;
    right: 0;
    bottom: -4px;

    & > svg {
        color: #dea515;
        font-size: small
    }
`
const IconButton = styled(MuiIconButton)`
            background-color:#60677044 ;
            margin-right: 4px;
        `

const Flexbox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

        `
const BtnGroup = styled.div`
`
function Actions() {
    return (
        <Container>
            <Typography variant='subtitle1'>Contact Agent</Typography>
            <Flexbox>
                <Block>
                    <Media>
                        <Avatar src="/img1.jpg" alt="tj" />
                        <Badge><VerifiedRounded /></Badge>
                    </Media>
                    <Typography variant='subtitle1' fontSize={"medium"}>Timothy T. Joe</Typography>
                </Block>
                <BtnGroup>
                    <IconButton>
                        <TextsmsRounded />
                    </IconButton>
                    <IconButton>
                        <VideoCallRounded />
                    </IconButton>
                </BtnGroup>
            </Flexbox>
        </Container>
    )
}

export default Actions