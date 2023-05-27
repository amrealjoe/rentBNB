import { Box, Typography } from '@mui/material'
import React, { useRef } from 'react'
import styled from '@emotion/styled'
import { SlideUp } from "@/Animations/SlideUp"
import MuiAvatar from "@mui/material/Avatar"

const Container = styled(Box)`
    position: absolute;
    height: 99.8vh;
    left: 60px;
    top: 0;
    z-index: 900;
    width: 300px;
    background-color: #f1f2f4;
`

const Header = styled(Typography)`
    padding: 8px;
    font-weight: 900;
`

const MediaBlock = styled(Box)`
    display: flex;
    padding: 6px;
    background-color: aliceblue;
    &:hover {
    background-color: #e2e5ea;
    cursor: pointer;
    }
    
`
const Media = styled.section`
    padding:0 4px;
`
const Avatar = styled(MuiAvatar)``
const Block = styled.section`
`
const Time = styled(Typography)`
    font-size: small;
`

const Para = styled(Typography)`
    font-size: small;
`

function Notification() {

    return (

        <Container >
            <Header variant='h6'>Notification</Header>
            <MediaBlock>
                <Media>
                    <Avatar src='/profile.jpg' alt="Timothy" />
                </Media>
                <Block>
                    <Para variant='body1'><strong>Timothy T. Joe</strong> added <strong>3 Bedrooms Apartment</strong> for rent</Para>
                    <Time variant='body' color={"GrayText"}>59 minutes ago</Time>
                </Block>
            </MediaBlock>
            <MediaBlock>
                <Media>
                    <Avatar src='/profile.jpg' alt="Timothy" />
                </Media>
                <Block>
                    <Para variant='body1'><strong>Timothy T. Joe</strong> added <strong>3 Bedrooms Apartment</strong> for rent</Para>
                    <Time variant='body' color={"GrayText"}>59 minutes ago</Time>
                </Block>
            </MediaBlock>
        </Container>
    )
}

export default Notification