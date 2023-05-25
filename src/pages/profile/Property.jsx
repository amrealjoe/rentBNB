import React, { useContext } from 'react'
import Tile from '@/Tile'
import { Box } from '@mui/material'
import styled from "@emotion/styled"
import Filter from '@/Filter'
import { SlideUp } from '@/Animations/SlideUp'
import { withAgent } from './Profile'

const Container = styled(Box)`
    overflow-y: auto;
    max-height: 100vh;
    position: relative;
    padding: 12px;
`

const TileRow = styled(Box)`
    display: flex;
    align-items: initial;
    flex-wrap: wrap;
    justify-content: space-evenly;

    //FIXME Throwing react nth-child selection danger error    
  & > * {
    flex: 3;
    margin-bottom: 25px;
  }
`

function Property() {
  const { agent } = useContext(withAgent)
  return (
    <SlideUp>
      <Container>
        <Filter />
        <TileRow>
          <Tile agent={agent} />
          <Tile agent={agent} />
          <Tile agent={agent} />
          <Tile agent={agent} />
        </TileRow>
      </Container>
    </SlideUp>
  )
}

export default Property