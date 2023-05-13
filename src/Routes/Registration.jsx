import { React, useContext, useState } from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebookF, FaGithub } from "react-icons/fa";
import { AuthContext } from '../Provider/AuthProvider';
import SocialTab from '../Shared/SocialTab';

const Registration = () => {
    const [error, setError] = useState('')

    const { createNewUser } = useContext(AuthContext)

    const handelRegister = (event) => {
        event.preventDefault();
        console.log(event.target);
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const user = { name, password }

        createNewUser(email, password)
            .then(result => console.log(result))
            .then(error => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
    }
    return (
        <div className=" text-center mt-2">
            <h1 className="text-5xl font-bold">Registration!</h1>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content my-2 flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <Player
                            autoplay
                            loop
                            src="registration.json"
                            style={{ height: '300px', width: '300px' }}
                        >
                        </Player>
                    </div>
                    <form onSubmit={handelRegister} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name='name' className="input input-bordered" />
                            </div>
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
                                <input type="text" placeholder="password" name='password' className="input input-bordered" />
                                <label className="label">
                                    <Link to='/login' className="label-text-alt link link-hover text-blue-600">I Have An Account</Link>
                                </label>
                                <p className='my-4'>{error}</p>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary border-none bg-[#FF3811]">Sign Up</button>
                            </div>
                            <SocialTab></SocialTab>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;