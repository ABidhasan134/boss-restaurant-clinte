import React, { useContext } from 'react';
import singInImg from "../assets/singIn/AdobeStock_121324332_Preview.jpeg";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../context/authProvider';
import useAxiousPublic from '../hooks/useAxiousPublic';

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const axiosPublic = useAxiousPublic();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const result = await createUser(data.email, data.password);
      const loggedUser = result.user;
      await updateUser(loggedUser, { displayName: data.name });

      const userInfo = { email: data.email, name: data.name };
      const response = await axiosPublic.post("/users", userInfo);
      console.log(response.data);

      navigate("/");
    } catch (error) {
      console.error("Error creating or updating user:", error);
    }

    reset();
  };

  return (
    <>
      <Helmet>
        <title>Boss || Sign In</title>
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
                  className="input input-bordered"
                  {...register("name", { required: true })}
                />
                {errors.name && <span className='text-red-500'>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered"
                  {...register("password", {
                    required: true,
                    maxLength: 20,
                    minLength: 8,
                    pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])/
                  })}
                />
                {errors.password?.type === "pattern" && <span className='text-red-500'>Your password should contain at least one uppercase letter, one lowercase letter, and one number.</span>}
                {errors.password?.type === "required" && <span className='text-red-500'>This field is required</span>}
                {errors.password?.type === "minLength" && <span className='text-red-500'>Your password should be at least 8 characters long</span>}
                {errors.password?.type === "maxLength" && <span className='text-red-500'>Your password should be under 20 characters long</span>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>
            <p>If you already have an account, please <Link to="/login" className='text-blue-500'>log in</Link></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
