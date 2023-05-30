import React from 'react'
import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'

const Container = styled(Box)`
    padding: 8px;
    border-bottom: thin solid #E4E6EB;
`


function Header() {
    return (
        <Container>
            <Typography variant='h5' fontWeight={900}>Messsages</Typography>
        </Container>
    )
}

export default Header