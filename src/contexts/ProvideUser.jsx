import React, { createContext, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';


const withUser = createContext(null)

export function ProvideUser({ children }) {
    const [user, setUser] = useState([]);
    // const location = useLocation()

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => setUser(data))
            .catch((error) => console.log(error));
    }, []);

    const values = {
        user
    }
    return (
        <withUser.Provider value={values}>
            {children}
        </withUser.Provider>
    )
}

export default withUser