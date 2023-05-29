import React from 'react'
import { Grid } from '@mui/material'
import SidePane from '@/Panes/SidePane'
import Messages from '../components/messages'

export function Desktop() {

    return (
        <Grid container>
            <Grid item md={.6}>
                <SidePane />
            </Grid>
            <Grid item sm={4} md={3.4}>
                <Messages />
            </Grid>
            <Grid item sm={8} md={8}>
                Chat center
            </Grid>
        </Grid>
    )
}
