import { Avatar, Tooltip, Typography } from '@mui/material'
import MuiIconButton from '@mui/material/IconButton'
import React from 'react'
import { styled } from 'styled-components'
import { ChatBubble, VideoCall } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'


const Container = styled.section`
    display: flex;
    padding: 8px;
    border-radius: 8px;
    cursor: pointer;
    gap: 6px;
    align-items: center;

    &:hover {
        background-color: #e8e8e8c5;
    }

    &:hover > :nth-child(3) {
        display: flex;
    }
    & > :nth-child(3) {
        display: none;
    }
`

const Actions = styled.section`
    display: flex;
    margin-left: auto;
    gap: 6px;


    
`

const IconButton = styled(MuiIconButton)`
    && {
        background-color: #dedddd;
    }
`

const Content = styled.section`
    display: flex;
    flex-direction: column;
`

const Info = styled(Typography)`
    && {
        color: #606770;
    }
`

function Card(props) {
    const { details } = props
    //TODO: Move to utils context
    const navigate = useNavigate()
    
    const fetchImage = async (userId) => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${userId}`)
            const data = await response.json()
            return data[0].thumbnailUrl
        } catch (error) {
            return console.log(error)
        }
    };

    return (
        <Container key={details.id}
            onClick={() => navigate(`agent/${details.username}`)}
        >
            <Avatar size="large" src={fetchImage(details.id)} alt={details.name} />
            <Content>
                <Typography variant='subtitle1'> {details.name} </Typography>
                <Info variant='body' fontSize={"small"}>
                    {details.id * details.id} properties &#8226; Lives {details.address.city}
                </Info>
            </Content>

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