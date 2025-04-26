import React, { useEffect, useState } from 'react';
import axios from "axios";
import Loading from '../../../components/Loading';
import { IoMdTrendingUp, IoMdTrendingDown, IoMdAdd } from "react-icons/io";
import { BiPieChartAlt } from "react-icons/bi";
import { IoBookOutline } from "react-icons/io5";
import Chart from '../../../components/Chart';
import { CiEdit } from "react-icons/ci";
import { Link } from 'react-router-dom';

const DashBoard = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(null);
    useEffect( () =>{
        axios.get("http://localhost:5000/api/admin", {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json"
            }
        })
        .then(res =>{
            setData(res.data);
            setLoading(false);
        })
    }, [])
    if(loading){
        return <Loading></Loading>
    }
    
    return (
        <div className='p-7 w-full'>
            <div className='flex flex-col md:flex-row gap-3 justify-between items-center px-10'>
                <div className='text-gray-700'>
                    <h1 className='text-3xl font-semibold'>DashBoard</h1>
                    <p className='text-lg font-light'>Book Store Inventory</p>
                </div>
                <div className='flex gap-3 items-center'>
                    <Link to={'manage-book'} className='border-2 border-fuchsia-700 text-fuchsia-500 flex gap-2 items-center p-1 px-3 rounded-sm font-semibold hover:bg-gray-300'><CiEdit></CiEdit>Manage Book</Link>
                    <Link to={'add-book'} className=' text-white bg-fuchsia-500 flex gap-2 items-center p-1 border-2 border-gray-600 px-3 rounded-sm font-semibold hover:bg-fuchsia-400'><IoMdAdd></IoMdAdd>Add Book</Link>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 my-4'>
                <div className='flex items-center bg-white justify-start py-3 pl-8 rounded-sm gap-5'>
                    <div className='bg-fuchsia-200 p-2 rounded-full'>
                        <IoBookOutline className='text-xl text-fuchsia-500'></IoBookOutline>
                    </div>
                    <div className=''>
                        <p className='text-lg font-semibold'>{data?.totalBooks}</p>
                        <p className='text-[15px] font-thin'>Products</p>
                    </div>
                </div>
                <div className='flex items-center bg-white justify-start py-3 pl-8 rounded-sm gap-5'>
                    <div className='bg-green-200 p-2 rounded-full'>
                        <IoMdTrendingUp className='text-xl text-green-500'></IoMdTrendingUp>
                    </div>
                    <div className=''>
                        <p className='text-lg font-semibold'>{data?.totalSales}</p>
                        <p className='text-[15px] font-thin'>Total Sales</p>
                    </div>
                </div>
                <div className='flex items-center bg-white justify-start py-3 pl-8 rounded-sm gap-5'>
                    <div className='bg-red-200 p-2 rounded-full'>
                        <IoMdTrendingDown className='text-xl text-red-500'></IoMdTrendingDown>
                    </div>
                    <div className=''>
                        <p className='text-lg font-semibold'>{data?.trendingBooks}</p>
                        <p className='text-[15px] font-thin'>Trending Books in this Month</p>
                    </div>
                </div>
                <div className='flex items-center bg-white justify-start py-3 pl-8 rounded-sm gap-5'>
                    <div className='bg-blue-200 p-2 rounded-full'>
                        <BiPieChartAlt className='text-xl text-blue-500'></BiPieChartAlt>
                    </div>
                    <div className=''>
                        <p className='text-lg font-semibold'>{data?.totalOrders}</p>
                        <p className='text-[15px] font-thin'>Total Orders</p>
                    </div>
                </div>
            </div>
            <div className=''>
                <Chart></Chart>
            </div>
        </div>
    );
};

export default DashBoard;