import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { CiUser } from "react-icons/ci";
import { MdOutlineReceiptLong } from "react-icons/md";

const Sidebar = () => {

    return (
        <div className='bg-gray-50 col-span-2 h-screen sticky top-0'>
            <ul className='flex flex-col gap-2 w-full h-full font-medium p-3 text-xs'>
                <h1 className='my-1'>PAGES</h1>
                <li>
                    <NavLink
                        className={({ isActive }) => isActive ? 'btn btn-ghost rounded' : 'hover:bg-primary hover:text-white bg-primary/10 transition-all w-full py-2 px-3 rounded-full'}
                        to=""
                    >
                        <RxDashboard className='w-4 h-4 mr-3' /> Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) => isActive ? 'bg-primary/10 rounded-full transition-all w-full py-2 px-3 flex items-center' : 'hover:bg-primary hover:text-white py-2 px-3 w-full rounded-full flex items-center'}
                        to="users-list"
                    >
                        <CiUser className='w-4 h-4 mr-3' /> Users List
                    </NavLink>
                </li>
                <li>
                    <Link
                        className='hover:bg-primary hover:text-white py-2 px-3 w-full rounded-full flex items-center'
                    >
                        <MdOutlineReceiptLong className='w-4 h-4 mr-3' /> <span>Sales</span>
                    </Link>
                </li>


            </ul>
        </div>
    );
};

export default Sidebar;