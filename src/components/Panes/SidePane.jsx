import React, {  } from 'react'
import { styled } from 'styled-components'
import MuiIconButton from "@mui/material/IconButton"
import { Home, Message, Person } from '@mui/icons-material'
import { useLocation, useNavigate } from 'react-router-dom'


const Pane = styled.aside`
    border-right: thin solid #E4E6EB;
    height: 95vh;
    display: flex;
    flex-direction: column;
    padding: 8px;
    z-index: 1000;
`

const Dot = styled.span`
    position: absolute;
    top: 1px;
    right: 1px;
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: red;
    border-radius: 50%;
    border: solid white;

`

const Tab = styled(MuiIconButton)`
    && {
        position: relative;
        width: 40px;
        height: 40px;
        background-color: #f8f6f6;
        margin-bottom: 8px;
        border-radius: 12px;
    }
    && > svg {
        font-size: 1.7rem;
        color: black;
    }
`
function SidePane() {
    const location = useLocation()
    const navigate = useNavigate()

    return (
        <Pane>
            <Tab onClick={() => { navigate("/")}}><Home /></Tab>
            <Tab onClick={() => { navigate("/message") }} ><Message /></Tab>
            <Tab><Person /></Tab>
        </Pane>
    )
}

export default SidePane