import React from 'react'
import Actions from './Actions'
import Slider from './Slider'
const MODE = import.meta.env.MODE
const VITE_ENV = import.meta.env.VITE_ENV

function Listing() {
    return (
        <div>
            ENV: {MODE} - {VITE_ENV}
        </div>
    )
}

export default Listing