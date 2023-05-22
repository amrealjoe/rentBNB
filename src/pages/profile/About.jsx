import { TextsmsRounded, VerifiedRounded, VerifiedUserRounded, VideoCallRounded } from '@mui/icons-material'
import { Avatar, Box, Typography, Tooltip } from '@mui/material'
import MuiButton from "@mui/material/Button"
import React, { useContext, useEffect, useState } from 'react'
import { styled } from 'styled-components'
import withUser from "@contexts/ProvideUser"
import { useLocation, useSearchParams } from 'react-router-dom'
import { withAgent } from './Profile'

const Container = styled.div`
    min-height: 100vh;
    background-color: #f1f1f1;
    box-sizing: border-box;
    padding: 12px;
    text-align: center;
`

const Image = styled(Avatar)`
    && {
        width: 300px;
        height: 300px;
        margin: 0 auto;
        margin-bottom: 17px;
        font-size: 6rem;
    }
`

const Info = styled(Typography)`
    && {
        color: #606770;
    }
`

const Actions = styled(Box)`
    && {
        display: flex;
        justify-content: center;
        gap: 6px;
        margin-top: 17px;
    }
`

const Button = styled(MuiButton)`
    && {
        text-transform: capitalize;
        border-radius: 17px;
    }
`

const NameWrapper = styled(Box)`
    && {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px
    }

    && svg {
        color: #0846ff;
        /* color: #dea515; */
    }
`

function About(props) {
    const { agent } = props
    
    return (
        <Container>
            <Image alt={agent?.name} />
            <NameWrapper>
                <Typography variant='subtitle1' fontSize={"large"}>{agent?.name}</Typography>
                {
                    agent?.verified && (
                        <Tooltip title="Verified">
                            <VerifiedRounded />
                        </Tooltip>
                    )
                }
            </NameWrapper>
            <Info variant='body' fontSize={"medium"}>@{agent?.username}</Info><br />
            <Info variant='body' fontSize={"medium"}>{agent?.id * agent?.id} Properties &#8226; Lives in {agent?.address?.city} </Info>
            <Actions>
                <Button color='primary' variant='contained' disableElevation endIcon={<TextsmsRounded />}>Send Text</Button>
                <Button color='primary' variant='contained' disableElevation endIcon={<VideoCallRounded />}>Video Call </Button>
            </Actions>
        </Container>
    )
}

export default About