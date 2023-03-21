import React, { useEffect, useState } from 'react';
import { HiDotsHorizontal } from "react-icons/hi";
import axios from 'axios';

const UsersList = () => {

    const [allData, setAllData] = useState([]);
    const [page, setPage] = useState(1);
    const url = `https://reqres.in/api/users?page=${page}`;

    useEffect(() => {
        axios.get(url)
            .then(res => setAllData(res.data));
    }, [url]);
    const users = allData.data;

    const { per_page, total, total_pages } = allData;


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
                                users?.map((user) => <tr key={user.id} className="hover">
                                    <th>{user.id}</th>
                                    <td>
                                        <div className='flex items-center gap-5'>
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-[60px] h-[60px]">
                                                    <img src={user.avatar} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <p>{user.name}</p>
                                        </div>
                                    </td>
                                    <td>{user.email}</td>
                                    <td>{<button className=' btn-lg btn-ghost'><HiDotsHorizontal /></button>}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
                <div className='mt-12'>
                    <nav aria-label="Pagination" className="inline-flex -space-x-px rounded-md shadow-sm dark:bg-gray-800 dark:text-gray-100">
                        <button type="button" className="inline-flex items-center px-2 py-2 text-sm font-semibold border rounded-l-md dark:border-gray-700">
                            <span className="sr-only">Previous</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-5 h-5">
                                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path>
                            </svg>
                        </button>
                        {
                            [...Array(total_pages).keys()].map(number =>
                                <button
                                    onClick={() => setPage(number + 1)}
                                    key={number} type="button" aria-current="page" className={(page === number + 1) ? "bg-blue-400 text-white fw-semibold px-4 py-2" : "inline-flex items-center px-4 py-2 text-sm font-semibold border dark:bg-violet-400 dark:text-gray-900 dark:border-gray-700"}
                                >{number + 1}</button>
                            )
                        }


                        <button type="button" className="inline-flex items-center px-2 py-2 text-sm font-semibold border rounded-r-md dark:border-gray-700">
                            <span className="sr-only">Next</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-5 h-5">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default UsersList;