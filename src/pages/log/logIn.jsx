import React, { useContext, useEffect, useRef, useState } from 'react'
import Swal from 'sweetalert2'

import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../context/authProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const LogIn = () => {
  const captchaRef=useRef(null);
  const [disable,setDisable]=useState(true);
  const {signIn}=useContext(AuthContext);
  const navigate=useNavigate();

  const location =useLocation();
  const from= location.state?.from?.pathname || "/"
  // captcha loading  for 6 carecters
  useEffect(()=>{
    loadCaptchaEnginge(6); 
  },[])
  // log in user 
  const handelLogIn=(e)=>{
    e.preventDefault();
    const email=e.target.email.value;
    const password=e.target.password.value;
    console.log(password,email)
    signIn(email,password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "You are Log in successfully",
        showConfirmButton: false,
        timer: 1500
      });
      setTimeout(()=>{

        navigate(from,{replace: true})
      },2000)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }
  const handelvalidateCaptcha=(e)=>{
    e.preventDefault();
    const user_captcha_value=captchaRef.current.value;
    if(validateCaptcha(user_captcha_value)){
      setDisable(false)
    }
    console.log(user_captcha_value);
  }
  return (
    <>
    <Helmet>
      <title>Boss || Log In</title>
    </Helmet>
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handelLogIn}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        {/* captcha filed */}
        <div className="form-control">
          <label className="label">
          <LoadCanvasTemplate />
          </label>
          <input ref={captchaRef} type="capthcha" placeholder="capthcha" name='capthcha' className="input input-bordered" required />
        </div>
        <button className="btn btn-outline btn-success btn-xs text-white"  onBlur={handelvalidateCaptcha}>validate</button>
        <div className="form-control mt-6">
          <button disabled={disable} className="btn btn-primary">Login</button>
        </div>
      </form>
      <p>If you are already have an account please<Link to="/singIn" className='text-blue-500'> Sing Up</Link></p>
    </div>
  </div>
</div>
    </>
  )
}

export default LogIn
