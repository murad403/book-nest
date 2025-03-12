import React, { useEffect, useState } from 'react';
import axios from "axios";
import Loading from '../../../components/Loading';
import { Link } from 'react-router-dom';
import { CiEdit } from "react-icons/ci";
import { IoMdAdd, IoMdTrendingUp, IoMdTrendingDown } from "react-icons/io";
import { BiPieChartAlt } from "react-icons/bi";
import { IoBookOutline } from "react-icons/io5";

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
            <div className='flex flex-col md:flex-row gap-3 justify-between items-center'>
                <div className='text-gray-700'>
                    <h1 className='text-3xl font-semibold'>DashBoard</h1>
                    <p className='text-lg font-light'>Book Store Inventory</p>
                </div>
                <div className='flex gap-3 items-center'>
                    <Link className='border-2 border-fuchsia-700 text-fuchsia-500 flex gap-2 items-center p-1 px-3 rounded-sm font-semibold hover:bg-gray-300'><CiEdit></CiEdit>Edit Book</Link>
                    <Link className=' text-white bg-fuchsia-500 flex gap-2 items-center p-1 border-2 border-gray-600 px-3 rounded-sm font-semibold hover:bg-fuchsia-400'><IoMdAdd></IoMdAdd>Manage Book</Link>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default DashBoard;