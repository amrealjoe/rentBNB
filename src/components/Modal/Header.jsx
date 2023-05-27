import React from 'react'
import { Box, Typography } from '@mui/material'
import styled from '@emotion/styled'

const Container = styled(Box)`
    
`

export function Header() {
    return (
        <Container>
            <Typography variant='h6' >L$ 30 &#8226; 3 Bed Room Apartment...</Typography>
            <Typography variant='body1' fontSize={"medium"} color={"GrayText"}>For Rent &#8226; Location</Typography>
        </Container>
    )
}

export default Header