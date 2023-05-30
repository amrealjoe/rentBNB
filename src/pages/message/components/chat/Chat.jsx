import React from 'react'
import styled from '@emotion/styled'
import { Box } from '@mui/material'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import { SlideRight } from "@/Animations/SlideRight"

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    border-right: thin solid #E4E6EB;
    height: 99.7vh;
`
function Chat() {
    return (
        <SlideRight>
            <Container>
                <Header />
                <Body />
                <Footer />
            </Container>
        </SlideRight>
    )
}

export default Chat