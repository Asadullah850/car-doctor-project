import React, { useContext, useState } from 'react';
import login from '../../public/login.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaFacebookF, FaGithub } from "react-icons/fa";
import { AuthContext } from '../Provider/AuthProvider';
import SocialTab from '../Shared/SocialTab';


const Login = () => {
    const { singInUser } = useContext(AuthContext)
    const [error, setError] = useState('')
    const location = useLocation()
    const navigate = useNavigate()
    // console.log(location);

    let from = location.state?.from?.pathname || "/";

    const handelLogin = (event) => {
        event.preventDefault();
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        const user = { email, password }

        singInUser(email, password)
        .then((userCredential) => {
            // Signed in 
            const users = userCredential.user;
            navigate(from, { replace: true }); 
            
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage)
          });
    }
    return (
        <div className=" text-center mt-2">
            <h1 className="text-5xl font-bold">Sign In!</h1>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content my-2 flex-col lg:flex-row">
                    <div className="text-center lg:text-left">

                        <img src={login} alt="" srcset="" />
                    </div>
                    <form onSubmit={handelLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    <Link to='/register' className="label-text-alt link link-hover text-blue-600">I Have Not Account</Link>
                                </label>
                                <p>{error}</p>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary border-none bg-[#FF3811]">Sign In</button>
                            </div>
                            <SocialTab setError={setError}></SocialTab>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;