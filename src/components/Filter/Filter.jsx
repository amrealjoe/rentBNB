import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React from 'react'
// import Button from './Button'
import MuiButton from "@mui/material/Button"
import { Explore } from '@mui/icons-material'

const Container = styled(Box)`
    padding: 12px 0;
    position: sticky;
    display: flex;
    margin-bottom: 20px;
    flex-wrap: wrap;
    gap: 4px
`

const Button = styled(MuiButton)`
    text-transform: capitalize;
    border-radius: 17px;
    background-color: #E4E6EB;
    color:#040404 ;
    margin-right: 6px;
    padding-left: 17px;
    padding-right: 17px;
    &:hover {
    background-color: #E4E6EB;
    }

`

function Filter() {
    return (
        <Container>
            <Button startIcon={<Explore />} >Discover</Button>
            <Button>For Rent</Button>
            <Button>For Lease</Button>
            <Button>For Sale</Button>
            <Button>Single Room</Button>
            <Button>Apartment</Button>
        </Container>
    )
}

export default Filter