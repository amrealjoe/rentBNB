import React from 'react'
import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'


const Container = styled(Box)`
cursor: pointer;
margin: 6px 0;
`

const Details = styled(Typography)`
  display: inline-block;
  padding: 8px 0;
`


function Content() {
  const navigate = useNavigate()
  return (
    <Container
      onClick={() => {
        navigate("/somewhere")
      }}
    >
      <Typography variant='h6' >L$ 30 &#8226; 3 Bed Room Apartment...</Typography>
      <Details variant='body1' fontSize={"small"} color={"GrayText"}>For Rent &#8226; Location</Details>
      <Typography variant='body1' fontSize={"small"} color={"GrayText"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum magnam veniam aperiam molestiae doloribus saepe atque cupiditate error velit doloribus saepe atque cupiditate error velit...
        <Typography variant='body1' fontSize={"small"} color={"Highlight"}>See more</Typography>
      </Typography>
    </Container>
  )
}

export default Content