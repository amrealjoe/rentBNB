import { Grid } from '@mui/material'
import React from 'react'
import Navigation from '@/Navigation'

function Home() {
    return (
        <>
            <Navigation />
        <Grid container spacing={2}>
            <Grid item sm={4} md={4}>Side Pane </Grid>
            <Grid item sm={8} md={8}>Content Pane </Grid>
        </Grid>
        </>
    )
}

export default Home