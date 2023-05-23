import styled from '@emotion/styled'
import { IconButton } from '@mui/material'
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material"

const Button = styled(IconButton)`
    display: flex;
    position: absolute;
    top: 45%;
    background-color: #e1e1e162;
    ${props => props.direction === 'right' ? `right: 4px` : `left: 4px`};
    &:hover {
        background-color: #e1e1e177;
    }
    & > svg {
        font-size: medium;
        color: white
    }

 `

export const Arrow = ({ direction, handleClick }) => (
    <Button
        onClick={handleClick}
        direction={direction}>
        {direction === 'right' ? <ArrowForwardIos /> : <ArrowBackIos />}
    </Button>
)