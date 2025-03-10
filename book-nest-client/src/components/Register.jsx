import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { PiEyeThin, PiEyeSlashThin  } from "react-icons/pi";
import { useAuth } from '../Providers/AuthProvider';
import { Bounce, toast } from 'react-toastify';

const Register = () => {
    const date = new Date().getFullYear();
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState("");
    const {createUser, googleLogin} = useAuth();
    const { register, handleSubmit} = useForm();
    const navigate = useNavigate();

    const onSubmit = async(data) =>{
        const email = data.email;
        const password = data.password;
        try {
            await createUser(email, password);
            toast.success('Registered Successful!!!', {
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
            navigate('/');
        } catch (error) {
            setMessage("Please provide a valid Email and Password");
            console.log(error);
        }
    }
    const handleGoogleLogin = () =>{
        try {
            googleLogin()
            .then(res =>{
                if(res){
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
                    navigate('/');
                }
            })
        } catch (error) {
            toast.error('Failed to Google Login!', {
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
            console.log(error)
        }
    }
    return (
        <div className='h-[calc(100vh-120px)] flex items-center justify-center'>
            <div className='w-full md:w-1/4 shadow-md rounded-sm px-8 py-6 space-y-2'>
                <h2 className='text-2xl font-medium text-gray-700'>Register Now</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className='text-sm block font-bold text-gray-700' htmlFor="email">Email</label>
                        <input className='appearance-none outline-none border border-gray-500 px-3 w-full py-[2px] rounded-sm focus:shadow' type="email" {...register("email", {required: true})} placeholder='Email Address' />
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
                        <input className='bg-blue-600 mt-2 text-white font-semibold hover:bg-blue-700 px-4 py-[2px] rounded-sm cursor-pointer' type="submit" value={"Register"} />
                    </div>
                </form>
                <p className='text-sm'>Have an account? please <Link to={'/login'} className='text-blue-600  font-semibold'>Login</Link></p>
                <button onClick={handleGoogleLogin} className='flex items-center gap-2 bg-cyan-900 text-white justify-center py-[4px] rounded-sm w-full cursor-pointer text-sm hover:bg-blue-600'><FaGoogle></FaGoogle><span>Sign in with google</span></button>
                <p className='text-center text-sm'>&copy;{date} Book Store. All right reserved</p>
            </div>
        </div>
    );
};

export default Register;