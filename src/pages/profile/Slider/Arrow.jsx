import styled from '@emotion/styled'
import { IconButton } from '@mui/material'
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material"

const Button = styled(IconButton)`
    display: flex;
    position: absolute;
    top: 45%;
    background-color: #3f3e3e63;
    ${props => props.direction === 'right' ? `right: 4px` : `left: 4px`};
    &:hover {
        background-color: #2c2c2c82;
    }
    & > svg {
        font-size: medium
    }

 `

export const Arrow = ({ direction, handleClick }) => (
    <Button
        onClick={handleClick}
        direction={direction}>
        {direction === 'right' ? <ArrowForwardIos /> : <ArrowBackIos />}
    </Button>
)