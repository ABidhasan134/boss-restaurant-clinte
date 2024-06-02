import React, { useContext } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { FaCartPlus, FaHome, FaList, FaPhone } from "react-icons/fa";
import { MdFoodBank } from "react-icons/md";
import { MdOutlineReviews } from "react-icons/md";
import { CiBoxList } from "react-icons/ci";
import './style.css'
import { CiShop } from "react-icons/ci";
import useAdmin from '../hooks/useAdmin';
import { RiUserAddFill } from "react-icons/ri";
import { AuthContext } from '../context/authProvider';

const Dashbord = () => {
  const [isAdmin] =useAdmin();
  const {user}=useContext(AuthContext);
  // console.log(isAdmin);
  return (
    <div className='flex'>
        {/* dashbord sidebar */}
      <div className='min-h-screen bg-[#D1A054]'>
    
                {
                  user && isAdmin?<ul>
                  <li ><NavLink to="/dashboard/adminhome" className='flex text-black items-center p-2 rounded-xl m-4'><FaHome></FaHome> Admain Home </NavLink></li>                     
                  <li ><NavLink to="/dashboard/adduser" className='flex text-black  items-center p-2 rounded-xl m-4'><RiUserAddFill></RiUserAddFill>Add user</NavLink></li>                
                  <li ><NavLink to="/dashboard/manageItems" className='flex text-black items-center p-2 rounded-xl m-4'><FaCartPlus></FaCartPlus> Manage Items </NavLink></li>                
                  <li ><NavLink to="/dashboard/review" className='flex text-black items-center p-2 rounded-xl m-4'><MdOutlineReviews></MdOutlineReviews> Manage Bookings</NavLink></li>                
                  <li ><NavLink to="/dashboard/allUser" className='flex text-black  items-center p-2 rounded-xl m-4'><CiBoxList></CiBoxList>All user</NavLink></li>                
        
              </ul>:<></>
                }
                {
                  user && !isAdmin?<div>
                    <li ><NavLink to="/" className='flex text-black items-center p-2 rounded-xl m-4'><FaHome></FaHome>Home </NavLink></li>                
                <li ><NavLink to="/dashboard/myCart" className='flex text-black  items-center p-2 rounded-xl m-4'><CiBoxList></CiBoxList>My Order</NavLink></li>                
                <li ><NavLink to="/dashboard/PaymentHistory" className='flex text-black items-center p-2 rounded-xl m-4'><FaList></FaList>Payment History </NavLink></li>       
                  </div>:<></>
                }
                <div class="divider"></div> 
                <li ><NavLink to="/" className='flex text-black items-center p-2 rounded-xl m-4'><FaHome></FaHome>Home </NavLink></li>                
                <li ><NavLink to="/dashboard/myCart" className='flex text-black  items-center p-2 rounded-xl m-4'><CiBoxList></CiBoxList>My Order</NavLink></li>                
                <li ><NavLink to="/dashboard/PaymentHistory" className='flex text-black items-center p-2 rounded-xl m-4'><FaList></FaList>Payment History </NavLink></li>                
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
