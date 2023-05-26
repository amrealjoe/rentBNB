import styled from '@emotion/styled'

const Container = styled.div`
    height: 100%;
    width: inherit;
    background-image:url(${props => props.content});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`

export const Slide = ({ content }) => (
    <Container content={content} />
)