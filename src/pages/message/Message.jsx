import React from 'react'
import { Desktop } from './views/Desktop'
import { Mobile } from './views/Mobile'
import MediaQuery from 'react-responsive'

export function Message() {
    return (
        <>
            <MediaQuery minWidth={992}>
                <Desktop />
            </MediaQuery>
            <MediaQuery maxWidth={991}>
                <Mobile />
            </MediaQuery>
        </>
    )
}

export default Message
