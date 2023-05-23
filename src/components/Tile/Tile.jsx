import React, { useContext } from 'react'
import styled from '@emotion/styled'
import Slider from "../Slider"
import { Box } from '@mui/material'
import Content from './Content'
import Actions from './Actions'

const Container = styled(Box)`
        margin: 2px;
        min-width: 409px;
        max-width: 409px;
        box-sizing: border-box;
        border-radius: 12px;
        padding: 8px;
        box-shadow: -1px 2px 4px rgba(43, 43, 43, 0.337);
    
`
function Tile(props) {
    const {agent} = props
    return (
        <Container>
            <Slider />
            <Content />
            <Actions agent={agent} />
        </Container>
    )
}

export default Tile