import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

const Root = () => {
  return (
    <div className='max-w-6xl mx-auto'>
        <h2>This is Root</h2>
        <Navbar/>
        <Outlet/>
        <Footer/>
      
    </div>
  )
}

export default Root
