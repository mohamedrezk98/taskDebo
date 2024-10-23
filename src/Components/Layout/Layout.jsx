import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'

function Layout() {
    return <>
       <NavBar/>
       <Outlet></Outlet>
    
    </>
}

export default Layout