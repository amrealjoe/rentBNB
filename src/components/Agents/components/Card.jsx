import { Avatar, Box, Tooltip, Typography } from '@mui/material'
import MuiIconButton from '@mui/material/IconButton'
import React, { useContext } from 'react'
import styled from '@emotion/styled'
import { ChatBubble, VideoCall } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import Badge from '@/Badge'
import withUser from '@contexts/ProvideUser'

const Container = styled.section`
    display: flex;
    padding: 8px;
    border-radius: 8px;
    align-items: center;
    position: relative;

    &:hover {
        background-color: #e8e8e8c5;
    }

    &:hover > :nth-child(2) {
        display: flex;
    }
    & > :nth-child(2) {
        display: none;
    }
`
const Span = styled.span`
    display: flex;
    gap: 6px;
    align-items: center;
    flex: 2;
    cursor: pointer;
`

const Actions = styled.section`
    display: flex;
    margin-left: auto;
    gap: 6px;
    position: absolute;
    right: 0;
`

const IconButton = styled(MuiIconButton)`
    
        background-color: #dedddd;
        background-color:#E4E6EB ;

    
`

const Content = styled.section`
    display: flex;
    flex-direction: column;
`

const Info = styled(Typography)`
    
        color: #606770;
    
`

const Status = styled.span`
    position: absolute;
    right: -2px;
    bottom: 0;
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: solid white;
    background-color: #5AD539;
`

const ImageWrapper = styled.span`
    position: relative;
    display: inline-block;
`

const NameWrapper = styled(Box)`
        display: flex;
        align-items: center;
`



function Card(props) {
    const { details } = props
    const { getUserImage } = useContext(withUser)
    const navigate = useNavigate()


    return (
        <Container key={details.id}

        >
            <Span onClick={(e) => {
                e.stopPropagation()
                navigate(`agent/${details.username}`)
            }}>
                <ImageWrapper>
                    <Avatar size="large" src={getUserImage(details.id)} alt={details.name} />
                    <Status />
                </ImageWrapper>
                <Content>
                    <NameWrapper>
                        <Typography variant='subtitle1'> {details.name} </Typography>
                        {details.verified &&
                            (
                                <Badge size={"small"} />
                            )
                        }

                    </NameWrapper>
                    <Info variant='body' fontSize={"small"}>
                        {details.id * details.id} properties &#8226; Lives in {details.address.city}
                    </Info>
                </Content>
            </Span>

            <Actions>
                <Tooltip title="Send Text">
                    <IconButton>
                        <ChatBubble />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Video Call">
                    <IconButton>
                        <VideoCall />
                    </IconButton>
                </Tooltip>
            </Actions>
        </Container>
    )
}

export default Card