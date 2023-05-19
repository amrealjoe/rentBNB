import { SearchRounded, Clear } from '@mui/icons-material'
import { Avatar, InputAdornment, TextField, Typography } from '@mui/material'
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { styled } from 'styled-components'
import withUser from '@contexts/ProvideUser'
import withUtils from '@contexts/ProvideUtils'
import Card from '../Card'


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
    const { flag, setFlag } = useContext(withUtils)
    const inputRef = useRef("inputRef")
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [value, setValue] = useState("")

    const handleFocus = () => { inputRef.current.focus() }
    if (!value) {setFlag(false)}

    const handleSearch = (event) => {
        setFlag(true)
        setValue(event.target.value)
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);
        const results = user.filter((item) => {
            return item.name.toLowerCase().includes(query);
        });

        setSearchResults(results);
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
                            <Card key={item.id} details={item} />
                        ))}
                    </Section>
                )
            }

        </Container>
    )
}

export default Searcher