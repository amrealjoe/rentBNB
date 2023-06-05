import React from 'react'
import styled from '@emotion/styled'
import { Box } from '@mui/material'
import Header from './Header'
import Card from './Card'

const Container = styled(Box)`
    border-right: thin solid #E4E6EB;
    height: 99vh;
    max-height: 99vh;
    overflow-y: auto;
`
const Content = styled(Box)`
    max-height: 535px;
  
`
function Messages() {
  return (
    <Container>
      <Header />
      <Content>
        <Card />
        <Card />
        <Card />
      </Content>
    </Container>
  )
}

export default Messages