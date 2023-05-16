import { Grid } from '@mui/material'
import React from 'react'
import Navigation from '@/Navigation'
import styled from "styled-components"
import DesktopView from './views/Desktop'
import MobileView from './views/Mobile'
import MediaQuery from 'react-responsive'
import DesktopNav from '@/Navigations/DesktopNav'
import MobileNav from '@/Navigations/MobileNav'


function Home() {
    return (
        <>
            <MediaQuery minWidth={992}>
                <DesktopNav />
                <DesktopView />
            </MediaQuery>
            <MediaQuery maxWidth={991}>
                <MobileNav />
                <MobileView />
            </MediaQuery>
        </>
    )
}

export default Home