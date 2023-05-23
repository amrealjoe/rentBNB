import { Typography } from '@mui/material'
import React, { useContext } from 'react'
import { styled } from 'styled-components'
import Searcher from './services/Searcher'
import withUser from '@contexts/ProvideUser'
import withUtils from '@contexts/ProvideUtils'
import Card from './Card'
import { SlideUp } from "@/Animations/SlideUp"

const Container = styled.div`
    padding: 14px;
    border-right: thin solid #E4E6EB;
    min-height: 100vh;
`

const Header = styled.section`
`
const Title = styled(Typography)`
    && {
        font-weight: 900;
    }
`

const CardList = styled.div`
    display: flex;
    flex-direction: column;
    max-height: 535px;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 7px;
    }

    &::-webkit-scrollbar-track {
        background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #e8e8e8c5;
        border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb:hover {
        background-color: #d7d6d6e2;
    }

`



function Agents() {
    const { user } = useContext(withUser)
    const { flag } = useContext(withUtils)
    return (
        <SlideUp>
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
        </SlideUp >

    )
}

export default Agents