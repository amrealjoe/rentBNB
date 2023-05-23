import styled from '@emotion/styled'

const Container = styled.div`
    height: 244px;
    width: 100%;
    background-image:url(${props => props.content});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`

export const Slide = ({ content }) => (
    <Container content={content} />
)