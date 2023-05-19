import { Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { styled } from 'styled-components'
import Search from './Search'
import Searcher from './services/Searcher'
import withUser from '@contexts/ProvideUser'

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
`

const Card = styled.section`
    display: flex;
    padding: 8px;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
        background-color: #e8e8e8c5;
    }
`
function Agents() {
    const { user } = useContext(withUser)

    return (
        <Container>
            <Header>
                <Title variant='h5'>Agents</Title>
                <Searcher />
            </Header>
            <CardList>
                {
                    user.map((item) => (
                        <Card key={item.id}>{item.name}</Card>
                    ))
                }
            </CardList>

        </Container>
    )
}

export default Agents