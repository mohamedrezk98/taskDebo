import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <div className='container-fuild mx-auto py-2 px-4 fixed top-0 right-0 left-0 bg-slate-200	'>
            <ul className='flex flex-wrap justify-around  items-center'>
                <li className='text-slate-900 font-normal text-lg '>
                    <NavLink to=''>Home</NavLink>
                </li>
                <li className='text-slate-900 font-normal text-lg '>
                <NavLink to='Datails'>Datails</NavLink>

                </li>
                <li className='text-slate-900 font-normal text-lg '>
                <NavLink to='NotFound'>Not  Found</NavLink>

                </li>
                
            </ul>
        </div>
    )
}

export default NavBar
