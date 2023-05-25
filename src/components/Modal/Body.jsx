import React from 'react'
import { Box, Typography } from '@mui/material'
import styled from '@emotion/styled'

const Container = styled(Box)`
    padding: 10px 0;
`

const TextBox = styled(Typography)`
    overflow-y: auto;
`
export function Body() {
    return (
        <Container>
            <Typography variant='body1' fontSize={"small"} color={"GrayText"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum magnam veniam aperiam molestiae doloribus saepe atque cupiditate
                error velit doloribus saepe atque cupiditate error velit
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem possimus nostrum nesciunt aperiam sit iste
                quod beatae facere delectus fugit maxime,
                aliquam saepe labore necessitatibus architecto odio corporis.
                Possimus, omnis!
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maxime architecto ipsum voluptatem? Quod quibusdam ipsa
                eos soluta esse rem dicta ut delectus ipsum quo, repellat
                ullam, cum quia facilis odio!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae commodi voluptatem, quis veritatis tenetur dolor sunt repudiandae hic illo sint quidem soluta voluptas reprehenderit mollitia nihil perferendis quasi natus? At.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda non enim numquam quidem. Eaque laboriosam hic numquam cupiditate, consequuntur porro eum autem voluptate perspiciatis, maiores iste excepturi culpa, deserunt voluptatum.
            </Typography>
        </Container>
    )
}
