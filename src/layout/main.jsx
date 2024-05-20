import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../global/navbar'
import Footer from '../global/footer'
const Main = () => {
  return (
    <div className='container mx-auto'>

      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Main
