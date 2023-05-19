import { Avatar, Typography } from '@mui/material'
import MuiAvatar from '@mui/material/Avatar'
import MuiIconButton from '@mui/material/IconButton'
import React, { useContext, useEffect, useState } from 'react'
import { styled } from 'styled-components'
import Search from './Search'
import Searcher from './services/Searcher'
import withUser from '@contexts/ProvideUser'
import { ChatBubble, VideoCall } from '@mui/icons-material'
import withUtils from '@contexts/ProvideUtils'

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

    ::-webkit-scrollbar {
        width: 8px;
    }

`

const Card = styled.section`
    display: flex;
    padding: 8px;
    border-radius: 8px;
    cursor: pointer;
    gap: 6px;
    align-items: center;

    &:hover {
        background-color: #e8e8e8c5;
    }

    &:hover > :nth-child(3) {
        display: flex;
    }
    & > :nth-child(3) {
        display: none;
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