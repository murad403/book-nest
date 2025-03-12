import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { PiEyeSlashThin, PiEyeThin } from 'react-icons/pi';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Bounce, toast } from 'react-toastify';


const AdminLogin = () => {
    const { register, handleSubmit} = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState("");
    const date = new Date().getFullYear();
    const navigate = useNavigate();

    const onSubmit = async(data) =>{
        const response = await axios.post(`http://localhost:5000/api/auth/admin`, data, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        const auth = response.data;
        if(auth.token){
            localStorage.setItem("token", auth.token);
            setTimeout(() =>{
                localStorage.removeItem("token");
                alert("Token is expired please login again");
                navigate("/");
            }, 3600 * 1000)
        }
        toast.success('Google Login Successful!!!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
        navigate("/dashboard");
    }
    return (
        <div className='h-screen flex items-center justify-center'>
            <div className='w-full md:w-1/4 shadow-md rounded-sm px-8 py-6 space-y-2'>
                <h2 className='text-2xl font-medium text-gray-700'>Admin Dashboard Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className='text-sm block font-bold text-gray-700' htmlFor="email">Username</label>
                        <input className='appearance-none outline-none border border-gray-500 px-3 w-full py-[2px] rounded-sm focus:shadow' type="text" {...register("userName", {required: true})} placeholder='Username' />
                    </div>
                    <div className='relative'>
                        <label className='text-sm block font-bold text-gray-700 mt-2' htmlFor="email">Password</label>
                        <input className='appearance-none outline-none border border-gray-500 px-3 w-full py-[2px] rounded-sm focus:shadow' type={`${showPassword ? "text" : "password"}`} {...register("password", {required: true})} placeholder='Password' />
                        <span className='absolute top-7 right-1' onClick={() =>setShowPassword(!showPassword)}>
                            {
                                showPassword ? <PiEyeThin></PiEyeThin> : <PiEyeSlashThin></PiEyeSlashThin>
                            }
                        </span>
                    </div>
                    {
                        message && <p className='text-sm font-semibold text-red-500 mt-2'>{message}</p>
                    }
                    <div>
                        <input className='bg-blue-600 mt-2 text-white font-semibold hover:bg-blue-700 px-4 py-[2px] rounded-sm cursor-pointer w-full' type="submit" value={"Login"} />
                    </div>
                </form>
                <p className='text-center text-sm'>&copy;{date} Book Store. All right reserved</p>
            </div>
        </div>
    );
};

export default AdminLogin;