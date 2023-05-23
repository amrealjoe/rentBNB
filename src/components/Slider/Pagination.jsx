import styled from '@emotion/styled'
import React from 'react'


const Dot = styled.span`
    width: 6px;
    height: 6px;
    cursor: pointer;
    border: thin solid white;
    border-radius: 50%;
    background-color: ${props => props.active ? 'white' : 'transparent'};
    margin-right: 4px;
`

const Container = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #3f3e3e63;
    bottom: 25px;
    min-width: 35px;
    padding:6px 8px ;
    border-radius: 17px;
    left: 40%;
`

const Pagination = ({ slides, activeIndex }) => (
    <Container>
        {slides.map((slide, i) => (
            <Dot key={slide} active={activeIndex === i} />
        ))}
    </Container>
)

export default Pagination