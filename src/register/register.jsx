import React, { useContext } from 'react';
import singInImg from "../assets/singIn/AdobeStock_121324332_Preview.jpeg";
import { useForm } from "react-hook-form";
import {Link, Navigate, useNavigate} from "react-router-dom"
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../context/authProvider';

const Register = () => {
  const {createUser}=useContext(AuthContext);
  const navegate=useNavigate()
  const { register, handleSubmit, watch, formState: { errors },reset } = useForm();
  
  const onSubmit = (data) => {
    // console.log(data);
    createUser(data.email, data.password)
    .then((result)=>{
      const loggedUser=result.user;
      navegate("/")
      // console.log(loggedUser)
    })
    reset()
  };

  return (
    <>
     <Helmet>
      <title>Boss || Sing In</title>
    </Helmet>
    <div className="hero min-h-screen" style={{ backgroundImage: `url(${singInImg})` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl">
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
                {...register("name", { required:true })}
              
              />
              {errors.name && <span className='text-red-500'>This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                placeholder="Email"
                name="email"
                className="input input-bordered"
                required
              />
              {errors.email && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", { required:true,maxLength: 20,minLength:8,pattern: /(?=.*?[A-Z])(?=.*?[A-Z])(?=.*?[0-9])/ })}
                placeholder="Password"
                name="password"
                className="input input-bordered"
                
              
              />
              {errors.password?.type==="pattern"
               && <span className='text-red-500'>Your password shouuld be one Upper case, lower case and one number</span>}
              {errors.password?.type==="required"
               && <span className='text-red-500'>This field is required</span>}
              {errors.password?.type==="minLength"
               && <span className='text-red-500'>Your password should at least 8 ceracter</span>}
               {errors.password?.type==="maxLength"
               && <span className='text-red-500'>Your password should under 20 ceracter</span>}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sing Up</button>
            </div>
          </form>
           <p>If you are already have an account please<Link to="/login" className='text-blue-500'> logIn</Link></p>
           
        </div>
      </div>
    </div>
    </>
  );
};

export default Register;
