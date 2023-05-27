import React, { useContext } from 'react'
import styled from '@emotion/styled'
import Slider from "@/Slider"
import { Box } from '@mui/material'
import Content from './Content'
import Actions from './Actions'

const Container = styled(Box)`
        margin: 2px;

        /* min-width: 409px;
        max-width: 409px; */
        width: 47%;
        box-sizing: border-box;
        border-radius: 12px;
        padding: 8px;
        box-shadow: -1px 2px 4px rgba(43, 43, 43, 0.337);
    
`

const SliderContainer = styled(Box)`
    position: relative;
    width: 395px ;
    height: 244px;
    width: 100%;
    overflow: hidden;
    border-radius: 17px;
`
function Tile(props) {
    const { agent } = props
    return (
        <Container>
            <SliderContainer>
                <Slider width={395} />
            </SliderContainer>
            <Content />
            <Actions agent={agent} />
        </Container>
    )
}

export default Tile