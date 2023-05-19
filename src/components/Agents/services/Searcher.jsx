import { SearchRounded, Clear } from '@mui/icons-material'
import { InputAdornment, TextField, Typography } from '@mui/material'
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { styled } from 'styled-components'
import withUser from '@contexts/ProvideUser'


const Container = styled.div`
    margin: 12px;
    position: relative;
`

const Input = styled(TextField)`

    && .MuiInputBase-root {
        border-radius: 23px;
        background-color: #f3f3f5;
        border-color: transparent;
    }

    && .MuiInputBase-root input {
        border-top-right-radius: 23px;
        border-bottom-right-radius: 23px;
        color: #50555a;
    }

    && .MuiInputBase-root fieldset {
        border-color: transparent;
    }
`

const Section = styled.section`
    position: absolute;
    background-color: white;
    min-width: 100%;
    min-height: 100vh;

`

const Block = styled.section`
    display: flex;
    align-items: center;
    margin-top: 8px;
`

const Image = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: thin solid red;
    margin-right: 12px;
    overflow: hidden;
`

const Name = styled(Typography)`
    && {

    }
`




function Searcher({ data }) {
    const { user } = useContext(withUser)
    const inputRef = useRef("inputRef")
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [flag, setFlag] = useState(false)

    const handleFocus = () => { inputRef.current.focus() }

    console.log(user)

    const handleSearch = (event) => {
        setFlag(true)
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);

        const results = user.filter((item) => {
            return item.name.toLowerCase().includes(query);
        });

        setSearchResults(results);
    };

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
        <Container>
            <Input
                ref={inputRef}
                placeholder='Search Agents'
                size="small"
                variant="outlined"
                value={searchQuery}
                onChange={handleSearch}
                fullWidth
                InputProps={{
                    startAdornment: (
                        <InputAdornment
                            onClick={handleFocus}
                            position="start">
                            <SearchRounded />
                        </InputAdornment>
                    ),
                }}
            />
            {
                flag && (
                    <Section>
                        {searchResults.map((item) => (
                            <Block key={item.id}>
                                <Image
                                    src={fetchImage(item.id)}
                                    alt={`Thumbnail for ${item.name}`} />
                                <Name variant='subtitle1'>{item.name}</Name>
                            </Block>
                        ))}
                    </Section>
                )
            }

        </Container>
    )
}

export default Searcher