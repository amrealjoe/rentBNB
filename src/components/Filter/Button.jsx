import React from 'react'
import MuiButton from '@mui/material/Button'
import styled from '@emotion/styled'

export const Button = styled(MuiButton)`
    text-transform: capitalize;
    border-radius: 17px;
    background-color: #E4E6EB;
    color:#040404 ;
    margin-right: 8px;
    /* padding-left: 17px;
    padding-right: 17px; */

    &:hover {
    background-color: #E4E6EB;
    }

    &:active {
        background-color: #040404;
        color:#E4E6EB;
    }
`
export default Button