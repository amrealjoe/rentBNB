import React from 'react'
import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'


const Container = styled(Box)`
margin: 6px 0;
`


function Content() {
  return (
      <Container>
          <Typography variant='h6' >L$ 30 &#8226; 3 Bed Room Apartment...</Typography>
          <Typography variant='body1' fontSize={"small"} color={"grey"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum magnam veniam aperiam molestiae doloribus saepe atque cupiditate error velit...<Link to="">See more</Link>
          </Typography>
    </Container>
  )
}

export default Content