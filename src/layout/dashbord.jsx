import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { FaCartPlus, FaHome, FaList, FaPhone } from "react-icons/fa";
import { MdFoodBank } from "react-icons/md";
import { MdOutlineReviews } from "react-icons/md";
import { CiBoxList } from "react-icons/ci";
import './style.css'
import { CiShop } from "react-icons/ci";
import useAdmin from '../hooks/useAdmin';
import { RiUserAddFill } from "react-icons/ri";

const Dashbord = () => {
  const [isAdmin] =useAdmin();
  // console.log(isAdmin);
  return (
    <div className='flex'>
        {/* dashbord sidebar */}
      <div className='min-h-screen bg-[#D1A054]'>
    
                {
                  isAdmin?<ul>
                  <li ><NavLink to="/dashboard/userhome" className='flex text-black items-center p-2 rounded-xl m-4'><FaHome></FaHome> Admain Home </NavLink></li>                     
                  <li ><NavLink to="/dashboard/adduser" className='flex text-black  items-center p-2 rounded-xl m-4'><RiUserAddFill></RiUserAddFill>Add user</NavLink></li>                
                  <li ><NavLink to="/dashboard/cart" className='flex text-black items-center p-2 rounded-xl m-4'><FaCartPlus></FaCartPlus> Manage Items </NavLink></li>                
                  <li ><NavLink to="/dashboard/review" className='flex text-black items-center p-2 rounded-xl m-4'><MdOutlineReviews></MdOutlineReviews> Manage Bookings</NavLink></li>                
                  <li ><NavLink to="/dashboard/allUser" className='flex text-black  items-center p-2 rounded-xl m-4'><CiBoxList></CiBoxList>All user</NavLink></li>                
        
              </ul>:<></>
                }
                <div class="divider"></div> 
                <li ><NavLink to="/" className='flex text-black items-center p-2 rounded-xl m-4'><FaHome></FaHome>Home </NavLink></li>                
                <li ><NavLink to="/dashboard/myCart" className='flex text-black  items-center p-2 rounded-xl m-4'><CiBoxList></CiBoxList>My Order</NavLink></li>                
                <li ><NavLink to="/" className='flex text-black items-center p-2 rounded-xl m-4'><FaList></FaList>Menu </NavLink></li>                
                <li ><NavLink to="/" className='flex text-black items-center p-2 rounded-xl m-4'><CiShop></CiShop>shop </NavLink></li>                
                <li ><NavLink to="/" className='flex text-black items-center p-2 rounded-xl m-4'><FaPhone></FaPhone>contact </NavLink></li>                
            
      </div >
      {/* dashbord content */}
      <div className='flex-1'>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default Dashbord
