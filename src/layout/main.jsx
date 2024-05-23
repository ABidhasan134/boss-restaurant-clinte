import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../global/navbar'
import Footer from '../global/footer'
const Main = () => {
  const location = useLocation();
  const removeHeadandFoot=location.pathname.includes("/login") || location.pathname.includes("/singIn")
  return (
    <div className='container mx-auto'>

      {removeHeadandFoot||<Navbar></Navbar>}
      <Outlet></Outlet>
      {removeHeadandFoot|| <Footer></Footer>}
     
    </div>
  )
}

export default Main
