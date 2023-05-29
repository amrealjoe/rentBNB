import { Typography } from '@mui/material'
import React, { useContext } from 'react'
import styled from '@emotion/styled'
import Searcher from './components/Searcher'
import withUser from '@contexts/ProvideUser'
import withUtils from '@contexts/ProvideUtils'
import Card from './components/Card'
import { SlideUp } from "@/Animations/SlideUp"
import { SlideRight } from "@/Animations/SlideRight"

const Container = styled.div`
    position: relative;
    border-right: thin solid #E4E6EB;
    overflow-y: auto;
    height: 100vh;
`

const Header = styled.section`
        padding: 8px ;

`
const Title = styled(Typography)`
        font-weight: 900;
        box-sizing: border-box;
`

const CardList = styled.div`
    display: flex;
    flex-direction: column;
    max-height: 535px;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-track {
        background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #808080;
        border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb:hover {
        background-color: #949393
    }

`

function Agents() {
    const { user } = useContext(withUser)
    const { flag } = useContext(withUtils)
    return (
        <SlideRight>
            <Container>
                <Header>
                    <Title variant='h5'>Agents</Title>
                    <Searcher />
                </Header>
                <CardList>
                    {
                        !flag && (
                            user.map((item) => (
                                <Card key={item.id} details={item} />
                            ))
                        )
                    }
                </CardList>
            </Container>
        </SlideRight >

    )
}

export default Agents