import React, { createContext, useState } from 'react'

const withUtils = createContext(null)

export function ProvideUtils({ children }) {
    const [flag, setFlag] = useState(false)

    const values = {
        flag,
        setFlag
    }
    
    return (
        <withUtils.Provider value={values}>
            {children}
        </withUtils.Provider>
    )
}

export default withUtils