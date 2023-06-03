import React from 'react'
import { Grid } from '@mui/material'
import SidePane from '@/Panes/SidePane'
import Messages from '../components/people'
import Chat from '../components/chat'
import VideoCall from '../components/videocall'

export function Desktop() {

    return (
        <Grid container>
            <Grid item md={.5}>
                <SidePane />
            </Grid>
            <Grid item sm={4} md={3}>
                <Messages />
            </Grid>
            <Grid item sm={8} md={5}>
                <Chat />
            </Grid>
            <Grid item sm={8} md={3}>
                <VideoCall />
            </Grid>
        </Grid>
    )
}
