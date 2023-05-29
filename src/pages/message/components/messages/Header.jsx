import React from 'react'
import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'

const Container = styled(Box)`
`

const Textbox = styled(Typography)`
    font-weight: 900;
    padding: 8px;
    border-bottom: thin solid #E4E6EB;
`
function Header() {
    return (
        <Container>
            <Textbox variant='h5'>Messsages</Textbox>
        </Container>
    )
}

export default Header