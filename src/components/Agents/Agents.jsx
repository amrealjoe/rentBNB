import { Typography } from '@mui/material'
import React, {useEffect, useState} from 'react'
import { styled } from 'styled-components'
import Search from './Search'
import Searcher from './services/Searcher'

const Container = styled.div`
    padding: 14px;
    border-right: thin solid #E4E6EB;
    min-height: 100vh;
`

const Header = styled.section`
`
const Title = styled(Typography)`
    && {
        font-weight: 900;
    }
`

const CardList = styled.div`
    display: flex;
    flex-direction: column;
`

const jsonData = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    // ...
];


function Agents() {
    const [flag, setFlag] = useState(false)
    const [jsonData, setJsonData] = useState([]);

        useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => setJsonData(data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <Container>
            <Header>
                <Title variant='h5'>Agents</Title>
                <Searcher/>
            </Header>
            <CardList>
                this is a text
            </CardList>
            
        </Container>
    )
}

export default Agents