import React, { useContext, useEffect, useRef, useState } from 'react'

import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../context/authProvider';

const LogIn = () => {
  const captchaRef=useRef(null);
  const [disable,setDisable]=useState(true);
  const {singIn}=useContext(AuthContext);
  useEffect(()=>{
    loadCaptchaEnginge(6); 
  },[])
  const handelLogIn=(e)=>{
    e.preventDefault();
    const email=e.target.email.value;
    const password=e.target.password.value;
    console.log(password,email)
    singIn(email,password)
    then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
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
        <button className="btn btn-outline btn-success btn-xs text-white"  onClick={handelvalidateCaptcha}>validate</button>
        <div className="form-control mt-6">
          <button disabled={disable} className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
  )
}

export default LogIn