import { Typography } from '@mui/material'
import React from 'react'
import { styled } from 'styled-components'
import Search from './Search'

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
    return (
        <Container>
            <Header>
                <Title variant='h5'>Agents</Title>
                <Search />
            </Header>
            <CardList>

            </CardList>
            
        </Container>
    )
}

export default Agents