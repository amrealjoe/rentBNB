import React from 'react'
import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import MuiAvatar from "@mui/material/Avatar"
import {SlideRight} from "@/Animations/SlideRight"

const MediaBlock = styled(Box)`
    padding: 8px 13px;
    display: flex;
    &:hover {
        background-color: #cbc9c9a6;
        cursor: pointer;
    }
`

const Media = styled(Box)`
    margin-right: 13px;
`

const Avatar = styled(MuiAvatar)`
    width: 55px;
    height: 55px;
    border: thin solid grey;
`

const Block = styled(Box)`
`

const NameBox = styled(Typography)`
    font-weight: 900;
`

const TextBox = styled(Box)`
    display: flex;
    gap: 8px;
`

const TimeBox = styled(Typography)``

export default function Card(props) {

    return (
        <SlideRight>

            <MediaBlock>
                <Media>
                    <Avatar src='/profile2.jpg' />
                </Media>
                <Box>
                    <NameBox>Lydia Lydia</NameBox>
                    <TextBox>
                        <Typography variant='body' fontSize={"medium"}>Is this still available?</Typography>
                        &#8226; <TimeBox variant='body' fontSize={"medium"}>9:30</TimeBox>
                    </TextBox>
                </Box>
            </MediaBlock>
        </SlideRight>

    )
}
