import { Grid } from '@mui/material'
import React from 'react'
import About from './About'
import Property from './Property'
import SidePane from '@/Panes/SidePane'
import styled from "styled-components"

const Container = styled(Grid)`
  && {
    max-height: 100vh;
    overflow: hidden;
  }
`

function Profile() {
  return (
    <Container container>
      <Grid item md={.6}>
        <SidePane />
      </Grid>
      <Grid item md={3.4}>
        <About />
      </Grid>
      <Grid item md={8}>
        <Property />
      </Grid>
    </Container>
  )
}

export default Profile