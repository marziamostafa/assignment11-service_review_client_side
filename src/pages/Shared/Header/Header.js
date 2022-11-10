import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/logo.jpg'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const manueItems = <>
        <li className='text-xl font-semibold'><Link to='/'>Home</Link></li>
        {
            user?.email ?
                <>
                    <li className='text-xl font-semibold'><Link to='/addservice'>Add Service</Link></li>

                    <li className='text-xl font-semibold'><Link to='/myreviews'>My Reviews</Link></li>

                    <li className='text-xl font-semibold'><Link to='/blog'>Blog</Link></li>
                </>
                :
                <li className='text-xl font-semibold'><Link to='/blog'>Blog</Link></li>
        }

    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {manueItems}
                    </ul>
                </div>
                <Link className='flex justify-around'>
                    <img className='h-16 w-16 bg-white' src={logo} alt="" />
                    <span className="btn btn-ghost normal-case text-5xl">Foodie</span>

                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {manueItems}
                </ul>
            </div>
            <div className="navbar-end">

                {
                    user?.email ?
                        <>
                            <Link onClick={handleSignOut} className='btn btn-outline btn-ghost text-xl'>Sign out</Link>
                        </>
                        :
                        <Link className='btn btn-outline btn-ghost text-xl' to='/login'>Log In</Link>
                }

                {/* <Link className='btn btn-outline btn-ghost text-xl' to='/login'>Log In</Link> */}
            </div>
        </div>
    );

};

export default Header;

