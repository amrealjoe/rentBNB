import React from 'react'
import Tile from './Tile'
import { Box } from '@mui/material'
import styled from "styled-components"

const Container = styled(Box)`
  && {
    overflow-y: auto;
    max-height: 100vh;
  }
`

const TileRow = styled(Box)`
  && {
    display: flex;
    align-items: initial;
    flex-wrap: wrap;
    gap: 20px;
    padding-left: 20px;
  }

  && > * {
    flex: 3;
  }
`

function Property() {
  return (
    <Container>
      <TileRow>
        <Tile />
        <Tile />
        <Tile />
      </TileRow>
    </Container>
  )
}

export default Property