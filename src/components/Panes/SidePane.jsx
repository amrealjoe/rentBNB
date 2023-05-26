import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import MuiIconButton from "@mui/material/IconButton"
import { HomeMaxRounded, ArrowBack, Home, Notifications, Message, Person } from '@mui/icons-material'
import { useLocation, useNavigate } from 'react-router-dom'

const Pane = styled.aside`
    border-right: thin solid #E4E6EB;
    height: 95vh;
    display: flex;
    flex-direction: column;
    padding: 8px;
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

const Button = styled(MuiIconButton)`
    && {
        position: relative;
        width: 40px;
        height: 40px;
        background-color: #f8f6f6;
        margin-bottom: 8px;
    }
    && > svg {
        font-size: 1.7rem;
        color: black;
    }
`
function SidePane() {
    const [back, setBack] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()
    
    useEffect(() => {
        if (location.pathname !== "/") {
            setBack(true)
        }
    }, [location])
    
    return (
        <Pane>
            {/* {back && (<Button onClick={() => navigate(-1)}><ArrowBack /></Button>)} */}
            <Button onClick={() => navigate("/")}><Home  /><Dot /></Button>
            <Button><Notifications /></Button>
            <Button><Message /></Button>
            <Button><Person /></Button>
        </Pane>
    )
}

export default SidePane