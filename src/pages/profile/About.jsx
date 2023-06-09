import { TextsmsRounded, VideoCallRounded } from '@mui/icons-material'
import { Avatar, Box, Typography } from '@mui/material'
import MuiButton from "@mui/material/Button"
import React, { useContext } from 'react'
import styled from '@emotion/styled'
import { withAgent } from './Profile'
import Badge from '@/Badge'
import SlideRight from "@/Animations/SlideRight"

const Container = styled.div`
    min-height: 100vh;
    background-color: #f1f1f1;
    box-sizing: border-box;
    padding: 12px;
    text-align: center;
`

const Image = styled(Avatar)`
    
        width: 200px;
        height: 200px;
        margin: 0 auto;
        margin-bottom: 17px;
        font-size: 6rem;

`

const Info = styled(Typography)`
    
        color: #606770;

`

const Actions = styled(Box)`
    
        display: flex;
        justify-content: center;
        gap: 6px;
        margin-top: 17px;
    
`

const Button = styled(MuiButton)`
        text-transform: capitalize;
        border-radius: 17px;
`

const NameWrapper = styled(Box)`
        display: flex;
        align-items: center;
        justify-content: center;
    
`

function About(props) {
    const { agent } = useContext(withAgent)

    return (
        <SlideRight>
            <Container>
                <Image src='/profile.jpg' alt={agent?.name} />
                <NameWrapper>
                    <Typography variant='subtitle1' fontSize={"large"}>{agent?.name}</Typography>
                    {agent?.verified && (<Badge size="large" />)}
                </NameWrapper>
                <Info variant='body' fontSize={"medium"}>@{agent?.username}</Info><br />
                <Info variant='body' fontSize={"medium"}>{agent?.id * agent?.id} Properties &#8226; Lives in {agent?.address?.city} </Info>
                <Actions>
                    <Button color='primary' variant='contained' disableElevation endIcon={<TextsmsRounded />}>Send Text</Button>
                    <Button color='primary' variant='contained' disableElevation endIcon={<VideoCallRounded />}>Video Call </Button>
                </Actions>
            </Container>
        </SlideRight>


    )
}

export default About