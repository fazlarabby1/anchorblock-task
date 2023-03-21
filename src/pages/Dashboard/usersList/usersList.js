import React from 'react';
import profileImg from '../../../assets/Profile.jpg';
import { HiDotsHorizontal } from "react-icons/hi";

const UsersList = () => {

    const sellers = [
        {
            name: "Rahim",
            email: "rahim@jashim.com"

        },
        {
            name: "Rahim",
            email: "rahim@jashim.com"

        },
        {
            name: "Rahim",
            email: "rahim@jashim.com"

        },
        {
            name: "Rahim",
            email: "rahim@jashim.com"

        },
    ]
    return (
        <div>
            <div className='mt-14 lg:ml-14'>
                <h2 className="text-xl font-semibold mb-6">All Users List</h2>
                <div className="overflow-x-auto mr-6">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th>#ID</th>
                                <th>USER</th>
                                <th>EMAIL</th>
                                <th>OPTION</th>
                            </tr>
                        </thead>
                        <tbody className='text-sm font-semibold'>
                            {
                                sellers.map((seller, i) => <tr key={seller._id} className="hover">
                                    <th>{i + 1}</th>
                                    <td>
                                        <div className='flex items-center gap-5'>
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-[60px] h-[60px]">
                                                    <img src={profileImg} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <p>{seller.name}</p>
                                        </div>
                                    </td>
                                    <td>{seller.email}</td>
                                    <td>{<button className=' btn-lg btn-ghost'><HiDotsHorizontal /></button>}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UsersList;