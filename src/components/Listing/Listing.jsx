import React from 'react'
import Actions from './Actions'
import Slider from './Slider'
const MODE = import.meta.env.MODE

function Listing() {
    return (
        <div>
            {MODE}
        </div>
    )
}

export default Listing