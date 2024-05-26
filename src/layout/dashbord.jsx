import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { FaCartPlus, FaHome } from "react-icons/fa";
import { MdFoodBank } from "react-icons/md";
import { MdOutlineReviews } from "react-icons/md";
import { CiBoxList } from "react-icons/ci";
import './style.css'
const Dashbord = () => {
  return (
    <div className='flex'>
        {/* dashbord sidebar */}
      <div className='min-h-screen bg-[#D1A054]'>
    
                <ul>
                    <li ><NavLink to="/dashboard/userhome" className='flex text-black items-center p-2 rounded-xl m-4'><FaHome></FaHome> User Home </NavLink></li>                
                    <li ><NavLink to="/dashboard/bookings" className='flex text-black  items-center p-2 rounded-xl m-4'><MdFoodBank></MdFoodBank> Bookings </NavLink></li>                
                    <li ><NavLink to="/dashboard/cart" className='flex text-black items-center p-2 rounded-xl m-4'><FaCartPlus></FaCartPlus> My card </NavLink></li>                
                    <li ><NavLink to="/dashboard/review" className='flex text-black items-center p-2 rounded-xl m-4'><MdOutlineReviews></MdOutlineReviews> Add review</NavLink></li>                
                    <li ><NavLink to="/dashboard/mylist" className='flex text-black  items-center p-2 rounded-xl m-4'><CiBoxList></CiBoxList> My List</NavLink></li>                
          
                <div class="divider"></div> 
                <li ><NavLink to="/" className='flex text-black items-center p-2 rounded-xl m-4'><FaHome></FaHome>Home </NavLink></li>                
                </ul>
            
      </div >
      {/* dashbord content */}
      <div className='flex-1'>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default Dashbord
