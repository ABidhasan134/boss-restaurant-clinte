import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../global/navbar'
import Footer from '../global/footer'
const Main = () => {
  const location = useLocation();
  console.log(location.pathname)
  const removeHeadandFoot=location.pathname.includes("/login")
  return (
    <div className='container mx-auto'>

      {removeHeadandFoot||<Navbar></Navbar>}
      <Outlet></Outlet>
      {removeHeadandFoot|| <Footer></Footer>}
     
    </div>
  )
}

export default Main
