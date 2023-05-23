import React, { useContext } from 'react'
import { Avatar, Box, Typography } from '@mui/material'
import MuiIconButton from '@mui/material/IconButton'
import { TextsmsRounded, VideoCallRounded } from '@mui/icons-material'
import styled from '@emotion/styled'
import { withAgent } from '../Profile'
import Badge from '@/Badge'

const Container = styled(Box)`
        background-color: #F0F2F5;
        border-radius: 12px;
        padding: 8px;
        gap: 8px;
        margin-top: 17px;
`

const Block = styled.div`
    display: flex;
    align-items: center;
    margin-top: 12px;
`

const Media = styled.section`
    position: relative;
    margin-right: 8px;
`


const IconButton = styled(MuiIconButton)`
            background-color:#E4E6EB ;
            margin-right: 4px;
        `

const Flexbox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

        `
const BtnGroup = styled.div`
`

const Location = styled(Typography)`
    font-size: small;
    line-height: 1.2;
    color: #505050;
`

const Content = styled(Box)`
    display: flex;
    flex-direction: column;
`

const Name = styled(Box)`
    display: flex;
    align-items: center;
    gap: 4px;
`
function Actions(props) {
    const { agent } = useContext(withAgent)

    return (
        <Container>
            <Typography variant='subtitle1' color={"#65676b"} >Contact property agent</Typography>
            <Flexbox>
                <Block>
                    <Media>
                        <Avatar src="/profile.jpg" alt="tj" />
                    </Media>
                    <Content>
                        <Name>
                            <Typography variant='subtitle1' fontSize={"medium"} lineHeight={1}>{agent?.name}</Typography>
                            {agent?.verified && (<Badge size="small" />)}
                            
                        </Name>
                        <Location variant="body"> {agent?.id * agent?.id} Properties &#8226; {agent?.address?.city} </Location>
                    </Content>
                </Block>
                <BtnGroup>
                    <IconButton>
                        <TextsmsRounded />
                    </IconButton>
                    <IconButton>
                        <VideoCallRounded />
                    </IconButton>
                </BtnGroup>
            </Flexbox>
        </Container>
    )
}

export default Actions