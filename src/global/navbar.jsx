import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    const links=<>
      <li><Link to="/">Home</Link></li>
    <li><Link to="/menu">Our Menu</Link></li>
    <li><Link to="/order">Order</Link></li>
    </>
  return (
    <div className="navbar fixed bg-black  z-10 bg-opacity-50 container mx-auto rounded-xl text-white">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">BisTo Boss</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      {links}      
    </ul>
  </div>
</div>
  )
}

export default Navbar
