import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authProvider";
import { HiShoppingCart } from "react-icons/hi";
import useCards from "../hooks/useCards";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [card]=useCards();
  console.log(card);
  const handelLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const links = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order/salad">Order</Link>
      </li>
      <li>
        <Link to="/sequer">Secquert Recipi</Link>
      </li>
      <Link to='/dashboard/mylist'>
      <button className="btn">
       <HiShoppingCart></HiShoppingCart>
        <div className="badge badge-secondary">+{card.length}</div>
      </button>
      </Link>
      {user ? (
        <>
          <Link to="/login" onClick={handelLogOut}>
            Log Out
          </Link>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Log in</Link>
          </li>
          <li>
            <Link to="/singIn">sing In</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar fixed bg-black  z-10 bg-opacity-50 container mx-auto rounded-xl text-white">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">BisTo Boss</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
    </div>
  );
};

export default Navbar;
