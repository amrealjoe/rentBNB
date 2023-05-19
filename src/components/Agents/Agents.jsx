import { Typography } from '@mui/material'
import React, { useContext } from 'react'
import { styled } from 'styled-components'
import Searcher from './services/Searcher'
import withUser from '@contexts/ProvideUser'
import withUtils from '@contexts/ProvideUtils'
import Card from './Card'

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
    max-height: 460px;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-track {
        background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #b2b2b2;
        border-radius: 10px;
    }

`



function Agents() {
    const { user } = useContext(withUser)
    const { flag } = useContext(withUtils)
    console.log(user)

    return (
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
    )
}

export default Agents