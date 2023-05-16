import { Grid } from '@mui/material'
import React from 'react'
import Navigation from '@/Navigation'
import styled from "styled-components"

const SidePane = styled(Grid)``
const ContentPane = styled(Grid)``

function Desktop() {
    return (
        <Grid container spacing={2}>
            <SidePane item sm={4} md={4}>Side Pane </SidePane>
            <ContentPane item sm={8} md={8}>Content Pane </ContentPane>
        </Grid>
    )
}

export default Desktop