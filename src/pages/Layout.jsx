import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Layout = () => {
    return (
        <div className='dark:bg-[#101010] transition-colors duration-200'>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default Layout