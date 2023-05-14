import React from 'react'
import Actions from './Actions'
import Slider from './Slider'
const MODE = import.meta.env.MODE
const SERVER_URL = import.meta.env.SERVER_URL

function Listing() {
    return (
        <div>
            mode: { MODE } - { SERVER_URL}
        </div>
    )
}

export default Listing