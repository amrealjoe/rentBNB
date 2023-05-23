import React, { useContext } from 'react'
import Tile from './Tile'
import { Box } from '@mui/material'
import styled from "@emotion/styled"
import Filter from './Filter'
import { withAgent } from './Profile'
import FadeMotion from '@/Motion/Fade'
import FastMotion from '@/Motion/Fast'
import SlowMotion from '@/Motion/Slow'

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

function Property(props) {

  return (

    <FadeMotion>
      <Container>
        <Filter />
        <TileRow>
          <Tile />
          <Tile />
          <Tile />
          <Tile />
        </TileRow>
      </Container>
    </FadeMotion>
  )
}

export default Property