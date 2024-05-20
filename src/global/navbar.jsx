import React from 'react'

const Navbar = () => {
    const links=<>
    <li><a>Link</a></li>
      <li><a>Link</a></li>
      <li><a>Link</a></li>
    </>
  return (
    <div className="navbar bg-black  z-10 bg-opacity-50 container mx-auto rounded-xl text-white">
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
