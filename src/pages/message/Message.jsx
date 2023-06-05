import React from 'react'
import { Desktop } from './views/Desktop'
import { Mobile } from './views/Mobile'
import MediaQuery from 'react-responsive'
import ProvideMsg from '@contexts/ProvideMsg'

export function Message() {
    return (
        <ProvideMsg>
            <MediaQuery minWidth={992}>
                <Desktop />
            </MediaQuery>
            <MediaQuery maxWidth={991}>
                <Mobile />
            </MediaQuery>
        </ProvideMsg>
    )
}

export default Message
