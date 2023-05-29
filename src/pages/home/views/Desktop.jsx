import React from 'react'
import { Grid } from '@mui/material'
import SidePane from '@/Panes/SidePane'
import Marketplace from '../Marketplace'
import Agents from '../Agents'

function Desktop() {

    return (
        <Grid container>
            <Grid item md={.6}>
                <SidePane />
            </Grid>
            <Grid item sm={4} md={3.4}>
                <Agents />
            </Grid>
            <Grid item sm={8} md={8}>
                <Marketplace />
            </Grid>
        </Grid>
    )
}

export default Desktop