import React from 'react'
import styled from '@emotion/styled'
import { Box } from '@mui/material'
import SliderShow from "@/Slider"

const Container = styled(Box)`
position: relative;
  /* border: solid #333; */
  height: 90vh;
  margin-right: 12px;
  border-radius: 12px;
  overflow: hidden;
`
export function Slider() {
  return (
    <Container>
      <SliderShow width={868} />
    </Container>
  )
}
