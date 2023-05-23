import React, { useContext } from 'react'
import styled from '@emotion/styled'
import Slider from "../Slider"
import { Box } from '@mui/material'
import Content from './Content'
import Actions from './Actions'

const Container = styled(Box)`
        margin: 2px;
        min-width: 412px;
        max-width: 412px;
        box-sizing: border-box;
        border-radius: 12px;
        padding: 8px;
        box-shadow: -1px 2px 4px rgba(43, 43, 43, 0.337);
    
`
function Tile(props) {

    return (
        <Container>
            <Slider />
            <Content />
            <Actions />
        </Container>
    )
}

export default Tile