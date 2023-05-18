import React from 'react'
import DesktopView from './views/Desktop'
import MobileView from './views/Mobile'
import MediaQuery from 'react-responsive'

function Home() {
    return (
        <>
            <MediaQuery minWidth={992}>
                <DesktopView />
            </MediaQuery>
            <MediaQuery maxWidth={991}>
                <MobileView />
            </MediaQuery>
        </>
    )
}

export default Home