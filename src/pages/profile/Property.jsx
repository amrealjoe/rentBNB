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