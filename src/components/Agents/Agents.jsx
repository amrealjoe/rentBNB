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
function Agents() {
    const { user } = useContext(withUser)
    return (
        <Container>
            <Header>
                <Title variant='h5'>Agents</Title>
                <Searcher />
            </Header>
            <CardList>
                <ul>
                    {
                        user.map((item) => (
                            <li key={item.id}>{item.name}</li>
                        ))
                    }
                </ul>

            </CardList>

        </Container>
    )
}

export default Agents