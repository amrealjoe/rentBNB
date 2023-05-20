import { Grid } from '@mui/material'
import React from 'react'
import { styled } from 'styled-components'
import About from './About'
import Property from './Property'
import SidePane from '@/Panes/SidePane'

function Profile() {
  return (
    <Grid container>
      <Grid item md={.6}>
        <SidePane />
      </Grid>
      <Grid item md={4}>
        <About />
      </Grid>
      <Grid item md={8}>
        <Property />
      </Grid>
    </Grid>
  )
}

export default Profile