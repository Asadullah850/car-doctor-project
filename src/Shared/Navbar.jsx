import React, { useContext } from 'react';
import logo from '../../public/logo.svg';
import { HiOutlineBriefcase } from "react-icons/hi2";
import { NavLink, Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Navbar = () => {

    const { userSingOut, user } = useContext(AuthContext)
    const navBar = [
        { label: 'Home', url: '/' },
        { label: 'About', url: '/about' },
        { label: 'Services', url: '/services' },
        { label: 'Blog', url: '/contact' },
        { label: 'Contact', url: '/contact' },
    ]
    const handelLogout = () => {
        userSingOut()
            .then(() => {
                // Sign-out successful.
                Swal.fire({
                    // position: 'top-end',
                    icon: 'success',
                    title: 'Your are logout',
                    showConfirmButton: false,
                    // timer: 1500
                })
            })
            .catch((error) => {
                // An error happened.
            });
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden h-12">
                            <img src={logo} alt="" srcset="" className='h-10' />
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                {
                                    navBar.map(nav => <NavLink className="m-1" to={nav.url}>{nav.label}</NavLink>)
                                }
                            </li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl max-sm:hidden">
                        <img src={logo} alt="" srcset="" className=' h-10' />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            {
                                navBar.map(nav => <NavLink className="m-1" to={nav.url}>{nav.label}</NavLink>)
                            }
                        </li>
                    </ul>
                    <HiOutlineBriefcase className='m-2 w-6 h-6'></HiOutlineBriefcase>
                    <div className="">
                        <input type="text" placeholder="Search" className="input input-bordered w-[120px]" />
                    </div>
                </div>

                <div className="navbar-end dropdown">
                    <label tabIndex={0} className="btn btn-ghost">
                        <div className="w-">
                            <a className="btn border-2">Appointment</a>
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            user ?
                                <>
                                    <li>{user?.displayName}</li>
                                    <li><a>{user?.email}</a></li>
                                    <li><Link to='/bookings'>My All Bookings</Link></li>
                                    <li><button onClick={handelLogout}><Link to='/'>Logout</Link></button></li>
                                </>
                                :
                                <>
                                    <li><Link to='/login'>Login</Link></li>
                                    <li><Link to='/register'>Registration</Link></li>
                                </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;