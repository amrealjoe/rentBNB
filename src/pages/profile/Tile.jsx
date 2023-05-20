import { Box, Typography } from '@mui/material'
import MuiButton from '@mui/material/Button'
import React from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"

const Container = styled(Box)`
    && {
        margin: 2px;
        min-width: 47%;
        max-width: 47%;
        box-sizing: border-box;
        border-radius: 12px;
        padding: 8px;
        background-color: #f5f5f59e;
    }
`

const Slider = styled(Box)`
    && {
        height: 220px;
        border-radius: 12px;
        background-color: #efefef;
        margin-bottom: 8px;
    }
`

const Content = styled(Box)`
    && {
        
    }
`

const Title = styled(Typography)`
    && {
        font-weight: bolder;
    }
`
const Info = styled(Box)`
    && {
        display: flex;
        gap: 4px;
        color: #606770;
        margin-bottom: 8px;
    }
`
const Actions = styled(Box)`
    && {
        display: flex;
        background-color: #F0F2F5;
        border-radius: 12px;
        padding: 8px;
        gap: 8px;
        margin-top: 8px;
    }
`
const Text = styled(Typography)`
    && {
        background-color: #BCC0C4;
        border-radius: 17px;
        flex: 2;
        padding: 2px;
        font-size: 1.2rem;
        text-align: center;
    }
`

const Button = styled(MuiButton)`
    && {
        border-radius: 17px;
        text-transform: capitalize;
    }
`

const Description = styled(Typography)`
    && {
        font-size: medium;
        color: #606770;
        padding-bottom: 12px;
    }
`

function Tile(props) {
    const { details } = props

    return (
        <Container>
            <Slider />
            <Content>
                <Title variant='subtitle1' fontSize={"large"}>3 Bed Room Apartment</Title>
                <Info>
                    <Typography variant='subtitle1'>L$ 30 per month</Typography>
                    &#8226;
                    <Typography variant='subtitle1'>City</Typography>
                </Info>
                <Description>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum magnam veniam aperiam molestiae doloribus saepe atque cupiditate error velit...<Link to="">See more</Link>
                </Description>
                {/* <Actions>
                    <Text>
                        Is this still Available?
                    </Text>
                    <Button color="primary" variant='contained' disableElevation>Send</Button>
                </Actions> */}
            </Content>
        </Container>
    )
}

export default Tile