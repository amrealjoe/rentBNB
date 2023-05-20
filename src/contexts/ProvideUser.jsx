import React, { createContext, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import DemoUser from "../assets/users.json"

const withUser = createContext(null)

export function ProvideUser({ children }) {
    const [user, setUser] = useState(DemoUser);
    // const location = useLocation()

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => setUser(data))
            .catch((error) => console.log(error));
    }, []);

    const getUserImage = async (userId) => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${userId}`)
            const data = await response.json()
            return data[0].thumbnailUrl
        } catch (error) {
            return console.log(error)
        }
    }


    const values = {
        user,
        DemoUser,
        getUserImage
    }
    return (
        <withUser.Provider value={values}>
            {children}
        </withUser.Provider>
    )
}

export default withUser