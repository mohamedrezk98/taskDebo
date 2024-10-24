import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from "react";

import './App.css'
import Home from './Components/Home/Home'
import Datails from './Components/Datails/Datails'
import NotFound from './Components/NotFound/NotFound'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
 let route= createHashRouter([
  {
    path: '', element: <Layout />, children: [
      { index:true, element: <Home /> },
      { path:'home', element: <Home /> },
      { path: 'Datails', element: <Datails /> },
      { path: '*', element: <NotFound /> },
    ],
  }

])

function App() {

  return <RouterProvider router={route}>


  </RouterProvider>
}

export default App
