import React, { useEffect, useState, useContext } from 'react'
import styled from '@emotion/styled'
import { Box, Grid } from '@mui/material'
import { Slider } from "./Slider"
import { Header } from './Header'
import { Body } from './Body'
import { Actions } from './Actions'
import MuiDialog from '@mui/material/Dialog';
import { Button, Typography, DialogTitle, DialogContent, DialogActions, DialogContentText, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { withModal } from '@contexts/ProvideModal'

const Container = styled(Grid)`
`
const Content = styled(Grid)`
    display: flex;
    flex-direction: column;
    min-height: 90vh;
`
const Dialog = styled(MuiDialog)`
    && .MuiPaper-root {}
`

function Modal() {
    const { modal, closeModal } = useContext(withModal)
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
            <Dialog
                fullScreen
                open={modal}
                onClose={closeModal}
            >
                <DialogTitle sx={{ m: 0, p: 2 }} >
                    <IconButton
                        aria-label="close"
                        onClick={closeModal}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 4,
                            color: (theme) => theme.palette.grey[800],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>

                <DialogContent>
                    <Container container>
                        <Grid item md={8}>
                            <Slider />
                        </Grid>
                        <Content item md={3.5}>
                            <Header />
                            <Body />
                            <Actions />
                        </Content>
                    </Container>
                </DialogContent>

            </Dialog>
        </>

    )
}

export default Modal