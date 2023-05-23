import React, { useContext } from 'react'
import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import Filter from "@/Filter"
import Tile from "@/Tile"
import withUser from "@contexts/ProvideUser"
import { SlideUp } from "@/Animations/SlideUp"

const Container = styled(Box)`
    overflow-y: auto;
    max-height: 100vh;
    position: relative;
`

const TileRow = styled(Box)`
    display: flex;
    align-items: initial;
    flex-wrap: wrap;
    gap: 20px;
    padding-left: 20px;
    
  & > * {
    flex: 3;
  }
`

const Header = styled(Box)`
    padding: 12px;
`

function Marketplace() {
    const { user } = useContext(withUser)
    return (
        <SlideUp>
            <Container>
                <Header>
                    <Typography
                        variant='h5'
                        fontWeight={900}>Marketplace</Typography>
                    <Filter />
                    <TileRow>
                        <Tile agent={user[0]} />
                        <Tile agent={user[2]} />
                        <Tile agent={user[3]} />
                        <Tile agent={user[4]} />
                    </TileRow>
                </Header>
            </Container>
        </SlideUp>
    )
}

export default Marketplace