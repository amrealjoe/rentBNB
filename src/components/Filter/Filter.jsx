import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React from 'react'
// import Button from './Button'
import MuiButton from "@mui/material/Button"
import { Explore } from '@mui/icons-material'

const Container = styled(Box)`
    padding: 12px;
    position: sticky;
    display: flex;
    margin-bottom: 20px;
`

const Button = styled(MuiButton)`
    text-transform: capitalize;
    border-radius: 14px;
    background-color: #E4E6EB;
    color:#040404 ;
    margin-right: 12px;

    &:hover {
    background-color: #E4E6EB;
    }

    &:active {
        background-color: #7c7c7c;
    }
`

function Filter() {
    return (
        <Container>
            <Button startIcon={<Explore />} >Discover</Button>
            <Button>Recent</Button>
            <Button>For Rent</Button>
            <Button>For Lease</Button>
            <Button>For Sale</Button>
            <Button>Rooms</Button>
            <Button>Apartment</Button>
            <Button>Price</Button>
        </Container>
    )
}

export default Filter