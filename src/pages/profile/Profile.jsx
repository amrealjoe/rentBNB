import { Grid } from '@mui/material'
import React, { useContext, useState, useEffect, createContext } from 'react'
import About from './About'
import Property from './Property'
import SidePane from '@/Panes/SidePane'
import styled from "@emotion/styled"
import withUser from "@contexts/ProvideUser"
import { useLocation, useSearchParams } from 'react-router-dom'

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
    //capitalize first letter
    const capUsername = username.charAt(0).toUpperCase() + username.slice(1)
    const filteredUser = user.filter((item) => item.username == capUsername)
    setAgent(filteredUser[0])
  }, [location])


  return (
    <Container container>
      <Grid item md={.6}>
        <SidePane />
      </Grid>
      <Grid item md={3.4}>
        <About agent={agent} />
      </Grid>
      <Grid item md={8}>
        <Property agent={agent} />
      </Grid>
    </Container>
  )
}

export default Profile