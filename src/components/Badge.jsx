import React from "react";
import styled from "@emotion/styled";
import { VerifiedRounded } from "@mui/icons-material";
import { Box, Tooltip } from "@mui/material";

const Container = styled(Box)`
    
    & > svg {
        font-size: ${props => props.size};
        color: #0846ff;
        padding: 0 4px;
    }
`

function Badge(props) {
    return (
        <Tooltip title="Verified">
            <Container size={props.size}>
                <VerifiedRounded />
            </Container>
        </Tooltip>
    )
}

export default Badge