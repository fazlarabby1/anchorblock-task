import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IoNotificationsOutline } from "react-icons/io5";
import profile from '../../assets/Profile.jpg';
import stack from '../../assets/paper 1.png';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';
import auth from '../../firebase/firebase.config';
import { signout } from '../../features/auth/authSlice';

const Navbar = () => {

    const { email } = useSelector(state => state.auth);
    const dispatch = useDispatch(state=> state.auth)

    const handleSingOut = () =>{
        signOut(auth)
        .then(()=>{
            dispatch(signout());
        })
    }

    const menuItems = <>
        {email ? <>
        <li><p><IoNotificationsOutline className='text-lg' /></p></li>
        <li><NavLink className={({ isActive }) => isActive ? 'btn btn-ghost text-orange-300 rounded' : 'btn btn-ghost'} to='/dashboard'>Dashboard</NavLink></li>
        <li>
            <div className="avatar">
                <div className="w-12 rounded-full">
                    <img alt='' src={profile} />
                </div>
            </div>
        </li>
        <li>
            <button onClick={handleSingOut} className='btn btn-outline btn-warning rounded'>Sign Out</button>
        </li>
        </> :
        <li className='bg-blue-50 rounded' tabIndex={0}>
            <a href='/'>
                English (UK)
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </a>
            <ul className="bg-sky-100 rounded">
                <li><a href='/'>Bangla</a></li>
            </ul>
        </li>}
    </>

    return (
        <div className="navbar text-black px-6">
            <div className="mr-24">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-blue-600 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <img src={stack} alt="" />
                <Link to='/' className="btn btn-ghost normal-case text-3xl font-bold text-slate-500">Stack</Link>
            </div>
            <div className="hidden lg:w-full lg:flex lg:justify-between">
                <div className="relative">
                    <span className="absolute inset-y-0 right-2 flex items-center pl-2">
                        <button type="submit" title="Search" className="p-1 focus:outline-none focus:ring">
                            <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 dark:text-gray-100">
                                <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                            </svg>
                        </button>
                    </span>
                    <input type="search" name="Search" placeholder="Search..." className="w-32 lg:w-[539px] lg:h-14 py-2 pl-4 text-sm rounded-md sm:w-auto focus:outline-none border bg-blue-50" />
                </div>
                <div>
                    <ul className="menu menu-horizontal p-0 items-center">
                        {menuItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;