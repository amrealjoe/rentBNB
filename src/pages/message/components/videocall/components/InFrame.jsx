import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React from 'react'

const Container = styled(Box)`
    position: absolute;
    right: 0;
    top: 0;
    width: 86px;
    height: calc(76px * 2 + 17px);
    border-radius: 10px;
    margin: 6px 6px 0;
    background-color: #e0e0e0;
`
function InFrame() {
  return (
    <Container>InFrame</Container>
  )
}

export default InFrame