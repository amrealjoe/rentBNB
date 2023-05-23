import React from 'react'
import { Grid } from '@mui/material'
import Agents from '@/Agents'
import SidePane from '@/Panes/SidePane'
import { motion } from "framer-motion"
import FastMotion from '@/Motion/Fast'

function Desktop() {

    return (
        <Grid container>
            <Grid item md={.6}>
                <SidePane />
            </Grid>
            <Grid item sm={4} md={3.4}>
                <FastMotion>
                    <Agents />
                </FastMotion>
            </Grid>
            <Grid item sm={8} md={8}>
                Content Pane
            </Grid>
        </Grid>
    )
}

export default Desktop