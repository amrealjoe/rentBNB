import { SearchRounded, Clear } from '@mui/icons-material'
import { InputAdornment, TextField } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { styled } from 'styled-components'


const Container = styled.div`
    margin: 12px;
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


function Search() {
    const [value, setValue] = useState("")
    const inputRef = useRef("inputRef")

    const handleChange = (e) => { setValue(e.target.value) }
    const handleFocus = () => { inputRef.current.focus() }

    return (
        <Container>
            <Input
                ref={inputRef}
                placeholder='Search Agents'
                size="small"
                variant="outlined"
                onChange={handleChange}
                value={value}
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
        </Container>
    )
}

export default Search