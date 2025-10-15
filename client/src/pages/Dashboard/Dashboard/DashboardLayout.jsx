import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { GoFileDirectory } from "react-icons/go";
import { BsBarChartFill } from "react-icons/bs";
import { MdHistory } from "react-icons/md";
import { AiOutlineDotChart } from "react-icons/ai";
import { IoIosNotificationsOutline, IoIosLogOut  } from "react-icons/io";
import './DashboardLayout.css';
import profile from '../../../assets/banner/attractive-young-men-black-isolated-white-background_58409-11027.avif';

const DashboardLayout = () => {
    return (
        <main className='bg-slate-200 min-h-screen'>
            {/* top section */}
            <section className='flex items-center'>
                <div className='flex justify-center items-center min-w-[60px] h-[60px] bg-blue-600 text-white font-semibold'>
                    <Link to={'/'}>Book <br /> Nest</Link>
                </div>
                <div className='bg-white h-[60px] w-full flex justify-end'>
                    <div className='flex gap-5 items-center'>
                        <div className='flex items-center gap-4'>
                            <div>
                                <h2 className='text-[16px] font-semibold text-gray-700'>Murad</h2>
                                <p className='text-sm font-medium text-gray-600'>Student</p>
                            </div>
                            <img className='w-10 h-10 border border-blue-500 rounded-full' src={profile} alt="" />
                        </div>
                        <div className='h-full w-[2px] bg-red-300'></div>
                        <div className='text-xl flex gap-2 pr-5'>
                            <button className='cursor-pointer hover:bg-gray-300 rounded-full p-2'><IoIosNotificationsOutline></IoIosNotificationsOutline></button>
                            <button className='cursor-pointer hover:bg-gray-300 rounded-full p-2'><IoIosLogOut ></IoIosLogOut></button>
                        </div>
                    </div>
                </div>
            </section>
            {/* side section */}
            <section className='flex'>
                <div className='min-h-screen'>
                    <ul className='flex flex-col gap-5 bg-gray-800 text-white w-[60px] h-full items-center pt-10 text-xl'>
                        <li><NavLink to={'add-book'}><GoFileDirectory></GoFileDirectory></NavLink></li>
                        <li><NavLink to={'/dashboard'}><BsBarChartFill></BsBarChartFill></NavLink></li>
                        <li><NavLink to={'manage-book/edit-book/:id'}><MdHistory></MdHistory></NavLink></li>
                        <li><NavLink to={'manage-book'}><AiOutlineDotChart></AiOutlineDotChart></NavLink></li>
                    </ul>
                </div>
                <Outlet></Outlet>
            </section>
        </main>
    );
};

export default DashboardLayout;