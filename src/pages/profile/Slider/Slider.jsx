import React, { useState } from 'react'
import styled from '@emotion/styled'
import { Slide } from './Slide'
import { Arrow } from './Arrow'
import Pagination from './Pagination'


const Images = [
    "/img1.jpg",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg",
]

const Container = styled.div`
    position: relative;
    width: 395px ;
    height: 244px;
    overflow: hidden;
    border-radius: 17px;
    `

const Content = styled.div`
    transform: translateX(-${props => props.translate}px);
    transition: transform ease-out ${props => props.transition}s;
    height: 244px;
    width: ${props => props.width}px;
    display: flex;
`

function Slider(props) {
    const width = 395;

    const [state, setState] = useState({
        activeIndex: 0,
        translate: 0,
        transition: 0.45
    })

    const nextSlide = () => {
        if (activeIndex === Images.length - 1) {
            return setState({
                ...state,
                translate: 0,
                activeIndex: 0

            })
        }

        setState({
            ...state,
            activeIndex: activeIndex + 1,
            translate: (activeIndex + 1) * width
        })

    }

    const prevSlide = () => {
        if (activeIndex === 0) {
            return setState({
                ...state,
                translate: (Images.length - 1) * width,
                activeIndex: Images.length - 1
            })
        }
        setState({
            ...state,
            activeIndex: activeIndex - 1,
            translate: (activeIndex - 1) * width
        })
    }

    const { translate, transition, activeIndex } = state

    return (
        <Container>
            <Content
                translate={translate}
                transition={transition}
                width={width * Images.length}>
                {
                    Images.map((slide, key) => (<Slide key={slide + key} content={slide} />))
                }
            </Content>
            <Arrow direction={'left'} handleClick={prevSlide} />
            <Arrow direction={'right'} handleClick={nextSlide} />
            <Pagination slides={Images} activeIndex={activeIndex} />
        </Container>
    )
}

export default Slider