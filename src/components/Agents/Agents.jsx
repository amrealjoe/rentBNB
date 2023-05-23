import { Typography } from '@mui/material'
import React, { useContext } from 'react'
import styled from '@emotion/styled'
import Searcher from './components/Searcher'
import withUser from '@contexts/ProvideUser'
import withUtils from '@contexts/ProvideUtils'
import Card from './components/Card'
import { SlideUp } from "@/Animations/SlideUp"

const Container = styled.div`
    border-right: thin solid #E4E6EB;
    overflow-y: auto;
    max-height: 100vh;
    min-height: 100vh;
    position: relative;
    padding: 0 6px;
`

const Header = styled.section`
    padding: 12px;
`
const Title = styled(Typography)`
        font-weight: 900;
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