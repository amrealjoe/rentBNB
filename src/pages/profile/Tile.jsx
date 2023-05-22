import { Avatar, Box, Card, Typography } from '@mui/material'
import MuiButton from '@mui/material/Button'
import MuiIconButton from '@mui/material/IconButton'
import React from 'react'
// import styled from "styled-components"
import { Link } from "react-router-dom"
import Slider from './Slider'
import { TextsmsRounded, VideoCallRounded, VerifiedRounded } from '@mui/icons-material'
import styled from '@emotion/styled'


const Container = styled(Box)`
        margin: 2px;
        min-width: 47%;
        max-width: 47%;
        box-sizing: border-box;
        border-radius: 12px;
        padding: 8px;
        box-shadow: -1px 2px 4px rgba(43, 43, 43, 0.337);
    
`

const Actions = styled(Box)`
        display: flex;
        background-color: #F0F2F5;
        border-radius: 12px;
        padding: 8px;
        gap: 8px;
        margin-top: 8px;
`




const Description = styled(Typography)`
        font-size: small;
        color: #606770;
        padding-bottom: 12px;
        
        `
const IconButton = styled(MuiIconButton)`
            background-color:#60677044 ;
        `

const Block = styled.div`
    display: flex;
    align-items: center;
`

const Media = styled.section`
    position: relative;
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

const Content = styled.section`
flex: 2;
`

function Tile(props) {
    const { details } = props

    return (
        <Container>
            <Slider />
            <Box>
                <Typography variant='subtitle1' fontSize={"large"}>L$ 30 &#8226; 3 Bed Room Apartment...</Typography>
                <Description>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum magnam veniam aperiam molestiae doloribus saepe atque cupiditate error velit...<Link to="">See more</Link>
                </Description>
                <Actions>
                    <Block>
                        <Media>
                            <Avatar src="/img1.jpg" alt="tj" />
                            <Badge><VerifiedRounded /></Badge>
                        </Media>
                            <Typography variant='subtitle1' fontSize={"medium"}>Timothy T. Joe</Typography>
                    </Block>
                    <IconButton>
                        <VideoCallRounded />
                    </IconButton>
                    <IconButton>
                        <TextsmsRounded />
                    </IconButton>
                </Actions>
            </Box>
        </Container>
    )
}

export default Tile