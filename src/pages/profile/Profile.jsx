import { Grid } from '@mui/material'
import React, { useContext, useState, useEffect, createContext } from 'react'
import About from './About'
import Property from './Property'
import SidePane from '@/Panes/SidePane'
import styled from "@emotion/styled"
import withUser from "@contexts/ProvideUser"
import { useLocation } from 'react-router-dom'

export const withAgent = createContext(null)

const Container = styled(Grid)`
    max-height: 100vh;
    overflow: hidden;
`

function Profile() {
  const { user, getUserImage } = useContext(withUser)
  const [agent, setAgent] = useState([])
  const location = useLocation()

  useEffect(() => {
    const pathname = location.pathname.split("/")
    //get last element in the array
    const username = pathname.reverse()[0]
    const result = user.filter((item) => item.username === username)
    setAgent(result[0])
  }, [location])
  const Values = { agent }


  return (
    <withAgent.Provider value={Values}>
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
    </withAgent.Provider >
  )
}

export default Profile