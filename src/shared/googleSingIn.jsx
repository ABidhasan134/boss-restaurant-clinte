import React, { useContext } from 'react'
import { FaGoogle } from 'react-icons/fa'
import { AuthContext } from '../context/authProvider'

const GoogleLogIn = () => {
    const {googleSingIn}=useContext(AuthContext);
    const handelLoginGoogle=()=>{
            // console.log("click")
            googleSingIn()
            .then((result)=>{
                console.log(result.user);
            })
    }
  return (
    <button className="btn" onClick={handelLoginGoogle}>
              <FaGoogle></FaGoogle> Google
            </button>
  )
}

export default GoogleLogIn
