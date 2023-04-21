import React from 'react'
import Header from '../containers/Header'
import Footer from '../containers/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
            <Header />
                <Outlet />
            <Footer />
        </>
    )
}

export default Layout