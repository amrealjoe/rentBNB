import React, { useEffect, useState, useRef, useCallback } from 'react'
import { styled } from 'styled-components'
import MuiIconButton from "@mui/material/IconButton"
import { HomeMaxRounded, ArrowBack, Home, Notifications, Message, Person } from '@mui/icons-material'
import { useLocation, useNavigate } from 'react-router-dom'
import Notification from './sidepane/Notification'
import { useClickOutside } from '@react-hooks-library/core'


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
    const [open, setOpen] = useState(false)
    const toggleOpen = () => setOpen(!open)

    const ref = useRef()
    console.log(ref.current)
    const handler = useCallback(() => { setOpen(false) }, [])
    useClickOutside(ref, () => setOpen(false))

    return (
        <Pane>
            {
                open && (<Notification ref={ref} />) 
            }
            <Button onClick={() => {
                navigate("/")
            }}><Home /></Button>
            <Button onClick={toggleOpen}><Notifications /><Dot /></Button>
            <Button><Message /></Button>
            <Button><Person /></Button>
        </Pane>
    )
}

export default SidePane