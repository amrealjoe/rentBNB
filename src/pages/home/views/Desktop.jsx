import React from 'react'
import { Grid } from '@mui/material'
import Agents from '@/Agents'

function Desktop() {

    return (
        <Grid container spacing={2}>
            <Grid item sm={4} md={4}>
                <Agents />
            </Grid>
            <Grid item sm={8} md={8}>
                Content Pane
            </Grid>
        </Grid>
    )
}

export default Desktop