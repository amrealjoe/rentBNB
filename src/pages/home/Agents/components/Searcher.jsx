import { SearchRounded } from '@mui/icons-material'
import { Box, InputAdornment, TextField } from '@mui/material'
import React, { useContext, useRef, useState } from 'react'
import styled from '@emotion/styled'
import withUser from '@contexts/ProvideUser'
import withUtils from '@contexts/ProvideUtils'
import Card from './Card'


const Container = styled.div`
    margin-top: 12px;
    position: relative;
`

const Input = styled(TextField)`

    & .MuiInputBase-root {
        border-radius: 23px;
        background-color: #f3f3f5;
        border-color: transparent;
    }

    & .MuiInputBase-root input {
        border-top-right-radius: 23px;
        border-bottom-right-radius: 23px;
        color: #50555a;
    }

    & .MuiInputBase-root fieldset {
        border-color: transparent;
    }
`

const Section = styled.section`
    position: absolute;
    background-color: white;
    min-width: 100%;
    min-height: 80vh;
`

const Review = styled(Box)`
    display: flex;
    gap: 4px;
    padding: 6px 4px;
`


function Searcher() {
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
                placeholder='Search Agents...'
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
                        <Review>
                            <SearchRounded /> {searchQuery}
                        </Review>
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